// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/extendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Error ../../../core/accessorSupport/decorators ./LayerView3D ./support/layerViewUpdatingProperties ../terrain/terrainUtils".split(" "),function(m,n,g,c,d,b,h,f,k){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;a.minDataLevel=0;a.maxDataLevel=Infinity;a._isUpdating=!1;return a}g(a,e);Object.defineProperty(a.prototype,"imageFormatIsOpaque",{get:function(){return!1},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isOpaque",{get:function(){return 1<=this.fullOpacity&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0});a.prototype.getTileUrl=function(a,l,b){return this.layer.getTileUrl(a,l,b)};a.prototype.updatingChanged=function(a){this._isUpdating=a;this.notifyChange("updating")};a.prototype.isUpdating=function(){return this._isUpdating};a.prototype._getTileInfoSupportError=function(a,b){if(a=k.checkIfTileInfoSupportedForView(a,b,this.view.spatialReference,
this.view.basemapTerrain.manifold)){b={layer:this.layer,error:a};var c=void 0;switch(a.name){case "tilingscheme:local-gcs-not-supported":c=new d("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",b);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":c=new d("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",b);break;
default:c=new d("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",b)}return c}return null};a.prototype._getTileInfoCompatibilityError=function(a,b){return b.compatibleWith(a)?null:new d("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")};a.prototype._updateMinMaxDataLevel=function(){var a,b=Infinity,c=0;this.tileInfo.lods.forEach(function(a){b=Math.min(a.level,b);c=Math.max(a.level,
c)});a=[b,c];this.minDataLevel=a[0];this.maxDataLevel=a[1]};c([b.property({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null);c([b.property(f.updatingPercentage)],a.prototype,"updatingPercentage",void 0);c([b.property(f.updatingPercentageValue)],a.prototype,"updatingPercentageValue",void 0);c([b.property()],a.prototype,"fullExtent",void 0);c([b.property({readOnly:!0,dependsOn:["fullOpacity","imageFormatIsOpaque"]})],a.prototype,"isOpaque",null);c([b.property()],a.prototype,"layer",void 0);c([b.property()],
a.prototype,"minDataLevel",void 0);c([b.property()],a.prototype,"maxDataLevel",void 0);c([b.property()],a.prototype,"tileInfo",void 0);return a=c([b.subclass("esri.views.3d.layers.TiledLayerView3D")],a)}(b.declared(h))});