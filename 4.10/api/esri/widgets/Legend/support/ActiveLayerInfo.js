// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper dojo/io-query ../../../Color ../../../request ../../../symbols ../../../core/Accessor ../../../core/arrayUtils ../../../core/Collection ../../../core/Handles ../../../core/Logger ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/support/ExportImageParameters ../../../renderers/support/jsonUtils ../../../symbols/support/gfxUtils ../../../symbols/support/symbolPreview ../../../symbols/support/utils ./colorRampUtils ./heatmapRampUtils ./relationshipRampUtils ./sizeRampUtils".split(" "),
function(Z,aa,I,J,n,K,L,M,E,N,O,P,Q,R,t,u,m,S,T,U,V,W,p,X,F,y){function w(h){return"esri.renderers.SimpleRenderer"===h.declaredClass}function x(h){return"esri.renderers.ClassBreaksRenderer"===h.declaredClass}function z(h){return"esri.renderers.UniqueValueRenderer"===h.declaredClass}function G(h){return"esri.renderers.HeatmapRenderer"===h.declaredClass}function A(h){return"esri.renderers.PointCloudClassBreaksRenderer"===h.declaredClass}function B(h){return"esri.renderers.PointCloudStretchRenderer"===
h.declaredClass}function C(h){return"esri.renderers.PointCloudUniqueValueRenderer"===h.declaredClass}var q=R.getLogger("esri.widgets.Legend.support.ActiveLayerInfo"),H=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,v=new E.SimpleMarkerSymbol({size:6,outline:{color:[128,128,128,.5],width:.5}}),Y=new E.SimpleMarkerSymbol({style:"path",path:"M10,5 L5,0 0,5 M5,0 L5,15",outline:{width:1,color:[85,85,85,1]}});return function(h){function d(a){a=h.call(this,a)||this;a._handles=new Q;a._hasColorRamp=!1;a._hasOpacityRamp=
!1;a._hasSizeRamp=!1;a._legendResponse={};a._webStyleSymbolCache=new Map;a.children=new P;a.layer=null;a.legendElements=[];a.parent=null;a.scale=null;a.title=null;a.view=null;return a}J(d,h);d.prototype.initialize=function(){var a=this,b=function(){return a.notifyChange("ready")};this._handles.add([u.on(this,"children","change",function(c){var e=c.removed,f=a._handles;c.added.map(function(a){var c="activeLayerInfo-ready-watcher-"+a.layer.uid;f.add(u.init(a,"ready",b),c)});e.forEach(function(a){return f.remove(a.layer.uid)});
b()})])};d.prototype.destroy=function(){this._handles.destroy();this._webStyleSymbolCache=this._legendResponse=this._handles=null};Object.defineProperty(d.prototype,"ready",{get:function(){return null===this.layer?!0:0<this.children.length?this._isGroupActive():0<this.legendElements.length},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"isScaleDriven",{get:function(){var a=this,b=this.layer;if(null===b)return!1;if(b.renderer){var c=b.get("renderer.valueExpression");return H.test(c)?
!0:(b=b.get("renderer.visualVariables"))&&b.some(function(b){return a._isScaleDrivenSizeVariable(b)})}return!0},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"version",{get:function(){return this._get("version")+1},enumerable:!0,configurable:!0});d.prototype.buildLegendElementsForFeatureCollections=function(a){var b=this;this.legendElements=[];a.forEach(function(a){if("esri.layers.FeatureLayer"===a.declaredClass)b._buildRendererLegendElements(a.renderer,a.title,"append");else if(a.featureSet&&
a.featureSet.features.length){var c=a.layerDefinition;(c=(c=c&&c.drawingInfo)&&T.fromJSON(c.renderer))?b._buildRendererLegendElements(c,a.name,"append"):q.warn("drawingInfo not available!")}})};d.prototype.buildLegendElementsForRenderer=function(){this._buildRendererLegendElements(this.layer.renderer,null,"replace")};d.prototype.buildLegendElementsForTools=function(){var a=this,b=this.layer;"esri.layers.WMTSLayer"===b.declaredClass?this._constructLegendElementsForWMTSlayer():"esri.layers.WMSLayer"===
b.declaredClass?this._constructLegendElementsForWMSSublayers():"esri.layers.MapImageLayer"===b.declaredClass?this._constructLegendElementsForSublayers():(this._handles.remove("imageryLayers-watcher"),this._getLegendLayers().then(function(c){a.legendElements=[];c.forEach(function(c){if("esri.layers.ImageryLayer"===a.layer.declaredClass){var e=b.watch("renderingRule, bandIds",function(){a._legendResponse["default"]=null;a.buildLegendElementsForTools()});a._handles.add(e,"imageryLayers-watcher")}(c=
a._generateSymbolTableElementForLegendLayer(c))&&c.infos.length&&a.legendElements.push(c);a.notifyChange("ready")});a.notifyChange("ready")}).catch(function(a){q.warn("Request to server for legend has failed!",a)}))};d.prototype._isGroupActive=function(){var a=this.children;return a.length?a.some(function(a){return a.ready}):!1};d.prototype._isScaleDrivenSizeVariable=function(a){if(a&&"size"!==a.type)return!1;var b=a.minSize,c=a.maxSize;return"object"===typeof b&&b?this._isScaleDrivenSizeVariable(b):
"object"===typeof c&&c?this._isScaleDrivenSizeVariable(c):!!a.expression||H.test(a.valueExpression)};d.prototype._buildRendererLegendElements=function(a,b,c){var e=this;this._getRendererLegendElements(a,b).then(function(a){"append"===c?Array.prototype.push.apply(e.legendElements,a):e.legendElements=a;e.notifyChange("ready")}).catch(function(a){q.warn("error while building legend for layer!",a)})};d.prototype._constructLegendElementsForWMTSlayer=function(){this.legendElements=[];this._handles.remove("wmts-activeLayer-watcher");
var a=this.layer,b=a.activeLayer;this._handles.add(u.watch(this.layer,"activeLayer",this._constructLegendElementsForWMTSlayer.bind(this)),"wmts-activeLayer-watcher");if(b.styleId&&b.styles){var c=null;b.styles.some(function(a){if(b.styleId===a.id)return c=a.legendUrl,!0});c&&(this.legendElements=[{type:"symbol-table",title:b.title,infos:[{src:c,opacity:a.opacity}]}])}this.notifyChange("ready")};d.prototype._constructLegendElementsForWMSSublayers=function(){this.legendElements=[];this._handles.remove("wms-sublayers-watcher");
var a=this.layer,b=null;if(a.customParameters||a.customLayerParameters)b=I({},a.customParameters,a.customLayerParameters);this._handles.add(u.watch(this.layer,"sublayers",this._constructLegendElementsForWMSSublayers.bind(this)),"wms-sublayers-watcher");this.legendElements=this._generateLegendElementsForWMSSublayers(a.sublayers,b);this.notifyChange("ready")};d.prototype._generateLegendElementsForWMSSublayers=function(a,b){var c=this,e=[];this._handles.add(a.on("change",this._constructLegendElementsForWMSSublayers.bind(this)),
"wms-sublayers-watcher");a.forEach(function(a){var f=a.watch("title, visible, legendEnabled",function(){return c._constructLegendElementsForWMSSublayers()});c._handles.add(f,"wms-sublayers-watcher");a.visible&&a.legendEnabled&&(a=c._generateSymbolTableElementForWMSSublayer(a,b))&&a.infos.length&&e.unshift(a)});return e};d.prototype._generateSymbolTableElementForWMSSublayer=function(a,b){return!a.legendUrl&&a.sublayers?(b=this._generateLegendElementsForWMSSublayers(a.sublayers,b).filter(function(a){return a}),
{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendUrl(a,b)};d.prototype._generateSymbolTableElementForLegendUrl=function(a,b){var c=a.legendUrl;if(c){var e={type:"symbol-table",title:a.title||a.name||a.id&&a.id+"",infos:[]};b&&(c+="?"+K.objectToQuery(b));e.infos.push({src:c,opacity:a.layer&&a.layer.opacity});return e}};d.prototype._getLegendLayers=function(a){var b=this,c=(a=a&&a.hasDynamicLayers?a.dynamicLayers:null)||"default",e=this._legendResponse&&this._legendResponse[c];
return e?t.resolve(e):this._legendRequest(a).then(function(a){a=a.layers;return b._legendResponse[c]=a})};d.prototype._legendRequest=function(a){var b=this.layer;a={f:"json",dynamicLayers:a};"esri.layers.ImageryLayer"===b.declaredClass&&(b.renderingRule&&(a.renderingRule=JSON.stringify(b.renderingRule.toJSON())),b.bandIds&&(a.bandIds=b.bandIds.join()));var c=b.url.replace(/(\/)+$/,"");if(10.01<=b.version){var e=c.indexOf("?"),c=-1<e?c.substring(0,e)+"/legend"+c.substring(e):c+"/legend";b.token&&(c+=
"?token\x3d"+b.token)}else b=c.toLowerCase().indexOf("/rest/"),b=c.substring(0,b)+c.substring(b+5,c.length),c="https://utility.arcgis.com/sharing/tools/legend?soapUrl\x3d"+encodeURI(b)+"\x26returnbytes\x3dtrue";return M(c,{query:a}).then(function(a){return a.data})};d.prototype._constructLegendElementsForSublayers=function(){var a=this;this.legendElements=[];this._handles.remove("sublayers-watcher");var b=this.layer,c=new S.ExportImageParameters({layer:b});this._getLegendLayers(c).then(function(c){var e=
{};c.forEach(function(a){e[a.layerId]=a});a._handles.add(u.watch(b,"sublayers",a._constructLegendElementsForSublayers.bind(a)),"sublayers-watcher");a.legendElements=a._generateLegendElementsForSublayers(b.sublayers,e,b.opacity);a.notifyChange("ready")}).catch(function(a){q.warn("Request to server for legend has failed!",a)}).then(function(){return c.destroy()});this.notifyChange("ready")};d.prototype._generateLegendElementsForSublayers=function(a,b,c){var e=this,f=[];this._handles.add(a.on("change",
this._constructLegendElementsForSublayers.bind(this)),"sublayers-watcher");a.forEach(function(a){var d=a.watch("renderer, opacity, title, visible",function(){return e._constructLegendElementsForSublayers()});e._handles.add(d,"sublayers-watcher");a.visible&&a.legendEnabled&&(d=a&&null!=a.opacity?a.opacity:null,(a=e._generateSymbolTableElementForSublayer(a,b,null!=d?d*c:c))&&a.infos.length&&f.unshift(a))});return f};d.prototype._generateSymbolTableElementForSublayer=function(a,b,c){var e=b[a.id];return!e&&
a.sublayers?(b=this._generateLegendElementsForSublayers(a.sublayers,b,c).filter(function(a){return a}),{type:"symbol-table",title:a.title,infos:b}):this._generateSymbolTableElementForLegendLayer(e,a,c)};d.prototype._generateSymbolTableElementForLegendLayer=function(a,b,c){var e=this;if(a){var f=b&&b.renderer,d=b&&b.title||a.layerName;f&&(f=b&&b.title||this._getRendererTitle(f,b))&&(d&&(f.title=d),d=f);d={type:"symbol-table",title:d,infos:[]};a.legendType&&(d.legendType=a.legendType);a.legend&&this._isLegendLayerInScale(a,
b)&&(b=b?this._sanitizeLegendForSublayer(a.legend.slice(),b):a.legend,d.infos=b.map(function(b){var f=b.url;if(b.imageData&&0<b.imageData.length)f="data:image/png;base64,"+b.imageData;else if(0!==f.indexOf("http")){var f=e.layer.url+"/"+a.layerId+"/images/"+f,d=e.layer.token;d&&(f+="?token\x3d"+d)}else return null;return{label:b.label,src:f,opacity:c,width:b.width,height:b.height}}).filter(function(a){return!!a}));return d.infos.length?d:null}};d.prototype._isLegendLayerInScale=function(a,b){b=b||
this.layer;var c=null,e=null,f=!0;!b.minScale&&0!==b.minScale||!b.maxScale&&0!==b.maxScale?(0===a.minScale&&b.tileInfo&&(c=b.tileInfo.lods[0].scale),0===a.maxScale&&b.tileInfo&&(e=b.tileInfo.lods[b.tileInfo.lods.length-1].scale)):(c=Math.min(b.minScale,a.minScale)||b.minScale||a.minScale,e=Math.max(b.maxScale,a.maxScale));if(0<c&&c<this.scale||e>this.scale)f=!1;return f};d.prototype._sanitizeLegendForSublayer=function(a,b){if(10.1>this.layer.version||0===a.length)return a;b=b.renderer;var c=null,
e=null;a.some(function(a){return a.values})&&a.some(function(a,b){a.values||(c=b,e=a,e.label||(e.label="others"));return null!=e});b?"unique-value"===b.type?e&&(a.splice(c,1),a.push(e)):"class-breaks"===b.type&&(e&&a.splice(c,1),a.reverse(),e&&a.push(e)):e&&(a.splice(c,1),a.push(e));return a};d.prototype._getRendererLegendElements=function(a,b){return w(a)||x(a)||z(a)||G(a)||A(a)||B(a)||C(a)?A(a)||B(a)||C(a)||"esri.renderers.PointCloudRGBRenderer"===a.declaredClass?this._constructPointCloudRendererLegendElements(a,
b):this._constructRendererLegendElements(a,b):(q.warn("Renderer not supported!"),t.resolve([]))};d.prototype._getPointCloudRendererTitle=function(a){return a.legendOptions&&a.legendOptions.title||a.field};d.prototype._constructPointCloudRendererLegendElements=function(a,b){var c=this,e=this.layer.opacity,f=[],d=null,l=null;if(A(a))d={type:"symbol-table",title:b||this._getPointCloudRendererTitle(a),infos:[]},a.colorClassBreakInfos.forEach(function(a){d.infos.unshift({label:a.label||a.minValue+" - "+
a.maxValue,value:[a.minValue,a.maxValue],symbol:c._getAppliedCloneSymbol(v,a.color,e)})});else if(B(a)){var l=a.stops,g=null;if(l.length&&(1===l.length&&(g=l[0].color),!g)){var k=l[0].value,r=l[l.length-1].value;null!=k&&null!=r&&(g=p.getColorFromPointCloudStops(k+(r-k)/2,l))}d={type:"symbol-table",title:null,infos:[{label:null,value:null,symbol:this._getAppliedCloneSymbol(v,g||v.color,e)}]};l={type:"color-ramp",title:b||this._getPointCloudRendererTitle(a),borderColor:U.getStroke(v).color,overlayColor:p.getRampOverlayColor(e),
infos:p.getRampStopsForPointCloud(a.stops)}}else C(a)&&(d={type:"symbol-table",title:b||this._getPointCloudRendererTitle(a),infos:[]},a.colorUniqueValueInfos.forEach(function(a){d.infos.push({label:a.label||a.values.join(", "),value:a.values.join(", "),symbol:c._getAppliedCloneSymbol(v,a.color,e)})}));d&&d.infos.length&&f.push(d);l&&l.infos.length&&f.push(l);a=f.reduce(function(a,b){return a.concat(b.infos)},[]).filter(function(a){return!!a.symbol}).map(function(a){return c._getSymbolPreview(a)});
return t.eachAlways(a).then(function(){return f})};d.prototype._constructRendererLegendElements=function(a,b){var c=this;return this._loadRenderer(a).then(function(a){c._hasColorRamp=!1;c._hasOpacityRamp=!1;c._hasSizeRamp=!1;var e=c._getVisualVariableLegendElements(a)||[],d={type:"symbol-table",title:b||c._getRendererTitle(a),infos:[]},l=null,g=!1;if(G(a))e.push({type:"heatmap-ramp",title:b,infos:X.getHeatmapRampStops(a)});else if(z(a)){var k=a&&a.authoringInfo;if(k&&"relationship"===k.type){var r=
k.focus,h=k.numClasses,m=k.field1,n=k.field2;if(h&&m&&n){for(var k=c.layer,m=[m,n],n=F.getRotationAngleForFocus(r)||0,D=0;D<m.length;D++){var p=m[D],q=p.normalizationField,p={field:c._getFieldAlias(p.field,k),normField:q&&c._getFieldAlias(q,k)},q=Y.clone();q.angle=n;d.infos.push({label:p,symbol:q});n+=90}r=F.getRelationshipRampElement({focus:r,numClasses:h,infos:a.uniqueValueInfos});e.unshift(r)}}else{var u=a.field;a.uniqueValueInfos.forEach(function(a){a.symbol&&d.infos.push({label:a.label||c._getDomainName(u,
a.value)||a.value,value:a.value,symbol:a.symbol})})}a.defaultSymbol&&(d.infos.push({label:a.defaultLabel||"others",symbol:a.defaultSymbol}),g=!0)}else x(a)?(l=c._isUnclassedRenderer(a),l&&c._hasSizeRamp||(a.classBreakInfos.forEach(function(a){a.symbol&&d.infos.unshift({label:a.label||(l?null:a.minValue+" - "+a.maxValue),value:[a.minValue,a.maxValue],symbol:a.symbol})}),l&&(d.title=null),c._updateInfosforClassedSizeRenderer(a,d.infos)),a.defaultSymbol&&!l&&(d.infos.push({label:a.defaultLabel||"others",
symbol:a.defaultSymbol}),g=!0)):w(a)&&a.symbol&&!c._hasSizeRamp&&d.infos.push({label:a.label,symbol:a.symbol});r=a.defaultSymbol;!r||g||w(a)||l&&!c._hasColorRamp&&!c._hasSizeRamp&&!c._hasOpacityRamp||e.push({type:"symbol-table",infos:[{label:a.defaultLabel||"others",symbol:r}]});d.infos.length&&e.unshift(d);var v=c._getSymbolConfig("visualVariables"in a&&a.visualVariables),g=e.reduce(function(a,b){return a.concat(b.infos)},[]).filter(function(a){return!(!a||!a.symbol)}).map(function(a){return c._getSymbolPreview(a,
v)});a=null;return t.eachAlways(g).then(function(){return e})})};d.prototype._updateInfosforClassedSizeRenderer=function(a,b){var c=a.authoringInfo&&"class-breaks-size"===a.authoringInfo.type,e=a.classBreakInfos.some(function(a){return W.isVolumetricSymbol(a.symbol)});if(c&&e){var d=y.REAL_WORLD_MAX_SIZE;a=a.classBreakInfos.length;var h=(d-y.REAL_WORLD_MIN_SIZE)/(1<a?a-1:a);b.forEach(function(a,b){a.size=d-h*b})}};d.prototype._getSymbolConfig=function(a){var b=!1,c=!1;if(a)for(var e=0;e<a.length&&
(!b||!c);e++){var d=a[e];"size"===d.type&&("height"===d.axis&&(b=!0),"width-and-depth"===d.axis&&(c=!0))}return b&&c?"tall":null};d.prototype._getSymbolPreview=function(a,b){return V.renderPreviewHTML(a.symbol,{size:a.size,opacity:this.layer.opacity,symbolConfig:b,rotation:a.symbol.angle}).then(function(b){a.preview=b;return a}).catch(function(){a.preview=null;return a})};d.prototype._loadRenderer=function(a){var b=this,c=[];a=a.clone();var e=this._getMedianColor(a),d=this.layer.opacity;if(x(a)||
z(a)){var h=(a.classBreakInfos||a.uniqueValueInfos).map(function(a){return b._fetchSymbol(a.symbol,e,d).then(function(b){a.symbol=b}).catch(function(){a.symbol=null})});Array.prototype.push.apply(c,h)}c.push(this._fetchSymbol(a.symbol||a.defaultSymbol,a.defaultSymbol?null:e,d).then(function(c){b._applySymbolToRenderer(a,c,w(a))}).catch(function(){b._applySymbolToRenderer(a,null,w(a))}));return t.eachAlways(c).then(function(){return a})};d.prototype._applySymbolToRenderer=function(a,b,c){c?a.symbol=
b:a.defaultSymbol=b};d.prototype._getMedianColor=function(a){if(!("visualVariables"in a&&a.visualVariables))return null;var b=O.find(a.visualVariables,function(a){return"color"===a.type});if(!b)return null;var c=null,e=null;if(b.stops){if(1===b.stops.length)return b.stops[0].color;c=b.stops[0].value;e=b.stops[b.stops.length-1].value}if(null!=c&&null!=e)return a.getColor(c+(e-c)/2,{colorInfo:b})};d.prototype._fetchSymbol=function(a,b,c){var e=this;if(!a)return t.reject();if("web-style"===a.type){var d=
a.portal,d=a.name+"-"+a.styleName+"-"+a.styleUrl+"-"+(d&&d.url)+"-"+(d&&d.user&&d.user.username),h=this._webStyleSymbolCache;h.has(d)||h.set(d,a.fetchSymbol());return h.get(d).then(function(a){return e._getAppliedCloneSymbol(a,b,c)}).catch(function(){q.warn("Fetching web-style failed!");return t.reject()})}return t.resolve(this._getAppliedCloneSymbol(a,b,c))};d.prototype._getAppliedCloneSymbol=function(a,b,c){if(!a)return a;a=a.clone();var d=-1<a.type.indexOf("3d");b=b&&b.toRgba();d?this._applyColorTo3dSymbol(a,
b,c):(a.color&&(a.color=this._getOpacityAppliedColor(b||a.color.toRgba(),c)),(b=a.outline)&&b.color&&(b.color=this._getOpacityAppliedColor(b.color.toRgba(),c)));return a};d.prototype._applyColorTo3dSymbol=function(a,b,c){var d=this;a.symbolLayers.forEach(function(a){a&&(b&&(a.material||(a.material={}),a.material.color=new L(b)),null!=c&&(a.material&&a.material.color&&(a.material.color=d._getOpacityAppliedColor(a.material.color.toRgba(),c)),a.outline&&a.outline.color&&(a.outline.color=d._getOpacityAppliedColor(a.outline.color.toRgba(),
c))))})};d.prototype._getOpacityAppliedColor=function(a,b){a[3]*=b;return a};d.prototype._getVisualVariableLegendElements=function(a){var b=this;if(!("visualVariables"in a&&a.visualVariables))return null;var c=[],d=[],f=[],h=this.layer.opacity;a.visualVariables.forEach(function(a){"color"===a.type?c.push(a):"size"===a.type?d.push(a):"opacity"===a.type&&f.push(a)});var l=c.concat(d,f),g,k;0===c.length&&x(a)&&a.classBreakInfos&&1===a.classBreakInfos.length&&(g=(g=a.classBreakInfos[0])&&g.symbol);0===
c.length&&w(a)&&(g=a.symbol);g&&(-1<g.type.indexOf("3d")?(g=g.symbolLayers.getItemAt(0),g.get("material.color")&&(k=g.material.color)):g.url||(k=g.color),k&&(k=k.toRgba()));return l.map(function(c){if(!c.legendOptions||!1!==c.legendOptions.showLegend){var d=b._getRampTitle(c,b.layer),e=p.getRampBorderColor(a),f=p.getRampOverlayColor(h),g=null;"color"===c.type?(g={type:"color-ramp",title:d,borderColor:e,overlayColor:f,infos:p.getRampStops(a,c)},b._hasColorRamp||(b._hasColorRamp=!(null==g.infos||!g.infos.length))):
"size"===c.type?(g={type:"size-ramp",title:d,infos:y.getRampStops(a,c,b._getMedianColor(a),b.scale,b.view)},b._hasSizeRamp||(b._hasSizeRamp=!(null==g.infos||!g.infos.length))):"opacity"===c.type&&(g={type:"opacity-ramp",title:d,borderColor:e,overlayColor:f,infos:p.getRampStops(a,c,k)},b._hasOpacityRamp||(b._hasOpacityRamp=!(null==g.infos||!g.infos.length)));return g.infos&&g}}).filter(function(a){return!!a})};d.prototype._getDomainName=function(a,b){if(a&&"function"!==typeof a){var c=this.layer;return(c=
(a=c.getField&&c.getField(a))&&c.getFieldDomain?c.getFieldDomain(a.name):null)&&c.codedValues?c.getName(b):null}return null};d.prototype._getRampTitle=function(a,b){var c=a.field,d=a.normalizationField,f=!1,h=!1,l=!1,g=null,c="function"===typeof c?null:c,d="function"===typeof d?null:d;if(null!=(a.legendOptions&&a.legendOptions.title))g=a.legendOptions.title;else if(a.valueExpressionTitle)g=a.valueExpressionTitle;else{if(b.renderer.authoringInfo&&b.renderer.authoringInfo.visualVariables)for(a=b.renderer.authoringInfo.visualVariables,
g=0;g<a.length;g++){var k=a[g];if("color"===k.type)if("ratio"===k.style){f=!0;break}else if("percent"===k.style){h=!0;break}else if("percentTotal"===k.style){l=!0;break}}g={field:c&&this._getFieldAlias(c,b),normField:d&&this._getFieldAlias(d,b),ratio:f,ratioPercent:h,ratioPercentTotal:l}}return g};d.prototype._getRendererTitle=function(a,b){if(a.legendOptions&&a.legendOptions.title)return a.legendOptions.title;if(a.valueExpressionTitle)return a.valueExpressionTitle;var c=this.layer,d=a.field,f=null,
h=null;x(a)&&(f=a.normalizationField,h="percent-of-total"===a.normalizationType);d="function"===typeof d?null:d;f="function"===typeof f?null:f;a=null;if(d||f)a={field:b?d:d&&this._getFieldAlias(d,c),normField:b?f:f&&this._getFieldAlias(f,c),normByPct:h};return a};d.prototype._getFieldAlias=function(a,b){var c=b.popupTemplate,c=c&&c.fieldInfos;b="function"===typeof a?null:b.getField&&b.getField(a);var d=null;c&&c.some(function(b){if(a===b.fieldName)return d=b,!0});var c=d||b,f=null;c&&(f=d&&d.label||
b&&b.alias||c.name||c.fieldName);return f};d.prototype._isUnclassedRenderer=function(a){var b=a.visualVariables,c=!1;x(a)&&a.classBreakInfos&&1===a.classBreakInfos.length&&b&&(c=a.field?b.some(function(b){return!(!b||a.field!==b.field||(a.normalizationField||b.normalizationField)&&a.normalizationField!==b.normalizationField)}):!!b.length);return c};n([m.property()],d.prototype,"children",void 0);n([m.property()],d.prototype,"layer",void 0);n([m.property()],d.prototype,"legendElements",void 0);n([m.property()],
d.prototype,"parent",void 0);n([m.property({readOnly:!0})],d.prototype,"ready",null);n([m.property()],d.prototype,"scale",void 0);n([m.property({dependsOn:["layer.renderer.valueExpression","layer.renderer.visualVariables"],readOnly:!0})],d.prototype,"isScaleDriven",null);n([m.property()],d.prototype,"title",void 0);n([m.property({dependsOn:["ready"],readOnly:!0,value:0})],d.prototype,"version",null);n([m.property()],d.prototype,"view",void 0);return d=n([m.subclass("esri.widgets.Legend.support.ActiveLayerInfo")],
d)}(m.declared(N))});