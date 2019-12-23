// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
var __extends=this&&this.__extends||function(){var f=function(e,a){f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,a){d.__proto__=a}||function(d,a){for(var c in a)a.hasOwnProperty(c)&&(d[c]=a[c])};return f(e,a)};return function(e,a){function d(){this.constructor=e}f(e,a);e.prototype=null===a?Object.create(a):(d.prototype=a.prototype,new d)}}();
define("esri/arcade/ImmutablePointArray",["require","exports","./ImmutableArray","../geometry/Point"],function(f,e,a,d){return function(a){function c(b,g,d,c,e,f){b=a.call(this,b)||this;b._lazyPt=[];b._hasZ=!1;b._hasM=!1;b._spRef=g;b._hasZ=d;b._hasM=c;b._cacheId=e;b._partId=f;return b}__extends(c,a);c.prototype.get=function(b){if(void 0===this._lazyPt[b]){var a=this._elements[b];if(void 0===a)return;var c=this._hasZ,e=this._hasM,f=null,f=c&&!e?new d(a[0],a[1],a[2],void 0,this._spRef):e&&c?new d(a[0],
a[1],void 0,a[2],this._spRef):c&&e?new d(a[0],a[1],a[2],a[3],this._spRef):new d(a[0],a[1],this._spRef);f.setCacheValue("_arcadeCacheId",this._cacheId.toString()+"-"+this._partId.toString()+"-"+b.toString());this._lazyPt[b]=f}return this._lazyPt[b]};c.prototype.equalityTest=function(a){return a===this?!0:null===a||!1===a instanceof c?!1:a.getUniqueHash()===this.getUniqueHash()};c.prototype.getUniqueHash=function(){return this._cacheId.toString()+"-"+this._partId.toString()};return c}(a)});