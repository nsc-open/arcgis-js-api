// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/geometryUtils","./gl-matrix","./Util"],function(n,r,h,c,g){function p(c,a){var b=a[0]-c[0],e=a[1]-c[1],d=a[2]-c[2];c=a[3]-c[3];return b*b+e*e+d*d+c*c}function k(c,a){return c[0]===a[0]&&c[1]===a[1]&&c[2]===a[2]}function q(c,a){return c[0]===a[0]&&c[1]===a[1]&&c[2]===a[2]&&c[3]===a[3]}n=function(){function b(a,b,e){this._viewUp=c.vec3d.create();this._viewForward=c.vec3d.create();this._viewRight=c.vec3d.create();this._viewport=c.vec4d.create();this._padding=
c.vec4d.create();this._fov=55/180*Math.PI;this._near=0;this._far=1E3;this._viewDirty=!0;this._viewMatrix=c.mat4d.create();this._projectionDirty=!0;this._projectionMatrix=c.mat4d.create();this._viewProjectionDirty=!0;this._viewProjectionMatrix=c.mat4d.create();this._viewInverseTransposeMatrixDirty=!0;this._viewInverseTransposeMatrix=c.mat4d.create();this._frustumPlanesDirty=!0;this._frustumPlanes=[h.plane.create(),h.plane.create(),h.plane.create(),h.plane.create(),h.plane.create(),h.plane.create()];
this._fullViewport=null;this.relativeElevation=0;this._eye=c.vec3d.create(a);this._center=c.vec3d.create(b);this._up=void 0!==e?c.vec3d.create(e):c.vec3d.create([0,0,1]);this._padding=c.vec4d.create()}Object.defineProperty(b.prototype,"eye",{get:function(){return this._eye},set:function(a){this._compareAndSetView(a,this._eye)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"center",{get:function(){return this._center},set:function(a){this._compareAndSetView(a,this._center)},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"up",{get:function(){return this._up},set:function(a){this._compareAndSetView(a,this._up)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewMatrix",{get:function(){this._ensureViewClean();return this._viewMatrix},set:function(a){c.mat4d.set(a,this._viewMatrix);this._viewDirty=!1;this._frustumPlanesDirty=this._viewProjectionDirty=this._viewInverseTransposeMatrixDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"viewForward",{get:function(){this._ensureViewClean();return this._viewForward},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewUp",{get:function(){this._ensureViewClean();return this._viewUp},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewRight",{get:function(){this._ensureViewClean();return this._viewRight},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"near",{get:function(){return this._near},set:function(a){this._near!==a&&(this._near=
a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"far",{get:function(){return this._far},set:function(a){this._far!==a&&(this._far=a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewport",{get:function(){return this._viewport},set:function(a){this.x=a[0];this.y=a[1];this.width=a[2];this.height=a[3]},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"x",{get:function(){return this._viewport[0]},set:function(a){a+=this._padding[3];this._viewport[0]!==a&&(this._viewport[0]=a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"y",{get:function(){return this._viewport[1]},set:function(a){a+=this._padding[2];this._viewport[1]!==a&&(this._viewport[1]=a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=
!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"width",{get:function(){return this._viewport[2]},set:function(a){this._viewport[2]!==a&&(this._viewport[2]=a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"height",{get:function(){return this._viewport[3]},set:function(a){this._viewport[3]!==a&&(this._viewport[3]=a,this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=
!0)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullWidth",{get:function(){return this._viewport[2]+this._padding[1]+this._padding[3]},set:function(a){this.width=a-(this._padding[1]+this._padding[3])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fullHeight",{get:function(){return this._viewport[3]+this._padding[0]+this._padding[2]},set:function(a){this.height=a-(this._padding[0]+this._padding[2])},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"fullViewport",{get:function(){this._fullViewport||(this._fullViewport=c.vec4d.create());this._fullViewport[0]=this._viewport[0]-this._padding[3];this._fullViewport[1]=this._viewport[1]-this._padding[2];this._fullViewport[2]=this.fullWidth;this._fullViewport[3]=this.fullHeight;return this._fullViewport},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"aspect",{get:function(){return this.width/this.height},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"padding",
{get:function(){return this._padding},set:function(a){if(this._padding[0]!==a[0]||this._padding[1]!==a[1]||this._padding[2]!==a[2]||this._padding[3]!==a[3])this._viewport[0]+=a[3]-this._padding[3],this._viewport[1]+=a[2]-this._padding[2],this._viewport[2]-=a[1]+a[3]-(this._padding[1]+this._padding[3]),this._viewport[3]-=a[0]+a[2]-(this._padding[0]+this._padding[2]),c.vec4d.set(a,this._padding),this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"viewProjectionMatrix",{get:function(){this._viewProjectionDirty&&(c.mat4d.multiply(this.projectionMatrix,this.viewMatrix,this._viewProjectionMatrix),this._viewProjectionDirty=!1);return this._viewProjectionMatrix},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"projectionMatrix",{get:function(){if(this._projectionDirty){var a=this.width,b=this.height,e=this.near*Math.tan(this.fovY/2),d=e*this.aspect;c.mat4d.frustum(-d*(1+2*this._padding[3]/a),
d*(1+2*this._padding[1]/a),-e*(1+2*this._padding[2]/b),e*(1+2*this._padding[0]/b),this.near,this.far,this._projectionMatrix);this._projectionDirty=!1}return this._projectionMatrix},set:function(a){c.mat4d.set(a,this._projectionMatrix);this._projectionDirty=!1;this._frustumPlanesDirty=this._viewProjectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fov",{get:function(){return this._fov},set:function(a){this._fov=a;this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=
!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fovX",{get:function(){return g.fovd2fovx(this._fov,this.width,this.height)},set:function(a){this._fov=g.fovx2fovd(a,this.width,this.height);this._frustumPlanesDirty=this._viewProjectionDirty=this._projectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fovY",{get:function(){return g.fovd2fovy(this._fov,this.width,this.height)},set:function(a){this._fov=g.fovy2fovd(a,this.width,this.height);this._frustumPlanesDirty=
this._viewProjectionDirty=this._projectionDirty=!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"distance",{get:function(){return c.vec3d.dist(this._center,this._eye)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"frustumPoints",{get:function(){return this.computeFrustumPoints()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"frustumPlanes",{get:function(){this._frustumPlanesDirty&&(this._frustumPlanes=this._computeFrustumPlanes(this._frustumPlanes),
this._frustumPlanesDirty=!1);return this._frustumPlanes},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"viewInverseTransposeMatrix",{get:function(){if(this._viewInverseTransposeMatrixDirty||this._viewDirty)this._viewInverseTransposeMatrix||(this._viewInverseTransposeMatrix=c.mat4d.create()),c.mat4d.inverse(this.viewMatrix,this._viewInverseTransposeMatrix),c.mat4d.transpose(this._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1;return this._viewInverseTransposeMatrix},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"perPixelRatio",{get:function(){return Math.tan(this.fovX/2)/this.width},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"aboveGround",{get:function(){return 0<=this.relativeElevation},enumerable:!0,configurable:!0});b.prototype.copyFrom=function(a){c.vec3d.set(a._eye,this._eye);c.vec3d.set(a._center,this._center);c.vec3d.set(a._up,this._up);c.vec4d.set(a._viewport,this._viewport);c.vec4d.set(a._padding,this._padding);
this._near=a._near;this._far=a._far;this._fov=a._fov;this.relativeElevation=a.relativeElevation;a._viewDirty?this._viewDirty=!0:(c.mat4d.set(a._viewMatrix,this._viewMatrix),c.vec3d.set(a._viewRight,this._viewRight),c.vec3d.set(a._viewUp,this._viewUp),c.vec3d.set(a._viewForward,this._viewForward),this._viewDirty=!1);a._projectionDirty?this._projectionDirty=!0:(c.mat4d.set(a._projectionMatrix,this._projectionMatrix),this._projectionDirty=!1);this._viewProjectionDirty=!0;a._frustumPlanesDirty?this._frustumPlanesDirty=
!0:(a.copyFrustumPlanes(this._frustumPlanes),this._frustumPlanesDirty=!1);a._viewInverseTransposeMatrixDirty?this._viewInverseTransposeMatrixDirty=!0:(this._viewInverseTransposeMatrix?c.mat4d.set(a._viewInverseTransposeMatrix,this._viewInverseTransposeMatrix):this._viewInverseTransposeMatrix=c.mat4d.create(a._viewInverseTransposeMatrix),this._viewInverseTransposeMatrixDirty=!1);a._fullViewport?this._fullViewport?c.vec4d.set(a._fullViewport,this._fullViewport):this._fullViewport=c.vec4d.create(a._fullViewport):
this._fullViewport=null;return this};b.prototype.copyViewFrom=function(a){this.eye=a.eye;this.center=a.center;this.up=a.up};b.prototype.copy=function(){var a=new b;a.copyFrom(this);return a};b.prototype.equivalent=function(a){return k(this._eye,a._eye)&&k(this._center,a._center)&&k(this._up,a._up)&&q(this._viewport,a._viewport)&&q(this._padding,a._padding)&&this._near===a._near&&this._far===a._far&&this._fov===a._fov};b.prototype.almostEquals=function(a,b,e){void 0===e&&(e=!1);b=c.vec3d.dist(this._eye,
this._center)*(b||5E-4);b*=b;e?(c.vec3d.direction(a._center,a._eye,f),c.vec3d.direction(this._center,this._eye,l),e=1E-10):(c.vec3d.set(a._center,f),c.vec3d.set(this._center,l),e=b);return c.vec3d.dist2(a._eye,this._eye)<b&&c.vec3d.dist2(f,l)<e&&.001>Math.abs(a._fov-this._fov)&&.5>p(a._padding,this._padding)&&.5>p(a._viewport,this._viewport)};b.prototype.markViewDirty=function(){this._viewProjectionDirty=this._frustumPlanesDirty=this._viewDirty=!0};b.prototype.computePixelSizeAt=function(a){return this.computePixelSizeAtDist(c.vec3d.dist(a,
this._eye))};b.prototype.computePixelSizeAtDist=function(a){return 2*a*Math.tan(this.fovX/2)/this.width};b.prototype.computeDistanceFromRadius=function(a,c){return a/Math.tan(Math.min(this.fovX,this.fovY)/(2*(c||1)))};b.prototype.copyFrustumPlanes=function(a){if(!a){a=Array(6);for(var b=0;6>b;++b)a[b]=c.vec4d.create()}for(var e=this.frustumPlanes,b=0;6>b;b++)c.vec4d.set(e[b],a[b]);return a};b.prototype.computeFrustumPoints=function(a){if(!a){a=Array(8);for(var b=0;8>b;++b)a[b]=c.vec3d.create()}g.matrixToFrustumPoints(this.viewMatrix,
this.projectionMatrix,a);return a};b.prototype.setGLViewport=function(a){var c=this.viewport,b=this.padding;a.setViewport(c[0]-b[3],c[1]-b[2],c[2]+b[1]+b[3],c[3]+b[0]+b[2])};b.prototype.applyProjection=function(a,b,e){void 0===e&&(e=!1);a!==d&&c.vec3d.set(a,d);d[3]=1;e&&(b[2]=-d[2]);c.mat4d.multiplyVec4(this.projectionMatrix,d);c.vec3d.scale(d,1/Math.abs(d[3]));a=this.fullViewport;b[0]=g.lerp(0,a[0]+a[2],.5+.5*d[0]);b[1]=g.lerp(0,a[1]+a[3],.5+.5*d[1]);e||(b[2]=.5*(d[2]+1));return b};b.prototype.projectPoint=
function(a,b){d[0]=a[0];d[1]=a[1];d[2]=a[2];d[3]=1;c.mat4d.multiplyVec4(this.viewProjectionMatrix,d);c.vec3d.scale(d,1/Math.abs(d[3]));a=this.fullViewport;b[0]=g.lerp(0,a[0]+a[2],.5+.5*d[0]);b[1]=g.lerp(0,a[1]+a[3],.5+.5*d[1]);b[2]=.5*(d[2]+1);return b};b.prototype.unprojectPoint=function(a,b,e){void 0===e&&(e=!1);if(e)return console.error("Camera.unprojectPoint() not yet implemented for linear Z"),null;c.mat4d.multiply(this.projectionMatrix,this.viewMatrix,m);if(!c.mat4d.inverse(m))return null;e=
this.fullViewport;d[0]=2*(a[0]-e[0])/e[2]-1;d[1]=2*(a[1]-e[1])/e[3]-1;d[2]=2*a[2]-1;d[3]=1;c.mat4d.multiplyVec4(m,d);if(0===d[3])return null;b[0]=d[0]/d[3];b[1]=d[1]/d[3];b[2]=d[2]/d[3];return b};b.prototype.computeUp=function(a){"global"===a?this.computeUpGlobal():this.computeUpLocal()};b.prototype.computeUpGlobal=function(){c.vec3d.subtract(this.center,this.eye,f);var a=c.vec3d.length(this.center);1>a?(c.vec3d.set3(0,0,1,this.up),this.markViewDirty()):Math.abs(c.vec3d.dot(f,this.center))>.9999*
c.vec3d.length(f)*a||(c.vec3d.cross(f,this.center,this.up),c.vec3d.cross(this.up,f,this.up),c.vec3d.normalize(this.up),this.markViewDirty())};b.prototype.computeUpLocal=function(){c.vec3d.direction(this.center,this.eye,f);.9999>=Math.abs(f[2])&&(c.vec3d.scale(f,f[2]),c.vec3d.set3(-f[0],-f[1],1-f[2],this.up),c.vec3d.normalize(this.up),this.markViewDirty())};b.prototype._compareAndSetView=function(a,b){k(a,b)||(c.vec3d.set(a,b),this._viewProjectionDirty=this._frustumPlanesDirty=this._viewDirty=!0)};
b.prototype._computeFrustumPlanes=function(a){if(!a){a=Array(6);for(var b=0;6>b;++b)a[b]=h.plane.create()}g.matrixToFrustumPlanes(this.viewMatrix,this.projectionMatrix,a);return a};b.prototype._ensureViewClean=function(){this._viewDirty&&(c.mat4d.lookAt(this._eye,this._center,this._up,this._viewMatrix),c.vec3d.set3(-this._viewMatrix[2],-this._viewMatrix[6],-this._viewMatrix[10],this._viewForward),c.vec3d.set3(this._viewMatrix[1],this._viewMatrix[5],this._viewMatrix[9],this._viewUp),c.vec3d.set3(this._viewMatrix[0],
this._viewMatrix[4],this._viewMatrix[8],this._viewRight),this._viewDirty=!1,this._viewInverseTransposeMatrixDirty=!0)};return b}();var d=c.vec4d.create(),m=c.mat4d.create(),f=c.vec3d.create(),l=c.vec3d.create();return n});