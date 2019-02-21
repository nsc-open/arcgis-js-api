// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Handles ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../layers/support/ExportWMSImageParameters ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ../../layers/WMSLayerView".split(" "),function(z,A,n,p,f,q,d,r,t,u,v,w,x){return function(c){function a(){var b=null!==c&&c.apply(this,arguments)||this;b._handles=
new q;b.container=new u.BitmapContainer;return b}p(a,c);a.prototype.hitTest=function(b,a){return null};a.prototype.update=function(b){this.strategy.update(b);this.notifyChange("updating")};a.prototype.attach=function(){var b=this,a=this.layer,e=a.imageMaxHeight,a=a.imageMaxWidth;this.strategy=new w({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1});
this._exportWMSImageParameters=new t({layer:this.layer});this._handles.add(this._exportWMSImageParameters.watch("version",function(a){b._exportImageVersion!==a&&(b._exportImageVersion=a,b._exportWMSImageParameters.layers?b.requestUpdate():b.container.removeAllChildren())}))};a.prototype.detach=function(){this.container.removeAllChildren();this.strategy.destroy();this._handles.removeAll();this._exportWMSImageParameters.layer=null;this._exportWMSImageParameters.destroy();this._exportWMSImageParameters=
null;this.container.removeAllChildren()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.canResume=function(){var a=this.inherited(arguments);return a?this.layer.supportsSpatialReference(this.view.spatialReference):a};a.prototype.createFetchPopupFeaturesQuery=function(a){var b=a.x,e=a.y,y=this.view.spatialReference,g=null,k=0,d=0;this.container.children.some(function(a){var c=a.width,f=a.height,h=a.resolution,
l=a.x;a=a.y;var m=l+h*c,h=a-h*f;return b>=l&&b<=m&&e<=a&&e>=h?(g=new r({xmin:l,ymin:h,xmax:m,ymax:a,spatialReference:y}),k=c,d=f,!0):!1});a=g.width/k;return{extent:g,width:k,height:d,x:Math.round((b-g.xmin)/a),y:Math.round((g.ymax-e)/a)}};a.prototype.doRefresh=function(){this.requestUpdate()};a.prototype.isUpdating=function(){return this.attached&&(this.strategy.updating||this.updateRequested)};a.prototype.fetchImage=function(a,d,e,c){var b=this;c=n({timestamp:this.refreshTimestamp},c);return this.layer.fetchImage(a,
d,e,c).then(function(a){b.notifyChange("updating");return a})};f([d.property({dependsOn:["view.spatialReference","layer.spatialReferences"]})],a.prototype,"suspended",void 0);return a=f([d.subclass("esri.views.2d.layers.WMSLayerView2D")],a)}(d.declared(v,x))});