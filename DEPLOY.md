# Deploying this portfolio

Written for:

- **GitHub username:** `bertkaddo`
- **Commit email:** `albertaddo1327@gmail.com`
- **Repository name:** `albert-portfolio`
- **macOS**

Follow the steps in order. Every command is meant to be run from inside the
`albert-portfolio` folder unless it says otherwise.

---

## Step 0 — Replace the placeholders first

The repository is about to become public. Two files are placeholders and must
be swapped before anyone can see them.

**Resume.** `public/AlbertAddoResume.pdf` is currently a single page reading
"PLACEHOLDER — REPLACE THIS FILE". Delete it and copy your real resume in under
that exact filename.

**Headshot.** `public/img/albert.jpg` is a navy tile with your initials, and it
is the hero image at the top of the home page — the first thing any visitor
sees. Replace it with a portrait at least 840 × 1050 pixels. It renders at a
4:5 aspect with `object-cover`, so a square photo gets cropped top and bottom.

Then check them:

```bash
cd ~/Downloads/albert-portfolio      # adjust if the folder lives elsewhere
open public/AlbertAddoResume.pdf     # should be your resume, not a placeholder
open public/img/albert.jpg           # should be you, not a navy tile
```

---

## Step 1 — Start the repository over

If you have already run `git init` in this folder, wipe the history and begin
clean. **This deletes only git's history, never your files.**

```bash
rm -rf .git
```

---

## Step 2 — Confirm the code is current

**Extract into an empty directory, never on top of an existing folder.**
Without `-o`, `unzip` asks about every file that already exists, and answering
"no" to some of them leaves new components beside old data files. That mixed
tree builds locally in some configurations and fails on Vercel at type-check.

```bash
cd ~/Downloads
rm -rf portfolio-latest
unzip -q albert-addo-portfolio.zip -d portfolio-latest
cd portfolio-latest/albert-portfolio
```

Now verify. Every one of these must match, or you are on a mixed tree:

```bash
grep -c "courses?: string\[\]" src/data/profile.ts     # 1
grep -c "albertaddo1327@gmail.com" src/data/profile.ts  # 1
grep -c "Teaching Assistant" src/data/profile.ts        # 1
grep -c "featured: true" src/data/projects.ts           # 6
grep -rl "github" src/                                  # prints nothing
grep -rl "Curtiss Wind Tunnel" src/                     # prints nothing
```

`BUILD.txt` in the project root records the revision, so you can always tell
two copies apart.

---

## Step 3 — Prove it builds

**Do not skip this.** `next build` runs the same TypeScript check Vercel runs.
Anything that fails on Vercel fails here first, in fifteen seconds, on your own
machine.

```bash
npm install
npm run build
```

Expect `✓ Compiled successfully` and `✓ Generating static pages (17/17)`.

---

## Step 4 — Commit under the right identity

Set the identity **before** committing, so the commit is authored correctly the
first time. `--local` scopes it to this repository and leaves your other
projects alone.

```bash
git init
git config --local user.name "Albert Addo"
git config --local user.email "albertaddo1327@gmail.com"
git add .
git commit -m "Portfolio site"
git branch -M main
```

Verify — this must print `Albert Addo <albertaddo1327@gmail.com>`:

```bash
git log -1 --format='%an <%ae>'
```

And confirm the commit contains 114 files with no `node_modules`:

```bash
git ls-files | wc -l          # 114
git ls-files | grep node_modules | wc -l    # 0
```

> **One requirement:** `albertaddo1327@gmail.com` must be listed and verified
> under **Settings → Emails** on the `bertkaddo` GitHub account. If it is not,
> the commit will show a faded generic avatar and will not count toward your
> contribution graph.

---

## Step 5 — Clear any stale GitHub credentials

This is the step that silently sends work to the wrong account. If this Mac has
ever pushed to GitHub under a different account, macOS Keychain still holds
that token and will use it no matter what Step 4 says.

```bash
printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain erase
```

Nothing prints. That is correct.

---

## Step 6 — Authenticate as `bertkaddo` and create the repository

### Recommended: GitHub CLI

It handles login, repository creation, and the first push in one pass, and it
tells you plainly which account you are using.

```bash
brew install gh
gh auth login
```

Answer the prompts: **GitHub.com** → **HTTPS** → **Yes** (authenticate git) →
**Login with a web browser**. Sign in as `bertkaddo` in the browser window.

Confirm the account before going further:

```bash
gh auth status
```

It must say `Logged in to github.com account bertkaddo`. If it names a
different account, run `gh auth logout` and repeat.

Now create the repository and push in a single command — no need to create
anything on the website first:

```bash
gh repo create albert-portfolio --public --source=. --remote=origin --push
```

Use `--private` instead of `--public` if you would rather keep the source
closed. Vercel deploys either one on the free tier.

### Alternative: without the CLI

1. Go to [github.com/new](https://github.com/new) while signed in as
   `bertkaddo`.
2. Name it `albert-portfolio`. Add **no** README, **no** .gitignore, **no**
   license — you already have them, and adding them creates a conflict.
3. Click **Create repository**.

```bash
git remote add origin https://github.com/bertkaddo/albert-portfolio.git
git push -u origin main
```

When prompted, the username is `bertkaddo` and the password is a **Personal
Access Token**, not your GitHub password. GitHub removed password
authentication in 2021. Create one at **Settings → Developer settings →
Personal access tokens → Tokens (classic)** with the `repo` scope.

---

## Step 7 — Check the push landed correctly

Open `https://github.com/bertkaddo/albert-portfolio` and confirm:

- The commit is attributed to **you**, with your avatar — not a faded generic
  one. A generic avatar means the email in Step 4 is not on this account.
- There is **no** `node_modules` folder.
- `public/AlbertAddoResume.pdf` is your real resume.

---

## Step 8 — Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. **Continue with GitHub**, signing in as `bertkaddo`.
3. Find `albert-portfolio` in the list and click **Import**. If it does not
   appear, click **Adjust GitHub App Permissions** and grant Vercel access to
   the repository.
4. **Change nothing.** Vercel detects Next.js and fills in the framework preset,
   the build command (`next build`), and the output directory by itself. There
   are no environment variables to set.
5. Click **Deploy**.

About a minute later you get a live URL, typically
`albert-portfolio.vercel.app`.

Click through the six featured project cards and confirm the detail pages load
and every figure appears.

---

## Step 9 — Publishing changes later

Every push to `main` redeploys automatically.

```bash
git add .
git commit -m "Describe what changed"
git push
```

Pushing to any other branch gives you a private preview URL instead, which is
useful for trying something before it goes live.

Run `npm run build` before every push. It takes fifteen seconds and catches
essentially everything Vercel would reject.

---

## Step 10 — Custom domain, if you want one

In the Vercel dashboard: **Settings → Domains → Add**. Enter the domain and
Vercel prints the exact DNS records to create at your registrar. HTTPS is
issued automatically once DNS resolves — usually minutes, occasionally up to a
day.

---

## Troubleshooting

**`nothing to commit, working tree clean`**
The commit already happened. Run `git log --oneline` to confirm, then continue
from Step 5.

**Push goes to the wrong account, or is rejected as unauthorized**
Stale Keychain credentials. Redo Step 5, then `gh auth status` to confirm the
active account. You can also open Keychain Access, search `github.com`, and
delete the entry by hand.

**Commits show a faded generic avatar on GitHub**
`albertaddo1327@gmail.com` is not verified on the `bertkaddo` account. Add it
under **Settings → Emails**, then fix the existing commit:

```bash
git commit --amend --reset-author --no-edit
git push --force-with-lease
```

**Build fails on Vercel but works locally**
Almost always filename case. macOS treats `Blade-Thrust.png` and
`blade-thrust.png` as the same file; Linux does not. If you renamed an image,
make sure `src/data/projects.ts` matches the real filename exactly.

**Images return 404 on the live site**
Paths must begin with `/img/` and the file must sit in `public/img/`. The word
`public` never appears in the URL.

**`gh: command not found`**
Homebrew is not installed, or not on your PATH. Install it from
[brew.sh](https://brew.sh), or use the alternative path in Step 6.

**`npm audit` reports vulnerabilities later**
Do **not** run `npm audit fix --force`. npm resolves Next.js advisories by
proposing a downgrade to `next@9.3.3`, a 2020 release that will not build this
project. Run `npm install next@latest` instead, then rebuild and check the site
still renders.
