import React from "react";
import katex from "katex";

/* =============================================================
   MATH RENDERING

   Equations are authored as LaTeX and rendered with KaTeX. These
   are server components, so every expression is turned into HTML
   during `next build` — no math library ships to the browser and
   there is nothing to hydrate.

   Two entry points:
     <EquationBlock lines={[...]} />  display math, one row per
                                      entry; an empty string is a
                                      vertical gap between groups
     <MathText text="..." />          prose with \( ... \) spans

   Inline math uses the \( \) delimiters rather than $ because the
   project copy quotes dollar costs ("a $75 materials budget"), and
   $-delimiters would swallow the text between two of them.

   KaTeX's own stylesheet is imported once in app/layout.tsx.
   ============================================================= */

const OPTIONS = {
  throwOnError: false,
  /* `strict: false` keeps unicode that is already correct in the
     source (°, ∞, −) from raising console warnings at build time. */
  strict: false,
} as const;

function tex(source: string, displayMode: boolean): string {
  return katex.renderToString(source, {
    ...OPTIONS,
    displayMode,
    /* Display equations are flush left to match the surrounding
       body copy rather than centred in the block. */
    fleqn: displayMode,
  });
}

export function EquationBlock({ lines }: { lines: string[] }) {
  return (
    <div className="equation">
      {lines.map((line, i) =>
        line.trim() === "" ? (
          <div key={i} className="equation-gap" aria-hidden="true" />
        ) : (
          <div
            key={i}
            className="equation-line"
            dangerouslySetInnerHTML={{ __html: tex(line, true) }}
          />
        ),
      )}
    </div>
  );
}

/* Plain-text form of a string that may contain \( ... \) spans, for
   the places that cannot hold markup: <meta> descriptions and image
   alt text. KaTeX's MathML output already carries the resolved
   characters, so stripping its tags turns \Delta v into "Δv" without
   anyone maintaining a symbol table by hand. The <annotation> element
   goes first — it holds the original LaTeX source. */
export function mathToPlainText(text: string): string {
  if (!text.includes("\\(")) return text;

  return text.replace(/\\\(([\s\S]+?)\\\)/g, (_match, expr: string) =>
    katex
      .renderToString(expr, { ...OPTIONS, output: "mathml" })
      .replace(/<annotation[\s\S]*?<\/annotation>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/ /g, " ")
      .trim(),
  );
}

/* Splits body text on \( ... \) and renders each span as inline math.
   Text with no delimiters passes through untouched, so callers can
   route every string through this without checking first. */
export function MathText({ text }: { text: string }) {
  if (!text.includes("\\(")) return <>{text}</>;

  const parts = text.split(/\\\(([\s\S]+?)\\\)/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span
            key={i}
            dangerouslySetInnerHTML={{ __html: tex(part, false) }}
          />
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        ),
      )}
    </>
  );
}
