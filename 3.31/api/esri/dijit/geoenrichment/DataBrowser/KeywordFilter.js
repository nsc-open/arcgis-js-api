// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/KeywordFilter",["dojo/_base/declare","dojo/_base/array","dojo/_base/lang"],function(d,c,e){return d(null,{isKeywordFilter:!0,searchString:"",searchFields:null,delimiters:/[\s;,\/?:@&=\$#'%"`~!^\(\)\[\]\{\}\\*|\u0000-\u001f\u007f-\u009f\u2000-\u2bff\ud800-\uffff]+/,constructor:function(a,b){this.update(a);this.searchFields=b?"string"==typeof b?[b]:b:["alias","description","fieldCategory"]},update:function(a){this._keywords=(this.searchString=e.trim(a||""))&&
"*"!=this.searchString?this.searchString.toLowerCase().split(this.delimiters):null},_keywords:null,isActive:function(){return!!this._keywords},match:function(a){return!this._keywords||c.some(this.searchFields,function(b){return this._matchField(a[b])},this)},_matchField:function(a){if(!a)return!1;a=a.toLowerCase();return c.every(this._keywords,function(b){return 0<=a.indexOf(b)})}})});