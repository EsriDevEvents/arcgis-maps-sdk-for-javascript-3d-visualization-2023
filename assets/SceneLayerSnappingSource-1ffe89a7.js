import{e as o,y as e,a as u,_ as y,v as f}from"./jsonMap-ffa742d3.js";import{p as S,w as k,t as g,o as C,r as b}from"./typedArrayUtil-bf9f210a.js";import{p as L,f as H}from"./promiseUtils-5940888c.js";import"./ArrayPool-b51874dd.js";import{d as w}from"./HandleOwner-6217a02e.js";import{ce as E}from"./SceneView-7ac05f56.js";import{n as _}from"./vec3-8818fe1c.js";import{h as O}from"./LercDecoder-f1486af7.js";import{E as I}from"./sphere-a48b65b1.js";import{r as $,l as R}from"./DimensionAnalysisView3D-fb9d1281.js";import{r as V}from"./VertexSnappingCandidate-ef5381f7.js";import"./string-53224faa.js";import"./Error-5cdd6e0a.js";import"./nextTick-3ee5a785.js";import"./reactiveUtils-53e5756b.js";import"./preload-helper-41c905a7.js";import"./Clonable-7fa7ad97.js";import"./Cyclical-47bda305.js";import"./mathUtils-ae09f98b.js";import"./vec4-c7a19f0d.js";import"./common-d0b63c2d.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Graphic-5dcfa25e.js";import"./PopupTemplate-81dc9b83.js";import"./Collection-74ae958a.js";import"./Evented-686173eb.js";import"./SimpleObservable-bd2c3ae8.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./request-09e7d9b2.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./jsonUtils-36bf3d33.js";import"./widget-01c21b51.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./assets-94d592bf.js";import"./uuid-73213768.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./GraphicsLayer-cbd6e467.js";import"./Layer-524734fa.js";import"./BlendLayer-793ff14a.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./ScaleRangeLayer-d1b04b80.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./HeightModelInfo-73f516f9.js";import"./projection-4ac247db.js";import"./zscale-baa108ea.js";import"./mat4f64-abdda1bb.js";import"./lineSegment-4eb8b6fa.js";import"./plane-01584357.js";import"./spatialReferenceEllipsoidUtils-88aa82c4.js";import"./scaleUtils-a3b834c2.js";import"./layerUtils-eef15b39.js";import"./byteSizeEstimations-f0cab514.js";import"./AttachmentInfo-23249301.js";import"./AttachmentQuery-f1085685.js";import"./ColorStop-29c89bbb.js";import"./utils-6a5cc1bf.js";import"./asyncUtils-24bd37b2.js";import"./ItemCache-e927309e.js";import"./MemCache-b4d68123.js";import"./jsonUtils-9b4d797d.js";import"./UniqueValueRenderer-80c8e628.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./compilerUtils-7bf6df9e.js";import"./jsonUtils-27937179.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./vec4f64-6d0e93be.js";import"./Query-b0193ce7.js";import"./TimeExtent-64e16588.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";import"./executeQueryJSON-044ac84b.js";import"./normalizeUtils-353ec0fc.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./query-b4dff312.js";import"./pbfQueryUtils-481b10bc.js";import"./pbf-845dcafd.js";import"./OptimizedFeature-3e582950.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-f6e44ca7.js";import"./FeatureSet-b4fbf079.js";import"./featureConversionUtils-aead6959.js";import"./RelationshipQuery-765b2184.js";import"./TopFeaturesQuery-d2b31d08.js";import"./FeatureLayer-e767d294.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./OperationalLayer-db187f46.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./editsZScale-9d0832b8.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./PortalLayer-d69e402d.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./RefreshableLayer-12bc7ba2.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./popupUtils-b8625101.js";import"./callExpressionWithFeature-eb5719d8.js";import"./quantizationUtils-16db4e0b.js";import"./Scheduler-61737382.js";import"./ElevationSamplerData-3fc2a90f.js";import"./TileInfo-9973cd47.js";import"./Basemap-5a7c72ee.js";import"./loadAll-8ca49458.js";import"./writeUtils-b7104d82.js";import"./CollectionFlattener-80d223f1.js";import"./TablesMixin-8f62a14c.js";import"./ViewingMode-5d7d590b.js";import"./vec2-848c6cf0.js";import"./vec2f64-70cfd09e.js";import"./PhysicallyBasedRendering.glsl-edd81ba9.js";import"./View.glsl-879c1eaf.js";import"./ShaderBuilder-be7ca791.js";import"./FloatPassUniform-0426669b.js";import"./Float4PassUniform-9354414b.js";import"./RgbaFloatEncoding.glsl-67199794.js";import"./Texture2DPassUniform-268e8d2d.js";import"./vec3f32-01c06d8d.js";import"./VertexAttribute-15d1866a.js";import"./Texture2DDrawUniform-e4341b84.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-49462ceb.js";import"./ReadLinearDepth.glsl-0e6f5c47.js";import"./WaterSurface.glsl-e13d44e2.js";import"./ForwardLinearDepth.glsl-52bf5bdc.js";import"./Matrix3PassUniform-df6e2166.js";import"./mat3f64-50f3b9f6.js";import"./Slice.glsl-cd30f0ea.js";import"./Transform.glsl-052069d0.js";import"./OutputHighlight.glsl-ca02d1ee.js";import"./MultipassTerrainTest.glsl-8b279fcd.js";import"./NormalUtils.glsl-84d184a7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-c3841b0a.js";import"./EvaluateSceneLighting.glsl-14c608ff.js";import"./VisualVariablePassParameters-f892560d.js";import"./enums-fc527c7c.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-d2fa6cd8.js";import"./context-util-34d303b7.js";import"./Util-513876a8.js";import"./SSAOBlur.glsl-c56632c0.js";import"./ScreenSpacePass.glsl-44cc0c5e.js";import"./SSAO.glsl-2c6533cd.js";import"./ShaderTechniqueConfiguration-0fa0f78c.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-73b068b4.js";import"./VerticalOffset.glsl-109e8746.js";import"./Octree-813f29c9.js";import"./objectResourceUtils-3685cb27.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-b402c7a7.js";import"./vec33-ca555933.js";import"./DefaultMaterial_COLOR_GAMMA-8ec4380b.js";import"./types-e1c0a5bf.js";import"./Version-621cc6b7.js";import"./quat-77a0169c.js";import"./quatf64-f8f1c132.js";import"./resourceUtils-527631ac.js";import"./Indices-f9b34f39.js";import"./DefaultMaterial.glsl-58ca0075.js";import"./MixExternalColor.glsl-f5c601ed.js";import"./symbolColorUtils-1c63720c.js";import"./ObjectAndLayerIdColor.glsl-66083f64.js";import"./OutputDepth.glsl-17bf0574.js";import"./VisualVariables.glsl-bb97d5ba.js";import"./DiscardOrAdjustAlphaBlend.glsl-27f02ebd.js";import"./VertexColor.glsl-2f905a78.js";import"./Normals.glsl-6a1bc6fb.js";import"./vec2f32-eaf29605.js";import"./Texture-ae652f15.js";import"./TextureOnly.glsl-469cc321.js";import"./Attribute-f72d3f37.js";import"./InterleavedLayout-07cc6753.js";import"./DefaultTechniqueConfiguration-b54ae0b1.js";import"./RealisticTree.glsl-29f7cbd7.js";import"./edgeProcessing-ac701714.js";import"./deduplicate-a70aec6f.js";import"./MeshComponent-777de3ff.js";import"./earcut-61f7b102.js";import"./projection-03824933.js";import"./HUDMaterial.glsl-82200888.js";import"./sdfPrimitives-3ceeab79.js";import"./floatRGBA-1f66d0a4.js";import"./dehydratedFeatures-efdbcd90.js";import"./labelFormatUtils-f90ee62f.js";import"./orientedBoundingBox-6188c4d9.js";import"./quatf32-51a323b8.js";import"./LineCallout.glsl-76cd336e.js";import"./SnappingCandidate-970faec6.js";import"./MarkerSizing.glsl-950a18f6.js";import"./RibbonLine.glsl-8fe4662b.js";import"./LineStipple.glsl-4eef2aea.js";import"./LineMarker.glsl-2c017de2.js";import"./NativeLine.glsl-9893bc56.js";import"./Path.glsl-2eb74a31.js";import"./ColorMaterial.glsl-1d45c81e.js";import"./Pattern.glsl-698f2083.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-4d1284e4.js";import"./workerHelper-2d7b0d57.js";import"./capabilities-caaa1278.js";import"./LineVisualElement-4382615e.js";import"./LengthDimension-0b9dbf47.js";import"./Segment-0dc6a9a8.js";import"./elevationInfoUtils-d3b9d588.js";import"./analysisViewUtils-61ca3438.js";import"./ImageMaterial-771bdfd8.js";import"./ImageMaterial.glsl-2e22ba6f.js";import"./Factory-3a66d8bc.js";import"./RightAngleQuadVisualElement-c08b83c3.js";import"./VisualElementResources-b6496e82.js";import"./PointVisualElement-f510cbef.js";import"./colorUtils-c0f43caf.js";import"./EditGeometryOperations-0df36f69.js";import"./QueryEngineResult-0c6179e0.js";import"./WhereClause-0699a2ca.js";import"./executionError-fb3f283a.js";import"./utils-95e81b90.js";import"./generateRendererUtils-e34cc2cf.js";import"./json-48e3ea08.js";import"./dehydratedFeatureComparison-e523fe14.js";import"./RenderTexture-b7e204b5.js";let n=class extends w{constructor(t){super(t),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new P(this.schedule,{fetchAllEdgeLocations:(t,r)=>this._fetchAllEdgeLocations(t,r)})}async fetchCandidates(t,r){const i=t.coordinateHelper,{point:p}=t,m=j;this.renderCoordsHelper.toRenderCoords(p,i.spatialReference,m);const c=t.distance,a=typeof c=="number"?c:c.distance,l=await this._workerHandle.invoke({bounds:I(m[0],m[1],m[2],a),types:t.types},r);return l.candidates.sort((h,v)=>h.distance-v.distance),l.candidates.map(h=>this._convertCandidate(i,h))}async add(t,r){this._ids.add(t.id),await this._workerHandle.invokeMethod("add",t,r)}async remove(t,r){this._ids.delete(t.id),await this._workerHandle.invokeMethod("remove",t,r)}_convertCandidate(t,r){switch(r.type){case"edge":return new $({objectId:r.objectId,targetPoint:this._convertRenderCoordinate(t,r.target),edgeStart:this._convertRenderCoordinate(t,r.start),edgeEnd:this._convertRenderCoordinate(t,r.end),isDraped:!1});case"vertex":return new V({objectId:r.objectId,targetPoint:this._convertRenderCoordinate(t,r.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:t},r){const i=_();return this.renderCoordsHelper.fromRenderCoords(r,i,t),R(i)}async _fetchAllEdgeLocations(t,r){const i=[],p=[];for(const{id:m,uid:c}of t.components)this._ids.has(m)&&i.push((async()=>{const a=await this.fetchEdgeLocations(m,r.signal),l=a.locations.buffer;return p.push(l),{id:m,uid:c,objectIds:a.objectIds,locations:l,origin:a.origin,type:a.type}})());return{result:{components:(await Promise.all(i)).filter(({id:m})=>this._ids.has(m))},transferList:p}}};o([e({constructOnly:!0})],n.prototype,"renderCoordsHelper",void 0),o([e({constructOnly:!0})],n.prototype,"fetchEdgeLocations",void 0),o([e({constructOnly:!0})],n.prototype,"schedule",void 0),o([e({readOnly:!0})],n.prototype,"availability",void 0),n=o([u("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],n);class P extends O{constructor(r,i){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},r,{strategy:"dedicated",client:i})}}const j=_();let s=class extends w{get updating(){return this.updatingHandles.updating}constructor(t){super(t),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=S(this._tracker),this._abortController=k(this._abortController)}initialize(){const{view:t}=this,r=t.resourceController;this._edgeWorker=new E(i=>r.immediate.schedule(i)),this._workerHandle=new n({renderCoordsHelper:this.view.renderCoordsHelper,schedule:i=>r.immediate.schedule(i),fetchEdgeLocations:async(i,p)=>{if(g(this._tracker))throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(i,this._edgeWorker,p)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([y(this._workerHandle),y(this._edgeWorker)])}async fetchCandidates(t,r){return this._workerHandle.fetchCandidates(t,r)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const t=C(this._abortController,i=>i.signal),r=await this.getLayerView();g(r)||L(t)||(this._tracker=r.trackSnappingSources({add:(i,p)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:i,bounds:p},t))},remove:i=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:i},t))}}))}};o([e({constructOnly:!0})],s.prototype,"getLayerView",void 0),o([e({constructOnly:!0})],s.prototype,"view",void 0),o([e({readOnly:!0})],s.prototype,"updating",null),o([e({readOnly:!0})],s.prototype,"availability",void 0),s=o([u("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],s);let d=class extends f{get updating(){return this._i3sSources.some(t=>t.updating)}constructor(t){super(t),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(t=>t.destroy()),this._i3sSources.length=0}initialize(){const{view:t}=this,r=this.layerSource.layer;this._i3sSources=r.type==="building-scene"?this._getBuildingSceneI3SSources(t,r):[this._getSceneLayerI3SSource(t,r)]}async fetchCandidates(t,r){const i=await Promise.all(this._i3sSources.map(p=>p.fetchCandidates(t,r)));return H(r),i.flat()}refresh(){this._i3sSources.forEach(t=>t.refresh())}_getBuildingSceneI3SSources(t,r){return r.allSublayers.toArray().map(i=>i.type==="building-component"?new s({getLayerView:async()=>(await t.whenLayerView(r)).whenSublayerView(i),view:t}):null).filter(b)}_getSceneLayerI3SSource(t,r){return new s({getLayerView:async()=>{const i=await t.whenLayerView(r);return i.type==="scene-layer-graphics-3d"?void 0:i},view:t})}};o([e({constructOnly:!0})],d.prototype,"layerSource",void 0),o([e({constructOnly:!0})],d.prototype,"view",void 0),o([e({readOnly:!0})],d.prototype,"updating",null),o([e({readOnly:!0})],d.prototype,"availability",void 0),d=o([u("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],d);export{d as SceneLayerSnappingSource};
