// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/has"],function(e,f,g){return function(){function a(b,c){this._context=b;this._desc=c;this._glName=null;this._id=-1;b=this._context.gl;this._id=++a._nextId;this._glName=b.createRenderbuffer();this._context.bindRenderbuffer(this);b.renderbufferStorage(b.RENDERBUFFER,c.internalFormat,c.width,c.height)}Object.defineProperty(a.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"id",{get:function(){return this._id},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});a.prototype.resize=function(a,c){var b=this._context.gl,d=this._desc;if(d.width!==a||d.height!==c)d.width=a,d.height=c,this._context.bindRenderbuffer(this),b.renderbufferStorage(b.RENDERBUFFER,d.internalFormat,d.width,d.height)};a.prototype.dispose=function(){this._glName&&(this._context.gl.deleteRenderbuffer(this._glName),this._glName=null);this._context=
null};a._nextId=0;return a}()});