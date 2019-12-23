// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/arcgis/keywords/templates/Keywords.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n  \r\n    \x3c!-- topic category --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/TopicCategory"\r\n      data-dojo-props\x3d"showHeader:false,label:\'${i18nArcGIS.keywords.section.topicCategory}\'"\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3c!-- Search --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Search"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.searchKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Theme --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Theme"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.themeKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Place --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Place"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.placeKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Temporal --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Temporal"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.tempKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Discipline --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Discipline"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.discKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Stratum --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Stratum"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.stratKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Product --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Product"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.productKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Subtopic --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Subtopic"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.subTopicCatKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3c!-- Other --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/arcgis/keywords/Other"\r\n      data-dojo-props\x3d"label:\'${i18nArcGIS.keywords.section.otherKeys}\'"\x3e\r\n    \x3c/div\x3e\r\n  \r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/arcgis/keywords/Keywords","dojo/_base/declare dojo/_base/lang dojo/has ../../../../../kernel ../../../base/Descriptor dojo/text!./templates/Keywords.html ./TopicCategory ./Search ./Theme ./Place ./Temporal ./Discipline ./Stratum ./Product ./Subtopic ./Other".split(" "),function(a,b,c,d,e,f){a=a(e,{templateString:f});c("extend-esri")&&b.setObject("dijit.metadata.types.arcgis.keywords.Keywords",a,d);return a});