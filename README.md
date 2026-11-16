# OpenCode 550P Logo Plugin

将 OpenCode Desktop（v2.2.0+）界面中的内置 OpenCode Logo、启动画面与 Wordmark 替换为 `550P.svg` 的 GUI 插件（`./gui-experimental`）。

## 目录结构

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

## 在装有 OpenCode Desktop 的电脑上构建与启用

1. 将整个 `OpenCode550P` 文件夹复制到目标电脑（例如 `C:\plugins\OpenCode550P` 或 `~/OpenCode550P`）。
2. 在插件目录下安装依赖并构建：

```bash
bun install
bunx vite build
```

构建完成后会生成 `dist/gui-experimental.cjs`（开发调试时可用 `bunx vite build --watch`）。

3. 在 OpenCode 全局配置文件中启用该插件（注意桌面端只读取 `opencode.json` / `opencode.jsonc`）：
   - Windows: `%USERPROFILE%\.config\opencode\opencode.jsonc`
   - macOS / Linux: `~/.config/opencode/opencode.jsonc`

```jsonc
{
  "plugins": [
    "/你的路径/OpenCode550P"
  ]
}
```

4. 重启 OpenCode Desktop，即可在 **Settings > Extensions > Plugins** 中看到 `custom-550p-logo` 的加载状态，界面上的 Logo 与启动动画也会替换为 `550P.svg`。
