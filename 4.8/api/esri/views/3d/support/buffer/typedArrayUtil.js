// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,b){Object.defineProperty(b,"__esModule",{value:!0});b.forEach=function(a,b){if(a.forEach)a.forEach(b);else for(var c=0;c<a.length;c++)b(a[c],c,a)};b.slice=function(a,b,c){if(a.slice)return a.slice(b,c);void 0===b?b=0:(0>b&&(b+=a.length),b=Math.min(a.length,Math.max(0,b)));void 0===c?c=a.length:(0>c&&(c+=a.length),c=Math.min(a.length,Math.max(0,c)));c=Math.max(0,c-b);for(var e=new a.constructor(c),d=0;d<c;d++)e[d]=a[b+d];return e};b.isArrayBuffer=function(a){return a instanceof
ArrayBuffer||a&&a.constructor&&"ArrayBuffer"===a.constructor.name};b.isInt8Array=function(a){return a instanceof Int8Array||a&&a.constructor&&"Int8Array"===a.constructor.name};b.isUint8Array=function(a){return a instanceof Uint8Array||a&&a.constructor&&"Uint8Array"===a.constructor.name};b.isInt16Array=function(a){return a instanceof Int16Array||a&&a.constructor&&"Int16Array"===a.constructor.name};b.isUint16Array=function(a){return a instanceof Uint16Array||a&&a.constructor&&"Uint16Array"===a.constructor.name};
b.isInt32Array=function(a){return a instanceof Int32Array||a&&a.constructor&&"Int32Array"===a.constructor.name};b.isUint32Array=function(a){return a instanceof Uint32Array||a&&a.constructor&&"Uint32Array"===a.constructor.name};b.isFloat32Array=function(a){return a instanceof Float32Array||a&&a.constructor&&"Float32Array"===a.constructor.name};b.isFloat64Array=function(a){return a instanceof Float64Array||a&&a.constructor&&"Float64Array"===a.constructor.name}});