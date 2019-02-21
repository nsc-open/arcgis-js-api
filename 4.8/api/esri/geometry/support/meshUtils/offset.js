// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","./projection","../../../views/3d/lib/glMatrix","../../../views/3d/support/projectionUtils"],function(u,f,h,d,l){function m(a,d){if(a)for(var c=0;c<a.length;c+=3)for(var b=0;3>b;b++)a[c+b]+=d[b]}Object.defineProperty(f,"__esModule",{value:!0});f.offset=function(a,f,c){if(a.vertexAttributes&&a.vertexAttributes.position){var b=a.spatialReference;if(b.isWGS84||b.isWebMercator&&(!c||!1!==c.geographic)){c=a.spatialReference;var b=a.vertexAttributes.position,e=a.vertexAttributes.normal,
g=new Float64Array(b.length),n=new Float32Array(e?e.length:0),k=a.extent.center,p=t;l.computeLinearTransformation(c,[k.x,k.y,k.z],q,l.SphericalECEFSpatialReference);d.mat4d.toMat3(q,r);d.mat3d.multiplyVec3(r,f,p);h.projectToECEF(b,c,g);e&&h.projectNormalToECEF(e,b,g,c,n);m(g,p);h.projectFromECEF(g,b,c);e&&h.projectNormalFromECEF(n,b,g,c,e)}else m(a.vertexAttributes.position,f);a.clearCache()}};var t=d.vec3d.create(),q=d.mat4d.create(),r=d.mat3d.create()});