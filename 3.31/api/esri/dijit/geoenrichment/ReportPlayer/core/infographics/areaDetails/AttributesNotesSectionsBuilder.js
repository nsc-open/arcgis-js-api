// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/areaDetails/AttributesNotesSectionsBuilder","dojo/_base/lang esri/dijit/geoenrichment/promise/all esri/dijit/geoenrichment/when ../../supportClasses/tableJson/TableJsonUtil ../../supportClasses/tableJson/TableJsonResizeUtil ./AreaDetailsLayouts ../../../dataProvider/supportClasses/attachments/AttributesUtil ../../sections/SectionTypes esri/dijit/geoenrichment/utils/FieldUtil dojo/i18n!esri/nls/jsapi".split(" "),function(v,J,p,t,x,E,F,
G,K,w){w=w.geoenrichment.dijit.ReportPlayer.AreaDetailsInfographic;var m={buildDataInfo:function(a){return p(m._calcBuildInfo(a),function(b){if(!b)return null;var c,d=m._createAttributesSectionJsons(b.attributes,a.infographicJson,a.defaultCellStyle),e=m._createNotesSectionJsons(b.notes,a.infographicJson,a.defaultCellStyle);b.canFitOnSinglePage?d.length?e.length?(c=d[0],e=e[0].stack[0],e.style.top=b.attributes.totalHeight,c.stack.push(e),c=[c]):c=d:c=e:(c=[],c=c.concat(d),c=c.concat(e),c.forEach(function(c){x.resizeTableJsonToFitWidth(c.stack[0],
a.width);a.scaleToFitHeight&&x.resizeTableJsonToFitHeight(c.stack[0],b.contentHeight-a.footerHeight)}));return c.length?{sectionJsons:c,stats:{numAttributesTotal:b.attributes.numTotal,numAttributesShown:b.attributes.numShown,numNotesTotal:b.notes.numTotal,numNotesShown:b.notes.numShown}}:null})},_calcBuildInfo:function(a){var b=a.infographicJson,c=a.titleHeight,d=a.minRowHeight,e=a.scaleToFitHeight,h=a.footerHeight,f=a.searchTextRe,k=a.forceSinglePage,l=a.width,L=a.height;return p(m._getData(a),function(a){var g=
a.attrs||[],M=a.benchmarkAttrs,n=a.notes||[];b.attributesSectionJson||(g=[]);b.notesSectionJson||(n=[]);if(!g.length&&!n.length)return null;a=g.length;var H=0,w=n.length,I=0;f&&(g=g.filter(function(a){return f.test(a.alias)}),n=n.filter(function(a){return f.test(a.text)}));var H=g.length,I=n.length,q=g.length,y=n.length,z=b.attributesLayout===E.ATTRS_2COLUMNS,u=z?Math.round(g.length/2):g.length,v=(z?Math.round(g.length/2):g.length)+(b.showAttributesTitle?1:0),p=n.length,x=p+(b.showNotesTitle?1:0),
A=L-c,r=Math.max(d||t.DEFAULT_ROW_HEIGHT,A/(v+x)),B=q?b.showAttributesTitle?r:0:0,C=q?r:0,D=y?b.showNotesTitle?r:0:0,r=y?r:0;e||(q&&(b.showAttributesTitle&&(q=b.attributesSectionJson.stack[0].data.data[0])&&(B=q.style.height),q=b.attributesSectionJson.stack[0].data.data[b.showAttributesTitle?1:0])&&(C=q.style.height),y&&(b.showNotesTitle&&(q=b.notesSectionJson.stack[0].data.data[0])&&(D=q.style.height),q=b.notesSectionJson.stack[0].data.data[b.showNotesTitle?1:0])&&(r=q.style.height));(y=k||B+C*u+
D+r*p<=A+1)?(g=[{attrs:g,numRows:v}],n=[{notes:n,numRows:x}]):(g=m._splitByPages(g,B,C*(z?.5:1),A,h).map(function(a){return{attrs:a,numRows:(z?Math.round(a.length/2):a.length)+(b.showAttributesTitle?1:0)}}),n=m._splitByPages(n,D,r,A,h).map(function(a){return{notes:a,numRows:a.length+(b.showNotesTitle?1:0)}}));return{canFitOnSinglePage:y,contentHeight:A,attributes:{attrGroups:g,numColumns:z?4:2,titleRowH:B,dataRowH:C,width:l,numTotal:a,numShown:H,totalHeight:B+C*u,benchmarkAttrs:M},notes:{noteGroups:n,
numColumns:1,titleRowH:D,dataRowH:r,width:l,numTotal:w,numShown:I,totalHeight:D+r*p}}})},_getData:function(a){var b=a.attachmentsStore;if(!b)return{};b.supportsMultipleAreas&&b.setCurrentAnalysisAreaIndex(a.currentFeatureIndex);return J([b.getAttributes(),b.getNotes()]).then(function(c){var d={attrs:c[0]||[],notes:c[1]||[]};return a.benchmarkController&&0<=a.benchmarkController.getAreaIndex()&&a.benchmarkController.getAreaIndex()!==a.currentFeatureIndex&&b.supportsMultipleAreas?(b.setCurrentAnalysisAreaIndex(a.benchmarkController.getAreaIndex()),
p(b.getAttributes(),function(a){a&&(d.benchmarkAttrs={},a.forEach(function(a){d.benchmarkAttrs[a.name]=a}));return d})):d})},_splitByPages:function(a,b,c,d,e){var h=d-e,f=[],k,l=0;a.forEach(function(a){k||(k=[],f.push(k),l+=b);k.push(a);l+=c;l+c>h&&(k=null,l=0)});return f},_createAttributesSectionJsons:function(a,b,c){var d=m._getSourceSectionStyle(b.attributesSectionJson,b.showAttributesTitle);return a.attrGroups.map(function(e){function h(b,e,f){e=e||0;t.modifyTableJson(k,l,0+e,{text:b?b.alias:
"",cellStyle:m._getCellStyle(!1,0+e,f,d,c),height:a.dataRowH});var g=F.formatAttributeValue(b),h=a.benchmarkAttrs&&a.benchmarkAttrs[b.name];h&&K.isNumericField(b)&&(h=b.value-h.value,g+=" ("+(0<h?"+":"")+F.formatAttributeValue(v.mixin({},b,{value:h,domain:null}))+")");t.modifyTableJson(k,l,1+e,{text:g,cellStyle:m._getCellStyle(!1,1+e,f,d,c)})}var f=e.attrs;if(!f.length)return null;var k=t.createTable({numColumns:a.numColumns,numRows:e.numRows,style:{width:a.width},useDefaultHeaderTheme:!1}),l=0;e=
b.attributesLayout===E.ATTRS_2COLUMNS;b.showAttributesTitle&&(t.modifyTableJson(k,l,0,{text:d.title||w.attributes,columnSpan:a.numColumns,cellStyle:m._getCellStyle(!0,0,-1,d,c),height:a.titleRowH}),l++);for(var p=0,u=0;u<f.length;u++){var g=f[u];h(g,0,p);e&&(g=f[++u],h(g,a.numColumns/2,p));l++;p++}return{type:G.INFOGRAPHIC_ATTRIBUTES,stack:[k]}}).filter(function(a){return!!a})},_createNotesSectionJsons:function(a,b,c){var d=m._getSourceSectionStyle(b.notesSectionJson,b.showNotesTitle);return a.noteGroups.map(function(e){var h=
e.notes;if(!h.length)return null;var f=t.createTable({numColumns:a.numColumns,numRows:e.numRows,style:{width:a.width},useDefaultHeaderTheme:!1}),k=0;b.showNotesTitle&&(t.modifyTableJson(f,k,0,{text:d.title||w.notes,cellStyle:m._getCellStyle(!0,0,-1,d,c),height:a.titleRowH}),k++);var l=0;h.forEach(function(b){t.modifyTableJson(f,k,0,{text:b.text,cellStyle:m._getCellStyle(!1,0,l,d,c),height:a.dataRowH});k++;l++});return{type:G.INFOGRAPHIC_NOTES,stack:[f]}}).filter(function(a){return!!a})},_getSourceSectionStyle:function(a,
b){var c={titleStyle:null,title:null};if(a){a=a.stack[0];var d=a.data.columns[0].field,e=0;b&&(b=a.data.data[e++])&&(c.titleStyle=b.style.fields[d],c.title=b[d]);for(var h=0;a.data.data[e];){var f=a.data.data[e++];a.data.columns.forEach(function(a,b){c["row"+h+"_column"+b]=f.style.fields[a.field]});h++}}return c},_getCellStyle:function(a,b,c,d,e){var h=0!==c%2,f=0!==b%2;a?c=d.titleStyle:(c=d["row"+c+"_column"+b])||(c=h?d["row1_column"+b]||(f?d.row1_column1:d.row1_column0)||d.row1_column0:d["row0_column"+
b]||(f?d.row0_column1:d.row0_column0)||d.row0_column0);b=v.mixin({verticalAlign:"middle",horizontalAlign:f?"right":void 0,horizontalPadding:a||0<b?5:20},e);a&&(b.fontSize*=1.2);v.mixin(b,c);return b}};return m});