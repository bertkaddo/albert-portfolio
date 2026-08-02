import Image from "next/image";
import type { Block, Section } from "@/data/projects";

/* Renders one content block. Every project detail page is assembled
   from these, so adding a project never means writing JSX. */

function FigureCard({
  src,
  caption,
  contain,
}: {
  src: string;
  caption: string;
  contain?: boolean;
}) {
  return (
    <figure className="figure-frame">
      <div className={contain ? "bg-white p-3" : "bg-white"}>
        <Image
          src={src}
          alt={caption}
          width={1400}
          height={1000}
          className={
            contain
              ? "w-full h-auto max-h-[30rem] object-contain"
              : "w-full h-auto object-cover"
          }
        />
      </div>
      <figcaption className="figure-caption">{caption}</figcaption>
    </figure>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <p className="text-[17px] leading-[1.75] text-[#3a4552]">
          {block.text}
        </p>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol className="space-y-3">
            {block.items.map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-[13px] font-semibold text-[#153D63] pt-0.5 shrink-0 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[17px] leading-[1.7] text-[#3a4552]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        );
      }
      return (
        <ul className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4">
              <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-[#153D63] shrink-0" />
              <span className="text-[17px] leading-[1.7] text-[#3a4552]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );

    case "figure":
      return (
        <FigureCard
          src={block.src}
          caption={block.caption}
          contain={block.contain}
        />
      );

    case "figures":
      return (
        <div className="grid md:grid-cols-2 gap-5">
          {block.items.map((item) => (
            <FigureCard
              key={item.src}
              src={item.src}
              caption={item.caption}
              contain={item.contain}
            />
          ))}
        </div>
      );

    case "table":
      return (
        <div className="overflow-x-auto rounded border border-[#d2d9e1] bg-white">
          <table className="data-table">
            <thead>
              <tr>
                {block.head.map((h) => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr
                  key={i}
                  className={block.highlight === i ? "is-highlight" : undefined}
                >
                  {row.map((cell, j) => (
                    <td key={j}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "equation":
      return <div className="equation">{block.lines.join("\n")}</div>;

    case "callout":
      return (
        <aside className="callout">
          <p className="text-[17px] leading-[1.7]">{block.text}</p>
        </aside>
      );

    default:
      return null;
  }
}

export default function ProjectBody({ sections }: { sections: Section[] }) {
  return (
    <div className="space-y-16">
      {sections.map((section) => (
        <section
          key={section.n}
          id={`section-${section.n}`}
          className="scroll-mt-28"
        >
          <div className="flex items-baseline gap-4 mb-6">
            <span className="font-mono text-sm font-semibold text-[#153D63] tabular-nums">
              {section.n}
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-ink leading-tight">
              {section.title}
            </h2>
          </div>
          <div className="space-y-6 md:pl-12">
            {section.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
