if(!self.define){let e,s={};const c=(c,r)=>(c=new URL(c+".js",r).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(r,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let l={};const o=e=>c(e,n),t={module:{uri:n},exports:l,require:o};s[n]=Promise.all(r.map((e=>t[e]||o(e)))).then((e=>(i(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"sleepy-checker"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/sleepy-checker/css/app.5a265225.css",revision:null},{url:"/sleepy-checker/index.html",revision:"b8e53b6deb0d639dd4ded42973d3d854"},{url:"/sleepy-checker/js/app.35bf6490.js",revision:null},{url:"/sleepy-checker/js/chunk-vendors.bb78c5e7.js",revision:null},{url:"/sleepy-checker/manifest.json",revision:"42f2a734b2f9c44cc8e463c7ccf855ba"},{url:"/sleepy-checker/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
