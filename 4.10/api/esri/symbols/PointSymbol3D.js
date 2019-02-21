// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(u,v,m,d,b,n,e,c,h,k,p,q,f,r){var l=b.ofType({base:null,key:"type",typeMap:{icon:h,object:k,text:q}}),t=b.ofType({base:null,key:"type",typeMap:{icon:h,object:k}});return function(b){function a(a){a=
b.call(this)||this;a.verticalOffset=null;a.callout=null;a.symbolLayers=new l;a.type="point-3d";return a}m(a,b);g=a;a.prototype.writeSymbolLayers=function(a,c,d,b){var e=a.filter(function(a){return"text"!==a.type});b&&b.messages&&e.length<a.length&&(a=a.find(function(a){return"text"===a.type}),b.messages.push(new n("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));c[d]=e.map(function(a){return a.write({},b)}).toArray()};a.prototype.supportsCallout=
function(){if(1!==(this.symbolLayers?this.symbolLayers.length:0))return!1;switch(this.symbolLayers.getItemAt(0).type){case "icon":case "text":case "object":return!0}return!1};a.prototype.hasVisibleCallout=function(){return f.hasVisibleCallout(this)};a.prototype.hasVisibleVerticalOffset=function(){return f.hasVisibleVerticalOffset(this)};a.prototype.clone=function(){return new g({verticalOffset:e.clone(this.verticalOffset),callout:e.clone(this.callout),styleOrigin:e.clone(this.styleOrigin),symbolLayers:e.clone(this.symbolLayers),
thumbnail:e.clone(this.thumbnail)})};var g;d([c.property({type:r.default,json:{write:!0}})],a.prototype,"verticalOffset",void 0);d([c.property(f.calloutProperty)],a.prototype,"callout",void 0);d([c.property({type:l,json:{type:t}})],a.prototype,"symbolLayers",void 0);d([c.writer("web-scene","symbolLayers")],a.prototype,"writeSymbolLayers",null);d([c.enumeration.serializable()({PointSymbol3D:"point-3d"})],a.prototype,"type",void 0);return a=g=d([c.subclass("esri.symbols.PointSymbol3D")],a)}(c.declared(p))});