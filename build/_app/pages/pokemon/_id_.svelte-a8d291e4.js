import{S as V,i as $,s as z,e as h,t as u,k as L,c as _,a as v,h as g,d as p,m as M,b as d,L as P,g as W,F as t,j as b,G as U}from"../../chunks/vendor-c07d283b.js";function A(s){let a,i=s[0].name+"",c,f,n,l,R,k,j,q,E,y=s[0].height+"",T,D,G,S=s[0].weight+"",w,I,r,H,N;return{c(){a=h("h1"),c=u(i),f=L(),n=h("div"),l=h("p"),R=u("Type: "),k=h("strong"),j=u(s[1]),q=u(" | Height: "),E=h("strong"),T=u(y),D=u(` | Weight:\r
		`),G=h("strong"),w=u(S),I=L(),r=h("img"),this.h()},l(e){a=_(e,"H1",{class:!0});var o=v(a);c=g(o,i),o.forEach(p),f=M(e),n=_(e,"DIV",{class:!0});var O=v(n);l=_(O,"P",{});var m=v(l);R=g(m,"Type: "),k=_(m,"STRONG",{});var B=v(k);j=g(B,s[1]),B.forEach(p),q=g(m," | Height: "),E=_(m,"STRONG",{});var C=v(E);T=g(C,y),C.forEach(p),D=g(m,` | Weight:\r
		`),G=_(m,"STRONG",{});var F=v(G);w=g(F,S),F.forEach(p),m.forEach(p),I=M(O),r=_(O,"IMG",{class:!0,src:!0,alt:!0}),O.forEach(p),this.h()},h(){d(a,"class","text-4xl text-center my-8 uppercase"),d(r,"class","card-image"),P(r.src,H=s[0].sprites.front_default)||d(r,"src",H),d(r,"alt",N=s[0].name),d(n,"class","flex flex-col items-center")},m(e,o){W(e,a,o),t(a,c),W(e,f,o),W(e,n,o),t(n,l),t(l,R),t(l,k),t(k,j),t(l,q),t(l,E),t(E,T),t(l,D),t(l,G),t(G,w),t(n,I),t(n,r)},p(e,[o]){o&1&&i!==(i=e[0].name+"")&&b(c,i),o&1&&y!==(y=e[0].height+"")&&b(T,y),o&1&&S!==(S=e[0].weight+"")&&b(w,S),o&1&&!P(r.src,H=e[0].sprites.front_default)&&d(r,"src",H),o&1&&N!==(N=e[0].name)&&d(r,"alt",N)},i:U,o:U,d(e){e&&p(a),e&&p(f),e&&p(n)}}}async function Q({params:s}){const i=`https://pokeapi.co/api/v2/pokemon/${s.id}`;return{props:{pokemon:await(await fetch(i)).json()}}}function J(s,a,i){let{pokemon:c}=a;const f=c.types[0].type.name;return s.$$set=n=>{"pokemon"in n&&i(0,c=n.pokemon)},[c,f]}class X extends V{constructor(a){super();$(this,a,J,A,z,{pokemon:0})}}export{X as default,Q as load};