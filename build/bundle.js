var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function a(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function l(e){return document.createElement(e)}function f(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function h(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function v(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function g(e,t,n){e.classList[n?"add":"remove"](t)}let y;function w(e){y=e}function b(){if(!y)throw new Error("Function called outside component initialization");return y}const $=[],E=[],x=[],O=[],S=Promise.resolve();let j=!1;function k(e){x.push(e)}let R=!1;const C=new Set;function N(){if(!R){R=!0;do{for(let e=0;e<$.length;e+=1){const t=$[e];w(t),A(t.$$)}for(w(null),$.length=0;E.length;)E.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];C.has(t)||(C.add(t),t())}x.length=0}while($.length);for(;O.length;)O.pop()();j=!1,R=!1,C.clear()}}function A(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const T=new Set;let q;function L(){q={r:0,c:[],p:q}}function _(){q.r||r(q.c),q=q.p}function B(e,t){e&&e.i&&(T.delete(e),e.i(t))}function U(e,t,n,r){if(e&&e.o){if(T.has(e))return;T.add(e),q.c.push((()=>{T.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function I(e){e&&e.c()}function P(e,n,s){const{fragment:i,on_mount:a,on_destroy:c,after_update:u}=e.$$;i&&i.m(n,s),k((()=>{const n=a.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(k)}function V(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function M(e,t){-1===e.$$.dirty[0]&&($.push(e),j||(j=!0,S.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(t,o,s,i,a,c,l=[-1]){const f=y;w(t);const d=o.props||{},p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=s?s(t,d,((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&M(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!i&&i(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(u)}else p.fragment&&p.fragment.c();o.intro&&B(t.$$.fragment),P(t,o.target,o.anchor),N()}w(f)}class F{$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var H=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},z=Object.prototype.toString;function W(e){return"[object Array]"===z.call(e)}function X(e){return void 0===e}function J(e){return null!==e&&"object"==typeof e}function Y(e){if("[object Object]"!==z.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function K(e){return"[object Function]"===z.call(e)}function G(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),W(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var Q={isArray:W,isArrayBuffer:function(e){return"[object ArrayBuffer]"===z.call(e)},isBuffer:function(e){return null!==e&&!X(e)&&null!==e.constructor&&!X(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:J,isPlainObject:Y,isUndefined:X,isDate:function(e){return"[object Date]"===z.call(e)},isFile:function(e){return"[object File]"===z.call(e)},isBlob:function(e){return"[object Blob]"===z.call(e)},isFunction:K,isStream:function(e){return J(e)&&K(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:G,merge:function e(){var t={};function n(n,r){Y(t[r])&&Y(n)?t[r]=e(t[r],n):Y(n)?t[r]=e({},n):W(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)G(arguments[r],n);return t},extend:function(e,t,n){return G(t,(function(t,r){e[r]=n&&"function"==typeof t?H(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function Z(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ee=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(Q.isURLSearchParams(t))r=t.toString();else{var o=[];Q.forEach(t,(function(e,t){null!=e&&(Q.isArray(e)?t+="[]":e=[e],Q.forEach(e,(function(e){Q.isDate(e)?e=e.toISOString():Q.isObject(e)&&(e=JSON.stringify(e)),o.push(Z(t)+"="+Z(e))})))})),r=o.join("&")}if(r){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function te(){this.handlers=[]}te.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},te.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},te.prototype.forEach=function(e){Q.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var ne=te,re=function(e,t,n){return Q.forEach(n,(function(n){e=n(e,t)})),e},oe=function(e){return!(!e||!e.__CANCEL__)},se=function(e,t){Q.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},ie=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},ae=Q.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var i=[];i.push(e+"="+encodeURIComponent(t)),Q.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),Q.isString(r)&&i.push("path="+r),Q.isString(o)&&i.push("domain="+o),!0===s&&i.push("secure"),document.cookie=i.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},ce=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ue=Q.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=Q.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},le=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;Q.isFormData(r)&&delete o["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var i=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(i+":"+a)}var c,u,l=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(s.open(e.method.toUpperCase(),ee(l,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var r,o,i,a,c,u="getAllResponseHeaders"in s?(r=s.getAllResponseHeaders(),c={},r?(Q.forEach(r.split("\n"),(function(e){if(a=e.indexOf(":"),o=Q.trim(e.substr(0,a)).toLowerCase(),i=Q.trim(e.substr(a+1)),o){if(c[o]&&ce.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([i]):c[o]?c[o]+", "+i:i}})),c):c):null,l={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:u,config:e,request:s};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(ie("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,l),s=null}},s.onabort=function(){s&&(n(ie("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){n(ie("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(ie(t,e,"ECONNABORTED",s)),s=null},Q.isStandardBrowserEnv()){var f=(e.withCredentials||ue(l))&&e.xsrfCookieName?ae.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in s&&Q.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:s.setRequestHeader(t,e)})),Q.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),n(e),s=null)})),r||(r=null),s.send(r)}))},fe={"Content-Type":"application/x-www-form-urlencoded"};function de(e,t){!Q.isUndefined(e)&&Q.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var pe,he={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(pe=le),pe),transformRequest:[function(e,t){return se(t,"Accept"),se(t,"Content-Type"),Q.isFormData(e)||Q.isArrayBuffer(e)||Q.isBuffer(e)||Q.isStream(e)||Q.isFile(e)||Q.isBlob(e)?e:Q.isArrayBufferView(e)?e.buffer:Q.isURLSearchParams(e)?(de(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Q.isObject(e)?(de(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};he.headers={common:{Accept:"application/json, text/plain, */*"}},Q.forEach(["delete","get","head"],(function(e){he.headers[e]={}})),Q.forEach(["post","put","patch"],(function(e){he.headers[e]=Q.merge(fe)}));var me=he;function ve(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var ge=function(e){return ve(e),e.headers=e.headers||{},e.data=re(e.data,e.headers,e.transformRequest),e.headers=Q.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Q.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||me.adapter)(e).then((function(t){return ve(e),t.data=re(t.data,t.headers,e.transformResponse),t}),(function(t){return oe(t)||(ve(e),t&&t.response&&(t.response.data=re(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ye=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],i=["validateStatus"];function a(e,t){return Q.isPlainObject(e)&&Q.isPlainObject(t)?Q.merge(e,t):Q.isPlainObject(t)?Q.merge({},t):Q.isArray(t)?t.slice():t}function c(r){Q.isUndefined(t[r])?Q.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(e[r],t[r])}Q.forEach(r,(function(e){Q.isUndefined(t[e])||(n[e]=a(void 0,t[e]))})),Q.forEach(o,c),Q.forEach(s,(function(r){Q.isUndefined(t[r])?Q.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(void 0,t[r])})),Q.forEach(i,(function(r){r in t?n[r]=a(e[r],t[r]):r in e&&(n[r]=a(void 0,e[r]))}));var u=r.concat(o).concat(s).concat(i),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return Q.forEach(l,c),n};function we(e){this.defaults=e,this.interceptors={request:new ne,response:new ne}}we.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ye(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[ge,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},we.prototype.getUri=function(e){return e=ye(this.defaults,e),ee(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Q.forEach(["delete","get","head","options"],(function(e){we.prototype[e]=function(t,n){return this.request(ye(n||{},{method:e,url:t,data:(n||{}).data}))}})),Q.forEach(["post","put","patch"],(function(e){we.prototype[e]=function(t,n,r){return this.request(ye(r||{},{method:e,url:t,data:n}))}}));var be=we;function $e(e){this.message=e}$e.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},$e.prototype.__CANCEL__=!0;var Ee=$e;function xe(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Ee(e),t(n.reason))}))}xe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},xe.source=function(){var e;return{token:new xe((function(t){e=t})),cancel:e}};var Oe=xe;function Se(e){var t=new be(e),n=H(be.prototype.request,t);return Q.extend(n,be.prototype,t),Q.extend(n,t),n}var je=Se(me);je.Axios=be,je.create=function(e){return Se(ye(je.defaults,e))},je.Cancel=Ee,je.CancelToken=Oe,je.isCancel=oe,je.all=function(e){return Promise.all(e)},je.spread=function(e){return function(t){return e.apply(null,t)}},je.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var ke=je,Re=je;ke.default=Re;var Ce=ke;const Ne=[];const Ae=function(t,n=e){let r;const o=[];function i(e){if(s(t,e)&&(t=e,r)){const e=!Ne.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),Ne.push(n,t)}if(e){for(let e=0;e<Ne.length;e+=2)Ne[e][0](Ne[e+1]);Ne.length=0}}}return{set:i,update:function(e){i(e(t))},subscribe:function(s,a=e){const c=[s,a];return o.push(c),1===o.length&&(r=n(i)||e),s(t),()=>{const e=o.indexOf(c);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}({});function Te(t){let n;return{c(){n=l("li"),n.innerHTML='<div class="bookmark svelte-13qks60"></div> \n  <div class="ticker-symbol svelte-13qks60">Ticker</div> \n  <div class="price svelte-13qks60">Price</div> \n  <div class="volume svelte-13qks60">Volume</div> \n  <div class="dividend-yield svelte-13qks60">Dividend Yield</div> \n  <div class="expand svelte-13qks60"></div>',m(n,"class","svelte-13qks60")},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class qe extends F{constructor(e){super(),D(this,e,null,Te,s,{})}}function Le(e){let t,n,r;return{c(){t=f("svg"),n=f("path"),r=f("path"),m(n,"d","M0 0h24v24H0V0z"),m(n,"fill","none"),m(r,"d","M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"height","24"),m(t,"viewBox","0 0 24 24"),m(t,"width","24")},m(e,o){c(e,t,o),a(t,n),a(t,r)},d(e){e&&u(t)}}}function _e(e){let t,n,r;return{c(){t=f("svg"),n=f("path"),r=f("path"),m(n,"d","M0 0h24v24H0z"),m(n,"fill","none"),m(r,"d","M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"),m(t,"xmlns","http://www.w3.org/2000/svg"),m(t,"height","24"),m(t,"viewBox","0 0 24 24"),m(t,"width","24")},m(e,o){c(e,t,o),a(t,n),a(t,r)},d(e){e&&u(t)}}}function Be(t){let n,o,s,i,f,y,w,b,$,E,x,O,S,j,k,R,C,N,A,T,q,L,_,B,U,I,P,V,M,D,F,H,z,W,X,J,Y=t[0].OVERVIEW?.Symbol+"",K=t[7].format(t[4])+"",G=t[3]?.val>0?"+":"",Q=t[3]?.val+"",Z=t[3]?.percent+"",ee=t[0].OVERVIEW?.DividendYield+"",te=t[0].OVERVIEW?.Name+"",ne=t[0].INCOME_STATEMENT?.netIncome+"";function re(e,t){return e[1]?_e:Le}let oe=re(t),se=oe(t);return{c(){n=l("li"),o=l("section"),s=l("div"),se.c(),i=p(),f=l("div"),y=d(Y),w=p(),b=l("div"),$=d(K),E=p(),x=l("div"),O=d(G),S=d(Q),j=d(" ("),k=d(Z),R=d("%)"),C=p(),N=l("div"),N.textContent=`${t[5]?t[5][0].volume:"N/A"}`,A=p(),T=l("div"),q=d(ee),L=p(),_=l("div"),_.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"></path><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"></path></svg>',B=p(),U=l("section"),I=l("div"),P=l("div"),V=d(te),M=p(),D=l("div"),D.textContent=`${t[6].short}`,F=p(),H=l("div"),z=l("div"),W=d(ne),m(s,"class","bookmark svelte-11rplpy"),m(f,"class","ticker-symbol svelte-11rplpy"),m(x,"class","price-change svelte-11rplpy"),g(x,"price-drop",t[3]?.val<=0),m(b,"class","price svelte-11rplpy"),m(N,"class","volume svelte-11rplpy"),m(T,"class","dividend-yield svelte-11rplpy"),m(_,"class","expand svelte-11rplpy"),g(_,"expanded",t[2]),m(o,"class","brief svelte-11rplpy"),m(P,"class","name"),m(D,"class","description"),m(I,"class","left svelte-11rplpy"),m(z,"class","net-income"),m(H,"class","right svelte-11rplpy"),m(U,"class","detail svelte-11rplpy"),g(U,"show",t[2]),m(n,"class","svelte-11rplpy")},m(e,r){c(e,n,r),a(n,o),a(o,s),se.m(s,null),a(o,i),a(o,f),a(f,y),a(o,w),a(o,b),a(b,$),a(b,E),a(b,x),a(x,O),a(x,S),a(x,j),a(x,k),a(x,R),a(o,C),a(o,N),a(o,A),a(o,T),a(T,q),a(o,L),a(o,_),a(n,B),a(n,U),a(U,I),a(I,P),a(P,V),a(I,M),a(I,D),a(U,F),a(U,H),a(H,z),a(z,W),X||(J=[h(s,"click",t[8]),h(_,"click",t[9])],X=!0)},p(e,[t]){oe!==(oe=re(e))&&(se.d(1),se=oe(e),se&&(se.c(),se.m(s,null))),1&t&&Y!==(Y=e[0].OVERVIEW?.Symbol+"")&&v(y,Y),16&t&&K!==(K=e[7].format(e[4])+"")&&v($,K),8&t&&G!==(G=e[3]?.val>0?"+":"")&&v(O,G),8&t&&Q!==(Q=e[3]?.val+"")&&v(S,Q),8&t&&Z!==(Z=e[3]?.percent+"")&&v(k,Z),8&t&&g(x,"price-drop",e[3]?.val<=0),1&t&&ee!==(ee=e[0].OVERVIEW?.DividendYield+"")&&v(q,ee),4&t&&g(_,"expanded",e[2]),1&t&&te!==(te=e[0].OVERVIEW?.Name+"")&&v(V,te),1&t&&ne!==(ne=e[0].INCOME_STATEMENT?.netIncome+"")&&v(W,ne),4&t&&g(U,"show",e[2])},i:e,o:e,d(e){e&&u(n),se.d(),X=!1,r(J)}}}function Ue(e,t,n){let r,o,s,{companyInfo:i}=t,a=!1,c=!1,u=i.TIME_SERIES?.values,l={short:`${i.OVERVIEW?.Description?.substring(0,100)}...`,full:i.OVERVIEW?.Description};const f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});if(u){r=u[0],s=parseFloat(r.close);let e=u[1];o={val:parseFloat(r.close-e.close).toFixed(2),percent:(parseFloat(r.close-e.close)/s).toFixed(2)}}return e.$$set=e=>{"companyInfo"in e&&n(0,i=e.companyInfo)},[i,a,c,o,s,u,l,f,()=>n(1,a=!a),()=>n(2,c=!c)]}class Ie extends F{constructor(e){super(),D(this,e,Ue,Be,s,{companyInfo:0})}}function Pe(t){let n;return{c(){n=l("div"),n.innerHTML='<div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div> \n  <div class="svelte-19pcohq"></div>',m(n,"class","lds-grid svelte-19pcohq")},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class Ve extends F{constructor(e){super(),D(this,e,null,Pe,s,{})}}function Me(e,t,n){const r=e.slice();return r[3]=t[n],r}function De(t){let n,r,o;return r=new Ve({}),{c(){n=l("div"),I(r.$$.fragment),m(n,"class","loading-container svelte-1w8hwj8")},m(e,t){c(e,n,t),P(r,n,null),o=!0},p:e,i(e){o||(B(r.$$.fragment,e),o=!0)},o(e){U(r.$$.fragment,e),o=!1},d(e){e&&u(n),V(r)}}}function Fe(e){let t,n,r=e[1],o=[];for(let t=0;t<r.length;t+=1)o[t]=He(Me(e,r,t));const s=e=>U(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=d("")},m(e,r){for(let t=0;t<o.length;t+=1)o[t].m(e,r);c(e,t,r),n=!0},p(e,n){if(2&n){let i;for(r=e[1],i=0;i<r.length;i+=1){const s=Me(e,r,i);o[i]?(o[i].p(s,n),B(o[i],1)):(o[i]=He(s),o[i].c(),B(o[i],1),o[i].m(t.parentNode,t))}for(L(),i=r.length;i<o.length;i+=1)s(i);_()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)B(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)U(o[e]);n=!1},d(e){!function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(o,e),e&&u(t)}}}function He(e){let t,n;return t=new Ie({props:{companyInfo:e[3]}}),{c(){I(t.$$.fragment)},m(e,r){P(t,e,r),n=!0},p(e,n){const r={};2&n&&(r.companyInfo=e[3]),t.$set(r)},i(e){n||(B(t.$$.fragment,e),n=!0)},o(e){U(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function ze(e){let t,n,r,o,s,i,f,d;r=new qe({});const h=[Fe,De],v=[];function g(e,t){return 1&t&&(s=!!(Object.keys(e[0]).length>0)),s?0:1}return i=g(e,-1),f=v[i]=h[i](e),{c(){t=l("section"),n=l("ul"),I(r.$$.fragment),o=p(),f.c(),m(n,"class","svelte-1w8hwj8"),m(t,"class","svelte-1w8hwj8")},m(e,s){c(e,t,s),a(t,n),P(r,n,null),a(n,o),v[i].m(n,null),d=!0},p(e,[t]){let r=i;i=g(e,t),i===r?v[i].p(e,t):(L(),U(v[r],1,1,(()=>{v[r]=null})),_(),f=v[i],f?f.p(e,t):(f=v[i]=h[i](e),f.c()),B(f,1),f.m(n,null))},i(e){d||(B(r.$$.fragment,e),B(f),d=!0)},o(e){U(r.$$.fragment,e),U(f),d=!1},d(e){e&&u(t),V(r),v[i].d()}}}function We(e,t,n){let r,o={};const s=Ae.subscribe((e=>n(0,o=e)));var i;return i=()=>{s()},b().$$.on_destroy.push(i),e.$$.update=()=>{1&e.$$.dirty&&n(1,r=Object.keys(o).map((e=>o[e])))},[o,r]}class Xe extends F{constructor(e){super(),D(this,e,We,ze,s,{})}}function Je(t){let n;return{c(){n=l("nav"),n.innerHTML='<h1 class="svelte-hp4lgr">S&amp;P 500 Companies</h1> \n  <span>by dowinterfor6</span>',m(n,"class","svelte-hp4lgr")},m(e,t){c(e,n,t)},p:e,i:e,o:e,d(e){e&&u(n)}}}class Ye extends F{constructor(e){super(),D(this,e,null,Je,s,{})}}function Ke(t){let n,r,o,s;return{c(){n=l("div"),r=d(t[0]),m(n,"class","chip svelte-6j64w9"),g(n,"selected",t[1])},m(e,i){c(e,n,i),a(n,r),o||(s=h(n,"click",t[2]),o=!0)},p(e,[t]){1&t&&v(r,e[0]),2&t&&g(n,"selected",e[1])},i:e,o:e,d(e){e&&u(n),o=!1,s()}}}function Ge(e,t,n){let{chipLabel:r}=t,o=!1;return e.$$set=e=>{"chipLabel"in e&&n(0,r=e.chipLabel)},[r,o,()=>n(1,o=!o)]}class Qe extends F{constructor(e){super(),D(this,e,Ge,Ke,s,{chipLabel:0})}}function Ze(t){let n,r,o,s,i,f,d,h;return r=new Ye({}),i=new Qe({props:{chipLabel:"Watchlist"}}),d=new Xe({}),{c(){n=l("main"),I(r.$$.fragment),o=p(),s=l("div"),I(i.$$.fragment),f=p(),I(d.$$.fragment),m(s,"class","chip-container svelte-vr29ji"),m(n,"class","svelte-vr29ji")},m(e,t){c(e,n,t),P(r,n,null),a(n,o),a(n,s),P(i,s,null),a(n,f),P(d,n,null),h=!0},p:e,i(e){h||(B(r.$$.fragment,e),B(i.$$.fragment,e),B(d.$$.fragment,e),h=!0)},o(e){U(r.$$.fragment,e),U(i.$$.fragment,e),U(d.$$.fragment,e),h=!1},d(e){e&&u(n),V(r),V(i),V(d)}}}function et(e,t,n){let r;var o;return i(e,Ae,(e=>n(0,r=e))),o=async()=>{const e=await(async()=>{let e={};const{data:t}=await Ce.get("https://api.achan.dev/sp500-info");e=t;const{data:n}=await Ce.get("https://api.achan.dev/sp500-time-series");return Object.keys(e).forEach((t=>{e[t]||(e[t]={}),e[t].TIME_SERIES=n[t]})),e})();!function(e,t,n=t){e.set(n)}(Ae,r=e,r)},b().$$.on_mount.push(o),[]}return new class extends F{constructor(e){super(),D(this,e,et,Ze,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
