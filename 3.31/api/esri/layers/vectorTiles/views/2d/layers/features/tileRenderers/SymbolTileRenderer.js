// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/2d/layers/features/tileRenderers/SymbolTileRenderer","require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../renderers ../../../../../core/Accessor ../../../../../core/accessorSupport/decorators ../../../../../geometry/support/aaBoundingRect ../../../../../renderers/support/diffUtils ../../../engine/webgl/rendererInfoUtils ../../../engine/webgl/visualVariablesUtils ../../../engine/webgl/WGLFeatureView ../../../engine/webgl/WGLTile ./BaseTileRenderer".split(" "),
function(g,h,n,p,e,q,k,r,l,f,m,t,u,v){function w(d){for(var b in d.diff){var a=d.diff[b];if("collection"===a.type){if(0!==a.changed.length||0!==a.added.length||0!==a.removed.length)return!0}else if("visualVariables"!==b&&"authoringInfo"!==b)return!0}return!1}Object.defineProperty(h,"__esModule",{value:!0});g=function(d){function b(a){return d.call(this)||this}n(b,d);b.prototype.initialize=function(){};b.prototype.createTile=function(a){var c=r.create();this.tileInfoView.getTileBounds(c,a);return new u(a,
c)};b.prototype.disposeTile=function(a){this._featuresView.removeChild(a)};b.prototype.highlight=function(a){return this._featuresView.highlight(a)};b.prototype.hitTest=function(a,c){return this._featuresView.hitTest(a,c)};b.prototype.supportsRenderer=function(a){return null!=a&&f.isRendererWebGLCompatible(a)&&-1!==["simple","class-breaks","unique-value"].indexOf(a.type)};b.prototype.getProcessorConfiguration=function(){var a=this.layer;return{type:"symbol",renderer:a.renderer.toJSON(),devicePixelRatio:window.devicePixelRatio||
1,definitionExpression:a.definitionExpression,outFields:a.outFields.slice().sort(),gdbVersion:a.gdbVersion,historicMoment:a.historicMoment&&a.historicMoment.getTime(),labelingInfo:a.labelingInfo&&a.labelingInfo.map(function(a){return a.toJSON()})}};b.prototype.needsProcessorReconfiguration=function(a){var c=this.configuration;if(!c||c.definitionExpression!==a.definitionExpression||c.outFields.join()!==a.outFields.join())return!0;c=this.configuration&&e.fromJSON(this.configuration.renderer)||null;
a=a&&e.fromJSON(a.renderer)||null;c=l.diff(c,a);if(!c)return!1;switch(c.type){case "complete":return!0;case "partial":if(w(c))return!0;if(c.diff.visualVariables){var c=this._featuresView.visualVariablesInfo,b=this.tileInfoView.tileInfo.spatialReference,d={fields:this.layer.fields.map(function(a){return a.toJSON()})};a=f.getNormalizedRenderer(a,b,d);a=m.convertVisualVariables(a.visualVariables).vvFields;return l.diff(c.vvFields,a)?!0:!1}}};b.prototype.applyConfiguration=function(a,c){var b=e.fromJSON(a.renderer),
d={fields:this.layer.fields.map(function(a){return a.toJSON()})},b=f.getNormalizedRenderer(b,this.tileInfoView.tileInfo.spatialReference,d);this.configuration=a;this._featuresView.visualVariablesInfo=m.convertVisualVariables(b.visualVariables);c&&this._featuresView.disposeWebGLResources()};b.prototype.install=function(a){var b=new t.default({highlightOptions:this.highlightOptions,tileInfoView:this.tileInfoView,layer:this.layer,layerView:this.layerView});this._featuresView=b;b.install(a)};b.prototype.uninstall=
function(a){this._featuresView.uninstall(a)};b.prototype.onTileData=function(a){var b=this.tiles.get(a.tileKey);b&&(this._featuresView.onTileData(b,a.data),this.requestUpdate())};b.prototype.onTileDataUpdate=function(a){var b=this.tiles.get(a.tileId);b&&(this._featuresView.onTileDataUpdate(b,a.data),this.requestUpdate())};b.prototype.onTileError=function(a){if(a=this.tiles.get(a.tileKey))this._featuresView.onTileError(a),this.requestUpdate()};b.prototype.getMaterialItems=function(a){return this._featuresView.getMaterialItems(a)};
return b=p([k.subclass()],b)}(k.declared(q,v.default));h.default=g});