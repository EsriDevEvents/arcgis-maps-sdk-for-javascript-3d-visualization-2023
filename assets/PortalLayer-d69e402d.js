import{_ as $}from"./preload-helper-41c905a7.js";import{e as l,y as m,a as U}from"./jsonMap-ffa742d3.js";import{s as E,b,a as H}from"./Error-5cdd6e0a.js";import{N as F,r as g,K as I,U as L,W as T}from"./request-09e7d9b2.js";import{b as O}from"./asyncUtils-24bd37b2.js";import{a as D,r as v,t as M}from"./typedArrayUtil-bf9f210a.js";import{f as S,j as k,w as n}from"./promiseUtils-5940888c.js";import"./ArrayPool-b51874dd.js";import{o as x,r as j}from"./Extent-22afa84a.js";import{b as B}from"./layerUtils-eef15b39.js";import{b as P}from"./Portal-8dfa7a94.js";import y from"./PortalItem-4d7e1038.js";import C from"./PortalUser-9579f611.js";import{l as w}from"./portalItemUtils-0655aa33.js";const tt=_=>{let a=class extends _{constructor(){super(...arguments),this.resourceReferences={portalItem:null,paths:[]},this.userHasEditingPrivileges=!0,this.userHasFullEditingPrivileges=!1,this.userHasUpdateItemPrivileges=!1}destroy(){this.portalItem=D(this.portalItem)}set portalItem(r){r!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",r))}readPortalItem(r,e,t){if(e.itemId)return new y({id:e.itemId,portal:t&&t.portal})}writePortalItem(r,e){r&&r.id&&(e.itemId=r.id)}async loadFromPortal(r,e){if(this.portalItem&&this.portalItem.id)try{const t=await $(()=>import("./layersLoader-df6c68a4.js"),["./layersLoader-df6c68a4.js","./Error-5cdd6e0a.js","./string-53224faa.js","./typedArrayUtil-bf9f210a.js","./Layer-524734fa.js","./preload-helper-41c905a7.js","./jsonMap-ffa742d3.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./geometry-7d866d3f.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./typeUtils-1714017f.js","./request-09e7d9b2.js","./Evented-686173eb.js","./Identifiable-e4f9b04c.js","./Loadable-40ecd3b9.js","./Promise-755e47e5.js","./arcgisLayerUrl-1b8d6c52.js","./persistableUrlUtils-3635dccc.js","./fetchService-bf3bf196.js","./Portal-8dfa7a94.js","./locale-fe7cc1d0.js","./PortalGroup-00fb77a4.js","./PortalUser-9579f611.js","./PortalItem-4d7e1038.js","./assets-94d592bf.js","./jsonContext-b61ab593.js","./portalItemUtils-0655aa33.js","./projection-4ac247db.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./SimpleObservable-bd2c3ae8.js","./mat4-f0dc8788.js","./aaBoundingRect-2fb32e32.js","./zscale-baa108ea.js","./styleUtils-5c617777.js","./asyncUtils-24bd37b2.js"],import.meta.url);return S(e),await t.load({instance:this,supportedTypes:r.supportedTypes,validateItem:r.validateItem,supportsData:r.supportsData,layerModuleTypeMap:r.layerModuleTypeMap},e)}catch(t){throw k(t)||E.getLogger(this.declaredClass).warn(`Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})
  ${t}`),t}}async finishLoadEditablePortalLayer(r){this._set("userHasEditingPrivileges",await this._fetchUserHasEditingPrivileges(r).catch(e=>(n(e),!0)))}async _setUserPrivileges(r,e){if(!b.userPrivilegesApplied)return this.finishLoadEditablePortalLayer(e);if(this.url)try{const{features:{edit:t,fullEdit:i},content:{updateItem:s}}=await this._fetchUserPrivileges(r,e);this._set("userHasEditingPrivileges",t),this._set("userHasFullEditingPrivileges",i),this._set("userHasUpdateItemPrivileges",s)}catch(t){n(t)}}async _fetchUserPrivileges(r,e){var d;let t=this.portalItem;if(!r||!t||!t.loaded||t.sourceUrl)return this._fetchFallbackUserPrivileges(e);const i=r===t.id;if(i&&t.portal.user)return w(t);let s,c;if(i)s=t.portal.url;else try{s=await B(this.url,e)}catch(o){n(o)}if(!s||!F(s,t.portal.url))return this._fetchFallbackUserPrivileges(e);try{const o=v(e)?e.signal:null;c=await((d=g)==null?void 0:d.getCredential(`${s}/sharing`,{prompt:!1,signal:o}))}catch(o){n(o)}const h=!0,p=!1,u=!1;if(!c)return{features:{edit:h,fullEdit:p},content:{updateItem:u}};try{if(i?await t.reload():(t=new y({id:r,portal:{url:s}}),await t.load(e)),t.portal.user)return w(t)}catch(o){n(o)}return{features:{edit:h,fullEdit:p},content:{updateItem:u}}}async _fetchFallbackUserPrivileges(r){let e=!0;try{e=await this._fetchUserHasEditingPrivileges(r)}catch(t){n(t)}return{features:{edit:e,fullEdit:!1},content:{updateItem:!1}}}async _fetchUserHasEditingPrivileges(r){var i;const e=this.url?(i=g)==null?void 0:i.findCredential(this.url):null;if(!e)return!0;const t=f.credential===e?f.user:await this._fetchEditingUser(r);return f.credential=e,f.user=t,M(t)||t.privileges==null||t.privileges.includes("features:user:edit")}async _fetchEditingUser(r){var u,d;const e=(d=(u=this.portalItem)==null?void 0:u.portal)==null?void 0:d.user;if(e)return e;const t=g.findServerInfo(this.url??"");if(!(t!=null&&t.owningSystemUrl))return null;const i=`${t.owningSystemUrl}/sharing/rest`,s=P.getDefault();if(s&&s.loaded&&I(s.restUrl)===I(i))return s.user;const c=`${i}/community/self`,h=v(r)?r.signal:null,p=await O(L(c,{authMode:"no-prompt",query:{f:"json"},signal:h}));return p.ok?C.fromJSON(p.value.data):null}read(r,e){e&&(e.layer=this),super.read(r,e)}write(r,e){const t=e&&e.portal,i=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||P.getDefault());return t&&i&&!T(i.restUrl,t.restUrl)?(e.messages&&e.messages.push(new H("layer:cross-portal",`The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save, set layer.portalItem to null or save to the same portal as the item associated with the layer`,{layer:this})),null):super.write(r,{...e,layer:this})}};return l([m({type:y})],a.prototype,"portalItem",null),l([x("web-document","portalItem",["itemId"])],a.prototype,"readPortalItem",null),l([j("web-document","portalItem",{itemId:{type:String}})],a.prototype,"writePortalItem",null),l([m({clonable:!1})],a.prototype,"resourceReferences",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasEditingPrivileges",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasFullEditingPrivileges",void 0),l([m({type:Boolean,readOnly:!0})],a.prototype,"userHasUpdateItemPrivileges",void 0),a=l([U("esri.layers.mixins.PortalLayer")],a),a},f={credential:null,user:null};export{tt as _};