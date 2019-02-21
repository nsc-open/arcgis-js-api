// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/ObjectPool","../lib/gl-matrix"],function(g,h,e,f){return function(){function a(a,b,c,d){this.scale=0;this.tile=null;this.offset=f.vec2d.create();void 0!==a&&this.init(a,b,c,d)}a.prototype.init=function(a,b,c,d){this.tile=a;this.offset[0]=b;this.offset[1]=c;this.scale=d};a.prototype.dispose=function(){this.tile=null;this.offset[0]=0;this.scale=this.offset[1]=0};a.Pool=new e(a);return a}()});