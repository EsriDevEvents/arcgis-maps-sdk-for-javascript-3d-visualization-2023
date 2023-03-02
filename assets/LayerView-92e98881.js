import{v as a,e as r,y as i,a as o}from"./jsonMap-ffa742d3.js";import{n as p}from"./Evented-686173eb.js";import{a as d}from"./HandleOwner-6217a02e.js";import{s as u}from"./Identifiable-e4f9b04c.js";import{s as y}from"./Error-5cdd6e0a.js";import{l}from"./typedArrayUtil-bf9f210a.js";import{m as h}from"./Promise-755e47e5.js";import"./ArrayPool-b51874dd.js";let t=class extends d(u(h(p.EventedMixin(a)))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch(e=>{if(e.name!=="layerview:create-error"){const s=this.layer&&this.layer.id||"no id",n=this.layer&&this.layer.title||"no title";y.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${n}', id: '${s}')`,e)}})}get fullOpacity(){return l(this.get("layer.opacity"),1)*l(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&((e=this.layer)==null?void 0:e.legendEnabled)===!0}get updating(){var e;return!(!((e=this.updatingHandles)!=null&&e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return((e=this.layer)==null?void 0:e.visible)===!0}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,s,n;return this.visible&&((e=this.layer)==null?void 0:e.loaded)&&!((s=this.parent)!=null&&s.suspended)&&((n=this.view)==null?void 0:n.ready)||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},s=this;return s.view&&s.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};r([i()],t.prototype,"fullOpacity",null),r([i()],t.prototype,"layer",void 0),r([i()],t.prototype,"parent",void 0),r([i({readOnly:!0})],t.prototype,"suspended",null),r([i({readOnly:!0})],t.prototype,"suspendInfo",null),r([i({readOnly:!0})],t.prototype,"legendEnabled",null),r([i({type:Boolean,readOnly:!0})],t.prototype,"updating",null),r([i({readOnly:!0})],t.prototype,"updatingProgress",null),r([i()],t.prototype,"visible",null),r([i()],t.prototype,"view",void 0),t=r([o("esri.views.layers.LayerView")],t);const I=t;export{I as u};