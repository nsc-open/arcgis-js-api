// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/ProjectionUtil","dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/SpatialReference esri/geometry/jsonUtils esri/dijit/geoenrichment/utils/CoordinateUtil esri/dijit/geoenrichment/utils/PolygonUtil esri/dijit/geoenrichment/utils/UrlUtil esri/dijit/geoenrichment/utils/requests/UniversalClient esri/dijit/geoenrichment/utils/requests/EveryRequest".split(" "),function(w,l,m,n,h,x,y,r,z){function p(a){return a&&a.spatialReference||a instanceof m&&a||a&&new m(a)||
new m(h.WEB_MERCATOR_WKID)}function A(a,b){var c=[];try{for(var d=0;d<a.length;d++)c.push(h.toSpatialReference(a[d],b))}catch(e){console.log(e)}return(new l).resolve(c)}function B(a,b){function c(a){t.push(function(){return C(f,a,e,b)})}var d=a[0],e=n.getJsonType(d),f={outSR:b.wkid||b.toJson(),inSR:d.spatialReference.wkid||d.spatialReference.toJson()},t=[],k=0,g=[];1==a.length?g.push(d):a.forEach(function(a){var b=x.getNumberOfPoints(a);k+=b;if(1E4<k){var d=[];g.length?(d.push(a),k=b):(g.push(a),
k=0);c(g);g=d}else g.push(a)});g.length&&c(g);return z(t,!0).then(function(a){for(var b=a[0],c=1;c<a.length;c++)b=b.concat(a[c]);return b},function(a){console.log(a);return[]})}function C(a,b,c,d){a.geometries=u(b);return r.requestPublicFirst({url:q,urlSuffix:"project"},{content:a}).then(function(a){return v(a.geometries,c,d)})}function u(a){var b=a.map(function(a){a=a.toJson();delete a.spatialReference;return a});return{geometryType:n.getJsonType(a[0]),geometries:b}}function v(a,b,c){var d=n.getGeometryType(b),
e={spatialReference:c.toJson()};return a.map(function(a){return new d(w.mixin(a,e))})}var f={},q;f.setGeometryServiceUrl=function(a){q=a;y.registerCORS(a)};f.getSpatialReference=p;f.projectGeometries=function(a,b){var c=p(b);b=Array.isArray(a)?a:[a];if(!b.length)return(new l).resolve(a);var d={},e=b.slice(),f=0;b=b.filter(function(a,b){if(a.spatialReference&&a.spatialReference.wkid!==c.wkid)return d[b]=f++,!0});return b.length?(h.testSpatialReferenceWKID(c)&&h.testSpatialReferenceWKID(b[0].spatialReference)?
A(b,c):B(b,c)).then(function(b){e.forEach(function(a,c){void 0!==d[c]&&(e[c]=b[d[c]])});b=e;return Array.isArray(a)?b:b[0]}):(new l).resolve(a)};f.unionGeometries=function(a){var b=p(a[0].spatialReference);a={sr:b.wkid||b.toJson(),geometries:u(a)};return r.requestPublicFirst({url:q,urlSuffix:"union"},{content:a}).then(function(a){return v([a.geometry],a.geometryType,b)[0]})};return f});