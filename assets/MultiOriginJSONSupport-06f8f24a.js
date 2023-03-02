import{J as f,H as u,e as g,a as l,E as c,K as N,L as J,M as h,N as $,v as E,O as w}from"./jsonMap-ffa742d3.js";import{N as M}from"./typedArrayUtil-bf9f210a.js";import{p as v}from"./string-53224faa.js";class _{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(f),this._values=new Map,this.multipleOriginsSupported=!0}clone(e){const t=new _,s=this._originStores[u.DEFAULTS];s&&s.forEach((r,i)=>{t.set(i,v(r),u.DEFAULTS)});for(let r=u.SERVICE;r<f;r++){const i=this._originStores[r];i&&i.forEach((o,n)=>{e&&e.has(n)||t.set(n,v(o),r)})}return t}get(e,t){const s=t===void 0?this._values:this._originStores[t];return s?s.get(e):void 0}keys(e){const t=e==null?this._values:this._originStores[e];return t?[...t.keys()]:[]}set(e,t,s=u.USER){let r=this._originStores[s];if(r||(r=new Map,this._originStores[s]=r),r.set(e,t),!this._values.has(e)||M(this._propertyOriginMap.get(e))<=s){const i=this._values.get(e);return this._values.set(e,t),this._propertyOriginMap.set(e,s),i!==t}return!1}delete(e,t=u.USER){const s=this._originStores[t];if(!s)return;const r=s.get(e);if(s.delete(e),this._values.has(e)&&this._propertyOriginMap.get(e)===t){this._values.delete(e);for(let i=t-1;i>=0;i--){const o=this._originStores[i];if(o&&o.has(e)){this._values.set(e,o.get(e)),this._propertyOriginMap.set(e,i);break}}}return r}has(e,t){const s=t===void 0?this._values:this._originStores[t];return!!s&&s.has(e)}revert(e,t){for(;t>0&&!this.has(e,t);)--t;const s=this._originStores[t],r=s&&s.get(e),i=this._values.get(e);return this._values.set(e,r),this._propertyOriginMap.set(e,t),i!==r}originOf(e){return this._propertyOriginMap.get(e)||u.DEFAULTS}forEach(e){this._values.forEach(e)}}const m=a=>{let e=class extends a{constructor(...t){super(...t);const s=M(c(this)),r=s.store,i=new _;s.store=i,N(s,r,i)}read(t,s){J(this,t,s)}getAtOrigin(t,s){const r=O(this),i=h(s);if(typeof t=="string")return r.get(t,i);const o={};return t.forEach(n=>{o[n]=r.get(n,i)}),o}originOf(t){return $(this.originIdOf(t))}originIdOf(t){return O(this).originOf(t)}revert(t,s){const r=O(this),i=h(s),o=c(this);let n;n=typeof t=="string"?t==="*"?r.keys(i):[t]:t,n.forEach(p=>{o.invalidate(p),r.revert(p,i),o.commit(p)})}};return e=g([l("esri.core.ReadOnlyMultiOriginJSONSupport")],e),e};function O(a){return c(a).store}let d=class extends m(E){};d=g([l("esri.core.ReadOnlyMultiOriginJSONSupport")],d);const A=a=>{let e=class extends a{constructor(...t){super(...t)}clear(t,s="user"){return S(this).delete(t,h(s))}write(t={},s){return w(this,t=t||{},s),t}setAtOrigin(t,s,r){c(this).setAtOrigin(t,s,h(r))}removeOrigin(t){const s=S(this),r=h(t),i=s.keys(r);for(const o of i)s.originOf(o)===r&&s.set(o,s.get(o,r),u.USER)}updateOrigin(t,s){const r=S(this),i=h(s),o=this.get(t);for(let n=i+1;n<f;++n)r.delete(t,n);r.set(t,o,i)}toJSON(t){return this.write({},t)}};return e=g([l("esri.core.WriteableMultiOriginJSONSupport")],e),e.prototype.toJSON.isDefaultToJSON=!0,e};function S(a){return c(a).store}const x=a=>{let e=class extends A(m(a)){constructor(...s){super(...s)}};return e=g([l("esri.core.MultiOriginJSONSupport")],e),e};let y=class extends x(E){};y=g([l("esri.core.MultiOriginJSONSupport")],y);export{x as O,y as S};