import{a as r}from"./ShaderBuilder-be7ca791.js";import{O as e}from"./VertexAttribute-15d1866a.js";function v(o,d){d.hasVertexColors?(o.attributes.add(e.COLOR,"vec4"),o.varyings.add("vColor","vec4"),o.vertex.code.add(r`void forwardVertexColor() { vColor = color; }`),o.vertex.code.add(r`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):o.vertex.code.add(r`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}export{v as e};
