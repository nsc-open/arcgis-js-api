// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/TextureManager","require exports ../../../../config ../../../../core/Error ../../../../core/Logger ../../../../core/promiseUtils ./CIMSymbolHelper ./fontUtils ./GlyphMosaic ./GlyphSource ./SDFHelper ./SpriteMosaic ./Utils ../../../3d/support/imageUtils ../../../support/screenshotUtils ./SDFConverter".split(" "),function(z,A,n,k,p,h,f,q,r,t,m,u,g,v,w,x){function y(b){if(b.type){switch(g.normalizeSymbolType(b.type)){case "simple-marker":return b.path?
"simple-marker"+b.style+b.path:"simple-marker"+b.style;case "simple-line":return"simple-line"+b.style}if(g.isPictureSymbol(b))return b.url?b.url:b.imageData+(""+b.width+b.height)}return JSON.stringify(b)}var l=p.getLogger("esri.views.2d.engine.webgl.TextureManager");return function(){function b(){this._invalidFontsMap=new Map;this._spriteMosaic=new u(1024,1024,500);this._glyphSource=new t(n.fontsUrl+"/{fontstack}/{range}.pbf");this._glyphMosaic=new r(1024,1024,this._glyphSource);this._sdfConverter=
new x.default(126)}Object.defineProperty(b.prototype,"sprites",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"glyphs",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});b.prototype.dispose=function(){this._spriteMosaic.dispose();this._glyphMosaic.dispose();this._rasterizationCanvas=null};b.prototype.rasterizeItem=function(a,c){void 0===c&&(c=null);return a?a.type&&-1!==a.type.toLowerCase().indexOf("3d")?(l.error(new k("mapview-invalid-type",
"Mapviewer does not support 3d symbol type: "+a.type,a)),h.resolve({glyphMosaicItems:[],spriteMosaicItem:null})):!a.type||"text"!==a.type&&"esriTS"!==a.type?this._rasterizeSpriteSymbol(a).then(function(a){return{spriteMosaicItem:a}}):this._rasterizeTextSymbol(a,c).then(function(a){return{glyphMosaicItems:a}}):(l.error(new k("mapview-null-resource","Unable to rasterize null resource")),h.resolve(null))};b.prototype.bindSpritePage=function(a,c,e,d){d||(d=9729);this._spriteMosaic.bind(a,d,c,e)};b.prototype.bindGlyphsPage=
function(a,c,e){this._glyphMosaic.bind(a,9729,c,e)};b.prototype._rasterizeTextSymbol=function(a,c){var e=this,d=q.getFullyQualifiedFontName(a.font);a=this._invalidFontsMap.has(d);return this._glyphMosaic.getGlyphItems(a?"arial-unicode-ms-regular":d,c).catch(function(a){l.error(new k("mapview-invalid-resource","Couldn't find font "+d+". Falling back to Arial Unicode MS Regular"));e._invalidFontsMap.set(d,!0);return e._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",c)})};b.prototype._rasterizeSpriteSymbol=
function(a){var c=this;if(a&&(g.isFillSymbol(a)||g.isLineSymbol(a))&&"style"in a&&("solid"===a.style||"esriSFSSolid"===a.style||"esriSLSSolid"===a.style||"none"===a.style||"esriSFSNull"===a.style||"esriSLSNull"===a.style))return h.resolve(null);var e=y(a);if(this._spriteMosaic.has(e))return h.resolve(this._spriteMosaic.getSpriteItem(e));if("simple-marker"!==a.type&&"esriSMS"!==a.type||!a.path){if(a.url||a.imageData)return v.requestImage(a.imageData?"data:"+a.contentType+";base64,"+a.imageData:a.url).then(function(d){d=
c._rasterizeResource(d);return c._addItemToMosaic(e,d.size,d.anchor,d.image,!g.isMarkerSymbol(a),d.sdf)});var d=this._rasterizeResource(a);return h.resolve(this._addItemToMosaic(e,d.size,d.anchor,d.image,!g.isMarkerSymbol(a),d.sdf))}var b=[126,126],f=this;return this._sdfConverter.draw(a.path).then(function(a){return f._addItemToMosaic(e,b,[0,0],new Uint32Array(a.buffer),!1,!0)})};b.prototype._rasterizeResource=function(a){if(a instanceof HTMLImageElement){this._rasterizationCanvas||(this._rasterizationCanvas=
document.createElement("canvas"));this._rasterizationCanvas.width=a.width;this._rasterizationCanvas.height=a.height;var c=this._rasterizationCanvas.getContext("2d");c.drawImage(a,0,0,a.width,a.height);for(var c=c.getImageData(0,0,a.width,a.height),c=new Uint8Array(c.data),e=void 0,d=0;d<c.length;d+=4)e=c[d+3]/255,c[d]*=e,c[d+1]*=e,c[d+2]*=e;var e=a.width,d=a.height,b=c;if(500<=e||500<=d)b=a.width/a.height,1<b?(e=500,d=Math.round(500/b)):(d=500,e=Math.round(500*b)),b=new Uint8Array(4*e*d),w.resampleHermite(c,
a.width,a.height,new Uint8ClampedArray(b.buffer),e,d,!1);return{size:[e,d],anchor:[0,0],image:new Uint32Array(b.buffer),sdf:!1}}return this._rasterizeJSON(a)};b.prototype._addItemToMosaic=function(a,c,e,d,b,f){return this._spriteMosaic.addSpriteItem(a,c,e,d,b,f)};b.prototype._rasterizeJSON=function(a){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));if("simple-fill"===a.type||"esriSFS"===a.type){var c=f.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,
a.style);a=c[0];var b=c[1],c=c[2];return{size:[b,c],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!1}}if("simple-line"===a.type||"esriSLS"===a.type)return c=f.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,a.style),a=c[0],b=c[1],c=c[2],{size:[b,c],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!0};"simple-marker"===a.type||"esriSMS"===a.type?(a=f.CIMSymbolHelper.fromSimpleMarker(a),b=!0):b=m.SDFHelper.checkSDF(a);if(b)return b=(new m.SDFHelper).buildSDF(a),a=b[0],{size:[b[1],b[2]],
anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!0};var d=f.CIMSymbolHelper.rasterize(this._rasterizationCanvas,a);a=d[0];b=d[1];c=d[2];return{size:[b,c],anchor:[d[3],d[4]],image:new Uint32Array(a.buffer),sdf:!1}};return b}()});