// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/TimeExtent","require exports ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/JSONSupport ./core/accessorSupport/decorators".split(" "),function(n,p,k,e,l,d){var m={milliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},seconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},minutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},hours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},
days:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},weeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},months:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},years:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:1},decades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},centuries:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}};return function(h){function b(a,c){a=h.call(this)||this;a.endTime=null;a.startTime=null;return a}k(b,
h);f=b;b.prototype.normalizeCtorArgs=function(a,c){return!a||a instanceof Date?{startTime:a,endTime:c}:a};b.prototype.readEndTime=function(a,c){return null!=c.endTime?new Date(c.endTime):null};b.prototype.writeEndTime=function(a,c,b){c.endTime=a?a.getTime():null};b.prototype.readStartTime=function(a,c){return null!=c.startTime?new Date(c.startTime):null};b.prototype.writeStartTime=function(a,c,b){c.startTime=a?a.getTime():null};b.prototype.clone=function(){return new f({endTime:this.endTime,startTime:this.startTime})};
b.prototype.intersection=function(a){if(!a)return null;var c=this.startTime?this.startTime.getTime():-Infinity,b=this.endTime?this.endTime.getTime():Infinity,d=a.startTime?a.startTime.getTime():-Infinity;a=a.endTime?a.endTime.getTime():Infinity;var g,e;d>=c&&d<=b?g=d:c>=d&&c<=a&&(g=c);b>=d&&b<=a?e=b:a>=c&&a<=b&&(e=a);if(isNaN(g)||isNaN(e))return null;c=new f;c.startTime=-Infinity===g?null:new Date(g);c.endTime=Infinity===e?null:new Date(e);return c};b.prototype.offset=function(a,c){var b=new f,d=
this.startTime,e=this.endTime;d&&(b.startTime=this._offsetDate(d,a,c));e&&(b.endTime=this._offsetDate(e,a,c));return b};b.prototype._offsetDate=function(a,b,d){a=new Date(a.getTime());b&&d&&(d=m[d],a[d.setter](a[d.getter]()+b*d.multiplier));return a};e([d.property({type:Date,json:{write:{allowNull:!0}}})],b.prototype,"endTime",void 0);e([d.reader("endTime")],b.prototype,"readEndTime",null);e([d.writer("endTime")],b.prototype,"writeEndTime",null);e([d.property({type:Date,json:{write:{allowNull:!0}}})],
b.prototype,"startTime",void 0);e([d.reader("startTime")],b.prototype,"readStartTime",null);e([d.writer("startTime")],b.prototype,"writeStartTime",null);return b=f=e([d.subclass("esri.TimeExtent")],b);var f}(d.declared(l))});