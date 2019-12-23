// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/Tapestry","dojo/_base/declare dojo/on dojo/dom-class dojo/dom-construct dojox/html/entities ../BaseWidget ../infographicUtils/dom dojo/i18n!esri/nls/jsapi".split(" "),function(w,u,l,h,x,y,m,d){function r(a){return"Tapestry_LifeMode"+a.match(/\d+/)[0]}function v(a){return"http://downloads.esri.com/esri_content_doc/dbl/us/tapestry/segment"+a+".pdf"}d=d.geoenrichment.dijit.Tapestry;return w(y,{baseClass:"Infographics_Tapestry",_mainTable:null,_detailsTable:null,
_noSegmentsDiv:null,_openRowIndex:-1,createUIExpanded:function(a){this.inherited(arguments);this._createUI(a)},createUICollapsed:function(a){this.inherited(arguments);this._createUI(a)},_createUI:function(a){a=this._mainTable=a.addContent("table",{"class":"Tapestry_Main_Table"});this.expanded?m.createCols(a,[.25,.4,.35]):m.createCols(a,[.55,.45])},updateUIExpanded:function(){this.inherited(arguments);this._updateUI()},updateUICollapsed:function(){this.inherited(arguments);this._updateUI()},_updateUI:function(){function a(){e=
n.insertCell(-1)}function b(a,c){u(a,"click",function(){f._toDetailViewForRow(a,c)})}function q(a){var b=f._getValue(c,"CODE");l.add(a,"Tapestry_Main_Button Tapestry_Details_Image code_"+(3>b.length?"0"+b:b)+" LifeModeBorder "+r(b));a=h.create("div",null,a);h.create("span",{"class":"Tapestry_thumbnail_Code LifeModeBorder "+r(b),innerHTML:b},a)}var f=this;this._toMainView();for(var g=0,c=0;3>c;c++)this._getValue(c,"NAME")&&g++;for(var p=this._mainTable;p.rows.length;)p.deleteRow(-1);if(g){for(var n,
e,c=0;c<g;c++)n=p.insertRow(-1),b(n,c),l.add(n,"Tapestry_LifeMode"),this.expanded&&a(),a(),l.add(e,"Tapestry_Main_Name Tapestry_Main_Button LifeModeColor"),a(),l.add(e,"Tapestry_Main_Pct Tapestry_Main_Button LifeModeColor"),this.expanded&&(a(),l.add(e,"Tapestry_Main_Arrow Tapestry_Main_Button"),h.create("div",null,e));for(var k=this.expanded?1:0,m=this.expanded?2:1,c=0;c<g;c++){var t=p.rows[c].cells;this.expanded&&q(t[0]);t[k].innerHTML="\x3cspan class\x3d'Tapestry_Main_Label'\x3e"+this._getValue(c,
"NAME")+"\x3c/span\x3e\x3cbr\x3e\x3cspan class\x3d'Tapestry_Main_Value'\x3e"+this._formatValue(c,"VALUE")+" "+d.hhLabel+"\x3c/span\x3e";t[m].innerHTML="\x3cspan class\x3d'Tapestry_Main_Pct_Value'\x3e"+this._formatValue(c,"PRC")+"\x3c/span\x3e\x3cbr\x3e\x3cspan class\x3d'Tapestry_Main_Pct_Label'\x3e"+d.prtHhLabel+"\x3c/span\x3e"}}else this._showNoSegementsInfo()},_toDetailViewForRow:function(a,b){this._openRowIndex===b?(this._openRowIndex=-1,this._toMainView()):(this._openRowIndex=b,this._toDetailView(a,
b))},_toMainView:function(){for(var a=0;a<this._mainTable.rows.length;a++)l.remove(this._mainTable.rows[a],"clicked");this._detailsTableRow&&(h.destroy(this._detailsTableRow),this._detailsTableRow=this._detailsTable=null);this._noSegmentsDiv&&h.destroy(this._noSegmentsDiv);this._noSegmentsDiv=null},_toDetailView:function(a,b){this.expanded?(this._toMainView(),l.add(a,"clicked"),this._createDetailsTable(a),this._createDetailedViewExpanded(b)):window.open(v(this._getValue(b,"NUM")),"_blank")},_createDetailsTable:function(a){this._detailsTableRow=
h.create("tr",null,a,"after");a=h.create("td",{colSpan:"4"},this._detailsTableRow);this._detailsTable=h.create("table",{"class":"Tapestry_Details_Table"},a);m.createCols(this._detailsTable,[.35,.35,.3])},_createDetailedViewExpanded:function(a){function b(){n=p.insertRow(-1)}function q(a){e=n.insertCell(-1);a&&l.add(e,a)}function f(a,b,c){var d={};a&&(d["class"]=a);b&&(d.innerHTML=x.encode(b));return h.create("div",d,c||e)}function g(b,d){q("Tapestry_Details_FieldCell");var e=f("Tapestry_Details_FieldCellContent");
f("Tapestry_Details_Label",b,e);f("Tapestry_Details_SubLabel",c._formatValue(a,d),e)}var c=this,p=this._detailsTable,n,e,k=c._getValue(a,"CODE");l.add(p,r(k));3>k.length&&(k="0"+k);b();g(d.hhTypeLabel,"TYPE");g(d.medianAgeLabel,"AGE");q("Tapestry_Details_Image household code_"+k);e.rowSpan=2;f();f(null,c._getValue(a,"TYPE"));b();g(d.employmentLabel,"JOB");g(d.educationLabel,"EDUCATION");b();g(d.incomeLabel,"INCOME");g(d.raceEthnicityLabel,"RACE");q("Tapestry_Details_Image housing code_"+k);e.rowSpan=
2;f();f(null,c._getValue(a,"HOUSE"));b();q();e.colSpan=2;f("Tapestry_Details_LinkIcon dijitInline");var k=f("Wizard_Link Tapestry_Details_Link dijitInline",d.viewFullSegmentProfile),m=v(c._getValue(a,"NUM"));u(k,"click",function(){window.open(m,"_blank")})},isDetailedViewOpen:function(){return 0<=this._openRowIndex},getOpenDetailedViewRowIndex:function(){return this._openRowIndex},openDetailedViewAt:function(a){this._toDetailViewForRow(this._mainTable.rows[a],a)},collapseContent:function(){this._openRowIndex=
-1;this._toMainView()},_showNoSegementsInfo:function(){this._noSegmentsDiv=h.create("div",{"class":"esriGEAbsoluteStretched esriGEContentVerticalAlignMiddle Tapestry_noSegmentsDiv",innerHTML:d.noSegmentsFound},this._mainTable,"after")},_getValue:function(a,b){return this.getValueByName(0,"TOP"+(a+1).toString()+b)},_formatValue:function(a,b){return this.formatByName(0,"TOP"+(a+1).toString()+b)}})});