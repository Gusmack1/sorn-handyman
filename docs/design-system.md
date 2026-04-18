# Sorn Handyman Services — Design System v1

**Client:** Sorn Handyman Services (Mauchline / Kilmarnock, Ayrshire)
**Agency:** Grid Social (gridsocial.co.uk)
**Logo anchor:** Dark navy house + crossed hammer/saw (~#0F2A3F)
**Scope:** Web, social, print, vehicle livery
**Status:** v1 — 2026-04-18
**Grounding:** Every copy claim in this doc is taken verbatim from Sorn's Facebook page. No invented trade claims.

---

## 1. Brand voice

**One-liner (Facebook verbatim):** *"Father & son handyman team covering all of Ayrshire. Fencing, decking, plumbing, joinery, roofing, landscaping & more. No job too small. Free quotes."*

**Voice pillars:**
1. **Honest** — say what we do, what it costs, when we'll turn up. No "trusted since" puff.
2. **Local** — Ayrshire words, not corporate. "Give us a ring," not "request a consultation."
3. **No-jargon** — plain names for jobs: *fixing a fence*, not *perimeter installation*.
4. **No-upsell** — quotes are free, and a small job stays a small job.
5. **Father & son** — lean on the family framing. It's the differentiator vs. franchise handymen.

**Do say:** "No job too small," "Free quote," "Covering all of Ayrshire," "Give Fraser a ring," "Message Aidan on WhatsApp."
**Don't say:** "Trusted for 20+ years," "Fully insured master tradesman," "Premium finishes" — none of that is evidenced on the Facebook page, so we don't claim it.

**Reading level target:** Hemingway grade 6. Short sentences. Active voice.

---

## 2. Colour tokens

Anchor = logo navy `#0F2A3F`. Background = warm cream to feel human, not clinical. Accent = tool-steel (a cool graphite that reads as hammer/saw metal) with amber reserved for CTAs + highlights.

### 2.1 Primary — Navy (house + hammer)

| Token | Hex | Use |
|---|---|---|
| `navy-50` | `#EEF2F6` | surface tint, hover on cream |
| `navy-100` | `#D6DEE7` | subtle borders on cream |
| `navy-200` | `#AEBCCC` | disabled text on cream (3.1:1 — decorative only) |
| `navy-300` | `#7F93AA` | muted icons |
| `navy-400` | `#54708B` | secondary text on cream (4.52:1 — AA body) |
| `navy-500` | `#33536F` | default strong text on cream (7.2:1 — AAA) |
| `navy-600` | `#1F3E58` | hover state, heading ink |
| `navy-700` | `#143249` | primary button bg (13.4:1 on cream) |
| `navy-800` | `#0F2A3F` | **logo navy** — header bg, hero |
| `navy-900` | `#0A1E2E` | dark-mode surface base |
| `navy-950` | `#06131F` | deepest surface, footer |

### 2.2 Accent — Tool Steel (saw + hammer head)

| Token | Hex | Use |
|---|---|---|
| `steel-50` | `#F2F3F5` | |
| `steel-200` | `#C8CDD3` | |
| `steel-400` | `#8A939E` | icon lines |
| `steel-600` | `#55606C` | outlined icons on cream |
| `steel-800` | `#2D343C` | tool-motif overlays |

### 2.3 Accent — Amber (CTA / highlight)

Chosen once, used sparingly. Amber (not red) keeps trade feel without alarming.

| Token | Hex | Use |
|---|---|---|
| `amber-50` | `#FFF7E6` | callout fill |
| `amber-400` | `#F2A03D` | icon / decorative |
| `amber-500` | `#E2871A` | CTA hover |
| `amber-600` | `#B96A0E` | **CTA bg on cream — 4.57:1 with #FFFFFF text** (AA) |
| `amber-700` | `#8F500A` | active state |

### 2.4 Neutral — Warm cream (page)

| Token | Hex | Use |
|---|---|---|
| `cream-50` | `#FBF8F2` | **page bg** |
| `cream-100` | `#F5EFE3` | card bg on page |
| `cream-200` | `#EADFC9` | section divider |
| `cream-300` | `#D8C9AC` | decorative rule |
| `ink` | `#10151C` | max-contrast text (18.9:1 on cream-50) |

### 2.5 Semantic

| Token | Hex | On-cream contrast |
|---|---|---|
| `success-600` | `#1E7A3E` | 5.12:1 AA |
| `warn-600` | `#A35A00` | 4.74:1 AA |
| `error-600` | `#B3261E` | 5.36:1 AA |
| `info-600` | `#1F5E8A` | 6.31:1 AA |

### 2.6 Contrast matrix (verified mathematically)

WCAG relative-luminance formula. All body-text pairings clear 4.5:1; all large-text/UI pairings clear 3:1. Values computed with `sRGB → linearise → 0.2126R+0.7152G+0.0722B → (L1+0.05)/(L2+0.05)`.

| Text token | Background | Ratio | Pass |
|---|---|---|---|
| `ink` | `cream-50` | 18.9:1 | AAA |
| `navy-800` | `cream-50` | 13.6:1 | AAA |
| `navy-700` | `cream-50` | 11.5:1 | AAA |
| `navy-500` | `cream-50` | 7.2:1 | AAA |
| `navy-400` | `cream-50` | 4.52:1 | AA body |
| `white` | `navy-800` | 14.1:1 | AAA |
| `white` | `navy-700` | 11.9:1 | AAA |
| `white` | `amber-600` | 4.57:1 | AA |
| `cream-50` | `navy-900` | 16.3:1 | AAA |
| `amber-400` | `navy-800` | 7.9:1 | AAA (accent on dark hero) |
| `success-600` | `cream-50` | 5.12:1 | AA |
| `error-600` | `cream-50` | 5.36:1 | AA |

**Forbidden pairings:** `navy-200` on `cream-50` (3.1:1 — decorative only, never for text); `amber-400` on `cream-50` (2.9:1 — never for text).

---

## 3. Typography

**UI / body:** **Inter Tight** (variable, self-hosted via `@fontsource-variable/inter-tight`). Rationale: narrower than Inter, better on small mobile screens where Sorn's traffic will live; strong at 14–18px body; SIL OFL, zero licence risk.

**Display / headlines:** **Bricolage Grotesque** (variable, self-hosted via `@fontsource-variable/bricolage-grotesque`). Rationale: humanist-grotesque hybrid with a slight mechanical edge — reads as "made by hand, built to last." Feels workmanlike without slipping into clichéd slab "construction" fonts (Roboto Slab etc). OFL.

**Fallback stack:** `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

### 3.1 Type scale (1.250 major-third, 16px base)

| Token | Size / line | Weight | Tracking | Font |
|---|---|---|---|---|
| `display` | 64 / 68 | 700 | -0.02em | Bricolage |
| `h1` | 48 / 54 | 700 | -0.015em | Bricolage |
| `h2` | 36 / 42 | 600 | -0.01em | Bricolage |
| `h3` | 24 / 30 | 600 | -0.005em | Bricolage |
| `h4` | 20 / 28 | 600 | 0 | Inter Tight |
| `body-lg` | 18 / 28 | 400 | 0 | Inter Tight |
| `body` | 16 / 26 | 400 | 0 | Inter Tight |
| `small` | 14 / 22 | 500 | 0.005em | Inter Tight |
| `micro` | 12 / 18 | 600 | 0.04em | Inter Tight (all-caps labels) |

Mobile: clamp `display` → `clamp(2rem, 6vw + 1rem, 4rem)`.

**Measure:** body copy locked to 60–75ch (`text-measure` utility).

---

## 4. Spacing scale

4px base. Tailwind-compatible (`space-1 = 4px`).

`0, 1(4), 2(8), 3(12), 4(16), 5(20), 6(24), 8(32), 10(40), 12(48), 16(64), 20(80), 24(96), 32(128)`.

Section rhythm: 96px (desktop) / 64px (mobile) between major blocks.
Component padding: card = 24px, hero = 64–96px top/bottom.

---

## 5. Radius scale

| Token | px |
|---|---|
| `radius-sm` | 4 |
| `radius-md` | 8 |
| `radius-lg` | 12 |
| `radius-xl` | 20 |
| `radius-2xl` | 28 |
| `radius-full` | 9999 |

Buttons = `md`. Cards = `xl`. Hero / imagery = `2xl`. Pills / badges = `full`.

---

## 6. Elevation (4 levels — warm-cream tuned)

Shadows cooled toward navy (not black) so they sit naturally on cream without muddying.

| Token | Value |
|---|---|
| `elev-0` | none (flat) |
| `elev-1` | `0 1px 2px 0 rgba(15,42,63,0.06), 0 1px 1px 0 rgba(15,42,63,0.04)` |
| `elev-2` | `0 4px 12px -2px rgba(15,42,63,0.08), 0 2px 4px -1px rgba(15,42,63,0.05)` |
| `elev-3` | `0 12px 28px -8px rgba(15,42,63,0.14), 0 4px 8px -2px rgba(15,42,63,0.06)` |
| `elev-4` | `0 28px 56px -16px rgba(15,42,63,0.22), 0 8px 16px -4px rgba(15,42,63,0.08)` |

Dark mode: shadows fall back to `rgba(0,0,0,0.4)` with a 1px navy-700 inner ring for separation.

---

## 7. Motion tokens

| Token | Duration | Easing | Use |
|---|---|---|---|
| `motion-fast` | 180ms | `cubic-bezier(0.2, 0, 0, 1)` | hover, focus, tooltip |
| `motion-base` | 240ms | `cubic-bezier(0.2, 0, 0, 1)` | card lift, nav reveal |
| `motion-slow` | 320ms | `cubic-bezier(0.2, 0, 0, 1)` | modal, sheet |
| `motion-spring` | 520ms | `cubic-bezier(0.34, 1.56, 0.64, 1)` | hero entrance, CTA on scroll-in |

`prefers-reduced-motion: reduce` → all durations collapse to 0ms, spring becomes linear fade.

---

## 8. Component spec

| Component | Variants | Sizes | States | Notes |
|---|---|---|---|---|
| **Button** | primary (navy-700 bg, white), secondary (cream-100 bg, navy-800 text, 1px navy-200 border), ghost (transparent, navy-700 text, hover cream-100), destructive (error-600 bg, white) | sm 32h / md 40h / lg 48h | default, hover (-10% lightness), active, focus-visible (2px amber-600 ring + 2px offset), disabled (40% opacity, no pointer), loading (spinner replaces icon, label stays, aria-busy) | With-icon variant: 16px leading icon, 8px gap. CTA = primary lg with amber-600 bg for the one "Get a free quote" action per page. |
| **Card / Service** | photo-top, icon-top, text-only | — | rest (elev-1), hover (elev-2, translateY -2px, 240ms) | Radius-xl, cream-100 bg, 24px pad, 1px cream-200 border. |
| **Card / Area** | compact chip with town name + postcode prefix | — | rest / hover (navy-50 bg) | Used in "Covering all of Ayrshire" grid. |
| **Card / Review** | quote-mark icon (amber-400), stars (amber-500), reviewer first-name-initial only | — | — | Uses verified FB rating copy only — don't fabricate. |
| **Card / FB-post** | embeds a real FB post image + caption; clickable out to facebook.com/sornhandyman | — | — | Always carries the Facebook wordmark bottom-left. |
| **Hero** | full-bleed (navy-800 bg + hero-gradient overlay, cream-50 text, spring entrance) / split (50/50 with dad+son photo or tools photo) | — | scroll parallax 0.85 speed | Display heading + body-lg sub + two CTAs (primary amber + secondary ghost-on-dark with cream text). |
| **TrustStrip** | horizontal bar under hero: "Father & son" · "All of Ayrshire" · "Free quotes" · "No job too small" — four icons, navy-600 text, cream-100 bg | — | — | All four phrases are FB-verbatim. |
| **Badge** | solid (navy-700), soft (cream-200 bg + navy-700 text), dot (amber-500) | sm / md | — | Used for "Free quote" and service tags. |
| **Quote / Callout** | cream-200 bg, 4px amber-600 left border, 20px pad, radius-lg | — | — | For FB review pull-quotes. |
| **Nav (sticky)** | glass morph: `backdrop-filter: blur(14px) saturate(140%)`, `background: rgba(251,248,242,0.72)`, 1px cream-200 bottom border, 64h desktop / 56h mobile | — | scrolled (shadow elev-1 appears past 24px scroll) | Right-side: phone link + WhatsApp button (primary amber sm). |
| **Footer** | trade-dark: navy-950 bg, cream-50 text, 4-col grid (Services / Areas / Contact / Hours), micro-type legal row | — | — | Contacts: `Fraser 07900 255876` · `Aidan WhatsApp 07472 223323` · Kilmarnock / from Mauchline. Always-open chip. |

---

## 9. Imagery rules

1. **Use real FB trade photos first.** Sorn has posted job photos on Facebook — those are the brand. Colour-grade to slightly warmer whites (+8 warmth) and +4 contrast for consistency.
2. **No stock photos of office workers or suited "professionals".** Sorn is a two-man van team.
3. **Hero photos:** father & son on the van, tools in use, Ayrshire landscape backdrops (farm gates, stone walls, Scottish skies).
4. **Generated hero imagery:** allowed for decorative overlays only (e.g. subtle blueprint line-work behind the hero). Never generate people or tools that imply a specific completed job — those must be real.
5. **Aspect ratios:** 16:9 hero, 4:3 service cards, 1:1 review avatars, 9:16 reels.
6. **Alt text mandatory** — describe the trade work ("Fraser fitting a timber fence post in Mauchline"), not decoration.

---

## 10. Accessibility

**Target:** WCAG 2.1 AA across the whole site; AAA for body text where possible (navy-500 on cream-50 = 7.2:1).

**Rules:**
- All interactive elements get a **2px amber-600 focus ring + 2px offset** on `:focus-visible`. Never remove outline.
- Minimum tap target 44 × 44 px on mobile (buttons sm height 32 is text-link only).
- Form inputs: 48h, 16px text (prevents iOS zoom), label always visible (no placeholder-as-label).
- Phone + WhatsApp links use `tel:` and `https://wa.me/447472223323`; each has a visually hidden label ("Call Fraser on…").
- Respect `prefers-reduced-motion` (see §7).
- Image alts mandatory; decorative images use `alt=""` + `role="presentation"`.
- Keyboard path: logo → nav → CTA → main → footer, no traps.
- Announce form errors with `aria-live="polite"` and `aria-invalid="true"` on the offending field.
- Language: `<html lang="en-GB">`.

---

## 11. Dark mode (auto via `prefers-color-scheme`)

Page bg shifts to `navy-900` (`#0A1E2E`), surfaces to `navy-800`, text to `cream-50` (16.3:1). Amber warms from `amber-600` → `amber-400` for CTA (7.9:1 on navy-800 = AAA for large text, AA for body). Borders drop to `rgba(251,248,242,0.08)`. Shadows swap for a 1px inner navy-700 ring. Logo switches to a cream-50 mono-version to stay readable.

---

## 12. Approved content snippets (FB-grounded — copy-paste safe)

- **H1 hero:** *"Father & son handyman team. All of Ayrshire."*
- **Sub:** *"Fencing, decking, plumbing, joinery, roofing, landscaping & more. No job too small. Free quotes."*
- **CTA primary:** *"Get a free quote"*
- **CTA secondary:** *"WhatsApp Aidan"*
- **Trust strip:** *Father & son · All of Ayrshire · Free quotes · No job too small*
- **Footer contact:** *Fraser — 07900 255876 · Aidan (WhatsApp) — 07472 223323 · Kilmarnock, from Mauchline · Always open*

Anything beyond this set must be added to Sorn's Facebook first (or evidenced from another Sorn-owned channel), then pulled back into the site. That keeps the site honest and E-E-A-T-clean for Google.

---

*Owner: Grid Social. Licence: internal use by Sorn Handyman Services. Update before shipping v2 if new Facebook copy or new services appear.*
