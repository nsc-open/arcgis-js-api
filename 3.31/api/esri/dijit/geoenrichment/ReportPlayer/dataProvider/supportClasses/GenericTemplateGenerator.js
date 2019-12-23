// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GenericTemplateGenerator","../../core/supportClasses/templateJsonUtils/BlankTemplateJsonUtil ../../core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder ../../core/supportClasses/tableJson/TableJsonUtil ../../core/sections/sectionUtils/SectionJsonUtil ../../core/infographics/InfographicTypes ../../core/infographics/utils/InfographicJsonUtil".split(" "),function(h,f,d,k,l,m){var e={},n={calcNumRowsColumns:function(b){var a;
a=2>=b?1:6>=b?2:12>=b?3:Math.ceil(b/4);var c;c=1===b?1:4>=b?2:9>=b?3:4;return{numRows:a,numColumns:c,numVarsInLastRow:c-(a*c-b),lastRowCellIndexes:null,lastRowCellWidths:null}}},p={mergeLastRow:function(b,a,c){2===a.numColumns?1===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:2}),a.lastRowCellWidths=[2*c]):3===a.numColumns?1===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:3}),a.lastRowCellWidths=[3*c]):2===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-
1,0,{cellStyle:{width:1.5*c}}),d.modifyTableJson(b,a.numRows-1,1,{columnSpan:2,cellStyle:{width:.5*c}}),a.lastRowCellWidths=[1.5*c,1.5*c]):4===a.numColumns&&(1===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:4}),a.lastRowCellWidths=[4*c]):2===a.numVarsInLastRow?(d.modifyTableJson(b,a.numRows-1,0,{columnSpan:2}),d.modifyTableJson(b,a.numRows-1,2,{columnSpan:2}),a.lastRowCellIndexes=[0,2],a.lastRowCellWidths=[2*c,2*c]):3===a.numVarsInLastRow&&(d.modifyTableJson(b,a.numRows-1,0,{cellStyle:{width:4*
c/3}}),d.modifyTableJson(b,a.numRows-1,1,{columnSpan:2,cellStyle:{width:2*c/3}}),d.modifyTableJson(b,a.numRows-1,2,{cellStyle:{width:2*c/3}}),d.modifyTableJson(b,a.numRows-1,3,{cellStyle:{width:4*c/3}}),a.lastRowCellIndexes=[0,1,3],a.lastRowCellWidths=[4*c/3,4*c/3,4*c/3]))}},q={insertNextPanel:function(b,a,c){void 0===a.currentRowIndex&&(a.currentRowIndex=0,a.currentColumnIndex=0);var d=a.currentRowIndex===a.numRows-1;b.data.data[a.currentRowIndex].fieldInfos["field"+(d&&a.lastRowCellIndexes?a.lastRowCellIndexes[a.currentColumnIndex]:
a.currentColumnIndex)]=c(d&&a.lastRowCellWidths&&a.lastRowCellWidths[a.currentColumnIndex]);a.currentColumnIndex++;a.currentColumnIndex>a.numColumns-1&&(a.currentColumnIndex=0,a.currentRowIndex++)}};e.generateTemplatesFromFieldInfos=function(b){var a=n.calcNumRowsColumns(b.length),c=h.createBlankTemplate({elementWidth:500,elementHeight:250,layout:{numRows:a.numRows,numColumns:a.numColumns}}),g=c.sectionsTables[0];p.mergeLastRow(g,a,500);b.forEach(function(b){q.insertNextPanel(g,a,function(a){var c=
e._createInfographicJson(b,a||500,250);a=d.createSingleCellTable({width:a||500,height:250,fieldInfo:f.createFieldInfoFromInfographic(c)});return f.createFieldInfoFromSection(k.wrapInDetailsSectionJson(a))})});return c};e._createInfographicJson=function(b,a,c){return{type:l.ONE_VAR,title:b.alias,style:{width:a,height:c},levels:m.getDefaultLevels(),fieldInfos:[b],calcData:{calculatorName:b.templateName.substr(0,b.templateName.indexOf(".")),variables:[b.fullName]}}};return e});