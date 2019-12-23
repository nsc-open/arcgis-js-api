// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/engine/webgl/util/Matcher",["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/Logger","../Utils"],function(f,g,l,h,m){Object.defineProperty(g,"__esModule",{value:!0});var n=h.getLogger("esri/views/2d/engine/webgl/util/Matcher");f=function(){function e(){this._defaultResult=null}e.prototype.size=function(){return 1};e.prototype.getDefault=function(){return this._defaultResult};e.prototype.setDefault=function(a){this._defaultResult=
a};e.prototype.match=function(a,b){return this.getDefault()};return e}();g.default=f;h=function(e){function a(b,k,d,c){var a=e.call(this)||this;a._intervals=[];a._isMaxInclusive=k;d?a._getValue=m.createArcadeFunction(d):b&&b.length?"function"===typeof b?(a._field=null,a._getValue=b):(a._field=b,a._normalizationInfo=c,a._getValue=a._getValueFromField.bind(a)):a._field=null;return a}l(a,e);a.prototype.add=function(b,a){this._intervals.push({interval:b,result:a});this._intervals.sort(function(b,a){return b.interval.min-
a.interval.min})};a.prototype.size=function(){return e.prototype.size.call(this)+this._intervals.length};a.prototype.match=function(b,a){if(!this._getValue)return this.getDefault();b=this._getValue(b,a);if(!b&&(null===b||void 0===b||isNaN(b)))return this.getDefault();for(a=0;a<this._intervals.length;a++){var d=this._intervals[a],c=d.interval,d=d.result,k=this._isMaxInclusive?b<=c.max:b<c.max;if(b>=c.min&&k)return d}return this.getDefault()};a.prototype._needsNormalization=function(){var b=this._normalizationInfo;
return b&&(b.normalizationField||b.normalizationTotal||b.normalizationType)};a.prototype._getValueFromField=function(b){var a=b.attributes[this._field];if(!this._needsNormalization())return a;var d=this._normalizationInfo,c=d.normalizationField,e=d.normalizationTotal,d=d.normalizationType;b=!!c&&b.attributes[c];if(d)switch(d){case "field":return(b||void 0)&&a/b;case "log":return Math.log(a)*Math.LOG10E;case "percent-of-total":return a/e*100;default:n.error("Found unknown normalization type: "+d)}else n.error("Normalization is required, but no type was set!")};
return a}(f);g.IntervalMatcher=h;f=function(e){function a(b,a,d){var c=e.call(this)||this;c._resultsMap=new Map;d?c._getValue=m.createArcadeFunction(d):b&&b.length?"function"===typeof b[0]?(c._fields=null,c._getValue=b[0]):(c._fields=b,c._seperator=a||"",c._getValue=c._getValueFromFields.bind(c)):c._fields=null;return c}l(a,e);a.prototype.add=function(b,a){this._resultsMap.set(b.toString(),a)};a.prototype.size=function(){return e.prototype.size.call(this)+this._resultsMap.size};a.prototype.match=
function(b,a){if(!this._getValue)return this.getDefault();b=this._getValue(b,a);if(!b&&(null===b||void 0===b))return this.getDefault();b=b.toString();return this._resultsMap.has(b)?this._resultsMap.get(b):this.getDefault()};a.prototype._getValueFromFields=function(a){for(var b=[],d=0,c=this._fields;d<c.length;d++)b.push(a.attributes[c[d]]);return b.join(this._seperator)};return a}(f);g.MapMatcher=f});