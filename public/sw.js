if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const f=e=>a(e,n),d={module:{uri:n},exports:t,require:f};s[n]=Promise.all(i.map((e=>d[e]||f(e)))).then((e=>(c(...e),t)))}}define(["./workbox-dc6b3464"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/FileText.svg",revision:"15a165d5931c9bc2b07157ec9f33dac3"},{url:"/_next/app-build-manifest.json",revision:"1f42ee4a421276b2ef982735a61ea5d4"},{url:"/_next/static/5znB6uVXQdUxriMsv3BZ7/_buildManifest.js",revision:"6c85a0ef2016893e13f7119ffd3404d3"},{url:"/_next/static/5znB6uVXQdUxriMsv3BZ7/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/110-196252c53fab1dfb.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/161-c88c6a1bc7e7bc40.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/180-11852abfd5df3999.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/211-5858b40ced6e0671.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/3613c289-b45f2dd97fd6e7fa.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/37d776b4-4a755bc107b05d3c.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/3cf7a9c2-eccad5827a82f54a.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/424-b53ecacc9b539033.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/528-ac6714528aad9d9a.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/696-f0c355eeb2834243.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/748-494e0422e9d6a1f8.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/749ce39f-8f1deb37f68c2af6.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/839-8db4bdb0abff33ea.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/905-5198181a439d2974.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/971b46c8-99bbe67219c4d5d6.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/998-5c7982242f26e676.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(landing)/layout-4b770b250781ab70.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(landing)/page-52c1858e5362732f.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(nowted)/app/favorites/page-5f7fb30e92972428.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(nowted)/app/folders/%5BfolderId%5D/page-9671e6617ab15dcf.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(nowted)/app/page-1b4db57654a61984.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(nowted)/app/trash/page-3f88f42caa636bd1.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/app/(nowted)/layout-9e56662bc7d738ae.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/d45124ae-a073e439aec58c74.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/db3f286d-cfc6b3f601b2bc7d.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/main-4ebdf25d9db9139b.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/main-app-55a618cead5f42a3.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/pages/_app-5923fa9d15a6f713.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/pages/_error-697b2bb45e7325cb.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-38e361dae696ea4a.js",revision:"5znB6uVXQdUxriMsv3BZ7"},{url:"/_next/static/css/7c9f5f2a6704633e.css",revision:"7c9f5f2a6704633e"},{url:"/_next/static/css/a95c30280a869367.css",revision:"a95c30280a869367"},{url:"/_next/static/css/bff91b967d9464cc.css",revision:"bff91b967d9464cc"},{url:"/_next/static/css/cbfdb732ca06dc28.css",revision:"cbfdb732ca06dc28"},{url:"/_next/static/media/0ac14a3c407fb3c4-s.p.woff2",revision:"9ec6deaf6bada919e20b98f9f7b718b1"},{url:"/_next/static/media/10939feefdad71be-s.woff2",revision:"72b3ae37567ee5efdf2254b657c36ba9"},{url:"/_next/static/media/20b8b8f6f47c1e10-s.woff2",revision:"7def222d1a45cb1cb7d8c3ae675dbdcc"},{url:"/_next/static/media/20fca0a84b06d374-s.woff2",revision:"4d2a4e4466479f12b0eaa43b5b797f9a"},{url:"/_next/static/media/2c78b631c1580249-s.woff2",revision:"7c1be55f4af6b9c75f7cc5ce43268cd3"},{url:"/_next/static/media/2dbc97c4c2289ed4-s.woff2",revision:"2c509a7a0add297ee68722101038dba2"},{url:"/_next/static/media/370d1cc320ec5619-s.woff2",revision:"a6ff41d10fa89e7f8fec937c243d7428"},{url:"/_next/static/media/3828f203592f7603-s.woff2",revision:"e9fd398a43c9e51f9ee14e757eaf95d9"},{url:"/_next/static/media/3a39f6dce9dddde3-s.p.woff2",revision:"48c84c2b8b2b76ad4ea1c5e60fa757a4"},{url:"/_next/static/media/4c35245a4b3471c2-s.woff2",revision:"58fd04c4f47a0799c0a887e1cf7105a4"},{url:"/_next/static/media/57c2f9c15684dfcb-s.woff2",revision:"e845f3c446581f6057c95b2349d89f0d"},{url:"/_next/static/media/591327bf3b62a611-s.woff2",revision:"0ed299a4bb5262e17e2145783b2c18f1"},{url:"/_next/static/media/668e25ca098400ee-s.woff2",revision:"763b101ff967ba1aa6e7ad2c5c8c3b41"},{url:"/_next/static/media/6b30462463a75ce7-s.woff2",revision:"920ddca80693e889ee9fc7d2d34ff4f5"},{url:"/_next/static/media/7777133e901cd5ed-s.p.woff2",revision:"a09f2fccfee35b7247b08a1a266f0328"},{url:"/_next/static/media/839135d04a097cea-s.woff2",revision:"79e6e81d255edac7e8627c7e16baccf5"},{url:"/_next/static/media/84661e57dd8199ee-s.woff2",revision:"b407330f2602b17bb1219895b7f37672"},{url:"/_next/static/media/84d4affa47fcabed-s.woff2",revision:"87a7147e959103f9fe850f1f5afc2589"},{url:"/_next/static/media/87c72f23c47212b9-s.woff2",revision:"790d0c8dbcd491d29d58f1369c199d40"},{url:"/_next/static/media/90ce457ee8cec043-s.woff2",revision:"1b92efaf7b7dd74f11150286c92307b0"},{url:"/_next/static/media/916d3686010a8de2-s.p.woff2",revision:"9212f6f9860f9fc6c69b02fedf6db8c3"},{url:"/_next/static/media/929d7d85ea051c51-s.woff2",revision:"d3b99420020c5a8caa72405e394a8431"},{url:"/_next/static/media/953974ac5e9ff354-s.woff2",revision:"6731e1ba3788bda094c89ee8fc131aef"},{url:"/_next/static/media/9a881e2ac07d406b-s.p.woff2",revision:"25b0e113ca7cce3770d542736db26368"},{url:"/_next/static/media/9e98545c8189a7e4-s.woff2",revision:"429dbb47f5d6d144a447f6b0ed15957c"},{url:"/_next/static/media/ac614beb32f7a7c2-s.woff2",revision:"20f5992a9c019fb146a38e1cc0c101d3"},{url:"/_next/static/media/ad1857a67a27e465-s.woff2",revision:"1b1d1367516aa61963e93c0139b1fe8d"},{url:"/_next/static/media/aefc8ad6d88b3354-s.woff2",revision:"6a4298fc0390ec22c52f618daa0e82bf"},{url:"/_next/static/media/af9d511c7a25f62f-s.woff2",revision:"b7ce8075c66f0de94d3ebc224db555ab"},{url:"/_next/static/media/b423eff6dafa6815-s.woff2",revision:"9d06c2ccad76e61996520dfce86e9e95"},{url:"/_next/static/media/bb4f634fcd3b187b-s.woff2",revision:"ae7a7d32849ce9d78f14b4fd28f79bef"},{url:"/_next/static/media/bb83722ca01b414e-s.woff2",revision:"35be6981379b11ac84ab56fcd6e3eb14"},{url:"/_next/static/media/c04551857776278f-s.p.woff2",revision:"8d91ec1ca2d8b56640a47117e313a3e9"},{url:"/_next/static/media/c762c418d6be0c3e-s.woff2",revision:"4150d27e0fb0376bda65dab389b7b32e"},{url:"/_next/static/media/ce3f06ff8220f479-s.woff2",revision:"4966da79bbcc8838ebc3f2955385d1fd"},{url:"/_next/static/media/d36a2a2bb416f59e-s.p.woff2",revision:"a7f7eebec745ef48ccf7a3d08c66d84a"},{url:"/_next/static/media/d869208648ca5469-s.p.woff2",revision:"72993dddf88a63e8f226656f7de88e57"},{url:"/_next/static/media/da16bfcbf1276783-s.woff2",revision:"a74dadf1097a46449f35c4d01a5bca91"},{url:"/_next/static/media/e025c64520263018-s.woff2",revision:"dc820d9f0f62811268590ff631f36be9"},{url:"/_next/static/media/e22152c09e7c2b3d-s.woff2",revision:"561995845223179a715a87a62eda9e2f"},{url:"/_next/static/media/f3a5b7489145585c-s.woff2",revision:"9fdb89ce27ce26c9b9378eb5a9c5184d"},{url:"/_next/static/media/f4abd27a660139a1-s.woff2",revision:"3dc4f02fdf2bf3b365ecd5b3a549e760"},{url:"/_next/static/media/f7a8acf8464bd548-s.p.woff2",revision:"8dae809192c44690275a3624133293e7"},{url:"/_next/static/media/f93b79c1ea023ab6-s.woff2",revision:"96b6d54684daa94742f7bfd72a981213"},{url:"/_next/static/media/fc6fba7ce0876fef-s.p.woff2",revision:"48598bad30f08e1c3eb3d0e69b420bd5"},{url:"/_next/static/media/fe8a99a918c9dff4-s.woff2",revision:"0e510b2946695804dfbc183b9406f5c7"},{url:"/history.svg",revision:"decd9fda14ce711e9ce45870162f80e4"},{url:"/icon-192x192.png",revision:"fe71e503de40bf325c5f924f20c1526f"},{url:"/icon-256x256.png",revision:"b21e752819da529d85b0c160ef5c4076"},{url:"/icon-384x384.png",revision:"d9ef21d612f709c572fa0cdb08e7b50d"},{url:"/icon-512x512.png",revision:"9492926c52db626bcf3eee2824509503"},{url:"/logo.svg",revision:"ea9ddad8d82aa8e1316cbbf8c40ab3e2"},{url:"/manifest.json",revision:"f71485a08846cfe6c9ebc81328ba3674"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/product-image.svg",revision:"c13b04d295174c2a13906087bfc2ce0b"},{url:"/product.png",revision:"04c274a92e04b8e363d837529d9b2183"},{url:"/product.svg",revision:"fd9ae4ec6a9d7409643e5c90aae5c417"},{url:"/radial-blur-blue.svg",revision:"7bafd61ada97bd4524f6178d59277b29"},{url:"/radial-blur-blur-circle.svg",revision:"d8cb5b94f6442c1da3bf7e00a6f30b21"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>self.origin===e.origin&&!(!e.pathname.startsWith("/_next/data/")||-1===e.pathname.indexOf(".json"))),new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{cacheWillUpdate:async({request:e,response:s})=>e.headers.get("x-middleware-prefetch")||s.headers.get("x-middleware-skip")?null:200===s.status?s:null},{cachedResponseWillBeUsed:async({cacheName:e,request:s,matchOptions:a,cachedResponse:i,event:c})=>i&&i.headers.get("x-middleware-skip")?null:i}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/callback/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
