// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../ensureType","../metadata"],function(p,e,g,f){function h(a){var b="_meta"in a?g.ensureType(a):a;return function(){for(var a=[],c=0;c<arguments.length;c++)a[c]=arguments[c];a.push(b);return"number"===typeof a[2]?k.apply(this,a):l.apply(this,a)}}function l(a,b,d,c){f.getPropertyMetadata(a,b).cast=c}function k(a,b,d,c){f.getParameterMetadata(a,b,d).cast=c}function m(a){return function(b,d,c){f.getPropertyMetadata(b,a).cast=b[d]}}Object.defineProperty(e,"__esModule",{value:!0});
var n=Object.prototype.toString;e.autocastMethod=function(a,b,d){if(f.hasParametersMetadata(a,b)){var c=f.getParametersMetadata(a,b).filter(function(a){return null!=a.cast});if(c.length){var e=d.value;d.value=function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];for(b=0;b<c.length;b++){var d=c[b];a[d.index]=d.cast(a[d.index])}return e.apply(this,a)};return d}console.warn("Method "+a.declaredClass+"::"+b+" is decorated with @cast but no parameters are decorated")}};e.cast=function(){for(var a=
[],b=0;b<arguments.length;b++)a[b]=arguments[b];if(3!==a.length||"string"!==typeof a[1]){if(1===a.length&&"[object Function]"===n.call(a[0]))return h(a[0]);if(1===a.length&&"string"===typeof a[0])return m(a[0])}}});