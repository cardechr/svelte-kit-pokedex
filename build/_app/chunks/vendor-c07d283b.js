function y(){}const Q=t=>t;function ct(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function I(){return Object.create(null)}function w(t){t.forEach(W)}function U(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Pt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function lt(t){return Object.keys(t).length===0}function Dt(t,e,n,r){if(t){const o=V(t,e,n,r);return t[0](o)}}function V(t,e,n,r){return t[1]&&r?ct(n.ctx.slice(),t[1](r(e))):n.ctx}function Tt(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const u=[],i=Math.max(e.dirty.length,o.length);for(let s=0;s<i;s+=1)u[s]=e.dirty[s]|o[s];return u}return e.dirty|o}return e.dirty}function Bt(t,e,n,r,o,u){if(o){const i=V(e,n,r,u);t.p(i,o)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const X=typeof window!="undefined";let ut=X?()=>window.performance.now():()=>Date.now(),L=X?t=>requestAnimationFrame(t):y;const $=new Set;function Y(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&L(Y)}function at(t){let e;return $.size===0&&L(Y),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function ft(){O=!0}function _t(){O=!1}function dt(t,e,n,r){for(;t<e;){const o=t+(e-t>>1);n(o)<=r?t=o+1:e=o}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let o=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(o>0&&e[n[o]].claim_order<=l?o+1:dt(1,o,a=>e[n[a]].claim_order,l))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,o=Math.max(f,o)}const u=[],i=[];let s=e.length-1;for(let c=n[o]+1;c!=0;c=r[c-1]){for(u.push(e[c-1]);s>=c;s--)i.push(e[s]);s--}for(;s>=0;s--)i.push(e[s]);u.reverse(),i.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<i.length;c++){for(;l<u.length&&i[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(i[c],_)}}function mt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=tt("style");return yt(Z(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(O){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ft(t,e,n){O&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Ht(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function It(){return F(" ")}function Gt(){return F("")}function Jt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,r,o=!1){$t(t);const u=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const s=t[i];if(e(s)){const c=n(s);return c===void 0?t.splice(i,1):t[i]=c,o||(t.claim_info.last_index=i),s}}for(let i=t.claim_info.last_index-1;i>=0;i--){const s=t[i];if(e(s)){const c=n(s);return c===void 0?t.splice(i,1):t[i]=c,o?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,s}}return r()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function wt(t,e,n,r){return et(t,o=>o.nodeName===e,o=>{const u=[];for(let i=0;i<o.attributes.length;i++){const s=o.attributes[i];n[s.name]||u.push(s.name)}u.forEach(i=>o.removeAttribute(i))},()=>r(e))}function Qt(t,e,n){return wt(t,e,n,tt)}function Et(t,e){return et(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Wt(t){return Et(t," ")}function Ut(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Vt(t,e){t.value=e==null?"":e}function Xt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function vt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}function Yt(t,e=document.body){return Array.from(e.querySelectorAll(t))}const M=new Map;let R=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:pt(e),rules:{}};return M.set(t,n),n}function G(t,e,n,r,o,u,i,s=0){const c=16.666/r;let l=`{
`;for(let p=0;p<=1;p+=c){const b=e+(n-e)*u(p);l+=p*100+`%{${i(b,1-b)}}
`}const _=l+`100% {${i(n,1-n)}}
}`,f=`__svelte_${kt(_)}_${s}`,a=Z(t),{stylesheet:d,rules:h}=M.get(a)||At(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${r}ms linear ${o}ms 1 both`,R+=1,f}function St(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),R-=o,R||Ct())}function Ct(){L(()=>{R||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let A;function k(t){A=t}function H(){if(!A)throw new Error("Function called outside component initialization");return A}function Zt(t){H().$$.on_mount.push(t)}function te(t){H().$$.after_update.push(t)}function ee(t,e){H().$$.context.set(t,e)}const v=[],J=[],j=[],K=[],nt=Promise.resolve();let B=!1;function it(){B||(B=!0,nt.then(rt))}function ne(){return it(),nt}function z(t){j.push(t)}const D=new Set;let N=0;function rt(){const t=A;do{for(;N<v.length;){const e=v[N];N++,k(e),Nt(e.$$)}for(k(null),v.length=0,N=0;J.length;)J.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];D.has(n)||(D.add(n),n())}j.length=0}while(v.length);for(;K.length;)K.pop()();B=!1,D.clear(),k(t)}function Nt(t){if(t.fragment!==null){t.update(),w(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let E;function jt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function T(t,e,n){t.dispatchEvent(vt(`${e?"intro":"outro"}${n}`))}const q=new Set;let m;function ie(){m={r:0,c:[],p:m}}function re(){m.r||w(m.c),m=m.p}function qt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function oe(t,e,n,r){if(t&&t.o){if(q.has(t))return;q.add(t),m.c.push(()=>{q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Mt={duration:0};function ce(t,e,n,r){let o=e(t,n),u=r?0:1,i=null,s=null,c=null;function l(){c&&St(t,c)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:g=Q,tick:p=y,css:b}=o||Mt,P={start:ut()+d,b:a};a||(P.group=m,m.r+=1),i||s?s=P:(b&&(l(),c=G(t,u,a,h,d,g,b)),a&&p(0,1),i=_(P,h),z(()=>T(t,a,"start")),at(S=>{if(s&&S>s.start&&(i=_(s,h),s=null,T(t,i.b,"start"),b&&(l(),c=G(t,u,i.b,i.duration,0,g,o.css))),i){if(S>=i.end)p(u=i.b,1-u),T(t,i.b,"end"),s||(i.b?l():--i.group.r||w(i.group.c)),i=null;else if(S>=i.start){const ot=S-i.start;u=i.a+i.d*g(ot/i.duration),p(u,1-u)}}return!!(i||s)}))}return{run(a){U(o)?jt().then(()=>{o=o(),f(a)}):f(a)},end(){l(),i=s=null}}}function se(t,e){const n={},r={},o={$$scope:1};let u=t.length;for(;u--;){const i=t[u],s=e[u];if(s){for(const c in i)c in s||(r[c]=1);for(const c in s)o[c]||(n[c]=s[c],o[c]=1);t[u]=s}else for(const c in i)o[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function ue(t){t&&t.c()}function ae(t,e){t&&t.l(e)}function Rt(t,e,n,r){const{fragment:o,on_mount:u,on_destroy:i,after_update:s}=t.$$;o&&o.m(e,n),r||z(()=>{const c=u.map(W).filter(U);i?i.push(...c):w(c),t.$$.on_mount=[]}),s.forEach(z)}function zt(t,e){const n=t.$$;n.fragment!==null&&(w(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(v.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function fe(t,e,n,r,o,u,i,s=[-1]){const c=A;k(t);const l=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&o(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Ot(t,f)),a}):[],l.update(),_=!0,w(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){ft();const f=xt(e.target);l.fragment&&l.fragment.l(f),f.forEach(bt)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),_t(),rt()}k(c)}class _e{$destroy(){zt(this,1),this.$destroy=y}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!lt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const x=[];function de(t,e=y){let n;const r=new Set;function o(s){if(st(t,s)&&(t=s,n)){const c=!x.length;for(const l of r)l[1](),x.push(l,t);if(c){for(let l=0;l<x.length;l+=2)x[l][0](x[l+1]);x.length=0}}}function u(s){o(s(t))}function i(s,c=y){const l=[s,c];return r.add(l),r.size===1&&(n=e(o)||y),s(t),()=>{r.delete(l),r.size===0&&(n(),n=null)}}return{set:o,update:u,subscribe:i}}function he(t,{delay:e=0,duration:n=400,easing:r=Q}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:r,css:u=>`opacity: ${u*o}`}}export{le as A,zt as B,ct as C,de as D,ne as E,gt as F,y as G,Dt as H,Bt as I,Lt as J,Tt as K,Pt as L,z as M,ce as N,he as O,Yt as P,Vt as Q,Jt as R,_e as S,Ht as T,xt as a,Kt as b,Qt as c,bt as d,tt as e,Xt as f,Ft as g,Et as h,fe as i,Ut as j,It as k,Gt as l,Wt as m,ie as n,oe as o,re as p,qt as q,ee as r,st as s,F as t,te as u,Zt as v,ue as w,ae as x,Rt as y,se as z};