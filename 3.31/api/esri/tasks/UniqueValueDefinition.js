// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/tasks/UniqueValueDefinition",["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","./ClassificationDefinition"],function(a,b,c,d,e){a=a(e,{declaredClass:"esri.tasks.UniqueValueDefinition",type:"uniqueValueDef",attributeField:null,attributeField2:null,attributeField3:null,fieldDelimiter:null,toJson:function(){var a=this.inherited(arguments);this.uniqueValueFields=[];this.attributeField&&this.uniqueValueFields.push(this.attributeField);this.attributeField2&&this.uniqueValueFields.push(this.attributeField2);
this.attributeField3&&this.uniqueValueFields.push(this.attributeField3);b.mixin(a,{type:this.type,uniqueValueFields:this.uniqueValueFields});this.fieldDelimiter&&b.mixin(a,{fieldDelimiter:this.fieldDelimiter});return a}});c("extend-esri")&&b.setObject("tasks.UniqueValueDefinition",a,d);return a});