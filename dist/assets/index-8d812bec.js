(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function vt(t,e){t.indexOf(e)===-1&&t.push(e)}const it=(t,e,n)=>Math.min(Math.max(n,t),e),p={duration:.3,delay:0,endDelay:0,repeat:0,easing:"ease"},j=t=>typeof t=="number",O=t=>Array.isArray(t)&&!j(t[0]),bt=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function St(t,e){return O(t)?t[bt(0,t.length,e)]:t}const st=(t,e,n)=>-n*t+n*e+t,rt=()=>{},S=t=>t,Y=(t,e,n)=>e-t===0?1:(n-t)/(e-t);function ot(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const s=Y(0,e,i);t.push(st(n,1,s))}}function Tt(t){const e=[0];return ot(e,t-1),e}function At(t,e=Tt(t.length),n=S){const i=t.length,s=i-e.length;return s>0&&ot(e,s),r=>{let o=0;for(;o<i-2&&!(r<e[o+1]);o++);let a=it(0,1,Y(e[o],e[o+1],r));return a=St(n,o)(a),st(t[o],t[o+1],a)}}const at=t=>Array.isArray(t)&&j(t[0]),K=t=>typeof t=="object"&&!!t.createAnimation,x=t=>typeof t=="function",Et=t=>typeof t=="string",_={ms:t=>t*1e3,s:t=>t/1e3},ct=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Ot=1e-7,xt=12;function wt(t,e,n,i,s){let r,o,a=0;do o=e+(n-e)/2,r=ct(o,i,s)-t,r>0?n=o:e=o;while(Math.abs(r)>Ot&&++a<xt);return o}function q(t,e,n,i){if(t===e&&n===i)return S;const s=r=>wt(r,0,1,t,n);return r=>r===0||r===1?r:ct(s(r),e,i)}const Lt=(t,e="end")=>n=>{n=e==="end"?Math.min(n,.999):Math.max(n,.001);const i=n*t,s=e==="end"?Math.floor(i):Math.ceil(i);return it(0,1,s/t)},J={ease:q(.25,.1,.25,1),"ease-in":q(.42,0,1,1),"ease-in-out":q(.42,0,.58,1),"ease-out":q(0,0,.58,1)},Pt=/\((.*?)\)/;function Q(t){if(x(t))return t;if(at(t))return q(...t);if(J[t])return J[t];if(t.startsWith("steps")){const e=Pt.exec(t);if(e){const n=e[1].split(",");return Lt(parseFloat(n[0]),n[1].trim())}}return S}class lt{constructor(e,n=[0,1],{easing:i,duration:s=p.duration,delay:r=p.delay,endDelay:o=p.endDelay,repeat:a=p.repeat,offset:f,direction:d="normal"}={}){if(this.startTime=null,this.rate=1,this.t=0,this.cancelTimestamp=null,this.easing=S,this.duration=0,this.totalDuration=0,this.repeat=0,this.playState="idle",this.finished=new Promise((h,l)=>{this.resolve=h,this.reject=l}),i=i||p.easing,K(i)){const h=i.createAnimation(n);i=h.easing,n=h.keyframes||n,s=h.duration||s}this.repeat=a,this.easing=O(i)?S:Q(i),this.updateDuration(s);const y=At(n,f,O(i)?i.map(Q):S);this.tick=h=>{var l;r=r;let m=0;this.pauseTime!==void 0?m=this.pauseTime:m=(h-this.startTime)*this.rate,this.t=m,m/=1e3,m=Math.max(m-r,0),this.playState==="finished"&&this.pauseTime===void 0&&(m=this.totalDuration);const w=m/this.duration;let L=Math.floor(w),v=w%1;!v&&w>=1&&(v=1),v===1&&L--;const R=L%2;(d==="reverse"||d==="alternate"&&R||d==="alternate-reverse"&&!R)&&(v=1-v);const P=m>=this.totalDuration?1:Math.min(v,1),A=y(this.easing(P));e(A),this.pauseTime===void 0&&(this.playState==="finished"||m>=this.totalDuration+o)?(this.playState="finished",(l=this.resolve)===null||l===void 0||l.call(this,A)):this.playState!=="idle"&&(this.frameRequestId=requestAnimationFrame(this.tick))},this.play()}play(){const e=performance.now();this.playState="running",this.pauseTime!==void 0?this.startTime=e-this.pauseTime:this.startTime||(this.startTime=e),this.cancelTimestamp=this.startTime,this.pauseTime=void 0,this.frameRequestId=requestAnimationFrame(this.tick)}pause(){this.playState="paused",this.pauseTime=this.t}finish(){this.playState="finished",this.tick(0)}stop(){var e;this.playState="idle",this.frameRequestId!==void 0&&cancelAnimationFrame(this.frameRequestId),(e=this.reject)===null||e===void 0||e.call(this,!1)}cancel(){this.stop(),this.tick(this.cancelTimestamp)}reverse(){this.rate*=-1}commitStyles(){}updateDuration(e){this.duration=e,this.totalDuration=e*(this.repeat+1)}get currentTime(){return this.t}set currentTime(e){this.pauseTime!==void 0||this.rate===0?this.pauseTime=e:this.startTime=performance.now()-e/this.rate}get playbackRate(){return this.rate}set playbackRate(e){this.rate=e}}class Dt{setAnimation(e){this.animation=e,e==null||e.finished.then(()=>this.clearAnimation()).catch(()=>{})}clearAnimation(){this.animation=this.generator=void 0}}const C=new WeakMap;function ut(t){return C.has(t)||C.set(t,{transforms:[],values:new Map}),C.get(t)}function qt(t,e){return t.has(e)||t.set(e,new Dt),t.get(e)}const _t=["","X","Y","Z"],Mt=["translate","scale","rotate","skew"],U={x:"translateX",y:"translateY",z:"translateZ"},k={syntax:"<angle>",initialValue:"0deg",toDefaultUnit:t=>t+"deg"},Rt={translate:{syntax:"<length-percentage>",initialValue:"0px",toDefaultUnit:t=>t+"px"},rotate:k,scale:{syntax:"<number>",initialValue:1,toDefaultUnit:S},skew:k},M=new Map,Z=t=>`--motion-${t}`,z=["x","y","z"];Mt.forEach(t=>{_t.forEach(e=>{z.push(t+e),M.set(Z(t+e),Rt[t])})});const Ft=(t,e)=>z.indexOf(t)-z.indexOf(e),It=new Set(z),ft=t=>It.has(t),$t=(t,e)=>{U[e]&&(e=U[e]);const{transforms:n}=ut(t);vt(n,e),t.style.transform=Vt(n)},Vt=t=>t.sort(Ft).reduce(jt,"").trim(),jt=(t,e)=>`${t} ${e}(var(${Z(e)}))`,W=t=>t.startsWith("--"),tt=new Set;function Ut(t){if(!tt.has(t)){tt.add(t);try{const{syntax:e,initialValue:n}=M.has(t)?M.get(t):{};CSS.registerProperty({name:t,inherits:!1,syntax:e,initialValue:n})}catch{}}}const N=(t,e)=>document.createElement("div").animate(t,e),et={cssRegisterProperty:()=>typeof CSS<"u"&&Object.hasOwnProperty.call(CSS,"registerProperty"),waapi:()=>Object.hasOwnProperty.call(Element.prototype,"animate"),partialKeyframes:()=>{try{N({opacity:[1]})}catch{return!1}return!0},finished:()=>!!N({opacity:[0,1]},{duration:.001}).finished,linearEasing:()=>{try{N({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0}},B={},E={};for(const t in et)E[t]=()=>(B[t]===void 0&&(B[t]=et[t]()),B[t]);const zt=.015,Ct=(t,e)=>{let n="";const i=Math.round(e/zt);for(let s=0;s<i;s++)n+=t(Y(0,i-1,s))+", ";return n.substring(0,n.length-2)},nt=(t,e)=>x(t)?E.linearEasing()?`linear(${Ct(t,e)})`:p.easing:at(t)?Nt(t):t,Nt=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`;function Bt(t,e){for(let n=0;n<t.length;n++)t[n]===null&&(t[n]=n?t[n-1]:e());return t}const Kt=t=>Array.isArray(t)?t:[t];function X(t){return U[t]&&(t=U[t]),ft(t)?Z(t):t}const $={get:(t,e)=>{e=X(e);let n=W(e)?t.style.getPropertyValue(e):getComputedStyle(t)[e];if(!n&&n!==0){const i=M.get(e);i&&(n=i.initialValue)}return n},set:(t,e,n)=>{e=X(e),W(e)?t.style.setProperty(e,n):t.style[e]=n}};function dt(t,e=!0){if(!(!t||t.playState==="finished"))try{t.stop?t.stop():(e&&t.commitStyles(),t.cancel())}catch{}}function Wt(t,e){var n;let i=(e==null?void 0:e.toDefaultUnit)||S;const s=t[t.length-1];if(Et(s)){const r=((n=s.match(/(-?[\d.]+)([a-z%]*)/))===null||n===void 0?void 0:n[2])||"";r&&(i=o=>o+r)}return i}function Xt(){return window.__MOTION_DEV_TOOLS_RECORD}function Yt(t,e,n,i={},s){const r=Xt(),o=i.record!==!1&&r;let a,{duration:f=p.duration,delay:d=p.delay,endDelay:y=p.endDelay,repeat:h=p.repeat,easing:l=p.easing,persist:m=!1,direction:w,offset:L,allowWebkitAcceleration:v=!1}=i;const R=ut(t),P=ft(e);let A=E.waapi();P&&$t(t,e);const g=X(e),F=qt(R.values,g),b=M.get(g);return dt(F.animation,!(K(l)&&F.generator)&&i.record!==!1),()=>{const I=()=>{var c,D;return(D=(c=$.get(t,g))!==null&&c!==void 0?c:b==null?void 0:b.initialValue)!==null&&D!==void 0?D:0};let u=Bt(Kt(n),I);const H=Wt(u,b);if(K(l)){const c=l.createAnimation(u,e!=="opacity",I,g,F);l=c.easing,u=c.keyframes||u,f=c.duration||f}if(W(g)&&(E.cssRegisterProperty()?Ut(g):A=!1),P&&!E.linearEasing()&&(x(l)||O(l)&&l.some(x))&&(A=!1),A){b&&(u=u.map(T=>j(T)?b.toDefaultUnit(T):T)),u.length===1&&(!E.partialKeyframes()||o)&&u.unshift(I());const c={delay:_.ms(d),duration:_.ms(f),endDelay:_.ms(y),easing:O(l)?void 0:nt(l,f),direction:w,iterations:h+1,fill:"both"};a=t.animate({[g]:u,offset:L,easing:O(l)?l.map(T=>nt(T,f)):void 0},c),a.finished||(a.finished=new Promise((T,yt)=>{a.onfinish=T,a.oncancel=yt}));const D=u[u.length-1];a.finished.then(()=>{m||($.set(t,g,D),a.cancel())}).catch(rt),v||(a.playbackRate=1.000001)}else if(s&&P)u=u.map(c=>typeof c=="string"?parseFloat(c):c),u.length===1&&u.unshift(parseFloat(I())),a=new s(c=>{$.set(t,g,H?H(c):c)},u,Object.assign(Object.assign({},i),{duration:f,easing:l}));else{const c=u[u.length-1];$.set(t,g,b&&j(c)?b.toDefaultUnit(c):c)}return o&&r(t,e,u,{duration:f,delay:d,easing:l,repeat:h,offset:L},"motion-one"),F.setAnimation(a),a}}const Zt=(t,e)=>t[e]?Object.assign(Object.assign({},t),t[e]):Object.assign({},t);function Gt(t,e){var n;return typeof t=="string"?e?((n=e[t])!==null&&n!==void 0||(e[t]=document.querySelectorAll(t)),t=e[t]):t=document.querySelectorAll(t):t instanceof Element&&(t=[t]),Array.from(t||[])}const Ht=t=>t(),ht=(t,e,n=p.duration)=>new Proxy({animations:t.map(Ht).filter(Boolean),duration:n,options:e},Qt),Jt=t=>t.animations[0],Qt={get:(t,e)=>{const n=Jt(t);switch(e){case"duration":return t.duration;case"currentTime":return _.s((n==null?void 0:n[e])||0);case"playbackRate":case"playState":return n==null?void 0:n[e];case"finished":return t.finished||(t.finished=Promise.all(t.animations.map(kt)).catch(rt)),t.finished;case"stop":return()=>{t.animations.forEach(i=>dt(i))};case"forEachNative":return i=>{t.animations.forEach(s=>i(s,t))};default:return typeof(n==null?void 0:n[e])>"u"?void 0:()=>t.animations.forEach(i=>i[e]())}},set:(t,e,n)=>{switch(e){case"currentTime":n=_.ms(n);case"playbackRate":for(let i=0;i<t.animations.length;i++)t.animations[i][e]=n;return!0}return!1}},kt=t=>t.finished;function te(t,e,n){return x(t)?t(e,n):t}function ee(t){return function(n,i,s={}){n=Gt(n);const r=n.length,o=[];for(let a=0;a<r;a++){const f=n[a];for(const d in i){const y=Zt(s,d);y.delay=te(y.delay,a,r);const h=Yt(f,d,i[d],y,t);o.push(h)}}return ht(o,s,s.duration)}}const ne=ee(lt);function ie(t,e={}){return ht([()=>{const n=new lt(t,[0,1],e);return n.finished.catch(()=>{}),n}],e,e.duration)}function G(t,e,n){return(x(t)?ie:ne)(t,e,n)}const V=document.querySelector(".hamburger-menu"),se=document.querySelector(".menu"),re=document.body,oe=document.querySelectorAll(".nav_link"),ae=document.querySelector(".hero-image"),ce=document.querySelector(".hero-heading"),le=document.querySelector(".hero-description"),ue=document.querySelector(".hero-btns"),fe=[ce,le],mt=()=>{const t=V.getAttribute("aria-expanded")==="true"||!1;V.setAttribute("aria-expanded",!t),se.classList.toggle("active"),V.classList.toggle("close"),re.classList.toggle("overflow-hidden")};V.addEventListener("click",mt);oe.forEach(t=>{t.addEventListener("click",mt)});const pt=document.querySelector(".accordion__boxes"),gt=(t,e)=>{t.addEventListener("click",n=>{n.preventDefault();const i=n.target.closest(`${e}`);console.log(i),i&&(i.classList.contains("accordion__box")?(t.classList.toggle("active"),i.classList.toggle("active")):t.classList.toggle("active"))})};gt(pt,".plus");gt(pt,".accordion__box");const de=function(){const t=document.querySelectorAll(".testimonials__box"),e=document.querySelector(".slider-icon-left"),n=document.querySelector(".slider-icon-right");let i=0;const s=t.length,r=function(f){t.forEach((d,y)=>d.style.transform=`translateX(${100*(y-f)}%)`)},o=function(){i===s-1?i=0:i++,r(i)},a=function(){i===0?i=s-1:i--,r(i)};r(0),n.addEventListener("click",o),e.addEventListener("click",a)};de();G(ae,{opacity:["0","1"],transform:["translateY(-100%)","none"]},{duration:1,easing:"ease-in-out"});G(fe,{transform:["translateX(-200%)","none"],filter:["blur(10px)","none"]},{duration:1.4,easing:"ease-in-out",delay:"0.3"});G(ue,{transform:["translateY(50px)","none"],opacity:["0","1"]},{duration:1,easing:"ease-in-out",delay:"1.4"});
