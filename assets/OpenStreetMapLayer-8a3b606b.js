import{e as t,y as r,a as n}from"./jsonMap-ffa742d3.js";import"./geometry-7d866d3f.js";import"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";import{w as s,f as i,e as a}from"./Extent-22afa84a.js";import{L as m}from"./WebTileLayer-f960617c.js";import{j as l,p as e}from"./TileInfo-9973cd47.js";import w from"./PortalItem-4d7e1038.js";import"./string-53224faa.js";import"./Error-5cdd6e0a.js";import"./nextTick-3ee5a785.js";import"./promiseUtils-5940888c.js";import"./Polyline-82cb63bc.js";import"./typeUtils-1714017f.js";import"./Ellipsoid-89682c5e.js";import"./request-09e7d9b2.js";import"./preload-helper-41c905a7.js";import"./MultiOriginJSONSupport-06f8f24a.js";import"./Layer-524734fa.js";import"./Evented-686173eb.js";import"./Identifiable-e4f9b04c.js";import"./Loadable-40ecd3b9.js";import"./Promise-755e47e5.js";import"./BlendLayer-793ff14a.js";import"./colorUtils-639f4d25.js";import"./screenUtils-410d12c0.js";import"./mat4f32-60a2394b.js";import"./mat4-f0dc8788.js";import"./vec3-8818fe1c.js";import"./common-d0b63c2d.js";import"./OperationalLayer-db187f46.js";import"./TimeExtent-64e16588.js";import"./persistableUrlUtils-3635dccc.js";import"./ElevationInfo-005ddd87.js";import"./fieldUtils-d430f46c.js";import"./arcadeOnDemand-dd48afd7.js";import"./lengthUtils-3c9047c4.js";import"./opacityUtils-d4a4b602.js";import"./PortalLayer-d69e402d.js";import"./asyncUtils-24bd37b2.js";import"./layerUtils-eef15b39.js";import"./Portal-8dfa7a94.js";import"./locale-fe7cc1d0.js";import"./PortalGroup-00fb77a4.js";import"./PortalUser-9579f611.js";import"./portalItemUtils-0655aa33.js";import"./projection-4ac247db.js";import"./mathUtils-ae09f98b.js";import"./vec4-c7a19f0d.js";import"./SimpleObservable-bd2c3ae8.js";import"./assets-94d592bf.js";import"./aaBoundingRect-2fb32e32.js";import"./zscale-baa108ea.js";import"./RefreshableLayer-12bc7ba2.js";import"./Collection-74ae958a.js";import"./ScaleRangeLayer-d1b04b80.js";import"./imageBitmapUtils-bd6555f6.js";let o=class extends m{constructor(...p){super(...p),this.portalItem=null,this.isReference=null,this.tileInfo=new l({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new s({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:i.WebMercator}),spatialReference:i.WebMercator,lods:[new e({level:0,scale:591657527591555e-6,resolution:156543.033928}),new e({level:1,scale:295828763795777e-6,resolution:78271.5169639999}),new e({level:2,scale:147914381897889e-6,resolution:39135.7584820001}),new e({level:3,scale:73957190948944e-6,resolution:19567.8792409999}),new e({level:4,scale:36978595474472e-6,resolution:9783.93962049996}),new e({level:5,scale:18489297737236e-6,resolution:4891.96981024998}),new e({level:6,scale:9244648868618e-6,resolution:2445.98490512499}),new e({level:7,scale:4622324434309e-6,resolution:1222.99245256249}),new e({level:8,scale:2311162217155e-6,resolution:611.49622628138}),new e({level:9,scale:1155581108577e-6,resolution:305.748113140558}),new e({level:10,scale:577790.554289,resolution:152.874056570411}),new e({level:11,scale:288895.277144,resolution:76.4370282850732}),new e({level:12,scale:144447.638572,resolution:38.2185141425366}),new e({level:13,scale:72223.819286,resolution:19.1092570712683}),new e({level:14,scale:36111.909643,resolution:9.55462853563415}),new e({level:15,scale:18055.954822,resolution:4.77731426794937}),new e({level:16,scale:9027.977411,resolution:2.38865713397468}),new e({level:17,scale:4513.988705,resolution:1.19432856685505}),new e({level:18,scale:2256.994353,resolution:.597164283559817}),new e({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.fullExtent=new a(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,i.WebMercator),this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};t([r({type:w,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"portalItem",void 0),t([r({type:Boolean,json:{read:!1,write:!1}})],o.prototype,"isReference",void 0),t([r({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],o.prototype,"refreshInterval",null),t([r({type:l,json:{write:!1}})],o.prototype,"tileInfo",void 0),t([r({type:["show","hide"]})],o.prototype,"listMode",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"subDomains",void 0),t([r({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],o.prototype,"fullExtent",void 0),t([r({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"urlTemplate",void 0),t([r({type:["OpenStreetMap"]})],o.prototype,"operationalLayerType",void 0),t([r({json:{read:!1}})],o.prototype,"type",void 0),t([r({json:{read:!1,write:!1}})],o.prototype,"copyright",void 0),t([r({json:{read:!1,write:!1}})],o.prototype,"wmtsInfo",void 0),o=t([n("esri.layers.OpenStreetMapLayer")],o);const de=o;export{de as default};
