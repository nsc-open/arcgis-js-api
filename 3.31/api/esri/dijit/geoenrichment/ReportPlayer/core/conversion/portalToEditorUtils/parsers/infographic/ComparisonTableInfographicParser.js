// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/infographic/ComparisonTableInfographicParser",["../../../../sections/SectionTypes","../../../ConversionUtil"],function(h,c){return{portalToEditor:function(a,b){var e=a.attributes.name,f=b.templateJson.metadata.comparisonCalculatorsHash[e],d,g;a.tags.forEach(function(a){a.attributes.type===h.INFOGRAPHIC_HEADER?d=a:g=a});return{calculatorName:e,type:a.attributes.type,variablesInColumns:a.attributes.variablesInColumns,
showThisAreas:a.attributes.showThisAreas,levels:f&&f.levels||[],style:{width:c.ptToPx(a.attributes.width),height:c.ptToPx(a.attributes.height),padding:a.attributes.padding?c.ptToPx(a.attributes.padding):void 0,backgroundColor:a.attributes.backgroundColor},titleSectionJson:d&&b.parsers.getParser("section").parseSection(d,b),dataSectionJson:b.parsers.getParser("section").parseSection(g,b)}}}});