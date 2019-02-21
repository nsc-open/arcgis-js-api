// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./AuthoringInfoVisualVariable".split(" "),function(r,t,m,d,n,f,k,c,p,q){var e=f({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",
esriClassifyStandardDeviation:"standard-deviation"}),g=f({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance"}),l="inches feet yards miles nautical-miles millimeters centimeters decimeters meters kilometers decimal-degrees".split(" ");return function(f){function a(b){b=f.call(this)||this;b.lengthUnit=null;b.visualVariables=null;return b}m(a,f);h=a;Object.defineProperty(a.prototype,"classificationMethod",
{get:function(){var b=this._get("classificationMethod"),a=this.type;return a&&"relationship"!==a?"class-breaks-size"===a||"class-breaks-color"===a?b||"manual":null:b},set:function(b){this._set("classificationMethod",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fields",{get:function(){return this.type&&"predominance"!==this.type?null:this._get("fields")},set:function(b){this._set("fields",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"field1",{get:function(){return this.type&&
"relationship"!==this.type?null:this._get("field1")},set:function(b){this._set("field1",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"field2",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("field2")},set:function(b){this._set("field2",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"focus",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("focus")},set:function(b){this._set("focus",b)},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"numClasses",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")},set:function(b){this._set("numClasses",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"standardDeviationInterval",{get:function(){var b=this.type;return b&&"relationship"!==b&&"class-breaks-size"!==b&&"class-breaks-color"!==b?null:this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")},
set:function(b){this._set("standardDeviationInterval",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"type",{get:function(){return this._get("type")},set:function(b){var a=b;"classed-size"===b?a="class-breaks-size":"classed-color"===b&&(a="class-breaks-color");this._set("type",a)},enumerable:!0,configurable:!0});a.prototype.clone=function(){return new h({classificationMethod:this.classificationMethod,fields:this.fields&&this.fields.slice(0),field1:k.clone(this.field1),field2:k.clone(this.field2),
focus:this.focus,numClasses:this.numClasses,lengthUnit:this.lengthUnit,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(function(a){return a.clone()})})};var h;d([c.property({type:e.apiValues,value:null,dependsOn:["type"],json:{type:e.jsonValues,read:e.read,write:e.write,origins:{"web-document":{default:"manual",type:e.jsonValues,read:e.read,write:e.write}}}})],a.prototype,"classificationMethod",null);d([c.property({type:[String],
value:null,dependsOn:["type"],json:{write:!0}})],a.prototype,"fields",null);d([c.property({value:null,dependsOn:["type"],json:{write:!0}})],a.prototype,"field1",null);d([c.property({value:null,dependsOn:["type"],json:{write:!0}})],a.prototype,"field2",null);d([c.property({type:["HH","HL","LH","LL"],value:null,dependsOn:["type"],json:{write:!0}})],a.prototype,"focus",null);d([c.property({type:Number,value:null,dependsOn:["type"],json:{type:p.Integer,write:!0}})],a.prototype,"numClasses",null);d([c.property({type:l,
json:{type:l,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],a.prototype,"lengthUnit",void 0);d([c.property({type:[.25,.33,.5,1],value:null,dependsOn:["classificationMethod","type"],json:{type:[.25,.33,.5,1],write:!0}})],a.prototype,"standardDeviationInterval",null);d([c.property({type:String,value:null,json:{type:g.jsonValues,read:g.read,write:g.write}})],a.prototype,"type",null);d([c.property({type:[q],json:{write:!0}})],a.prototype,"visualVariables",void 0);return a=h=d([c.subclass("esri.renderers.support.AuthoringInfo")],
a)}(c.declared(n))});