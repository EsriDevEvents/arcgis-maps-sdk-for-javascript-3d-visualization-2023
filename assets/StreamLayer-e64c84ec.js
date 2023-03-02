import{_ as F}from"./preload-helper-41c905a7.js";import{e as t,y as r,a as I,l as P,w as _,B as k}from"./jsonMap-ffa742d3.js";import"./geometry-7d866d3f.js";import{k as D}from"./PopupTemplate-81dc9b83.js";import{T as O}from"./UniqueValueRenderer-80c8e628.js";import{o as E,p as C,b as U,n as N}from"./jsonUtils-9b4d797d.js";import{U as A}from"./request-09e7d9b2.js";import{M as L}from"./symbols-5f42cb0e.js";import{a as l,s as J}from"./Error-5cdd6e0a.js";import{r as M}from"./typedArrayUtil-bf9f210a.js";import{O as G}from"./MultiOriginJSONSupport-06f8f24a.js";import{w as V}from"./promiseUtils-5940888c.js";import{T as h}from"./ArrayPool-b51874dd.js";import{f as S,e as q,o as g}from"./Extent-22afa84a.js";import{o as u}from"./typeUtils-1714017f.js";import{b as z}from"./Layer-524734fa.js";import{p as W}from"./ArcGISService-24587a68.js";import{n as B}from"./BlendLayer-793ff14a.js";import{o as Q}from"./CustomParametersMixin-2798ec18.js";import{n as Y,p as Z}from"./FeatureReductionLayer-5ef01ce2.js";import{c as H,m as K,a as X,D as ee,I as te,p as ie,l as re,f as oe}from"./OperationalLayer-db187f46.js";import{_ as se}from"./PortalLayer-d69e402d.js";import{p as ne}from"./RefreshableLayer-12bc7ba2.js";import{t as pe}from"./ScaleRangeLayer-d1b04b80.js";import{a as ae}from"./TemporalLayer-f231f22a.js";import{y as le}from"./Field-945b2973.js";import{s as me}from"./fieldProperties-7a0757a8.js";import{F as v,a as de}from"./fieldUtils-d430f46c.js";import{C as ce,i as ye}from"./labelingInfo-e65ecbf4.js";import{t as ue}from"./styleUtils-5c617777.js";import{x as fe}from"./Query-b0193ce7.js";import{p as he}from"./popupUtils-b8625101.js";import{x as ge}from"./ElevationInfo-005ddd87.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./Polyline-82cb63bc.js";import"./Clonable-7fa7ad97.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./ColorStop-29c89bbb.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./arcadeOnDemand-dd48afd7.js";import"./reactiveUtils-53e5756b.js";import"./diffUtils-1bae97a1.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./Ellipsoid-89682c5e.js";import"./colorRamps-18bbdf60.js";import"./opacityUtils-d4a4b602.js";import"./screenUtils-410d12c0.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./Graphic-5dcfa25e.js";import"./jsonUtils-36bf3d33.js";import"./compilerUtils-7bf6df9e.js";import"./lengthUtils-3c9047c4.js";import"./CIMSymbol-8f55d4ab.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./jsonUtils-27937179.js";import"./layerUtils-eef15b39.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./TimeExtent-64e16588.js";import"./asyncUtils-24bd37b2.js";import"./PortalItem-4d7e1038.js";import"./assets-94d592bf.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./zscale-baa108ea.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./fieldType-24ac97df.js";import"./FieldsIndex-113320d3.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";var f;let a=f=class extends P{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new f({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};t([r({type:Number,json:{write:!0}})],a.prototype,"age",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"ageReceived",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"displayCount",void 0),t([r({type:Number,json:{write:!0}})],a.prototype,"maxObservations",void 0),a=f=t([I("esri.layers.support.PurgeOptions")],a);const x=a,b=me();function w(e,o){return new l("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${o}`,{layer:e})}let i=class extends Y(Z(B(ae(pe(ne(W(H(se(G(Q(z))))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new x,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=S.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new l("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const o=M(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(V).then(()=>this._fetchService(o))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){v(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,o,s){const p=(o=o.layerDefinition||o).drawingInfo&&o.drawingInfo.renderer||void 0;if(p){const n=E(p,o,s)||void 0;return n||J.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:o.drawingInfo.renderer,layer:this,context:s}),n}if(o.defaultSymbol)return o.types&&o.types.length?new O({defaultSymbol:y(o.defaultSymbol,o,s),field:o.typeIdField,uniqueValueInfos:o.types.map(n=>({id:n.id,symbol:y(n.symbol,n,s)}))}):new C({symbol:y(o.defaultSymbol,o,s)})}async connect(e){const[{createConnection:o}]=await Promise.all([F(()=>import("./createConnection-7407496c.js"),["./createConnection-7407496c.js","./preload-helper-41c905a7.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./geometry-7d866d3f.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./typeUtils-1714017f.js","./request-09e7d9b2.js","./zscale-baa108ea.js","./Evented-686173eb.js","./query-b4dff312.js","./jsonUtils-36bf3d33.js","./normalizeUtils-353ec0fc.js","./normalizeUtilsCommon-d8ea404e.js","./pbfQueryUtils-481b10bc.js","./pbf-845dcafd.js","./OptimizedFeature-3e582950.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-f6e44ca7.js","./Query-b0193ce7.js","./TimeExtent-64e16588.js","./enumeration-925aa0f6.js","./Field-945b2973.js","./fieldType-24ac97df.js","./Clonable-7fa7ad97.js"],import.meta.url),this.load()]),s=this.geometryType?u.toJSON(this.geometryType):null,{customParameters:p=null,definitionExpression:n=null,geometryDefinition:d=null,maxReconnectionAttempts:$=0,maxReconnectionInterval:T=20,spatialReference:R=this.spatialReference}=e||this.createConnectionParameters(),m=o(this.parsedUrl,this.spatialReference,R,s,{geometry:d,where:n},$,T,p??void 0),j=_([this.on("send-message-to-socket",c=>m.sendMessageToSocket(c)),this.on("send-message-to-client",c=>m.sendMessageToClient(c))]);return m.once("destroy",j.remove),m}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return he(this,e)}createQuery(){const e=new fe;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,o){if(!this.fields)return null;let s=null;return this.fields.some(p=>(p.name===e&&(s=p.domain),!!s)),s}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}sendMessageToSocket(e){this.emit("send-message-to-socket",e)}sendMessageToClient(e){this.emit("send-message-to-client",e)}write(e,o){const s=o==null?void 0:o.messages;return this.webSocketUrl?(s==null||s.push(w(this,"using a custom websocket connection cannot be written to web scenes and web maps")),null):this.parsedUrl?super.write(e,o):(s==null||s.push(w(this,"using a client-side only connection without a url cannot be written to web scenes and web maps")),null)}async _fetchService(e){var o,s,p;if(!this.webSocketUrl&&this.parsedUrl){if(!this.sourceJSON){const{data:n}=await A(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=n}}else{if(!((o=this.timeInfo)!=null&&o.trackIdField))throw new l("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField){const n=(s=this.fields.find(d=>d.type==="oid"))==null?void 0:s.name;if(!n)throw new l("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");this.objectIdField=n}if(!this.fields)throw new l("stream-layer:missing-metadata","The stream layer fields must be specified.");if(this.fields.some(n=>n.name===this.objectIdField)||this.fields.push(new le({name:this.objectIdField,alias:this.objectIdField,type:"oid"})),!this.geometryType)throw new l("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.webSocketUrl&&(this.url=this.webSocketUrl)}return this.read(this.sourceJSON,{origin:"service",portalItem:this.portalItem,portal:(p=this.portalItem)==null?void 0:p.portal,url:this.parsedUrl}),v(this.renderer,this.fieldsIndex),de(this.timeInfo,this.fieldsIndex),this.objectIdField||(this.objectIdField="__esri_stream_id__"),ue(this,{origin:"service"})}};t([r({type:String})],i.prototype,"copyright",void 0),t([r({readOnly:!0})],i.prototype,"defaultPopupTemplate",null),t([r({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],i.prototype,"definitionExpression",void 0),t([r({type:String})],i.prototype,"displayField",void 0),t([r({type:ge})],i.prototype,"elevationInfo",void 0),t([r(b.fields)],i.prototype,"fields",void 0),t([r(b.fieldsIndex)],i.prototype,"fieldsIndex",void 0),t([r({type:q})],i.prototype,"geometryDefinition",void 0),t([r({type:u.apiValues,json:{read:{reader:u.read}}})],i.prototype,"geometryType",void 0),t([r(K)],i.prototype,"labelsVisible",void 0),t([r({type:[ce],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:ye},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],i.prototype,"labelingInfo",void 0),t([r(X)],i.prototype,"legendEnabled",void 0),t([r({type:["show","hide"]})],i.prototype,"listMode",void 0),t([r({type:h})],i.prototype,"maxReconnectionAttempts",void 0),t([r({type:h})],i.prototype,"maxReconnectionInterval",void 0),t([r(ee)],i.prototype,"maxScale",void 0),t([r(te)],i.prototype,"minScale",void 0),t([r({type:String})],i.prototype,"objectIdField",void 0),t([r({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],i.prototype,"operationalLayerType",void 0),t([r(ie)],i.prototype,"popupEnabled",void 0),t([r({type:D,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],i.prototype,"popupTemplate",void 0),t([r({type:x})],i.prototype,"purgeOptions",void 0),t([r({types:U,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:N,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],i.prototype,"renderer",null),t([g("service","renderer",["drawingInfo.renderer","defaultSymbol"]),g("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],i.prototype,"readRenderer",null),t([r(re)],i.prototype,"screenSizePerspectiveEnabled",void 0),t([r()],i.prototype,"sourceJSON",void 0),t([r({type:S,json:{origins:{service:{read:{source:"spatialReference"}}}}})],i.prototype,"spatialReference",void 0),t([r({json:{read:!1}})],i.prototype,"type",void 0),t([r(oe)],i.prototype,"url",void 0),t([r({type:Number})],i.prototype,"updateInterval",void 0),t([r({type:String})],i.prototype,"webSocketUrl",void 0),i=t([I("esri.layers.StreamLayer")],i);const y=k({types:L}),di=i;export{di as default};
