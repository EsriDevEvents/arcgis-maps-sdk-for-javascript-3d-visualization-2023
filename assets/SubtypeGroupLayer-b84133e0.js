import{_ as Y}from"./preload-helper-41c905a7.js";import{e as i,y as o,a as x,l as ee,B as te,H as k,t as re,M as D}from"./jsonMap-ffa742d3.js";import{j as L}from"./Collection-74ae958a.js";import{s as ie,a as h}from"./Error-5cdd6e0a.js";import{a as N}from"./HandleOwner-6217a02e.js";import{l as oe}from"./loadAll-8ca49458.js";import{r as _,l as U,a as se}from"./typedArrayUtil-bf9f210a.js";import{O as M}from"./MultiOriginJSONSupport-06f8f24a.js";import{w as ne,y as ae}from"./promiseUtils-5940888c.js";import{l as le,U as pe}from"./reactiveUtils-53e5756b.js";import{t as P}from"./serviceCapabilitiesUtils-22f436bd.js";import{L as ue,V as de}from"./request-09e7d9b2.js";import"./ArrayPool-b51874dd.js";import{o as I,r as Q}from"./Extent-22afa84a.js";import{b as ye}from"./Layer-524734fa.js";import{i as me}from"./APIKeyMixin-ef4ccb38.js";import{p as ce}from"./ArcGISService-24587a68.js";import{n as he}from"./BlendLayer-793ff14a.js";import{o as fe}from"./CustomParametersMixin-2798ec18.js";import{a as be}from"./EditBusLayer-b1010019.js";import{I as H,a as ge,T as ve,R as we,C as $e,p as Fe,y as Ie,d as Oe,f as Se,m as je,h as Te,w as Ee,b as _e,g as Ce,q as Le,j as xe,F as Pe}from"./FeatureLayerBase-633118ca.js";import{m as Ae,a as De,I as Ge,D as qe,p as Re,c as Ve,v as ke}from"./OperationalLayer-db187f46.js";import{_ as Ne}from"./PortalLayer-d69e402d.js";import{p as Ue}from"./RefreshableLayer-12bc7ba2.js";import{t as Me}from"./ScaleRangeLayer-d1b04b80.js";import{a as Qe,v as He}from"./TemporalLayer-f231f22a.js";import{y as Be}from"./arcgisLayerUrl-1b8d6c52.js";import{s as B}from"./fieldProperties-7a0757a8.js";import{F as Je,a as ze}from"./fieldUtils-d430f46c.js";import{i as Ze}from"./Field-945b2973.js";import{k as Ke}from"./PopupTemplate-81dc9b83.js";import{p as We,T as Xe,_ as Ye}from"./UniqueValueRenderer-80c8e628.js";import{p as A}from"./jsonUtils-9b4d797d.js";import{p as F,o as et}from"./string-53224faa.js";import{s as tt}from"./Identifiable-e4f9b04c.js";import{m as rt}from"./Loadable-40ecd3b9.js";import{p as J}from"./FeatureTemplate-5a472038.js";import{C as it,i as ot,a as st,u as nt,c as at}from"./labelingInfo-e65ecbf4.js";import{x as z}from"./Query-b0193ce7.js";import{p as lt}from"./popupUtils-b8625101.js";import{e as pt}from"./versionUtils-9a1e7983.js";import"./nextTick-3ee5a785.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./asyncUtils-24bd37b2.js";import"./Ellipsoid-89682c5e.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./deprecate-ba25fc78.js";import"./HeightModelInfo-73f516f9.js";import"./Clonable-7fa7ad97.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./layerUtils-eef15b39.js";import"./AttachmentQuery-f1085685.js";import"./RelationshipQuery-765b2184.js";import"./TimeExtent-64e16588.js";import"./enumeration-925aa0f6.js";import"./jsonUtils-36bf3d33.js";import"./fieldType-24ac97df.js";import"./persistableUrlUtils-3635dccc.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./opacityUtils-d4a4b602.js";import"./Portal-8dfa7a94.js";import"./locale-fe7cc1d0.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./PortalItem-4d7e1038.js";import"./assets-94d592bf.js";import"./Promise-755e47e5.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./mathUtils-ae09f98b.js";import"./vec4-c7a19f0d.js";import"./aaBoundingRect-2fb32e32.js";import"./zscale-baa108ea.js";import"./FieldsIndex-113320d3.js";import"./arcadeOnDemand-dd48afd7.js";import"./number-036ac4ef.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./ColorStop-29c89bbb.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./Graphic-5dcfa25e.js";import"./compilerUtils-7bf6df9e.js";import"./jsonUtils-27937179.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./MemCache-b4d68123.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";let b=class extends ee{constructor(){super(...arguments),this.code=null,this.defaultValues={},this.domains=null,this.name=null}readDomains(e){if(!e)return null;const t={};for(const r of Object.keys(e))t[r]=Ze(e[r]);return t}writeDomains(e,t){var s;if(!e)return;const r={};for(const n of Object.keys(e))e[n]&&(r[n]=(s=e[n])==null?void 0:s.toJSON());t.domains=r}};i([o({type:Number,json:{write:!0}})],b.prototype,"code",void 0),i([o({type:Object,json:{write:!0}})],b.prototype,"defaultValues",void 0),i([o({json:{write:!0}})],b.prototype,"domains",void 0),i([I("domains")],b.prototype,"readDomains",null),i([Q("domains")],b.prototype,"writeDomains",null),i([o({type:String,json:{write:!0}})],b.prototype,"name",void 0),b=i([x("esri.layers.support.Subtype")],b);const ut=b,dt=["charts","editingEnabled","formTemplate","labelsVisible","labelingInfo","legendEnabled","minScale","maxScale","opacity","popupEnabled","popupTemplate","renderer","subtypeCode","templates","title","visible"],Z={key:"type",base:We,errorContext:"renderer",typeMap:{simple:A,"unique-value":Xe,"class-breaks":Ye}},G=B(),q=te({types:Z});let yt=0;function S(e){const t=e.json.write;return typeof t=="object"?t.ignoreOrigin=!0:e.json.write={ignoreOrigin:!0},e}function mt(e){return new A({symbol:ct(e)})}function ct(e){switch(e){case"point":case"multipoint":return at.clone();case"polyline":return nt.clone();case"polygon":case"multipatch":return st.clone();default:return null}}function ht(e,t){return!!t&&(e==null?void 0:e.type)==="unique-value"&&typeof e.field=="string"&&e.field.toLowerCase()===t.toLowerCase()&&!e.field2&&!e.field3&&!e.valueExpression}function K(e,t){var r;return e==null?null:(r=t.subtypes)==null?void 0:r.find(s=>s.code===e)}function ft(e,t){let r=null;switch(t.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":r="point";break;case"esriGeometryPolyline":r="line";break;case"esriGeometryPolygon":case"esriGeometryMultiPatch":r="polygon";break;default:t.type,r=null}const s={},n=K(e,t);if(_(n)){const{defaultValues:a}=n;for(const p in a)s[p]=a[p]}return s[t.subtypeField]=e,new J({name:"New Feature",drawingTool:r,prototype:{attributes:s}})}const W="esri.layers.support.SubtypeSublayer";let l=class extends N(M(tt(rt))){constructor(e){super(e),this.charts=null,this.editingEnabled=!0,this.fieldOverrides=null,this.fieldsIndex=null,this.formTemplate=null,this.id=`${Date.now().toString(16)}-subtype-sublayer-${yt++}`,this.type="subtype-sublayer",this.labelsVisible=!0,this.labelingInfo=null,this.layerType="ArcGISFeatureLayer",this.legendEnabled=!0,this.listMode="show",this.minScale=0,this.maxScale=0,this.opacity=1,this.popupEnabled=!0,this.popupTemplate=null,this.subtypeCode=null,this.templates=null,this.title=null,this.visible=!0}get capabilities(){var e;return(e=this.parent)==null?void 0:e.capabilities}get effectiveCapabilities(){var e;return(e=this.parent)==null?void 0:e.effectiveCapabilities}get effectiveEditingEnabled(){const{parent:e}=this;return e?e.effectiveEditingEnabled&&this.editingEnabled:this.editingEnabled}get elevationInfo(){var e;return(e=this.parent)==null?void 0:e.elevationInfo}writeFieldOverrides(e,t,r){const{fields:s,parent:n}=this;let a;if(s){a=[];let p=0;s.forEach(({name:y,alias:m,editable:g,visible:v})=>{var j;if(!v)return;const d=(j=n==null?void 0:n.fields)==null?void 0:j.find(O=>O.name===y);if(!d)return;const f={name:y};let $=!1;m!==d.alias&&(f.alias=m,$=!0),g!==d.editable&&(f.editable=g,$=!0),a.push(f),$&&p++}),p===0&&a.length===s.length&&(a=null)}else a=F(e);a!=null&&a.length&&et(r,a,t)}get fields(){const{parent:e,fieldOverrides:t,subtypeCode:r}=this,s=e==null?void 0:e.fields;if(!e||!(s!=null&&s.length))return null;const{subtypes:n,subtypeField:a}=e,p=n==null?void 0:n.find(v=>v.code===r),y=p==null?void 0:p.defaultValues,m=p==null?void 0:p.domains,g=[];for(const v of s){const d=v.clone(),{name:f}=d,$=t==null?void 0:t.find(T=>T.name===f);if(d.visible=!t||!!$,$){const{alias:T,editable:X}=$;T&&(d.alias=T),X===!1&&(d.editable=!1)}const j=(y==null?void 0:y[f])??null;d.defaultValue=f===a?r:j;const O=(m==null?void 0:m[f])??null;d.domain=f===a?null:O?O.type==="inherited"?d.domain:O.clone():null,g.push(d)}return g}get geometryType(){var e;return(e=this.parent)==null?void 0:e.geometryType}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get objectIdField(){var e;return this.parent||ie.getLogger(W).error(w("objectIdField")),(e=this.parent)==null?void 0:e.objectIdField}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){Je(e,this.fieldsIndex),this._override("renderer",e)}get renderer(){if(this._isOverridden("renderer"))return this._get("renderer");const{parent:e}=this;return e&&!e.isTable&&e.geometryType!=="mesh"?mt(e.geometryType):null}readRendererFromService(e,t,r){var y,m,g;if(t.type==="Table")return null;const s=(y=t.drawingInfo)==null?void 0:y.renderer,n=q(s,t,r);let a;const{subtypeCode:p}=this;if(p!=null&&ht(n,t.subtypeField)){const v=(m=n.uniqueValueInfos)==null?void 0:m.find(({value:d})=>(d=typeof d=="number"?String(d):d)===String(p));v&&(a=new A({symbol:v.symbol}))}else(n==null?void 0:n.type)!=="simple"||(g=n.visualVariables)!=null&&g.length||(a=n);return a}readRenderer(e,t,r){var a,p,y;const s=(p=(a=t==null?void 0:t.layerDefinition)==null?void 0:a.drawingInfo)==null?void 0:p.renderer;return s?((y=s.visualVariables)==null?void 0:y.some(m=>m.type!=="rotationInfo"))?void 0:q(s,t,r)||void 0:void 0}get spatialReference(){var e;return(e=this.parent)==null?void 0:e.spatialReference}readTemplatesFromService(e,t){return[ft(this.subtypeCode,t)]}readTitleFromService(e,t){const r=K(this.subtypeCode,t);return _(r)?r.name:null}get userHasUpdateItemPrivileges(){var e;return!!((e=this.parent)!=null&&e.userHasUpdateItemPrivileges)}async addAttachment(e,t){const{parent:r}=this;if(!r)throw w("addAttachment");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:addAttachment","The feature provided does not belong to this SubtypeSublayer");return r.addAttachment(e,t)}async updateAttachment(e,t,r){const{parent:s}=this;if(!s)throw w("updateAttachment");if(e.getAttribute(s.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:updateAttachment","The feature provided does not belong to this SubtypeSublayer");return s.updateAttachment(e,t,r)}async deleteAttachments(e,t){const{parent:r}=this;if(!r)throw w("deleteAttachments");if(e.getAttribute(r.subtypeField)!==this.subtypeCode)throw new h("subtype-sublayer:deleteAttachments","The feature provided does not belong to this SubtypeSublayer");return r.deleteAttachments(e,t)}async applyEdits(e,t){if(!this.parent)throw w("applyEdits");return this.parent.applyEdits(e,t)}createPopupTemplate(e){let t=this;const{parent:r,fields:s,title:n}=this;if(r){const{displayField:a,editFieldsInfo:p,objectIdField:y}=r;t={displayField:a,editFieldsInfo:p,fields:s,objectIdField:y,title:n}}return lt(t,e)}createQuery(){if(!this.parent)throw w("createQuery");const e=H(this.parent),t=`${this.parent.subtypeField}=${this.subtypeCode}`;return e.where=P(t,this.parent.definitionExpression),e}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e){return this._getLayerDomain(e)}hasUserOverrides(){return dt.some(e=>this.originIdOf(e)===k.USER)}async queryAttachments(e,t){const r=await this.load();if(!r.parent)throw w("queryAttachments");const s=e.clone();return s.where=R(s.where,r.parent.subtypeField,r.subtypeCode),r.parent.queryAttachments(e,t)}async queryFeatures(e,t){const r=await this.load();if(!r.parent)throw w("queryFeatures");const s=z.from(e)??r.createQuery();return _(e)&&(s.where=R(s.where,r.parent.subtypeField,r.subtypeCode)),r.parent.queryFeatures(s,t)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}};i([o({readOnly:!0,json:{read:!1}})],l.prototype,"capabilities",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"effectiveCapabilities",null),i([o({json:{write:{ignoreOrigin:!0}}})],l.prototype,"charts",void 0),i([o({type:Boolean,nonNullable:!0,json:{name:"enableEditing",write:{ignoreOrigin:!0}}})],l.prototype,"editingEnabled",void 0),i([o({type:Boolean,readOnly:!0})],l.prototype,"effectiveEditingEnabled",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"elevationInfo",null),i([o({readOnly:!0,json:{name:"layerDefinition.fieldOverrides",origins:{service:{read:!1}},write:{ignoreOrigin:!0,allowNull:!0}}})],l.prototype,"fieldOverrides",void 0),i([Q("fieldOverrides")],l.prototype,"writeFieldOverrides",null),i([o({...G.fields,readOnly:!0,json:{read:!1}})],l.prototype,"fields",null),i([o(G.fieldsIndex)],l.prototype,"fieldsIndex",void 0),i([o({type:ge,json:{name:"formInfo",write:{ignoreOrigin:!0}}})],l.prototype,"formTemplate",void 0),i([o({type:String,readOnly:!0,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"id",void 0),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"geometryType",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"type",void 0),i([o(S(F(Ae)))],l.prototype,"labelsVisible",void 0),i([o({type:[it],json:{name:"layerDefinition.drawingInfo.labelingInfo",origins:{service:{read:!1}},read:{reader:ot},write:{ignoreOrigin:!0}}})],l.prototype,"labelingInfo",void 0),i([o({type:["ArcGISFeatureLayer"],readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],l.prototype,"layerType",void 0),i([o(S(F(De)))],l.prototype,"legendEnabled",void 0),i([o({type:["show","hide"]})],l.prototype,"listMode",void 0),i([o((()=>{const e=F(Ge);return e.json.origins.service.read=!1,S(e)})())],l.prototype,"minScale",void 0),i([o((()=>{const e=F(qe);return e.json.origins.service.read=!1,S(e)})())],l.prototype,"maxScale",void 0),i([o({readOnly:!0})],l.prototype,"effectiveScaleRange",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"objectIdField",null),i([o({type:Number,range:{min:0,max:1},nonNullable:!0,json:{write:{ignoreOrigin:!0}}})],l.prototype,"opacity",void 0),i([o()],l.prototype,"parent",void 0),i([o(S(F(Re)))],l.prototype,"popupEnabled",void 0),i([o({type:Ke,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],l.prototype,"popupTemplate",void 0),i([o({readOnly:!0})],l.prototype,"defaultPopupTemplate",null),i([o({types:Z,json:{write:{target:"layerDefinition.drawingInfo.renderer",ignoreOrigin:!0}}})],l.prototype,"renderer",null),i([I("service","renderer",["drawingInfo.renderer","subtypeField","type"])],l.prototype,"readRendererFromService",null),i([I("renderer",["layerDefinition.drawingInfo.renderer"])],l.prototype,"readRenderer",null),i([o({readOnly:!0,json:{read:!1}})],l.prototype,"spatialReference",null),i([o({type:Number,json:{origins:{service:{read:!1}},write:{ignoreOrigin:!0}}})],l.prototype,"subtypeCode",void 0),i([o({type:[J],json:{name:"layerDefinition.templates",write:{ignoreOrigin:!0}}})],l.prototype,"templates",void 0),i([I("service","templates",["geometryType","subtypeField","subtypes","type"])],l.prototype,"readTemplatesFromService",null),i([o({type:String,json:{write:{ignoreOrigin:!0}}})],l.prototype,"title",void 0),i([I("service","title",["subtypes"])],l.prototype,"readTitleFromService",null),i([o({readOnly:!0})],l.prototype,"userHasUpdateItemPrivileges",null),i([o({type:Boolean,nonNullable:!0,json:{name:"visibility",write:{ignoreOrigin:!0}}})],l.prototype,"visible",void 0),l=i([x(W)],l);const R=(e,t,r)=>{const s=new RegExp(`${t}=[0-9]`),n=`${t}=${r}`,a=U(e,"");return s.test(a)?a.replace(s,n):P(n,a)},w=e=>new h(`This sublayer must have a parent SubtypeGroupLayer in order to use ${e}`),E=l,c="SubtypeGroupLayer",bt="esri.layers.SubtypeGroupLayer";function V(e,t){return new h("layer:unsupported",`Layer (${e.title}, ${e.id}) of type '${e.declaredClass}' ${t}`,{layer:e})}const C=B();let u=class extends ve(be(he(Qe(Me(Ue(ce(Ve(Ne(M(fe(me(N(ye))))))))))))){constructor(...e){super(...e),this._handles=new re,this._sublayersCollectionChanged=!1,this._sublayerLookup=new Map,this.fields=null,this.fieldsIndex=null,this.outFields=null,this.subtypes=null,this.sublayers=new(L.ofType(E)),this.timeInfo=null,this.title="Layer",this.type="subtype-group",this.addHandles(le(()=>this.sublayers,(t,r)=>this._handleSublayersChange(t,r),pe))}destroy(){var e;(e=this.source)==null||e.destroy(),this._handles=se(this._handles)}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=_(e)?e.signal:null,r=this.loadFromPortal({supportedTypes:["Feature Service"]},e).catch(ne).then(async()=>{if(!this.url)throw new h("subtype-grouplayer:missing-url-or-source","SubtypeGroupLayer must be created with either a url or a portal item");if(this.layerId==null)throw new h("subtype-grouplayer:missing-layerid","layerId is required for a SubtypeGroupLayer created with url");return this._initLayerProperties(await this.createGraphicsSource(t))}).then(()=>this._setUserPrivileges(this.serviceItemId,e)).then(()=>we(this,e));return this.addResolvingPromise(r),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("gdbVersion"),this.commitProperty("historicMoment"),this.commitProperty("returnZ"),this.commitProperty("capabilities"),this.commitProperty("returnM"),(this._get("createQueryVersion")??0)+1}get editingEnabled(){return this.loaded&&this.capabilities!=null&&this.capabilities.operations.supportsEditing&&this.userHasEditingPrivileges}get effectiveEditingEnabled(){return $e(this)}get parsedUrl(){const e=ue(this.url);return e!=null&&this.layerId!=null&&(e.path=de(e.path,this.layerId.toString())),e}set source(e){this._get("source")!==e&&this._set("source",e)}readTitleFromService(e,{name:t}){return this.url?Be(this.url,t):t}async addAttachment(e,t){return Fe(this,e,t,c)}async updateAttachment(e,t,r){return Ie(this,e,t,r,c)}async applyEdits(e,t){return Oe(this,e,t)}on(e,t){return super.on(e,t)}async createGraphicsSource(e){const{default:t}=await ae(Y(()=>import("./FeatureLayerSource-1b003216.js"),["./FeatureLayerSource-1b003216.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./geometry-7d866d3f.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./Polyline-82cb63bc.js","./typeUtils-1714017f.js","./Graphic-5dcfa25e.js","./PopupTemplate-81dc9b83.js","./Clonable-7fa7ad97.js","./Collection-74ae958a.js","./Evented-686173eb.js","./SimpleObservable-bd2c3ae8.js","./fieldUtils-d430f46c.js","./preload-helper-41c905a7.js","./arcadeOnDemand-dd48afd7.js","./enumeration-925aa0f6.js","./number-036ac4ef.js","./locale-fe7cc1d0.js","./Identifiable-e4f9b04c.js","./symbols-5f42cb0e.js","./CIMSymbol-8f55d4ab.js","./Color-7b46c33a.js","./colorUtils-639f4d25.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./screenUtils-410d12c0.js","./opacityUtils-d4a4b602.js","./symbolLayerUtils3D-5cf2dcce.js","./aaBoundingBox-fb003858.js","./aaBoundingRect-2fb32e32.js","./request-09e7d9b2.js","./persistableUrlUtils-3635dccc.js","./Symbol3DAnchorPosition2D-e9d8a8f4.js","./collectionUtils-423a192d.js","./Portal-8dfa7a94.js","./Loadable-40ecd3b9.js","./Promise-755e47e5.js","./PortalGroup-00fb77a4.js","./PortalUser-9579f611.js","./jsonUtils-36bf3d33.js","./TimeExtent-64e16588.js","./assetEditingSupport-2cebf928.js","./clientSideDefaults-07bb3352.js","./QueryEngineCapabilities-42e44ded.js","./defaultsJSON-59981e75.js","./QueryTask-81db9269.js","./Query-b0193ce7.js","./Field-945b2973.js","./fieldType-24ac97df.js","./normalizeUtils-353ec0fc.js","./normalizeUtilsCommon-d8ea404e.js","./executeForIds-9d8798ea.js","./query-b4dff312.js","./pbfQueryUtils-481b10bc.js","./pbf-845dcafd.js","./OptimizedFeature-3e582950.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-f6e44ca7.js","./zscale-baa108ea.js","./executeQueryJSON-044ac84b.js","./FeatureSet-b4fbf079.js","./featureConversionUtils-aead6959.js","./arcgisLayerUrl-1b8d6c52.js","./editsZScale-9d0832b8.js"],import.meta.url),e);return new t({layer:this}).load({signal:e})}createQuery(){const e=H(this),t=this.sublayers.map(r=>r.subtypeCode);return e.where=P(`${this.subtypeField} IN (${t.join(",")})`,this.definitionExpression),e}async deleteAttachments(e,t){return Se(this,e,t,c)}async fetchRecomputedExtents(e){return je(this,e,c)}getFieldDomain(e,t){return this._getLayerDomain(e)}getField(e){return this.fieldsIndex.get(e)}findSublayerForFeature(e){const t=this.fieldsIndex.get(this.subtypeField),r=e.attributes[t.name];return this._sublayerLookup.get(r)}loadAll(){return oe(this,e=>{e(this.sublayers)})}async queryAttachments(e,t){return Te(this,e,t,c)}async queryFeatures(e,t){const r=await this.load(),s=z.from(e)??r.createQuery(),n=U(s.outFields,[]);n.includes(this.subtypeField)||(n.push(this.subtypeField),s.outFields=n);const a=await r.source.queryFeatures(s,t);if(a!=null&&a.features)for(const p of a.features)p.layer=p.sourceLayer=this.findSublayerForFeature(p);return a}async queryObjectIds(e,t){return Ee(this,e,t,c)}async queryFeatureCount(e,t){return _e(this,e,t,c)}async queryExtent(e,t){return Ce(this,e,t,c)}async queryRelatedFeatures(e,t){return Le(this,e,t,c)}async queryRelatedFeaturesCount(e,t){return xe(this,e,t,c)}write(e,t){var a;const{origin:r,layerContainerType:s,messages:n}=t;if(this.isTable){if(r==="web-scene"||r==="web-map"&&s!=="tables")return n==null||n.push(V(this,"using a table source cannot be written to web scenes and web maps")),null}else if(this.loaded&&r==="web-map"&&s==="tables")return n==null||n.push(V(this,"using a non-table source cannot be written to tables in web maps")),null;return(a=this.sublayers)!=null&&a.length?super.write(e,t):(n==null||n.push(new h("web-document-write:invalid-property",`Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' has invalid value for 'sublayers' property. 'sublayers' collection should contain at least one sublayer`,{layer:this})),null)}serviceSupportsSpatialReference(e){return!!this.loaded&&pt(this,e)}_getLayerDomain(e){const t=this.fieldsIndex.get(e);return t?t.domain:null}async _initLayerProperties(e){var r;this._set("source",e);const{sourceJSON:t}=e;if(t&&(this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})),this.isTable)throw new h("subtype-grouplayer:unsupported-source","SubtypeGroupLayer cannot be created using a layer with table source");if(!((r=this.subtypes)!=null&&r.length))throw new h("subtype-grouplayer:missing-subtypes","SubtypeGroupLayer must be created using a layer with subtypes");this._verifyFields(),ze(this.timeInfo,this.fieldsIndex)}async hasDataChanged(){return Pe(this)}_verifyFields(){var t,r;const e=((t=this.parsedUrl)==null?void 0:t.path)??"undefined";this.objectIdField||console.log("SubtypeGroupLayer: 'objectIdField' property is not defined (url: "+e+")"),this.isTable||e.search(/\/FeatureServer\//i)!==-1||(r=this.fields)!=null&&r.some(s=>s.type==="geometry")||console.log("SubtypeGroupLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: "+e+")")}_handleSublayersChange(e,t){t&&(t.forEach(r=>{r.parent=null}),this.handles.remove("sublayers-owner"),this._sublayerLookup.clear()),e&&(e.forEach(r=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),this._sublayersCollectionChanged=!1,this.handles.add([e.on("after-add",({item:r})=>{r.parent=this,this._sublayerLookup.set(r.subtypeCode,r)}),e.on("after-remove",({item:r})=>{r.parent=null,this._sublayerLookup.delete(r.subtypeCode)}),e.on("after-changes",()=>{this._sublayersCollectionChanged=!0})],"sublayers-owner"))}};i([o({readOnly:!0})],u.prototype,"createQueryVersion",null),i([o({readOnly:!0})],u.prototype,"editingEnabled",null),i([o({readOnly:!0})],u.prototype,"effectiveEditingEnabled",null),i([o({...C.fields,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}})],u.prototype,"fields",void 0),i([o(C.fieldsIndex)],u.prototype,"fieldsIndex",void 0),i([o(ke)],u.prototype,"id",void 0),i([o({type:["show","hide","hide-children"]})],u.prototype,"listMode",void 0),i([o({value:"SubtypeGroupLayer",type:["SubtypeGroupLayer"]})],u.prototype,"operationalLayerType",void 0),i([o(C.outFields)],u.prototype,"outFields",void 0),i([o({readOnly:!0})],u.prototype,"parsedUrl",null),i([o()],u.prototype,"source",null),i([o({type:[ut],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],u.prototype,"subtypes",void 0),i([o({type:L.ofType(E),json:{origins:{service:{read:{source:"subtypes",reader:(e,t,r)=>{const s=e.map(({code:n})=>{const a=new E({subtypeCode:n});return a.read(t,r),a});return new(L.ofType(E))(s)}}}},name:"layers",write:{overridePolicy(e,t,r){const s=this.originOf("sublayers"),n=k.PORTAL_ITEM;let a=!0;if(D(s)===n&&D(r.origin)>n){const p=e.some(y=>y.hasUserOverrides());a=this._sublayersCollectionChanged||p}return{enabled:a,ignoreOrigin:!0}}}}})],u.prototype,"sublayers",void 0),i([o({type:He})],u.prototype,"timeInfo",void 0),i([o({json:{origins:{"portal-item":{write:{ignoreOrigin:!0,writerEnsuresNonNull:!0}}}}})],u.prototype,"title",void 0),i([I("service","title",["name"])],u.prototype,"readTitleFromService",null),i([o({json:{read:!1}})],u.prototype,"type",void 0),u=i([x(bt)],u);const wi=u;export{wi as default};
