if(!self.define){let e,i={};const s=(s,l)=>(s=new URL(s+".js",l).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let a={};const o=e=>s(e,r),u={module:{uri:r},exports:a,require:o};i[r]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_app/immutable/assets/_layout.csnFlIjv.css",revision:null},{url:"_app/immutable/assets/_page.iaiS02PS.css",revision:null},{url:"_app/immutable/assets/_page.J3U8UePf.css",revision:null},{url:"_app/immutable/assets/_page.OcR8AHPJ.css",revision:null},{url:"_app/immutable/assets/_page.vK7PilgA.css",revision:null},{url:"_app/immutable/assets/0.ItsGriD9.css",revision:null},{url:"_app/immutable/assets/2.vK7PilgA.css",revision:null},{url:"_app/immutable/assets/3.iaiS02PS.css",revision:null},{url:"_app/immutable/assets/4.OcR8AHPJ.css",revision:null},{url:"_app/immutable/assets/5.J3U8UePf.css",revision:null},{url:"_app/immutable/assets/HeaderNav.5bpkroQx.css",revision:null},{url:"_app/immutable/chunks/entry.R9bbbDHL.js",revision:null},{url:"_app/immutable/chunks/HeaderNav.jlZS1HHp.js",revision:null},{url:"_app/immutable/chunks/index.1-9BfomT.js",revision:null},{url:"_app/immutable/chunks/scheduler.RdpRNTUl.js",revision:null},{url:"_app/immutable/entry/app.3Lq6uak2.js",revision:null},{url:"_app/immutable/entry/start.DG3Llhtr.js",revision:null},{url:"_app/immutable/nodes/0.lCatuj67.js",revision:null},{url:"_app/immutable/nodes/1.mchClJQM.js",revision:null},{url:"_app/immutable/nodes/2.O5mqCh0m.js",revision:null},{url:"_app/immutable/nodes/3.J0D60VF-.js",revision:null},{url:"_app/immutable/nodes/4.RWC6Dyg0.js",revision:null},{url:"_app/immutable/nodes/5.1L2Y3ims.js",revision:null},{url:"book/00.png",revision:"a894b7555578fa686dc561919408fdcc"},{url:"book/01-1.png",revision:"6fb309e15d8cd77e8a3fe2547a5e81e9"},{url:"book/01.png",revision:"446b015eace87fa2c24b59a2b396025c"},{url:"book/02-1.png",revision:"241c44e3e79d7dabcd0ed325c17b9543"},{url:"book/02.png",revision:"1354119625ed5c5dbe7660d8710a3401"},{url:"book/03-1.png",revision:"ce4b15319b789a1f8ce8f02f80f7a13a"},{url:"book/03.png",revision:"39638e27d9dae555395fe78a2db7df74"},{url:"book/04-1.png",revision:"f59746c7cd0bf5e663012f7237eff108"},{url:"book/04.png",revision:"c7d2c53d5edccefe16a34fb47b70b781"},{url:"book/05-1.png",revision:"0a93b485ac928c90d5c980ae08404608"},{url:"book/05.png",revision:"e77f428b3ac195ae9a3ba48f7b33771a"},{url:"book/06-1.png",revision:"7f4dfb20b5216d6f380fa274d7b75570"},{url:"book/06.png",revision:"765bbd9bcd1d32a049ec3f1b767a9d5c"},{url:"book/07.png",revision:"a72d44e26be00fe090619864f11a175c"},{url:"book/08-1.png",revision:"9466092e6ab68e821315b51609fe3ee9"},{url:"book/08.png",revision:"5a17e01dc247dc96dd60c7064dcaa598"},{url:"book/09.png",revision:"0f621d2a337fd07aee2eaa115a7789e7"},{url:"favicon.png",revision:"3a387408ecc6cc283f724b39ca5fffb4"},{url:"icon.png",revision:"49f207965561b04590a75272d94fad04"},{url:"img/back-02.png",revision:"1944518eba75c4b66cd28f0f87f8a9ee"},{url:"img/icon512-1.png",revision:"bd318665c135c70e3bde7bf4679f9c78"},{url:"img/icon512-2.png",revision:"5357d30c89796655338a2bf21b3302ae"},{url:"img/icon512-3.png",revision:"ed9f04055a5bbfbf21f8874650716bd1"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"serviceworker.js",revision:"2c3c8a10197b346b15cfab6e261e9723"},{url:"calc-01",revision:"49a30ad0f91ac37063a02c2ef5d0379e"},{url:"/",revision:"94c9bff27f9ac0a4007ada2ee6188915"},{url:"picturebook",revision:"de9c2f19fb4ecc6896f8044218f9e3c9"},{url:"quiz",revision:"b0f6b28857213d8955a1e5bdd1cc2252"},{url:"manifest.webmanifest",revision:"9000d3dcedbe396812626501c83afce4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/")))}));
