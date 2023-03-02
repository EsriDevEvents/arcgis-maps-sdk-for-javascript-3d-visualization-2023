import{_ as w}from"./preload-helper-41c905a7.js";import{e as m,y as p,a as l}from"./jsonMap-ffa742d3.js";import{j as h}from"./asyncUtils-24bd37b2.js";import{a as V}from"./Error-5cdd6e0a.js";import{r as o,a as c,w as d,t as u}from"./typedArrayUtil-bf9f210a.js";import{a as y,p as _}from"./promiseUtils-5940888c.js";import{l as v,w as A}from"./reactiveUtils-53e5756b.js";import{n as f}from"./LayerView3D-e2b7aff2.js";import{j as D}from"./Collection-74ae958a.js";import"./ArrayPool-b51874dd.js";import{u as T}from"./LayerView-92e98881.js";import"./string-53224faa.js";import"./nextTick-3ee5a785.js";import"./SceneView-7ac05f56.js";import"./Clonable-7fa7ad97.js";import"./Cyclical-47bda305.js";import"./mathUtils-ae09f98b.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./vec4-c7a19f0d.js";import"./Extent-22afa84a.js";import"./Ellipsoid-89682c5e.js";import"./geometry-7d866d3f.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Graphic-5dcfa25e.js";import"./PopupTemplate-81dc9b83.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./enumeration-925aa0f6.js";import"./number-036ac4ef.js";import"./locale-fe7cc1d0.js";import"./Identifiable-e4f9b04c.js";import"./symbols-5f42cb0e.js";import"./CIMSymbol-8f55d4ab.js";import"./Color-7b46c33a.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./opacityUtils-d4a4b602.js";import"./symbolLayerUtils3D-5cf2dcce.js";import"./aaBoundingBox-fb003858.js";import"./aaBoundingRect-2fb32e32.js";import"./request-09e7d9b2.js";import"./persistableUrlUtils-3635dccc.js";import"./Symbol3DAnchorPosition2D-e9d8a8f4.js";import"./collectionUtils-423a192d.js";import"./Portal-8dfa7a94.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./jsonUtils-36bf3d33.js";import"./widget-01c21b51.js";import"./intl-87d72dbe.js";import"./messages-1516d146.js";import"./assets-94d592bf.js";import"./Evented-686173eb.js";import"./uuid-73213768.js";import"./workers-c8fc8d43.js";import"./Connection-3d9fb42e.js";import"./GraphicsLayer-cbd6e467.js";import"./HandleOwner-6217a02e.js";import"./Layer-524734fa.js";import"./BlendLayer-793ff14a.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./ScaleRangeLayer-d1b04b80.js";import"./ElevationInfo-005ddd87.js";import"./lengthUtils-3c9047c4.js";import"./HeightModelInfo-73f516f9.js";import"./projection-4ac247db.js";import"./SimpleObservable-bd2c3ae8.js";import"./zscale-baa108ea.js";import"./sphere-a48b65b1.js";import"./vec4f64-6d0e93be.js";import"./byteSizeEstimations-f0cab514.js";import"./mat3f64-50f3b9f6.js";import"./mat4f64-abdda1bb.js";import"./quatf64-f8f1c132.js";import"./vec2f64-70cfd09e.js";import"./lineSegment-4eb8b6fa.js";import"./plane-01584357.js";import"./spatialReferenceEllipsoidUtils-88aa82c4.js";import"./scaleUtils-a3b834c2.js";import"./layerUtils-eef15b39.js";import"./AttachmentInfo-23249301.js";import"./AttachmentQuery-f1085685.js";import"./ColorStop-29c89bbb.js";import"./utils-6a5cc1bf.js";import"./ItemCache-e927309e.js";import"./MemCache-b4d68123.js";import"./jsonUtils-9b4d797d.js";import"./UniqueValueRenderer-80c8e628.js";import"./diffUtils-1bae97a1.js";import"./colorRamps-18bbdf60.js";import"./sizeVariableUtils-d4870b0d.js";import"./visualVariableUtils-61985981.js";import"./compilerUtils-7bf6df9e.js";import"./jsonUtils-27937179.js";import"./styleUtils-689841ac.js";import"./DictionaryLoader-1c3435ac.js";import"./LRUCache-86d9ad15.js";import"./deprecate-ba25fc78.js";import"./heatmapUtils-8ee685fd.js";import"./Query-b0193ce7.js";import"./TimeExtent-64e16588.js";import"./Field-945b2973.js";import"./fieldType-24ac97df.js";import"./executeQueryJSON-044ac84b.js";import"./normalizeUtils-353ec0fc.js";import"./normalizeUtilsCommon-d8ea404e.js";import"./query-b4dff312.js";import"./pbfQueryUtils-481b10bc.js";import"./pbf-845dcafd.js";import"./OptimizedFeature-3e582950.js";import"./OptimizedFeatureSet-1d1ac4b9.js";import"./queryZScale-f6e44ca7.js";import"./FeatureSet-b4fbf079.js";import"./featureConversionUtils-aead6959.js";import"./RelationshipQuery-765b2184.js";import"./TopFeaturesQuery-d2b31d08.js";import"./FeatureLayer-e767d294.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./serviceCapabilitiesUtils-22f436bd.js";import"./arcgisLayerUrl-1b8d6c52.js";import"./FeatureLayerBase-633118ca.js";import"./OperationalLayer-db187f46.js";import"./TimeReference-adaa7961.js";import"./datetime-eed49b9b.js";import"./editsZScale-9d0832b8.js";import"./APIKeyMixin-ef4ccb38.js";import"./ArcGISService-24587a68.js";import"./CustomParametersMixin-2798ec18.js";import"./EditBusLayer-b1010019.js";import"./FeatureReductionLayer-5ef01ce2.js";import"./labelingInfo-e65ecbf4.js";import"./labelUtils-b68da70f.js";import"./defaultsJSON-59981e75.js";import"./OrderedLayer-045186a6.js";import"./PortalLayer-d69e402d.js";import"./PortalItem-4d7e1038.js";import"./portalItemUtils-0655aa33.js";import"./RefreshableLayer-12bc7ba2.js";import"./TemporalLayer-f231f22a.js";import"./FeatureTemplate-5a472038.js";import"./FeatureType-017f886c.js";import"./fieldProperties-7a0757a8.js";import"./FieldsIndex-113320d3.js";import"./versionUtils-9a1e7983.js";import"./styleUtils-5c617777.js";import"./popupUtils-b8625101.js";import"./callExpressionWithFeature-eb5719d8.js";import"./quantizationUtils-16db4e0b.js";import"./Scheduler-61737382.js";import"./ElevationSamplerData-3fc2a90f.js";import"./TileInfo-9973cd47.js";import"./Basemap-5a7c72ee.js";import"./loadAll-8ca49458.js";import"./writeUtils-b7104d82.js";import"./CollectionFlattener-80d223f1.js";import"./TablesMixin-8f62a14c.js";import"./ViewingMode-5d7d590b.js";import"./vec2-848c6cf0.js";import"./PhysicallyBasedRendering.glsl-edd81ba9.js";import"./View.glsl-879c1eaf.js";import"./ShaderBuilder-be7ca791.js";import"./FloatPassUniform-0426669b.js";import"./Float4PassUniform-9354414b.js";import"./RgbaFloatEncoding.glsl-67199794.js";import"./Texture2DPassUniform-268e8d2d.js";import"./vec3f32-01c06d8d.js";import"./VertexAttribute-15d1866a.js";import"./Texture2DDrawUniform-e4341b84.js";import"./basicInterfaces-7449a8bf.js";import"./PiUtils.glsl-49462ceb.js";import"./ReadLinearDepth.glsl-0e6f5c47.js";import"./WaterSurface.glsl-e13d44e2.js";import"./ForwardLinearDepth.glsl-52bf5bdc.js";import"./Matrix3PassUniform-df6e2166.js";import"./Slice.glsl-cd30f0ea.js";import"./Transform.glsl-052069d0.js";import"./OutputHighlight.glsl-ca02d1ee.js";import"./MultipassTerrainTest.glsl-8b279fcd.js";import"./NormalUtils.glsl-84d184a7.js";import"./AlphaCutoff-96178e0d.js";import"./TransparencyPassType-c3841b0a.js";import"./EvaluateSceneLighting.glsl-14c608ff.js";import"./VisualVariablePassParameters-f892560d.js";import"./enums-fc527c7c.js";import"./VertexElementDescriptor-2925c6af.js";import"./Texture-d2fa6cd8.js";import"./context-util-34d303b7.js";import"./Util-513876a8.js";import"./SSAOBlur.glsl-c56632c0.js";import"./ScreenSpacePass.glsl-44cc0c5e.js";import"./SSAO.glsl-2c6533cd.js";import"./ShaderTechniqueConfiguration-0fa0f78c.js";import"./mat3-4fd89d48.js";import"./HUD.glsl-73b068b4.js";import"./VerticalOffset.glsl-109e8746.js";import"./Octree-813f29c9.js";import"./objectResourceUtils-3685cb27.js";import"./devEnvironmentUtils-5002a058.js";import"./BufferView-b402c7a7.js";import"./vec33-ca555933.js";import"./DefaultMaterial_COLOR_GAMMA-8ec4380b.js";import"./types-e1c0a5bf.js";import"./Version-621cc6b7.js";import"./quat-77a0169c.js";import"./resourceUtils-527631ac.js";import"./Indices-f9b34f39.js";import"./DefaultMaterial.glsl-58ca0075.js";import"./MixExternalColor.glsl-f5c601ed.js";import"./symbolColorUtils-1c63720c.js";import"./ObjectAndLayerIdColor.glsl-66083f64.js";import"./OutputDepth.glsl-17bf0574.js";import"./VisualVariables.glsl-bb97d5ba.js";import"./DiscardOrAdjustAlphaBlend.glsl-27f02ebd.js";import"./VertexColor.glsl-2f905a78.js";import"./Normals.glsl-6a1bc6fb.js";import"./vec2f32-eaf29605.js";import"./Texture-ae652f15.js";import"./TextureOnly.glsl-469cc321.js";import"./Attribute-f72d3f37.js";import"./InterleavedLayout-07cc6753.js";import"./DefaultTechniqueConfiguration-b54ae0b1.js";import"./RealisticTree.glsl-29f7cbd7.js";import"./edgeProcessing-ac701714.js";import"./deduplicate-a70aec6f.js";import"./MeshComponent-777de3ff.js";import"./earcut-61f7b102.js";import"./projection-03824933.js";import"./HUDMaterial.glsl-82200888.js";import"./sdfPrimitives-3ceeab79.js";import"./floatRGBA-1f66d0a4.js";import"./dehydratedFeatures-efdbcd90.js";import"./labelFormatUtils-f90ee62f.js";import"./orientedBoundingBox-6188c4d9.js";import"./quatf32-51a323b8.js";import"./LineCallout.glsl-76cd336e.js";import"./SnappingCandidate-970faec6.js";import"./MarkerSizing.glsl-950a18f6.js";import"./RibbonLine.glsl-8fe4662b.js";import"./LineStipple.glsl-4eef2aea.js";import"./LineMarker.glsl-2c017de2.js";import"./NativeLine.glsl-9893bc56.js";import"./Path.glsl-2eb74a31.js";import"./ColorMaterial.glsl-1d45c81e.js";import"./Pattern.glsl-698f2083.js";import"./LercDecoder-f1486af7.js";import"./enums-fb086c25.js";import"./config-f7904f35.js";import"./TileKey-4d1284e4.js";import"./workerHelper-2d7b0d57.js";import"./capabilities-caaa1278.js";const k=r=>{let i=class extends r{constructor(...t){super(...t),this.layer=null}get interactive(){return!!o(this.analysisView)&&this.analysisView.interactive}set interactive(t){o(this.analysisView)&&(this.analysisView.interactive=t)}get results(){return o(this.analysisView)?this.analysisView.results:new D}get selectedDimension(){return o(this.analysisView)?this.analysisView.selectedDimension:null}set selectedDimension(t){o(this.analysisView)&&(this.analysisView.selectedDimension=t)}async createLengthDimensions(t){if(!o(this.analysisView))throw y();await this.analysisView.createLengthDimensions(t)}};return m([p()],i.prototype,"layer",void 0),m([p()],i.prototype,"interactive",null),m([p({readOnly:!0})],i.prototype,"results",null),m([p()],i.prototype,"selectedDimension",null),m([p()],i.prototype,"analysisView",void 0),i=m([l("esri.views.layers.DimensionLayerView")],i),i},n="analysis-view-handles";let s=class extends f(k(T)){constructor(r){super(r),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(v(()=>this.layer.source,r=>{this._destroyAnalysisView(),o(r)&&this._createAnalysisView(r)},A),n)}destroy(){this.handles.remove(n),this._destroyAnalysisView()}isUpdating(){return o(this._createAnalysisViewTask)||o(this.analysisView)&&this.analysisView.updating}async whenAnalysisView(){if(o(this.analysisView))return this.analysisView;if(o(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new V("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(r){const i=h(async t=>(this.analysisView=await this._createAnalysisViewPromise(r,t),this._createAnalysisViewTask===i&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(i.promise),this._createAnalysisViewTask=i}_destroyAnalysisView(){this.analysisView=c(this.analysisView),this._createAnalysisViewTask=d(this._createAnalysisViewTask)}async _createAnalysisViewPromise(r,i){let t=this._analysisModule;if(u(t)){const a=await this._loadAnalysisModule();this._analysisModule=a,t=a}const e=new t.default({analysis:r,view:this.view,parent:this});if(await e.when(),_(i))throw e.destroy(),y();return e}_loadAnalysisModule(){return w(()=>import("./DimensionAnalysisView3D-fb9d1281.js").then(r=>r.D),["./DimensionAnalysisView3D-fb9d1281.js","./jsonMap-ffa742d3.js","./typedArrayUtil-bf9f210a.js","./string-53224faa.js","./Error-5cdd6e0a.js","./ArrayPool-b51874dd.js","./nextTick-3ee5a785.js","./promiseUtils-5940888c.js","./Collection-74ae958a.js","./Evented-686173eb.js","./SimpleObservable-bd2c3ae8.js","./reactiveUtils-53e5756b.js","./LineVisualElement-4382615e.js","./Promise-755e47e5.js","./projection-4ac247db.js","./preload-helper-41c905a7.js","./mathUtils-ae09f98b.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./vec4-c7a19f0d.js","./Extent-22afa84a.js","./Ellipsoid-89682c5e.js","./mat4-f0dc8788.js","./Polyline-82cb63bc.js","./assets-94d592bf.js","./request-09e7d9b2.js","./aaBoundingRect-2fb32e32.js","./zscale-baa108ea.js","./SceneView-7ac05f56.js","./Clonable-7fa7ad97.js","./Cyclical-47bda305.js","./geometry-7d866d3f.js","./typeUtils-1714017f.js","./Graphic-5dcfa25e.js","./PopupTemplate-81dc9b83.js","./fieldUtils-d430f46c.js","./arcadeOnDemand-dd48afd7.js","./enumeration-925aa0f6.js","./number-036ac4ef.js","./locale-fe7cc1d0.js","./Identifiable-e4f9b04c.js","./symbols-5f42cb0e.js","./CIMSymbol-8f55d4ab.js","./Color-7b46c33a.js","./colorUtils-639f4d25.js","./screenUtils-410d12c0.js","./opacityUtils-d4a4b602.js","./symbolLayerUtils3D-5cf2dcce.js","./aaBoundingBox-fb003858.js","./persistableUrlUtils-3635dccc.js","./Symbol3DAnchorPosition2D-e9d8a8f4.js","./collectionUtils-423a192d.js","./Portal-8dfa7a94.js","./Loadable-40ecd3b9.js","./PortalGroup-00fb77a4.js","./PortalUser-9579f611.js","./jsonUtils-36bf3d33.js","./widget-01c21b51.js","./intl-87d72dbe.js","./messages-1516d146.js","./uuid-73213768.js","./workers-c8fc8d43.js","./Connection-3d9fb42e.js","./GraphicsLayer-cbd6e467.js","./HandleOwner-6217a02e.js","./Layer-524734fa.js","./BlendLayer-793ff14a.js","./mat4f32-60a2394b.js","./ScaleRangeLayer-d1b04b80.js","./ElevationInfo-005ddd87.js","./lengthUtils-3c9047c4.js","./HeightModelInfo-73f516f9.js","./sphere-a48b65b1.js","./vec4f64-6d0e93be.js","./byteSizeEstimations-f0cab514.js","./mat3f64-50f3b9f6.js","./mat4f64-abdda1bb.js","./quatf64-f8f1c132.js","./vec2f64-70cfd09e.js","./lineSegment-4eb8b6fa.js","./plane-01584357.js","./spatialReferenceEllipsoidUtils-88aa82c4.js","./scaleUtils-a3b834c2.js","./layerUtils-eef15b39.js","./AttachmentInfo-23249301.js","./AttachmentQuery-f1085685.js","./ColorStop-29c89bbb.js","./utils-6a5cc1bf.js","./asyncUtils-24bd37b2.js","./ItemCache-e927309e.js","./MemCache-b4d68123.js","./jsonUtils-9b4d797d.js","./UniqueValueRenderer-80c8e628.js","./diffUtils-1bae97a1.js","./colorRamps-18bbdf60.js","./sizeVariableUtils-d4870b0d.js","./visualVariableUtils-61985981.js","./compilerUtils-7bf6df9e.js","./jsonUtils-27937179.js","./styleUtils-689841ac.js","./DictionaryLoader-1c3435ac.js","./LRUCache-86d9ad15.js","./deprecate-ba25fc78.js","./heatmapUtils-8ee685fd.js","./Query-b0193ce7.js","./TimeExtent-64e16588.js","./Field-945b2973.js","./fieldType-24ac97df.js","./executeQueryJSON-044ac84b.js","./normalizeUtils-353ec0fc.js","./normalizeUtilsCommon-d8ea404e.js","./query-b4dff312.js","./pbfQueryUtils-481b10bc.js","./pbf-845dcafd.js","./OptimizedFeature-3e582950.js","./OptimizedFeatureSet-1d1ac4b9.js","./queryZScale-f6e44ca7.js","./FeatureSet-b4fbf079.js","./featureConversionUtils-aead6959.js","./RelationshipQuery-765b2184.js","./TopFeaturesQuery-d2b31d08.js","./FeatureLayer-e767d294.js","./MultiOriginJSONSupport-06f8f24a.js","./serviceCapabilitiesUtils-22f436bd.js","./arcgisLayerUrl-1b8d6c52.js","./FeatureLayerBase-633118ca.js","./OperationalLayer-db187f46.js","./TimeReference-adaa7961.js","./datetime-eed49b9b.js","./editsZScale-9d0832b8.js","./APIKeyMixin-ef4ccb38.js","./ArcGISService-24587a68.js","./CustomParametersMixin-2798ec18.js","./EditBusLayer-b1010019.js","./FeatureReductionLayer-5ef01ce2.js","./labelingInfo-e65ecbf4.js","./labelUtils-b68da70f.js","./defaultsJSON-59981e75.js","./OrderedLayer-045186a6.js","./PortalLayer-d69e402d.js","./PortalItem-4d7e1038.js","./portalItemUtils-0655aa33.js","./RefreshableLayer-12bc7ba2.js","./TemporalLayer-f231f22a.js","./FeatureTemplate-5a472038.js","./FeatureType-017f886c.js","./fieldProperties-7a0757a8.js","./FieldsIndex-113320d3.js","./versionUtils-9a1e7983.js","./styleUtils-5c617777.js","./popupUtils-b8625101.js","./callExpressionWithFeature-eb5719d8.js","./quantizationUtils-16db4e0b.js","./Scheduler-61737382.js","./ElevationSamplerData-3fc2a90f.js","./TileInfo-9973cd47.js","./Basemap-5a7c72ee.js","./loadAll-8ca49458.js","./writeUtils-b7104d82.js","./CollectionFlattener-80d223f1.js","./TablesMixin-8f62a14c.js","./ViewingMode-5d7d590b.js","./vec2-848c6cf0.js","./PhysicallyBasedRendering.glsl-edd81ba9.js","./View.glsl-879c1eaf.js","./ShaderBuilder-be7ca791.js","./FloatPassUniform-0426669b.js","./Float4PassUniform-9354414b.js","./RgbaFloatEncoding.glsl-67199794.js","./Texture2DPassUniform-268e8d2d.js","./vec3f32-01c06d8d.js","./VertexAttribute-15d1866a.js","./Texture2DDrawUniform-e4341b84.js","./basicInterfaces-7449a8bf.js","./PiUtils.glsl-49462ceb.js","./ReadLinearDepth.glsl-0e6f5c47.js","./WaterSurface.glsl-e13d44e2.js","./ForwardLinearDepth.glsl-52bf5bdc.js","./Matrix3PassUniform-df6e2166.js","./Slice.glsl-cd30f0ea.js","./Transform.glsl-052069d0.js","./OutputHighlight.glsl-ca02d1ee.js","./MultipassTerrainTest.glsl-8b279fcd.js","./NormalUtils.glsl-84d184a7.js","./AlphaCutoff-96178e0d.js","./TransparencyPassType-c3841b0a.js","./EvaluateSceneLighting.glsl-14c608ff.js","./VisualVariablePassParameters-f892560d.js","./enums-fc527c7c.js","./VertexElementDescriptor-2925c6af.js","./Texture-d2fa6cd8.js","./context-util-34d303b7.js","./Util-513876a8.js","./SSAOBlur.glsl-c56632c0.js","./ScreenSpacePass.glsl-44cc0c5e.js","./SSAO.glsl-2c6533cd.js","./ShaderTechniqueConfiguration-0fa0f78c.js","./mat3-4fd89d48.js","./HUD.glsl-73b068b4.js","./VerticalOffset.glsl-109e8746.js","./Octree-813f29c9.js","./objectResourceUtils-3685cb27.js","./devEnvironmentUtils-5002a058.js","./BufferView-b402c7a7.js","./vec33-ca555933.js","./DefaultMaterial_COLOR_GAMMA-8ec4380b.js","./types-e1c0a5bf.js","./Version-621cc6b7.js","./quat-77a0169c.js","./resourceUtils-527631ac.js","./Indices-f9b34f39.js","./DefaultMaterial.glsl-58ca0075.js","./MixExternalColor.glsl-f5c601ed.js","./symbolColorUtils-1c63720c.js","./ObjectAndLayerIdColor.glsl-66083f64.js","./OutputDepth.glsl-17bf0574.js","./VisualVariables.glsl-bb97d5ba.js","./DiscardOrAdjustAlphaBlend.glsl-27f02ebd.js","./VertexColor.glsl-2f905a78.js","./Normals.glsl-6a1bc6fb.js","./vec2f32-eaf29605.js","./Texture-ae652f15.js","./TextureOnly.glsl-469cc321.js","./Attribute-f72d3f37.js","./InterleavedLayout-07cc6753.js","./DefaultTechniqueConfiguration-b54ae0b1.js","./RealisticTree.glsl-29f7cbd7.js","./edgeProcessing-ac701714.js","./deduplicate-a70aec6f.js","./MeshComponent-777de3ff.js","./earcut-61f7b102.js","./projection-03824933.js","./HUDMaterial.glsl-82200888.js","./sdfPrimitives-3ceeab79.js","./floatRGBA-1f66d0a4.js","./dehydratedFeatures-efdbcd90.js","./labelFormatUtils-f90ee62f.js","./orientedBoundingBox-6188c4d9.js","./quatf32-51a323b8.js","./LineCallout.glsl-76cd336e.js","./SnappingCandidate-970faec6.js","./MarkerSizing.glsl-950a18f6.js","./RibbonLine.glsl-8fe4662b.js","./LineStipple.glsl-4eef2aea.js","./LineMarker.glsl-2c017de2.js","./NativeLine.glsl-9893bc56.js","./Path.glsl-2eb74a31.js","./ColorMaterial.glsl-1d45c81e.js","./Pattern.glsl-698f2083.js","./LercDecoder-f1486af7.js","./enums-fb086c25.js","./config-f7904f35.js","./TileKey-4d1284e4.js","./workerHelper-2d7b0d57.js","./capabilities-caaa1278.js","./SceneView-292eb7eb.css","./LengthDimension-0b9dbf47.js","./Segment-0dc6a9a8.js","./elevationInfoUtils-d3b9d588.js","./analysisViewUtils-61ca3438.js","./ImageMaterial-771bdfd8.js","./ImageMaterial.glsl-2e22ba6f.js","./Factory-3a66d8bc.js","./RightAngleQuadVisualElement-c08b83c3.js","./VisualElementResources-b6496e82.js","./PointVisualElement-f510cbef.js","./colorUtils-c0f43caf.js","./EditGeometryOperations-0df36f69.js","./QueryEngineResult-0c6179e0.js","./WhereClause-0699a2ca.js","./executionError-fb3f283a.js","./utils-95e81b90.js","./generateRendererUtils-e34cc2cf.js","./json-48e3ea08.js","./dehydratedFeatureComparison-e523fe14.js","./RenderTexture-b7e204b5.js"],import.meta.url)}};m([p()],s.prototype,"type",void 0),m([p()],s.prototype,"analysisView",void 0),m([p()],s.prototype,"_createAnalysisViewTask",void 0),s=m([l("esri.views.3d.layers.DimensionLayerView3D")],s);const ym=s;export{ym as default};
