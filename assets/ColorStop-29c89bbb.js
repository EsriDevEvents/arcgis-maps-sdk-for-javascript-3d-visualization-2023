import{e as t,y as r,l as n,a as p}from"./jsonMap-ffa742d3.js";import{T as c}from"./ArrayPool-b51874dd.js";import"./typedArrayUtil-bf9f210a.js";import{l as v}from"./Color-7b46c33a.js";import{r as m}from"./Extent-22afa84a.js";var s;let l=s=class extends n{constructor(){super(...arguments),this.title=null}clone(){return new s({title:this.title})}};t([r({type:String,json:{write:!0}})],l.prototype,"title",void 0),l=s=t([p("esri.renderers.support.LegendOptions")],l);var i;let e=i=class extends n{constructor(o){super(o),this.color=null,this.label=null,this.value=null}writeValue(o,a,u){a[u]=o??0}clone(){return new i({color:this.color&&this.color.clone(),label:this.label,value:this.value})}};t([r({type:v,json:{type:[c],write:!0}})],e.prototype,"color",void 0),t([r({type:String,json:{write:!0}})],e.prototype,"label",void 0),t([r({type:Number,json:{write:{writerEnsuresNonNull:!0}}})],e.prototype,"value",void 0),t([m("value")],e.prototype,"writeValue",null),e=i=t([p("esri.renderers.visualVariables.support.ColorStop")],e);const f=e;export{f as a,l as p};