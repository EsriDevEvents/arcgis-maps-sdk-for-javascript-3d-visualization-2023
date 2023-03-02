import{e,y as t,l as u,a as c,G,s as C,B as z,C as R}from"./jsonMap-ffa742d3.js";import{n as K}from"./geometry-7d866d3f.js";import{T as H}from"./TimeExtent-64e16588.js";import{p as T}from"./string-53224faa.js";import{r as x}from"./typedArrayUtil-bf9f210a.js";import{o as p}from"./enumeration-925aa0f6.js";import{f as $,o as _,e as Q,r as g,w as X}from"./Extent-22afa84a.js";import{T as Z,b as J,S as k,v as W}from"./ArrayPool-b51874dd.js";import{v as Y}from"./jsonUtils-36bf3d33.js";import{y as ee}from"./Field-945b2973.js";import{o as te}from"./typeUtils-1714017f.js";import{i as re}from"./Clonable-7fa7ad97.js";var V;let f=V=class extends u{constructor(r){super(r),this.type="map-layer"}clone(){const{mapLayerId:r,gdbVersion:i}=this;return new V({mapLayerId:r,gdbVersion:i})}};e([p({mapLayer:"map-layer"})],f.prototype,"type",void 0),e([t({type:Z,json:{write:!0}})],f.prototype,"mapLayerId",void 0),e([t({type:String,json:{write:!0}})],f.prototype,"gdbVersion",void 0),f=V=e([c("esri.layers.support.source.MapLayerSource")],f);var O;let y=O=class extends u{constructor(r){super(r),this.type="query-table"}clone(){const{workspaceId:r,query:i,oidFields:s,spatialReference:n,geometryType:d}=this,h={workspaceId:r,query:i,oidFields:s,spatialReference:(n==null?void 0:n.clone())??void 0,geometryType:d};return new O(h)}};e([p({queryTable:"query-table"})],y.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"query",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"oidFields",void 0),e([t({type:$,json:{write:!0}})],y.prototype,"spatialReference",void 0),e([p(te)],y.prototype,"geometryType",void 0),y=O=e([c("esri.layers.support.source.QueryTableDataSource")],y);var D;let b=D=class extends u{constructor(r){super(r),this.type="raster"}clone(){const{workspaceId:r,dataSourceName:i}=this;return new D({workspaceId:r,dataSourceName:i})}};e([p({raster:"raster"})],b.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],b.prototype,"dataSourceName",void 0),e([t({type:String,json:{write:!0}})],b.prototype,"workspaceId",void 0),b=D=e([c("esri.layers.support.source.RasterDataSource")],b);var M;let v=M=class extends u{constructor(r){super(r),this.type="table"}clone(){const{workspaceId:r,gdbVersion:i,dataSourceName:s}=this;return new M({workspaceId:r,gdbVersion:i,dataSourceName:s})}};e([p({table:"table"})],v.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"workspaceId",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"gdbVersion",void 0),e([t({type:String,json:{write:!0}})],v.prototype,"dataSourceName",void 0),v=M=e([c("esri.layers.support.source.TableDataSource")],v);var I,N;const oe=G()({esriLeftInnerJoin:"left-inner-join",esriLeftOuterJoin:"left-outer-join"});let a=I=class extends u{constructor(r){super(r),this.type="join-table"}readLeftTableSource(r,i,s){return A()(r,i,s)}castLeftTableSource(r){return k(E(),r)}readRightTableSource(r,i,s){return A()(r,i,s)}castRightTableSource(r){return k(E(),r)}clone(){const{leftTableKey:r,rightTableKey:i,leftTableSource:s,rightTableSource:n,joinType:d}=this,h={leftTableKey:r,rightTableKey:i,leftTableSource:(s==null?void 0:s.clone())??void 0,rightTableSource:(n==null?void 0:n.clone())??void 0,joinType:d};return new I(h)}};e([p({joinTable:"join-table"})],a.prototype,"type",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"leftTableKey",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"rightTableKey",void 0),e([t({json:{write:!0}})],a.prototype,"leftTableSource",void 0),e([_("leftTableSource")],a.prototype,"readLeftTableSource",null),e([C("leftTableSource")],a.prototype,"castLeftTableSource",null),e([t({json:{write:!0}})],a.prototype,"rightTableSource",void 0),e([_("rightTableSource")],a.prototype,"readRightTableSource",null),e([C("rightTableSource")],a.prototype,"castRightTableSource",null),e([p(oe)],a.prototype,"joinType",void 0),a=I=e([c("esri.layers.support.source.JoinTableDataSource")],a);let F=null;function A(){return F||(F=z({types:E()})),F}let P=null;function E(){return P||(P={key:"type",base:null,typeMap:{"data-layer":m,"map-layer":f}}),P}const ie={key:"type",base:null,typeMap:{"join-table":a,"query-table":y,raster:b,table:v}};let m=N=class extends u{constructor(r){super(r),this.type="data-layer"}clone(){const{fields:r,dataSource:i}=this;return new N({fields:r,dataSource:i})}};e([p({dataLayer:"data-layer"})],m.prototype,"type",void 0),e([t({type:[ee],json:{write:!0}})],m.prototype,"fields",void 0),e([t({types:ie,json:{write:!0}})],m.prototype,"dataSource",void 0),m=N=e([c("esri.layers.support.source.DataLayerSource")],m),m.from=J(m);let w=class extends re(u){constructor(r){super(r),this.onFields=null,this.operator=null,this.searchTerm=null,this.searchType=null}};e([t({type:[String],json:{write:{enabled:!0,overridePolicy(){return{enabled:x(this.onFields)&&this.onFields.length>0}}}}})],w.prototype,"onFields",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"operator",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"searchTerm",void 0),e([t({type:String,json:{write:!0}})],w.prototype,"searchType",void 0),w=e([c("esri.rest.support.FullTextSearch")],w);const se=w;var B;const U=new R({upperLeft:"upper-left",lowerLeft:"lower-left"});let S=B=class extends u{constructor(r){super(r),this.extent=null,this.mode="view",this.originPosition="upper-left",this.tolerance=1}clone(){return new B(T({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))}};e([t({type:Q,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],S.prototype,"extent",void 0),e([t({type:["view","edit"],json:{write:!0}})],S.prototype,"mode",void 0),e([t({type:String,json:{read:U.read,write:U.write}})],S.prototype,"originPosition",void 0),e([t({type:Number,json:{write:{overridePolicy(){return{enabled:this.mode==="view"}}}}})],S.prototype,"tolerance",void 0),S=B=e([c("esri.rest.support.QuantizationParameters")],S);const ae=S;var L;const q=new R({count:"count",sum:"sum",min:"min",max:"max",avg:"avg",stddev:"stddev",var:"var",exceedslimit:"exceedslimit",percentile_cont:"percentile-continuous",percentile_disc:"percentile-discrete",EnvelopeAggregate:"envelope-aggregate",CentroidAggregate:"centroid-aggregate",ConvexHullAggregate:"convex-hull-aggregate"});let l=L=class extends u{constructor(r){super(r),this.maxPointCount=void 0,this.maxRecordCount=void 0,this.maxVertexCount=void 0,this.onStatisticField=null,this.outStatisticFieldName=null,this.statisticType=null,this.statisticParameters=null}writeStatisticParameters(r,i){this.statisticType!=="percentile-continuous"&&this.statisticType!=="percentile-discrete"||(i.statisticParameters=T(r))}clone(){return new L({maxPointCount:this.maxPointCount,maxRecordCount:this.maxRecordCount,maxVertexCount:this.maxVertexCount,onStatisticField:this.onStatisticField,outStatisticFieldName:this.outStatisticFieldName,statisticType:this.statisticType,statisticParameters:T(this.statisticParameters)})}};e([t({type:Number,json:{write:!0}})],l.prototype,"maxPointCount",void 0),e([t({type:Number,json:{write:!0}})],l.prototype,"maxRecordCount",void 0),e([t({type:Number,json:{write:!0}})],l.prototype,"maxVertexCount",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"onStatisticField",void 0),e([t({type:String,json:{write:!0}})],l.prototype,"outStatisticFieldName",void 0),e([t({type:String,json:{read:{source:"statisticType",reader:q.read},write:{target:"statisticType",writer:q.write}}})],l.prototype,"statisticType",void 0),e([t({type:Object})],l.prototype,"statisticParameters",void 0),e([g("statisticParameters")],l.prototype,"writeStatisticParameters",null),l=L=e([c("esri.rest.support.StatisticDefinition")],l);const ne=l;var j;const le=new R({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),pe=new R({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let o=j=class extends u{static from(r){return W(j,r)}constructor(r){super(r),this.aggregateIds=null,this.cacheHint=void 0,this.compactGeometryEnabled=!1,this.datumTransformation=null,this.defaultSpatialReferenceEnabled=!1,this.distance=void 0,this.dynamicDataSource=void 0,this.formatOf3DObjects=null,this.fullText=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=void 0,this.groupByFieldsForStatistics=null,this.having=null,this.historicMoment=null,this.maxAllowableOffset=void 0,this.maxRecordCountFactor=1,this.multipatchOption=null,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.outStatistics=null,this.parameterValues=null,this.pixelSize=null,this.quantizationParameters=null,this.rangeValues=null,this.relationParameter=null,this.resultType=null,this.returnCentroid=!1,this.returnDistinctValues=!1,this.returnExceededLimitFeatures=!0,this.returnGeometry=!1,this.returnQueryGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.sourceSpatialReference=null,this.spatialRelationship="intersects",this.start=void 0,this.sqlFormat=null,this.text=null,this.timeExtent=null,this.timeReferenceUnknownClient=!1,this.units=null,this.where=null}castDatumTransformation(r){return typeof r=="number"||typeof r=="object"?r:null}writeHistoricMoment(r,i){i.historicMoment=r&&r.getTime()}writeParameterValues(r,i){if(r){const s={};for(const n in r){const d=r[n];Array.isArray(d)?s[n]=d.map(h=>h instanceof Date?h.getTime():h):d instanceof Date?s[n]=d.getTime():s[n]=d}i.parameterValues=s}}writeStart(r,i){i.resultOffset=this.start,i.resultRecordCount=this.num||10,i.where="1=1"}writeWhere(r,i){i.where=r||"1=1"}clone(){return new j(T({aggregateIds:this.aggregateIds,cacheHint:this.cacheHint,compactGeometryEnabled:this.compactGeometryEnabled,datumTransformation:this.datumTransformation,defaultSpatialReferenceEnabled:this.defaultSpatialReferenceEnabled,distance:this.distance,fullText:this.fullText,gdbVersion:this.gdbVersion,geometry:this.geometry,geometryPrecision:this.geometryPrecision,groupByFieldsForStatistics:this.groupByFieldsForStatistics,having:this.having,historicMoment:x(this.historicMoment)?new Date(this.historicMoment.getTime()):null,maxAllowableOffset:this.maxAllowableOffset,maxRecordCountFactor:this.maxRecordCountFactor,multipatchOption:this.multipatchOption,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,outStatistics:this.outStatistics,parameterValues:this.parameterValues,pixelSize:this.pixelSize,quantizationParameters:this.quantizationParameters,rangeValues:this.rangeValues,relationParameter:this.relationParameter,resultType:this.resultType,returnDistinctValues:this.returnDistinctValues,returnGeometry:this.returnGeometry,returnCentroid:this.returnCentroid,returnExceededLimitFeatures:this.returnExceededLimitFeatures,returnQueryGeometry:this.returnQueryGeometry,returnM:this.returnM,returnZ:this.returnZ,dynamicDataSource:this.dynamicDataSource,sourceSpatialReference:this.sourceSpatialReference,spatialRelationship:this.spatialRelationship,start:this.start,sqlFormat:this.sqlFormat,text:this.text,timeExtent:this.timeExtent,timeReferenceUnknownClient:this.timeReferenceUnknownClient,units:this.units,where:this.where}))}};o.MAX_MAX_RECORD_COUNT_FACTOR=5,e([t({json:{write:!0}})],o.prototype,"aggregateIds",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"cacheHint",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"compactGeometryEnabled",void 0),e([t({json:{write:!0}})],o.prototype,"datumTransformation",void 0),e([C("datumTransformation")],o.prototype,"castDatumTransformation",null),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"defaultSpatialReferenceEnabled",void 0),e([t({type:Number,json:{write:{overridePolicy:r=>({enabled:r>0})}}})],o.prototype,"distance",void 0),e([t({type:m,json:{write:!0}})],o.prototype,"dynamicDataSource",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"formatOf3DObjects",void 0),e([t({type:[se],json:{write:{enabled:!0,overridePolicy(){return{enabled:x(this.fullText)&&this.fullText.length>0}}}}})],o.prototype,"fullText",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"gdbVersion",void 0),e([t({types:K,json:{read:Y,write:!0}})],o.prototype,"geometry",void 0),e([t({type:Number,json:{write:!0}})],o.prototype,"geometryPrecision",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"groupByFieldsForStatistics",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"having",void 0),e([t({type:Date})],o.prototype,"historicMoment",void 0),e([g("historicMoment")],o.prototype,"writeHistoricMoment",null),e([t({type:Number,json:{write:!0}})],o.prototype,"maxAllowableOffset",void 0),e([t({type:Number,cast:r=>r<1?1:r>j.MAX_MAX_RECORD_COUNT_FACTOR?j.MAX_MAX_RECORD_COUNT_FACTOR:r,json:{write:{overridePolicy:r=>({enabled:r>1})}}})],o.prototype,"maxRecordCountFactor",void 0),e([t({type:["xyFootprint"],json:{write:!0}})],o.prototype,"multipatchOption",void 0),e([t({type:Number,json:{read:{source:"resultRecordCount"}}})],o.prototype,"num",void 0),e([t({json:{write:!0}})],o.prototype,"objectIds",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"orderByFields",void 0),e([t({type:[String],json:{write:!0}})],o.prototype,"outFields",void 0),e([t({type:$,json:{name:"outSR",write:!0}})],o.prototype,"outSpatialReference",void 0),e([t({type:[ne],json:{write:{enabled:!0,overridePolicy(){return{enabled:x(this.outStatistics)&&this.outStatistics.length>0}}}}})],o.prototype,"outStatistics",void 0),e([t({json:{write:!0}})],o.prototype,"parameterValues",void 0),e([g("parameterValues")],o.prototype,"writeParameterValues",null),e([t({type:X,json:{write:!0}})],o.prototype,"pixelSize",void 0),e([t({type:ae,json:{write:!0}})],o.prototype,"quantizationParameters",void 0),e([t({type:[Object],json:{write:!0}})],o.prototype,"rangeValues",void 0),e([t({type:String,json:{read:{source:"relationParam"},write:{target:"relationParam",overridePolicy(){return{enabled:this.spatialRelationship==="relation"}}}}})],o.prototype,"relationParameter",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"resultType",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnCentroid",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnDistinctValues",void 0),e([t({type:Boolean,json:{default:!0,write:!0}})],o.prototype,"returnExceededLimitFeatures",void 0),e([t({type:Boolean,json:{write:!0}})],o.prototype,"returnGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnQueryGeometry",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"returnM",void 0),e([t({type:Boolean,json:{write:{overridePolicy:r=>({enabled:r})}}})],o.prototype,"returnZ",void 0),e([t({type:$,json:{write:!0}})],o.prototype,"sourceSpatialReference",void 0),e([p(le,{ignoreUnknown:!1,name:"spatialRel"})],o.prototype,"spatialRelationship",void 0),e([t({type:Number,json:{read:{source:"resultOffset"}}})],o.prototype,"start",void 0),e([g("start"),g("num")],o.prototype,"writeStart",null),e([t({type:String,json:{write:!0}})],o.prototype,"sqlFormat",void 0),e([t({type:String,json:{write:!0}})],o.prototype,"text",void 0),e([t({type:H,json:{write:!0}})],o.prototype,"timeExtent",void 0),e([t({type:Boolean,json:{default:!1,write:!0}})],o.prototype,"timeReferenceUnknownClient",void 0),e([p(pe,{ignoreUnknown:!1}),t({json:{write:{overridePolicy(r){return{enabled:!!r&&this.distance!=null&&this.distance>0}}}}})],o.prototype,"units",void 0),e([t({type:String,json:{write:{overridePolicy(r){return{enabled:r!=null||this.start!=null&&this.start>0}}}}})],o.prototype,"where",void 0),e([g("where")],o.prototype,"writeWhere",null),o=j=e([c("esri.rest.support.Query")],o);const je=o;export{m as K,ae as a,f as c,ne as m,je as x};
