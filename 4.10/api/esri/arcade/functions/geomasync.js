// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports dojo/Deferred ../../kernel ../kernel ../languageUtils ../featureset/support/shared ./centroid ../../geometry/Extent ../../geometry/Geometry ../../geometry/geometryEngineAsync ../../geometry/Multipoint ../../geometry/Point ../../geometry/Polygon ../../geometry/Polyline ../../geometry/support/jsonUtils".split(" "),function(A,t,y,z,h,d,l,u,p,f,g,v,r,m,q,w){function x(d){return 0===z.version.indexOf("4.")?m.fromExtent(d):new m({spatialReference:d.spatialReference,rings:[[[d.xmin,
d.ymin],[d.xmin,d.ymax],[d.xmax,d.ymax],[d.xmax,d.ymin],[d.xmin,d.ymin]]]})}function k(b){d.pcCheck(b,2,2);if(!(b[0]instanceof f&&b[1]instanceof f||b[0]instanceof f&&null===b[1]||b[1]instanceof f&&null===b[0]||null===b[0]&&null===b[1]))throw Error("Illegal Argument");}Object.defineProperty(t,"__esModule",{value:!0});t.registerFunctions=function(b){"async"===b.mode&&(b.functions.disjoint=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===
a[0]||null===a[1]?!0:g.disjoint(a[0],a[1])})},b.functions.intersects=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.intersects(a[0],a[1])})},b.functions.touches=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.touches(a[0],a[1])})},b.functions.crosses=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=
d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.crosses(a[0],a[1])})},b.functions.within=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.within(a[0],a[1])})},b.functions.contains=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.contains(a[0],a[1])})},b.functions.overlaps=function(e,c){return b.standardFunctionAsync(e,
c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?!1:g.overlaps(a[0],a[1])})},b.functions.equals=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){d.pcCheck(a,2,2);return a[0]===a[1]?!0:a[0]instanceof f&&a[1]instanceof f?g.equals(a[0],a[1]):d.isDate(a[0])&&d.isDate(a[1])?a[0].getTime()===a[1].getTime():!1})},b.functions.relate=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,3,3);if(a[0]instanceof
f&&a[1]instanceof f)return g.relate(a[0],a[1],d.toString(a[2]));if(a[0]instanceof f&&null===a[1]||a[1]instanceof f&&null===a[0]||null===a[0]&&null===a[1])return!1;throw Error("Illegal Argument");})},b.functions.intersection=function(e,c){return b.standardFunctionAsync(e,c,function(b,e,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]||null===a[1]?null:g.intersect(a[0],a[1])})},b.functions.union=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);
b=[];if(0===a.length)throw Error("Function called with wrong number of Parameters");if(1===a.length)if(d.isArray(a[0]))for(a=d.autoCastFeatureToGeometry(a[0]),c=0;c<a.length;c++){if(null!==a[c])if(a[c]instanceof f)b.push(a[c]);else throw Error("Illegal Argument");}else if(d.isImmutableArray(a[0]))for(a=d.autoCastFeatureToGeometry(a[0].toArray()),c=0;c<a.length;c++){if(null!==a[c])if(a[c]instanceof f)b.push(a[c]);else throw Error("Illegal Argument");}else{if(a[0]instanceof f)return d.fixSpatialReference(l.cloneGeometry(a[0]),
e.spatialReference);if(null===a[0])return null;throw Error("Illegal Argument");}else for(c=0;c<a.length;c++)if(null!==a[c])if(a[c]instanceof f)b.push(a[c]);else throw Error("Illegal Argument");return 0===b.length?null:g.union(b)})},b.functions.difference=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);k(a);return null!==a[0]&&null===a[1]?l.cloneGeometry(a[0]):null===a[0]?null:g.difference(a[0],a[1])})},b.functions.symmetricdifference=function(e,c){return b.standardFunctionAsync(e,
c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);k(a);return null===a[0]&&null===a[1]?null:null===a[0]?l.cloneGeometry(a[1]):null===a[1]?l.cloneGeometry(a[0]):g.symmetricDifference(a[0],a[1])})},b.functions.clip=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,2);if(!(a[1]instanceof p)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");return null===a[1]?null:
g.clip(a[0],a[1])})},b.functions.cut=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,2);if(!(a[1]instanceof q)&&null!==a[1])throw Error("Illegal Argument");if(null===a[0])return[];if(!(a[0]instanceof f))throw Error("Illegal Argument");return null===a[1]?[l.cloneGeometry(a[0])]:g.cut(a[0],a[1])})},b.functions.area=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,2);if(null===
a[0])return 0;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.planarArea(a[0],h.convertSquareUnitsToCode(d.defaultUndefined(a[1],-1)))})},b.functions.areageodetic=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,2);if(null===a[0])return 0;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.geodesicArea(a[0],h.convertSquareUnitsToCode(d.defaultUndefined(a[1],-1)))})},b.functions.length=function(e,c){return b.standardFunctionAsync(e,
c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,2);if(null===a[0])return 0;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.planarLength(a[0],h.convertLinearUnitsToCode(d.defaultUndefined(a[1],-1)))})},b.functions.lengthgeodetic=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,2);if(null===a[0])return 0;if(!(a[0]instanceof f))throw Error("Illegal Argument");return g.geodesicLength(a[0],h.convertLinearUnitsToCode(d.defaultUndefined(a[1],
-1)))})},b.functions.distance=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);if(!(a[0]instanceof f))throw Error("Illegal Argument");if(!(a[1]instanceof f))throw Error("Illegal Argument");return g.distance(a[0],a[1],h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1)))})},b.functions.densify=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);if(null===a[0])return null;
if(!(a[0]instanceof f))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof m||a[0]instanceof q?g.densify(a[0],b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1))):a[0]instanceof p?g.densify(x(a[0]),b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1))):a[0]})},b.functions.densifygeodetic=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);
d.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");if(0>=b)throw Error("Illegal Argument");return a[0]instanceof m||a[0]instanceof q?g.geodesicDensify(a[0],b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1))):a[0]instanceof p?g.geodesicDensify(x(a[0]),b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1))):a[0]})},b.functions.generalize=function(e,c){return b.standardFunctionAsync(e,
c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,4);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return g.generalize(a[0],b,d.toBoolean(d.defaultUndefined(a[2],!0)),h.convertLinearUnitsToCode(d.defaultUndefined(a[3],-1)))})},b.functions.buffer=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);if(null===a[0])return null;
if(!(a[0]instanceof f))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");return 0===b?l.cloneGeometry(a[0]):g.buffer(a[0],b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1)))})},b.functions.buffergeodetic=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");
return 0===b?l.cloneGeometry(a[0]):g.geodesicBuffer(a[0],b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1)))})},b.functions.offset=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,6);if(null===a[0])return null;if(!(a[0]instanceof m||a[0]instanceof q))throw Error("Illegal Argument");b=d.toNumber(a[1]);if(isNaN(b))throw Error("Illegal Argument");c=d.toNumber(d.defaultUndefined(a[4],10));if(isNaN(c))throw Error("Illegal Argument");
var e=d.toNumber(d.defaultUndefined(a[5],0));if(isNaN(e))throw Error("Illegal Argument");return g.offset(a[0],b,h.convertLinearUnitsToCode(d.defaultUndefined(a[2],-1)),d.toString(d.defaultUndefined(a[3],"round")).toLowerCase(),c,e)})},b.functions.rotate=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,2,3);b=a[0];if(null===b)return null;if(!(b instanceof f))throw Error("Illegal Argument");b instanceof p&&(b=m.fromExtent(b));c=d.toNumber(a[1]);
if(isNaN(c))throw Error("Illegal Argument");a=d.defaultUndefined(a[2],null);if(null===a)return g.rotate(b,c);if(a instanceof r)return g.rotate(b,c,a);throw Error("Illegal Argument");})},b.functions.centroid=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");return a[0]instanceof r?d.fixSpatialReference(l.cloneGeometry(a[0]),e.spatialReference):a[0]instanceof
m?a[0].centroid:a[0]instanceof q?u.centroidPolyline(a[0]):a[0]instanceof v?u.centroidMultiPoint(a[0]):a[0]instanceof p?a[0].center:null})},b.functions.multiparttosinglepart=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);var k=[];if(null===a[0])return null;if(!(a[0]instanceof f))throw Error("Illegal Argument");if(a[0]instanceof r||a[0]instanceof p)return[d.fixSpatialReference(l.cloneGeometry(a[0]),e.spatialReference)];var n=new y;
g.simplify(a[0]).then(h.callback(function(b){if(b instanceof m){for(var c=[],g=[],f=0;f<b.rings.length;f++)if(b.isClockwise(b.rings[f])){var h=w.fromJSON({rings:[b.rings[f]],hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()});c.push(h)}else g.push({ring:b.rings[f],pt:b.getPoint(f,0)});for(f=0;f<g.length;f++)for(b=0;b<c.length;b++)if(c[b].contains(g[f].pt)){c[b].addRing(g[f].ring);break}n.resolve(c)}else if(b instanceof q){c=[];for(f=0;f<b.paths.length;f++)g=w.fromJSON({paths:[b.paths[f]],
hasZ:!0===b.hasZ,hazM:!0===b.hasM,spatialReference:b.spatialReference.toJSON()}),c.push(g);n.resolve(c)}else if(a[0]instanceof v){b=d.fixSpatialReference(l.cloneGeometry(a[0]),e.spatialReference);for(f=0;f<b.points.length;f++)k.push(b.getPoint(f));n.resolve(k)}else n.resolve(null)},n),h.errback(n));return n.promise})},b.functions.issimple=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);if(null===a[0])return!0;if(a[0]instanceof f)return g.isSimple(a[0]);
throw Error("Illegal Argument");})},b.functions.simplify=function(e,c){return b.standardFunctionAsync(e,c,function(b,c,a){a=d.autoCastFeatureToGeometry(a);d.pcCheck(a,1,1);if(null===a[0])return null;if(a[0]instanceof f)return g.simplify(a[0]);throw Error("Illegal Argument");})})}});