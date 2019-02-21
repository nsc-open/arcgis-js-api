// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports dojo/promise/all ../../../../core/has ./Rect ./RectangleBinPack ../../../webgl/Texture".split(" "),function(r,t,n,u,p,m,q){return function(){function d(c,b,a){this.height=this.width=0;this._dirties=[];this._glyphData=[];this._currentPage=0;this._glyphIndex={};this._textures=[];this._rangePromises=new Map;(0>=c||0>=b)&&console.error("Glyph mosaic width and height must be greater than zero!");this.width=c;this.height=b;this._glyphSource=a;this._binPack=new m(c-4,b-4);this._glyphData.push(new Uint8Array(c*
b));this._dirties.push(!0);this._textures.push(void 0);this._addDecorationGlyph()}d.prototype.getGlyphItems=function(c,b){for(var a=this,e=[],k=this._glyphSource,f=new Set,d=1/256,g=0;g<b.length;g++)f.add(Math.floor(b[g]*d));var h=[];f.forEach(function(b){if(256>=b){var e=c+b;a._rangePromises.has(e)?h.push(a._rangePromises.get(e)):(b=k.getRange(c,b).then(function(){a._rangePromises["delete"](e)}).catch(function(){a._rangePromises["delete"](e);throw Error("Unable to query resource");}),a._rangePromises.set(e,
b),h.push(b))}});return n(h).then(function(f){var d=a._glyphIndex[c];d||(d={},a._glyphIndex[c]=d);for(var g=0;g<b.length;g++){f=b[g];var l=d[f];if(l)e[f]={rect:l.rect,metrics:l.metrics,page:l.page};else if((l=k.getGlyph(c,f))&&l.metrics){var h=a._recordGlyph(l,f);d[f]={rect:h,metrics:l.metrics,tileIDs:null,page:a._currentPage};e[f]={rect:h,metrics:l.metrics,page:a._currentPage};a._dirties[a._currentPage]=!0}}return e})};d.prototype._recordGlyph=function(c,b){var a=c.metrics;if(0===a.width)a=new p(0,
0,0,0);else{b=a.width+6;var e=a.height+6,k=b%4?4-b%4:4,f=e%4?4-e%4:4;1===k&&(k=5);1===f&&(f=5);a=this._binPack.allocate(b+k,e+f);a.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new m(this.width-4,this.height-4),a=this._binPack.allocate(b+k,e+f));k=this._glyphData[this._currentPage];c=c.bitmap;
var d=f=void 0;if(c)for(var g=0;g<e;g++)for(var f=b*g,d=this.width*(a.y+g+1)+a.x,h=0;h<b;h++)k[d+h+1]=c[f+h]}return a};d.prototype._addDecorationGlyph=function(){for(var c=[117,149,181,207,207,181,149,117],b=[],a=0;a<c.length;a++)for(var e=c[a],d=0;11>d;d++)b.push(e);c={metrics:{width:5,height:2,left:0,top:0,advance:0},bitmap:new Uint8Array(b)};this._recordGlyph(c,0)};d.prototype.bind=function(c,b,a,d){this._textures[a]||(this._textures[a]=new q(c,{pixelFormat:6406,dataType:5121,width:this.width,
height:this.height},new Uint8Array(this.width*this.height)));var e=this._textures[a];e.setSamplingMode(b);this._dirties[a]&&e.setData(this._glyphData[a]);c.bindTexture(e,d);this._dirties[a]=!1};d.prototype.dispose=function(){this._binPack=null;for(var c=0,b=this._textures;c<b.length;c++){var a=b[c];a&&a.dispose()}this._textures.length=0;this._glyphData.length=0};return d}()});