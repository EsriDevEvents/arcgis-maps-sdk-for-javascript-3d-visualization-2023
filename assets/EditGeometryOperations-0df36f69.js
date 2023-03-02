import{n as ae}from"./Evented-686173eb.js";import{r as _,j as X,t as l,e as me,F as xe}from"./typedArrayUtil-bf9f210a.js";import{m as ye,v as ve}from"./Polyline-82cb63bc.js";import{A as Ve,m as ce,a as Ee,k as Te,o as w,s as we,q as De,d as q,j as de,p as Ae,l as Pe,v as Me,L as $e,w as ee}from"./vec2-848c6cf0.js";import{n as x,r as S,e as Re}from"./vec2f64-70cfd09e.js";import{o as P,n as c,r as L,A as Ze,x as le,c as Ce,a as R,G as j,H as te,P as U,j as ie,_ as N,z,u as $,g as ze}from"./vec3-8818fe1c.js";import{j as Ie,a as Se,E as Le}from"./vec4-c7a19f0d.js";import{n as Xe,r as Y,e as be}from"./vec4f64-6d0e93be.js";import{w as M,i as Ge}from"./Extent-22afa84a.js";import{l as Ue}from"./ViewingMode-5d7d590b.js";import{m as Ne}from"./mathUtils-ae09f98b.js";import{p as se,_ as Ye,V as I,A as O,B as Oe,Y as k,q as ke}from"./plane-01584357.js";import{a as Be,f as re}from"./sphere-a48b65b1.js";var d;(function(n){n[n.Z=0]="Z",n[n.M=1]="M"})(d||(d={}));class He{constructor(e){this.spatialReference=e}createVector(){return this._tag(x())}pointToVector(e){return this._tag(S(e.x,e.y))}arrayToVector(e){return this._tag(S(e[0],e[1]))}vectorToArray(e){return[e[0],e[1]]}pointToArray(e){return[e.x,e.y]}vectorToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=void 0,t.m=void 0,t.hasZ=!1,t.hasM=!1,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Ve(s,e,t,i)}addDelta(e,t,i){e[0]+=t,e[1]+=i}distance(e,t){return ce(e,t)}getZ(e,t){return t}hasZ(){return!1}getM(e,t){return t}hasM(){return!1}clone(e){return this._tag(Re(e))}copy(e,t){return Ee(t,e)}fromXYZ(e){return this._tag(S(e[0],e[1]))}toXYZ(e,t=c()){return P(t,e[0],e[1],0)}pointToXYZ(e,t=c()){return P(t,e.x,e.y,0)}equals(e,t){return Te(e,t)}_tag(e){return e}}let ne=class{constructor(e,t){this._valueType=e,this.spatialReference=t}createVector(){return this._tag(c())}pointToVector(e){return this._tag(L(e.x,e.y,this._valueType===d.Z?e.z:e.m))}arrayToVector(e){return this._tag(L(e[0],e[1],e[2]||0))}vectorToArray(e){return[e[0],e[1],e[2]]}pointToArray(e){return this._valueType===d.Z?[e.x,e.y,e.z]:[e.x,e.y,e.m]}vectorToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=this._valueType===d.Z?e[2]:void 0,t.m=this._valueType===d.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=this._valueType===d.Z?e[2]:void 0,t.m=this._valueType===d.M?e[2]:void 0,t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){const i=this._valueType===d.Z,s=this._valueType===d.M;return t.x=e[0],t.y=e[1],t.z=i?e[2]:void 0,t.m=s?e[2]:void 0,t.hasZ=i,t.hasM=s,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Ze(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,this._valueType===d.Z&&(e[2]+=s)}distance(e,t){return this._valueType===d.Z?le(e,t):ce(e,t)}getZ(e,t){return this._valueType===d.Z?e[2]:t}hasZ(){return this._valueType===d.Z}getM(e,t){return this._valueType===d.M?e[2]:t}hasM(){return this._valueType===d.M}clone(e){return this._tag(Ce(e))}copy(e,t){return R(t,e)}fromXYZ(e,t=0,i=0){return this._tag(L(e[0],e[1],this._valueType===d.Z?e.length>2?e[2]:t:i))}toXYZ(e,t=c()){return P(t,e[0],e[1],this._valueType===d.Z?e[2]:0)}pointToXYZ(e,t=c()){return P(t,e.x,e.y,this._valueType===d.Z?e.z??0:0)}equals(e,t){return j(e,t)}_tag(e){return e}};class qe{constructor(e){this.spatialReference=e}createVector(){return this._tag(Xe())}pointToVector(e){return this._tag(Y(e.x,e.y,e.z,e.m))}arrayToVector(e){return this._tag(Y(e[0],e[1],e[2]||0,e[3]||0))}vectorToArray(e){return[e[0],e[1],e[2],e[3]]}pointToArray(e){return[e.x,e.y,e.z,e.m]}vectorToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}arrayToPoint(e,t=new M){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.spatialReference=this.spatialReference,t}vectorToDehydratedPoint(e,t={x:void 0,y:void 0,z:void 0,m:void 0,hasZ:void 0,hasM:void 0,spatialReference:void 0,type:"point"}){return t.x=e[0],t.y=e[1],t.z=e[2],t.m=e[3],t.hasZ=!0,t.hasM=!0,t.spatialReference=this.spatialReference,t}lerp(e,t,i,s){return Ie(s,e,t,i)}addDelta(e,t,i,s){e[0]+=t,e[1]+=i,e[2]+=s}distance(e,t){return le(e,t)}getZ(e){return e[2]}hasZ(){return!0}getM(e){return e[3]}hasM(){return!0}clone(e){return this._tag(be(e))}copy(e,t){return Se(t,e)}fromXYZ(e,t=0,i=0){return this._tag(Y(e[0],e[1],e.length>2?e[2]:t,i))}toXYZ(e,t=c()){return P(t,e[0],e[1],e[2])}pointToXYZ(e,t=c()){return P(t,e.x,e.y,e.z??0)}equals(e,t){return Le(e,t)}_tag(e){return e}}function je(n,e,t){return n&&e?new qe(t):e?new ne(d.M,t):n?new ne(d.Z,t):new He(t)}function Fe(n,e){if(!e.supported)return;let t=1/0,i=-1/0;const s=e.upperBoundX-e.lowerBoundX;n.forEach(o=>{let h=o.pos[0];for(;h<e.lowerBoundX;)h+=s;for(;h>e.upperBoundX;)h-=s;t=Math.min(t,h),i=Math.max(i,h),o.pos[0]=h});const r=i-t;s-r<r&&n.forEach(o=>{o.pos[0]<0&&(o.pos[0]+=s)})}function We(n,e){const t=Ge(n);return e===Ue.Global&&t?{supported:!0,lowerBoundX:t.valid[0],upperBoundX:t.valid[1]}:{supported:!1,lowerBoundX:null,upperBoundX:null}}let Z=class{constructor(e){this.component=e,this.leftEdge=null,this.rightEdge=null,this.type="vertex",this.index=null}get pos(){return this._pos}set pos(e){this._pos=e,this.component.unnormalizeVertexPositions()}},T=class{constructor(e,t,i){this.component=e,this.leftVertex=t,this.rightVertex=i,this.type="edge",t.rightEdge=this,i.leftEdge=this}};class B{constructor(e,t){this._spatialReference=e,this._viewingMode=t,this.vertices=[],this.edges=[],this.index=null}unnormalizeVertexPositions(){this.vertices.length<=1||Fe(this.vertices,We(this._spatialReference,this._viewingMode))}updateVertexIndex(e,t){if(this.vertices.length===0)return;const i=this.vertices[0];let s=null,r=e,o=t;do s=r,s.index=o++,r=s.rightEdge?s.rightEdge.rightVertex:null;while(r!=null&&r!==i);s.leftEdge&&s!==this.vertices[this.vertices.length-1]&&this.swapVertices(this.vertices.indexOf(s),this.vertices.length-1)}getFirstVertex(){return this.vertices.length===0?null:this.vertices[0]}getLastVertex(){return this.vertices.length===0?null:this.vertices[this.vertices.length-1]}isClosed(){return this.vertices.length>2&&this.vertices[0].leftEdge!==null}swapVertices(e,t){const i=this.vertices[e];this.vertices[e]=this.vertices[t],this.vertices[t]=i}iterateVertices(e){if(this.vertices.length===0)return;const t=this.vertices[0];let i=t;do e(i,i.index),i=_(i.rightEdge)?i.rightEdge.rightVertex:null;while(i!==t&&i!=null)}}class J extends ae{constructor(e,t){super(),this.type=e,this.coordinateHelper=t,this._geometry=null,this._dirty=!0,this.components=[]}get geometry(){if(this._dirty){switch(this.type){case"point":this._geometry=this._toPoint();break;case"polyline":this._geometry=this._toPolyline();break;case"polygon":this._geometry=this._toPolygon()}this._dirty=!1}return this._geometry}get spatialReference(){return this.coordinateHelper.spatialReference}notifyChanges(e){this._dirty=!0,this.emit("change",e)}_toPoint(){return this.components.length===0||this.components[0].vertices.length===0?null:this.coordinateHelper.vectorToPoint(this.components[0].vertices[0].pos)}_toPolyline(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[];let r=i.vertices.find(h=>h.leftEdge==null);const o=r;do s.push(t(r.pos)),r=r.rightEdge?r.rightEdge.rightVertex:null;while(r&&r!==o);e.push(s)}return new ye({paths:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}_toPolygon(){const e=[],t=this.coordinateHelper.vectorToArray;for(const i of this.components){if(i.vertices.length<1)continue;const s=[],r=i.vertices[0];let o=r;const h=o;do s.push(t(o.pos)),o=_(o.rightEdge)?o.rightEdge.rightVertex:null;while(o&&o!==h);i.isClosed()&&s.push(t(r.pos)),e.push(s)}return new ve({rings:e,spatialReference:this.spatialReference,hasZ:this.coordinateHelper.hasZ(),hasM:this.coordinateHelper.hasM()})}static fromGeometry(e,t){const i=e.spatialReference,s=je(e.hasZ,e.hasM,i),r=new J(e.type,s);switch(e.type){case"polygon":{const o=e.rings;for(let h=0;h<o.length;++h){const p=o[h],a=new B(i,t);a.index=h;const f=p.length>2&&X(p[0],p[p.length-1]),y=f?p.length-1:p.length;for(let u=0;u<y;++u){const m=s.arrayToVector(p[u]),V=new Z(a);a.vertices.push(V),V.pos=m,V.index=u}const g=a.vertices.length-1;for(let u=0;u<g;++u){const m=a.vertices[u],V=a.vertices[u+1],fe=new T(a,m,V);a.edges.push(fe)}if(f){const u=new T(a,a.vertices[a.vertices.length-1],a.vertices[0]);a.edges.push(u)}r.components.push(a)}break}case"polyline":{const o=e.paths;for(let h=0;h<o.length;++h){const p=o[h],a=new B(i,t);a.index=h;const f=p.length;for(let g=0;g<f;++g){const u=s.arrayToVector(p[g]),m=new Z(a);a.vertices.push(m),m.pos=u,m.index=g}const y=a.vertices.length-1;for(let g=0;g<y;++g){const u=a.vertices[g],m=a.vertices[g+1],V=new T(a,u,m);a.edges.push(V)}r.components.push(a)}break}case"point":{const o=new B(i,t);o.index=0;const h=new Z(o);h.index=0,h.pos=s.pointToVector(e),o.vertices.push(h),r.components.push(o);break}}return r}}var E;(function(n){n[n.NEW_STEP=0]="NEW_STEP",n[n.ACCUMULATE_STEPS=1]="ACCUMULATE_STEPS"})(E||(E={}));class Je{constructor(e,t,i){this._editGeometry=e,this._component=t,this._pos=i,this._addedVertex=null,this._originalEdge=null,this._left=null,this._right=null}apply(){let e="redo";l(this._addedVertex)&&(e="apply",this._addedVertex=new Z(this._component));const t=this._component.getLastVertex();if(l(t))this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,this._addedVertex.index=0;else{let i=null;t.rightEdge&&(this._originalEdge=t.rightEdge,i=this._originalEdge.rightVertex,this._component.edges.splice(this._component.edges.indexOf(this._originalEdge),1)),this._component.vertices.push(this._addedVertex),this._addedVertex.pos=this._pos,l(this._left)&&(this._left=new T(this._component,t,this._addedVertex)),this._component.edges.push(this._left),t.rightEdge=this._left,_(this._originalEdge)&&_(i)&&(l(this._right)&&(this._right=new T(this._component,this._addedVertex,i)),this._component.edges.push(this._right),i.leftEdge=this._right),this._component.updateVertexIndex(this._addedVertex,t.index+1)}this._editGeometry.notifyChanges({operation:e,addedVertices:[this._addedVertex]})}undo(){l(this._addedVertex)||(this._component.vertices.splice(this._component.vertices.indexOf(this._addedVertex),1),_(this._left)&&(this._component.edges.splice(this._component.edges.indexOf(this._left),1),this._left.leftVertex.rightEdge=null),_(this._right)&&(this._component.edges.splice(this._component.edges.indexOf(this._right),1),this._right.rightVertex.leftEdge=null),_(this._originalEdge)&&(this._component.edges.push(this._originalEdge),this._originalEdge.leftVertex.rightEdge=this._originalEdge,this._originalEdge.rightVertex.leftEdge=this._originalEdge),_(this._left)?this._component.updateVertexIndex(this._left.leftVertex,this._left.leftVertex.index):this._component.updateVertexIndex(this._addedVertex,0),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this._addedVertex]}))}accumulate(){return!1}}let Ke=class pe{constructor(e,t,i){this._editGeometry=e,this._vertices=t,this.operation=i,this._undone=!1}apply(){this._vertices.forEach(e=>this.operation.apply(e)),this._editGeometry.components.forEach(e=>e.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:this._undone?"redo":"apply",updatedVertices:this._vertices})}undo(){this._vertices.forEach(e=>this.operation.undo(e)),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:this._vertices}),this._undone=!0}canAccumulate(e){if(this._undone||e._vertices.length!==this._vertices.length)return!1;for(let t=0;t<e._vertices.length;++t)if(e._vertices[t]!==this._vertices[t])return!1;return this.operation.canAccumulate(e.operation)}accumulate(e){return!!(e instanceof pe&&this.canAccumulate(e))&&(this._vertices.forEach(t=>this.operation.accumulate(t,e.operation)),this.operation.accumulateParams(e.operation),this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:"apply",updatedVertices:this._vertices}),!0)}};var v;(function(n){n[n.CUMULATIVE=0]="CUMULATIVE",n[n.REPLACE=1]="REPLACE"})(v||(v={}));let Qe=class{constructor(e,t,i=0){this._editGeometry=e,this._vertices=t,this._minNumberOfVertices=i,this.removedVertices=null}apply(){let e="redo";if(this.removedVertices==null){const t=this.removedVertices=[];this._vertices.forEach(i=>{const s=this._removeVertex(i);_(s)&&t.push(s)}),e="apply"}else this.removedVertices.forEach(t=>{this._removeVertex(t.removedVertex)});this._editGeometry.notifyChanges({operation:e,removedVertices:this._vertices})}undo(){var e;(e=this.removedVertices)==null||e.forEach(t=>{this._undoRemoveVertex(t)}),this._editGeometry.notifyChanges({operation:"undo",addedVertices:this._vertices})}accumulate(){return!1}_removeVertex(e){const t=e.component;if(t.vertices.length<=this._minNumberOfVertices)return null;const i={removedVertex:e,createdEdge:null},s=e.leftEdge,r=e.rightEdge;return t.vertices.splice(t.vertices.indexOf(e),1),s&&(t.edges.splice(t.edges.indexOf(s),1),s.leftVertex.rightEdge=null),r&&(t.edges.splice(t.edges.indexOf(r),1),r.rightVertex.leftEdge=null),e.index===0&&r&&this._vertices.length>0&&t.swapVertices(t.vertices.indexOf(r.rightVertex),0),s&&r&&(i.createdEdge=new T(t,s.leftVertex,r.rightVertex),t.edges.push(i.createdEdge)),r&&t.updateVertexIndex(r.rightVertex,r.rightVertex.index-1),i}_undoRemoveVertex(e){const t=e.removedVertex,i=e.removedVertex.component,s=t.leftEdge,r=t.rightEdge;e.createdEdge&&i.edges.splice(i.edges.indexOf(e.createdEdge),1),i.vertices.push(t),s&&(i.edges.push(s),s.leftVertex.rightEdge=s),r&&(i.edges.push(r),r.rightVertex.leftEdge=r),i.updateVertexIndex(t,t.index)}};class et{constructor(e,t,i){this._editGeometry=e,this._edge=t,this._t=i,this.createdVertex=null,this._left=null,this._right=null}apply(){let e="redo";const t=this._edge,i=t.component,s=t.leftVertex,r=t.rightVertex;i.edges.splice(i.edges.indexOf(t),1),l(this.createdVertex)&&(e="apply",this.createdVertex=new Z(t.component)),i.vertices.push(this.createdVertex),this.createdVertex.pos=this._editGeometry.coordinateHelper.lerp(t.leftVertex.pos,t.rightVertex.pos,this._t,this._editGeometry.coordinateHelper.createVector()),l(this._left)&&(this._left=new T(i,s,this.createdVertex)),this._left.leftVertex.leftEdge?i.edges.push(this._left):i.edges.unshift(this._left),s.rightEdge=this._left,l(this._right)&&(this._right=new T(i,this.createdVertex,r)),i.edges.push(this._right),r.leftEdge=this._right,i.updateVertexIndex(this.createdVertex,s.index+1),this._editGeometry.notifyChanges({operation:e,addedVertices:[this.createdVertex]})}undo(){if(l(this.createdVertex)||l(this._left)||l(this._right))return null;const e=this._edge,t=e.component,i=this.createdVertex.leftEdge,s=this.createdVertex.rightEdge,r=i==null?void 0:i.leftVertex,o=s==null?void 0:s.rightVertex;t.vertices.splice(t.vertices.indexOf(this.createdVertex),1),t.edges.splice(t.edges.indexOf(this._left),1),t.edges.splice(t.edges.indexOf(this._right),1),this._edge.leftVertex.leftEdge?t.edges.push(this._edge):t.edges.unshift(this._edge),r&&(r.rightEdge=e),o&&(o.leftEdge=e),r&&t.updateVertexIndex(r,r.index),this._editGeometry.notifyChanges({operation:"undo",removedVertices:[this.createdVertex]})}accumulate(){return!1}}let tt=class ue{constructor(e,t,i){this._editGeometry=e,this._vertex=t,this._pos=i}apply(){const e=l(this._originalPosition);e&&(this._originalPosition=this._vertex.pos),this._apply(e?"apply":"redo")}undo(){this._vertex.pos=me(this._originalPosition),this._editGeometry.notifyChanges({operation:"undo",updatedVertices:[this._vertex]})}accumulate(e){return e instanceof ue&&e._vertex===this._vertex&&(this._pos=e._pos,this._apply("apply"),!0)}_apply(e){this._vertex.pos=this._pos,this._editGeometry.components.forEach(t=>t.unnormalizeVertexPositions()),this._editGeometry.notifyChanges({operation:e,updatedVertices:[this._vertex]})}};class it{constructor(e,t){this._editGeometry=e,this._component=t,this._createdEdge=null}apply(){let e="redo";if(l(this._createdEdge)){e="apply";const t=this._component.getFirstVertex(),i=this._component.getLastVertex();if(this._component.isClosed()||this._component.vertices.length<3||l(t)||l(i))return;this._createdEdge=new T(this._component,i,t)}this._createdEdge.leftVertex.rightEdge=this._createdEdge,this._createdEdge.rightVertex.leftEdge=this._createdEdge,this._component.edges.push(this._createdEdge),this._editGeometry.notifyChanges({operation:e})}undo(){l(this._createdEdge)||(xe(this._component.edges,this._createdEdge),this._createdEdge.leftVertex.rightEdge=null,this._createdEdge.rightVertex.leftEdge=null,this._editGeometry.notifyChanges({operation:"undo"}))}accumulate(){return!1}}let st=class _e{constructor(e,t,i,s){this._helper=e,this.dx=t,this.dy=i,this.dz=s}_move(e,t,i,s){this._helper.addDelta(e.pos,t,i,s)}apply(e){this._move(e,this.dx,this.dy,this.dz)}undo(e){this._move(e,-this.dx,-this.dy,-this.dz)}canAccumulate(e){return e instanceof _e}accumulate(e,t){this._move(e,t.dx,t.dy,t.dz)}accumulateParams(e){this.dx+=e.dx,this.dy+=e.dy,this.dz+=e.dz}};function H(n,e){return n[0]*e[1]-n[1]*e[0]}function rt(n,e,t){const i=de(t,e)/Ae(t);return Pe(n,t,i)}function At(n,e,t,i,s=t){return w(A,i,t),w(F,e,s),rt(b,F,A),we(n,s,b)}function Pt(n,e,t,i){w(A,e,t);const s=i/De(A);return q(n,t,A,s)}function nt(n,e){const t=n.start,i=n.end,s=e.start,r=e.end,o=w(A,i,t),h=w(ht,r,s),p=H(o,h);if(Math.abs(p)<=ot)return[];const a=w(F,t,s),f=H(h,a)/p,y=H(o,a)/p;if(f>=0){if(y>=0||e.type===D.LINE)return[q(b,t,o,f)]}else if(n.type===D.LINE&&(y>=0||e.type===D.LINE))return[q(b,t,o,f)];return[]}var D;(function(n){n[n.RAY=0]="RAY",n[n.LINE=1]="LINE"})(D||(D={}));const ot=1e-6,A=x(),ht=x(),F=x(),b=x();class G{get plane(){return this._plane}get requiresSplitEdgeLeft(){return!this._left.isOriginalDirection}get requiresSplitEdgeRight(){return!this._right.isOriginalDirection}get edgeDirection(){return this._edgeDirection}constructor(e,t,i,s=0,r=C.IMMEDIATE){this._helper=e,this._planeType=t,this._edge=i,this.distance=s,this._plane=se(),this._offsetPlane=se(),this._minDistance=-1/0,this._maxDistance=1/0,this._selectedArrow=1,r===C.IMMEDIATE&&this._initialize()}_initialize(){this._initializeNeighbors(),this._initializePlane(),this._initializeDistanceConstraints()}_initializeNeighbors(){var r,o,h,p;const e=this._toXYZ(this._edge.leftVertex.pos),t=this._toXYZ((o=(r=this._edge.leftVertex.leftEdge)==null?void 0:r.leftVertex)==null?void 0:o.pos),i=this._toXYZ(this._edge.rightVertex.pos),s=this._toXYZ((p=(h=this._edge.rightVertex.rightEdge)==null?void 0:h.rightVertex)==null?void 0:p.pos);this._edgeDirection=te(c(),e,i),this._left=this._computeNeighbor(e,t,this._edgeDirection),this._right=this._computeNeighbor(i,s,this._edgeDirection)}_toXYZ(e){return _(e)?this._helper.toXYZ(e):null}_pointToXYZ(e){return this._toXYZ(this._helper.pointToVector(e))}_computeNeighbor(e,t,i){if(l(t))return{start:e,end:t,direction:L(-i[1],i[0],0),isOriginalDirection:!0};const s=te(c(),e,t),r=!this._passesBisectingAngleThreshold(s,i);return{start:e,end:t,direction:r?this._bisectVectorsPerpendicular(i,s):s,isOriginalDirection:!r}}_passesBisectingAngleThreshold(e,t){const i=Math.abs(Be(t,e));return i>=oe&&i<=Math.PI-oe}_bisectVectorsPerpendicular(e,t){const i=U(e,t)<0?e:ie(c(),e),s=Math.abs(U(i,t));if(!(s<he||s>1-he))return this._bisectDirection(i,t);const r=N(c(),i,[0,0,1]);return z(r,r)}_bisectDirection(e,t){const i=$(c(),e,t);return z(i,i)}_initializePlane(){const e=this._computeNormalDirection(this._left),t=this._computeNormalDirection(this._right);U(e,t)<0&&ie(t,t),Ye(this._left.start,this._bisectDirection(e,t),this._plane)}_computeNormalDirection(e){const t=N(c(),e.direction,this._edgeDirection);z(t,t);const i=N(c(),this._edgeDirection,t);return this._planeType===W.XY&&(i[2]=0),z(i,i)}_initializeDistanceConstraints(){_(this._left.end)&&!this.requiresSplitEdgeLeft&&this._updateDistanceConstraint(I(this._plane,this._left.end)),_(this._right.end)&&!this.requiresSplitEdgeRight&&this._updateDistanceConstraint(I(this._plane,this._right.end)),this._updateIntersectDistanceConstraint(this._plane)}_updateDistanceConstraint(e){e<=0&&(this._minDistance=Math.max(this._minDistance,e)),e>=0&&(this._maxDistance=Math.min(this._maxDistance,e))}_updateIntersectDistanceConstraint(e){const t=k(e),i=this._edgeDirection,s=$(c(),this._left.start,this._left.direction),r=$(c(),this._right.start,this._right.direction),o=this._pointInBasis2D(x(),t,i,this._left.start),h=this._pointInBasis2D(x(),t,i,s),p=this._pointInBasis2D(x(),t,i,this._right.start),a=this._pointInBasis2D(x(),t,i,r),[f]=nt({start:h,end:o,type:D.LINE},{start:a,end:p,type:D.LINE});if(!f)return;const y=w(x(),o,h);Me(y,y);const g=w(x(),f,h),u=de(y,g),m=$(c(),s,ze(c(),this._left.direction,-u)),V=I(e,m);this._updateDistanceConstraint(V)}_pointInBasis2D(e,t,i,s){return e[0]=re(t,s),e[1]=re(i,s),e}_offset(e,t){Number.isFinite(this._minDistance)&&(t=Math.max(this._minDistance,t)),Number.isFinite(this._maxDistance)&&(t=Math.min(this._maxDistance,t)),O(this._offsetPlane,this._plane),this._offsetPlane[3]-=t;const i=(r,o,h)=>_(o)&&ke(this._offsetPlane,r,$(c(),r,o),h),s=c();(e===this._edge.leftVertex?i(this._left.start,this._left.direction,s):i(this._right.start,this._right.direction,s))&&this._helper.copy(this._helper.fromXYZ(s,void 0,this._helper.getM(e.pos)),e.pos)}selectArrowFromStartPoint(e){this._selectedArrow=Oe(this.plane,this._pointToXYZ(e))?1:-1}get selectedArrow(){return this._selectedArrow}signedDistanceToPoint(e){return I(this.plane,this._pointToXYZ(e))}apply(e){this._offset(e,this.distance)}undo(e){this._offset(e,0)}canAccumulate(e){return e instanceof G&&this._edge.leftVertex.index===e._edge.leftVertex.index&&this._edge.rightVertex.index===e._edge.rightVertex.index&&this._edge.component===e._edge.component&&this._maybeEqualsVec3(this._left.direction,e._left.direction)&&this._maybeEqualsVec3(this._right.direction,e._right.direction)&&j(k(this._plane),k(e._plane))}accumulate(e,t){const i=this._plane[3]-t._plane[3]+t.distance;this._offset(e,i)}accumulateParams(e){const t=e.distance-e._plane[3];this.distance=t+this._plane[3]}clone(){const e=new G(this._helper,this._planeType,this._edge,this.distance,C.DEFERRED);return O(e._plane,this._plane),O(e._offsetPlane,this._offsetPlane),e._maxDistance=this._maxDistance,e._minDistance=this._minDistance,e._left=this._cloneNeighbor(this._left),e._right=this._cloneNeighbor(this._right),e._edgeDirection=R(c(),this._edgeDirection),e}_maybeEqualsVec3(e,t){return l(e)&&l(t)||_(e)&&_(t)&&j(e,t)}_cloneNeighbor({start:e,end:t,direction:i,isOriginalDirection:s}){return{start:R(c(),e),end:_(t)?R(c(),t):null,direction:R(c(),i),isOriginalDirection:s}}}const oe=Ne(15),he=.001;var W,C;(function(n){n[n.XYZ=0]="XYZ",n[n.XY=1]="XY"})(W||(W={})),function(n){n[n.IMMEDIATE=0]="IMMEDIATE",n[n.DEFERRED=1]="DEFERRED"}(C||(C={}));class K{constructor(e,t,i=v.CUMULATIVE){this.origin=e,this.angle=t,this._accumulationType=i}_rotate(e,t){$e(e.pos,e.pos,this.origin,t)}apply(e){this._rotate(e,this.angle)}undo(e){this._rotate(e,-this.angle)}canAccumulate(e){return e instanceof K&&X(this.origin,e.origin)}accumulate(e,t){const i=t._accumulationType===v.REPLACE;this._rotate(e,i?t.angle-this.angle:t.angle)}accumulateParams(e){const t=e._accumulationType===v.REPLACE;this.angle=t?e.angle:this.angle+e.angle}}class Q{constructor(e,t,i,s,r=v.CUMULATIVE){this.origin=e,this.axis1=t,this.factor1=i,this.factor2=s,this._accumulationType=r,this.axis2=S(t[1],-t[0])}_scale(e,t,i){ee(e.pos,e.pos,this.origin,this.axis1,t),ee(e.pos,e.pos,this.origin,this.axis2,i)}apply(e){this._scale(e,this.factor1,this.factor2)}undo(e){this._scale(e,1/this.factor1,1/this.factor2)}canAccumulate(e){return e instanceof Q&&X(this.origin,e.origin)&&X(this.axis1,e.axis1)}accumulate(e,t){t._accumulationType===v.REPLACE?this._scale(e,t.factor1/this.factor1,t.factor2/this.factor2):this._scale(e,t.factor1,t.factor2)}accumulateParams(e){const t=e._accumulationType===v.REPLACE;this.factor1=t?e.factor1:this.factor1*e.factor1,this.factor2=t?e.factor2:this.factor2*e.factor2}}class at{constructor(){this._operations=[],this._closed=!1}close(){this._closed=!0}apply(){for(const e of this._operations)e.apply()}undo(){for(let e=this._operations.length-1;e>=0;e--)this._operations[e].undo()}accumulate(e){if(this._closed)return!1;const t=this._operations.length?this._operations[this._operations.length-1]:null;return t&&t.accumulate(e)||(this._operations.push(e),e.apply()),!0}}class ge extends ae{constructor(e){super(),this.data=e,this._undoStack=[],this._redoStack=[],this._listener=this.data.on("change",t=>{t.addedVertices&&this.emit("vertex-add",{type:"vertex-add",vertices:t.addedVertices,operation:t.operation}),t.removedVertices&&this.emit("vertex-remove",{type:"vertex-remove",vertices:t.removedVertices,operation:t.operation}),t.updatedVertices&&this.emit("vertex-update",{type:"vertex-update",vertices:t.updatedVertices,operation:t.operation})})}destroy(){this._listener.remove()}splitEdge(e,t){return this._apply(new et(this.data,e,t))}updateVertices(e,t,i=E.ACCUMULATE_STEPS){return this._apply(new Ke(this.data,e,t),i)}moveVertices(e,t,i,s,r=E.ACCUMULATE_STEPS){return this.updateVertices(e,new st(this.data.coordinateHelper,t,i,s),r)}scaleVertices(e,t,i,s,r,o=E.ACCUMULATE_STEPS,h=v.CUMULATIVE){return this.updateVertices(e,new Q(t,i,s,r,h),o)}rotateVertices(e,t,i,s=E.ACCUMULATE_STEPS,r=v.CUMULATIVE){return this.updateVertices(e,new K(t,i,r),s)}removeVertices(e){return this._apply(new Qe(this.data,e,this._minNumVerticesPerType))}appendVertex(e){return this.data.components.length===0?null:this._apply(new Je(this.data,this.data.components[0],e))}setVertexPosition(e,t){return this._apply(new tt(this.data,e,t))}offsetEdge(e,t,i,s=E.ACCUMULATE_STEPS){return this.updateVertices([t.leftVertex,t.rightVertex],new G(this.data.coordinateHelper,e,t,i),s)}closeComponent(e){return this.data.components.includes(e)?this._apply(new it(this.data,e)):null}canRemoveVertex(){return this.data.components[0].vertices.length>this._minNumVerticesPerType}createUndoGroup(){const e=new at;return this._apply(e),{remove:()=>e.close()}}undo(){if(this._undoStack.length>0){const e=this._undoStack.pop();return e.undo(),this._redoStack.push(e),e}return null}redo(){if(this._redoStack.length>0){const e=this._redoStack.pop();return e.apply(),this._undoStack.push(e),e}return null}get canUndo(){return this._undoStack.length>0}get canRedo(){return this._redoStack.length>0}get lastOperation(){return this._undoStack.length>0?this._undoStack[this._undoStack.length-1]:null}get _minNumVerticesPerType(){switch(this.data.type){case"point":return 1;case"polyline":return 2;case"polygon":return 3;default:return 0}}_apply(e,t=E.ACCUMULATE_STEPS){return t!==E.NEW_STEP&&!l(this.lastOperation)&&this.lastOperation.accumulate(e)||(e.apply(),this._undoStack.push(e),this._redoStack=[]),e}static fromGeometry(e,t){return new ge(J.fromGeometry(e,t))}}export{At as L,ge as V,D as b,J as g,Pt as m,B as p,je as w};
