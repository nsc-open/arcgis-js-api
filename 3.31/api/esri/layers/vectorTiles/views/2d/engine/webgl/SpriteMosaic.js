// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/SpriteMosaic","require exports ./GeometryUtils ./Rect ./RectangleBinPack ../../../webgl/Texture".split(" "),function(u,v,p,r,q,t){return function(){function d(a,c,b){void 0===b&&(b=0);this._size=[];this._mosaicsData=[];this._textures=[];this._dirties=[];this._pageHeight=this._pageWidth=this._currentPage=this._maxItemSize=0;this._mosaicRects=new Map;this._spriteCopyQueue=[];this.pixelRatio=1;(0>=a||0>=c)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!");
this._pageWidth=a;this._pageHeight=c;0<b&&(this._maxItemSize=b);this.pixelRatio=window.devicePixelRatio|1;this._binPack=new q(this._pageWidth,this._pageHeight);this._mosaicsData[0]=new Uint32Array(Math.floor(this._pageWidth)*Math.floor(this._pageHeight));this._dirties.push(!0);this._size.push([this._pageWidth,this._pageHeight]);this._textures.push(void 0)}d.prototype.getWidth=function(a){return a>=this._size.length?-1:this._size[a][0]};d.prototype.getHeight=function(a){return a>=this._size.length?
-1:this._size[a][1]};d.prototype.getPage=function(a){return a<this._textures.length?this._textures[a]:null};d.prototype.has=function(a){return this._mosaicRects.has(a)};Object.defineProperty(d.prototype,"itemCount",{get:function(){return this._mosaicRects.size},enumerable:!0,configurable:!0});d.prototype.getSpriteItem=function(a){return this._mosaicRects.get(a)};d.prototype.addSpriteItem=function(a,c,b,d,m,h){if(this._mosaicRects.has(a))return this._mosaicRects.get(a);var f=this._allocateImage(c[0],
c[1]),e=f[0],l=f[1],f=f[2];if(0>=e.width||0>=e.height)return null;b={rect:e,width:c[0],height:c[1],anchorX:b[0],anchorY:b[1],sdf:h,pixelRatio:1,page:l};this._mosaicRects.set(a,b);this._copy({rect:e,spriteSize:c,spriteData:d,page:l,pageSize:f,repeat:m,sdf:h});return b};d.prototype.hasItemsToProcess=function(){return 0!==this._spriteCopyQueue.length};d.prototype.processNextItem=function(){var a=this._spriteCopyQueue.pop();a&&this._copy(a)};d.prototype.getSpriteItems=function(a){for(var c={},b=0;b<a.length;b++){var d=
a[b];c[d]=this.getSpriteItem(d)}return c};d.prototype.getMosaicItemPosition=function(a,c){c=(a=this.getSpriteItem(a))&&a.rect;if(!c)return null;c.width=a.width;c.height=a.height;return{size:[a.width,a.height],tl:[(c.x+1)/this._size[a.page][0],(c.y+1)/this._size[a.page][1]],br:[(c.x+1+a.width)/this._size[a.page][0],(c.y+1+a.height)/this._size[a.page][1]],page:a.page}};d.prototype.bind=function(a,c,b,d){void 0===b&&(b=0);void 0===d&&(d=0);this._textures[b]||(this._textures[b]=new t(a,{pixelFormat:6408,
dataType:5121,width:this._size[b][0],height:this._size[b][1]},new Uint8Array(this._mosaicsData[b].buffer)));var f=this._textures[b];f.setSamplingMode(c);this._dirties[b]&&(f.setData(new Uint8Array(this._mosaicsData[b].buffer)),f.generateMipmap());a.bindTexture(f,d);this._dirties[b]=!1};d._copyBits=function(a,c,b,d,m,h,k,e,l,n,g){var f=d*c+b;k=e*h+k;if(g)for(k-=h,g=-1;g<=n;g++,f=((g+n)%n+d)*c+b,k+=h)for(e=-1;e<=l;e++)m[k+e]=a[f+(e+l)%l];else for(g=0;g<n;g++){for(e=0;e<l;e++)m[k+e]=a[f+e];f+=c;k+=h}};
d.prototype._copy=function(a){if(!(a.page>=this._mosaicsData.length)){var c=a.spriteData,b=this._mosaicsData[a.page];b&&c||console.error("Source or target images are uninitialized!");d._copyBits(c,a.spriteSize[0],0,0,b,a.pageSize[0],a.rect.x+1,a.rect.y+1,a.spriteSize[0],a.spriteSize[1],a.repeat);this._dirties[a.page]=!0}};d.prototype._allocateImage=function(a,c){a+=2;c+=2;var b=Math.max(a,c);if(this._maxItemSize&&this._maxItemSize<b){var b=Math.pow(2,Math.ceil(p.log2(a))),d=Math.pow(2,Math.ceil(p.log2(c)));
a=new r(0,0,a,c);this._mosaicsData.push(new Uint32Array(b*d));this._dirties.push(!0);this._size.push([b,d]);this._textures.push(void 0);return[a,this._mosaicsData.length-1,[b,d]]}b=this._binPack.allocate(a+(a%4?4-a%4:0),c+(c%4?4-c%4:0));return 0>=b.width?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,
this._pageHeight]),this._textures.push(void 0),this._binPack=new q(this._pageWidth,this._pageHeight),this._allocateImage(a,c)):[b,this._currentPage,[this._pageWidth,this._pageHeight]]};d.prototype.dispose=function(){this._binPack=null;for(var a=0,c=this._textures;a<c.length;a++){var b=c[a];b&&b.dispose()}this._textures.length=0;this._mosaicsData.length=0;this._mosaicRects.clear()};return d}()});