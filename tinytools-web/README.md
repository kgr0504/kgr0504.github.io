# TinyTools

A lightweight collection of everyday browser-only web tools.

## Included tools

- Word Counter
- Image Resizer
- QR Generator
- Time Zone Converter
- Password Generator
- Percentage Calculator
- Unit Converter
- Color Picker
- Random Picker

## Run locally

Open `index.html` directly in a browser, or serve the folder with the workspace static server:

```powershell
powershell -ExecutionPolicy Bypass -File ..\..\serve-static.ps1 -Root . -Port 4214
```

## Mobile app support

This site is PWA-ready:

- `manifest.webmanifest` defines the installable app.
- `sw.js` caches the static files for offline loading after the first visit.
- `icons/` includes SVG and PNG app icons.

For install prompts and offline caching, test through `http://localhost` or an HTTPS deployment. Opening `index.html` directly as a file will not register the service worker.

## Google AdSense

AdSense site verification is already connected with publisher ID `ca-pub-9614308858326044`.

- Replace `REPLACE_WITH_SLOT_ID` with your ad slot ID after AdSense gives you an ad unit.
- Use a live HTTPS domain and complete Google AdSense site approval.

The current JavaScript intentionally does not request ad slots until a numeric slot ID is present.
