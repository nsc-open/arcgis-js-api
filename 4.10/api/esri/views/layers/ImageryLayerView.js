// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Error ../../core/promiseUtils ../../core/accessorSupport/decorators ../../tasks/support/Query ./RefreshableLayerView".split(" "),function(p,q,l,f,g,h,e,m,n){return function(k){function a(a){return k.call(this,a)||this}l(a,k);a.prototype.fetchPopupFeatures=function(a){var d=this.layer;if(!a)return h.reject(new g("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:d}));
var c=d.popupTemplate,b=d.popupEnabled;if(!b||!c)return h.reject(new g("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:b,popupTemplate:c}));c=c.requiredFields;b=new m;b.geometry=a;b.outFields=c;return d.queryVisibleRasters(b,{rasterAttributeTableFieldPrefix:"Raster.",returnDomainValues:!0,layerView:this}).then(function(a){return a})};f([e.property()],a.prototype,"layer",void 0);return a=f([e.subclass("esri.views.layers.ImageryLayerView")],a)}(e.declared(n))});