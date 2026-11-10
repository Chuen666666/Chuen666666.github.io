# Repository Agent Guidelines

## Scope

These instructions apply to the entire repository. If a subdirectory contains its own `AGENTS.md`, follow both files and give the more specific rules precedence within that subdirectory.

## Project Overview

- This is the Hexo 8 static blog named `淳の神奇小網站`. Its primary content language is Traditional Chinese (`zh-TW`).
- The production URL is `https://chuen666666.com`, and the time zone is `Asia/Taipei`.
- The site uses the Fluid theme. Site-wide settings live in `_config.yml`; theme settings live in `themes/fluid/_config.yml`.
- GitHub Actions uses Node.js 24. A push to `main` builds and deploys the site to GitHub Pages.

## Editing Principles

- Before editing, read `package.json`, the applicable configuration, and nearby files. Preserve established formatting and naming conventions.
- Write website copy and public-facing project documentation in Traditional Chinese. Keep AI instruction and maintenance-policy files, including `AGENTS.md` and `SECURITY.md`, in English.
- Do not rewrite the author's voice, experiences, or claims unless requested.
- Change only files required by the task. Treat existing uncommitted workspace content as user data; do not overwrite or remove it.
- Do not edit `node_modules/`, `public/`, `.deploy_git/`, or `db.json` directly. They are installation, build, or deployment artifacts.
- Never commit credentials, webhook URLs, tokens, or other secrets. Workflow secrets must be referenced through GitHub Actions Secrets.
- Give new assets clear, stable names and verify that filename casing exactly matches every reference. GitHub Pages runs in a case-sensitive environment.

## Post Editing

- Posts in `source/_posts/` must wrap YAML front matter between matching `---` delimiters.
- Preserve the existing field formats. Use `YYYY-MM-DD HH:mm:ss` for `date`, YAML lists for `categories` and `tags`, and booleans for `math`, `mermaid`, and `hide`.
- If `excerpt` is present, it must be a non-empty string. Omit the field entirely when no excerpt exists; an empty `excerpt:` may make Hexo fail with `null is not a string`.
- Do not invent first-person experiences, scores, event details, or personal information unless the user supplies them or explicitly asks for fictional content.
- Images normally belong in `source/img/`, and videos belong in `source/video/`. Use site-root paths such as `/img/example.jpg` in posts and verify exact filename casing.
- Preserve the meaning of existing Markdown, HTML, Liquid or Hexo tags, and `{% raw %}` blocks. Do not broadly rearrange posts merely for formatting consistency.

## Common Commands

```bash
npm ci
npm run server
npm run clean
npm run build
```

If Windows PowerShell execution policy blocks `npm.ps1`, use the corresponding `npm.cmd` command, such as `npm.cmd run build`.

## Validation Requirements

- Run at least `npm run build` for ordinary content or configuration changes.
- For dependency changes, update `package-lock.json` with npm and then perform a clean installation and build.
- After changing CSS, JavaScript, templates, or the theme, use the local server to inspect the home page, post pages, and affected pages at desktop and mobile sizes in addition to running the build.
- If an existing content error blocks validation, report the exact file, diagnostic, and other completed checks. Do not mix unrelated repairs into the task.
- After editing a post, verify that front matter has no unintended empty values. Locally preview its title, excerpt, table of contents, code blocks, media, and internal links.

## Git and Deployment

- Do not commit artifacts excluded by `.gitignore`.
- Do not push, deploy, or trigger external notifications unless the user explicitly authorizes it.
- `npm run deploy` writes to a remote deployment repository. Run it only with explicit authorization.
- `npm run p` stages every change, creates a commit, and pushes it. Do not use it as an ordinary validation command.

## Dependency Security

- Read `SECURITY.md` before changing Hexo or related plugins. Update the register whenever an advisory, dependency path, production boundary, or risk decision changes.
- Do not use `npm audit fix --force` or downgrade Hexo or a plugin to an older major merely to clear audit findings.
- Validate a compatible fix with `npm ci`, `npm run clean`, and `npm run build`. Confirm the generated static site before marking an accepted risk as resolved.
