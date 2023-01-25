"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[434],{4651:function(e,t,r){r.d(t,{Ee:function(){return g},d9:function(){return s}});var n=r(6052),o=r(5031),a=r(7294),c=r(7375);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function s(e){var t=e.loading,r=e.src,n=e.srcSet,o=e.onLoad,i=e.onError,l=e.crossOrigin,s=e.sizes,u=e.ignoreFallback,f=(0,a.useState)("pending"),d=f[0],g=f[1];(0,a.useEffect)((function(){g(r?"loading":"pending")}),[r]);var m=(0,a.useRef)(),p=(0,a.useCallback)((function(){if(r){b();var e=new Image;e.src=r,l&&(e.crossOrigin=l),n&&(e.srcset=n),s&&(e.sizes=s),t&&(e.loading=t),e.onload=function(e){b(),g("loaded"),null==o||o(e)},e.onerror=function(e){b(),g("failed"),null==i||i(e)},m.current=e}}),[r,l,n,s,o,i,t]),b=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,c.Gw)((function(){if(!u)return"loading"===d&&p(),function(){b()}}),[d,p,u]),u?"loaded":d}var u=["htmlWidth","htmlHeight","alt"],f=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin"],d=a.forwardRef((function(e,t){var r=e.htmlWidth,n=e.htmlHeight,o=e.alt,c=l(e,u);return a.createElement("img",i({width:r,height:n,ref:t,alt:o},c))})),g=(0,n.Gp)((function(e,t){var r=e.fallbackSrc,c=e.fallback,u=e.src,g=e.srcSet,m=e.align,p=e.fit,b=e.loading,h=e.ignoreFallback,v=e.crossOrigin,y=l(e,f),E=null!=b||h||void 0===r&&void 0===c,S=s(i({},e,{ignoreFallback:E})),w=i({ref:t,objectFit:p,objectPosition:m},E?y:(0,o.CE)(y,["onError","onLoad"]));return"loaded"!==S?c||a.createElement(n.m$.img,i({as:d,className:"chakra-image__placeholder",src:r},w)):a.createElement(n.m$.img,i({as:d,src:u,srcSet:g,crossOrigin:v,loading:b,className:"chakra-image"},w))}));o.Ts&&(g.displayName="Image")},4259:function(e,t,r){r.d(t,{a:function(){return u}});var n=r(7294),o=r(2212);function a(e){let t;const r=new Set,n=(e,n)=>{const o="function"===typeof e?e(t):e;if(o!==t){const e=t;t=n?o:Object.assign({},t,o),r.forEach((r=>r(t,e)))}},o=()=>t,a={setState:n,getState:o,subscribe:(e,n,a)=>n||a?((e,n=o,a=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let c=n(t);function i(){const r=n(t);if(!a(c,r)){const t=c;e(c=r,t)}}return r.add(i),()=>r.delete(i)})(e,n,a):(r.add(e),()=>r.delete(e)),destroy:()=>r.clear()};return t=e(n,o,a),a}const c="undefined"===typeof window||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent)?n.useEffect:n.useLayoutEffect;let i=0;const l=function(e){const t="function"===typeof e?a(e):e,r=(e=t.getState,r=Object.is)=>{const[,o]=(0,n.useReducer)((e=>e+1),0),a=t.getState(),i=(0,n.useRef)(a),l=(0,n.useRef)(e),s=(0,n.useRef)(r),u=(0,n.useRef)(!1),f=(0,n.useRef)();let d;void 0===f.current&&(f.current=e(a));let g=!1;(i.current!==a||l.current!==e||s.current!==r||u.current)&&(d=e(a),g=!r(f.current,d)),c((()=>{g&&(f.current=d),i.current=a,l.current=e,s.current=r,u.current=!1}));const m=(0,n.useRef)(a);c((()=>{const e=()=>{try{const e=t.getState(),r=l.current(e);s.current(f.current,r)||(i.current=e,f.current=r,o())}catch(e){u.current=!0,o()}},r=t.subscribe(e);return t.getState()!==m.current&&e(),r}),[]);const p=g?d:f.current;return(0,n.useDebugValue)(p),p};return Object.assign(r,t),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const e=[r,t];return{next(){const t=e.length<=0;return{value:e.shift(),done:t}}}},r}((e=>(o.tEQ.onStart=(t,r,n)=>{e({active:!0,item:t,loaded:r,total:n,progress:(r-i)/(n-i)*100})},o.tEQ.onLoad=()=>{e({active:!1})},o.tEQ.onError=t=>e((e=>({errors:[...e.errors,t]}))),o.tEQ.onProgress=(t,r,n)=>{r===n&&(i=n),e({active:!0,item:t,loaded:r,total:n,progress:(r-i)/(n-i)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0}))),s=e=>`Loading ${e.toFixed(2)}%`;function u({containerStyles:e,innerStyles:t,barStyles:r,dataStyles:o,dataInterpolation:a=s,initialState:c=(e=>e)}){const{active:i,progress:u}=l(),d=n.useRef(0),g=n.useRef(0),m=n.useRef(null),[p,b]=n.useState(c(i));n.useEffect((()=>{let e;return i!==p&&(e=setTimeout((()=>b(i)),300)),()=>clearTimeout(e)}),[p,i]);const h=n.useCallback((()=>{m.current&&(d.current+=(u-d.current)/2,(d.current>.95*u||100===u)&&(d.current=u),m.current.innerText=a(d.current),d.current<u&&(g.current=requestAnimationFrame(h)))}),[a,u]);return n.useEffect((()=>(h(),()=>cancelAnimationFrame(g.current))),[h]),p?n.createElement("div",{style:{...f.container,opacity:i?1:0,...e}},n.createElement("div",null,n.createElement("div",{style:{...f.inner,...t}},n.createElement("div",{style:{...f.bar,transform:`scaleX(${u/100})`,...r}}),n.createElement("span",{ref:m,style:{...f.data,...o}})))):null}const f={container:{position:"absolute",top:0,left:0,width:"100%",height:"100%",background:"#171717",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 300ms ease",zIndex:1e3},inner:{width:100,height:3,background:"#272727",textAlign:"center"},bar:{height:3,width:"100%",background:"white",transition:"transform 200ms",transformOrigin:"left center"},data:{display:"inline-block",position:"relative",fontVariantNumeric:"tabular-nums",marginTop:"0.8em",color:"#f0f0f0",fontSize:"0.6em",fontFamily:'-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", "Helvetica Neue", Helvetica, Arial, Roboto, Ubuntu, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',whiteSpace:"nowrap"}}},8357:function(e,t,r){r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(o),c=function(){return c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};function l(e){return e&&e.map((function(e,t){return n.createElement(e.tag,c({key:t},e.attr),l(e.child))}))}function s(e){return function(t){return n.createElement(u,c({attr:c({},e.attr)},t),l(e.child))}}function u(e){var t=function(t){var r,o=e.attr,a=e.size,l=e.title,s=i(e,["attr","size","title"]),u=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==a?n.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}}}]);