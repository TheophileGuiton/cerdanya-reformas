# Cerdanya Reformes (by Cerdanya Privé) — Claude Code starter kit

| File | Purpose |
|---|---|
| `PROMPT-START.md` | **The first prompt to paste**, plus the follow-up prompts |
| `CLAUDE.md` | Rules for every session: stack, pages, design, lead capture, i18n, SEO, quality gates |
| `PRODUCT.md` | Business, differentiators, audience, services, lead form fields, tone — fix the [TO CONFIRM] items |
| `DESIGN.md` | "Pedra i Llum" tokens: colors, type, layout, photography, components, motion |
| `SEO.md` | URL map in ES/CA/FR, keyword → page mapping, titles, town pages, first journal articles |
| `content-seed/projects.md` | 7 fictional placeholder projects (flagged as concept), incl. one in Font-Romeu |
| `content-seed/image-prompts.md` | AI image style guide, prompts per project, file names and sizes |
| `references/NOTES.md` | Inspiration references and what to borrow |
| `.mcp.json`, `.claude/settings.json` | MCP servers and permissions (deploy always asks, secrets blocked) |
| `setup.sh` | Installs plugins and skills once |
| `.env.local.example`, `.gitignore` | Env template and ignores |

## Start
```bash
cd cerdanya-reformes-starter
git init
chmod +x setup.sh && ./setup.sh
claude
```
Then paste the prompt from `PROMPT-START.md`.
