// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper @dojo/shim/Map ../../../core/accessorSupport/decorators ../../../geometry/support/aaBoundingRect ../tiling ../ViewState ../engine/Canvas2DContainer ../engine/DisplayObject ./LayerView2D ../../layers/RefreshableLayerView".split(" "),function(F,G,t,k,u,l,v,w,x,y,z,A,B){var q=new Set,m=[],n=[],D=function(f){function a(b){var c=f.call(this)||this;c.layerView=b;c._canvas=document.createElement("canvas");
c._childrenRenderParameters={context:c._canvas.getContext("2d"),pixelRatio:1,state:new x,stationary:!0};c.requestRender=c.requestRender.bind(c);return c}t(a,f);a.prototype.doRender=function(b){var c=b.state,a=c.height,h=this._canvas,g=this._childrenRenderParameters;h.width=c.width;h.height=a;g.state.copy(b.state);g.stationary=b.stationary;g.pixelRatio=b.pixelRatio;this.layerView.render(g);b.context.drawImage(h,0,0)};return a}(z),E=function(){return function(f,a,b,c,C,h,g,e,r){void 0===e&&(e=[0,0]);
void 0===r&&(r=v.create());this.id=f;this.level=a;this.row=b;this.col=c;this.world=C;this.resolution=h;this.scale=g;this.coords=e;this.bounds=r}}();return function(f){function a(){var b=f.call(this)||this;b._tileMap=new u.default;b.layer=null;b.tiles=[];var c=new y,a=new D(b);c.addChild(a);b.container=c;return b}t(a,f);Object.defineProperty(a.prototype,"_tileInfoView",{get:function(){var b=this.layer&&this.layer.tileInfo;return b?new w.TileInfoView(b):null},enumerable:!0,configurable:!0});a.prototype.attach=
function(){};a.prototype.detach=function(){};a.prototype.render=function(b){};a.prototype.requestRender=function(){this.container&&this.container.children[0]&&this.container.children[0].requestRender()};a.prototype.tilesChanged=function(b,c){};a.prototype.doRefresh=function(){};a.prototype.isUpdating=function(){return!1};a.prototype.update=function(b){var c=this._tileInfoView,a=this.tiles;if(c){c=c.getTileCoverage(b.state,0);b=c.spans;var c=c.lodInfo,h=c.level;if(b.length)for(var g=0;g<b.length;g++)for(var e=
b[g],f=e.row,l=e.colTo,e=e.colFrom;e<=l;e++){var d=c.normalizeCol(e),k=c.getWorldForColumn(e),p=h+"/"+f+"/"+d+"/"+k;this._tileMap.has(p)||(d=new E(p,h,f,d,k,c.resolution,c.scale),c.getTileCoords(d.coords,d,!1),c.getTileBounds(d.bounds,d,!0),this._tileMap.set(p,d),a.push(d),m.push(d));q.add(p)}}for(b=a.length-1;0<=b;b--)d=a[b],q.has(d.id)||(a.splice(b,1),n.push(d),this._tileMap.delete(d.id));if(m.length||n.length)this.tilesChanged(m,n),m.length=n.length=0;q.clear()};a.prototype.moveStart=function(){};
a.prototype.viewChange=function(){this.requestUpdate()};a.prototype.moveEnd=function(){};a.prototype.hitTest=function(a,c){return null};k([l.property({dependsOn:["layer.loaded"]})],a.prototype,"_tileInfoView",null);k([l.property()],a.prototype,"container",void 0);k([l.property()],a.prototype,"layer",void 0);return a=k([l.subclass("esri.views.2d.layers.BaseLayerView2D")],a)}(l.declared(A,B))});