const CACHE='tann-egg-heist-static-v2';
const CORE=['./','./index.html','./style.css','./game.js','./manifest.json','./icon.svg','https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.min.js'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(async c=>{for(const u of CORE){try{await c.add(u)}catch(_){}}}).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{if(x.ok||x.type==='opaque'){const cp=x.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return x}).catch(()=>caches.match('./index.html'))))});
