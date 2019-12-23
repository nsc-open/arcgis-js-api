// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/Prizm5","require dojo/_base/declare dojo/on dojo/dom-class dojo/dom-construct dojox/html/entities ../BaseWidget ../infographicUtils/dom ../infographicUtils/formatVariable ./supportClasses/Prizm5Data dojo/i18n!esri/nls/jsapi".split(" "),function(t,u,q,l,g,v,w,r,x,n,h){function p(a){a=a+1+"";1===a.length&&(a="0"+a);return a}h=h.geoenrichment.dijit.Prizm5;return u(w,{baseClass:"Infographics_Prizm5",_mainTable:null,_detailsTable:null,_noSegmentsDiv:null,
_openRowIndex:-1,createUIExpanded:function(a){this.inherited(arguments);this._createUI(a)},createUICollapsed:function(a){this.inherited(arguments);this._createUI(a)},_createUI:function(a){this._mainTable=a.addContent("table",{"class":"Prizm5_Main_Table"});r.createCols(this._mainTable,[.25,.4,.35])},updateUIExpanded:function(){this.inherited(arguments);this._updateUI()},updateUICollapsed:function(){this.inherited(arguments);this._updateUI()},_updateUI:function(){var a=this;this._toMainView();for(var c=
this._get3DominantSegementsInfo(),d=this._mainTable;d.rows.length;)d.deleteRow(-1);c.length?c.forEach(function(b,c){function e(){k=m.insertCell(-1)}var m,k;m=d.insertRow(-1);m._info=b;q(m,"click",function(){a._toDetailViewForRow(m,c)});l.add(m,"Prizm5_LifeStyle");e();l.add(k,"Prizm5_LifeStyle_Image code_"+b.code+" LifeStyleBorder");var f=g.create("div",null,k);f.style.backgroundImage="url("+t.toUrl("../themes/common/images/prizm5/"+b.code+".jpg")+")";f.style.borderColor=b.color;g.create("span",{"class":"Prizm5_LifeStyle_Image_Code LifeStyleBorder code_"+
b.code,innerHTML:b.code},f).style.borderColor=b.color;e();l.add(k,"Prizm5_Main_Name");k.innerHTML="\x3cspan class\x3d'Prizm5_Main_Label'\x3e"+b.alias+"\x3c/span\x3e\x3cbr\x3e\x3cspan class\x3d'Prizm5_Main_Value'\x3e"+b.value+" "+h.hhLabel+"\x3c/span\x3e";e();l.add(k,"Prizm5_Main_Pct");k.innerHTML="\x3cspan class\x3d'Prizm5_Main_Pct_Value'\x3e"+x({units:"pct",decimals:1},b.percentValue)+"\x3c/span\x3e\x3cbr\x3e\x3cspan class\x3d'Prizm5_Main_Pct_Label'\x3e"+h.prtHhLabel+"\x3c/span\x3e";e();l.add(k,
"Prizm5_Main_Arrow");g.create("div",null,k)}):this._showNoSegementsInfo()},_get3DominantSegementsInfo:function(){for(var a=[],c=this.getValueByName(0,"POD_TOT"),d=0;68>d;d++){var b="POD_"+p(d),f=this.getValueByName(0,b);if(f){var e=p(d),e=n.LIFE_STYLES[e];a.push({index:d,code:p(d),alias:e.name,fieldName:b,value:f,percentValue:f/c*100,color:n.URBANITY_TO_COLOR[e.urbanity],hhIncome:e.hhIncome,urbanity:e.urbanity,lifeStage:e.lifeStage})}}a.sort(function(a,b){return b.value-a.value});a.length=Math.min(a.length,
3);return a},_toDetailViewForRow:function(a,c){this._openRowIndex===c?(this._openRowIndex=-1,this._toMainView()):(this._openRowIndex=c,this._toDetailView(a,a._info))},_toMainView:function(){for(var a=0;a<this._mainTable.rows.length;a++)l.remove(this._mainTable.rows[a],"clicked");this._detailsTableRow&&(g.destroy(this._detailsTableRow),this._detailsTableRow=this._detailsTable=null);this._noSegmentsDiv&&g.destroy(this._noSegmentsDiv);this._noSegmentsDiv=null},_toDetailView:function(a,c){this._toMainView();
l.add(a,"clicked");this._createDetailsTable(a);this._createDetailedViewExpanded(c)},_createDetailsTable:function(a){this._detailsTableRow=g.create("tr",null,a,"after");a=g.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=g.create("table",{"class":"Prizm5_Details_Table"},a);r.createCols(this._detailsTable,[.5,.5])},_createDetailedViewExpanded:function(a){function c(a,b){e=f.insertCell(-1);l.add(e,"Prizm5_Details_FieldCell");var c=d("Prizm5_Details_FieldCellContent");d("Prizm5_Details_Label",
a,c);d("Prizm5_Details_SubLabel",b,c)}function d(a,b,c){var d={};a&&(d["class"]=a);b&&(d.innerHTML=v.encode(b));return g.create("div",d,c||e)}var b=this._detailsTable,f,e;f=b.insertRow(-1);c(h.hhIncome,a.hhIncome);c(h.urbanity,a.urbanity);f=b.insertRow(-1);c(h.lifeStage,a.lifeStage);f=b.insertRow(-1);e=f.insertCell(-1);e.colSpan=2;d("Prizm5_Details_LinkIcon dijitInline");b=d("Wizard_Link Prizm5_Details_Link dijitInline",h.viewFullSegmentProfile);q(b,"click",function(){window.open(n.getUrl(a.index),
"_blank")})},isDetailedViewOpen:function(){return 0<=this._openRowIndex},getOpenDetailedViewRowIndex:function(){return this._openRowIndex},openDetailedViewAt:function(a){this._toDetailViewForRow(this._mainTable.rows[a],a)},collapseContent:function(){this._openRowIndex=-1;this._toMainView()},_showNoSegementsInfo:function(){this._noSegmentsDiv=g.create("div",{"class":"esriGEAbsoluteStretched esriGEContentVerticalAlignMiddle Prizm5_noSegmentsDiv",innerHTML:h.noSegmentsFound},this._mainTable,"after")}})});