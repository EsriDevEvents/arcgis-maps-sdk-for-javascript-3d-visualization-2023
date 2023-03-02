import{C as g,e,y as r,v as f,a as m,l as v}from"./jsonMap-ffa742d3.js";import{a as d}from"./Error-5cdd6e0a.js";import{r as x,c as y}from"./typedArrayUtil-bf9f210a.js";import{b as O}from"./ArrayPool-b51874dd.js";import{p as S}from"./string-53224faa.js";import{M as q,f as b,e as w}from"./Extent-22afa84a.js";var c;const $=new g({avgRating:"avg-rating",numRatings:"num-ratings",numComments:"num-comments",numViews:"num-views"});let a=c=class extends f{constructor(t){super(t),this.categories=null,this.disableExtraQuery=!1,this.extent=null,this.filter=null,this.num=10,this.query=null,this.sortField=null,this.start=1}get sortOrder(){return this._get("sortOrder")||"asc"}set sortOrder(t){t!=="asc"&&t!=="desc"||this._set("sortOrder",t)}clone(){return new c({categories:this.categories?S(this.categories):null,disableExtraQuery:this.disableExtraQuery,extent:this.extent?this.extent.clone():null,filter:this.filter,num:this.num,query:this.query,sortField:this.sortField,sortOrder:this.sortOrder,start:this.start})}toRequestOptions(t,i){let o=[];this.categories&&(o=this.categories.map(p=>Array.isArray(p)?JSON.stringify(p):p));let n="";if(this.extent){const p=q(this.extent,b.WGS84);x(p)&&(n=`${p.xmin},${p.ymin},${p.xmax},${p.ymax}`)}let u=this.query;!this.disableExtraQuery&&t.extraQuery&&(u="("+u+")"+t.extraQuery);const l={categories:o,bbox:n,q:u,filter:this.filter,num:this.num,sortField:null,sortOrder:null,start:this.start};return this.sortField&&(l.sortField=this.sortField.split(",").map(p=>$.toJSON(p.trim())).join(","),l.sortOrder=this.sortOrder),{query:{...i,...l}}}};e([r()],a.prototype,"categories",void 0),e([r()],a.prototype,"disableExtraQuery",void 0),e([r({type:w})],a.prototype,"extent",void 0),e([r()],a.prototype,"filter",void 0),e([r()],a.prototype,"num",void 0),e([r()],a.prototype,"query",void 0),e([r()],a.prototype,"sortField",void 0),e([r()],a.prototype,"sortOrder",null),e([r()],a.prototype,"start",void 0),a=c=e([m("esri.portal.PortalQueryParams")],a);const h=a;let s=class extends v{constructor(t){super(t),this.access=null,this.created=null,this.description=null,this.id=null,this.isInvitationOnly=!1,this.modified=null,this.owner=null,this.portal=null,this.snippet=null,this.sortField=null,this.sortOrder=null,this.tags=null,this.title=null}get thumbnailUrl(){var o;const t=this.url,i=this.thumbnail;return t&&i&&this.portal?(o=this.portal)==null?void 0:o.normalizeUrl(`${t}/info/${i}?f=json`):null}get url(){const t=this.get("portal.restUrl");return t?t+"/community/groups/"+this.id:null}fetchCategorySchema(t){return y(this.portal).request(this.url+"/categorySchema",t).then(i=>{const o=i.categorySchema||[];return o.some(n=>n.source==="contentCategorySetsGroupQuery.LivingAtlas")?this._fetchCategorySchemaSet("LivingAtlas",t):o})}fetchMembers(t){return y(this.portal).request(this.url+"/users",t)}getThumbnailUrl(t){let i=this.thumbnailUrl;return i&&t&&(i+=`&w=${t}`),i}toJSON(){throw new d("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented")}queryItems(t,i){let o=O(h,t);const n=y(this.portal);return parseFloat(n.currentVersion)>5?(o=o||new h,n.queryPortal(`/content/groups/${this.id}/search`,o,"PortalItem",i)):(o=o?o.clone():new h,o.query="group:"+this.id+(o.query?" "+o.query:""),n.queryItems(o,i))}_fetchCategorySchemaSet(t,i){const o=y(this.portal);return o.fetchSelf(o.authMode,!0,i).then(n=>{const u=n.contentCategorySetsGroupQuery;if(u){const l=new h;return l.disableExtraQuery=!0,l.num=1,l.query=u,o.queryGroups(l,i)}throw new d("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found")}).then(n=>{if(n.total){const u=n.results[0],l=new h;return l.num=1,l.query=`typekeywords:"${t}"`,u.queryItems(l,i)}throw new d("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found")}).then(n=>n.total?n.results[0].fetchData("json",i).then(u=>{const l=u&&u.categorySchema;return l&&l.length?l:[]}):[])}};e([r()],s.prototype,"access",void 0),e([r({type:Date})],s.prototype,"created",void 0),e([r()],s.prototype,"description",void 0),e([r()],s.prototype,"id",void 0),e([r()],s.prototype,"isInvitationOnly",void 0),e([r({type:Date})],s.prototype,"modified",void 0),e([r()],s.prototype,"owner",void 0),e([r()],s.prototype,"portal",void 0),e([r()],s.prototype,"snippet",void 0),e([r()],s.prototype,"sortField",void 0),e([r()],s.prototype,"sortOrder",void 0),e([r()],s.prototype,"tags",void 0),e([r()],s.prototype,"thumbnail",void 0),e([r({readOnly:!0})],s.prototype,"thumbnailUrl",null),e([r()],s.prototype,"title",void 0),e([r({readOnly:!0})],s.prototype,"url",null),s=e([m("esri.portal.PortalGroup")],s);const Q=s,I=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"}));export{I as P,h as d,Q as p};
