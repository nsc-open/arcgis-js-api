// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/renderers/Renderer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has dojox/gfx/_base ../kernel ../Color ../layers/support/attributeUtils ../support/expressionUtils ../arcadeProfiles/visualizationProfile".split(" "),function(p,k,h,w,q,y,n,z,t,A){var v=Math.PI;p=p(null,{declaredClass:"esri.renderer.Renderer",constructor:function(a){this._cache={};if(a&&!a.declaredClass){this.rotationInfo=a.rotationInfo;if(!this.rotationInfo){var b=a.rotationType,c=a.rotationExpression;if(b||
c)this.rotationInfo={type:b,expression:c}}this.setRotationInfo(this.rotationInfo);this.setSizeInfo(this._readSizeInfo(a.sizeInfo));this.setColorInfo(this._readColorInfo(a.colorInfo));this.setOpacityInfo(this._readOpacityInfo(a.transparencyInfo));this.setVisualVariables(this._readVariables(a.visualVariables));this.setAuthoringInfo(a.authoringInfo)}this.getSymbol=k.hitch(this,this.getSymbol)},getSymbol:function(a){},_readSizeInfo:function(a){if(a){var b=a.minSize,c=a.maxSize;b&&(a.minSize="number"===
typeof b?q.pt2px(b):this._readSizeInfo(b));c&&(a.maxSize="number"===typeof c?q.pt2px(c):this._readSizeInfo(c));a.stops&&h.forEach(a.stops,function(a){a.size&&"number"===typeof a.size&&(a.size=q.pt2px(a.size))})}return a},_readColorInfo:function(a){a&&(h.forEach(a.colors,function(b,c){k.isArray(b)&&(a.colors[c]=n.toDojoColor(b))}),h.forEach(a.stops,function(b,c){b.color&&k.isArray(b.color)&&(a.stops[c].color=n.toDojoColor(b.color))}));return a},_readOpacityInfo:function(a){var b;a&&(b=k.mixin({},a),
b.transparencyValues&&(b.opacityValues=h.map(b.transparencyValues,function(a){return 1-a/100}),delete b.transparencyValues),b.stops&&(b.stops=h.map(b.stops,function(a){a=k.mixin({},a);a.opacity=1-a.transparency/100;delete a.transparency;return a})));return b},_readVariables:function(a){a&&(a=h.map(a,function(a){"sizeInfo"===a.type?a=this._readSizeInfo(a):"colorInfo"===a.type?a=this._readColorInfo(a):"transparencyInfo"===a.type&&(a=this._readOpacityInfo(a),a.type="opacityInfo");return a},this));return a},
setAuthoringInfo:function(a){this.authoringInfo=a},setRotationInfo:function(a){if(a=this.rotationInfo="string"===typeof a?{field:a}:a){if(a.expression&&!k.isFunction(a.expression)&&!a.field){var b=a.expression.match(this.rotationRE);b&&b[1]&&(a.field=b[1])}a.rotationType=a.type}this._cache.rotationInfo=this._processRotationInfo(a);return this},rotationRE:/^\[([^\]]+)\]$/i,_processRotationInfo:function(a){a&&!a.rotationType&&(a.rotationType="geographic");return this._createCache(a)},getRotationAngle:function(a,
b){var c=this._getVarInfo(b&&b.rotationInfo,"rotationInfo");b=c.variable;var c=this._cache[c.cacheKey],d="arithmetic"===this._getRotationType(b),e=c&&c.hasExpr,f=null;if(b.field||e)f=this._getDataValue(a,b,null,c),null!=f&&(f=(f+(d?-90:0))*(d?-1:1));return f},_getRotationType:function(a){return a&&("rotationInfo"===a.type?a.rotationType:a.type)},_getDataValue:function(a,b,c,d,e){d||(d=this._getVarInfo(b,c),b=d.variable,d=this._cache[d.cacheKey],"sizeInfo"===c&&(d=d.root));return a._getDataValue(b,
d,t,e)},setVisualVariables:function(a){var b=this._cache;h.forEach(this.visualVariables,function(a,d){b.hasOwnProperty(d)&&(b[d]=null)},this);this.visualVariables=a;h.some(a,function(a){return!!a.target})&&a.sort(function(a,b){return a.target===b.target?0:a.target?1:-1});h.forEach(a,function(a,d){"colorInfo"===a.type?b[d]=this._processColorInfo(a):"opacityInfo"===a.type?b[d]=this._processOpacityInfo(a):"sizeInfo"===a.type?b[d]=this._processSizeInfo(a):"rotationInfo"===a.type&&(b[d]=this._processRotationInfo(a))},
this);return this},getVisualVariableValues:function(a){var b=this.visualVariables,c;b&&(c=h.map(b,function(b){var c;switch(b.type){case "sizeInfo":c=this.getSize(a,{sizeInfo:b});break;case "colorInfo":c=this.getColor(a,{colorInfo:b});break;case "opacityInfo":c=this.getOpacity(a,{opacityInfo:b});break;case "rotationInfo":c=this.getRotationAngle(a,{rotationInfo:b})}return{variable:b,value:c}},this));return c},getFieldsUsedInExpressions:function(){var a=[];h.forEach(this._getCacheObjects(),function(b){b.syntaxTree&&
(a=a.concat(t.extractFieldNames(b.syntaxTree)))});a.sort();return h.filter(a,function(b,c){return 0===c||a[c-1]!==b})},hasGeometryOperations:function(){return h.some(this._getCacheObjects(),function(a){return a.syntaxTree?t.hasGeometryOperations(a.syntaxTree):!1})},initializeArcadeEngine:function(){var a=[];h.forEach(this._getCacheObjects(),function(b){b.syntaxTree&&a.push(b.syntaxTree)});return A.initialize(a)},hasVisualVariables:function(a,b){return a?!!this.getVisualVariablesForType(a,b):!!(this.getVisualVariablesForType("sizeInfo",
b)||this.getVisualVariablesForType("colorInfo",b)||this.getVisualVariablesForType("opacityInfo",b)||this.getVisualVariablesForType("rotationInfo",b))},getVisualVariablesForType:function(a,b){var c=this.visualVariables,d;!b&&this[a]?("rotationInfo"===a&&(this[a].rotationType=this[a].type),d=[this[a]]):c&&(d=h.filter(c,function(c){return c.type===a&&("string"===typeof b?c.target===b:!1===b?!c.target:!0)}))&&0===d.length&&(d=void 0);return d},setSizeInfo:function(a){this.sizeInfo=this.proportionalSymbolInfo=
a;this._cache.sizeInfo=this._processSizeInfo(a);return this},_processSizeInfo:function(a){return a&&{root:this._createCache(a),minSize:this._createCache(a.minSize),maxSize:this._createCache(a.maxSize)}},_convertExpressionToArcade:function(a){a&&a.expression&&(a.valueExpression="$view.scale")},_getVarInfo:function(a,b){var c;a&&a.type===b?(c=h.indexOf(this.visualVariables,a),a=this.visualVariables[c]):(c=b,a=this[b]);return{variable:a,cacheKey:c}},setProportionalSymbolInfo:function(a){this.setSizeInfo(a);
return this},getSize:function(a,b){var c=this._getVarInfo(b&&b.sizeInfo,"sizeInfo"),d=c.variable,c=this._cache[c.cacheKey],e=null;if(d)var f=d.minSize,e=d.maxSize,f="object"===typeof f&&f?this._getSize(a,f,c&&c.minSize,b):f,e="object"===typeof e&&e?this._getSize(a,e,c&&c.maxSize,b):e,e=this._getSize(a,d,c&&c.root,b,[f,e]);return e},_getSize:function(a,b,c,d,e){var f=b.stops,g=0,l=c&&c.hasExpr,h=c&&c.ipData,k=c&&c.isScaleDriven,n="object"===typeof a&&!!a,m="number"===typeof a?a:null;if(b.field||k||
l){var q=d&&d.scale,l=e?e[0]:b.minSize;e=e?e[1]:b.maxSize;var r=b.minDataValue,p=b.maxDataValue,t=b.valueUnit||"unknown",x=b.valueRepresentation,w=b.scaleBy,u=d&&d.shape;k?m=q:"number"!==typeof m&&n&&(m=this._getDataValue(a,b,null,c));if(!this._isValidNumber(m))return null;if(f)l=this._lookupData(m,h),m=l[0],e=l[1],m===e?g=f[m].size:(m=f[m].size,f=f[e].size,g=m+(f-m)*l[2]);else if(null!=l&&null!=e&&null!=r&&null!=p)m<=r?g=l:m>=p?g=e:(f=(m-r)/(p-r),"area"===w&&u?(l=(m="circle"===u)?v*Math.pow(l/2,
2):l*l,f=l+f*((m?v*Math.pow(e/2,2):e*e)-l),g=m?2*Math.sqrt(f/v):Math.sqrt(f)):g=l+f*(e-l));else if("unknown"===t)null!=l&&null!=r&&(l&&r?(f=m/r,g="circle"===u?2*Math.sqrt(f*Math.pow(l/2,2)):"square"===u||"diamond"===u||"image"===u?Math.sqrt(f*Math.pow(l,2)):f*l):g=m+(l||r),g=g<l?l:g,null!=e&&g>e&&(g=e));else{f=(d&&d.resolution?d.resolution:1)*this._meterIn[t];if("area"===x)g=Math.sqrt(m/v)/f,g*=2;else if(g=m/f,"radius"===x||"distance"===x)g*=2;null!=l&&g<l&&(g=l);null!=e&&g>e&&(g=e)}}else g=f&&f[0]&&
f[0].size,null==g&&(g=b.minSize);return g=isNaN(g)?0:g},getSizeRangeAtScale:function(a,b){var c;a=this._getVarInfo(a,"sizeInfo");var d=this._cache[a.cacheKey],e={scale:b};if((a=a.variable)&&b){var f=a.minSize;b=a.maxSize;var g=a.stops;g&&g.length?(a=g[0].size,d=g[g.length-1].size):(a="object"===typeof f&&f?this._getSize({},f,d&&d.minSize,e):f,d="object"===typeof b&&b?this._getSize({},b,d&&d.maxSize,e):b);if(null!=a||null!=d)a>d&&(c=d,d=a,a=c),c={minSize:a,maxSize:d}}return c},setColorInfo:function(a){this.colorInfo=
a;this._cache.colorInfo=this._processColorInfo(a);return this},_createCache:function(a,b){if(b=z.createAttributeCache(a,b))b.ipData=this._interpolateData(a);return b},_getCacheObjects:function(a){var b;a=a||this._cache;var c=[];for(b in a){var d=a[b];a.hasOwnProperty(b)&&d&&"object"===typeof d&&(d.hasOwnProperty("idSource")?c.push(d):c=c.concat(this._getCacheObjects(d)))}return c},_processColorInfo:function(a){a&&(h.forEach(a.colors,function(b,c){k.isArray(b)&&(a.colors[c]=new n(b))}),h.forEach(a.stops,
function(b,c){b.color&&k.isArray(b.color)&&(a.stops[c].color=new n(b.color))}));return this._createCache(a)},getColor:function(a,b){b=this._getVarInfo(b&&b.colorInfo,"colorInfo");return this._getColorComponent(a,b.variable,this._cache[b.cacheKey])},setOpacityInfo:function(a){this.opacityInfo=a;this._cache.opacityInfo=this._processOpacityInfo(a);return this},_processOpacityInfo:function(a){return this._createCache(a)},getOpacity:function(a,b){b=this._getVarInfo(b&&b.opacityInfo,"opacityInfo");return this._getColorComponent(a,
b.variable,this._cache[b.cacheKey],!0)},_getColorComponent:function(a,b,c,d,e){var f="number"===typeof a?a:null,g=c&&c.hasExpr,h=c&&c.ipData,k;b&&b.field||g?("number"!==typeof f&&"object"===typeof a&&a&&(f=this._getDataValue(a,b,null,c)),this._isValidNumber(f)||(f=null),null!=f&&(k=d?this._getOpacity(f,b,h):this._getColor(f,b,h))):b&&(a=b.stops,d?(k=a&&a[0]&&a[0].opacity,null==k&&(k=b.opacityValues&&b.opacityValues[0])):k=a&&a[0]&&a[0].color||b.colors&&b.colors[0]);e&&(e.data=f,e.value=k);return e||
k},_isValidNumber:function(a){return"number"===typeof a&&!isNaN(a)&&Infinity!==a&&-Infinity!==a},_interpolateData:function(a){var b;if(a)if(a.colors||a.opacityValues){var c=(a.colors||a.opacityValues).length,d=a.minDataValue,e=(a.maxDataValue-d)/(c-1);b=[];for(a=0;a<c;a++)b[a]=d+a*e}else a.stops&&(b=h.map(a.stops,function(a){return a.value}));return b},_getOpacity:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.opacityInfo;a&&(c=a[0],d=a[1],c===d?d=this._getOpacValue(b,c):(c=this._getOpacValue(b,
c),b=this._getOpacValue(b,d),d=c+(b-c)*a[2]));return d},_getOpacValue:function(a,b){return a.opacityValues?a.opacityValues[b]:a.stops[b].opacity},_getColor:function(a,b,c){a=this._lookupData(a,c);var d;b=b||this.colorInfo;a&&(d=a[0],c=a[1],d=d===c?this._getColorObj(b,d):n.blendColors(this._getColorObj(b,d),this._getColorObj(b,c),a[2]));return d},_getColorObj:function(a,b){return a.colors?a.colors[b]:a.stops[b].color},_lookupData:function(a,b){var c;if(b){var d=0,e=b.length-1;h.some(b,function(b,c){if(a<
b)return e=c,!0;d=c;return!1});c=[d,e,(a-b[d])/(b[e]-b[d])]}return c},_meterIn:{inches:1/.0254,feet:1/.3048,yards:1/.9144,miles:1/1609.344,"nautical-miles":1/1852,millimeters:1E3,centimeters:100,decimeters:10,meters:1,kilometers:.001,"decimal-degrees":180/20015077},_writeSizeInfo:function(a){if(a){a=k.mixin({},a);this._convertExpressionToArcade(a);var b=a.minSize,c=a.maxSize;b&&(a.minSize="number"===typeof b?q.px2pt(b):this._writeSizeInfo(b));c&&(a.maxSize="number"===typeof c?q.px2pt(c):this._writeSizeInfo(c));
if(b=a.legendOptions)if(a.legendOptions=k.mixin({},b),b=b.customValues)a.legendOptions.customValues=b.slice(0);a.stops&&(a.stops=h.map(a.stops,function(a){a=k.mixin({},a);a.size&&"number"===typeof a.size&&(a.size=q.px2pt(a.size));return a}))}return a},_writeColorInfo:function(a){a&&(a=k.mixin({},a),a.colors&&(a.colors=h.map(a.colors,function(a){return n.toJsonColor(a)})),a.stops&&(a.stops=h.map(a.stops,function(a){a=k.mixin({},a);a.color&&(a.color=n.toJsonColor(a.color));return a})),a.legendOptions&&
(a.legendOptions=k.mixin({},a.legendOptions)));return a},_writeOpacityInfo:function(a){var b;a&&(b=k.mixin({},a),b.opacityValues&&(b.transparencyValues=h.map(b.opacityValues,function(a){return 100*(1-a)}),delete b.opacityValues),b.stops&&(b.stops=h.map(b.stops,function(a){a=k.mixin({},a);a.transparency=100*(1-a.opacity);delete a.opacity;return a})),b.legendOptions&&(b.legendOptions=k.mixin({},b.legendOptions)));return b},toJson:function(a){var b=this.visualVariables,c=k.clone(this.authoringInfo),
d=a&&a.useLegacyRotationProperties,e=(a=(a=this.getVisualVariablesForType("rotationInfo",!1))&&a[0])&&a.field,f;a&&(a===this.rotationInfo||d)&&(f=a.expression||e&&(k.isFunction(e)?e:"["+e+"]"));b&&(b=h.map(b,function(a){"sizeInfo"===a.type?a=this._writeSizeInfo(a):"colorInfo"===a.type?a=this._writeColorInfo(a):"opacityInfo"===a.type?(a=this._writeOpacityInfo(a),a.type="transparencyInfo"):"rotationInfo"===a.type&&(a=d?null:k.mixin({},a));return a},this),b=h.filter(b,function(a){return null!=a}));c&&
h.forEach(c.visualVariables,function(a){"opacityInfo"===a.type&&(a.type="transparencyInfo")});return{rotationType:f&&(this._getRotationType(a)||"geographic"),rotationExpression:f,colorInfo:this._writeColorInfo(this.colorInfo),transparencyInfo:this._writeOpacityInfo(this.opacityInfo),sizeInfo:this._writeSizeInfo(this.sizeInfo),visualVariables:b,authoringInfo:c}}});w("extend-esri")&&k.setObject("renderer.Renderer",p,y);return p});