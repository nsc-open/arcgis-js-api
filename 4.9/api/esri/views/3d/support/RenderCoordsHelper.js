// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/scaleUtils ../../../layers/graphics/dehydratedFeatures ../lib/gl-matrix ./earthUtils ./geometryUtils ./mathUtils ./projectionUtils ../webgl-engine/lib/Util".split(" "),function(l,f,q,u,v,w,x,b,m,n,r,k,y){Object.defineProperty(f,"__esModule",{value:!0});f.createRenderCoordsHelper=function(b,c){return"global"===b?new z(c):new A(c)};var h;(function(b){b[b.X=
0]="X";b[b.Y=1]="Y";b[b.Z=2]="Z"})(h=f.BasisDimension||(f.BasisDimension={}));l=function(){function b(b,a){this.spatialReference=b;this.unitInMeters=a}b.prototype.toRenderCoords=function(b,a,d){return x.isPoint(b)?k.pointToVector(b,a,this.spatialReference):k.vectorToVector(b,a,d,this.spatialReference)};b.prototype.fromRenderCoords=function(b,a,d){return a instanceof u?k.vectorToPoint(b,this.spatialReference,a,d):a instanceof v?k.vectorToPoint(b,this.spatialReference,a):k.vectorToVector(b,this.spatialReference,
a,d)};return b}();f.RenderCoordsHelper=l;var z=function(f){function c(a){a=f.call(this,a||k.SphericalECEFSpatialReference,1)||this;a.type="global";return a}q(c,f);c.prototype.getAltitude=function(a){return b.vec3d.length(a)-m.earthRadius};c.prototype.setAltitude=function(a,d){a=(a+m.earthRadius)/b.vec3d.length(d);b.vec3d.scale(d,a)};c.prototype.setAltitudeOfTransformation=function(a,b){var d=b[12],c=b[13],e=b[14];a=(a+m.earthRadius)/Math.sqrt(d*d+c*c+e*e);b[12]=d*a;b[13]=c*a;b[14]=e*a};c.prototype.worldUpAtPosition=
function(a,b){return this.worldBasisAtPosition(a,h.Z,b)};c.prototype.worldBasisAtPosition=function(a,d,c){switch(d){case h.X:return r.cartesianToSpherical(a||p,e),a=e[2],b.vec3d.set3(-Math.sin(a),Math.cos(a),0,c);case h.Y:r.cartesianToSpherical(a||p,e);d=e[1];a=e[2];var g=Math.sin(d);return b.vec3d.set3(-g*Math.cos(a),-g*Math.sin(a),Math.cos(d),c);case h.Z:return b.vec3d.normalize(a||p,c)}};c.prototype.intersectManifold=function(a,d,c,g){void 0===g&&(g=b.vec3d.create());if(!y.raySphere(a,d,null,m.earthRadius+
c,e)||0>b.vec3d.dot(b.vec3d.direction(e,a,B),d))return!1;b.vec3d.set(e,g);return!0};return c}(l),A=function(f){function c(a){a=f.call(this,a,w.getMetersPerUnitForSR(a))||this;a.type="local";a.worldX=[1,0,0];a.worldY=[0,1,0];a.worldZ=[0,0,1];return a}q(c,f);c.prototype.getAltitude=function(a,b){return b?a[b+2]:a[2]};c.prototype.setAltitude=function(a,b){b[2]=a};c.prototype.setAltitudeOfTransformation=function(a,b){b[14]=a};c.prototype.worldUpAtPosition=function(a,c){return b.vec3d.set(this.worldZ,
c)};c.prototype.worldBasisAtPosition=function(a,c,e){switch(c){case h.X:return b.vec3d.set(this.worldX,e);case h.Y:return b.vec3d.set(this.worldY,e);case h.Z:return b.vec3d.set(this.worldZ,e)}};c.prototype.intersectManifold=function(a,c,f,g){void 0===g&&(g=b.vec3d.create());n.plane.fromNormalAndOffset(this.worldZ,-f,t);if(!n.plane.intersectRay(t,a,c,e))return!1;b.vec3d.set(e,g);return!0};return c}(l),t=n.plane.create(),e=b.vec3d.create(),B=b.vec3d.create(),p=[0,0,0]});