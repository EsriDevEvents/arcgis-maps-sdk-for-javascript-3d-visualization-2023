import{a as v}from"./mathUtils-ae09f98b.js";import{r as z}from"./typedArrayUtil-bf9f210a.js";import{P as s,_ as j,g as L,e as F,u as x,a as k,n as _,o as y,F as C,z as l}from"./vec3-8818fe1c.js";import{r as w,c as E}from"./sphere-a48b65b1.js";function O(r=g){return[r[0],r[1],r[2],r[3]]}function R(r=g[0],n=g[1],t=g[2],u=g[3]){return q(r,n,t,u,w.get())}function B(r,n){return q(n[0],n[1],n[2],n[3],r)}function q(r,n,t,u,c=O()){return c[0]=r,c[1]=n,c[2]=t,c[3]=u,c}function S(r,n,t){return k(t,r),t[3]=n,t}function G(r,n,t){const u=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],c=Math.abs(u-1)>1e-5&&u>1e-12?1/Math.sqrt(u):1;return t[0]=n[0]*c,t[1]=n[1]*c,t[2]=n[2]*c,t[3]=-(t[0]*r[0]+t[1]*r[1]+t[2]*r[2]),t}function H(r,n,t,u=O()){const c=t[0]-n[0],I=t[1]-n[1],o=t[2]-n[2],e=r[0]-n[0],i=r[1]-n[1],d=r[2]-n[2],T=I*d-o*i,h=o*e-c*d,P=c*i-I*e,p=T*T+h*h+P*P,X=Math.abs(p-1)>1e-5&&p>1e-12?1/Math.sqrt(p):1;return u[0]=T*X,u[1]=h*X,u[2]=P*X,u[3]=-(u[0]*r[0]+u[1]*r[1]+u[2]*r[2]),u}function J(r,n,t,u,c){const I=r.length/3;if(I<3)return!1;y(M,r[3*t],r[3*t+1],r[3*t+2]);let o=u,e=!1;for(;o<I-1&&!e;){const i=3*o;y(a,r[i],r[i+1],r[i+2]),o++,e=!C(M,a)}if(!e)return!1;for(o=Math.max(o,c),e=!1;o<I&&!e;){const i=3*o;y(N,r[i],r[i+1],r[i+2]),o++,F($,M,a),l($,$),F(m,a,N),l(m,m),e=!C(M,N)&&!C(a,N)&&Math.abs(s($,m))<Q}return e?(H(M,a,N,n),!0):(t!==0||u!==1||c!==2)&&J(r,n,0,1,2)}const Q=.99619469809,M=_(),a=_(),N=_(),$=_(),m=_();function rr(r,n,t){return n!==r&&B(r,n),r[3]=-s(r,t),r}function nr(r,n){return n[0]=-r[0],n[1]=-r[1],n[2]=-r[2],n[3]=-r[3],n}function tr(r,n,t,u){return j(N,n,r),G(t,N,u)}function ur(r,n,t,u){return A(r,n,F(E.get(),t,n),V,u)}function cr(r,n,t){return!!z(n)&&A(r,n.origin,n.direction,W,t)}function or(r,n,t){return A(r,n.origin,n.vector,f.NONE,t)}function er(r,n,t){return A(r,n.origin,n.vector,f.CLAMP,t)}function ir(r,n){return b(r,n)>=0}function fr(r,n){const t=s(r,n.ray.direction),u=-b(r,n.ray.origin);if(u<0&&t>=0)return!1;if(t>-1e-6&&t<1e-6)return u>0;if((u<0||t<0)&&!(u<0&&t<0))return!0;const c=u/t;return t>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function Ir(r,n){const t=s(r,n.ray.direction),u=-b(r,n.ray.origin);if(t>-1e-6&&t<1e-6)return u>0;const c=u/t;return t>0?c<n.c1&&(n.c1=c):c>n.c0&&(n.c0=c),n.c0<=n.c1}function sr(r,n,t){const u=L(E.get(),r,-r[3]),c=U(r,F(E.get(),n,u),E.get());return x(t,c,u),t}function U(r,n,t){const u=L(E.get(),r,s(r,n));return F(t,n,u),t}function b(r,n){return s(r,n)+r[3]}function A(r,n,t,u,c){const I=s(r,t);if(I===0)return!1;let o=-(s(r,n)+r[3])/I;return u&f.CLAMP&&(o=v(o,0,1)),!(!(u&f.INFINITE_MIN)&&o<0||!(u&f.INFINITE_MAX)&&o>1)&&(x(c,n,L(c,t,o)),!0)}function Nr(r){return r}const g=[0,0,1,0];var f;(function(r){r[r.NONE=0]="NONE",r[r.CLAMP=1]="CLAMP",r[r.INFINITE_MIN=4]="INFINITE_MIN",r[r.INFINITE_MAX=8]="INFINITE_MAX"})(f||(f={}));const V=f.INFINITE_MIN|f.INFINITE_MAX,W=f.INFINITE_MAX;export{B as A,ir as B,R as E,q as F,fr as G,Ir as H,sr as J,rr as L,tr as O,nr as P,U as Q,S as T,or as U,b as V,Nr as Y,G as _,J as b,H as j,O as p,ur as q,er as w,cr as x};