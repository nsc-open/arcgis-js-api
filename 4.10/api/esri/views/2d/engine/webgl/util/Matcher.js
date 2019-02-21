// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/Logger ../Utils ./vvFlagUtils".split(" "),function(h,m,r,n,t,p){Object.defineProperty(m,"__esModule",{value:!0});var u=n.getLogger("esri/views/2d/engine/webgl/util/Matcher");h=function(){function d(){this._defaultResult=null}d.fromSimpleRenderer=function(b,a,e){var f=b.getSymbols(),g=p.getVVFlags(b.visualVariables);b=new d;f.length&&(a=e.createTemplateGroup(f[0],null,a,g),b.setDefault(a));return b};d.prototype.size=
function(){return 1};d.prototype.getDefault=function(){return this._defaultResult};d.prototype.setDefault=function(b){this._defaultResult=b};d.prototype.match=function(b,a,e){return this.getDefault()};return d}();m.default=h;n=function(d){function b(a,e,f,g,b){var c=d.call(this)||this;c._intervals=[];c._isMaxInclusive=e;g?c._getValue=t.createArcadeFunction(g,b):a&&a.length?"function"===typeof a?(c._field=null,c._getValue=a):(c._field=a,c._normalizationInfo=f,c._getValue=c._getValueFromField.bind(c)):
c._field=null;return c}r(b,d);b.fromCBRenderer=function(a,e,f,g){var c=a.isMaxInclusive,d=a.valueExpression,k=a.normalizationField,l=a.normalizationTotal,q=a.normalizationType,h=p.getVVFlags(a.visualVariables);g=new b(a.field,c,{normalizationField:k,normalizationTotal:l,normalizationType:q},d,g);c=a.backgroundFillSymbol;d=0;for(k=a.classBreakInfos;d<k.length;d++)l=k[d],q=f.createTemplateGroup(l.symbol,c,e,h),g.add({min:l.minValue,max:l.maxValue},q);if(a=a.defaultSymbol)e=f.createTemplateGroup(a,c,
e,h),g.setDefault(e);return g};b.prototype.add=function(a,e){this._intervals.push({interval:a,result:e});this._intervals.sort(function(a,e){return a.interval.min-e.interval.min})};b.prototype.size=function(){return d.prototype.size.call(this)+this._intervals.length};b.prototype.match=function(a,e,f){if(!this._getValue)return this.getDefault();a=this._getValue(a,e,f);if(!a&&(null===a||void 0===a||isNaN(a)))return this.getDefault();for(e=0;e<this._intervals.length;e++){var b=this._intervals[e];f=b.interval;
var b=b.result,c=this._isMaxInclusive?a<=f.max:a<f.max;if(a>=f.min&&c)return b}return this.getDefault()};b.prototype._needsNormalization=function(){var a=this._normalizationInfo;return a&&(a.normalizationField||a.normalizationTotal||a.normalizationType)};b.prototype._getValueFromField=function(a){var e=a.attributes[this._field];if(!this._needsNormalization())return e;var b=this._normalizationInfo,g=b.normalizationField,c=b.normalizationTotal,b=b.normalizationType;a=!!g&&a.attributes[g];if(b)switch(b){case "field":return(a||
void 0)&&e/a;case "log":return Math.log(e)*Math.LOG10E;case "percent-of-total":return e/c*100;default:u.error("Found unknown normalization type: "+b)}else u.error("Normalization is required, but no type was set!")};return b}(h);m.IntervalMatcher=n;h=function(d){function b(a,b,f,g){var c=d.call(this)||this;c._resultsMap=new Map;f?c._getValue=t.createArcadeFunction(f,g):a&&a.length?"function"===typeof a[0]?(c._fields=null,c._getValue=a[0]):(c._fields=a,c._seperator=b||"",c._getValue=c._getValueFromFields.bind(c)):
c._fields=null;return c}r(b,d);b.fromUVRenderer=function(a,e,f,g){var c=a.uniqueValueInfos,d=p.getVVFlags(a.visualVariables),k=a.fieldDelimiter,l=a.valueExpression,h=[a.field];a.field2&&h.push(a.field2);a.field3&&h.push(a.field3);var m=a.backgroundFillSymbol;g=new b(h,k,l,g);for(k=0;k<c.length;k++)l=c[k],h=f.createTemplateGroup(l.symbol,m,e,d),g.add(l.value,h);a.defaultSymbol&&(a=f.createTemplateGroup(a.defaultSymbol,m,e,d),g.setDefault(a));return g};b.prototype.add=function(a,b){this._resultsMap.set(a.toString(),
b)};b.prototype.size=function(){return d.prototype.size.call(this)+this._resultsMap.size};b.prototype.match=function(a,b,f){if(!this._getValue)return this.getDefault();a=this._getValue(a,b,f);if(!a&&(null===a||void 0===a))return this.getDefault();a=a.toString();return this._resultsMap.has(a)?this._resultsMap.get(a):this.getDefault()};b.prototype._getValueFromFields=function(a){for(var b=[],f=0,d=this._fields;f<d.length;f++)b.push(a.attributes[d[f]]);return b.join(this._seperator)};return b}(h);m.MapMatcher=
h});