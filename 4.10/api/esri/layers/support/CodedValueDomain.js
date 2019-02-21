// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/lang ../../core/accessorSupport/decorators ./Domain".split(" "),function(k,l,g,b,d,c,h){return function(f){function a(a){a=f.call(this,a)||this;a.codedValues=null;a.type="coded-value";return a}g(a,f);e=a;a.prototype.writeCodedValues=function(a,c){var b=null;a&&(b=a.map(function(a){return d.fixJson(d.clone(a))}));c.codedValues=b};a.prototype.getName=function(a){var b=null;if(this.codedValues){var c=
String(a);this.codedValues.some(function(a){String(a.code)===c&&(b=a.name);return!!b})}return b};a.prototype.clone=function(){return new e({codedValues:d.clone(this.codedValues),name:this.name})};var e;b([c.property({json:{write:!0}})],a.prototype,"codedValues",void 0);b([c.writer("codedValues")],a.prototype,"writeCodedValues",null);b([c.enumeration.serializable()({codedValue:"coded-value"})],a.prototype,"type",void 0);return a=e=b([c.subclass("esri.layers.support.CodedValueDomain")],a)}(c.declared(h))});