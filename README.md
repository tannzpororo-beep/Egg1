# TANN EGG HEIST 3D — GitHub / Vercel Static

This version is intentionally **static**. You do not need Node.js, npm install, a database, Express, Socket.IO, Supabase, Firebase, or a build command to play it after deployment.

## Vercel
1. Upload this folder to GitHub.
2. Import the GitHub repository into Vercel.
3. Framework: Other (or leave auto-detected).
4. **Build Command: leave empty**.
5. **Output Directory: `.`**.
6. Deploy.

The game opens directly from `index.html`.

## GitHub Pages
Enable Pages for the repository root. The same static files work.

## Notes
Three.js is loaded from jsDelivr in the browser. The service worker also attempts to cache it for later offline launches. No proprietary Roblox assets are used.
