// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/Util",["require","exports","../../core/tsSupport/assignHelper","../../core/Error"],function(q,r,n,p){return function(){function d(){}d.vertexCount=function(a,c){return a.vertexBuffers[c].size/d.getStride(a.layout[c])};d.getStride=function(a){return a[0].stride};d.getBytesPerElement=function(a){switch(a){case 5126:return 4;case 5124:return 4;case 5125:return 4;case 5122:return 2;case 5123:return 2;case 5120:return 1;case 5121:return 1;default:throw Error("Unknown data type");
}};d.addDescriptor=function(a,c,b,e,h,g){var k=d.getBytesPerElement(e);if(0<a.length){var l=a[0].stride,m=l+k*b;a.forEach(function(a){return a.stride=m});a.push({name:c,count:b,type:e,offset:l,stride:m,normalized:h,divisor:g})}else a.push({name:c,count:b,type:e,offset:0,stride:k*b,normalized:h,divisor:g})};d.assertCompatibleVertexAttributeLocations=function(a,c){(a=a.locations===c.locations)||console.error("VertexAttributeLocations are incompatible");return a};d.hasAttribute=function(a,c){for(var b=
0;b<a.length;b++)if(a[b].name===c)return!0;return!1};d.findAttribute=function(a,c){for(var b=0;b<a.length;b++)if(a[b].name===c)return a[b];return null};d.copyFramebufferToTexture=function(a,c,b,e,h){void 0===h&&(h=0);var g=a.getBoundFramebufferObject(),d=a.getBoundTexture(0);a.bindFramebuffer(c);a.bindTexture(b,0);a.gl.copyTexImage2D(a.gl.TEXTURE_2D,h,b.descriptor.pixelFormat,e[0],e[1],e[2],e[3],0);a.gl.flush();a.bindFramebuffer(g);a.bindTexture(d,0)};d.assert=function(a,c){if(!a)throw new p(c);};
d.setBaseInstanceOffset=function(a,c){var b={},d;for(d in a)b[d]=a[d].map(function(a){return a.divisor?n({},a,{baseInstance:c}):a});return b};d.bindVertexBufferLayout=function(a,d,b,e,h){var g=a.gl,c=a.capabilities.instancing;a.bindBuffer(b);e.forEach(function(a){var b=d[a.name],e=(h?h:0+a.baseInstance?a.baseInstance:0)*a.stride;void 0===b&&console.error("There is no location for vertex attribute '"+a.name+"' defined.");a.baseInstance&&!a.divisor&&console.error("Vertex attribute '"+a.name+"' uses baseInstanceOffset without divisor.");
if(4>=a.count)g.vertexAttribPointer(b,a.count,a.type,a.normalized,a.stride,a.offset+e),g.enableVertexAttribArray(b),a.divisor&&0<a.divisor&&c&&c.vertexAttribDivisor(b,a.divisor);else if(9===a.count)for(var f=0;3>f;f++)g.vertexAttribPointer(b+f,3,a.type,a.normalized,a.stride,a.offset+12*f+e),g.enableVertexAttribArray(b+f),a.divisor&&0<a.divisor&&c&&c.vertexAttribDivisor(b+f,a.divisor);else if(16===a.count)for(f=0;4>f;f++)g.vertexAttribPointer(b+f,4,a.type,a.normalized,a.stride,a.offset+16*f+e),g.enableVertexAttribArray(b+
f),a.divisor&&0<a.divisor&&c&&c.vertexAttribDivisor(b+f,a.divisor);else console.error("Unsupported vertex attribute element count: "+a.count)})};d.unbindVertexBufferLayout=function(a,c,b,d){var e=a.gl;a.bindBuffer(b);d.forEach(function(a){var b=c[a.name];if(4>=a.count)e.disableVertexAttribArray(b);else if(9===a.count)for(a=0;3>a;a++)e.disableVertexAttribArray(b+a);else if(16===a.count)for(a=0;4>a;a++)e.disableVertexAttribArray(b+a);else console.error("Unsupported vertex attribute element count: "+
a.count)});a.unbindBuffer(34962)};return d}()});