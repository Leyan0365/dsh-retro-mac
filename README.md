<h3 align="center">
	<img src="https://raw.githubusercontent.com/Leyan0365/dsh-retro-mac/main/assets/preview.svg" width="720" alt="Preview"/><br/>
	Retro Macintosh for <a href="https://github.com/deepseek-ai/deepseek-harness">DeepSeek Harness</a>
</h3>

<p align="center">
	<em>Work like it's 1997. · 像 1997 年那样工作。</em>
</p>

<p align="center">
	<a href="https://github.com/Leyan0365/dsh-retro-mac/stargazers"><img src="https://img.shields.io/github/stars/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=b7bdf8"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/forks"><img src="https://img.shields.io/github/forks/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=cba6f7"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/issues"><img src="https://img.shields.io/github/issues/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=f5a97f"></a>
	<a href="https://github.com/Leyan0365/dsh-retro-mac/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Leyan0365/dsh-retro-mac?style=for-the-badge&colorA=363a4f&colorB=a6da95"></a>
</p>

<p align="center">
	English | <a href="README.zh.md">中文</a>
</p>

A classic **Mac OS 8/9 Platinum** skin for the DeepSeek Harness Web GUI — a trip back to 1997: platinum greys, Chicago/Geneva/Monaco type, pinstripe wallpaper, beveled controls and hard shadows.

> ⭐ If you enjoy it, give the repo a star — it helps more people discover the plugin.

## Why you'll love it

- **Nostalgia, done right** — a faithful System 7 → Mac OS 9 design language, not just a grey theme: platinum chrome, classic fonts, pinstripe desktop, beveled buttons, hard shadows.
- **Completely self-contained** — the Chicago web font is inlined as base64 and the pinstripe is pure CSS. The whole plugin is one 47KB file, **zero external assets, zero downloads**.
- **Four themes in one** — `Platinum` (light) and `Graphite` (dark), each with **Classic Blue** or **System Teal** highlights, an homage to the Appearance Manager's customizable accent palette.
- **Immersive** — all 103 design tokens the web shell consumes are remapped; no modern DeepSeek blue-grey leaks through.
- **Respects your defaults** — switching back to the built-in appearance restores it pixel-identical, no injected styles remain.

## Features

- **Two skins, four themes** — `Platinum` (light) / `Graphite` (dark) × `Classic Blue` / `System Teal`.
- **Full token coverage** — every one of the 103 design tokens is remapped; verified at build time.
- **Chicago web font, zero external assets** — the free ChicagoFLF clone is inlined as a base64 `@font-face`; Geneva and Monaco come from the OS with graceful fallbacks.
- **Pinstripe desktop** — the iconic System 7 / Mac OS 8 wallpaper in pure CSS, no image downloads, no licensing issues.
- **Beveled Platinum controls** — buttons with the classic 2px inset highlight/shadow bevel, double-rule default buttons, sunken inputs, square scrollbars with black arrow glyphs, hard `2px 2px 0` drop shadows, near-zero border radius.
- **Barber-pole progress** — indeterminate progress indicators render as the classic striped marquee.
- **Happy Mac easter egg** — an optional startup splash (inlined SVG, off by default) with a toggle in the settings row.
- **Your choice is remembered** — skin, accent and splash persist per browser in `localStorage`.
- **Zero intrusion on Default** — switch back anytime; pixel-identical restore.
- **Accessible** — respects `prefers-reduced-motion`; micro-interactions disabled on request.

## Requirements

- DeepSeek Harness web profile (`dsh web` / `dsh --profile web`)
- Any modern browser (ES modules + CSS custom properties)

## Installation

```bash
# from your harness checkout (the npm exec wrapper that boots `dsh`)
dsh plugin --profile web add dsh-retro-mac
```

Or add it by hand in the profile's `package.json`:

```json
{
  "dependencies": {
    "dsh-retro-mac": "^0.1.0"
  }
}
```

Then restart the web profile and refresh the page. A **Retro Mac** settings row appears with:

- **Skin**: `System` (built-in), `Platinum`, `Graphite`
- **Accent**: `Classic Blue`, `System Teal`
- **Splash**: Happy Mac startup screen toggle

## Development

```bash
# rebuild lib/client.js from src + themes (zero-dependency, plain Node)
npm run build

# syntax-check the generated bundles
npm run check
```

The build validates that every generated theme covers the full 103-key baseline and inlines the Chicago font, so a stale or partial theme fails loudly.

## License

[MIT](LICENSE) © dsh-retro-mac contributors
