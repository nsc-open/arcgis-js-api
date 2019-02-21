// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./Util"],function(d,e,c){return function(){function b(a){this._enabled=!1;this._rctx=a}Object.defineProperty(b.prototype,"enabled",{get:function(){return this._enabled},set:function(a){a?this.enable():this.disable()},enumerable:!0,configurable:!0});b.prototype.prepareStencilWritePass=function(){c.assert(this.enabled);var a=this._rctx;a.setStencilFunction(519,1,255);a.setStencilOp(7680,7680,7681);a.setStencilWriteMask(255)};b.prototype.finish=function(){if(this.enabled){var a=
this._rctx;a.setStencilFunction(519,0,0);a.setStencilOp(7680,7680,7680)}};b.prototype.enableStencilRead=function(){this.enabled&&this._rctx.setStencilFunction(517,1,255)};b.prototype.disableStencilRead=function(){this.enabled&&this._rctx.setStencilFunction(519,0,0)};b.prototype.enable=function(){this._enabled=!0;this._rctx.setStencilTestEnabled(!0)};b.prototype.disable=function(){this._enabled=!1;this._rctx.setStencilTestEnabled(!1)};return b}()});