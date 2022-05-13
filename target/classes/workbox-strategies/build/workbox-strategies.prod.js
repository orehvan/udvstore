this.workbox=this.workbox||{},this.workbox.strategies=function(t,e,s,r,n,i,a,o,c){"use strict";try{self["workbox:strategies:6.4.2"]&&_()}catch(t){}function h(t){return"string"==typeof t?new Request(t):t}class l{constructor(t,e){this.yt={},Object.assign(this,e),this.event=e.event,this.at=t,this.vt=new n.Deferred,this.bt=[],this.Et=[...t.plugins],this._t=new Map;for(const t of this.Et)this._t.set(t,{});this.event.waitUntil(this.vt.promise)}async fetch(t){const{event:s}=this;let r=h(t);if("navigate"===r.mode&&s instanceof FetchEvent&&s.preloadResponse){const t=await s.preloadResponse;if(t)return t}const n=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const t of this.iterateCallbacks("requestWillFetch"))r=await t({request:r.clone(),event:s})}catch(t){if(t instanceof Error)throw new e.WorkboxError("plugin-error-request-will-fetch",{thrownErrorMessage:t.message})}const i=r.clone();try{let t;t=await fetch(r,"navigate"===r.mode?void 0:this.at.fetchOptions);for(const e of this.iterateCallbacks("fetchDidSucceed"))t=await e({event:s,request:i,response:t});return t}catch(t){throw n&&await this.runCallbacks("fetchDidFail",{error:t,event:s,originalRequest:n.clone(),request:i.clone()}),t}}async fetchAndCachePut(t){const e=await this.fetch(t),s=e.clone();return this.waitUntil(this.cachePut(t,s)),e}async cacheMatch(t){const e=h(t);let s;const{cacheName:r,matchOptions:n}=this.at,i=await this.getCacheKey(e,"read"),a=Object.assign(Object.assign({},n),{cacheName:r});s=await caches.match(i,a);for(const t of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await t({cacheName:r,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(t,s){const n=h(t);await c.timeout(0);const o=await this.getCacheKey(n,"write");if(!s)throw new e.WorkboxError("cache-put-with-no-response",{url:a.getFriendlyURL(o.url)});const l=await this.kt(s);if(!l)return!1;const{cacheName:w,matchOptions:u}=this.at,f=await self.caches.open(w),d=this.hasCallback("cacheDidUpdate"),p=d?await r.cacheMatchIgnoreParams(f,o.clone(),["__WB_REVISION__"],u):null;try{await f.put(o,d?l.clone():l)}catch(t){if(t instanceof Error)throw"QuotaExceededError"===t.name&&await i.executeQuotaErrorCallbacks(),t}for(const t of this.iterateCallbacks("cacheDidUpdate"))await t({cacheName:w,oldResponse:p,newResponse:l.clone(),request:o,event:this.event});return!0}async getCacheKey(t,e){const s=`${t.url} | ${e}`;if(!this.yt[s]){let r=t;for(const t of this.iterateCallbacks("cacheKeyWillBeUsed"))r=h(await t({mode:e,request:r,event:this.event,params:this.params}));this.yt[s]=r}return this.yt[s]}hasCallback(t){for(const e of this.at.plugins)if(t in e)return!0;return!1}async runCallbacks(t,e){for(const s of this.iterateCallbacks(t))await s(e)}*iterateCallbacks(t){for(const e of this.at.plugins)if("function"==typeof e[t]){const s=this._t.get(e),r=r=>{const n=Object.assign(Object.assign({},r),{state:s});return e[t](n)};yield r}}waitUntil(t){return this.bt.push(t),t}async doneWaiting(){let t;for(;t=this.bt.shift();)await t}destroy(){this.vt.resolve(null)}async kt(t){let e=t,s=!1;for(const t of this.iterateCallbacks("cacheWillUpdate"))if(e=await t({request:this.request,response:e,event:this.event})||void 0,s=!0,!e)break;return s||e&&200!==e.status&&(e=void 0),e}}class w{constructor(t={}){this.cacheName=s.cacheNames.getRuntimeName(t.cacheName),this.plugins=t.plugins||[],this.fetchOptions=t.fetchOptions,this.matchOptions=t.matchOptions}handle(t){const[e]=this.handleAll(t);return e}handleAll(t){t instanceof FetchEvent&&(t={event:t,request:t.request});const e=t.event,s="string"==typeof t.request?new Request(t.request):t.request,r="params"in t?t.params:void 0,n=new l(this,{event:e,request:s,params:r}),i=this.xt(n,s,e);return[i,this.Rt(i,n,s,e)]}async xt(t,s,r){await t.runCallbacks("handlerWillStart",{event:r,request:s});let n=void 0;try{if(n=await this._handle(s,t),!n||"error"===n.type)throw new e.WorkboxError("no-response",{url:s.url})}catch(e){if(e instanceof Error)for(const i of t.iterateCallbacks("handlerDidError"))if(n=await i({error:e,event:r,request:s}),n)break;if(!n)throw e}for(const e of t.iterateCallbacks("handlerWillRespond"))n=await e({event:r,request:s,response:n});return n}async Rt(t,e,s,r){let n,i;try{n=await t}catch(i){}try{await e.runCallbacks("handlerDidRespond",{event:r,request:s,response:n}),await e.doneWaiting()}catch(t){t instanceof Error&&(i=t)}if(await e.runCallbacks("handlerDidComplete",{event:r,request:s,response:n,error:i}),e.destroy(),i)throw i}}const u={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};return t.CacheFirst=class extends w{async _handle(t,s){let r=await s.cacheMatch(t),n=void 0;if(!r)try{r=await s.fetchAndCachePut(t)}catch(t){t instanceof Error&&(n=t)}if(!r)throw new e.WorkboxError("no-response",{url:t.url,error:n});return r}},t.CacheOnly=class extends w{async _handle(t,s){const r=await s.cacheMatch(t);if(!r)throw new e.WorkboxError("no-response",{url:t.url});return r}},t.NetworkFirst=class extends w{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u),this.Wt=t.networkTimeoutSeconds||0}async _handle(t,s){const r=[],n=[];let i;if(this.Wt){const{id:e,promise:a}=this.Ot({request:t,logs:r,handler:s});i=e,n.push(a)}const a=this.Ut({timeoutId:i,request:t,logs:r,handler:s});n.push(a);const o=await s.waitUntil((async()=>await s.waitUntil(Promise.race(n))||await a)());if(!o)throw new e.WorkboxError("no-response",{url:t.url});return o}Ot({request:t,logs:e,handler:s}){let r;return{promise:new Promise((e=>{r=setTimeout((async()=>{e(await s.cacheMatch(t))}),1e3*this.Wt)})),id:r}}async Ut({timeoutId:t,request:e,logs:s,handler:r}){let n,i;try{i=await r.fetchAndCachePut(e)}catch(t){t instanceof Error&&(n=t)}return t&&clearTimeout(t),!n&&i||(i=await r.cacheMatch(e)),i}},t.NetworkOnly=class extends w{constructor(t={}){super(t),this.Wt=t.networkTimeoutSeconds||0}async _handle(t,s){let r,n=void 0;try{const e=[s.fetch(t)];if(this.Wt){const t=c.timeout(1e3*this.Wt);e.push(t)}if(r=await Promise.race(e),!r)throw new Error("Timed out the network response after "+this.Wt+" seconds.")}catch(t){t instanceof Error&&(n=t)}if(!r)throw new e.WorkboxError("no-response",{url:t.url,error:n});return r}},t.StaleWhileRevalidate=class extends w{constructor(t={}){super(t),this.plugins.some((t=>"cacheWillUpdate"in t))||this.plugins.unshift(u)}async _handle(t,s){const r=s.fetchAndCachePut(t).catch((()=>{}));s.waitUntil(r);let n,i=await s.cacheMatch(t);if(i);else try{i=await r}catch(t){t instanceof Error&&(n=t)}if(!i)throw new e.WorkboxError("no-response",{url:t.url,error:n});return i}},t.Strategy=w,t.StrategyHandler=l,t}({},workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private,workbox.core._private);
//# sourceMappingURL=workbox-strategies.prod.js.map