// dsh-retro-mac — browser half (client plugin bundle). GENERATED FILE:
// run `node scripts/build.mjs` to regenerate lib/client.js from
// src/client.tpl.js + themes/*.json + src/ChicagoFLF.woff.
//
// Loaded by dsh-client-modules at /plugins/dsh-retro-mac/client.js and
// executed through the vendored cordis Loader's lazy-CJS module table
// (window.__ModuleLoader__.load). The factory body is plain CJS with
// require() resolved against the shell's module table.
//
// Persistence: skin, highlight accent and the splash toggle are stored in
// localStorage (the Host settings wire only exposes an allowlisted namespace
// set to browser clients).
window.__ModuleLoader__.load({
	id: "dsh-retro-mac",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
		Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
		let react_jsx_runtime = require("react/jsx-runtime");
		let _react = require("react");
		let _runtime_client = require("@deepseek-ai/dsh-client-runtime/client");

		//#region dsh-retro-mac: definitions
		/** The settings row's locale namespace. */
		const SETTINGS_NS = "settings.retroMac";
		/** localStorage key holding the selected skin ('platinum'|'graphite'|null=system). */
		const SKIN_KEY = "dsh-retro-mac:skin";
		/** localStorage key holding the highlight accent ('blue'|'teal'). */
		const ACCENT_KEY = "dsh-retro-mac:accent";
		/** localStorage key holding the Happy Mac splash toggle ('1'|'0'). */
		const SPLASH_KEY = "dsh-retro-mac:splash";
		/** Sentinel meaning "no custom skin — follow the built-in appearance". */
		const DEFAULT_SKIN = "system";
		const DEFAULT_ACCENT = "blue";
		/** Classic Happy Mac startup splash SVG (inline, no external asset). */
		const HAPPY_MAC_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 80" width="64" height="80">' +
			'<rect x="8" y="4" width="48" height="56" rx="4" fill="#d4d4d4" stroke="#888" stroke-width="2"/>' +
			'<rect x="12" y="8" width="40" height="36" rx="2" fill="#2a2a2a"/>' +
			'<circle cx="24" cy="24" r="4" fill="#fff"/><circle cx="40" cy="24" r="4" fill="#fff"/>' +
			'<path d="M22 34 Q32 42 42 34" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round"/>' +
			'<rect x="16" y="62" width="32" height="6" rx="2" fill="#d4d4d4" stroke="#888" stroke-width="1.5"/>' +
			'<rect x="24" y="68" width="16" height="4" rx="1" fill="#bbb" stroke="#888" stroke-width="1"/>' +
			'</svg>';

		/**
		 * The generated 4-theme catalog (platinum/graphite × blue/teal). Each
		 * entry is a third-party theme for the built-in ThemeRuntime with a
		 * full 103-token table (concrete CSS values, no var() indirection).
		 */
		const SKINS = __THEMES_JSON__;

		/** skin × accent → registered theme id (mirrors the catalog ids). */
		const THEME_MAP = {
			platinum: { blue: "retro-mac-platinum-blue", teal: "retro-mac-platinum-teal" },
			graphite: { blue: "retro-mac-graphite-blue", teal: "retro-mac-graphite-teal" }
		};

		/**
		 * Retro Macintosh enhancement stylesheet, injected while a Retro Mac
		 * skin is active and scoped under body[data-dsh-retro-mac] (set by
		 * apply, removed by the disposer) — selecting Default restores the
		 * document exactly. Recaptures the Platinum look: beveled controls,
		 * black hairlines, hard offset shadows, square-ish corners, Geneva/
		 * Chicago/Monaco type, and the pinstripe desktop.
		 *
		 * Selector hooks verified in the official UI sources by the reference
		 * themes: sidebar column = [class*='sidebarCol'], composer =
		 * [data-composer-card], tool rows = [data-tool], reasoning rows =
		 * [data-variant='think'], code blocks = .md-code-block, bubbles =
		 * [data-chat-flow-kind] [class*='bubble'], menus/dialogs = roles.
		 */
																										const RETRO_CSS = [
			"/* ════════════════════════════════════════════════════════════════",
			"   DeepSeek Harness — Retro Macintosh \"Platinum\" design system",
			"   Mac OS 8/9 Platinum Appearance · 1998 Power Macintosh grammar",
			"   Six-level greyscale: face / highlight / mid / shadow / dark / black",
			"   Hard 1–2px bevels only. No blur, no glass, no gradients-as-effect,",
			"   no translucency. Blue = system selection / highlight / focus ONLY.",
			"   Grid: 1/2/4/8/16px. Retina: integer 2× mapping.",
			"   ════════════════════════════════════════════════════════════════ */",
			"",
			"/* ——— Chicago system font (inlined as base64 data URI) ——— */",
			"@font-face {",
			"  font-family: 'Chicago';",
			"  src: url(__CHICAGO_FONT_URI__) format('woff');",
			"  font-weight: 400;",
			"  font-style: normal;",
			"}",
			"",
			"/* ——— Platinum tokens ——— */",
			"body[data-dsh-retro-mac] {",
			"  --pt-face: #e8e8e8;",
			"  --pt-highlight: #ffffff;",
			"  --pt-mid: #c0c0c0;",
			"  --pt-shadow: #808080;",
			"  --pt-dark: #404040;",
			"  --pt-black: #000000;",
			"  --pt-bevel-hi: #ffffff;",
			"  --pt-bevel-hi2: rgba(255, 255, 255, 0.45);",
			"  font-family: 'Geneva', 'Chicago', 'PingFang SC', 'Hiragino Sans GB', system-ui, sans-serif;",
			"}",
			"",
			"/* Kill every modern blur / glass / translucent effect. */",
			"body[data-dsh-retro-mac] *::after,",
			"body[data-dsh-retro-mac] *::before::after,",
			"body[data-dsh-retro-mac] *::after {",
			"  backdrop-filter: none !important;",
			"  -webkit-backdrop-filter: none !important;",
			"  text-shadow: none !important;",
			"}",
			"",
			"/* Type system: Chicago chrome · PingFang body · Monaco data. */",
			"body[data-dsh-retro-mac] [class*='sidebarCol'],",
			"body[data-dsh-retro-mac] [role='menu'],",
			"body[data-dsh-retro-mac] [role='tab'],",
			"body[data-dsh-retro-mac] button,",
			"body[data-dsh-retro-mac] [class*='wSkVaW_header'],",
			"body[data-dsh-retro-mac] [class*='wSkVaW_tab'],",
			"body[data-dsh-retro-mac] [class*='crumb'],",
			"body[data-dsh-retro-mac] h1,",
			"body[data-dsh-retro-mac] h2,",
			"body[data-dsh-retro-mac] h3 {",
			"  font-family: 'Chicago', 'Geneva', 'PingFang SC', 'Hiragino Sans GB', sans-serif;",
			"}",
			"body[data-dsh-retro-mac] code,",
			"body[data-dsh-retro-mac] pre,",
			"body[data-dsh-retro-mac] .md-code-block,",
			"body[data-dsh-retro-mac] [class*='o3BgMG_fileLink'],",
			"body[data-dsh-retro-mac] [class*='FJxK0a_root'] {",
			"  font-family: 'Monaco', 'SF Mono', Menlo, Consolas, monospace;",
			"}",
			"",
			"/* Links: black, underlined — blue never decorates links. */",
			"body[data-dsh-retro-mac] a { color: var(--pt-black); text-decoration: underline; }",
			"body[data-dsh-retro-mac] a:hover { color: var(--pt-black); }",
			"",
			"/* System selection: the ONLY blue in the interface. */",
			"body[data-dsh-retro-mac] ::selection { background: var(--dsw-alias-brand-primary); color: #fff; }",
			"",
			"/* ——— Desktop: pinstripe wallpaper behind the translucent canvas ——— */",
			".dsh-retro-wallpaper {",
			"  position: fixed;",
			"  inset: 0;",
			"  z-index: -1;",
			"  pointer-events: none;",
			"  background-color: #d8dee8;",
			"  background-image:",
			"    repeating-linear-gradient(90deg, rgba(120, 140, 170, 0.28) 0px, rgba(120, 140, 170, 0.28) 2px, rgba(120, 140, 170, 0.08) 2px, rgba(120, 140, 170, 0.08) 5px),",
			"    linear-gradient(180deg, #e6eaf0 0%, #d4dae4 100%);",
			"}",
			"body[data-dsh-retro-mac][data-ds-dark-theme] .dsh-retro-wallpaper {",
			"  background-color: #2e3238;",
			"  background-image:",
			"    repeating-linear-gradient(90deg, rgba(160, 180, 210, 0.16) 0px, rgba(160, 180, 210, 0.16) 2px, rgba(160, 180, 210, 0.04) 2px, rgba(160, 180, 210, 0.04) 5px),",
			"    linear-gradient(180deg, #3a3e46 0%, #262a30 100%);",
			"}",
			"",
			"/* ——— Striped Platinum title bar ———",
			"   Dense horizontal stripes, interrupted by the centred title plate.",
			"   Decorative close box (left) + zoom box (right); header padding",
			"   keeps real controls clear of them. */",
			"body[data-dsh-retro-mac] header {",
			"  position: relative;",
			"  background-color: var(--pt-face);",
			"  background-image: repeating-linear-gradient(180deg, rgba(0, 0, 0, 0.07) 0px, rgba(0, 0, 0, 0.07) 1px, transparent 1px, transparent 3px);",
			"  border-bottom: 1px solid #000;",
			"  padding-left: 28px;",
			"  padding-right: 28px;",
			"}",
			"/* Title plate interrupts the stripes; micro six-color brand stripe. */",
			"body[data-dsh-retro-mac] [class*='titleCluster'],",
			"body[data-dsh-retro-mac] [class*='crumb'] {",
			"  background: var(--pt-face);",
			"  text-align: center;",
			"}",
			"body[data-dsh-retro-mac] [class*='titleCluster']::after {",
			"  content: '';",
			"  display: block;",
			"  width: 96px;",
			"  height: 2px;",
			"  margin: 2px auto 0;",
			"  background: linear-gradient(90deg, #61BB46 0 16.66%, #FDB827 0 33.33%, #F5821F 0 50%, #E03A3E 0 66.66%, #963D97 0 83.33%, #009DDC 0 100%);",
			"}",
			"/* Hide the host's header sidebar-toggle: reads as a dead control. */",
			"body[data-dsh-retro-mac] header button[aria-label*='侧边栏'],",
			"body[data-dsh-retro-mac] header button[aria-label*='sidebar'] {",
			"  display: none;",
			"}",
			"/* Header controls stay flat so icons and the title read cleanly. */",
			"body[data-dsh-retro-mac] header button,",
			"body[data-dsh-retro-mac] [class*='wSkVaW_header'] button {",
			"  background: transparent;",
			"  border: none;",
			"  box-shadow: none;",
			"  border-radius: 3px;",
			"}",
			"body[data-dsh-retro-mac] header button:hover,",
			"body[data-dsh-retro-mac] [class*='wSkVaW_header'] button:hover {",
			"  background: var(--dsw-alias-interactive-bg-hover);",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"",
			"/* ——— Raised tabs (对话 / 轨迹): no modern underline; the active",
			"   tab merges with the content pane below. ——— */",
			"body[data-dsh-retro-mac] [class*='wSkVaW_tabs'],",
			"body[data-dsh-retro-mac] [role='tablist'] {",
			"  border-bottom: 1px solid #000;",
			"  background: transparent;",
			"  gap: 2px;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_tab'],",
			"body[data-dsh-retro-mac] [role='tab'] {",
			"  border-radius: 4px 4px 0 0;",
			"  border: 1px solid #000;",
			"  border-bottom: none;",
			"  background: var(--pt-mid);",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"  margin-bottom: -1px;",
			"  margin-right: 2px;",
			"  padding: 2px 12px;",
			"  color: var(--pt-dark);",
			"}",
			"/* Blue stays reserved for system highlight: grey out host badges. */",
			"body[data-dsh-retro-mac] [class*='badge'],",
			"body[data-dsh-retro-mac] [class*='Badge'] {",
			"  background: var(--pt-mid) !important;",
			"  color: #000 !important;",
			"  filter: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_tab']::after::after,",
			"body[data-dsh-retro-mac] [role='tab']::after {",
			"  display: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_tabActive'],",
			"body[data-dsh-retro-mac] [role='tab'][aria-selected='true'] {",
			"  background: var(--dsw-alias-bg-layer-1);",
			"  border-color: #000;",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi);",
			"  color: var(--pt-black);",
			"  position: relative;",
			"  z-index: 1;",
			"}",
			"",
			"/* ——— Desktop-app structure: Platinum grey work area +",
			"   recessed white conversation pane. ——— */",
			"body[data-dsh-retro-mac] [class*='wSkVaW_viewArea'] {",
			"  background: var(--pt-face);",
			"}",
			"body[data-dsh-retro-mac] [class*='Md3f7G_scroll'] {",
			"  background: var(--pt-highlight);",
			"  border: 1px solid #000;",
			"  box-shadow: inset 1px 1px 0 var(--pt-shadow), inset 2px 2px 0 rgba(0, 0, 0, 0.12);",
			"  margin: 8px;",
			"  border-radius: 0;",
			"}",
			"body[data-dsh-retro-mac] [class*='Md3f7G_column'] {",
			"  max-width: 1040px;",
			"  margin: 0 auto;",
			"  padding: 16px 8px;",
			"}",
			"@media (min-width: 1800px) {",
			"  body[data-dsh-retro-mac] [class*='Md3f7G_column'] { max-width: 1120px; }",
			"}",
			"/* Code / tools / logs may use the full pane width. */",
			"body[data-dsh-retro-mac] [class*='Md3f7G_column'] .md-code-block,",
			"body[data-dsh-retro-mac] [class*='Md3f7G_column'] [data-tool],",
			"body[data-dsh-retro-mac] [class*='Md3f7G_column'] [class*='o3BgMG_root'] {",
			"  max-width: none;",
			"  width: 100%;",
			"}",
			"",
			"/* ——— Tool rows: Finder / List View, not chips. Left 16px pixel",
			"   icon · action name · body · hairline divider. ——— */",
			"body[data-dsh-retro-mac] [class*='o3BgMG_root'],",
			"body[data-dsh-retro-mac] [data-tool],",
			"body[data-dsh-retro-mac] [data-variant='think'] {",
			"  border: none;",
			"  border-bottom: 1px solid var(--pt-mid);",
			"  border-radius: 0;",
			"  background: transparent;",
			"  box-shadow: none;",
			"  padding: 4px 8px;",
			"}",
			"body[data-dsh-retro-mac] [data-tool] [class*='o3BgMG_row'],",
			"body[data-dsh-retro-mac] [class*='o3BgMG_root'] [class*='o3BgMG_row'] {",
			"  border: none;",
			"  background: transparent;",
			"  box-shadow: none;",
			"  border-radius: 0;",
			"}",
			"/* Real execution actions (read/edit/bash/write) one weight up. */",
			"body[data-dsh-retro-mac] [data-tool] {",
			"  color: var(--pt-black);",
			"}",
			"/* Think: lighter grey, lower contrast. */",
			"body[data-dsh-retro-mac] [data-variant='think'],",
			"body[data-dsh-retro-mac] [class*='QWLzlG_root'] {",
			"  color: var(--pt-shadow);",
			"}",
			"body[data-dsh-retro-mac] [data-variant='think'] svg,",
			"body[data-dsh-retro-mac] [class*='QWLzlG_root'] svg {",
			"  opacity: 0.55;",
			"}",
			"/* File paths: light recessed highlight, never a box-in-box. */",
			"body[data-dsh-retro-mac] [class*='o3BgMG_fileLink'] {",
			"  border: none;",
			"  border-radius: 0;",
			"  background: var(--pt-highlight);",
			"  box-shadow: inset 1px 1px 0 var(--pt-mid);",
			"  padding: 0 4px;",
			"  font-size: 11px;",
			"}",
			"/* Errors: pixel Stop icon + grey body, red only on the label. */",
			"body[data-dsh-retro-mac] [data-state='error'],",
			"body[data-dsh-retro-mac] [data-state='error'] span,",
			"body[data-dsh-retro-mac] [data-state='error'] div,",
			"body[data-dsh-retro-mac] [data-state='error'] p {",
			"  color: var(--pt-dark);",
			"}",
			"body[data-dsh-retro-mac] [data-state='error'] [class*='leading'] svg {",
			"  display: none;",
			"}",
			"body[data-dsh-retro-mac] [data-state='error'] [class*='leading'] {",
			"  width: 16px;",
			"  height: 16px;",
			"  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Crect x='3' y='3' width='10' height='10' fill='%23E03A3E' stroke='%23000'/%3E%3Crect x='5' y='7' width='6' height='2' fill='%23fff'/%3E%3C/svg%3E\") center / 16px 16px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [data-state='error'] [class*='leading'] + * {",
			"  color: var(--dsw-alias-state-error-primary);",
			"}",
			"",
			"/* ——— Bubbles: flat dialog-grey with hard shadow ——— */",
			"body[data-dsh-retro-mac] [data-chat-flow-kind='user'] [class*='bubble'],",
			"body[data-dsh-retro-mac] [data-chat-flow-kind='steering'] [class*='bubble'] {",
			"  border-radius: 2px;",
			"  border: 1px solid rgba(0, 0, 0, 0.45);",
			"  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2);",
			"}",
			"",
			"/* ——— Code blocks: recessed monochrome well ——— */",
			"body[data-dsh-retro-mac] .md-code-block {",
			"  border-radius: 0;",
			"  border: 1px solid rgba(0, 0, 0, 0.35);",
			"  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.5), inset -1px -1px 0 rgba(0, 0, 0, 0.12);",
			"}",
			"",
			"/* ——— Push buttons: classic Mac bevel; default ring only for the",
			"   primary send action. ——— */",
			"body[data-dsh-retro-mac] button {",
			"  border-radius: 4px;",
			"  border: 1px solid #000;",
			"  color: var(--dsw-alias-label-primary);",
			"  background: var(--dsw-alias-button-elevated-fill);",
			"  box-shadow:",
			"    inset 1px 1px 0 var(--pt-bevel-hi),",
			"    inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"body[data-dsh-retro-mac] button:active {",
			"  transform: translate(1px, 1px);",
			"  box-shadow: inset 1px 1px 0 var(--pt-shadow), inset -1px -1px 0 #fff;",
			"}",
			"body[data-dsh-retro-mac] button[class*='primary'],",
			"body[data-dsh-retro-mac] button[class*='send'] {",
			"  box-shadow:",
			"    0 0 0 1px #000,",
			"    0 0 0 3px #fff,",
			"    0 0 0 4px #000,",
			"    inset 1px 1px 0 var(--pt-bevel-hi),",
			"    inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"",
			"/* ——— Inputs / selectors: recessed fields ——— */",
			"body[data-dsh-retro-mac] input,",
			"body[data-dsh-retro-mac] textarea,",
			"body[data-dsh-retro-mac] select {",
			"  border-radius: 2px;",
			"  border: 1px solid #000;",
			"  background: var(--dsw-specific-input-major);",
			"  color: var(--dsw-alias-label-primary);",
			"  box-shadow: inset 1px 1px 0 var(--pt-shadow), inset -1px -1px 0 #fff;",
			"}",
			"",
			"/* ——— Composer: raised Platinum card; inner input recessed. ——— */",
			"body[data-dsh-retro-mac] [data-composer-card],",
			"body[data-dsh-retro-mac] [class*='uV2eYG_card'] {",
			"  border-radius: 4px;",
			"  border: 1px solid #000;",
			"  background: var(--pt-face);",
			"  box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.25), inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_input'] {",
			"  border: none;",
			"  box-shadow: none;",
			"  background: transparent;",
			"}",
			"/* Model / access selectors: small raised controls, not pills. */",
			"body[data-dsh-retro-mac] [class*='_7KE1Ra_root'],",
			"body[data-dsh-retro-mac] [class*='Md3f7G_turnStatusClock'] {",
			"  border: 1px solid #000;",
			"  border-radius: 3px;",
			"  background: var(--pt-face);",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"  font-variant-numeric: tabular-nums;",
			"}",
			"",
			"/* ——— Pixel icons (zh): scoped to icon-only buttons so text",
			"   buttons (brand plate, New Session, Settings) keep their layout. ——— */",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'] svg {",
			"  display: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区'],",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区']::after,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令']::after,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4h12v1H2zM2 8h12v1H2zM2 12h12v1H2z' fill='%23000'/%3E%3Crect x='4' y='3' width='2' height='3' fill='%23000'/%3E%3Crect x='9' y='7' width='2' height='3' fill='%23000'/%3E%3Crect x='6' y='11' width='2' height='3' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4h12v1H2zM2 8h12v1H2zM2 12h12v1H2z' fill='%23000'/%3E%3Crect x='4' y='3' width='2' height='3' fill='%23000'/%3E%3Crect x='9' y='7' width='2' height='3' fill='%23000'/%3E%3Crect x='6' y='11' width='2' height='3' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 2L12 7H10V14H6V7H4Z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 2L12 7H10V14H6V7H4Z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"/* ——— Search wrapper: the collapsed host container is a 50% circle",
			"   with overflow hidden — it clips the retro square into a disc. ——— */",
			"body[data-dsh-retro-mac] .qDHVXG_search,",
			"body[data-dsh-retro-mac] .qDHVXG_rail .qDHVXG_search {",
			"  border-radius: 4px !important;",
			"  overflow: visible !important;",
			"}",
			"body[data-dsh-retro-mac] .qDHVXG_searchButton,",
			"body[data-dsh-retro-mac] .qDHVXG_searchButton:hover,",
			"body[data-dsh-retro-mac] .qDHVXG_searchButton:focus,",
			"body[data-dsh-retro-mac] .qDHVXG_searchButton:focus-visible,",
			"body[data-dsh-retro-mac] .qDHVXG_rail .qDHVXG_searchButton {",
			"  border-radius: 4px !important;",
			"  background-color: var(--dsw-alias-button-elevated-fill) !important;",
			"  border: 1px solid #000 !important;",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow) !important;",
			"}",
			"",
			"/* ——— Sidebar: solid platinum window with a black hairline ——— */",
			"body[data-dsh-retro-mac] [class*='sidebarCol'] {",
			"  border-right: 1px solid #000;",
			"}",
			"/* Six-color Macintosh stripe under the nameplate, edges aligned. */",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow'] {",
			"  position: relative;",
			"  padding-bottom: 8px;",
			"}",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow']::after {",
			"  content: '';",
			"  position: absolute;",
			"  left: 0;",
			"  right: 0;",
			"  bottom: 0;",
			"  height: 3px;",
			"  background: linear-gradient(90deg, #61BB46 0 16.66%, #FDB827 0 33.33%, #F5821F 0 50%, #E03A3E 0 66.66%, #963D97 0 83.33%, #009DDC 0 100%);",
			"}",
			"/* Collapse control hugs the right edge. */",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow'] button[aria-label='收起侧边栏'],",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow'] button[aria-label*='Collapse'],",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow'] button[aria-label*='sidebar'] {",
			"  margin-left: auto;",
			"}",
			"",
			"/* ——— Empty state: About-card composition — six-color stripe,",
			"   name, version line, then the handwritten hello. ——— */",
			"body[data-dsh-retro-mac] [class*='wSkVaW_heroGlow'] {",
			"  display: none;",
			"}",
			"body[data-dsh-retro-mac] [class*='pXSMma_previewBadge'] {",
			"  display: none;",
			"}",
			"body[data-dsh-retro-mac] [class*='pXSMma_root'] {",
			"  visibility: hidden;",
			"  display: block !important;",
			"  text-align: center;",
			"}",
			"body[data-dsh-retro-mac] [class*='pXSMma_root']::after {",
			"  content: 'hello.';",
			"  visibility: visible;",
			"  display: inline-block;",
			"  font-family: 'Snell Roundhand', 'Brush Script MT', cursive;",
			"  font-size: 56px;",
			"  color: var(--pt-black);",
			"  transition: opacity 200ms ease;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_composerHero'] {",
			"  position: relative;",
			"  padding-top: 128px;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_composerHero']::before {",
			"  content: 'DeepSeek Harness';",
			"  position: absolute;",
			"  top: 0;",
			"  left: 0;",
			"  right: 0;",
			"  text-align: center;",
			"  font-family: 'Chicago', 'Geneva', sans-serif;",
			"  font-size: 18px;",
			"  color: var(--pt-black);",
			"  padding-top: 12px;",
			"  background: linear-gradient(90deg, #61BB46 0 16.66%, #FDB827 0 33.33%, #F5821F 0 50%, #E03A3E 0 66.66%, #963D97 0 83.33%, #009DDC 0 100%) center top / 120px 3px no-repeat;",
			"  transition: opacity 200ms ease;",
			"}",
			"body[data-dsh-retro-mac] [class*='wSkVaW_composerHero']::after {",
			"  content: 'Version 0.1.0-rc · Platinum Appearance · hello, intelligence.';",
			"  position: absolute;",
			"  top: 44px;",
			"  left: 0;",
			"  right: 0;",
			"  text-align: center;",
			"  font-family: 'Geneva', 'PingFang SC', sans-serif;",
			"  font-size: 12px;",
			"  color: var(--pt-dark);",
			"  transition: opacity 200ms ease;",
			"}",
			"body[data-dsh-retro-mac]:has([class*='uV2eYG_input']:focus) [class*='wSkVaW_composerHero']::before::after,",
			"body[data-dsh-retro-mac]:has([class*='uV2eYG_input']:focus) [class*='wSkVaW_composerHero']::after::after,",
			"body[data-dsh-retro-mac]:has([class*='uV2eYG_input']:focus) [class*='pXSMma_root']::after {",
			"  opacity: 0;",
			"}",
			"/* ——— Menus & dialogs: square, black-bordered, hard shadow ——— */",
			"body[data-dsh-retro-mac] [role='menu'],",
			"body[data-dsh-retro-mac] [role='dialog'] {",
			"  border-radius: 0;",
			"  border: 1px solid #000;",
			"  background: var(--dsw-alias-bg-overlay);",
			"  box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.45);",
			"}",
			"body[data-dsh-retro-mac] [role='menuitem'] { border-radius: 0; }",
			"body[data-dsh-retro-mac] [role='menuitem']:hover,",
			"body[data-dsh-retro-mac] [role='menuitem']:focus-visible {",
			"  background: var(--dsw-alias-brand-primary);",
			"  color: #fff;",
			"}",
			"",
			"/* ——— Classic Macintosh scrollbars + grow box ——— */",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar {",
			"  width: 15px;",
			"  height: 15px;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-track {",
			"  background: var(--dsw-alias-scrollbar-bg-l1);",
			"  background-image: repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.08) 0px, rgba(0, 0, 0, 0.08) 1px, transparent 1px, transparent 4px);",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-thumb {",
			"  background: var(--dsw-alias-scrollbar-bg-l2);",
			"  border: 1px solid #000;",
			"  border-radius: 0;",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 #666;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-button {",
			"  display: block;",
			"  background: var(--pt-face);",
			"  border: 1px solid #000;",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-button:vertical:decrement {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M4 1 L7 7 L1 7 Z' fill='%23000'/%3E%3C/svg%3E\");",
			"  background-repeat: no-repeat;",
			"  background-position: center;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-button:vertical:increment {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M4 7 L1 1 L7 1 Z' fill='%23000'/%3E%3C/svg%3E\");",
			"  background-repeat: no-repeat;",
			"  background-position: center;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-button:horizontal:decrement {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M1 4 L7 1 L7 7 Z' fill='%23000'/%3E%3C/svg%3E\");",
			"  background-repeat: no-repeat;",
			"  background-position: center;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-button:horizontal:increment {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M7 4 L1 1 L1 7 Z' fill='%23000'/%3E%3C/svg%3E\");",
			"  background-repeat: no-repeat;",
			"  background-position: center;",
			"}",
			"body[data-dsh-retro-mac] ::-webkit-scrollbar-corner {",
			"  background-color: var(--pt-face);",
			"  background-image: repeating-linear-gradient(45deg, rgba(128, 128, 128, 0.45) 0px, rgba(0, 0, 0, 0.35) 1px, transparent 1px, transparent 4px);",
			"}",
			"/* Recessed white input well inside the raised composer card,",
			"   with a 12px corner grow box. */",
			"body[data-dsh-retro-mac] [class*='uV2eYG_grow'] {",
			"  position: relative;",
			"  background: var(--pt-highlight);",
			"  border: 1px solid #000;",
			"  border-radius: 0;",
			"  box-shadow: inset 1px 1px 0 var(--pt-shadow);",
			"  margin: 8px;",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_grow']::after {",
			"  content: '';",
			"  position: absolute;",
			"  right: 2px;",
			"  bottom: 2px;",
			"  width: 12px;",
			"  height: 12px;",
			"  pointer-events: none;",
			"  background-color: var(--pt-face);",
			"  background-image: repeating-linear-gradient(45deg, rgba(128, 128, 128, 0.45) 0px, rgba(0, 0, 0, 0.35) 1px, transparent 1px, transparent 4px);",
			"}",
			"body[data-dsh-retro-mac] * {",
			"  scrollbar-width: auto;",
			"  scrollbar-color: var(--dsw-alias-scrollbar-bg-l2) var(--dsw-alias-scrollbar-bg-l1);",
			"}",
			"",
			"/* ——— Status bar: recessed Finder strip with compact fields ——— */",
			"body[data-dsh-retro-mac] [class*='FJxK0a_root'] {",
			"  border-top: 1px solid #000;",
			"  background: var(--pt-face);",
			"  color: var(--pt-dark);",
			"  font-family: 'Monaco', 'SF Mono', Menlo, monospace;",
			"  font-size: 11px;",
			"  box-shadow: inset 0 1px 0 #fff, inset 0 2px 0 rgba(0, 0, 0, 0.12);",
			"}",
			"body[data-dsh-retro-mac] [class*='FJxK0a_root'] > span {",
			"  padding: 0 8px;",
			"  border-right: 1px solid var(--pt-mid);",
			"}",
			"body[data-dsh-retro-mac] [class*='FJxK0a_sep'] {",
			"  display: none;",
			"}",
			"",
			"/* ——— Barber-pole progress (classic striped indicator); modern",
			"   spinners replaced. ——— */",
			"body[data-dsh-retro-mac] [role='progressbar'],",
			"body[data-dsh-retro-mac] progress,",
			"body[data-dsh-retro-mac] [class*='progress'] {",
			"  border-radius: 0;",
			"  border: 1px solid #000;",
			"  background: var(--pt-highlight);",
			"  overflow: hidden;",
			"}",
			"body[data-dsh-retro-mac] [class*='spin'] svg,",
			"body[data-dsh-retro-mac] [class*='loading'] svg {",
			"  display: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='spin'],",
			"body[data-dsh-retro-mac] [class*='loading'] {",
			"  background-image: repeating-linear-gradient(45deg, #000 0px, #000 4px, transparent 4px, transparent 8px);",
			"  background-size: 12px 12px;",
			"  animation: dsh-retro-stripes 0.8s linear infinite;",
			"}",
			"@media (prefers-reduced-motion: no-preference) {",
			"  body[data-dsh-retro-mac] [role='progressbar']::-webkit-progress-value,",
			"  body[data-dsh-retro-mac] progress::-webkit-progress-value,",
			"  body[data-dsh-retro-mac] [class*='progress'] > [class*='bar'],",
			"  body[data-dsh-retro-mac] [class*='progress'] > div {",
			"    background-image: repeating-linear-gradient(45deg, #000 0px, #000 4px, transparent 4px, transparent 8px);",
			"    background-size: 12px 12px;",
			"    animation: dsh-retro-stripes 0.8s linear infinite;",
			"  }",
			"}",
			"@keyframes dsh-retro-stripes {",
			"  to { background-position: 12px 0; }",
			"}",
			"",
			"/* ——— Radius discipline: panels, lists, cards stay square ——— */",
			"body[data-dsh-retro-mac] [role='treeitem'],",
			"body[data-dsh-retro-mac] [role='listitem'],",
			"body[data-dsh-retro-mac] [class*='card'],",
			"body[data-dsh-retro-mac] [class*='panel'],",
			"body[data-dsh-retro-mac] [class*='table'],",
			"body[data-dsh-retro-mac] .md-code-block {",
			"  border-radius: 0;",
			"}",
			"",
			"/* ——— Micro-interactions (gated on reduced motion) ——— */",
			"@media (prefers-reduced-motion: no-preference) {",
			"  body[data-dsh-retro-mac] button {",
			"    transition: filter 80ms ease;",
			"  }",
			"  body[data-dsh-retro-mac] button:hover {",
			"    filter: brightness(1.04);",
			"  }",
			"  body[data-dsh-retro-mac] [role='treeitem'] {",
			"    transition: background-color 120ms ease;",
			"  }",
			"}",
			"",
			"/* ——— Happy Mac splash (easter egg, off by default) ——— */",
			".dsh-retro-splash {",
			"  position: fixed;",
			"  inset: 0;",
			"  z-index: 9999;",
			"  background: #808080;",
			"  display: flex;",
			"  flex-direction: column;",
			"  align-items: center;",
			"  justify-content: center;",
			"  gap: 28px;",
			"}",
			".dsh-retro-splash.hide {",
			"  animation: dsh-retro-splash-out 400ms ease forwards;",
			"}",
			"@keyframes dsh-retro-splash-out {",
			"  to { opacity: 0; visibility: hidden; }",
			"}",
			".dsh-retro-splash-bar {",
			"  width: 280px;",
			"  height: 13px;",
			"  border: 1px solid #000;",
			"  background: #fff;",
			"  position: relative;",
			"  overflow: hidden;",
			"}",
			".dsh-retro-splash-bar::after {",
			"  content: '';",
			"  position: absolute;",
			"  left: 0;",
			"  top: 0;",
			"  bottom: 0;",
			"  width: 8%;",
			"  background: #000;",
			"  animation: dsh-retro-progress 1.3s steps(10) forwards;",
			"}",
			"@keyframes dsh-retro-progress {",
			"  from { width: 8%; }",
			"  to { width: 92%; }",
			"}",
			"",
			"/* ════════ Final sweep: clear remaining modern leftovers ════════ */",
			"",
			"/* Hero selector chips (workspace / mode): raised Platinum controls. */",
			"body[data-dsh-retro-mac] [class*='pXSMma_workspace'],",
			"body[data-dsh-retro-mac] [class*='pXSMma_mode'],",
			"body[data-dsh-retro-mac] [class*='composerHero'] button {",
			"  border-radius: 4px;",
			"  border: 1px solid #000;",
			"  background: var(--pt-face);",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"  color: var(--pt-black);",
			"  font-family: 'Chicago', 'Geneva', 'PingFang SC', sans-serif;",
			"}",
			"/* Blue folder → pixel folder glyph. */",
			"body[data-dsh-retro-mac] [class*='pXSMma_folder'] {",
			"  display: none;",
			"}",
			"body[data-dsh-retro-mac] [class*='pXSMma_workspace'] {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M1 3h5l2 2h7v8H1V3z' fill='%23000'/%3E%3Cpath d='M2 4h4l2 2h6v6H2V4z' fill='%23e8e8e8'/%3E%3C/svg%3E\");",
			"  background-repeat: no-repeat;",
			"  background-position: 8px center;",
			"  padding-left: 28px;",
			"}",
			"/* DeepSeek whale + preset icons: monochrome black, no modern color. */",
			"body[data-dsh-retro-mac] [class*='composerHero'] svg,",
			"body[data-dsh-retro-mac] [class*='SVAs4q_label'] svg {",
			"  filter: grayscale(1) contrast(1.4);",
			"}",
			"/* Hero title in Chicago, tight and professional. */",
			"body[data-dsh-retro-mac] [class*='composerHero'] h1,",
			"body[data-dsh-retro-mac] [class*='composerHero'] [class*='title'] {",
			"  font-family: 'Chicago', 'Geneva', 'PingFang SC', sans-serif;",
			"  color: var(--pt-black);",
			"}",
			"/* Preview badge: grey, not blue. */",
			"body[data-dsh-retro-mac] [class*='preview'],",
			"body[data-dsh-retro-mac] [class*='Preview'] {",
			"  background: var(--pt-mid) !important;",
			"  color: #000 !important;",
			"}",
			"/* User bubbles: dialog grey, never blue. */",
			"body[data-dsh-retro-mac] [data-chat-flow-kind='user'] [class*='bubble'],",
			"body[data-dsh-retro-mac] [data-chat-flow-kind='steering'] [class*='bubble'] {",
			"  background: var(--pt-face) !important;",
			"  color: var(--pt-black);",
			"}",
			"/* Message action buttons: square bevels, not rounded pills. */",
			"body[data-dsh-retro-mac] button[class*='_action'] {",
			"  border-radius: 2px;",
			"  border: 1px solid #000;",
			"  background: var(--pt-face);",
			"  box-shadow: inset 1px 1px 0 var(--pt-bevel-hi), inset -1px -1px 0 var(--pt-shadow);",
			"}",
			"/* Pixel icons: scoped to icon-only buttons in their containers,",
			"   so text buttons (brand plate, New Session, Settings) keep layout. */",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Search sessions'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='View options'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区'] svg,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Add workspace'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='Commands'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送'] svg,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label='Send message'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='New session'] svg {",
			"  display: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话'],",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Search sessions'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='搜索会话']::after,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Search sessions']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区'],",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Add workspace'],",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令'],",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='Commands'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='New session'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='添加工作区']::after,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='Add workspace']::after,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='命令']::after,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_tools'] button[aria-label='Commands']::after,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话']::after,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='New session']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项'],",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='View options'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='视图选项']::after,",
			"body[data-dsh-retro-mac] [class*='sectionHeader'] button[aria-label='View options']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4h12v1H2zM2 8h12v1H2zM2 12h12v1H2z' fill='%23000'/%3E%3Crect x='4' y='3' width='2' height='3' fill='%23000'/%3E%3Crect x='9' y='7' width='2' height='3' fill='%23000'/%3E%3Crect x='6' y='11' width='2' height='3' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M2 4h12v1H2zM2 8h12v1H2zM2 12h12v1H2z' fill='%23000'/%3E%3Crect x='4' y='3' width='2' height='3' fill='%23000'/%3E%3Crect x='9' y='7' width='2' height='3' fill='%23000'/%3E%3Crect x='6' y='11' width='2' height='3' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送'],",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label='Send message'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label*='发送']::after,",
			"body[data-dsh-retro-mac] [class*='uV2eYG_row'] button[aria-label='Send message']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 2L12 7H10V14H6V7H4Z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 2L12 7H10V14H6V7H4Z' fill='%23000'/%3E%3C/svg%3E\") center / 14px 14px no-repeat;",
			"}",
			"/* Hero heading in Chicago. */",
			"body[data-dsh-retro-mac] [class*='composerHero'] :is(h1, h2, h3, [class*='heading'], [class*='Heading']) {",
			"  font-family: 'Chicago', 'Geneva', 'PingFang SC', sans-serif;",
			"  color: var(--pt-black);",
			"}",
			"",
			"/* ——— Brand plate: no bevel, breathing room. ——— */",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_brand'],",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_brand']:hover {",
			"  border: none;",
			"  background: transparent;",
			"  box-shadow: none;",
			"  border-radius: 0;",
			"}",
			"body[data-dsh-retro-mac] [class*='hHd-Xa_logoRow'] {",
			"  gap: 8px;",
			"}",
			"",
			"/* ——— Collapsed rail: square every wrapper, pixel icons. ——— */",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] * {",
			"  border-radius: 4px !important;",
			"  overflow: visible !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新会话'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='添加工作区'] svg,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='搜索会话'] svg {",
			"  display: none !important;",
			"}",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='搜索会话'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='搜索会话']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 16px 16px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23000'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23000'/%3E%3C/svg%3E\") center / 16px 16px no-repeat;",
			"}",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新会话'],",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='添加工作区'] {",
			"  position: relative;",
			"}",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新建会话']::after,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='新会话']::after,",
			"body[data-dsh-retro-mac] [class*='qDHVXG_rail'] button[aria-label='添加工作区']::after {",
			"  content: '';",
			"  position: absolute;",
			"  inset: 0;",
			"  pointer-events: none;",
			"  background: var(--pt-black);",
			"  -webkit-mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 16px 16px no-repeat;",
			"  mask: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M7 3h2v4h4v2H9v4H7V9H3V7h4V3z' fill='%23000'/%3E%3C/svg%3E\") center / 16px 16px no-repeat;",
			"}",
			"",
			"/* ——— Send button: theme-color highlight once the input has text. ——— */",
			"body[data-dsh-retro-mac]:has([class*='uV2eYG_input']:not(:placeholder-shown)) [class*='uV2eYG_row'] button[aria-label*='发送'],",
			"body[data-dsh-retro-mac]:has([class*='uV2eYG_input']:not(:placeholder-shown)) [class*='uV2eYG_row'] button[aria-label='Send message'] {",
			"  background-color: var(--dsw-alias-brand-primary) !important;",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M8 2L12 7H10V14H6V7H4Z' fill='%23fff'/%3E%3C/svg%3E\") !important;",
			"  background-repeat: no-repeat !important;",
			"  background-position: center !important;",
			"  box-shadow:",
			"    0 0 0 1px #000,",
			"    0 0 0 3px #fff,",
			"    0 0 0 4px #000,",
			"    inset 1px 1px 0 rgba(255, 255, 255, 0.5),",
			"    inset -1px -1px 0 rgba(0, 0, 0, 0.4) !important;",
			"}",
			"",
			"/* ════════ Graphite (dark) appearance: tokens flip, light stays ════════ */",
			"body[data-dsh-retro-mac][data-ds-dark-theme] {",
			"  --pt-face: #3a3a3c;",
			"  --pt-highlight: #232326;",
			"  --pt-mid: #55555a;",
			"  --pt-shadow: #17171a;",
			"  --pt-dark: #c9c9ce;",
			"  --pt-black: #f2f2f5;",
			"  --pt-bevel-hi: #66666c;",
			"  --pt-bevel-hi2: rgba(255, 255, 255, 0.14);",
			"}",
			"/* Search magnifier: white glyph on dark bevel. */",
			"body[data-dsh-retro-mac][data-ds-dark-theme] [class*='qDHVXG_searchButton'],",
			"body[data-dsh-retro-mac][data-ds-dark-theme] [class*='sectionHeader'] button[aria-label='搜索会话'],",
			"body[data-dsh-retro-mac][data-ds-dark-theme] [class*='sectionHeader'] button[aria-label='Search sessions'] {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M4 2h5v1h1v1h1v5h-1v1h-1v1H4v-1H3v-1H2V4h1V3h1V2z' fill='none' stroke='%23f2f2f5'/%3E%3Cpath d='M10 10h2v1h1v1h1v2h-2v-1h-1v-1h-1v-2z' fill='%23f2f2f5'/%3E%3C/svg%3E\") !important;",
			"}",
			"/* Folder chip: light folder on dark. */",
			"body[data-dsh-retro-mac][data-ds-dark-theme] [class*='pXSMma_workspace'] {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath d='M1 3h5l2 2h7v8H1V3z' fill='%23f2f2f5'/%3E%3Cpath d='M2 4h4l2 2h6v6H2V4z' fill='%233a3a3c'/%3E%3C/svg%3E\");",
			"}",
			"/* Scrollbar arrows: light triangles. */",
			"body[data-dsh-retro-mac][data-ds-dark-theme] ::-webkit-scrollbar-button:vertical:decrement {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M4 1 L7 7 L1 7 Z' fill='%23f2f2f5'/%3E%3C/svg%3E\");",
			"}",
			"body[data-dsh-retro-mac][data-ds-dark-theme] ::-webkit-scrollbar-button:vertical:increment {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M4 7 L1 1 L7 1 Z' fill='%23f2f2f5'/%3E%3C/svg%3E\");",
			"}",
			"body[data-dsh-retro-mac][data-ds-dark-theme] ::-webkit-scrollbar-button:horizontal:decrement {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M1 4 L7 1 L7 7 Z' fill='%23f2f2f5'/%3E%3C/svg%3E\");",
			"}",
			"body[data-dsh-retro-mac][data-ds-dark-theme] ::-webkit-scrollbar-button:horizontal:increment {",
			"  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M7 4 L1 1 L1 7 Z' fill='%23f2f2f5'/%3E%3C/svg%3E\");",
			"}",
			"/* Title-bar stripes read lighter on graphite. */",
			"body[data-dsh-retro-mac][data-ds-dark-theme] header {",
			"  background-image: repeating-linear-gradient(180deg, rgba(255, 255, 255, 0.06) 0px, rgba(255, 255, 255, 0.06) 1px, transparent 1px, transparent 3px);",
			"}",
		].join("\n");
		//#endregion

		//#region dsh-retro-mac: persistence
		/** Read a localStorage string value (null on absence or error). */
		function readStorage(key) {
			try {
				const value = window.localStorage.getItem(key);
				return typeof value === "string" ? value : null;
			} catch {
				return null;
			}
		}

		/** Write (or remove with null) a localStorage value. */
		function writeStorage(key, value) {
			try {
				if (value === null) window.localStorage.removeItem(key);
				else window.localStorage.setItem(key, value);
			} catch {
				// storage unavailable — the preference stays process-local
			}
		}

		/** Saved skin ('platinum'|'graphite'|null when system). */
		function readSavedSkin() {
			return readStorage(SKIN_KEY);
		}

		/** Persist a skin choice; system clears the stored value. */
		function writeSavedSkin(skin) {
			writeStorage(SKIN_KEY, skin === DEFAULT_SKIN ? null : skin);
		}

		/** Saved accent (default 'blue'). */
		function readSavedAccent() {
			const accent = readStorage(ACCENT_KEY);
			return accent === "teal" ? "teal" : DEFAULT_ACCENT;
		}

		/** Persist the accent. */
		function writeSavedAccent(accent) {
			writeStorage(ACCENT_KEY, accent);
		}

		/** Saved splash toggle (default off). */
		function readSavedSplash() {
			return readStorage(SPLASH_KEY) === "1";
		}

		/** Persist the splash toggle. */
		function writeSavedSplash(on) {
			writeStorage(SPLASH_KEY, on ? "1" : "0");
		}

		/** Resolve a theme id from skin+accent ('system' when no skin). */
		function themeIdFor(skin, accent) {
			if (skin === DEFAULT_SKIN) return DEFAULT_SKIN;
			return THEME_MAP[skin]?.[accent] ?? DEFAULT_SKIN;
		}

		/** Derive skin from a registered theme id ('system' otherwise). */
		function skinForPreference(preference) {
			for (const skin of Object.keys(THEME_MAP)) {
				for (const accent of Object.keys(THEME_MAP[skin])) {
					if (THEME_MAP[skin][accent] === preference) return skin;
				}
			}
			return DEFAULT_SKIN;
		}
		//#endregion

		//#region dsh-retro-mac: settings row store
		/**
		 * Settings row slot store: mirrors the active preference (skin) plus
		 * the accent and splash choices (not part of the theme snapshot).
		 */
		function createStore() {
			return (0, _runtime_client.defineStore)({
				init: () => ({
					skin: DEFAULT_SKIN,
					revision: -1,
					accent: readSavedAccent(),
					splash: readSavedSplash()
				}),
				actions: {
					syncSkin: (d, skin, revision) => {
						if (revision <= d.revision) return;
						d.skin = skin;
						d.revision = revision;
					},
					setAccent: (d, accent) => {
						d.accent = accent;
					},
					setSplash: (d, on) => {
						d.splash = on;
					}
				}
			});
		}
		//#endregion

		//#region dsh-retro-mac: settings rows
		/** Inline style sheet for the rows (kept dependency-free). */
		const styles = {
			group: {
				borderBottom: "1px solid var(--dsw-alias-border-l2)",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				padding: "16px 0"
			},
			title: {
				color: "var(--dsw-alias-label-primary)",
				fontSize: "14px",
				fontWeight: 400,
				lineHeight: "22px"
			},
			caption: {
				color: "var(--dsw-alias-label-tertiary)",
				fontSize: "12px",
				lineHeight: "18px"
			},
			grid: {
				display: "flex",
				flexWrap: "wrap",
				gap: "10px"
			},
			card: {
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "6px",
				width: "96px",
				padding: "3px",
				borderRadius: "2px",
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				boxSizing: "border-box"
			},
			cardSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)"
			},
			cardLabel: {
				color: "var(--dsw-alias-label-secondary)",
				fontSize: "12px",
				lineHeight: "16px",
				whiteSpace: "nowrap"
			},
			cardLabelSelected: {
				color: "var(--dsw-alias-label-primary)"
			},
			swatch: {
				width: "100%",
				height: "52px",
				borderRadius: "2px",
				boxSizing: "border-box",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: "6px"
			},
			defaultSwatch: {
				width: "100%",
				height: "52px",
				borderRadius: "2px",
				boxSizing: "border-box",
				display: "flex",
				overflow: "hidden",
				border: "1px solid var(--dsw-alias-border-l2)"
			},
			accentChip: {
				display: "flex",
				alignItems: "center",
				gap: "6px",
				padding: "6px 12px",
				borderRadius: "2px",
				borderWidth: "2px",
				borderStyle: "solid",
				borderColor: "transparent",
				background: "transparent",
				cursor: "pointer",
				font: "inherit",
				color: "var(--dsw-alias-label-secondary)"
			},
			accentChipSelected: {
				borderColor: "var(--dsw-alias-brand-primary)",
				background: "var(--dsw-alias-interactive-bg-hover)",
				color: "var(--dsw-alias-label-primary)"
			},
			accentDot: {
				width: "14px",
				height: "14px",
				borderRadius: "50%",
				border: "1px solid rgba(0,0,0,0.5)",
				boxSizing: "border-box"
			},
			checkRow: {
				display: "flex",
				alignItems: "center",
				gap: "8px",
				cursor: "pointer"
			}
		};

		/** Skin swatch: a mini "window" on the desktop pattern. */
		function SkinSwatch({ pattern, accent }) {
			return (0, react_jsx_runtime.jsx)("div", {
				style: {
					...styles.swatch,
					backgroundImage: pattern,
					backgroundColor: accent
				}
			});
		}

		/** "Default" chip: follow the built-in appearance (light + dark halves). */
		function DefaultSwatch() {
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.defaultSwatch,
				children: [
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#f4f4f5" } }),
					(0, react_jsx_runtime.jsx)("div", { style: { flex: 1, background: "#1c1c20" } })
				]
			});
		}

		const PATTERNS = {
			platinum: "repeating-linear-gradient(90deg, rgba(120,140,170,0.4) 0px, rgba(120,140,170,0.4) 2px, rgba(120,140,170,0.12) 2px, rgba(120,140,170,0.12) 5px), linear-gradient(180deg, #e6eaf0, #d4dae4)",
			graphite: "repeating-linear-gradient(90deg, rgba(160,180,210,0.22) 0px, rgba(160,180,210,0.22) 2px, rgba(160,180,210,0.06) 2px, rgba(160,180,210,0.06) 5px), linear-gradient(180deg, #3a3e46, #262a30)"
		};

		/**
		 * Settings → General row group: skin picker (Default / Platinum /
		 * Graphite), highlight accent picker (Classic Blue / System Teal) and
		 * the Happy Mac splash toggle.
		 */
		function RetroMacRow({ t, setSkin, setAccent, setSplash, useStore }) {
			const skin = useStore((s) => s.skin);
			const accent = useStore((s) => s.accent);
			const splash = useStore((s) => s.splash);
			const skinSelected = THEME_MAP[skin] ? skin : null;
			return (0, react_jsx_runtime.jsxs)("div", {
				style: styles.group,
				children: [
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("skin.title")
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.caption,
						children: t("skin.caption")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							(0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									setSkin(DEFAULT_SKIN);
									event.currentTarget.blur();
								},
								"aria-pressed": skinSelected === null,
								style: {
									...styles.card,
									...(skinSelected === null ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(DefaultSwatch, {}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(skinSelected === null ? styles.cardLabelSelected : {})
										},
										children: t("skin.default")
									})
								]
							}),
							Object.keys(THEME_MAP).map((skinKey) => (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: (event) => {
									setSkin(skinKey);
									event.currentTarget.blur();
								},
								"aria-pressed": skinSelected === skinKey,
								style: {
									...styles.card,
									...(skinSelected === skinKey ? styles.cardSelected : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)(SkinSwatch, {
										pattern: PATTERNS[skinKey],
										accent: accent === "teal" ? "#008080" : "#1e56c6"
									}),
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.cardLabel,
											...(skinSelected === skinKey ? styles.cardLabelSelected : {})
										},
										children: t("skin." + skinKey)
									})
								]
							}, skinKey))
						]
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("accent.title")
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.caption,
						children: t("accent.caption")
					}),
					(0, react_jsx_runtime.jsxs)("div", {
						style: styles.grid,
						children: [
							["blue", "teal"].map((accentKey) => (0, react_jsx_runtime.jsxs)("button", {
								type: "button",
								disabled: skinSelected === null,
								onClick: (event) => {
									setAccent(accentKey);
									event.currentTarget.blur();
								},
								"aria-pressed": accent === accentKey,
								style: {
									...styles.accentChip,
									...(accent === accentKey ? styles.accentChipSelected : {}),
									...(skinSelected === null ? { opacity: 0.45, cursor: "default" } : {})
								},
								children: [
									(0, react_jsx_runtime.jsx)("span", {
										style: {
											...styles.accentDot,
											background: accentKey === "teal" ? "#008080" : "#1e56c6"
										}
									}),
									(0, react_jsx_runtime.jsx)("span", {
										children: t("accent." + accentKey)
									})
								]
							}, accentKey))
						]
					}),
					(0, react_jsx_runtime.jsx)("div", {
						style: styles.title,
						children: t("splash.title")
					}),
					(0, react_jsx_runtime.jsxs)("label", {
						style: styles.checkRow,
						children: [
							(0, react_jsx_runtime.jsx)("input", {
								type: "checkbox",
								checked: splash,
								onChange: (event) => {
									setSplash(event.currentTarget.checked);
								}
							}),
							(0, react_jsx_runtime.jsx)("span", {
								style: styles.caption,
								children: t("splash.caption")
							})
						]
					})
				]
			});
		}
		//#endregion

		//#region dsh-retro-mac: locale
		/** Simplified Chinese dictionary (the key-set source of truth). */
		const zh = {
			"skin.title": "复古麦金塔 · Retro Macintosh",
			"skin.caption": "Mac OS 8/9 Platinum · 铂金灰 · Chicago 字体",
			"skin.default": "默认",
			"skin.platinum": "铂金",
			"skin.graphite": "石墨",
			"accent.title": "高亮色",
			"accent.caption": "致敬 Appearance Manager 可自定义高亮",
			"accent.blue": "经典蓝",
			"accent.teal": "Teal 青",
			"splash.title": "启动屏彩蛋",
			"splash.caption": "进入时显示 Happy Mac 启动画面"
		};

		/** English dictionary, checked complete against the zh key set. */
		const en = {
			"skin.title": "Retro Macintosh",
			"skin.caption": "Mac OS 8/9 Platinum · grey chrome · Chicago type",
			"skin.default": "Default",
			"skin.platinum": "Platinum",
			"skin.graphite": "Graphite",
			"accent.title": "Highlight",
			"accent.caption": "An homage to the Appearance Manager's custom palette",
			"accent.blue": "Classic Blue",
			"accent.teal": "System Teal",
			"splash.title": "Boot splash easter egg",
			"splash.caption": "Show the Happy Mac startup screen on entry"
		};
		//#endregion

		//#region dsh-retro-mac: client plugin body
		/**
		 * Required services: theme runtime (skins, switching), slots/locale
		 * (the settings rows). Persistence is localStorage.
		 */
		const inject = [
			"slots",
			"locale",
			"theme"
		];

		/**
		 * Client plugin body: register the four Retro Mac skins into the theme
		 * runtime, restore the saved skin + accent + splash, keep the retro
		 * chrome (CSS + wallpaper + splash) in lockstep with the active
		 * preference, and register the picker row into Settings → General.
		 * @param ctx - client cordis context.
		 */
		function apply(ctx) {
			const disposers = SKINS.map((skinDefinition) => {
				try {
					return ctx.theme.register(skinDefinition);
				} catch (error) {
					console.warn("[dsh-retro-mac] skip theme \"" + skinDefinition.id + "\":", error);
					return () => {};
				}
			});
			ctx.effect(() => () => {
				for (const dispose of disposers) dispose();
			}, "dsh-retro-mac: theme registration");

			// Retro chrome mounted ONLY while a Retro Mac skin is the active
			// preference. Selecting Default must leave the document untouched.
			let styleNode = null;
			let wallpaperNode = null;
			let splashNode = null;
			let splashTimer = null;
			let splashShown = false;

			const isRetroSkin = (preference) =>
				SKINS.some((skinDefinition) => skinDefinition.id === preference);

			const ensureChrome = () => {
				if (styleNode === null) {
					styleNode = document.createElement("style");
					styleNode.dataset.plugin = "dsh-retro-mac";
					styleNode.textContent = RETRO_CSS;
					document.head.append(styleNode);
				}
				if (wallpaperNode === null) {
					wallpaperNode = document.createElement("div");
					wallpaperNode.className = "dsh-retro-wallpaper";
					wallpaperNode.dataset.plugin = "dsh-retro-mac";
					document.body.append(wallpaperNode);
				}
				document.body.dataset.dshRetroMac = "";
			};
			const removeChrome = () => {
				if (styleNode !== null) {
					styleNode.remove();
					styleNode = null;
				}
				if (wallpaperNode !== null) {
					wallpaperNode.remove();
					wallpaperNode = null;
				}
				removeSplash();
				delete document.body.dataset.dshRetroMac;
				delete document.body.dataset.dsDarkTheme;
			};

			const removeSplash = () => {
				if (splashTimer !== null) {
					clearTimeout(splashTimer);
					splashTimer = null;
				}
				if (splashNode !== null) {
					splashNode.remove();
					splashNode = null;
				}
			};

			/** Show the Happy Mac splash once per page load when enabled. */
			const maybeSplash = () => {
				if (!readSavedSplash() || splashShown || splashNode !== null) return;
				splashShown = true;
				splashNode = document.createElement("div");
				splashNode.className = "dsh-retro-splash";
				splashNode.dataset.plugin = "dsh-retro-mac";
				splashNode.innerHTML =
					HAPPY_MAC_SVG +
					"<div class='dsh-retro-splash-bar'></div>";
				document.body.append(splashNode);
				splashTimer = setTimeout(() => {
					splashNode?.classList.add("hide");
					splashTimer = setTimeout(() => removeSplash(), 420);
				}, 1500);
			};

			/**
			 * Theme switches we initiate ourselves (row actions, re-assert).
			 * The theme/change handler uses this to distinguish "we asked for
			 * this" from an external/host push, so a late settings-scope
			 * adoption (the loopback host can push its durable
			 * ui-theme.preference seconds after boot — later than the 80ms
			 * re-assert window) gets re-asserted instead of silently reverting
			 * the skin. The user's own Default choice clears localStorage, so
			 * re-assert naturally skips it.
			 */
			let selfInitiated = false;
			const setThemeSafe = (id) => {
				selfInitiated = true;
				try {
					ctx.theme.setTheme(id);
				} finally {
					selfInitiated = false;
				}
			};

			const syncChrome = (snapshot) => {
				const active = isRetroSkin(snapshot.preference);
				if (!active) {
					removeChrome();
					// External revert (host adoption, built-in row): restore the
					// saved skin — unless this very change came from us.
					if (!selfInitiated) reassertSavedSkin();
					return;
				}
				// Saved skin is authoritative: a late host push of another retro
				// skin must not silently override the user's stored choice.
				const storedSkin = readSavedSkin();
				if (!selfInitiated && storedSkin && THEME_MAP[storedSkin] && skinForPreference(snapshot.preference) !== storedSkin) {
					setThemeSafe(themeIdFor(storedSkin, currentAccent));
					return;
				}
				ensureChrome();
				// Host only flags dark for built-ins; assert it ourselves so the
				// graphite token flip engages.
				const activeDefinition = SKINS.find((d) => d.id === snapshot.preference);
				if (activeDefinition && activeDefinition.colorScheme === "dark") document.body.dataset.dsDarkTheme = "";
				else delete document.body.dataset.dsDarkTheme;
				maybeSplash();
			};

			ctx.effect(() => () => {
				removeChrome();
			}, "dsh-retro-mac: retro chrome");

			const store = createStore();
			let storeBound;
			let currentAccent = readSavedAccent();
			const syncSkin = (snapshot) => {
				storeBound?.syncSkin(skinForPreference(snapshot.preference), snapshot.revision);
			};
			ctx.on("theme/change", syncSkin);
			ctx.on("theme/change", syncChrome);

			// Restore the saved skin. Host settings may adopt system/light/dark
			// after we register (the loopback host pushes its durable
			// ui-theme.preference once the settings wire settles), reverting a
			// third-party id — so re-assert on the next ticks only (a late push
			// is caught by the theme/change re-assert in syncChrome above).
			const reassertSavedSkin = () => {
				const saved = readSavedSkin();
				if (saved === null || saved === DEFAULT_SKIN || !THEME_MAP[saved]) return;
				const id = themeIdFor(saved, currentAccent);
				const current = ctx.theme.getTheme().preference;
				if (current !== id) setThemeSafe(id);
			};
			reassertSavedSkin();
			const reassertTimers = [setTimeout(reassertSavedSkin, 0), setTimeout(reassertSavedSkin, 80)];
			ctx.effect(() => () => {
				for (const timer of reassertTimers) clearTimeout(timer);
			}, "dsh-retro-mac: reassert cleanup");
			syncChrome(ctx.theme.getTheme());

			ctx.effect(() => ctx.locale.register(SETTINGS_NS, {
				zh,
				en
			}), "dsh-retro-mac: settings row dictionaries");

			const rowInjected = (actions) => {
				storeBound = actions;
				syncSkin(ctx.theme.getTheme());
				return {
					setSkin: (skin) => {
						writeSavedSkin(skin);
						setThemeSafe(themeIdFor(skin, currentAccent));
					},
					setAccent: (accent) => {
						currentAccent = accent;
						storeBound.setAccent(accent);
						writeSavedAccent(accent);
						const saved = readSavedSkin();
						if (saved !== null && saved !== DEFAULT_SKIN && THEME_MAP[saved]) {
							setThemeSafe(themeIdFor(saved, accent));
						}
					},
					setSplash: (on) => {
						storeBound.setSplash(on);
						writeSavedSplash(on);
					}
				};
			};
			ctx.slots.inject("settings.general.item", () => ctx.slots.register({
				name: "settings.general.item",
				id: "retro-mac",
				order: 19,
				store: store,
				locale: SETTINGS_NS,
				inject: rowInjected
			}, RetroMacRow));
		}
		//#endregion

		exports.SKINS = SKINS;
		exports.THEME_MAP = THEME_MAP;
		exports.apply = apply;
		exports.inject = inject;
		return module.exports;
	}
});
