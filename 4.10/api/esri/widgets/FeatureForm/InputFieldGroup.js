// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/accessorSupport/decorators".split(" "),function(g,h,e,c,f,b){return function(d){function a(a){a=d.call(this)||this;a.description=null;a.inputFields=null;a.label=null;return a}e(a,d);Object.defineProperty(a.prototype,"visible",{get:function(){return this.inputFields&&this.inputFields.some(function(a){return a.visible})},enumerable:!0,configurable:!0});c([b.property()],
a.prototype,"description",void 0);c([b.property()],a.prototype,"inputFields",void 0);c([b.property()],a.prototype,"label",void 0);c([b.property({dependsOn:["inputFields"]})],a.prototype,"visible",null);return a=c([b.subclass("esri.widgets.FeatureForm.InputFieldGroup")],a)}(b.declared(f))});