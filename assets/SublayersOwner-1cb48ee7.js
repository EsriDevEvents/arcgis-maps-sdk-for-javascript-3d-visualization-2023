import{e as a,y as n,a as q,H as y,E as P,s as z,M as F,N as X}from"./jsonMap-ffa742d3.js";import{U as W,L as Y,g as Z}from"./request-09e7d9b2.js";import{f as ee}from"./promiseUtils-5940888c.js";import{r as re}from"./Version-621cc6b7.js";import{s as te,b as ie,T as M,v as U}from"./ArrayPool-b51874dd.js";import{r as B}from"./typedArrayUtil-bf9f210a.js";import{o as S,e as G,f as se,r as w}from"./Extent-22afa84a.js";import{v as ae,p as oe}from"./OperationalLayer-db187f46.js";import{j as R}from"./Collection-74ae958a.js";import{l as le}from"./CollectionFlattener-80d223f1.js";import{a as g,s as E}from"./Error-5cdd6e0a.js";import{l as ne,U as pe}from"./reactiveUtils-53e5756b.js";import{_ as ye}from"./preload-helper-41c905a7.js";import"./geometry-7d866d3f.js";import{k as ue}from"./PopupTemplate-81dc9b83.js";import"./UniqueValueRenderer-80c8e628.js";import{b as de,n as ce}from"./jsonUtils-9b4d797d.js";import{x as fe}from"./symbols-5f42cb0e.js";import{a as he}from"./HandleOwner-6217a02e.js";import{h as be,p as D}from"./string-53224faa.js";import{s as me}from"./Identifiable-e4f9b04c.js";import{m as ge}from"./Loadable-40ecd3b9.js";import{O as Se}from"./MultiOriginJSONSupport-06f8f24a.js";import{n as Ie,t as ve,p as we}from"./serviceCapabilitiesUtils-22f436bd.js";import{x as Ee}from"./QueryTask-81db9269.js";import{n as Le}from"./FeatureType-017f886c.js";import{y as xe}from"./Field-945b2973.js";import{r as Oe}from"./FieldsIndex-113320d3.js";import{b as Te,C as De}from"./labelingInfo-e65ecbf4.js";import{c as N,x as _e,K as J}from"./Query-b0193ce7.js";import{c as Pe}from"./AttachmentQuery-f1085685.js";import{p as Ae}from"./popupUtils-b8625101.js";import{o as $}from"./typeUtils-1714017f.js";import{t as Fe}from"./sublayerUtils-225416ed.js";const br=e=>{let t=class extends e{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesPromise=null,this._allLayersAndTablesMap=null}readCapabilities(r,i){const s=i.capabilities&&i.capabilities.split(",").map(H=>H.toLowerCase().trim());if(!s)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const o=this.type,p=o!=="tile"&&!!i.supportsDynamicLayers,u=s.includes("query"),c=s.includes("map"),m=!!i.exportTilesAllowed,h=s.includes("tilemap"),I=s.includes("data"),L=o!=="tile"&&(!i.tileInfo||p),x=o!=="tile"&&(!i.tileInfo||p),d=o!=="tile",f=i.cimVersion&&re.parse(i.cimVersion),O=(f==null?void 0:f.since(1,4))??!1,T=(f==null?void 0:f.since(2,0))??!1;return{operations:{supportsExportMap:c,supportsExportTiles:m,supportsIdentify:u,supportsQuery:I,supportsTileMap:h},exportMap:c?{supportsArcadeExpressionForLabeling:O,supportsSublayersChanges:d,supportsDynamicLayers:p,supportsSublayerVisibility:L,supportsSublayerDefinitionExpression:x,supportsCIMSymbols:T}:null,exportTiles:m?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(r,i){let s=i.currentVersion;return s||(s=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),s}async fetchSublayerInfo(r,i){var s;return await this.fetchAllLayersAndTables(i),(s=this._allLayersAndTablesMap)==null?void 0:s.get(r)}async fetchAllLayersAndTables(r){await this.load(r),this._allLayersAndTablesPromise||(this._allLayersAndTablesPromise=W(Y(this.url).path+"/layers",{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then(s=>{this._allLayersAndTablesMap=new Map;for(const o of s.data.layers)this._allLayersAndTablesMap.set(o.id,o);return{result:s.data}},s=>({error:s})));const i=await this._allLayersAndTablesPromise;if(ee(r),"result"in i)return i.result;throw i.error}};return a([n({readOnly:!0})],t.prototype,"capabilities",void 0),a([S("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],t.prototype,"readCapabilities",null),a([n({json:{read:{source:"copyrightText"}}})],t.prototype,"copyright",void 0),a([n({type:G})],t.prototype,"fullExtent",void 0),a([n(ae)],t.prototype,"id",void 0),a([n({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],t.prototype,"legendEnabled",void 0),a([n(oe)],t.prototype,"popupEnabled",void 0),a([n({type:se})],t.prototype,"spatialReference",void 0),a([n({readOnly:!0})],t.prototype,"version",void 0),a([S("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],t.prototype,"readVersion",null),t=a([q("esri.layers.mixins.ArcGISMapService")],t),t};var A;function V(e){return e!=null&&e.type==="esriSMS"}function j(e,t,r){var s;const i=this.originIdOf(t)>=F(r.origin);return{ignoreOrigin:!0,allowNull:i,enabled:!!r&&((s=r.layer)==null?void 0:s.type)==="map-image"&&(r.writeSublayerStructure||i)}}function Q(e,t,r){var i;return{enabled:!!r&&((i=r.layer)==null?void 0:i.type)==="tile"&&this._isOverridden(t)}}function b(e,t,r){return{ignoreOrigin:!0,enabled:r&&r.writeSublayerStructure||!1}}function _(e,t,r){return{ignoreOrigin:!0,enabled:!!r&&(r.writeSublayerStructure||this.originIdOf(t)>=F(r.origin))}}let Me=0;const v=new Set;v.add("layer"),v.add("parent"),v.add("loaded"),v.add("loadStatus"),v.add("loadError"),v.add("loadWarnings");let l=A=class extends he(Se(me(ge))){constructor(e){super(e),this.capabilities=void 0,this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:t,source:r,url:i}=this;if(!t&&!i)throw new g("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});let s=null;if(!t||this.originIdOf("url")>y.SERVICE||(r==null?void 0:r.type)==="data-layer")s=(await W(i,{responseType:"json",query:{f:"json"},...e})).data;else{let o=this.id;(r==null?void 0:r.type)==="map-layer"&&(o=r.mapLayerId),s=await t.fetchSublayerInfo(o,e)}s&&(this.sourceJSON=s,this.read({layerDefinition:s},{origin:"service"}))})()),this}readCapabilities(e,t){t=t.layerDefinition||t;const{operations:{supportsQuery:r,supportsQueryAttachments:i},query:{supportsFormatPBF:s},data:{supportsAttachment:o}}=Ie(t,this.url);return{exportMap:{supportsModification:!!t.canModifyLayer},operations:{supportsQuery:r,supportsQueryAttachments:i},data:{supportsAttachment:o},query:{supportsFormatPBF:s}}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get fieldsIndex(){return new Oe(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,t){if((t=t.layerDefinition||t).globalIdField)return t.globalIdField;if(t.fields){for(const r of t.fields)if(r.type==="esriFieldTypeGlobalID")return r.name}}get id(){return this._get("id")??Me++}set id(e){var t,r,i;this._get("id")!==e&&(((i=(r=(t=this.layer)==null?void 0:t.capabilities)==null?void 0:r.exportMap)==null?void 0:i.supportsDynamicLayers)!==!1?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,t,r,i){e&&e.length&&(t.layerDefinition={drawingInfo:{labelingInfo:e.map(s=>s.write({},i))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(t=>t.layer=e)}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,t){return t.minScale||t.layerDefinition&&t.layerDefinition.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,t){return t.maxScale||t.layerDefinition&&t.layerDefinition.maxScale||0}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}readObjectIdFieldFromService(e,t){if((t=t.layerDefinition||t).objectIdField)return t.objectIdField;if(t.fields){for(const r of t.fields)if(r.type==="esriFieldTypeOID")return r.name}}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,t){var i;const r=t.layerDefinition;return 1-.01*(((r==null?void 0:r.transparency)!=null?r.transparency:(i=r==null?void 0:r.drawingInfo)==null?void 0:i.transparency)??0)}writeOpacity(e,t,r,i){t.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,t){this.parent&&this.parent!==this.layer?t.parentLayerId=te(this.parent.id):t.parentLayerId=-1}get queryTask(){var p;if(!this.layer)return null;const{spatialReference:e}=this.layer,t="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:r,fieldsIndex:i}=this,s=be("featurelayer-pbf")&&(r==null?void 0:r.query.supportsFormatPBF),o=((p=r==null?void 0:r.operations)==null?void 0:p.supportsQueryAttachments)??!1;return new Ee({url:this.url,pbfSupported:s,fieldsIndex:i,gdbVersion:t,sourceSpatialReference:e,queryAttachmentsSupported:o})}set renderer(e){if(e){for(const t of e.getSymbols())if(fe(t)){E.getLogger(this.declaredClass).warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new N({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return ie(R.ofType(A),e)}writeSublayers(e,t,r){var i;(i=this.sublayers)!=null&&i.length&&(t[r]=this.sublayers.map(s=>s.id).toArray().reverse())}readTypeIdField(e,t){let r=(t=t.layerDefinition||t).typeIdField;if(r&&t.fields){r=r.toLowerCase();const i=t.fields.find(s=>s.name.toLowerCase()===r);i&&(r=i.name)}return r}get url(){var i;const e=((i=this.layer)==null?void 0:i.parsedUrl)??this._lastParsedUrl,t=this.source;if(!e)return null;if(this._lastParsedUrl=e,(t==null?void 0:t.type)==="map-layer")return`${e.path}/${t.mapLayerId}`;const r={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${Z(r)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,t,r,i){t[r]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=P(this),t=new A;return P(t).store=e.clone(v),this.commitProperty("url"),t._lastParsedUrl=this._lastParsedUrl,t}createPopupTemplate(e){return Ae(this,e)}createQuery(){return new _e({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){var i;if(this.hasOwnProperty("sublayers"))return null;const{layer:e}=this,t=e==null?void 0:e.parsedUrl,r=new(await ye(()=>import("./FeatureLayer-e767d294.js"),["./FeatureLayer-e767d294.js","./preload-helper-41c905a7.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./PopupTemplate-81dc9b83.js","./Clonable-7fa7ad97.js","./Collection-74ae958a.js","./Evented-686173eb.js","./SimpleObservable-bd2c3ae8.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./fieldUtils-d430f46c.js","./arcadeOnDemand-dd48afd7.js","./geometry-7d866d3f.js","./Polyline-82cb63bc.js","./typeUtils-1714017f.js","./enumeration-925aa0f6.js","./number-036ac4ef.js","./locale-fe7cc1d0.js","./Identifiable-e4f9b04c.js","./UniqueValueRenderer-80c8e628.js","./symbols-5f42cb0e.js","./CIMSymbol-8f55d4ab.js","./Color-7b46c33a.js","./colorUtils-639f4d25.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./screenUtils-410d12c0.js","./opacityUtils-d4a4b602.js","./symbolLayerUtils3D-5cf2dcce.js","./aaBoundingBox-fb003858.js","./aaBoundingRect-2fb32e32.js","./request-09e7d9b2.js","./persistableUrlUtils-3635dccc.js","./Symbol3DAnchorPosition2D-e9d8a8f4.js","./collectionUtils-423a192d.js","./Portal-8dfa7a94.js","./Loadable-40ecd3b9.js","./Promise-755e47e5.js","./PortalGroup-00fb77a4.js","./PortalUser-9579f611.js","./ColorStop-29c89bbb.js","./reactiveUtils-53e5756b.js","./diffUtils-1bae97a1.js","./colorRamps-18bbdf60.js","./sizeVariableUtils-d4870b0d.js","./visualVariableUtils-61985981.js","./Graphic-5dcfa25e.js","./jsonUtils-36bf3d33.js","./compilerUtils-7bf6df9e.js","./lengthUtils-3c9047c4.js","./jsonUtils-27937179.js","./layerUtils-eef15b39.js","./styleUtils-689841ac.js","./jsonUtils-9b4d797d.js","./DictionaryLoader-1c3435ac.js","./LRUCache-86d9ad15.js","./MemCache-b4d68123.js","./deprecate-ba25fc78.js","./heatmapUtils-8ee685fd.js","./vec4f64-6d0e93be.js","./MultiOriginJSONSupport-06f8f24a.js","./serviceCapabilitiesUtils-22f436bd.js","./arcgisLayerUrl-1b8d6c52.js","./FeatureLayerBase-633118ca.js","./Field-945b2973.js","./fieldType-24ac97df.js","./HeightModelInfo-73f516f9.js","./OperationalLayer-db187f46.js","./TimeExtent-64e16588.js","./ElevationInfo-005ddd87.js","./TimeReference-adaa7961.js","./datetime-eed49b9b.js","./AttachmentQuery-f1085685.js","./Query-b0193ce7.js","./RelationshipQuery-765b2184.js","./Layer-524734fa.js","./HandleOwner-6217a02e.js","./workers-c8fc8d43.js","./Connection-3d9fb42e.js","./assets-94d592bf.js","./intl-87d72dbe.js","./messages-1516d146.js","./editsZScale-9d0832b8.js","./queryZScale-f6e44ca7.js","./zscale-baa108ea.js","./FeatureSet-b4fbf079.js","./APIKeyMixin-ef4ccb38.js","./ArcGISService-24587a68.js","./BlendLayer-793ff14a.js","./mat4f32-60a2394b.js","./mat4-f0dc8788.js","./CustomParametersMixin-2798ec18.js","./EditBusLayer-b1010019.js","./FeatureReductionLayer-5ef01ce2.js","./labelingInfo-e65ecbf4.js","./labelUtils-b68da70f.js","./defaultsJSON-59981e75.js","./OrderedLayer-045186a6.js","./PortalLayer-d69e402d.js","./asyncUtils-24bd37b2.js","./PortalItem-4d7e1038.js","./portalItemUtils-0655aa33.js","./projection-4ac247db.js","./RefreshableLayer-12bc7ba2.js","./ScaleRangeLayer-d1b04b80.js","./TemporalLayer-f231f22a.js","./FeatureTemplate-5a472038.js","./FeatureType-017f886c.js","./fieldProperties-7a0757a8.js","./FieldsIndex-113320d3.js","./versionUtils-9a1e7983.js","./styleUtils-5c617777.js","./TopFeaturesQuery-d2b31d08.js","./popupUtils-b8625101.js"],import.meta.url)).default({url:t==null?void 0:t.path});return t&&this.source&&(this.source.type==="map-layer"?r.layerId=this.source.mapLayerId:r.dynamicDataSource=this.source),(e==null?void 0:e.refreshInterval)!=null&&(r.refreshInterval=e.refreshInterval),this.definitionExpression&&(r.definitionExpression=this.definitionExpression),this.floorInfo&&(r.floorInfo=D(this.floorInfo)),this.originIdOf("labelingInfo")>y.SERVICE&&(r.labelingInfo=D(this.labelingInfo)),this.originIdOf("labelsVisible")>y.DEFAULTS&&(r.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>y.DEFAULTS&&(r.legendEnabled=this.legendEnabled),this.originIdOf("visible")>y.DEFAULTS&&(r.visible=this.visible),this.originIdOf("minScale")>y.DEFAULTS&&(r.minScale=this.minScale),this.originIdOf("maxScale")>y.DEFAULTS&&(r.maxScale=this.maxScale),this.originIdOf("opacity")>y.DEFAULTS&&(r.opacity=this.opacity),this.originIdOf("popupTemplate")>y.DEFAULTS&&(r.popupTemplate=D(this.popupTemplate)),this.originIdOf("renderer")>y.SERVICE&&(r.renderer=D(this.renderer)),((i=this.source)==null?void 0:i.type)==="data-layer"&&(r.dynamicDataSource=this.source.clone()),this.originIdOf("title")>y.DEFAULTS&&(r.title=this.title),(e==null?void 0:e.type)==="map-image"&&e.originIdOf("customParameters")>y.DEFAULTS&&(r.customParameters=e.customParameters),(e==null?void 0:e.type)==="tile"&&e.originIdOf("customParameters")>y.DEFAULTS&&(r.customParameters=e.customParameters),r}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:t,types:r}=this;if(!t||!e)return null;const i=e.attributes?e.attributes[t]:void 0;if(i==null)return null;let s=null;return r==null||r.some(o=>{const{id:p}=o;return p!=null&&(p.toString()===i.toString()&&(s=o),!!s)}),s}getFieldDomain(e,t){const r=t&&t.feature,i=this.getFeatureType(r);if(i){const s=i.domains&&i.domains[e];if(s&&s.type!=="inherited")return s}return this._getLayerDomain(e)}async queryAttachments(e,t){var h,I;await this.load(),e=Pe.from(e);const r=this.capabilities;if(!((h=r==null?void 0:r.data)!=null&&h.supportsAttachment))throw new g("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:i,objectIds:s,globalIds:o,num:p,size:u,start:c,where:m}=e;if(!((I=r==null?void 0:r.operations)!=null&&I.supportsQueryAttachments)&&((i==null?void 0:i.length)>0||(o==null?void 0:o.length)>0||(u==null?void 0:u.length)>0||p||c||m))throw new g("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e);if(!(s!=null&&s.length||o!=null&&o.length||m))throw new g("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,t)}async queryFeatures(e=this.createQuery(),t){var i,s;if(await this.load(),!this.capabilities.operations.supportsQuery)throw new g("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new g("queryFeatures:not-supported","this layer has no url.");const r=await this.queryTask.execute(e,{...t,query:{...(i=this.layer)==null?void 0:i.customParameters,token:(s=this.layer)==null?void 0:s.apiKey}});if(r!=null&&r.features)for(const o of r.features)o.sourceLayer=this;return r}toExportImageJSON(e){var o;const t={id:this.id,source:((o=this.source)==null?void 0:o.toJSON())||{mapLayerId:this.id,type:"mapLayer"}},r=ve(e,this.definitionExpression);B(r)&&(t.definitionExpression=r);const i=["renderer","labelingInfo","opacity","labelsVisible"].reduce((p,u)=>(p[u]=this.originIdOf(u),p),{});if(Object.keys(i).some(p=>i[p]>y.SERVICE)){const p=t.drawingInfo={};if(i.renderer>y.SERVICE&&(p.renderer=this.renderer?this.renderer.toJSON():null),i.labelsVisible>y.SERVICE&&(p.showLabels=this.labelsVisible),this.labelsVisible&&i.labelingInfo>y.SERVICE){!this.loaded&&this.labelingInfo.some(c=>!c.labelPlacement)&&E.getLogger(this.declaredClass).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let u=this.labelingInfo;B(this.geometryType)&&(u=Te(this.labelingInfo,$.toJSON(this.geometryType))),p.labelingInfo=u.filter(c=>c.labelPlacement).map(c=>c.toJSON({origin:"service",layer:this.layer})),p.showLabels=!0}i.opacity>y.SERVICE&&(p.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(p.renderer)}return t}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,t=>{t.color||t.style!=="esriSMSX"&&t.style!=="esriSMSCross"||(t.outline&&t.outline.color?t.color=t.outline.color:t.color=[0,0,0,0])})}_forEachSimpleMarkerSymbols(e,t){if(e){const r=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const i of r)V(i.symbol)&&t(i.symbol);"symbol"in e&&V(e.symbol)&&t(e.symbol),"defaultSymbol"in e&&V(e.defaultSymbol)&&t(e.defaultSymbol)}}_setAndNotifyLayer(e,t){var u,c,m,h;const r=this.layer,i=this._get(e);let s,o;switch(e){case"definitionExpression":case"floorInfo":s="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":s="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":s="supportsDynamicLayers",o="supportsModification"}const p=P(this).getDefaultOrigin();if(p!=="service"){if(s&&((m=(c=(u=this.layer)==null?void 0:u.capabilities)==null?void 0:c.exportMap)==null?void 0:m[s])===!1)return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${s}'`);if(o&&((h=this.capabilities)==null?void 0:h.exportMap[o])===!1)return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${o}'`)}e!=="source"||this.loadStatus==="not-loaded"?(this._set(e,t),p!=="service"&&i!==t&&r&&r.emit&&r.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null,r.layer=null}),this.handles.removeAll()),e&&(e.forEach(r=>{r.parent=this,r.layer=this.layer}),this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,r.layer=this.layer}),e.on("after-remove",({item:r})=>{r.parent=null,r.layer=null}),e.on("before-changes",r=>{var s,o,p;const i=(p=(o=(s=this.layer)==null?void 0:s.capabilities)==null?void 0:o.exportMap)==null?void 0:p.supportsSublayersChanges;i==null||i||(E.getLogger(this.declaredClass).error(new g("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),r.preventDefault())})]))}_logLockedError(e,t){const{layer:r,declaredClass:i}=this;E.getLogger(i).error(new g("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${r==null?void 0:r.id}'`,{reason:t,sublayer:this,layer:r}))}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};l.test={isMapImageLayerOverridePolicy:e=>e===b||e===j,isTileImageLayerOverridePolicy:e=>e===Q},a([n({readOnly:!0})],l.prototype,"capabilities",void 0),a([S("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],l.prototype,"readCapabilities",null),a([n()],l.prototype,"defaultPopupTemplate",null),a([n({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:j}}})],l.prototype,"definitionExpression",null),a([n({type:[xe],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],l.prototype,"fields",void 0),a([n({readOnly:!0})],l.prototype,"fieldsIndex",null),a([n({type:we,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:j},origins:{"web-scene":{read:!1,write:!1}}}})],l.prototype,"floorInfo",null),a([n({type:G,json:{read:{source:"layerDefinition.extent"}}})],l.prototype,"fullExtent",void 0),a([n({type:$.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:$.read}}}}})],l.prototype,"geometryType",void 0),a([n({type:String})],l.prototype,"globalIdField",void 0),a([S("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],l.prototype,"readGlobalIdFieldFromService",null),a([n({type:M,json:{write:{ignoreOrigin:!0}}})],l.prototype,"id",null),a([n({value:null,type:[De],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:b}}})],l.prototype,"labelingInfo",null),a([w("labelingInfo")],l.prototype,"writeLabelingInfo",null),a([n({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:b}}})],l.prototype,"labelsVisible",null),a([n({value:null})],l.prototype,"layer",null),a([n({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:_}}})],l.prototype,"legendEnabled",void 0),a([n({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],l.prototype,"listMode",null),a([n({type:Number,value:0,json:{write:{overridePolicy:b}}})],l.prototype,"minScale",null),a([S("minScale",["minScale","layerDefinition.minScale"])],l.prototype,"readMinScale",null),a([n({type:Number,value:0,json:{write:{overridePolicy:b}}})],l.prototype,"maxScale",null),a([S("maxScale",["maxScale","layerDefinition.maxScale"])],l.prototype,"readMaxScale",null),a([n({readOnly:!0})],l.prototype,"effectiveScaleRange",null),a([n({type:String})],l.prototype,"objectIdField",void 0),a([S("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],l.prototype,"readObjectIdFieldFromService",null),a([n({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:b}}})],l.prototype,"opacity",null),a([S("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],l.prototype,"readOpacity",null),a([w("opacity")],l.prototype,"writeOpacity",null),a([n({json:{type:M,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:b}}})],l.prototype,"parent",void 0),a([w("parent")],l.prototype,"writeParent",null),a([n({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,t)=>!t.disablePopup},write:{target:"disablePopup",overridePolicy:_,writer(e,t,r){t[r]=!e}}}})],l.prototype,"popupEnabled",void 0),a([n({type:ue,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:_}}})],l.prototype,"popupTemplate",void 0),a([n({readOnly:!0})],l.prototype,"queryTask",null),a([n({types:de,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:b},origins:{"web-scene":{types:ce,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:b}}}}})],l.prototype,"renderer",null),a([n({types:{key:"type",base:null,typeMap:{"data-layer":J,"map-layer":N}},cast(e){if(e){if("mapLayerId"in e)return U(N,e);if("dataSource"in e)return U(J,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:b}}})],l.prototype,"source",null),a([n()],l.prototype,"sourceJSON",void 0),a([n({value:null,json:{type:[M],write:{target:"subLayerIds",allowNull:!0,overridePolicy:b}}})],l.prototype,"sublayers",null),a([z("sublayers")],l.prototype,"castSublayers",null),a([w("sublayers")],l.prototype,"writeSublayers",null),a([n({type:String,json:{name:"name",write:{overridePolicy:_}}})],l.prototype,"title",void 0),a([n({type:String})],l.prototype,"typeIdField",void 0),a([S("typeIdField",["layerDefinition.typeIdField"])],l.prototype,"readTypeIdField",null),a([n({type:[Le],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],l.prototype,"types",void 0),a([n({type:String,json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:Q}}})],l.prototype,"url",null),a([n({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:b}}})],l.prototype,"visible",null),a([w("visible")],l.prototype,"writeVisible",null),l=A=a([q("esri.layers.support.Sublayer")],l);const k=l,Ve=E.getLogger("esri.layers.TileLayer");function je(e,t){const r=[],i={};return e&&e.forEach(s=>{const o=new k;if(o.read(s,t),i[o.id]=o,s.parentLayerId!=null&&s.parentLayerId!==-1){const p=i[s.parentLayerId];p.sublayers||(p.sublayers=[]),p.sublayers.unshift(o)}else r.unshift(o)}),r}const C=R.ofType(k);function K(e,t){e&&e.forEach(r=>{t(r),r.sublayers&&r.sublayers.length&&K(r.sublayers,t)})}const mr=e=>{let t=class extends e{constructor(...r){super(...r),this.allSublayers=new le({getCollections:()=>[this.sublayers],getChildrenFunction:i=>i.sublayers}),this.sublayersSourceJSON={[y.SERVICE]:{},[y.PORTAL_ITEM]:{},[y.WEB_SCENE]:{},[y.WEB_MAP]:{}},this.addHandles(ne(()=>this.sublayers,(i,s)=>this._handleSublayersChange(i,s),pe))}readSublayers(r,i){if(!i||!r)return;const{sublayersSourceJSON:s}=this,o=F(i.origin);if(o<y.SERVICE||(s[o]={context:i,visibleLayers:r.visibleLayers||s[o].visibleLayers,layers:r.layers||s[o].layers},o>y.SERVICE))return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:p,origin:u}=this.createSublayersForOrigin("web-document"),c=P(this);c.setDefaultOrigin(u),this._set("sublayers",new C(p)),c.setDefaultOrigin("user")}findSublayerById(r){return this.allSublayers.find(i=>i.id===r)}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(r){const i=F(r==="web-document"?"web-map":r);let s=y.SERVICE,o=this.sublayersSourceJSON[y.SERVICE].layers,p=this.sublayersSourceJSON[y.SERVICE].context,u=null;const c=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d<=i);for(const d of c){const f=this.sublayersSourceJSON[d];Fe(f.layers)&&(s=d,o=f.layers,p=f.context,f.visibleLayers&&(u={visibleLayers:f.visibleLayers,context:f.context}))}const m=[y.PORTAL_ITEM,y.WEB_SCENE,y.WEB_MAP].filter(d=>d>s&&d<=i);let h=null;for(const d of m){const{layers:f,visibleLayers:O,context:T}=this.sublayersSourceJSON[d];f&&(h={layers:f,context:T}),O&&(u={visibleLayers:O,context:T})}const I=je(o,p),L=new Map,x=new Set;if(h)for(const d of h.layers)L.set(d.id,d);if(u!=null&&u.visibleLayers)for(const d of u.visibleLayers)x.add(d);return K(I,d=>{h&&d.read(L.get(d.id),h.context),u&&d.read({defaultVisibility:x.has(d.id)},u.context)}),{origin:X(s),sublayers:new C({items:I})}}read(r,i){super.read(r,i),this.readSublayers(r,i)}_handleSublayersChange(r,i){i&&(i.forEach(s=>{s.parent=null,s.layer=null}),this.handles.remove("sublayers-owner")),r&&(r.forEach(s=>{s.parent=this,s.layer=this}),this.handles.add([r.on("after-add",({item:s})=>{s.parent=this,s.layer=this}),r.on("after-remove",({item:s})=>{s.parent=null,s.layer=null})],"sublayers-owner"),this.type==="tile"&&this.handles.add(r.on("before-changes",s=>{Ve.error(new g("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),s.preventDefault()}),"sublayers-owner"))}};return a([n({readOnly:!0})],t.prototype,"allSublayers",void 0),a([n({readOnly:!0,type:R.ofType(k)})],t.prototype,"serviceSublayers",void 0),a([n({value:null,type:C,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],t.prototype,"sublayers",void 0),a([n({readOnly:!0})],t.prototype,"sublayersSourceJSON",void 0),t=a([q("esri.layers.mixins.SublayersOwner")],t),t};export{mr as E,k as Z,br as y};
