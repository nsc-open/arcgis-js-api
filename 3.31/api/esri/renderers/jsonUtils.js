// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/renderers/jsonUtils","dojo/_base/array dojo/_base/lang dojo/has dojox/gfx/_base ../kernel ../Color ../symbols/jsonUtils ./SimpleRenderer ./UniqueValueRenderer ./ClassBreaksRenderer ./VectorFieldRenderer ./DotDensityRenderer ./ScaleDependentRenderer ./TimeClassBreaksAger ./TimeRampAger ./TemporalRenderer ./HeatmapRenderer ./StretchRenderer".split(" "),function(l,f,p,q,r,g,m,n,t,u,v,w,x,e,y,z,A,B){var k={createDefaultRenderer:function(a){a=m.createDefaultSymbol(a);return new n(a)},fromJson:function(a,
b){switch(a.type||""){case "simple":a=new n(a,b);break;case "uniqueValue":a=new t(a,null,null,null,null,b);break;case "classBreaks":a=new u(a,null,b);break;case "vectorField":a=new v(a);break;case "scaleDependent":a=this._scaleDependentFromJson(a);break;case "dotDensity":a=a.attributes?k.createDefaultRenderer("esriGeometryPolygon"):this._dotDensityFromJson(a);break;case "temporal":a=this._temporalFromJson(a,b);break;case "heatmap":a=this._heatmapFromJson(a);break;case "rasterStretch":a=new B(a);break;
default:a=(a=b&&b.geometryType)?k.createDefaultRenderer(a):null}return a},_scaleDependentFromJson:function(a){var b={},c=a.minScale;b.rendererInfos=l.map(a.rendererInfos,function(a){var b=a.maxScale;a={minScale:c,maxScale:b,renderer:a.renderer&&this.fromJson(a.renderer)};c=b;return a},this);return new x(b)},_dotDensityFromJson:function(a){a.backgroundColor&&f.isArray(a.backgroundColor)&&(a.backgroundColor=g.toDojoColor(a.backgroundColor));0<a.dotSize&&(a.dotSize=q.pt2px(a.dotSize));a.fields&&l.forEach(a.fields,
function(a){a&&f.isArray(a.color)&&(a.color=g.toDojoColor(a.color))});a.legendOptions&&(a.legendOptions.backgroundColor&&f.isArray(a.legendOptions.backgroundColor)&&(a.legendOptions.backgroundColor=g.toDojoColor(a.legendOptions.backgroundColor)),a.legendOptions.outline&&(a.legendOptions.outline=m.fromJson(a.legendOptions.outline)));a.outline&&(a.outline=m.fromJson(a.outline));return new w(a)},_temporalFromJson:function(a,b){var c,d;d=b&&b.geometryType;a=a||{};c=this.fromJson(a.observationRenderer,
b);b=a.latestObservationRenderer?this.fromJson(a.latestObservationRenderer,b):null;d=a.trackRenderer?this.fromJson(a.trackRenderer,d?{geometryType:"esriGeometryPolyline"}:null):null;a=this._agerFromJson(a.observationAger);return new z(c,b,d,a)},_agerFromJson:function(a){var b;a=a||{};a.colorRange||a.sizeRange||a.alphaRange?b=this._timeRampFromJson(a):a.agerClassBreakInfos&&(b=this._timeClassBreaksFromJson(a));return b},_timeRampFromJson:function(a){var b,c,d;a.colorRange&&1<a.colorRange.length&&(b=
[g.toDojoColor(a.colorRange[0]),g.toDojoColor(a.colorRange[1])]);a.sizeRange&&1<a.sizeRange.length&&(c=[a.sizeRange[0],a.sizeRange[1]]);a.alphaRange&&1<a.alphaRange.length&&(d=[a.alphaRange[0]/255,a.alphaRange[1]/255]);return new y(b,c,d)},_timeClassBreaksFromJson:function(a){var b=a.agerClassBreakInfos,c,d,f=[],h;c=e.UNIT_DAYS;switch(a.timeUnits){case "esriTimeUnitsSeconds":c=e.UNIT_SECONDS;break;case "esriTimeUnitsMilliseconds":c=e.UNIT_MILLISECONDS;break;case "esriTimeUnitsHours":c=e.UNIT_HOURS;
break;case "esriTimeUnitsMinutes":c=e.UNIT_MINUTES;break;case "esriTimeUnitsMonths":c=e.UNIT_MONTHS;break;case "esriTimeUnitsWeeks":c=e.UNIT_WEEKS;break;case "esriTimeUnitsYears":c=e.UNIT_YEARS}for(h=0;h<b.length;h+=1)a=b[h],d={minAge:0,maxAge:a.oldestAge||Infinity},a.color&&(d.color=g.toDojoColor(a.color)),a.alpha&&(d.alpha=a.alpha/255),d.size=a.size,f[h]=d;return new e(f,c)},_heatmapFromJson:function(a){var b=a.colorStops;b&&b instanceof Array&&l.forEach(b,function(a){a.color=g.toDojoColor(a.color)});
return new A(a)}};p("extend-esri")&&f.mixin(f.getObject("renderer",!0,r),k);return k});