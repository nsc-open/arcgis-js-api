// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/TemplateJsonLoader","dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all ./CustomReportsManager ./GenericTemplateGenerator ./dataCollections/DataCollectionsLoader ../../core/conversion/PortalToEditorConverter ../../core/conversion/portalToEditorUtils/variables/PlayerVariableProvider ../../core/supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil ../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoNameUtil ../../core/conversion/portalToEditorUtils/parsers/_FieldInfoBuilder".split(" "),
function(l,r,m,t,u,v,n,w,p,x,h,y){var q={_templatesCache:{},getCachedTemplateJson:function(a,c){return(a=this._templatesCache[a+";"+c.reportID])&&a.modified===c.modified?{templateJson:l.clone(a.templateJsonInfo.templateJson),templateVariableProvider:a.templateJsonInfo.templateVariableProvider}:null},putCachedTemplateJson:function(a,c,d){this._templatesCache[a+";"+d.reportID]={modified:d.modified,templateJsonInfo:{templateJson:l.clone(c.templateJson),templateVariableProvider:c.templateVariableProvider}}}};
return{getTemplateJsonByID:function(a,c){var d=this,g=new r;m(u.getCustomReportByID(a),function(b){if(b){var f=c&&q.getCachedTemplateJson(a.countryID,b);if(f)g.resolve(f);else{var f=[d._loadCustomReportData(b)],e;"US"!==a.countryID&&"CA"!==a.countryID&&(e=!0,f.push(n.loadVariables({countryID:a.countryID,hierarchy:b.hierarchy,outFields:["description"]})));return t(f).then(function(d){var f=new p;return m(w.provideEditorJson(b,{variableProvider:f}),function(){var k=b.templateJson;if(e){var h=d[1].idToVariableCache,
l=d[1].fullNameToVariableCache;x.processTemplateFieldInfos(k,function(a){if(a.hasVariable&&a.variableID){var b=l[a.fullName]||h[a.variableID];a.alias=b&&b.description||a.alias;b&&b.description||a.expressionText||console.log("Can't find variable with ID: "+a.variableID)}})}b.portalJson=null;b.templateJson=null;k={templateJson:k,templateVariableProvider:f};c&&q.putCachedTemplateJson(a.countryID,k,b);g.resolve(k)})})}}else g.reject("Can't find a report")},g.reject);return g.promise},_loadCustomReportData:function(a){a.portalJson=
null;return a.templateData.getFiles().then(function(c){a.portalJson={files:c}})},createTemplateJsonFromVariables:function(a){return n.loadVariables({countryID:a.countryID,outFields:["description","precision","type","vintage"],forceLowerCase:!0}).then(function(c){var d=new p,g=c.fullNameToVariableCache;c=a.variables.fullNames.map(function(b){var c=h.createFieldNameFromVariable(b),e=a.variables.customDataMapping[b],e=e?e.variable:g[b];b={id:e.id.toLowerCase(),fullName:b,alias:e.description,fieldName:c,
precision:e.precision,calculatorName:h.DATA_COLLECTIONS_CALCULATOR_NAME,templateName:h.DATA_COLLECTIONS_CALCULATOR_NAME+"."+c,type:e.type,vintage:e.vintage};d.addVariable(b);return y.getCalculatorOrScriptFieldInfo(b.templateName,{variableProvider:d})});return{templateJson:v.generateTemplatesFromFieldInfos(c,{comparisonLevels:a.comparisonLevels}),templateVariableProvider:d}})}}});