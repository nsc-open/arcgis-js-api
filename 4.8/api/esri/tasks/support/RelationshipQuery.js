// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../geometry ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(l,m,f,c,g,h,k,b){return function(e){function a(a){a=e.call(this,a)||this;a.definitionExpression=null;a.gdbVersion=null;a.geometryPrecision=void 0;a.historicMoment=null;a.maxAllowableOffset=void 0;a.objectIds=null;a.outFields=null;a.outSpatialReference=null;a.relationshipId=void 0;a.returnGeometry=
!1;a.source=null;return a}f(a,e);d=a;a.prototype._writeHistoricMoment=function(a,b){b.historicMoment=a&&a.getTime()};a.prototype.clone=function(){return new d(k.clone({definitionExpression:this.definitionExpression,gdbVersion:this.gdbVersion,geometryPrecision:this.geometryPrecision,historicMoment:this.historicMoment&&this.historicMoment.getTime(),maxAllowableOffset:this.maxAllowableOffset,objectIds:this.objectIds,outFields:this.outFields,outSpatialReference:this.outSpatialReference,relationshipId:this.relationshipId,
returnGeometry:this.returnGeometry,source:this.source}))};var d;c([b.property({type:String,json:{write:!0}})],a.prototype,"definitionExpression",void 0);c([b.property({type:String,json:{write:!0}})],a.prototype,"gdbVersion",void 0);c([b.property({type:Number,json:{write:!0}})],a.prototype,"geometryPrecision",void 0);c([b.property({type:Date})],a.prototype,"historicMoment",void 0);c([b.writer("historicMoment")],a.prototype,"_writeHistoricMoment",null);c([b.property({type:Number,json:{write:!0}})],
a.prototype,"maxAllowableOffset",void 0);c([b.property({type:[Number],json:{write:!0}})],a.prototype,"objectIds",void 0);c([b.property({type:[String],json:{write:!0}})],a.prototype,"outFields",void 0);c([b.property({type:g.SpatialReference,json:{read:{source:"outSR"},write:{target:"outSR"}}})],a.prototype,"outSpatialReference",void 0);c([b.property({json:{write:!0}})],a.prototype,"relationshipId",void 0);c([b.property({json:{write:!0}})],a.prototype,"returnGeometry",void 0);c([b.property({json:{write:!0}})],
a.prototype,"source",void 0);return a=d=c([b.subclass("esri.tasks.support.RelationshipQuery")],a)}(b.declared(h))});