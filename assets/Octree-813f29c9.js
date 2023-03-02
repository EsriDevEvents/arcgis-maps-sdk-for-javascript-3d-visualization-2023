import{r as Q}from"./typedArrayUtil-bf9f210a.js";import{e as Rt}from"./ArrayPool-b51874dd.js";import{i as v}from"./jsonMap-ffa742d3.js";import{s as pt,u as k,g as U,n as E,o as At,p as et,a as nt,A as Et,r as T}from"./vec3-8818fe1c.js";import{s as ut,d as ot,k as Nt,v as Ft,e as bt,r as gt,_ as q,p as rt,T as V,g as G,V as it,R as P}from"./sphere-a48b65b1.js";import{c as Mt,h as Bt}from"./mat4-f0dc8788.js";import{w as It}from"./vec4-c7a19f0d.js";import{r as g}from"./vec4f64-6d0e93be.js";import{p,A as St,j as x,V as Ht,G as xt,H as Lt}from"./plane-01584357.js";import{i as st}from"./Util-513876a8.js";function C(o){return o?{ray:ot(o.ray),c0:o.c0,c1:o.c1}:{ray:ot(),c0:0,c1:Number.MAX_VALUE}}function Pt(o,t=C()){return Nt(o,t.ray),t.c0=0,t.c1=Number.MAX_VALUE,t}function $t(o,t,e=C()){const n=pt(o.vector);return Ft(o.origin,t,e.ray),e.c0=0,e.c1=n,e}function te(o,t){return lt(o,o.c0,t)}function ee(o,t){return lt(o,o.c1,t)}function lt(o,t,e){return k(e,o.ray.origin,U(e,o.ray.direction,t))}new ut(()=>C());function ne(o){return o?[p(o[0]),p(o[1]),p(o[2]),p(o[3]),p(o[4]),p(o[5])]:[p(),p(),p(),p(),p(),p()]}function jt(){return[E(),E(),E(),E(),E(),E(),E(),E()]}function oe(o,t){for(let e=0;e<H.NUM;e++)St(o[e],t[e])}function re(o,t,e,n=vt){const r=Mt(bt.get(),t,o);Bt(r,r);for(let i=0;i<Y.NUM;++i){const a=It(gt.get(),zt[i],r);At(n[i],a[0]/a[3],a[1]/a[3],a[2]/a[3])}Gt(e,n)}function Gt(o,t){x(t[s.FAR_BOTTOM_LEFT],t[s.NEAR_BOTTOM_LEFT],t[s.NEAR_TOP_LEFT],o[M.LEFT]),x(t[s.NEAR_BOTTOM_RIGHT],t[s.FAR_BOTTOM_RIGHT],t[s.FAR_TOP_RIGHT],o[M.RIGHT]),x(t[s.FAR_BOTTOM_LEFT],t[s.FAR_BOTTOM_RIGHT],t[s.NEAR_BOTTOM_RIGHT],o[M.BOTTOM]),x(t[s.NEAR_TOP_LEFT],t[s.NEAR_TOP_RIGHT],t[s.FAR_TOP_RIGHT],o[M.TOP]),x(t[s.NEAR_BOTTOM_LEFT],t[s.NEAR_BOTTOM_RIGHT],t[s.NEAR_TOP_RIGHT],o[M.NEAR]),x(t[s.FAR_BOTTOM_RIGHT],t[s.FAR_BOTTOM_LEFT],t[s.FAR_TOP_LEFT],o[M.FAR])}function D(o,t){for(let e=0;e<H.NUM;e++){const n=o[e];if(n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]>=t[3])return!1}return!0}function ie(o,t){return ct(o,Pt(t,_t.get()))}function se(o,t){for(let e=0;e<H.NUM;e++){const n=o[e];if(!Lt(n,t))return!1}return!0}function he(o,t,e){return ct(o,$t(t,e,_t.get()))}function ae(o,t){for(let e=0;e<H.NUM;e++)if(Ht(o[e],t)>0)return!1;return!0}function ct(o,t){for(let e=0;e<H.NUM;e++)if(!xt(o[e],t))return!1;return!0}var M,s;(function(o){o[o.LEFT=0]="LEFT",o[o.RIGHT=1]="RIGHT",o[o.BOTTOM=2]="BOTTOM",o[o.TOP=3]="TOP",o[o.NEAR=4]="NEAR",o[o.FAR=5]="FAR"})(M||(M={})),function(o){o[o.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",o[o.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",o[o.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",o[o.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",o[o.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",o[o.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",o[o.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",o[o.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(s||(s={}));const de={bottom:[s.FAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_RIGHT,s.NEAR_BOTTOM_LEFT,s.FAR_BOTTOM_LEFT],near:[s.NEAR_BOTTOM_LEFT,s.NEAR_BOTTOM_RIGHT,s.NEAR_TOP_RIGHT,s.NEAR_TOP_LEFT],far:[s.FAR_BOTTOM_RIGHT,s.FAR_BOTTOM_LEFT,s.FAR_TOP_LEFT,s.FAR_TOP_RIGHT],right:[s.NEAR_BOTTOM_RIGHT,s.FAR_BOTTOM_RIGHT,s.FAR_TOP_RIGHT,s.NEAR_TOP_RIGHT],left:[s.FAR_BOTTOM_LEFT,s.NEAR_BOTTOM_LEFT,s.NEAR_TOP_LEFT,s.FAR_TOP_LEFT],top:[s.FAR_TOP_LEFT,s.NEAR_TOP_LEFT,s.NEAR_TOP_RIGHT,s.FAR_TOP_RIGHT]};var H,Y;(function(o){o[o.NUM=6]="NUM"})(H||(H={})),function(o){o[o.NUM=8]="NUM"}(Y||(Y={}));const zt=[g(-1,-1,-1,1),g(1,-1,-1,1),g(1,1,-1,1),g(-1,1,-1,1),g(-1,-1,1,1),g(1,-1,1,1),g(1,1,1,1),g(-1,1,1,1)],_t=new ut(C),vt=jt();class L{get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new u,this._objectCount=0,e&&(e.maximumObjectsPerNode!==void 0&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),e.maximumDepth!==void 0&&(this._maximumDepth=e.maximumDepth))}destroy(){this._degenerateObjects.clear(),u.clearPool(),Z[0]=null,I.prune(),S.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=u.acquire();for(let r=0;r<e;r++){const i=t[r];this._isDegenerate(i)?this._degenerateObjects.add(i):(n.init(this._root),this._add(i,n))}u.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=u.acquire();for(const r of t){const i=Q(e)?e:q(this._objectToBoundingSphere(r),Ut);z(i[3])?(n.init(this._root),this._remove(r,i,n)):this._degenerateObjects.delete(r)}u.release(n),this._shrink()}update(t,e){if(!z(e[3])&&this._isDegenerate(t))return;const n=kt(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const r=rt(t,e);this._forEachNode(this._root,i=>{if(!this._intersectsNode(r,i))return!1;const a=i.node;return a.terminals.forAll(d=>{this._intersectsObject(r,d)&&n(d)}),a.residents!==null&&a.residents.forAll(d=>{this._intersectsObject(r,d)&&n(d)}),!0})}forEachAlongRayWithVerticalOffset(t,e,n,r){const i=rt(t,e);this._forEachNode(this._root,a=>{if(!this._intersectsNodeWithOffset(i,a,r))return!1;const d=a.node;return d.terminals.forAll(h=>{this._intersectsObjectWithOffset(i,h,r)&&n(h)}),d.residents!==null&&d.residents.forAll(h=>{this._intersectsObjectWithOffset(i,h,r)&&n(h)}),!0})}forEach(t){this._forEachNode(this._root,e=>{const n=e.node;return n.terminals.forAll(t),n.residents!==null&&n.residents.forAll(t),!0}),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,r=()=>!0,i=1/0){let a=1/0,d=1/0,h=null;const c=K(t,e),f=l=>{if(--i,!r(l))return;const O=this._objectToBoundingSphere(l);if(!D(n,O))return;const N=B(t,e,G(O)),$=N-O[3],_=N+O[3];$<a&&(a=$,d=_,h=l)};return this._forEachNodeDepthOrdered(this._root,l=>{if(i<=0||!D(n,l.bounds)||(U(A,c,l.halfSize),k(A,A,l.bounds),B(t,e,A)>d))return!1;const O=l.node;return O.terminals.forAll(N=>f(N)),O.residents!==null&&O.residents.forAll(N=>f(N)),!0},t,e),h}forEachInDepthRange(t,e,n,r,i,a,d){let h=-1/0,c=1/0;const f={setRange:_=>{n===L.DepthOrder.FRONT_TO_BACK?(h=Math.max(h,_.near),c=Math.min(c,_.far)):(h=Math.max(h,-_.far),c=Math.min(c,-_.near))}};f.setRange(r);const l=B(e,n,t),O=K(e,n),N=K(e,-n),$=_=>{if(!d(_))return;const b=this._objectToBoundingSphere(_),j=G(b),tt=B(e,n,j)-l,Ot=tt-b[3],mt=tt+b[3];Ot>c||mt<h||!D(a,b)||i(_,f)};this._forEachNodeDepthOrdered(this._root,_=>{if(!D(a,_.bounds)||(U(A,O,_.halfSize),k(A,A,_.bounds),B(e,n,A)-l>c)||(U(A,N,_.halfSize),k(A,A,_.bounds),B(e,n,A)-l<h))return!1;const b=_.node;return b.terminals.forAll(j=>$(j)),b.residents!==null&&b.residents.forAll(j=>$(j)),!0},e,n)}forEachNode(t){this._forEachNode(this._root,e=>t(e.node,e.bounds,e.halfSize))}forEachNeighbor(t,e){const n=V(e),r=G(e),i=h=>{const c=this._objectToBoundingSphere(h),f=V(c),l=n+f;return!(et(G(c),r)-l*l<=0)||t(h)};let a=!0;const d=h=>{a&&(a=i(h))};this._forEachNode(this._root,h=>{const c=V(h.bounds),f=n+c;if(et(G(h.bounds),r)-f*f>0)return!1;const l=h.node;return l.terminals.forAll(d),a&&l.residents!==null&&l.residents.forAll(d),a}),a&&this.forEachDegenerateObject(d)}_intersectsNode(t,e){return y(e.bounds,2*-e.halfSize,m),y(e.bounds,2*e.halfSize,R),st(t.origin,t.direction,m,R)}_intersectsNodeWithOffset(t,e,n){return y(e.bounds,2*-e.halfSize,m),y(e.bounds,2*e.halfSize,R),n.applyToMinMax(m,R),st(t.origin,t.direction,m,R)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||it(n,t)}_intersectsObjectWithOffset(t,e,n){const r=this._objectToBoundingSphere(e);return!(r[3]>0)||it(n.applyToBoundingSphere(r),t)}_forEachNode(t,e){let n=u.acquire().init(t);const r=[n];for(;r.length!==0;){if(n=r.pop(),e(n)&&!n.isLeaf())for(let i=0;i<n.node.children.length;i++)n.node.children[i]&&r.push(u.acquire().init(n).advance(i));u.release(n)}}_forEachNodeDepthOrdered(t,e,n,r=L.DepthOrder.FRONT_TO_BACK){let i=u.acquire().init(t);const a=[i];for(wt(n,r,dt);a.length!==0;){if(i=a.pop(),e(i)&&!i.isLeaf())for(let d=7;d>=0;--d){const h=dt[d];i.node.children[h]&&a.push(u.acquire().init(i).advance(h))}u.release(i)}}_remove(t,e,n){I.clear();const r=n.advanceTo(e,(i,a)=>{I.push(i.node),I.push(a)})?n.node.terminals:n.node.residents;if(r.removeUnordered(t),r.length===0)for(let i=I.length-2;i>=0;i-=2){const a=I.data[i],d=I.data[i+1];if(!this._purge(a,d))break}}_nodeIsEmpty(t){if(t.terminals.length!==0)return!1;if(t.residents!==null)return t.residents.length===0;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(t.residents===null&&(t.residents=new v({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const r=u.acquire().init(t);this._add(e.getItemAt(n),r),u.release(r)}}_grow(t,e){if(e!==0&&(ht(t,e,n=>this._objectToBoundingSphere(n),F),z(F[3])&&!this._fitsInsideTree(F)))if(this._nodeIsEmpty(this._root.node))q(F,this._root.bounds),this._root.halfSize=1.25*this._root.bounds[3],this._root.updateBoundsRadiusFromHalfSize();else{const n=this._rootBoundsForRootAsSubNode(F);this._placingRootViolatesMaxDepth(n)?this._rebuildTree(F,n):this._growRootAsSubNode(n),u.release(n)}}_rebuildTree(t,e){nt(X,e.bounds),X[3]=e.halfSize,ht([t,X],2,r=>r,J);const n=u.acquire().init(this._root);this._root.initFrom(null,J,J[3]),this._root.increaseHalfSize(1.25),this._forEachNode(n,r=>(this.add(r.node.terminals.data,r.node.terminals.length),r.node.residents!==null&&this.add(r.node.residents.data,r.node.residents.length),!0)),u.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,r=>(n=Math.max(n,r.depth),n+e<=this._maximumDepth)),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let r=-1/0;const i=this._root.bounds,a=this._root.halfSize;for(let h=0;h<3;h++){const c=i[h]-a-(n[h]-e),f=n[h]+e-(i[h]+a),l=Math.max(0,Math.ceil(c/(2*a))),O=Math.max(0,Math.ceil(f/(2*a)))+1,N=2**Math.ceil(Math.log(l+O)*Math.LOG2E);r=Math.max(r,N),w[h].min=l,w[h].max=O}for(let h=0;h<3;h++){let c=w[h].min,f=w[h].max;const l=(r-(c+f))/2;c+=Math.ceil(l),f+=Math.floor(l);const O=i[h]-a-c*a*2;W[h]=O+(f+c)*a}const d=r*a;return W[3]=d*Tt,u.acquire().initFrom(null,W,d,0)}_growRootAsSubNode(t){const e=this._root.node;nt(F,this._root.bounds),F[3]=this._root.halfSize,this._root.init(t),t.advanceTo(F,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(t===-1)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(this._root.node.terminals.length!==0||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,r=0;for(;r<e.length&&t==null;)n=r++,t=e[n];for(;r<e.length;)if(e[r++])return-1;return n}_isDegenerate(t){return!z(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class u{constructor(){this.bounds=P(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,r=this.depth){return this.node=Q(t)?t:u.createEmptyNode(),Q(e)&&q(e,this.bounds),this.halfSize=n,this.depth=r,this}increaseHalfSize(t){this.halfSize*=t,this.updateBoundsRadiusFromHalfSize()}updateBoundsRadiusFromHalfSize(){this.bounds[3]=this.halfSize*Tt}advance(t){let e=this.node.children[t];e||(e=u.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=ft[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.updateBoundsRadiusFromHalfSize(),this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const r=this._childIndex(t);e&&e(this,r),this.advance(r)}}isLeaf(){return this.node.residents!=null}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new v({shrink:!0}),residents:new v({shrink:!0})}}static acquire(){return u._pool.acquire()}static release(t){u._pool.release(t)}static clearPool(){u._pool.prune()}}function Dt(o,t){o[0]=Math.min(o[0],t[0]-t[3]),o[1]=Math.min(o[1],t[1]-t[3]),o[2]=Math.min(o[2],t[2]-t[3])}function yt(o,t){o[0]=Math.max(o[0],t[0]+t[3]),o[1]=Math.max(o[1],t[1]+t[3]),o[2]=Math.max(o[2],t[2]+t[3])}function y(o,t,e){e[0]=o[0]+t,e[1]=o[1]+t,e[2]=o[2]+t}function ht(o,t,e,n){if(t===1){const r=e(o[0]);q(r,n)}else{m[0]=1/0,m[1]=1/0,m[2]=1/0,R[0]=-1/0,R[1]=-1/0,R[2]=-1/0;for(let r=0;r<t;r++){const i=e(o[r]);z(i[3])&&(Dt(m,i),yt(R,i))}Et(n,m,R,.5),n[3]=Math.max(R[0]-m[0],R[1]-m[1],R[2]-m[2])/2}}function wt(o,t,e){if(!S.length)for(let n=0;n<8;++n)S.push({index:0,distance:0});for(let n=0;n<8;++n){const r=ft[n];S.data[n].index=n,S.data[n].distance=B(o,t,r)}S.sort((n,r)=>n.distance-r.distance);for(let n=0;n<8;++n)e[n]=S.data[n].index}function K(o,t){let e,n=1/0;for(let r=0;r<8;++r){const i=B(o,t,at[r]);i<n&&(n=i,e=at[r])}return e}function B(o,t,e){return t*(o[0]*e[0]+o[1]*e[1]+o[2]*e[2])}function z(o){return!isNaN(o)&&o!==-1/0&&o!==1/0&&o>0}u._pool=new Rt(u),function(o){var t;(t=o.DepthOrder||(o.DepthOrder={}))[t.FRONT_TO_BACK=1]="FRONT_TO_BACK",t[t.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(L||(L={}));const ft=[T(-1,-1,-1),T(1,-1,-1),T(-1,1,-1),T(1,1,-1),T(-1,-1,1),T(1,-1,1),T(-1,1,1),T(1,1,1)],at=[T(-1,-1,-1),T(-1,-1,1),T(-1,1,-1),T(-1,1,1),T(1,-1,-1),T(1,-1,1),T(1,1,-1),T(1,1,1)],Tt=Math.sqrt(3),Z=[null];function kt(o){return Z[0]=o,Z}const W=P(),A=E(),m=E(),R=E(),I=new v,Ut=P(),F=P(),X=P(),J=P(),w=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],S=new v,dt=[0,0,0,0,0,0,0,0],ue=L;export{ne as H,jt as I,Gt as L,ie as P,M as U,ue as V,C as a,se as b,te as c,ee as g,D as i,de as k,s as l,he as m,ae as p,re as s,oe as u,H as v,Pt as y};
