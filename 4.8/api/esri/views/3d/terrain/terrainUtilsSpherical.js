// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/Error","./TilingScheme"],function(g,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});d.isInsideExtent=function(a,b,c){void 0===c&&(c=0);return!0};d.tiltToExtentEdge=function(a,b){return 0};d.checkIfTileInfoSupportedForViewSR=function(a,b,c){b=a.lods.length-1;if(a.spatialReference.isWebMercator){if(!f.makeWebMercatorAuxiliarySphere(b).compatibleWith(a))return new e("tilingscheme:incompatible-global-web-mercator","The tiling scheme is not compatible with the ArcGIS Online Web Mercator tiling scheme")}else if(a.spatialReference.isWGS84){if(!f.makeWGS84WithTileSize(a.size[1],
b).compatibleWith(a))return new e("tilingscheme:incompatible-global-wgs84","The tiling scheme is not compatible with the ArcGIS Online WGS84 tiling scheme")}else return new e("tilingscheme:global-unsupported-spatial-reference","The tiling scheme spatial reference is not supported in global scenes");if(c&&!a.spatialReference.equals(c))return new e("tilingscheme:spatial-reference-mismatch","The tiling scheme does not match the spatial reference of the global scene")}});