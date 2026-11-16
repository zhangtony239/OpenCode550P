# OpenCode 550P Logo Plugin

**English** | [中文](README_zh.md)

A GUI plugin (`./gui-experimental`) for OpenCode Desktop (v2.2.0+) that replaces the built-in OpenCode Logo, Splash Screen, and Wordmark with `550P.svg`.

## Directory Structure

```text
OpenCode550P/
├── 550P.svg
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── gui.tsx
    └── custom-logo.css
```

## Build and Enable on OpenCode Desktop

1. Copy the entire `OpenCode550P` folder to the target machine (e.g., `C:\plugins\OpenCode550P` or `~/OpenCode550P`).
2. Install dependencies and build inside the plugin directory:

```bash
bun install
bunx vite build
```

This generates `dist/gui-experimental.cjs` (you can use `bunx vite build --watch` during development).

3. Enable the plugin in your global OpenCode configuration file (note that OpenCode Desktop only reads `opencode.json` / `opencode.jsonc`):
   - Windows: `%USERPROFILE%\.config\opencode\opencode.jsonc`
   - macOS / Linux: `~/.config/opencode/opencode.jsonc`

```jsonc
{
  "plugins": [
    "/path/to/OpenCode550P"
  ]
}
```

4. Restart OpenCode Desktop. You will see `custom-550p-logo` loaded under **Settings > Extensions > Plugins**, and the UI logo and splash animation will be replaced with `550P.svg`.
