import"./geometry-7d866d3f.js";import{r as y}from"./typedArrayUtil-bf9f210a.js";import{e as x,$ as f}from"./Extent-22afa84a.js";function u(n,r,e,i=new x){let a=0;if(e.type==="2d")a=r*(e.resolution??0);else if(e.type==="3d"){const o=e.overlayPixelSizeInMapUnits(n),t=e.basemapSpatialReference;a=y(t)&&!t.equals(e.spatialReference)?f(t)/f(e.spatialReference):r*o}const m=n.x-a,p=n.y-a,s=n.x+a,l=n.y+a,{spatialReference:c}=e;return i.xmin=Math.min(m,s),i.ymin=Math.min(p,l),i.xmax=Math.max(m,s),i.ymax=Math.max(p,l),i.spatialReference=c,i}new x;export{u as a};