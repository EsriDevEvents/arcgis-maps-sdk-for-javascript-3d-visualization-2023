import{C as S,e as f,y as u,l as j,a as F}from"./jsonMap-ffa742d3.js";import{n as P}from"./geometry-7d866d3f.js";import{g as T}from"./Graphic-5dcfa25e.js";import{p as q}from"./string-53224faa.js";import{r as h,e as J}from"./typedArrayUtil-bf9f210a.js";import"./ArrayPool-b51874dd.js";import{o as w,r as G,f as x}from"./Extent-22afa84a.js";import{v as O,y as d}from"./jsonUtils-36bf3d33.js";import{y as z}from"./Field-945b2973.js";var v;const R=new S({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryEnvelope:"extent",mesh:"mesh","":null});let m=v=class extends j{constructor(t){super(t),this.displayFieldName=null,this.exceededTransferLimit=!1,this.features=[],this.fields=null,this.geometryType=null,this.hasM=!1,this.hasZ=!1,this.queryGeometry=null,this.spatialReference=null}readFeatures(t,o){var i;const r=x.fromJSON(o.spatialReference),e=[];for(let s=0;s<t.length;s++){const a=t[s],l=T.fromJSON(a),y=a.geometry&&a.geometry.spatialReference;h(l.geometry)&&!y&&(l.geometry.spatialReference=r);const n=a.aggregateGeometries,p=l.aggregateGeometries;if(n&&h(p))for(const g in p){const c=p[g],N=(i=n[g])==null?void 0:i.spatialReference;h(c)&&!N&&(c.spatialReference=r)}e.push(l)}return e}writeGeometryType(t,o,r,e){if(t)return void R.write(t,o,r,e);const{features:i}=this;if(i){for(const s of i)if(s&&h(s.geometry))return void R.write(s.geometry.type,o,r,e)}}readQueryGeometry(t,o){if(!t)return null;const r=!!t.spatialReference,e=O(t);return e&&!r&&o.spatialReference&&(e.spatialReference=x.fromJSON(o.spatialReference)),e}writeSpatialReference(t,o){if(t)return void(o.spatialReference=t.toJSON());const{features:r}=this;if(r){for(const e of r)if(e&&h(e.geometry)&&e.geometry.spatialReference)return void(o.spatialReference=e.geometry.spatialReference.toJSON())}}clone(){return new v(this.cloneProperties())}cloneProperties(){return q({displayFieldName:this.displayFieldName,exceededTransferLimit:this.exceededTransferLimit,features:this.features,fields:this.fields,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,queryGeometry:this.queryGeometry,spatialReference:this.spatialReference,transform:this.transform})}toJSON(t){const o=this.write();if(o.features&&Array.isArray(t)&&t.length>0)for(let r=0;r<o.features.length;r++){const e=o.features[r];if(e.geometry){const i=t&&t[r];e.geometry=i&&i.toJSON()||e.geometry}}return o}quantize(t){const{scale:[o,r],translate:[e,i]}=t,s=n=>Math.round((n-e)/o),a=n=>Math.round((i-n)/r),l=this.features,y=this._getQuantizationFunction(this.geometryType,s,a);for(let n=0,p=l.length;n<p;n++)y!=null&&y(J(l[n].geometry))||(l.splice(n,1),n--,p--);return this.transform=t,this}unquantize(){const{geometryType:t,features:o,transform:r}=this;if(!r)return this;const{translate:[e,i],scale:[s,a]}=r,l=p=>p*s+e,y=p=>i-p*a,n=this._getHydrationFunction(t,l,y);for(const{geometry:p}of o)h(p)&&n&&n(p);return this.transform=null,this}_quantizePoints(t,o,r){let e,i;const s=[];for(let a=0,l=t.length;a<l;a++){const y=t[a];if(a>0){const n=o(y[0]),p=r(y[1]);n===e&&p===i||(s.push([n-e,p-i]),e=n,i=p)}else e=o(y[0]),i=r(y[1]),s.push([e,i])}return s.length>0?s:null}_getQuantizationFunction(t,o,r){return t==="point"?e=>(e.x=o(e.x),e.y=r(e.y),e):t==="polyline"||t==="polygon"?e=>{const i=d(e)?e.rings:e.paths,s=[];for(let a=0,l=i.length;a<l;a++){const y=i[a],n=this._quantizePoints(y,o,r);n&&s.push(n)}return s.length>0?(d(e)?e.rings=s:e.paths=s,e):null}:t==="multipoint"?e=>{const i=this._quantizePoints(e.points,o,r);return i&&i.length>0?(e.points=i,e):null}:t==="extent"?e=>e:null}_getHydrationFunction(t,o,r){return t==="point"?e=>{e.x=o(e.x),e.y=r(e.y)}:t==="polyline"||t==="polygon"?e=>{const i=d(e)?e.rings:e.paths;let s,a;for(let l=0,y=i.length;l<y;l++){const n=i[l];for(let p=0,g=n.length;p<g;p++){const c=n[p];p>0?(s+=c[0],a+=c[1]):(s=c[0],a=c[1]),c[0]=o(s),c[1]=r(a)}}}:t==="extent"?e=>{e.xmin=o(e.xmin),e.ymin=r(e.ymin),e.xmax=o(e.xmax),e.ymax=r(e.ymax)}:t==="multipoint"?e=>{const i=e.points;let s,a;for(let l=0,y=i.length;l<y;l++){const n=i[l];l>0?(s+=n[0],a+=n[1]):(s=n[0],a=n[1]),n[0]=o(s),n[1]=r(a)}}:null}};f([u({type:String,json:{write:!0}})],m.prototype,"displayFieldName",void 0),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"exceededTransferLimit",void 0),f([u({type:[T],json:{write:!0}})],m.prototype,"features",void 0),f([w("features")],m.prototype,"readFeatures",null),f([u({type:[z],json:{write:!0}})],m.prototype,"fields",void 0),f([u({type:["point","multipoint","polyline","polygon","extent","mesh"],json:{read:{reader:R.read}}})],m.prototype,"geometryType",void 0),f([G("geometryType")],m.prototype,"writeGeometryType",null),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasM",void 0),f([u({type:Boolean,json:{write:{overridePolicy:t=>({enabled:t})}}})],m.prototype,"hasZ",void 0),f([u({types:P,json:{write:!0}})],m.prototype,"queryGeometry",void 0),f([w("queryGeometry")],m.prototype,"readQueryGeometry",null),f([u({type:x,json:{write:!0}})],m.prototype,"spatialReference",void 0),f([G("spatialReference")],m.prototype,"writeSpatialReference",null),f([u({json:{write:!0}})],m.prototype,"transform",void 0),m=v=f([F("esri.rest.support.FeatureSet")],m),m.prototype.toJSON.isDefaultToJSON=!0;const H=m;export{H as x};
