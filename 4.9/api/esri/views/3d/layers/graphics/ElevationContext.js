// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../symbols/support/unitConversionUtils","./featureExpressionInfoUtils"],function(f,g,d,e){return function(){function b(a){a?this.set(a):this.setDefaults()}Object.defineProperty(b.prototype,"meterUnitOffset",{get:function(){return this._meterUnitOffset},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"unit",{get:function(){return this._unit},enumerable:!0,configurable:!0});b.prototype.setUnit=function(a){this._unit=a;this._metersPerElevationInfoUnit=
d.getMetersPerUnit(a)};b.prototype.setDefaults=function(){this.mode=null;this._renderUnitOffset=this._meterUnitOffset=0;this.featureExpressionInfoContext=null;this.hasOffsetAdjustment=!1;this.setUnit("meters")};b.prototype.set=function(a){this.mode=a.mode;this._meterUnitOffset=a._meterUnitOffset||0;this._renderUnitOffset=a._renderUnitOffset||0;this.featureExpressionInfoContext=a.featureExpressionInfoContext;this.hasOffsetAdjustment=a.hasOffsetAdjustment;this.setUnit(a.unit)};b.prototype.setOffsetMeters=
function(a){this._meterUnitOffset=a;this._renderUnitOffset=0};b.prototype.setOffsetElevationInfoUnits=function(a){this._meterUnitOffset=a*this._metersPerElevationInfoUnit;this._renderUnitOffset=0};b.prototype.setOffsetRenderUnits=function(a){this._meterUnitOffset=0;this._renderUnitOffset=a};b.prototype.addOffsetRenderUnits=function(a){this._renderUnitOffset+=a};b.prototype.mixinApi=function(a){null!=a.mode&&(this.mode=a.mode);null!=a.unit&&this.setUnit(a.unit);null!=a.offset&&this.setOffsetElevationInfoUnits(a.offset)};
b.prototype.calculateOffsetRenderUnits=function(a){var b=this._meterUnitOffset,c=this.featureExpressionInfoContext;null!=c&&(b+=e.execute(c)*this._metersPerElevationInfoUnit);return b/a.unitInMeters+this._renderUnitOffset};return b}()});