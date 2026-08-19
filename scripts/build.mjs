/**
 * dsh-retro-mac build script (zero dependencies, plain Node).
 *
 * Reads themes/*.json (base palettes WITHOUT accent tokens), merges the
 * classic highlight accents (blue / System 7 teal, per palette), validates
 * the full 103-token baseline, injects the generated 4-theme catalog and the
 * Chicago web font (as a base64 data URI, so the plugin needs no extra
 * asset-serving) into src/client.tpl.js, and writes lib/client.js. Also
 * copies src/index.js → lib/index.js.
 */
import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

/**
 * The 103-key baseline: every alias/specific/static-deepseek/shiki token the
 * web shell actually consumes (mirrors the key set in dsh-neu-theme's
 * working theme tables and the official design-platform.css alias layer).
 */
const EXPECTED_KEYS = [
  '--dsw-alias-bg-base', '--dsw-alias-bg-layer-1', '--dsw-alias-bg-layer-2',
  '--dsw-alias-bg-layer-3', '--dsw-alias-bg-mask-1', '--dsw-alias-bg-mask-2',
  '--dsw-alias-bg-mask-3', '--dsw-alias-bg-mask-drop', '--dsw-alias-bg-mask-photo',
  '--dsw-alias-bg-module-platform', '--dsw-alias-bg-multi-select',
  '--dsw-alias-bg-overlay', '--dsw-alias-bg-skeleton',
  '--dsw-alias-border-inverted', '--dsw-alias-border-inverted2',
  '--dsw-alias-border-l1', '--dsw-alias-border-l2',
  '--dsw-alias-border-l2-darkmode-thin', '--dsw-alias-border-l3',
  '--dsw-alias-border-l4',
  '--dsw-alias-brand-primary', '--dsw-alias-brand-primary-invert',
  '--dsw-alias-brand-text',
  '--dsw-alias-button-contrast-fill', '--dsw-alias-button-elevated-fill',
  '--dsw-alias-button-floating-fill', '--dsw-alias-button-floating-hover',
  '--dsw-alias-button-ghost-active-border', '--dsw-alias-button-ghost-active-fill',
  '--dsw-alias-button-ghost-active-hover', '--dsw-alias-button-info-fill',
  '--dsw-alias-button-info-hover', '--dsw-alias-button-primary-dimmed',
  '--dsw-alias-button-primary-fill', '--dsw-alias-button-primary-hover',
  '--dsw-alias-button-tool-bar-fill', '--dsw-alias-button-tool-bar-fill-invisible',
  '--dsw-alias-button-tool-bar-hover',
  '--dsw-alias-interactive-bg-active', '--dsw-alias-interactive-bg-hover',
  '--dsw-alias-interactive-bg-hover-accent',
  '--dsw-alias-interactive-bg-hover-danger',
  '--dsw-alias-interactive-bg-hover-solid',
  '--dsw-alias-label-caption', '--dsw-alias-label-dimmed',
  '--dsw-alias-label-primary', '--dsw-alias-label-primary-bluish',
  '--dsw-alias-label-primary-dimmed', '--dsw-alias-label-primary-foreground',
  '--dsw-alias-label-primary-inverted', '--dsw-alias-label-secondary',
  '--dsw-alias-label-tertiary',
  '--dsw-alias-markdown-citation', '--dsw-alias-markdown-code-block',
  '--dsw-alias-markdown-code-block-banner',
  '--dsw-alias-markdown-code-segment-selected',
  '--dsw-alias-markdown-code-segment-unselected',
  '--dsw-alias-markdown-inline-code', '--dsw-alias-markdown-placeholder',
  '--dsw-alias-markdown-tag',
  '--dsw-alias-scrollbar-bg-l1', '--dsw-alias-scrollbar-bg-l2',
  '--dsw-alias-scrollbar-hover-l1', '--dsw-alias-scrollbar-hover-l2',
  '--dsw-alias-state-business-primary', '--dsw-alias-state-business-tertiary',
  '--dsw-alias-state-error-primary', '--dsw-alias-state-error-secondary',
  '--dsw-alias-state-success-primary', '--dsw-alias-state-success-secondary',
  '--dsw-alias-state-success-tertiary', '--dsw-alias-state-warn-label',
  '--dsw-alias-state-warn-primary', '--dsw-alias-state-warn-secondary',
  '--dsw-alias-state-warn-tertiary',
  '--dsw-alias-toast-bg', '--dsw-alias-tooltip-bg',
  '--dsw-specific-bubble', '--dsw-specific-bubble-highlight',
  '--dsw-specific-input-major', '--dsw-specific-login-input',
  '--dsw-specific-menu', '--dsw-specific-selector',
  '--dsw-specific-sidebar-fill', '--dsw-specific-sidebar-nav-item-active',
  '--dsw-specific-sidebar-nav-item-active-accent',
  '--dsw-specific-sidebar-nav-item-hover', '--dsw-specific-tip',
  '--dsw-static-deepseek-50', '--dsw-static-deepseek-100',
  '--dsw-static-deepseek-200', '--dsw-static-deepseek-500',
  '--shiki-background', '--shiki-foreground',
  '--shiki-token-comment', '--shiki-token-constant', '--shiki-token-function',
  '--shiki-token-keyword', '--shiki-token-link', '--shiki-token-parameter',
  '--shiki-token-punctuation', '--shiki-token-string',
  '--shiki-token-string-expression'
]

/**
 * Classic highlight accents — the Appearance Manager "customizable palette"
 * homage. Each accent defines the accent-driven tokens per palette (light =
 * platinum, dark = graphite).
 */
/**
 * Classic highlight accents — the Appearance Manager "customizable palette"
 * homage. In Platinum, blue/teal are STRICTLY the system selection/highlight
 * colors: they may only tint selection, multi-select, sidebar selection and
 * the accent hover states. Buttons, links, progress and info surfaces stay on
 * the six-level grayscale (face/highlight/mid/shadow/dark/black) defined in
 * the base palettes — modern colored chrome is explicitly not part of the
 * Mac OS 8/9 Platinum language.
 */
const ACCENTS = {
  blue: {
    id: 'blue',
    name: '经典蓝',
    nameEn: 'Classic Blue',
    light: {
      '--dsw-alias-brand-primary': 'rgb(30, 86, 198)',
      '--dsw-alias-interactive-bg-active': 'rgba(30, 86, 198, 0.28)',
      '--dsw-alias-interactive-bg-hover-accent': 'rgba(30, 86, 198, 0.14)',
      '--dsw-alias-bg-multi-select': 'rgba(30, 86, 198, 0.25)',
      '--dsw-specific-sidebar-nav-item-active': 'rgb(30, 86, 198)',
      '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(30, 86, 198, 0.3)',
      '--dsw-static-deepseek-500': 'rgb(30, 86, 198)'
    },
    dark: {
      '--dsw-alias-brand-primary': 'rgb(46, 111, 224)',
      '--dsw-alias-interactive-bg-active': 'rgba(46, 111, 224, 0.35)',
      '--dsw-alias-interactive-bg-hover-accent': 'rgba(46, 111, 224, 0.2)',
      '--dsw-alias-bg-multi-select': 'rgba(46, 111, 224, 0.28)',
      '--dsw-specific-sidebar-nav-item-active': 'rgb(46, 111, 224)',
      '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(46, 111, 224, 0.32)',
      '--dsw-static-deepseek-500': 'rgb(46, 111, 224)'
    }
  },
  teal: {
    id: 'teal',
    name: 'Teal 青',
    nameEn: 'System Teal',
    light: {
      '--dsw-alias-brand-primary': 'rgb(0, 128, 128)',
      '--dsw-alias-interactive-bg-active': 'rgba(0, 128, 128, 0.28)',
      '--dsw-alias-interactive-bg-hover-accent': 'rgba(0, 128, 128, 0.14)',
      '--dsw-alias-bg-multi-select': 'rgba(0, 128, 128, 0.25)',
      '--dsw-specific-sidebar-nav-item-active': 'rgb(0, 128, 128)',
      '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(0, 128, 128, 0.3)',
      '--dsw-static-deepseek-500': 'rgb(0, 128, 128)'
    },
    dark: {
      '--dsw-alias-brand-primary': 'rgb(0, 168, 168)',
      '--dsw-alias-interactive-bg-active': 'rgba(0, 168, 168, 0.35)',
      '--dsw-alias-interactive-bg-hover-accent': 'rgba(0, 168, 168, 0.2)',
      '--dsw-alias-bg-multi-select': 'rgba(0, 168, 168, 0.28)',
      '--dsw-specific-sidebar-nav-item-active': 'rgb(0, 168, 168)',
      '--dsw-specific-sidebar-nav-item-active-accent': 'rgba(0, 168, 168, 0.32)',
      '--dsw-static-deepseek-500': 'rgb(0, 168, 168)'
    }
  }
}

const SKIN_NAMES = {
  platinum: { name: '铂金 · ', nameEn: 'Platinum · ', colorScheme: 'light' },
  graphite: { name: '石墨 · ', nameEn: 'Graphite · ', colorScheme: 'dark' }
}

// 1) base palettes (no accent tokens)
const palettes = {}
for (const skin of ['platinum', 'graphite']) {
  const palette = JSON.parse(readFileSync(join(root, 'themes', skin + '.json'), 'utf8'))
  if (palette.skin !== skin) throw new Error('themes/' + skin + '.json: skin mismatch')
  palettes[skin] = palette.tokens
}

// 2) generate the 4-theme catalog
const themes = []
for (const skin of Object.keys(SKIN_NAMES)) {
  for (const accent of Object.keys(ACCENTS)) {
    const meta = SKIN_NAMES[skin]
    const acc = ACCENTS[accent]
    const tokens = { ...palettes[skin], ...acc[meta.colorScheme] }
    const keys = Object.keys(tokens)
    const missing = EXPECTED_KEYS.filter((key) => !keys.includes(key))
    const extra = keys.filter((key) => !EXPECTED_KEYS.includes(key))
    if (missing.length) throw new Error(skin + '+' + accent + ': missing ' + missing.join(', '))
    if (extra.length) throw new Error(skin + '+' + accent + ': unknown ' + extra.join(', '))
    themes.push({
      id: 'retro-mac-' + skin + '-' + accent,
      name: meta.name + acc.name,
      nameEn: meta.nameEn + acc.nameEn,
      colorScheme: meta.colorScheme,
      tokens
    })
  }
}

// 3) Chicago web font → base64 data URI
const woff = readFileSync(join(root, 'src', 'ChicagoFLF.woff'))
const fontUri = 'data:font/woff;base64,' + woff.toString('base64')

// 4) inject into the client template
let template = readFileSync(join(root, 'src', 'client.tpl.js'), 'utf8')
if (!template.includes('__THEMES_JSON__')) throw new Error('src/client.tpl.js: missing __THEMES_JSON__')
if (!template.includes('__CHICAGO_FONT_URI__')) throw new Error('src/client.tpl.js: missing __CHICAGO_FONT_URI__')
template = template.replace('__THEMES_JSON__', JSON.stringify(themes, null, 2))
template = template.replace('__CHICAGO_FONT_URI__', fontUri)

mkdirSync(join(root, 'lib'), { recursive: true })
writeFileSync(join(root, 'lib', 'client.js'), template)
copyFileSync(join(root, 'src', 'index.js'), join(root, 'lib', 'index.js'))

const totalTokens = themes.reduce((sum, t) => sum + Object.keys(t.tokens).length, 0)
console.log('built lib/client.js (' + themes.length + ' themes, ' + totalTokens + ' tokens, ' +
  EXPECTED_KEYS.length + '-key baseline ok, font ' + (woff.length / 1024).toFixed(1) + 'KB inlined) and lib/index.js')
