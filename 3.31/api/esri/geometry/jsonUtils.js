// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/geometry/jsonUtils","dojo/_base/lang dojo/has ../kernel ../lang ./Point ./Polyline ./Polygon ./Multipoint ./Extent".split(" "),function(u,w,x,y,m,p,q,r,t){function v(a,b,c){var f=a.rings||a.paths,e,k,d,h,g,n,l,m;e=0;for(k=f.length;e<k;e++)for(g=f[e],d=0,h=g.length;d<h;d++)n=g[d],0<d?(l+=n[0],m+=n[1]):(l=n[0],m=n[1]),n[0]=b(l),n[1]=c(m);return a}var z={esriGeometryPoint:function(a,b,c){a.x=b(a.x);a.y=c(a.y);return a},esriGeometryPolyline:v,esriGeometryPolygon:v,esriGeometryEnvelope:function(a,
b,c){a.xmin=b(a.xmin);a.ymin=c(a.ymin);a.xmax=b(a.xmax);a.ymax=c(a.ymax);return a},esriGeometryMultipoint:function(a,b,c){var f=a.points,e,k,d,h,g;e=0;for(k=f.length;e<k;e++)d=f[e],0<e?(h+=d[0],g+=d[1]):(h=d[0],g=d[1]),d[0]=b(h),d[1]=c(g);return a}},A={esriGeometryPoint:function(a,b,c){a.x=b(a.x);a.y=c(a.y);return a}},l={createInstance:function(a,b){a=new a;b&&y.mixin(a,b);return a},fromJson:function(a){if(void 0!==a.x&&void 0!==a.y)return new m(a);if(void 0!==a.paths)return new p(a);if(void 0!==
a.rings)return new q(a);if(void 0!==a.points)return new r(a);if(void 0!==a.xmin&&void 0!==a.ymin&&void 0!==a.xmax&&void 0!==a.ymax)return new t(a)},getJsonType:function(a){return a instanceof m?"esriGeometryPoint":a instanceof p?"esriGeometryPolyline":a instanceof q?"esriGeometryPolygon":a instanceof t?"esriGeometryEnvelope":a instanceof r?"esriGeometryMultipoint":null},getGeometryType:function(a){return"esriGeometryPoint"===a?m:"esriGeometryPolyline"===a?p:"esriGeometryPolygon"===a?q:"esriGeometryEnvelope"===
a?t:"esriGeometryMultipoint"===a?r:null},supportsLazyUnquantization:function(a){return"esriGeometryPoint"===a||"esriGeometryPolyline"===a||"esriGeometryPolygon"===a||"esriGeometryMultipoint"===a},unquantizeFunction:function(a,b){if(a&&b){var c=b.translate[0],f=b.translate[1],e=b.scale[0],k=b.scale[1],d=function(a){return a*e+c},h=function(a){return f-a*k},g=z[a];return function(a){return a?g(a,d,h):null}}},unquantize:function(a,b,c){if(b=l.unquantizeFunction(b,c)){var f=a.length;for(c=0;c<f;c++)b(a[c].geometry)}},
quantizeFunction:function(a,b){if(a&&"esriGeometryPoint"===a&&b){var c=b.translate[0],f=b.translate[1],e=b.scale[0],k=b.scale[1],d=function(a){return Math.round((a-c)/e)},h=function(a){return Math.round((f-a)/k)},g=A[a];return function(a){return a?g(a,d,h):null}}},quantize:function(a,b,c){if(b=l.quantizeFunction(b,c)){var f=a.length;for(c=0;c<f;c++)b(a[c].geometry)}}};w("extend-esri")&&u.mixin(u.getObject("geometry",!0,x),l);return l});