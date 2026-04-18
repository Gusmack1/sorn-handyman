# Icon pack — placeholders

These files are referenced by `src/components/SEO.astro` and `public/manifest.webmanifest`.
Drop real PNGs in this directory before production ship.

Required files (all PNG, solid background #D72638, white wordmark "S"):

| File | Size | Notes |
|---|---|---|
| `favicon-16.png` | 16x16 | browser tab |
| `favicon-32.png` | 32x32 | browser tab retina |
| `apple-touch-icon.png` | 180x180 | iOS home-screen |
| `icon-192.png` | 192x192 | Android home-screen (any) |
| `icon-512.png` | 512x512 | PWA install prompt (any) |
| `maskable-192.png` | 192x192 | Android adaptive (safe zone 80%) |
| `maskable-512.png` | 512x512 | Android adaptive (safe zone 80%) |

Also required at repo root:

- `public/favicon.ico` — 16+32+48 multi-size ICO.

Generate via https://realfavicongenerator.net/ from a 1024x1024 source, or feed the brand logo
SVG through ImageMagick:

```sh
magick logo.svg -resize 512x512 icon-512.png
magick logo.svg -resize 192x192 icon-192.png
# ... etc
```

Theme colour: `#D72638` (Sorn red). Background: `#FFFFFF`.
