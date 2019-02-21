// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/generatorHelper ../../../../config ../../../../core/asyncUtils ../../../../core/Error ../../../../core/Logger ../../../../core/promiseUtils ./CIMSymbolHelper ./fontUtils ./GlyphMosaic ./GlyphSource ./SDFConverter ./SDFHelper ./SpriteMosaic ./Utils ../../../3d/support/imageUtils".split(" "),function(F,G,p,q,v,w,n,x,t,g,y,z,A,B,u,C,h,D){function E(b){if(b.type){switch(h.normalizeSymbolType(b.type)){case "simple-marker":return b.path?
"simple-marker"+b.style+b.path:"simple-marker"+b.style;case "simple-line":return"simple-line"+b.style+b.cap;case "simple-fill":return"simple-fill"+b.style}if(h.isPictureSymbol(b))return b.url?b.url:b.imageData+(""+b.width+b.height)}return JSON.stringify(b)}var r=x.getLogger("esri.views.2d.engine.webgl.TextureManager");return function(){function b(){this._invalidFontsMap=new Map;this._sdfConverter=new B.default(126);this._spriteMosaic=new C(1024,1024,250);this._glyphSource=new A(v.fontsUrl+"/{fontstack}/{range}.pbf");
this._glyphMosaic=new z(1024,1024,this._glyphSource)}Object.defineProperty(b.prototype,"sprites",{get:function(){return this._spriteMosaic},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"glyphs",{get:function(){return this._glyphMosaic},enumerable:!0,configurable:!0});b.prototype.dispose=function(){this._spriteMosaic.dispose();this._glyphMosaic.dispose();this._rasterizationCanvas=null};b.prototype.rasterizeItem=function(a,d){void 0===d&&(d=null);return a?a.type&&-1!==a.type.toLowerCase().indexOf("3d")?
(r.error(new n("mapview-invalid-type","MapView does not support 3d symbol type: "+a.type,a)),t.resolve({glyphMosaicItems:[],spriteMosaicItem:null})):!a.type||"text"!==a.type&&"esriTS"!==a.type?w.safeCast(this._rasterizeSpriteSymbol(a)).then(function(a){return{spriteMosaicItem:a}}):this._rasterizeTextSymbol(a,d).then(function(a){return{glyphMosaicItems:a}}):(r.error(new n("mapview-null-resource","Unable to rasterize null resource")),t.resolve(null))};b.prototype.bindSpritePage=function(a,d,c,e){e||
(e=9729);this._spriteMosaic.bind(a,e,d,c)};b.prototype.bindGlyphsPage=function(a,d,c){this._glyphMosaic.bind(a,9729,d,c)};b.prototype._rasterizeTextSymbol=function(a,d){var c=this,e=y.getFullyQualifiedFontName(a.font);a=this._invalidFontsMap.has(e);return this._glyphMosaic.getGlyphItems(a?"arial-unicode-ms-regular":e,d).catch(function(a){r.error(new n("mapview-invalid-resource","Couldn't find font "+e+". Falling back to Arial Unicode MS Regular"));c._invalidFontsMap.set(e,!0);return c._glyphMosaic.getGlyphItems("arial-unicode-ms-regular",
d)})};b.prototype._rasterizeSpriteSymbol=function(a){return p(this,void 0,void 0,function(){var d,c,e,b,k,l,m;return q(this,function(f){if(a&&(h.isFillSymbol(a)||h.isLineSymbol(a))&&"style"in a&&("solid"===a.style||"esriSFSSolid"===a.style||"esriSLSSolid"===a.style||"none"===a.style||"esriSFSNull"===a.style||"esriSLSNull"===a.style))return[2,null];d=E(a);if(this._spriteMosaic.has(d))return[2,this._spriteMosaic.getSpriteItem(d)];if(("simple-marker"===a.type||"esriSMS"===a.type)&&a.path)return[2,this._handleSVG(a,
d)];if(a.url||a.imageData)return[2,this._handleImage(a,d)];c=this._rasterizeResource(a);e=c.size;b=c.anchor;k=c.image;l=c.sdf;m=c.simplePattern;return[2,this._addItemToMosaic(d,e,b,k,!h.isMarkerSymbol(a),l,m)]})})};b.prototype._handleSVG=function(a,d){return p(this,void 0,void 0,function(){var c,e;return q(this,function(b){switch(b.label){case 0:return c=[126,126],[4,this._sdfConverter.draw(a.path)];case 1:return e=b.sent(),[2,this._addItemToMosaic(d,c,[0,0],new Uint32Array(e.buffer),!1,!0,!0)]}})})};
b.prototype._handleImage=function(a,d){return p(this,void 0,void 0,function(){var c,e,b,k,l,m,g;return q(this,function(f){switch(f.label){case 0:c=a.imageData?"data:"+a.contentType+";base64,"+a.imageData:a.url,f.label=1;case 1:return f.trys.push([1,3,,4]),[4,D.requestImage(c)];case 2:return e=f.sent(),b=this._rasterizeResource(e),k=b.size,l=b.anchor,m=b.sdf,g=b.image,[2,this._addItemToMosaic(d,k,l,g,!h.isMarkerSymbol(a),m,!1)];case 3:return f.sent(),[2,new n("mapview-invalid-resoure","Could not fetch requested resource at "+
c)];case 4:return[2]}})})};b.prototype._rasterizeResource=function(a){if(a instanceof HTMLImageElement){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas"));this._rasterizationCanvas.width=a.width;this._rasterizationCanvas.height=a.height;var d=this._rasterizationCanvas.getContext("2d");d.drawImage(a,0,0,a.width,a.height);for(var d=d.getImageData(0,0,a.width,a.height),d=new Uint8Array(d.data),c=void 0,b=0;b<d.length;b+=4)c=d[b+3]/255,d[b]*=c,d[b+1]*=c,d[b+2]*=c;
var c=a.width,b=a.height,f=d;if(512<=c||512<=b)f=a.width/a.height,1<f?(c=512,b=Math.round(512/f)):(b=512,c=Math.round(512*f)),f=new Uint8Array(4*c*b),h.resampleHermite(d,a.width,a.height,new Uint8ClampedArray(f.buffer),c,b,!1);return{size:[c,b],anchor:[0,0],image:new Uint32Array(f.buffer),sdf:!1,simplePattern:!1}}return this._rasterizeJSON(a)};b.prototype._addItemToMosaic=function(a,b,c,e,f,g,h){return this._spriteMosaic.addSpriteItem(a,b,c,e,f,g,h)};b.prototype._rasterizeJSON=function(a){this._rasterizationCanvas||
(this._rasterizationCanvas=document.createElement("canvas"));if("simple-fill"===a.type||"esriSFS"===a.type){var b=g.SymbolHelper.rasterizeSimpleFill(this._rasterizationCanvas,a.style);a=b[0];var c=b[1],b=b[2];return{size:[c,b],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!0}}if("simple-line"===a.type||"esriSLS"===a.type)return b=g.SymbolHelper.rasterizeSimpleLine(this._rasterizationCanvas,a.style,a.cap),a=b[0],c=b[1],b=b[2],{size:[c,b],anchor:[0,0],image:new Uint32Array(a.buffer),
sdf:!0,simplePattern:!0};"simple-marker"===a.type||"esriSMS"===a.type?(a=g.CIMSymbolHelper.fromSimpleMarker(a),c=!0):c=u.SDFHelper.checkSDF(a);if(c)return c=(new u.SDFHelper).buildSDF(a),a=c[0],{size:[c[1],c[2]],anchor:[0,0],image:new Uint32Array(a.buffer),sdf:!0,simplePattern:!0};var e=g.CIMSymbolHelper.rasterize(this._rasterizationCanvas,a);a=e[0];c=e[1];b=e[2];return{size:[c,b],anchor:[e[3],e[4]],image:new Uint32Array(a.buffer),sdf:!1,simplePattern:!1}};return b}()});