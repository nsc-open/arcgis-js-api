// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/JSONSupport ../../../core/accessorSupport/decorators".split(" "),function(g,h,e,c,f,b){return function(d){function a(a){a=d.call(this)||this;a.caption="";a.title="";a.type=null;return a}e(a,d);c([b.property({type:String,json:{write:!0}})],a.prototype,"caption",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);c([b.property({type:["image","bar-chart",
"column-chart","line-chart","pie-chart"],readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=c([b.subclass("esri.support.ContentElement.Media.Media")],a)}(b.declared(f))});