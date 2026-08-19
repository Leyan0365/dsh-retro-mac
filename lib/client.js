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
		const SKINS = [
  {
    "id": "retro-mac-platinum-blue",
    "name": "铂金 · 经典蓝",
    "nameEn": "Platinum · Classic Blue",
    "colorScheme": "light",
    "tokens": {
      "--dsw-alias-bg-base": "rgba(232, 232, 232, 0.85)",
      "--dsw-alias-bg-layer-1": "rgb(221, 221, 221)",
      "--dsw-alias-bg-layer-2": "rgb(212, 212, 212)",
      "--dsw-alias-bg-layer-3": "rgb(192, 192, 192)",
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.4)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.2)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.55)",
      "--dsw-alias-bg-mask-drop": "rgba(255, 255, 255, 0.8)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-module-platform": "rgb(216, 216, 216)",
      "--dsw-alias-bg-multi-select": "rgba(30, 86, 198, 0.25)",
      "--dsw-alias-bg-overlay": "rgb(221, 221, 221)",
      "--dsw-alias-bg-skeleton": "rgba(0, 0, 0, 0.15)",
      "--dsw-alias-border-inverted": "rgb(255, 255, 255)",
      "--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.7)",
      "--dsw-alias-border-l1": "rgba(0, 0, 0, 0.3)",
      "--dsw-alias-border-l2": "rgba(0, 0, 0, 0.45)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(0, 0, 0, 0.3)",
      "--dsw-alias-border-l3": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-border-l4": "rgb(0, 0, 0)",
      "--dsw-alias-brand-primary-invert": "rgb(255, 255, 255)",
      "--dsw-alias-brand-text": "rgb(255, 255, 255)",
      "--dsw-alias-button-contrast-fill": "rgb(64, 64, 64)",
      "--dsw-alias-button-elevated-fill": "rgb(216, 216, 216)",
      "--dsw-alias-button-floating-fill": "rgb(216, 216, 216)",
      "--dsw-alias-button-floating-hover": "rgb(207, 207, 207)",
      "--dsw-alias-button-ghost-active-border": "rgba(0, 0, 0, 0.5)",
      "--dsw-alias-button-ghost-active-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-ghost-active-hover": "rgb(190, 190, 190)",
      "--dsw-alias-button-info-fill": "rgb(96, 96, 96)",
      "--dsw-alias-button-info-hover": "rgb(112, 112, 112)",
      "--dsw-alias-button-primary-dimmed": "rgb(176, 176, 176)",
      "--dsw-alias-button-primary-fill": "rgb(192, 192, 192)",
      "--dsw-alias-button-primary-hover": "rgb(204, 204, 204)",
      "--dsw-alias-button-tool-bar-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(0, 0, 0, 0.05)",
      "--dsw-alias-button-tool-bar-hover": "rgb(190, 190, 190)",
      "--dsw-alias-interactive-bg-active": "rgba(30, 86, 198, 0.28)",
      "--dsw-alias-interactive-bg-hover": "rgba(0, 0, 0, 0.07)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(30, 86, 198, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(204, 0, 0, 0.1)",
      "--dsw-alias-interactive-bg-hover-solid": "rgb(200, 200, 200)",
      "--dsw-alias-label-caption": "rgb(128, 128, 128)",
      "--dsw-alias-label-dimmed": "rgb(160, 160, 160)",
      "--dsw-alias-label-primary": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-bluish": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-dimmed": "rgb(64, 64, 64)",
      "--dsw-alias-label-primary-foreground": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-inverted": "rgb(255, 255, 255)",
      "--dsw-alias-label-secondary": "rgb(51, 51, 51)",
      "--dsw-alias-label-tertiary": "rgb(102, 102, 102)",
      "--dsw-alias-markdown-citation": "rgba(0, 0, 0, 0.07)",
      "--dsw-alias-markdown-code-block": "rgb(237, 237, 237)",
      "--dsw-alias-markdown-code-block-banner": "rgb(226, 226, 226)",
      "--dsw-alias-markdown-code-segment-selected": "rgb(255, 255, 255)",
      "--dsw-alias-markdown-code-segment-unselected": "rgb(228, 228, 228)",
      "--dsw-alias-markdown-inline-code": "rgba(0, 0, 0, 0.09)",
      "--dsw-alias-markdown-placeholder": "rgb(216, 216, 216)",
      "--dsw-alias-markdown-tag": "rgb(216, 216, 216)",
      "--dsw-alias-scrollbar-bg-l1": "rgb(192, 192, 192)",
      "--dsw-alias-scrollbar-bg-l2": "rgb(168, 168, 168)",
      "--dsw-alias-scrollbar-hover-l1": "rgb(180, 180, 180)",
      "--dsw-alias-scrollbar-hover-l2": "rgb(156, 156, 156)",
      "--dsw-alias-state-business-primary": "rgb(64, 64, 64)",
      "--dsw-alias-state-business-tertiary": "rgba(0, 0, 0, 0.08)",
      "--dsw-alias-state-error-primary": "rgb(204, 0, 0)",
      "--dsw-alias-state-error-secondary": "rgb(224, 64, 64)",
      "--dsw-alias-state-success-primary": "rgb(0, 119, 0)",
      "--dsw-alias-state-success-secondary": "rgb(32, 154, 32)",
      "--dsw-alias-state-success-tertiary": "rgb(226, 242, 226)",
      "--dsw-alias-state-warn-label": "rgb(153, 85, 0)",
      "--dsw-alias-state-warn-primary": "rgb(204, 120, 0)",
      "--dsw-alias-state-warn-secondary": "rgb(224, 140, 20)",
      "--dsw-alias-state-warn-tertiary": "rgb(242, 230, 204)",
      "--dsw-alias-toast-bg": "rgb(64, 64, 64)",
      "--dsw-alias-tooltip-bg": "rgb(64, 64, 64)",
      "--dsw-specific-bubble": "rgb(214, 214, 214)",
      "--dsw-specific-bubble-highlight": "rgba(0, 0, 0, 0.1)",
      "--dsw-specific-input-major": "rgb(255, 255, 255)",
      "--dsw-specific-login-input": "rgb(242, 242, 242)",
      "--dsw-specific-menu": "rgb(221, 221, 221)",
      "--dsw-specific-selector": "rgb(216, 216, 216)",
      "--dsw-specific-sidebar-fill": "rgb(216, 216, 216)",
      "--dsw-specific-sidebar-nav-item-active": "rgb(30, 86, 198)",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(30, 86, 198, 0.3)",
      "--dsw-specific-sidebar-nav-item-hover": "rgba(0, 0, 0, 0.07)",
      "--dsw-specific-tip": "rgb(216, 216, 216)",
      "--dsw-static-deepseek-50": "rgb(236, 236, 236)",
      "--dsw-static-deepseek-100": "rgb(220, 220, 220)",
      "--dsw-static-deepseek-200": "rgb(200, 200, 200)",
      "--dsw-static-deepseek-500": "rgb(30, 86, 198)",
      "--shiki-background": "rgb(237, 237, 237)",
      "--shiki-foreground": "rgb(0, 0, 0)",
      "--shiki-token-comment": "rgb(119, 119, 119)",
      "--shiki-token-constant": "rgb(0, 0, 0)",
      "--shiki-token-function": "rgb(0, 0, 0)",
      "--shiki-token-keyword": "rgb(0, 0, 0)",
      "--shiki-token-link": "rgb(0, 0, 0)",
      "--shiki-token-parameter": "rgb(34, 34, 34)",
      "--shiki-token-punctuation": "rgb(85, 85, 85)",
      "--shiki-token-string": "rgb(0, 0, 0)",
      "--shiki-token-string-expression": "rgb(0, 0, 0)",
      "--dsw-alias-brand-primary": "rgb(30, 86, 198)"
    }
  },
  {
    "id": "retro-mac-platinum-teal",
    "name": "铂金 · Teal 青",
    "nameEn": "Platinum · System Teal",
    "colorScheme": "light",
    "tokens": {
      "--dsw-alias-bg-base": "rgba(232, 232, 232, 0.85)",
      "--dsw-alias-bg-layer-1": "rgb(221, 221, 221)",
      "--dsw-alias-bg-layer-2": "rgb(212, 212, 212)",
      "--dsw-alias-bg-layer-3": "rgb(192, 192, 192)",
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.4)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.2)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.55)",
      "--dsw-alias-bg-mask-drop": "rgba(255, 255, 255, 0.8)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-module-platform": "rgb(216, 216, 216)",
      "--dsw-alias-bg-multi-select": "rgba(0, 128, 128, 0.25)",
      "--dsw-alias-bg-overlay": "rgb(221, 221, 221)",
      "--dsw-alias-bg-skeleton": "rgba(0, 0, 0, 0.15)",
      "--dsw-alias-border-inverted": "rgb(255, 255, 255)",
      "--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.7)",
      "--dsw-alias-border-l1": "rgba(0, 0, 0, 0.3)",
      "--dsw-alias-border-l2": "rgba(0, 0, 0, 0.45)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(0, 0, 0, 0.3)",
      "--dsw-alias-border-l3": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-border-l4": "rgb(0, 0, 0)",
      "--dsw-alias-brand-primary-invert": "rgb(255, 255, 255)",
      "--dsw-alias-brand-text": "rgb(255, 255, 255)",
      "--dsw-alias-button-contrast-fill": "rgb(64, 64, 64)",
      "--dsw-alias-button-elevated-fill": "rgb(216, 216, 216)",
      "--dsw-alias-button-floating-fill": "rgb(216, 216, 216)",
      "--dsw-alias-button-floating-hover": "rgb(207, 207, 207)",
      "--dsw-alias-button-ghost-active-border": "rgba(0, 0, 0, 0.5)",
      "--dsw-alias-button-ghost-active-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-ghost-active-hover": "rgb(190, 190, 190)",
      "--dsw-alias-button-info-fill": "rgb(96, 96, 96)",
      "--dsw-alias-button-info-hover": "rgb(112, 112, 112)",
      "--dsw-alias-button-primary-dimmed": "rgb(176, 176, 176)",
      "--dsw-alias-button-primary-fill": "rgb(192, 192, 192)",
      "--dsw-alias-button-primary-hover": "rgb(204, 204, 204)",
      "--dsw-alias-button-tool-bar-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(0, 0, 0, 0.05)",
      "--dsw-alias-button-tool-bar-hover": "rgb(190, 190, 190)",
      "--dsw-alias-interactive-bg-active": "rgba(0, 128, 128, 0.28)",
      "--dsw-alias-interactive-bg-hover": "rgba(0, 0, 0, 0.07)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(0, 128, 128, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(204, 0, 0, 0.1)",
      "--dsw-alias-interactive-bg-hover-solid": "rgb(200, 200, 200)",
      "--dsw-alias-label-caption": "rgb(128, 128, 128)",
      "--dsw-alias-label-dimmed": "rgb(160, 160, 160)",
      "--dsw-alias-label-primary": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-bluish": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-dimmed": "rgb(64, 64, 64)",
      "--dsw-alias-label-primary-foreground": "rgb(0, 0, 0)",
      "--dsw-alias-label-primary-inverted": "rgb(255, 255, 255)",
      "--dsw-alias-label-secondary": "rgb(51, 51, 51)",
      "--dsw-alias-label-tertiary": "rgb(102, 102, 102)",
      "--dsw-alias-markdown-citation": "rgba(0, 0, 0, 0.07)",
      "--dsw-alias-markdown-code-block": "rgb(237, 237, 237)",
      "--dsw-alias-markdown-code-block-banner": "rgb(226, 226, 226)",
      "--dsw-alias-markdown-code-segment-selected": "rgb(255, 255, 255)",
      "--dsw-alias-markdown-code-segment-unselected": "rgb(228, 228, 228)",
      "--dsw-alias-markdown-inline-code": "rgba(0, 0, 0, 0.09)",
      "--dsw-alias-markdown-placeholder": "rgb(216, 216, 216)",
      "--dsw-alias-markdown-tag": "rgb(216, 216, 216)",
      "--dsw-alias-scrollbar-bg-l1": "rgb(192, 192, 192)",
      "--dsw-alias-scrollbar-bg-l2": "rgb(168, 168, 168)",
      "--dsw-alias-scrollbar-hover-l1": "rgb(180, 180, 180)",
      "--dsw-alias-scrollbar-hover-l2": "rgb(156, 156, 156)",
      "--dsw-alias-state-business-primary": "rgb(64, 64, 64)",
      "--dsw-alias-state-business-tertiary": "rgba(0, 0, 0, 0.08)",
      "--dsw-alias-state-error-primary": "rgb(204, 0, 0)",
      "--dsw-alias-state-error-secondary": "rgb(224, 64, 64)",
      "--dsw-alias-state-success-primary": "rgb(0, 119, 0)",
      "--dsw-alias-state-success-secondary": "rgb(32, 154, 32)",
      "--dsw-alias-state-success-tertiary": "rgb(226, 242, 226)",
      "--dsw-alias-state-warn-label": "rgb(153, 85, 0)",
      "--dsw-alias-state-warn-primary": "rgb(204, 120, 0)",
      "--dsw-alias-state-warn-secondary": "rgb(224, 140, 20)",
      "--dsw-alias-state-warn-tertiary": "rgb(242, 230, 204)",
      "--dsw-alias-toast-bg": "rgb(64, 64, 64)",
      "--dsw-alias-tooltip-bg": "rgb(64, 64, 64)",
      "--dsw-specific-bubble": "rgb(214, 214, 214)",
      "--dsw-specific-bubble-highlight": "rgba(0, 0, 0, 0.1)",
      "--dsw-specific-input-major": "rgb(255, 255, 255)",
      "--dsw-specific-login-input": "rgb(242, 242, 242)",
      "--dsw-specific-menu": "rgb(221, 221, 221)",
      "--dsw-specific-selector": "rgb(216, 216, 216)",
      "--dsw-specific-sidebar-fill": "rgb(216, 216, 216)",
      "--dsw-specific-sidebar-nav-item-active": "rgb(0, 128, 128)",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(0, 128, 128, 0.3)",
      "--dsw-specific-sidebar-nav-item-hover": "rgba(0, 0, 0, 0.07)",
      "--dsw-specific-tip": "rgb(216, 216, 216)",
      "--dsw-static-deepseek-50": "rgb(236, 236, 236)",
      "--dsw-static-deepseek-100": "rgb(220, 220, 220)",
      "--dsw-static-deepseek-200": "rgb(200, 200, 200)",
      "--dsw-static-deepseek-500": "rgb(0, 128, 128)",
      "--shiki-background": "rgb(237, 237, 237)",
      "--shiki-foreground": "rgb(0, 0, 0)",
      "--shiki-token-comment": "rgb(119, 119, 119)",
      "--shiki-token-constant": "rgb(0, 0, 0)",
      "--shiki-token-function": "rgb(0, 0, 0)",
      "--shiki-token-keyword": "rgb(0, 0, 0)",
      "--shiki-token-link": "rgb(0, 0, 0)",
      "--shiki-token-parameter": "rgb(34, 34, 34)",
      "--shiki-token-punctuation": "rgb(85, 85, 85)",
      "--shiki-token-string": "rgb(0, 0, 0)",
      "--shiki-token-string-expression": "rgb(0, 0, 0)",
      "--dsw-alias-brand-primary": "rgb(0, 128, 128)"
    }
  },
  {
    "id": "retro-mac-graphite-blue",
    "name": "石墨 · 经典蓝",
    "nameEn": "Graphite · Classic Blue",
    "colorScheme": "dark",
    "tokens": {
      "--dsw-alias-bg-base": "rgba(58, 58, 58, 0.85)",
      "--dsw-alias-bg-layer-1": "rgb(74, 74, 74)",
      "--dsw-alias-bg-layer-2": "rgb(66, 66, 66)",
      "--dsw-alias-bg-layer-3": "rgb(56, 56, 56)",
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.5)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.25)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-mask-drop": "rgba(45, 45, 45, 0.75)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-module-platform": "rgb(66, 66, 66)",
      "--dsw-alias-bg-multi-select": "rgba(46, 111, 224, 0.28)",
      "--dsw-alias-bg-overlay": "rgb(74, 74, 74)",
      "--dsw-alias-bg-skeleton": "rgba(255, 255, 255, 0.12)",
      "--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.2)",
      "--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.14)",
      "--dsw-alias-border-l1": "rgba(255, 255, 255, 0.22)",
      "--dsw-alias-border-l2": "rgba(255, 255, 255, 0.32)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(255, 255, 255, 0.22)",
      "--dsw-alias-border-l3": "rgba(255, 255, 255, 0.42)",
      "--dsw-alias-border-l4": "rgba(255, 255, 255, 0.6)",
      "--dsw-alias-brand-primary-invert": "rgb(255, 255, 255)",
      "--dsw-alias-brand-text": "rgb(255, 255, 255)",
      "--dsw-alias-button-contrast-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-elevated-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-floating-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-floating-hover": "rgb(74, 74, 74)",
      "--dsw-alias-button-ghost-active-border": "rgba(255, 255, 255, 0.4)",
      "--dsw-alias-button-ghost-active-fill": "rgb(60, 60, 60)",
      "--dsw-alias-button-ghost-active-hover": "rgb(68, 68, 68)",
      "--dsw-alias-button-info-fill": "rgb(150, 150, 150)",
      "--dsw-alias-button-info-hover": "rgb(165, 165, 165)",
      "--dsw-alias-button-primary-dimmed": "rgb(56, 56, 56)",
      "--dsw-alias-button-primary-fill": "rgb(90, 90, 90)",
      "--dsw-alias-button-primary-hover": "rgb(100, 100, 100)",
      "--dsw-alias-button-tool-bar-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(255, 255, 255, 0.06)",
      "--dsw-alias-button-tool-bar-hover": "rgb(76, 76, 76)",
      "--dsw-alias-interactive-bg-active": "rgba(46, 111, 224, 0.35)",
      "--dsw-alias-interactive-bg-hover": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(46, 111, 224, 0.2)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(204, 0, 0, 0.18)",
      "--dsw-alias-interactive-bg-hover-solid": "rgb(60, 60, 60)",
      "--dsw-alias-label-caption": "rgb(128, 128, 128)",
      "--dsw-alias-label-dimmed": "rgb(102, 102, 102)",
      "--dsw-alias-label-primary": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-bluish": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-dimmed": "rgb(210, 210, 210)",
      "--dsw-alias-label-primary-foreground": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-inverted": "rgb(20, 20, 20)",
      "--dsw-alias-label-secondary": "rgb(204, 204, 204)",
      "--dsw-alias-label-tertiary": "rgb(153, 153, 153)",
      "--dsw-alias-markdown-citation": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-markdown-code-block": "rgb(40, 40, 40)",
      "--dsw-alias-markdown-code-block-banner": "rgb(44, 44, 44)",
      "--dsw-alias-markdown-code-segment-selected": "rgb(66, 66, 66)",
      "--dsw-alias-markdown-code-segment-unselected": "rgb(36, 36, 36)",
      "--dsw-alias-markdown-inline-code": "rgba(255, 255, 255, 0.1)",
      "--dsw-alias-markdown-placeholder": "rgb(48, 48, 48)",
      "--dsw-alias-markdown-tag": "rgb(56, 56, 56)",
      "--dsw-alias-scrollbar-bg-l1": "rgb(56, 56, 56)",
      "--dsw-alias-scrollbar-bg-l2": "rgb(85, 85, 85)",
      "--dsw-alias-scrollbar-hover-l1": "rgb(66, 66, 66)",
      "--dsw-alias-scrollbar-hover-l2": "rgb(95, 95, 95)",
      "--dsw-alias-state-business-primary": "rgb(190, 190, 190)",
      "--dsw-alias-state-business-tertiary": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-state-error-primary": "rgb(255, 96, 96)",
      "--dsw-alias-state-error-secondary": "rgb(255, 130, 130)",
      "--dsw-alias-state-success-primary": "rgb(96, 210, 96)",
      "--dsw-alias-state-success-secondary": "rgb(120, 220, 120)",
      "--dsw-alias-state-success-tertiary": "rgb(34, 60, 34)",
      "--dsw-alias-state-warn-label": "rgb(255, 180, 60)",
      "--dsw-alias-state-warn-primary": "rgb(240, 160, 40)",
      "--dsw-alias-state-warn-secondary": "rgb(255, 185, 70)",
      "--dsw-alias-state-warn-tertiary": "rgb(70, 50, 20)",
      "--dsw-alias-toast-bg": "rgb(45, 45, 45)",
      "--dsw-alias-tooltip-bg": "rgb(45, 45, 45)",
      "--dsw-specific-bubble": "rgb(66, 66, 66)",
      "--dsw-specific-bubble-highlight": "rgba(255, 255, 255, 0.1)",
      "--dsw-specific-input-major": "rgb(50, 50, 50)",
      "--dsw-specific-login-input": "rgb(56, 56, 56)",
      "--dsw-specific-menu": "rgb(74, 74, 74)",
      "--dsw-specific-selector": "rgb(66, 66, 66)",
      "--dsw-specific-sidebar-fill": "rgb(66, 66, 66)",
      "--dsw-specific-sidebar-nav-item-active": "rgb(46, 111, 224)",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(46, 111, 224, 0.32)",
      "--dsw-specific-sidebar-nav-item-hover": "rgba(255, 255, 255, 0.08)",
      "--dsw-specific-tip": "rgb(66, 66, 66)",
      "--dsw-static-deepseek-50": "rgb(56, 60, 68)",
      "--dsw-static-deepseek-100": "rgb(64, 70, 80)",
      "--dsw-static-deepseek-200": "rgb(76, 84, 96)",
      "--dsw-static-deepseek-500": "rgb(46, 111, 224)",
      "--shiki-background": "rgb(40, 40, 40)",
      "--shiki-foreground": "rgb(230, 230, 230)",
      "--shiki-token-comment": "rgb(140, 140, 140)",
      "--shiki-token-constant": "rgb(230, 230, 230)",
      "--shiki-token-function": "rgb(230, 230, 230)",
      "--shiki-token-keyword": "rgb(230, 230, 230)",
      "--shiki-token-link": "rgb(230, 230, 230)",
      "--shiki-token-parameter": "rgb(210, 210, 210)",
      "--shiki-token-punctuation": "rgb(170, 170, 170)",
      "--shiki-token-string": "rgb(230, 230, 230)",
      "--shiki-token-string-expression": "rgb(230, 230, 230)",
      "--dsw-alias-brand-primary": "rgb(46, 111, 224)"
    }
  },
  {
    "id": "retro-mac-graphite-teal",
    "name": "石墨 · Teal 青",
    "nameEn": "Graphite · System Teal",
    "colorScheme": "dark",
    "tokens": {
      "--dsw-alias-bg-base": "rgba(58, 58, 58, 0.85)",
      "--dsw-alias-bg-layer-1": "rgb(74, 74, 74)",
      "--dsw-alias-bg-layer-2": "rgb(66, 66, 66)",
      "--dsw-alias-bg-layer-3": "rgb(56, 56, 56)",
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.5)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.25)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-mask-drop": "rgba(45, 45, 45, 0.75)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.6)",
      "--dsw-alias-bg-module-platform": "rgb(66, 66, 66)",
      "--dsw-alias-bg-multi-select": "rgba(0, 168, 168, 0.28)",
      "--dsw-alias-bg-overlay": "rgb(74, 74, 74)",
      "--dsw-alias-bg-skeleton": "rgba(255, 255, 255, 0.12)",
      "--dsw-alias-border-inverted": "rgba(255, 255, 255, 0.2)",
      "--dsw-alias-border-inverted2": "rgba(255, 255, 255, 0.14)",
      "--dsw-alias-border-l1": "rgba(255, 255, 255, 0.22)",
      "--dsw-alias-border-l2": "rgba(255, 255, 255, 0.32)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(255, 255, 255, 0.22)",
      "--dsw-alias-border-l3": "rgba(255, 255, 255, 0.42)",
      "--dsw-alias-border-l4": "rgba(255, 255, 255, 0.6)",
      "--dsw-alias-brand-primary-invert": "rgb(255, 255, 255)",
      "--dsw-alias-brand-text": "rgb(255, 255, 255)",
      "--dsw-alias-button-contrast-fill": "rgb(200, 200, 200)",
      "--dsw-alias-button-elevated-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-floating-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-floating-hover": "rgb(74, 74, 74)",
      "--dsw-alias-button-ghost-active-border": "rgba(255, 255, 255, 0.4)",
      "--dsw-alias-button-ghost-active-fill": "rgb(60, 60, 60)",
      "--dsw-alias-button-ghost-active-hover": "rgb(68, 68, 68)",
      "--dsw-alias-button-info-fill": "rgb(150, 150, 150)",
      "--dsw-alias-button-info-hover": "rgb(165, 165, 165)",
      "--dsw-alias-button-primary-dimmed": "rgb(56, 56, 56)",
      "--dsw-alias-button-primary-fill": "rgb(90, 90, 90)",
      "--dsw-alias-button-primary-hover": "rgb(100, 100, 100)",
      "--dsw-alias-button-tool-bar-fill": "rgb(66, 66, 66)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(255, 255, 255, 0.06)",
      "--dsw-alias-button-tool-bar-hover": "rgb(76, 76, 76)",
      "--dsw-alias-interactive-bg-active": "rgba(0, 168, 168, 0.35)",
      "--dsw-alias-interactive-bg-hover": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(0, 168, 168, 0.2)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(204, 0, 0, 0.18)",
      "--dsw-alias-interactive-bg-hover-solid": "rgb(60, 60, 60)",
      "--dsw-alias-label-caption": "rgb(128, 128, 128)",
      "--dsw-alias-label-dimmed": "rgb(102, 102, 102)",
      "--dsw-alias-label-primary": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-bluish": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-dimmed": "rgb(210, 210, 210)",
      "--dsw-alias-label-primary-foreground": "rgb(245, 245, 245)",
      "--dsw-alias-label-primary-inverted": "rgb(20, 20, 20)",
      "--dsw-alias-label-secondary": "rgb(204, 204, 204)",
      "--dsw-alias-label-tertiary": "rgb(153, 153, 153)",
      "--dsw-alias-markdown-citation": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-markdown-code-block": "rgb(40, 40, 40)",
      "--dsw-alias-markdown-code-block-banner": "rgb(44, 44, 44)",
      "--dsw-alias-markdown-code-segment-selected": "rgb(66, 66, 66)",
      "--dsw-alias-markdown-code-segment-unselected": "rgb(36, 36, 36)",
      "--dsw-alias-markdown-inline-code": "rgba(255, 255, 255, 0.1)",
      "--dsw-alias-markdown-placeholder": "rgb(48, 48, 48)",
      "--dsw-alias-markdown-tag": "rgb(56, 56, 56)",
      "--dsw-alias-scrollbar-bg-l1": "rgb(56, 56, 56)",
      "--dsw-alias-scrollbar-bg-l2": "rgb(85, 85, 85)",
      "--dsw-alias-scrollbar-hover-l1": "rgb(66, 66, 66)",
      "--dsw-alias-scrollbar-hover-l2": "rgb(95, 95, 95)",
      "--dsw-alias-state-business-primary": "rgb(190, 190, 190)",
      "--dsw-alias-state-business-tertiary": "rgba(255, 255, 255, 0.08)",
      "--dsw-alias-state-error-primary": "rgb(255, 96, 96)",
      "--dsw-alias-state-error-secondary": "rgb(255, 130, 130)",
      "--dsw-alias-state-success-primary": "rgb(96, 210, 96)",
      "--dsw-alias-state-success-secondary": "rgb(120, 220, 120)",
      "--dsw-alias-state-success-tertiary": "rgb(34, 60, 34)",
      "--dsw-alias-state-warn-label": "rgb(255, 180, 60)",
      "--dsw-alias-state-warn-primary": "rgb(240, 160, 40)",
      "--dsw-alias-state-warn-secondary": "rgb(255, 185, 70)",
      "--dsw-alias-state-warn-tertiary": "rgb(70, 50, 20)",
      "--dsw-alias-toast-bg": "rgb(45, 45, 45)",
      "--dsw-alias-tooltip-bg": "rgb(45, 45, 45)",
      "--dsw-specific-bubble": "rgb(66, 66, 66)",
      "--dsw-specific-bubble-highlight": "rgba(255, 255, 255, 0.1)",
      "--dsw-specific-input-major": "rgb(50, 50, 50)",
      "--dsw-specific-login-input": "rgb(56, 56, 56)",
      "--dsw-specific-menu": "rgb(74, 74, 74)",
      "--dsw-specific-selector": "rgb(66, 66, 66)",
      "--dsw-specific-sidebar-fill": "rgb(66, 66, 66)",
      "--dsw-specific-sidebar-nav-item-active": "rgb(0, 168, 168)",
      "--dsw-specific-sidebar-nav-item-active-accent": "rgba(0, 168, 168, 0.32)",
      "--dsw-specific-sidebar-nav-item-hover": "rgba(255, 255, 255, 0.08)",
      "--dsw-specific-tip": "rgb(66, 66, 66)",
      "--dsw-static-deepseek-50": "rgb(56, 60, 68)",
      "--dsw-static-deepseek-100": "rgb(64, 70, 80)",
      "--dsw-static-deepseek-200": "rgb(76, 84, 96)",
      "--dsw-static-deepseek-500": "rgb(0, 168, 168)",
      "--shiki-background": "rgb(40, 40, 40)",
      "--shiki-foreground": "rgb(230, 230, 230)",
      "--shiki-token-comment": "rgb(140, 140, 140)",
      "--shiki-token-constant": "rgb(230, 230, 230)",
      "--shiki-token-function": "rgb(230, 230, 230)",
      "--shiki-token-keyword": "rgb(230, 230, 230)",
      "--shiki-token-link": "rgb(230, 230, 230)",
      "--shiki-token-parameter": "rgb(210, 210, 210)",
      "--shiki-token-punctuation": "rgb(170, 170, 170)",
      "--shiki-token-string": "rgb(230, 230, 230)",
      "--shiki-token-string-expression": "rgb(230, 230, 230)",
      "--dsw-alias-brand-primary": "rgb(0, 168, 168)"
    }
  }
];

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
			"  src: url(data:font/woff;base64,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) format('woff');",
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
