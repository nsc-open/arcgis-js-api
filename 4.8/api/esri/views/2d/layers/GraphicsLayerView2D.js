// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Handles ../../../core/accessorSupport/decorators ./LayerView2D ./support/GraphicsView2D".split(" "),function(l,m,e,f,g,d,h,k){return function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b._handles=new g;b.graphicsView=new k;b.container=b.graphicsView.container;return b}e(a,c);a.prototype.hitTest=function(b,a){return this.graphicsView.hitTest(b,a)};a.prototype.attach=
function(){var b=this;this.layer.createGraphicsController({layerView:this}).then(function(a){b._handles.add(b.layer.on("graphic-update",function(a){return b.graphicsView.graphicUpdateHandler(a)}));b.graphicsView.view=b.view;b.graphicsView.graphics=a.graphics})};a.prototype.detach=function(){this.graphicsView.graphics=null;this._handles.removeAll()};a.prototype.update=function(a){};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){};return a=f([d.subclass("esri.views.2d.layers.GraphicsLayerView2D")],
a)}(d.declared(h))});