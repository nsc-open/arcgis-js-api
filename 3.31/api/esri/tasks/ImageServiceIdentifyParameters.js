// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/tasks/ImageServiceIdentifyParameters","dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/has ../kernel ../lang ../geometry/jsonUtils".split(" "),function(d,f,c,g,h,k,e,l){d=d(null,{declaredClass:"esri.tasks.ImageServiceIdentifyParameters",geometry:null,mosaicRule:null,renderingRule:null,renderingRules:null,pixelSizeX:null,pixelSizeY:null,pixelSize:null,returnGeometry:!1,returnCatalogItems:!0,timeExtent:null,maxItemCount:null,returnPixelValues:!0,toJson:function(a){var b=
a&&a.geometry||this.geometry;a={geometry:b,returnGeometry:this.returnGeometry,returnCatalogItems:this.returnCatalogItems,mosaicRule:this.mosaicRule?c.toJson(this.mosaicRule.toJson()):null,renderingRule:this.renderingRule?c.toJson(this.renderingRule.toJson()):null};b&&(a.geometryType=l.getJsonType(b));b=this.timeExtent;a.time=b?b.toJson().join(","):null;e.isDefined(this.pixelSizeX)&&e.isDefined(this.pixelSizeY)?a.pixelSize=c.toJson({x:parseFloat(this.pixelSizeX),y:parseFloat(this.pixelSizeY)}):this.pixelSize&&
(a.pixelSize=this.pixelSize?c.toJson(this.pixelSize.toJson()):null);this.renderingRules&&(a.renderingRules=c.toJson(g.map(this.renderingRules,function(a){return a.toJson()})));e.isDefined(this.returnPixelValues)&&(a.returnPixelValues=this.returnPixelValues);e.isDefined(this.maxItemCount)&&(a.maxItemCount=this.maxItemCount);return a}});h("extend-esri")&&f.setObject("tasks.ImageServiceIdentifyParameters",d,k);return d});