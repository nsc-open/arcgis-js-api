// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/Map"],function(e,f,k){function g(c){return"esri.views.2d.layers.FeatureLayerView2D"===c.declaredClass||"esri.views.2d.layers.StreamLayerView2D"===c.declaredClass}Object.defineProperty(f,"__esModule",{value:!0});e=function(){function c(a,d,b){void 0===b&&(b=null);this.registerLayer=a;this.unregisterLayer=d;this.onLabelsVisible=b;this._layerViewState=new k.default;this._priorityCounter=4294967295}c.prototype.update=function(a){for(var d=a.removed,b=
0,h=a.added;b<h.length;b++){a=h[b];var c;if(c=g(a))a:switch(a.get("layer.renderer.type")){case "class-breaks":case "simple":case "unique-value":c=!0;break a;default:c=!1}c&&!this._layerViewState.has(a)&&this._createState(a)}for(b=0;b<d.length;b++)a=d[b],g(a)&&this._layerViewState.has(a)&&this._deleteState(a);this._recomputeOrder()};c.prototype.destroy=function(){var a=this;this._layerViewState.forEach(function(d,b){return a._deleteState(b)})};c.prototype._createState=function(a){var d=this,b={enabled:a.labelsVisible,
priority:this._priorityCounter--,order:null,handle:null};b.handle=a.watch("labelsVisible",function(a){b.enabled=a;d._recomputeOrder();d.onLabelsVisible&&d._layerViewState.forEach(function(a,b){return d.onLabelsVisible(b)})});this._layerViewState.set(a,b);return b};c.prototype._deleteState=function(a){var d=this._layerViewState.get(a);d.handle.remove();d.enabled&&this.unregisterLayer(a);this._layerViewState.delete(a)};c.prototype._recomputeOrder=function(){var a=[];this._layerViewState.forEach(function(b,
c){a.push({layerView:c,state:b})});a.sort(function(a,b){return a.state.priority-b.state.priority});for(var d=0,b=0;b<a.length;b++){var c=a[b];c.state.order!==d&&(c.state.order=d,this.unregisterLayer(c.layerView));c.state.enabled?this.registerLayer(c.layerView,d):this.unregisterLayer(c.layerView);++d}};return c}();f.default=e});