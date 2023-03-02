import{n as ze}from"./compilerUtils-7bf6df9e.js";import{b as h,g as Me,m as Le,a as Be,c as Fe,r as Y,s as Se}from"./PhysicallyBasedRendering.glsl-edd81ba9.js";import{u as je,a as $,r as xe}from"./Texture2DPassUniform-268e8d2d.js";import{b as A,n as Q,a as l}from"./ShaderBuilder-be7ca791.js";import{h as b,t as c,r as _,o as W}from"./typedArrayUtil-bf9f210a.js";import{i as ye,g as Te}from"./jsonMap-ffa742d3.js";import{r as H}from"./vec2-848c6cf0.js";import{E as ee,f as We,n as Re,x as R}from"./VisualVariablePassParameters-f892560d.js";import{_ as te}from"./preload-helper-41c905a7.js";import{E as j,N as ie,S as ne,T as C,M as J,P as N,G as Z,L as Oe,D as Ce,Y as we,V as Pe}from"./enums-fc527c7c.js";import{a as De,E as Ue}from"./Texture-d2fa6cd8.js";import{u as qe}from"./SSAOBlur.glsl-c56632c0.js";import{n as X}from"./basicInterfaces-7449a8bf.js";import{h as Ye,p as $e}from"./SSAO.glsl-2c6533cd.js";import{n as Ae}from"./vec2f64-70cfd09e.js";import{t as He}from"./PiUtils.glsl-49462ceb.js";import{o as w}from"./FloatPassUniform-0426669b.js";import{a as Je,h as f}from"./mathUtils-ae09f98b.js";import{n as g,r as U,o as Ne,a as z,j as Ze,g as V,u as Xe,t as K,A as Ve}from"./vec3-8818fe1c.js";let re=class{constructor(e,i){this._module=e,this._loadModule=i}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},se=class{constructor(e,i,n){this.release=n,this.initializeConfiguration(e,i),this._configuration=i.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=b(this._program),this._pipeline=this._configuration=null}reload(e){b(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,i=null,n){e.setPipelineState(this.getPipelineState(i,n))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return j.TRIANGLES}getPipelineState(e,i){return this._pipeline}initializeConfiguration(e,i){}},ae=class{constructor(e,i,n){this._context=e,this._locations=n,this._textures=new Map,this._freeTextureUnits=new ye({deallocator:null}),this._glProgram=e.programCache.acquire(i.generate("vertex"),i.generate("fragment"),n),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=i.generateBind(A.Pass,this),this.bindDraw=i.generateBind(A.Draw,this),this._fragmentUniforms=De()?i.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get compiled(){return this._glProgram.compiled}setUniform1b(e,i){this._glProgram.setUniform1i(e,i?1:0)}setUniform1i(e,i){this._glProgram.setUniform1i(e,i)}setUniform1f(e,i){this._glProgram.setUniform1f(e,i)}setUniform2fv(e,i){this._glProgram.setUniform2fv(e,i)}setUniform3fv(e,i){this._glProgram.setUniform3fv(e,i)}setUniform4fv(e,i){this._glProgram.setUniform4fv(e,i)}setUniformMatrix3fv(e,i){this._glProgram.setUniformMatrix3fv(e,i)}setUniformMatrix4fv(e,i){this._glProgram.setUniformMatrix4fv(e,i)}setUniform1fv(e,i){this._glProgram.setUniform1fv(e,i)}setUniform1iv(e,i){this._glProgram.setUniform1iv(e,i)}setUniform2iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform3iv(e,i){this._glProgram.setUniform3iv(e,i)}setUniform4iv(e,i){this._glProgram.setUniform4iv(e,i)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,i){if(c(i)||i.glName==null){const r=this._textures.get(e);return r&&(this._context.bindTexture(null,r.unit),this._freeTextureUnit(r),this._textures.delete(e)),null}let n=this._textures.get(e);return n==null?(n=this._allocTextureUnit(i),this._textures.set(e,n)):n.texture=i,this._context.useProgram(this),this.setUniform1i(e,n.unit),this._context.bindTexture(i,n.unit),n.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach((e,i)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(i,e.unit)}),_(this._fragmentUniforms)&&this._fragmentUniforms.forEach(e=>{e.type!=="sampler2D"&&e.type!=="samplerCube"||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)})}_allocTextureUnit(e){return{texture:e,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}};function ai(t,e,i=C.ADD,n=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function oi(t,e,i,n,r=C.ADD,s=C.ADD,a=[0,0,0,0]){return{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:r,opAlpha:s,color:{r:a[0],g:a[1],b:a[2],a:a[3]}}}const Ke={face:ie.BACK,mode:ne.CCW},ke={face:ie.FRONT,mode:ne.CCW},li=t=>t===X.Back?Ke:t===X.Front?ke:null,hi={zNear:0,zFar:1},oe={r:!0,g:!0,b:!0,a:!0};function Qe(t){return ot.intern(t)}function et(t){return lt.intern(t)}function tt(t){return ht.intern(t)}function it(t){return ct.intern(t)}function nt(t){return dt.intern(t)}function rt(t){return ut.intern(t)}function st(t){return mt.intern(t)}function at(t){return gt.intern(t)}function le(t){return pt.intern(t)}let u=class{constructor(e,i){this._makeKey=e,this._makeRef=i,this._interns=new Map}intern(e){if(!e)return null;const i=this._makeKey(e),n=this._interns;return n.has(i)||n.set(i,this._makeRef(e)),n.get(i)??null}};function m(t){return"["+t.join(",")+"]"}const ot=new u(he,t=>({__tag:"Blending",...t}));function he(t){return t?m([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const lt=new u(ce,t=>({__tag:"Culling",...t}));function ce(t){return t?m([t.face,t.mode]):null}const ht=new u(de,t=>({__tag:"PolygonOffset",...t}));function de(t){return t?m([t.factor,t.units]):null}const ct=new u(ue,t=>({__tag:"DepthTest",...t}));function ue(t){return t?m([t.func]):null}const dt=new u(me,t=>({__tag:"StencilTest",...t}));function me(t){return t?m([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const ut=new u(ge,t=>({__tag:"DepthWrite",...t}));function ge(t){return t?m([t.zNear,t.zFar]):null}const mt=new u(pe,t=>({__tag:"ColorWrite",...t}));function pe(t){return t?m([t.r,t.g,t.b,t.a]):null}const gt=new u(fe,t=>({__tag:"StencilWrite",...t}));function fe(t){return t?m([t.mask]):null}const pt=new u(ft,t=>({blending:Qe(t.blending),culling:et(t.culling),polygonOffset:tt(t.polygonOffset),depthTest:it(t.depthTest),stencilTest:nt(t.stencilTest),depthWrite:rt(t.depthWrite),colorWrite:st(t.colorWrite),stencilWrite:at(t.stencilWrite)}));function ft(t){return t?m([he(t.blending),ce(t.culling),de(t.polygonOffset),ue(t.depthTest),me(t.stencilTest),ge(t.depthWrite),pe(t.colorWrite),fe(t.stencilWrite)]):null}let di=class{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,i,n,r){return(n||e!==i)&&(r(e),this._pipelineInvalid=!0),e}};class _t{constructor(e=g()){this.intensity=e}}let bt=class{constructor(e=g(),i=U(.57735,.57735,.57735)){this.intensity=e,this.direction=i}},P=class{constructor(e=g(),i=U(.57735,.57735,.57735),n=!0,r=1,s=1){this.intensity=e,this.direction=i,this.castShadows=n,this.specularStrength=r,this.environmentStrength=s}},_e=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function vt(t,e,i){(i=i||t).length=t.length;for(let n=0;n<t.length;n++)i[n]=t[n]*e[n];return i}function O(t,e,i){(i=i||t).length=t.length;for(let n=0;n<t.length;n++)i[n]=t[n]*e;return i}function G(t,e,i){(i=i||t).length=t.length;for(let n=0;n<t.length;n++)i[n]=t[n]+e[n];return i}function be(t){return(t+1)*(t+1)}function Et(t){return Je(Math.floor(Math.sqrt(t)-1),0,2)}function ve(t,e,i){const n=t[0],r=t[1],s=t[2],a=i||[];return a.length=be(e),e>=0&&(a[0]=.28209479177),e>=1&&(a[1]=.4886025119*n,a[2]=.4886025119*s,a[3]=.4886025119*r),e>=2&&(a[4]=1.09254843059*n*r,a[5]=1.09254843059*r*s,a[6]=.31539156525*(3*s*s-1),a[7]=1.09254843059*n*s,a[8]=.54627421529*(n*n-r*r)),a}function Gt(t,e){const i=be(t),n=e||{r:[],g:[],b:[]};n.r.length=n.g.length=n.b.length=i;for(let r=0;r<i;r++)n.r[r]=n.g[r]=n.b[r]=0;return n}function It(t,e){const i=Et(e.r.length);for(const n of t)Ze(D,n.direction),ve(D,i,d),vt(d,x),O(d,n.intensity[0],E),G(e.r,E),O(d,n.intensity[1],E),G(e.g,E),O(d,n.intensity[2],E),G(e.b,E);return e}function zt(t,e){ve(D,0,d);for(const i of t)e.r[0]+=d[0]*x[0]*i.intensity[0]*4*Math.PI,e.g[0]+=d[0]*x[0]*i.intensity[1]*4*Math.PI,e.b[0]+=d[0]*x[0]*i.intensity[2]*4*Math.PI;return e}function Mt(t,e,i,n){Gt(e,n),Ne(i.intensity,0,0,0);let r=!1;const s=Lt,a=Bt,p=Ft;s.length=0,a.length=0,p.length=0;for(const o of t)o instanceof P&&!r?(z(i.direction,o.direction),z(i.intensity,o.intensity),i.specularStrength=o.specularStrength,i.environmentStrength=o.environmentStrength,i.castShadows=o.castShadows,r=!0):o instanceof P||o instanceof bt?s.push(o):o instanceof _t?a.push(o):o instanceof _e&&p.push(o);It(s,n),zt(a,n);for(const o of p)G(n.r,o.r),G(n.g,o.g),G(n.b,o.b)}const Lt=[],Bt=[],Ft=[],d=[0],E=[0],D=g(),x=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class k{constructor(){this.color=g(),this.intensity=1}}let St=class{constructor(){this.direction=g(),this.ambient=new k,this.diffuse=new k}};const Ee=.4;class _i{constructor(){this._shOrder=2,this._legacy=new St,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new _e,this._mainLight=new P(g(),U(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(e){Mt(e,this._shOrder,this._mainLight,this._sphericalHarmonics),z(this._legacy.direction,this._mainLight.direction);const i=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*i,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*i,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*i,V(this._legacy.diffuse.color,this._mainLight.intensity,i),z(S,this._legacy.diffuse.color),V(S,S,Ee*this.globalFactor),Xe(this._legacy.ambient.color,this._legacy.ambient.color,S)}copyFrom(e){this._sphericalHarmonics.r=Array.from(e.sh.r),this._sphericalHarmonics.g=Array.from(e.sh.g),this._sphericalHarmonics.b=Array.from(e.sh.b),this._mainLight.direction=K(e.mainLight.direction),this._mainLight.intensity=K(e.mainLight.intensity),this._mainLight.castShadows=e.mainLight.castShadows,this._mainLight.specularStrength=e.mainLight.specularStrength,this._mainLight.environmentStrength=e.mainLight.environmentStrength,this.globalFactor=e.globalFactor,this.noonFactor=e.noonFactor}lerpLighting(e,i,n){if(Ve(this._mainLight.intensity,e.mainLight.intensity,i.mainLight.intensity,n),this._mainLight.environmentStrength=f(e.mainLight.environmentStrength,i.mainLight.environmentStrength,n),this._mainLight.specularStrength=f(e.mainLight.specularStrength,i.mainLight.specularStrength,n),z(this._mainLight.direction,i.mainLight.direction),this._mainLight.castShadows=i.mainLight.castShadows,this.globalFactor=f(e.globalFactor,i.globalFactor,n),this.noonFactor=f(e.noonFactor,i.noonFactor,n),e.sh.r.length===i.sh.r.length)for(let r=0;r<i.sh.r.length;r++)this._sphericalHarmonics.r[r]=f(e.sh.r[r],i.sh.r[r],n),this._sphericalHarmonics.g[r]=f(e.sh.g[r],i.sh.g[r],n),this._sphericalHarmonics.b[r]=f(e.sh.b[r],i.sh.b[r],n);else for(let r=0;r<i.sh.r.length;r++)this._sphericalHarmonics.r[r]=i.sh.r[r],this._sphericalHarmonics.g[r]=i.sh.g[r],this._sphericalHarmonics.b[r]=i.sh.b[r]}}const S=g();let Ge=class Ie extends se{initializeProgram(e){return new ae(e.rctx,Ie.shader.get().build(),ee)}initializePipeline(){return le({colorWrite:oe})}};Ge.shader=new re(qe,()=>te(()=>import("./SSAOBlur.glsl-fd956272.js"),["./SSAOBlur.glsl-fd956272.js","./vec3-8818fe1c.js","./common-d0b63c2d.js","./ShaderBuilder-be7ca791.js","./typedArrayUtil-bf9f210a.js","./Error-5cdd6e0a.js","./string-53224faa.js","./VertexAttribute-15d1866a.js","./vec2-848c6cf0.js","./vec2f64-70cfd09e.js","./Texture2DPassUniform-268e8d2d.js","./SSAOBlur.glsl-c56632c0.js","./ScreenSpacePass.glsl-44cc0c5e.js","./ReadLinearDepth.glsl-0e6f5c47.js","./RgbaFloatEncoding.glsl-67199794.js","./Texture2DDrawUniform-e4341b84.js","./FloatPassUniform-0426669b.js"],import.meta.url));const jt="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class y extends se{initializeProgram(e){return new ae(e.rctx,y.shader.get().build(),ee)}initializePipeline(){return le({colorWrite:oe})}}y.shader=new re(Ye,()=>te(()=>import("./SSAO.glsl-3f27baa4.js"),["./SSAO.glsl-3f27baa4.js","./vec2-848c6cf0.js","./common-d0b63c2d.js","./vec2f64-70cfd09e.js","./ShaderBuilder-be7ca791.js","./typedArrayUtil-bf9f210a.js","./Error-5cdd6e0a.js","./string-53224faa.js","./VertexAttribute-15d1866a.js","./vec4-c7a19f0d.js","./vec4f64-6d0e93be.js","./Texture2DPassUniform-268e8d2d.js","./SSAO.glsl-2c6533cd.js","./ScreenSpacePass.glsl-44cc0c5e.js","./ReadLinearDepth.glsl-0e6f5c47.js","./RgbaFloatEncoding.glsl-67199794.js","./Float4PassUniform-9354414b.js","./FloatPassUniform-0426669b.js"],import.meta.url));class xt extends Q{constructor(){super(...arguments),this.projScale=1}}class yt extends xt{constructor(){super(...arguments),this.intensity=1}}class Tt extends Q{}class Wt extends Tt{constructor(){super(...arguments),this.blurSize=Ae()}}const I=2;class bi{constructor(e,i,n,r){this._view=e,this._techniqueRepository=i,this._rctx=n,this._requestRender=r,this._quadVAO=null,this._passParameters=new yt,this._drawParameters=new Wt}dispose(){this.enabled=!1,this._quadVAO=b(this._quadVAO)}disposeOffscreenBuffers(){W(this._ssaoFBO,e=>e.resize(0,0)),W(this._blur0FBO,e=>e.resize(0,0)),W(this._blur1FBO,e=>e.resize(0,0))}set enabled(e){e?this._enable():this._disable()}get enabled(){return _(this._enableTime)}get active(){return this.enabled&&this._ssaoTechnique.compiled&&this._blurTechnique.compiled}get colorTexture(){return _(this._blur1FBO)?this._blur1FBO.colorTexture:null}render(e,i,n,r){if(c(this._enableTime)||c(n)||c(r)||c(this._ssaoFBO)||c(this._blur0FBO)||c(this._blur1FBO))return;if(!this.active)return this._enableTime=i,void this._requestRender();this._enableTime===0&&(this._enableTime=i);const s=this._rctx,a=e.camera,p=this._view.qualitySettings.fadeDuration,o=p>0?Math.min(p,i-this._enableTime)/p:1;this._passParameters.normalTexture=r,this._passParameters.depthTexture=n,this._passParameters.projScale=1/a.computeRenderPixelSizeAtDist(1),this._passParameters.intensity=4*Rt/$e(a)**6*o;const v=a.fullViewport,M=v[2],L=v[3],B=M/I,F=L/I;this._ssaoFBO.resize(M,L),this._blur0FBO.resize(B,F),this._blur1FBO.resize(B,F),c(this._quadVAO)&&(this._quadVAO=We(this._rctx)),s.bindFramebuffer(this._ssaoFBO),s.setViewport(0,0,M,L),s.bindTechnique(this._ssaoTechnique,this._passParameters,e).bindDraw(this._drawParameters,e,this._passParameters),s.bindVAO(this._quadVAO);const T=Re(this._quadVAO,"geometry");s.drawArrays(j.TRIANGLE_STRIP,0,T);const q=s.bindTechnique(this._blurTechnique,this._passParameters,e);s.setViewport(0,0,B,F),s.bindFramebuffer(this._blur0FBO),this._drawParameters.colorTexture=this._ssaoFBO.colorTexture,H(this._drawParameters.blurSize,0,I/L),q.bindDraw(this._drawParameters,e,this._passParameters),s.setViewport(0,0,B,F),s.drawArrays(j.TRIANGLE_STRIP,0,T),s.bindFramebuffer(this._blur1FBO),this._drawParameters.colorTexture=this._blur0FBO.colorTexture,H(this._drawParameters.blurSize,I/M,0),q.bindDraw(this._drawParameters,e,this._passParameters),s.drawArrays(j.TRIANGLE_STRIP,0,T),s.setViewport(v[0],v[1],v[2],v[3]),o<1&&this._requestRender()}_enable(){if(_(this._enableTime))return;const e={target:J.TEXTURE_2D,pixelFormat:N.RGBA,dataType:Z.UNSIGNED_BYTE,samplingMode:Oe.LINEAR,wrapMode:Ce.CLAMP_TO_EDGE,width:0,height:0},i={colorTarget:we.TEXTURE,depthStencilTarget:Pe.NONE};this._ssaoFBO=new R(this._rctx,i,e),this._blur0FBO=new R(this._rctx,i,e),this._blur1FBO=new R(this._rctx,i,e);const n=Uint8Array.from(atob(jt),r=>r.charCodeAt(0));this._passParameters.noiseTexture=new Ue(this._rctx,{target:J.TEXTURE_2D,pixelFormat:N.RGB,dataType:Z.UNSIGNED_BYTE,hasMipmap:!0,width:32,height:32},n),c(this._ssaoTechnique)&&(this._ssaoTechnique=this._techniqueRepository.acquire(y)),c(this._blurTechnique)&&(this._blurTechnique=this._techniqueRepository.acquire(Ge)),this._enableTime=Te(0),this._requestRender()}_disable(){this._enableTime=null,this._passParameters.noiseTexture=b(this._passParameters.noiseTexture),this._blur1FBO=b(this._blur1FBO),this._blur0FBO=b(this._blur0FBO),this._ssaoFBO=b(this._ssaoFBO)}get gpuMemoryUsage(){return(_(this._blur0FBO)?this._blur0FBO.gpuMemoryUsage:0)+(_(this._blur1FBO)?this._blur1FBO.gpuMemoryUsage:0)+(_(this._ssaoFBO)?this._ssaoFBO.gpuMemoryUsage:0)}get test(){return{ssao:this._ssaoFBO,blur:this._blur1FBO}}}const Rt=.5;function Ot(t,e){const i=t.fragment;e.receiveAmbientOcclusion?(i.uniforms.add(je("ssaoTex",(n,r)=>r.ssaoHelper.colorTexture,e.hasWebGL2Context?$.None:$.InvSize)),i.constants.add("blurSizePixelsInverse","float",1/I),i.code.add(l`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${xe(e,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):i.code.add(l`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Ct(t){t.constants.add("ambientBoostFactor","float",Ee)}function wt(t){t.uniforms.add(new w("lightingGlobalFactor",(e,i)=>i.lighting.globalFactor))}function vi(t,e){const i=t.fragment;switch(t.include(Ot,e),e.pbrMode!==h.Disabled&&t.include(Me,e),t.include(Le,e),t.include(He),i.code.add(l`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===h.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),Ct(i),wt(i),Be(i),i.code.add(l`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?l`normalize(vPosWorld)`:l`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Fe(i),i.code.add(l`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case h.Disabled:case h.WaterOnIntegratedMesh:case h.Water:t.include(Y,e),i.code.add(l`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case h.Normal:case h.Schematic:i.code.add(l`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),i.code.add(l`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?i.uniforms.add(new Se("hasFillLights",(n,r)=>r.enableFillLights)):i.constants.add("hasFillLights","bool",!1),i.code.add(l`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),i.uniforms.add([new w("lightingSpecularStrength",(n,r)=>r.lighting.mainLight.specularStrength),new w("lightingEnvironmentStrength",(n,r)=>r.lighting.mainLight.environmentStrength)]),i.code.add(l`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),i.code.add(l`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode===h.Schematic?l`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:l`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case h.Terrain:case h.TerrainWithWater:t.include(Y,e),i.code.add(l`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluateTerrainLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:ze(e.pbrMode);case h.COUNT:}}export{_i as L,di as M,bi as P,le as W,oe as _,hi as a,ke as b,bt as c,Ot as d,se as e,Ct as f,li as h,_t as i,oi as l,P as n,ae as o,vi as p,Ke as r,ai as s,re as t,wt as u};