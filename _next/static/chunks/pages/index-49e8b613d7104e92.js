(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8564)}])},8045:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(c){r=!0,a=c}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,l=void 0!==a&&a,d=e.priority,f=void 0!==d&&d,m=e.loading,x=e.lazyBoundary,w=void 0===x?"200px":x,v=e.className,j=e.quality,_=e.width,A=e.height,O=e.objectFit,z=e.objectPosition,E=e.onLoadingComplete,P=e.loader,D=void 0===P?S:P,I=e.placeholder,L=void 0===I?"empty":I,B=e.blurDataURL,T=function(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),R=n?"responsive":"intrinsic";"layout"in T&&(T.layout&&(R=T.layout),delete T.layout);var C="";if(function(e){return"object"===typeof e&&(b(e)||function(e){return void 0!==e.src}(e))}(t)){var W=b(t)?t.default:t;if(!W.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));if(B=B||W.blurDataURL,C=W.src,(!R||"fill"!==R)&&(A=A||W.height,_=_||W.width,!W.height||!W.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))}t="string"===typeof t?t:C;var $=N(_),q=N(A),Z=N(j),F=!f&&("lazy"===m||"undefined"===typeof m);(t.startsWith("data:")||t.startsWith("blob:"))&&(l=!0,F=!1);p.has(t)&&(F=!1);0;var H,M=r(u.useIntersection({rootMargin:w,disabled:!F}),2),U=M[0],G=M[1],V=!F||G,J={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},X={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q=!1,Y={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:z},K="blur"===L?{filter:"blur(20px)",backgroundSize:O||"cover",backgroundImage:'url("'.concat(B,'")'),backgroundPosition:z||"0% 0%"}:{};if("fill"===R)J.display="block",J.position="absolute",J.top=0,J.left=0,J.bottom=0,J.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof q){var ee=q/$,te=isNaN(ee)?"100%":"".concat(100*ee,"%");"responsive"===R?(J.display="block",J.position="relative",Q=!0,X.paddingTop=te):"intrinsic"===R?(J.display="inline-block",J.position="relative",J.maxWidth="100%",Q=!0,X.maxWidth="100%",H='<svg width="'.concat($,'" height="').concat(q,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(J.display="inline-block",J.position="relative",J.width=$,J.height=q)}else 0;var ne={src:g,srcSet:void 0,sizes:void 0};V&&(ne=k({src:t,unoptimized:l,layout:R,width:$,quality:Z,sizes:n,loader:D}));var ie=t;0;0;var re=(i(y={},"imagesrcset",ne.srcSet),i(y,"imagesizes",ne.sizes),y);return o.default.createElement("span",{style:J},Q?o.default.createElement("span",{style:X},H?o.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(H))}):null):null,o.default.createElement("img",Object.assign({},T,ne,{decoding:"async","data-nimg":R,className:v,ref:function(e){U(e),function(e,t,n,i,r){if(!e)return;var a=function(){e.src!==g&&("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===i&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),r){var n=e.naturalWidth,a=e.naturalHeight;r({naturalWidth:n,naturalHeight:a})}}))};e.complete?a():e.onload=a}(e,ie,0,L,E)},style:h({},Y,K)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},T,k({src:t,unoptimized:l,layout:R,width:$,quality:Z,sizes:n,loader:D}),{decoding:"async","data-nimg":R,style:Y,className:v,loading:m||"lazy"}))),f?o.default.createElement(s.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ne.src+ne.srcSet+ne.sizes,rel:"preload",as:"image",href:ne.srcSet?void 0:ne.src},re))):null)};var o=f(n(7294)),s=f(n(5443)),c=n(6978),l=n(5809),u=n(7190);function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){return e&&e.__esModule?e:{default:e}}function h(e){for(var t=arguments,n=function(n){var i=null!=t[n]?t[n]:{},r=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),r.forEach((function(t){d(e,t,i[t])}))},i=1;i<arguments.length;i++)n(i);return e}var p=new Set,g=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var m=new Map([["default",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=new URL("".concat(t).concat(O(n))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||i.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,r=e.quality,a=["f_auto","c_limit","w_"+i,"q_"+(r||"auto")].join(",")+"/";return"".concat(t).concat(a).concat(O(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(O(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}var y,x={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai"}||l.imageConfigDefault,w=x.deviceSizes,v=x.imageSizes,j=x.loader,_=x.path,A=(x.domains,a(w).concat(a(v)));function k(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,o=e.quality,s=e.sizes,c=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var i,r=/(^|\s)(1?\d?\d)vw/g,o=[];i=r.exec(n);i)o.push(parseInt(i[2]));if(o.length){var s,c=.01*(s=Math).min.apply(s,a(o));return{widths:A.filter((function(e){return e>=w[0]*c})),kind:"w"}}return{widths:A,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:w,kind:"w"}:{widths:a(new Set([e,2*e].map((function(e){return A.find((function(t){return t>=e}))||A[A.length-1]})))),kind:"x"}}(r,i,s),u=l.widths,d=l.kind,f=u.length-1;return{sizes:s||"w"!==d?s:"100vw",srcSet:u.map((function(e,n){return"".concat(c({src:t,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:c({src:t,quality:o,width:u[f]})}}function N(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function S(e){var t=m.get(j);if(t)return t(h({root:_},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(j))}function O(e){return"/"===e[0]?e.slice(1):e}w.sort((function(e,t){return e-t})),A.sort((function(e,t){return e-t}))},6978:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},8564:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var i=n(5893),r=n(9008),a=n(5675),o=n(214),s=n.n(o),c=n(682),l=n(4051),u=n(1555),d=(n(7294),n(5692)),f=n.n(d),h=function(e){var t=e.text;return(0,i.jsx)("div",{className:f().designedButtonWrapper,children:(0,i.jsx)("button",{className:f().designedButton,children:t})})},p=function(e){var t=e.headingText,n=e.descriptionText,r=e.image,o=e.imageAlt,c=e.flip;return(0,i.jsx)(i.Fragment,{children:c?(0,i.jsxs)(l.Z,{className:"align-items-center mb-5",children:[(0,i.jsx)(u.Z,{className:"d-flex align-items-center justify-content-center",children:(0,i.jsx)(a.default,{src:r,width:300,height:300,alt:o})}),(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("p",{className:s().description,children:n})]})]}):(0,i.jsxs)(l.Z,{className:"align-items-center mb-5",children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("h2",{children:t}),(0,i.jsx)("p",{className:s().description,children:n})]}),(0,i.jsx)(u.Z,{className:"d-flex align-items-center justify-content-center",children:(0,i.jsx)(a.default,{src:r,width:300,height:300,alt:o,className:s().startup})})]})})},g=function(){return(0,i.jsx)("div",{className:s().background,children:(0,i.jsxs)(c.Z,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"National Founders Club"}),(0,i.jsx)("meta",{name:"description",content:"National Founders Club"})]}),(0,i.jsxs)(l.Z,{style:{height:"85vh"},className:"align-items-center",children:[(0,i.jsxs)(u.Z,{children:[(0,i.jsx)("h1",{className:s().title,children:"National Founders Club"}),(0,i.jsx)("p",{className:s().description,children:"Learn about entrepreneurship and startups, generate ideas, practice startup pitches, and more!"}),(0,i.jsx)(h,{text:"Start A Chapter!"})]}),(0,i.jsx)(u.Z,{className:"d-flex align-items-center justify-content-center",children:(0,i.jsx)(a.default,{src:"/rocket_icon.png",width:300,height:300,alt:"startup icon",className:s().startup})})]}),(0,i.jsx)(p,{headingText:"Learn about entrepreneurship",descriptionText:"Learn about the basics of entrepreneurship and how to think like an entrepreneur.",image:"/entrepreneurship.png",imageAlt:"entrepreneurship",flip:!0}),(0,i.jsx)(p,{headingText:"Business Planning",descriptionText:"Generate innovative ideas and all the components that go into a successful business.",image:"/business_plan.png",imageAlt:"business planning",flip:!1}),(0,i.jsx)(p,{headingText:"Mock Startup Pitches",descriptionText:"Get real-world experience by practicing startup pitches.",image:"/startup_pitch.png",imageAlt:"mock startup pitches",flip:!0}),(0,i.jsx)(p,{headingText:"Guest Speakers",descriptionText:"Learn from successful entrepreneurs and industry leaders who have years of experience.",image:"/guest_speaker.png",imageAlt:"guest speakers",flip:!1}),(0,i.jsxs)("footer",{className:"d-flex flex-row justify-content-between mb-3",style:{width:"100px"},children:[(0,i.jsx)("a",{href:"https://www.instagram.com/monty_nfc/",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(a.default,{src:"/instagram_icon.png",width:40,height:40,alt:"National Founders Club Instagram"})}),(0,i.jsx)("a",{href:"https://discord.gg/ybggaQhWhs",target:"_blank",rel:"noreferrer",children:(0,i.jsx)(a.default,{src:"/discord_icon.svg",width:40,height:40,alt:"National Founders Club Discord Server"})})]})]})})}},5692:function(e){e.exports={designedButtonWrapper:"DesignedButton_designedButtonWrapper__qurAP",rotateAngle:"DesignedButton_rotateAngle__On5VF",designedButton:"DesignedButton_designedButton__Lx_uX",translateWobble:"DesignedButton_translateWobble__10Lre"}},214:function(e){e.exports={background:"Home_background__I_nYJ",title:"Home_title__T09hD",description:"Home_description__41Owk"}},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"]}},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)},1555:function(e,t,n){"use strict";var i=n(4036),r=n.n(i),a=n(7294),o=n(6792),s=n(5893);const c=["xxl","xl","lg","md","sm","xs"];const l=a.forwardRef(((e,t)=>{const[{className:n,...i},{as:a="div",bsPrefix:l,spans:u}]=function({as:e,bsPrefix:t,className:n,...i}){t=(0,o.vE)(t,"col");const a=[],s=[];return c.forEach((e=>{const n=i[e];let r,o,c;delete i[e],"object"===typeof n&&null!=n?({span:r,offset:o,order:c}=n):r=n;const l="xs"!==e?`-${e}`:"";r&&a.push(!0===r?`${t}${l}`:`${t}${l}-${r}`),null!=c&&s.push(`order${l}-${c}`),null!=o&&s.push(`offset${l}-${o}`)})),[{...i,className:r()(n,...a,...s)},{as:e,bsPrefix:t,spans:a}]}(e);return(0,s.jsx)(a,{...i,ref:t,className:r()(n,!u.length&&l)})}));l.displayName="Col",t.Z=l},4051:function(e,t,n){"use strict";var i=n(4036),r=n.n(i),a=n(7294),o=n(6792),s=n(5893);const c=["xxl","xl","lg","md","sm","xs"],l=a.forwardRef((({bsPrefix:e,className:t,as:n="div",...i},a)=>{const l=(0,o.vE)(e,"row"),u=`${l}-cols`,d=[];return c.forEach((e=>{const t=i[e];let n;delete i[e],null!=t&&"object"===typeof t?({cols:n}=t):n=t;const r="xs"!==e?`-${e}`:"";null!=n&&d.push(`${u}${r}-${n}`)})),(0,s.jsx)(n,{ref:a,...i,className:r()(t,l,...d)})}));l.displayName="Row",t.Z=l}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);