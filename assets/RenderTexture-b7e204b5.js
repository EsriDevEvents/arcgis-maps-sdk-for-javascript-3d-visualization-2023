import{y as s,r as o}from"./typedArrayUtil-bf9f210a.js";import{C as u}from"./promiseUtils-5940888c.js";let l=class{constructor(r,i){this._textureRep=r,this.loadPromise=null,this._disposed=!1;const e=this._textureRep.acquire(i);u(e)?(e.then(t=>{this._disposed?s(t):this._textureRef=t}),this.loadPromise=e):this._textureRef=e}dispose(){this._textureRef=s(this._textureRef),this._disposed=!0}get glTexture(){return o(this._textureRef)?this._textureRef.glTexture:null}};export{l as r};
