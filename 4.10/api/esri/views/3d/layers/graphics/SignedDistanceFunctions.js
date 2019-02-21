// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../../webgl-engine/lib/Util"],function(p,m,n){Object.defineProperty(m,"__esModule",{value:!0});m.computeSignedDistancefieldCicle=function(a,d){var g=new Uint8Array(4*a*a),h=a/2-.5;d/=2;for(var e=0;e<a;e++)for(var f=0;f<a;f++){var c=f+a*e,b=f-h,l=e-h,b=Math.sqrt(b*b+l*l)-d,b=b/a+.5;n.packFloatRGBA(b,g,4*c)}return g};m.computeSignedDistancefieldSquare=function(a,d,g){g&&(d/=Math.SQRT2);for(var h=new Uint8Array(4*a*a),e=0;e<a;e++)for(var f=0;f<a;f++){var c=f-.5*(a-.5),b=
e-.5*(a-.5),l=e*a+f;if(g)var k=(c+b)/Math.SQRT2,b=(b-c)/Math.SQRT2,c=k;c=Math.max(Math.abs(c),Math.abs(b))-.5*d;c=c/a+.5;n.packFloatRGBA(c,h,4*l)}return h};m.computeSignedDistancefieldCrossAndX=function(a,d,g){g&&(d*=Math.SQRT2);d*=.5;for(var h=new Uint8Array(4*a*a),e=0;e<a;e++)for(var f=0;f<a;f++){var c=f-.5*a,b=e-.5*a,l=e*a+f;if(g)var k=(c+b)/Math.SQRT2,b=(b-c)/Math.SQRT2,c=k;k=void 0;c=Math.abs(c);b=Math.abs(b);k=c>b?c>d?Math.sqrt((c-d)*(c-d)+b*b):b:b>d?Math.sqrt(c*c+(b-d)*(b-d)):c;k=k/a+.5;n.packFloatRGBA(k,
h,4*l)}return h}});