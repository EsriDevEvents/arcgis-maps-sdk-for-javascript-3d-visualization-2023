import{t as y}from"./typedArrayUtil-bf9f210a.js";import{p as v,w as e,e as n}from"./Extent-22afa84a.js";import{m as o,v as i,a as t}from"./Polyline-82cb63bc.js";function m(r){return r.xmin!==void 0&&r.ymin!==void 0&&r.xmax!==void 0&&r.ymax!==void 0}function u(r){return r.points!==void 0}function s(r){return r.x!==void 0&&r.y!==void 0}function l(r){return r.paths!==void 0}function f(r){return r.rings!==void 0}function $(r){return y(r)?null:r instanceof v?r:s(r)?e.fromJSON(r):l(r)?o.fromJSON(r):f(r)?i.fromJSON(r):u(r)?t.fromJSON(r):m(r)?n.fromJSON(r):null}function x(r){return r?s(r)?"esriGeometryPoint":l(r)?"esriGeometryPolyline":f(r)?"esriGeometryPolygon":m(r)?"esriGeometryEnvelope":u(r)?"esriGeometryMultipoint":null:null}const a={esriGeometryPoint:e,esriGeometryPolyline:o,esriGeometryPolygon:i,esriGeometryEnvelope:n,esriGeometryMultipoint:t};function P(r){return r&&a[r]||null}export{x as c,P as d,l as f,u as l,s,m as u,$ as v,f as y};