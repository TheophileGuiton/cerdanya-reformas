#!/usr/bin/env bash
# One-time setup of Claude Code add-ons. Run from the project root.
# Requires: Node 20+, pnpm, Claude Code CLI.
set -euo pipefail

echo "→ Official plugins"
claude plugin install frontend-design@claude-plugins-official --scope project
claude plugin install context7@claude-plugins-official --scope project

echo "→ Impeccable (design critique/polish) — read its SKILL.md before installing"
claude plugin marketplace add pbakaus/impeccable
echo "   Then inside Claude Code: /plugin → Discover → install 'impeccable' (project scope)"

echo "→ Official GSAP and shadcn skills"
npx skills add greensock/gsap-skills
npx skills add shadcn/ui

echo "→ Optional Figma: claude plugin install figma@claude-plugins-official --scope project"
echo "   and add \"figma\" to enabledMcpjsonServers in .claude/settings.json"

echo "→ Security scan of installed skills"
if command -v uvx >/dev/null 2>&1; then
  uvx mcp-scan@latest --skills || true
else
  echo "   (install uv to run: uvx mcp-scan@latest --skills)"
fi

cat <<'EOF'

Done. Next:
  1. Fill the [TO CONFIRM] items in PRODUCT.md, add screenshots to references/
  2. claude   →   /mcp   (authenticate Vercel)
  3. Paste the prompt from PROMPT-START.md
EOF
