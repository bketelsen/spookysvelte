import{S as N,i as O,s as Q,x as R,y as U,z as W,r as V,p as L,C as X,e as m,k as y,t as M,K as Y,c as p,d as i,m as D,a as g,h as P,b as u,F as c,g as T,q as Z,I as tt,o as et}from"../../chunks/index-903c2de0.js";import{C as st}from"../../chunks/Card-4d1cc796.js";import"../../chunks/PrimaryTag-6b8548c8.js";function j(d,l,r){const t=d.slice();return t[1]=l[r],t}function G(d){let l,r;return l=new st({props:{post:d[1]}}),{c(){R(l.$$.fragment)},l(t){U(l.$$.fragment,t)},m(t,n){W(l,t,n),r=!0},p(t,n){const h={};n&1&&(h.post=t[1]),l.$set(h)},i(t){r||(V(l.$$.fragment,t),r=!0)},o(t){L(l.$$.fragment,t),r=!1},d(t){X(l,t)}}}function at(d){let l,r,t,n,h,q,f,_,b,C,B,E,F,S,v,$,x=d[0],a=[];for(let e=0;e<x.length;e+=1)a[e]=G(j(d,x,e));const J=e=>L(a[e],1,1,()=>{a[e]=null});return{c(){l=m("meta"),r=y(),t=m("div"),n=m("div"),h=m("div"),q=y(),f=m("div"),_=m("div"),b=m("h2"),C=M("From the blog"),B=y(),E=m("p"),F=M(`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.`),S=y(),v=m("div");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){const o=Y('[data-svelte="svelte-1nkwzp0"]',document.head);l=p(o,"META",{name:!0,content:!0}),o.forEach(i),r=D(e),t=p(e,"DIV",{class:!0});var s=g(t);n=p(s,"DIV",{class:!0});var I=g(n);h=p(I,"DIV",{class:!0}),g(h).forEach(i),I.forEach(i),q=D(s),f=p(s,"DIV",{class:!0});var k=g(f);_=p(k,"DIV",{class:!0});var w=g(_);b=p(w,"H2",{class:!0});var A=g(b);C=P(A,"From the blog"),A.forEach(i),B=D(w),E=p(w,"P",{class:!0});var H=g(E);F=P(H,`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
        labore natus atque, ducimus sed.`),H.forEach(i),w.forEach(i),S=D(k),v=p(k,"DIV",{class:!0});var K=g(v);for(let z=0;z<a.length;z+=1)a[z].l(K);K.forEach(i),k.forEach(i),s.forEach(i),this.h()},h(){document.title="Blog",u(l,"name","description"),u(l,"content","Svelte demo app"),u(h,"class","bg-base-300 h-1/6"),u(n,"class","absolute inset-0"),u(b,"class","text-3xl tracking-tight font-extrabold text-base-content sm:text-4xl"),u(E,"class","mt-3 max-w-2xl mx-auto text-xl text-base-content sm:mt-4"),u(_,"class","text-center"),u(v,"class","mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"),u(f,"class","relative max-w-7xl mx-auto"),u(t,"class","relative bg-base-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8")},m(e,o){c(document.head,l),T(e,r,o),T(e,t,o),c(t,n),c(n,h),c(t,q),c(t,f),c(f,_),c(_,b),c(b,C),c(_,B),c(_,E),c(E,F),c(f,S),c(f,v);for(let s=0;s<a.length;s+=1)a[s].m(v,null);$=!0},p(e,[o]){if(o&1){x=e[0];let s;for(s=0;s<x.length;s+=1){const I=j(e,x,s);a[s]?(a[s].p(I,o),V(a[s],1)):(a[s]=G(I),a[s].c(),V(a[s],1),a[s].m(v,null))}for(et(),s=x.length;s<a.length;s+=1)J(s);Z()}},i(e){if(!$){for(let o=0;o<x.length;o+=1)V(a[o]);$=!0}},o(e){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)L(a[o]);$=!1},d(e){i(l),e&&i(r),e&&i(t),tt(a,e)}}}function lt(d,l,r){let{posts:t}=l;return d.$$set=n=>{"posts"in n&&r(0,t=n.posts)},[t]}class ct extends N{constructor(l){super(),O(this,l,lt,at,Q,{posts:0})}}export{ct as default};