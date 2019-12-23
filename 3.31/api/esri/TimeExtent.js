// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/TimeExtent",["dojo/_base/declare","dojo/_base/lang","dojo/has","./kernel"],function(h,k,l,m){var g=h(null,{declaredClass:"esri.TimeExtent",constructor:function(a){if(1<arguments.length)this._create(arguments[0],arguments[1]);else if(a)if(k.isArray(a)){var b=a[0],c=a[1];this.startTime=null===b||"null"===b?null:new Date(b);this.endTime=null===c||"null"===c?null:new Date(c)}else a instanceof Date&&this._create(a,null)},offset:function(a,b){var c=new g,d=this.startTime,e=this.endTime;d&&
(c.startTime=this._getOffsettedDate(d,a,b));e&&(c.endTime=this._getOffsettedDate(e,a,b));return c},intersection:function(a){return this._intersection(this,a)},toJson:function(){var a=[],b=this.startTime;a.push(b?b.getTime():"null");b=this.endTime;a.push(b?b.getTime():"null");return a},_create:function(a,b){this.startTime=a?new Date(a.getTime()):null;this.endTime=b?new Date(b.getTime()):null},_refData:{esriTimeUnitsMilliseconds:{getter:"getUTCMilliseconds",setter:"setUTCMilliseconds",multiplier:1},
esriTimeUnitsSeconds:{getter:"getUTCSeconds",setter:"setUTCSeconds",multiplier:1},esriTimeUnitsMinutes:{getter:"getUTCMinutes",setter:"setUTCMinutes",multiplier:1},esriTimeUnitsHours:{getter:"getUTCHours",setter:"setUTCHours",multiplier:1},esriTimeUnitsDays:{getter:"getUTCDate",setter:"setUTCDate",multiplier:1},esriTimeUnitsWeeks:{getter:"getUTCDate",setter:"setUTCDate",multiplier:7},esriTimeUnitsMonths:{getter:"getUTCMonth",setter:"setUTCMonth",multiplier:1},esriTimeUnitsYears:{getter:"getUTCFullYear",
setter:"setUTCFullYear",multiplier:1},esriTimeUnitsDecades:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:10},esriTimeUnitsCenturies:{getter:"getUTCFullYear",setter:"setUTCFullYear",multiplier:100}},_intersection:function(a,b){if(a&&b){var c=a.startTime;a=a.endTime;var d=b.startTime;b=b.endTime;c=c?c.getTime():-Infinity;d=d?d.getTime():-Infinity;a=a?a.getTime():Infinity;b=b?b.getTime():Infinity;var e,f;d>=c&&d<=a?e=d:c>=d&&c<=b&&(e=c);a>=d&&a<=b?f=a:b>=c&&b<=a&&(f=b);if(isNaN(e)||isNaN(f))return null;
c=new g;c.startTime=-Infinity===e?null:new Date(e);c.endTime=Infinity===f?null:new Date(f);return c}return null},_getOffsettedDate:function(a,b,c){var d=this._refData;a=new Date(a.getTime());b&&c&&(d=d[c],a[d.setter](a[d.getter]()+b*d.multiplier));return a}});l("extend-esri")&&(m.TimeExtent=g);return g});