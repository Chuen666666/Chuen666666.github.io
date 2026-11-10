# Dependency Security and Accepted Risks

Last reviewed: 2026-11-10

## Policy

- Use `package-lock.json` and `npm ci` to reproduce the GitHub Pages build environment.
- GitHub Dependabot checks npm and GitHub Actions weekly. Vulnerability alerts and automated security updates are enabled.
- Do not use `npm audit fix --force` or major-version downgrades merely to report zero findings.
- A patched dependency set must pass a clean installation, Hexo clean/build, and generated-artifact checks before an accepted risk is closed.

## Risk Snapshot on 2026-11-10

`npm audit` reported 9 low-severity affected package nodes. All nine originate from one root advisory propagating through the Hexo dependency tree; they are not nine unrelated vulnerabilities.

### deepmerge Prototype Poisoning

- Advisory: [GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4)
- Root package: `deepmerge` versions 4.2.0 through 4.3.1.
- Dependency path: `deepmerge` through `hexo-util` and `hexo-fs` into Hexo, its CLI, deployer, feed generator, sitemap generator, and Markdown renderer.
- Impact: `mergeObject()` may poison the prototype of its returned object when it processes a crafted object.
- Production boundary: These Node packages execute only while GitHub Actions builds the static site. GitHub Pages serves generated HTML, CSS, JavaScript, and media; it does not run Hexo or deepmerge for visitor requests.
- Status: Temporarily accepted. The audit-suggested paths downgrade Hexo 8 or related plugins to older major versions, and no patched deepmerge version is currently available for a direct override.

## Existing Mitigations

- Posts, configuration, and the theme come from the protected repository. Visitors cannot submit runtime objects to Hexo's merge process.
- Pull requests perform build validation only. GitHub Pages deployment occurs only from protected `main`.
- Branch protection requires the `build` check and prevents force-pushes and deletion of `main`.
- Deployment artifacts exclude `node_modules`, the Hexo CLI, and build-time configuration objects.

## Re-evaluation Triggers

Re-evaluate this register when any of the following occurs:

- deepmerge or the Hexo dependency tree publishes a compatible fix that does not require a downgrade.
- Dependabot opens a corresponding security-update pull request.
- The build starts processing untrusted content or configuration from outside the repository.
- The advisory severity increases, or a new high or critical advisory appears.
- Hexo, the theme, a renderer, a deployer, or the GitHub Pages workflow receives a major update.

Run the following validation during re-evaluation:

```bash
npm ci
npm audit --json
npm run clean
npm run build
```
