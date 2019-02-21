// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../Utils"],function(c,d,h){Object.defineProperty(d,"__esModule",{value:!0});var g=function(){function b(a,b,e){this.data=a;this.stride=b;this.vertexCount=e}b.decode=function(a){var k=h.allocateTypedArrayBufferwithData(a.data,a.stride);return new b(k,a.stride,a.vertexCount)};return b}();d.default=g;c=function(){function b(a,b,e){this.geometryType=a;this.indexBuffer=new Uint32Array(b);this.namedBuffers=e}b.decode=function(a){var d=a.geometryType,e=a.indexBuffer,c={},f;for(f in a.namedBuffers)c[f]=
g.decode(a.namedBuffers[f]);return new b(d,e,c)};return b}();d.VertexBuffers=c});