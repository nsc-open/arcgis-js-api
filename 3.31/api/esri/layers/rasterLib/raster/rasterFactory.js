// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/raster/rasterFactory","require dojo/_base/declare dojo/_base/lang dojo/_base/Deferred dojo/_base/array dojo/_base/config dojo/sniff dojo/when ../../../kernel ../../../Evented ../../../request ../../../deferredUtils ../../../urlUtils ./ImageServiceRaster ./TileServiceRaster ./TileRaster ./FunctionRaster".split(" "),function(h,A,e,l,B,C,t,q,u,D,v,w,x,y,r,z,n){h={customDrivers:[],create:function(b){if(b){var c,d,a;b.url&&(a=x.urlToObject(b.url),d=a.path,c=a.query);a=b.serviceInfo;
var g=b.rasterFxArgs||{},p=new l,f,k,m=e.hitch(this,function(c){console.error(c);this._trycustomDrivers(e.mixin({url:d},b),0,p)});if(d)if(-1===d.toLowerCase().indexOf("imageserver")&&-1===d.toLowerCase().indexOf("mapserver"))f=new z(e.mixin({},b,{url:d})),b.rasterFx&&(f=new n({rasterFx:b.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})})),k=f;else{k=new l;a=a||this._getServiceInfo(d,c);var h=e.hitch(this,function(a){a.bandCount?f=a.capabilities&&-1<a.capabilities.toLowerCase().indexOf("tileonly")?new r(e.mixin({},
{serviceInfo:a},c,b,{url:d})):new y(e.mixin({},{serviceInfo:a},c,b,{url:d})):a.tileInfo&&(f=new r(e.mixin({},{serviceInfo:a},c,this._options,{url:d})));b.rasterFx&&(f=new n({rasterFx:b.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})}));k.resolve(f)});q(a,h,m)}else k=f=new n({rasterFx:b.rasterFx,rasterFxArgs:e.mixin({},g,{raster:f})});q(k,e.hitch(this,function(a){a?a.open().then(e.hitch(this,function(b){p.resolve(a)}),m):m(Error("There is no raster to open"))}),m);return p.promise}},register:function(b){this.customDrivers=
this.customDrivers||[];0<this.customDrivers.filter(function(c){return c.sourceType===b.prototype.sourceType}).length||this.customDrivers.push(b)},_trycustomDrivers:function(b,c,d){d=d||new l;var a=this.customDrivers[c];if(a){var g=new a(b);g.open().then(e.hitch(this,function(a){d.resolve(g)}),e.hitch(this,function(a){this._trycustomDrivers(b,c+1,d)}))}else d.reject();return d.promise},_getServiceInfo:function(b,c){c=c||{};var d=c.bandIds;c=c.renderingRule;var a=new l(w._dfdCanceller),e={f:"json"};
d&&(e.bandIds=d);c&&(e.renderingRule=c.toJson?JSON.stringify(c.toJson()):JSON.stringify(c));a._pendingDfd=v({url:b,content:e,handleAs:"json",callbackParamName:"callback"});a._pendingDfd.then(function(b){a.callback(b)},function(b){a.errback(b)});return a.promise}};t("extend-esri")&&e.setObject("layers.rasterLib.raster.rasterFactory",h,u);return h});