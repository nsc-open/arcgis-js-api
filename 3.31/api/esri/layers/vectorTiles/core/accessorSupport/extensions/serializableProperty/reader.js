// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/extensions/serializableProperty/reader",["require","exports","../../../object","./type"],function(u,h,p,q){function r(a,b,d,c){if(1<b)return t(a,b);if(1===b)return k(a);if(l(a)){var e=k(a.prototype.itemType.Type);return function(c,b,d){return(c=e(c,b,d))?new a(c):c}}return g(a)}function g(a){return a.prototype.read?function(b,d,c){return null==b?b:(new a).read(b,c)}:a.fromJSON}function m(a,b,d,c){return 0!==c&&Array.isArray(b)?b.map(function(b){return m(a,
b,d,c-1)}):a(b,null,d)}function t(a,b){a=g(a);var d=m.bind(null,a);return function(a,e,f){if(null==a)return a;a=d(a,f,b);e=b;for(f=a;0<e&&Array.isArray(f);)e--,f=f[0];if(void 0!==f)for(f=0;f<e;f++)a=[a];return a}}function k(a){var b=g(a);return function(a,c,e){return null==a?a:Array.isArray(a)?a.map(function(a){return b(a,null,e)}):[b(a,null,e)]}}function l(a){return q.isCollection(a)?(a=a.prototype.itemType)&&a.Type&&"function"===typeof a.Type?n(a.Type):!1:!1}function n(a){return!!a&&(!!a.prototype.read||
!!a.fromJSON||l(a))}Object.defineProperty(h,"__esModule",{value:!0});h.create=function(a,b,d,c){(!c.read||!c.read.reader&&!1!==c.read.enabled)&&n(a)&&p.setDeepValue("read.reader",r(a,b,d,c),c)}});