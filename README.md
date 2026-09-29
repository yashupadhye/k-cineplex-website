# K Cineplex Kopargaon - Website Handover

Static website (HTML/CSS/JS). No build step, no database, no monthly hosting cost on Vercel/Netlify/GitHub Pages.

## Update movies (2 minutes)
1. Put the poster in `img/` as `.webp` (about 480px wide; squoosh.app converts JPG to WebP).
2. Open `script.js`. Edit the `NOW` and `SOON` lists at the top. Copy a line, change `t` (title), `img` (file name without .webp), and `d`/`p` for coming-soon.
3. Upload/commit. Done.

## Change phone number
Edit `PHONE` at the top of `script.js`, and replace `919011961195` / `+91 90119 61195` in `index.html`.

## Files
- `index.html` structure and SEO | `style.css` design | `script.js` movies + interactions
- `img/` optimized images | `vercel.json` caching | `robots.txt`, `sitemap.xml` SEO
