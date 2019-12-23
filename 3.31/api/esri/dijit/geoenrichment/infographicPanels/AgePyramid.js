// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/infographicPanels/AgePyramid","esri/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/number dojox/charting/Chart dojox/charting/axis2d/Default dojox/charting/plot2d/Bars dojox/charting/plot2d/Lines dojox/charting/action2d/Tooltip dojox/charting/action2d/Highlight dojox/charting/SimpleTheme ../BaseSelectComparison ../infographicUtils/utils ../infographicUtils/theme dojo/i18n!esri/nls/jsapi".split(" "),function(u,g,n,c,l,v,q,w,x,y,p,z,A,B,r,f){f=f.geoenrichment.dijit.AgePyramid;
return u("esri.dijit.geoenrichment.AgePyramid",A,{baseClass:"Infographics_AgePyramid",showVerticalAxis:!1,tooltipClass:y,chart:null,_currentTheme:null,_themeChangeHandle:null,createUI:function(a){this.inherited(arguments);a.contentClass.push("AgePyramid_ContentPane");this.chartDiv=a.addContent("div",{"class":"AgePyramid_Chart"})},createUIExpanded:function(a){this.inherited(arguments);var b=a.addContent("div",{"class":"AgePyramid_MinMax"});c.create("div",{innerHTML:f.maxLabel},b);this.max=c.create("div",
{"class":"AgePyramid_Text"},b);c.create("div",{"class":"AgePyramid_MinLabel",innerHTML:f.minLabel},b);this.min=c.create("div",{"class":"AgePyramid_Text"},b);b=a.addContent("div",{"class":"AgePyramid_Comparison"});c.create("div",{"class":"AgePyramid_ComparisonLabel",innerHTML:f.compLabel},b);this._createComboBox(b)},createUICollapsed:function(a){this.inherited(arguments);c.create("div",{"class":"MenLabel",innerHTML:f.menLabel},this.chartDiv);c.create("div",{"class":"WomenLabel",innerHTML:f.womenLabel},
this.chartDiv)},updateUI:function(){this.inherited(arguments);this._themeChangeHandle||(this._themeChangeHandle=r.on("change",g.hitch(this,this._onThemeChange)));this._currentTheme?this._doUpdateUI():r.load("AgePyramid").then(g.hitch(this,this._onThemeLoad))},_onThemeChange:function(){this._currentTheme=null;this._destroyChart();this.updateUI()},_onThemeLoad:function(a){this._currentTheme=a;this._currentTheme.theme=new z(a.theme);this._doUpdateUI()},_doUpdateUI:function(){this._ensureChart();var a=
this.getDataFields();this.maleIndices=[];this.femaleIndices=[];for(var b=a.length/2,d=Number.NEGATIVE_INFINITY,h=Number.POSITIVE_INFINITY,k,c,e=!0,t=!0,m=0;m<a.length;m++){var f=m<b;f?this.maleIndices.push(a[m]):this.femaleIndices.push(a[m]);var l=this.getValueByIndex(0,a[m]);l>d?(d=l,k=this.getFieldByIndex(a[m]).alias,e=f):l<h&&(h=l,c=this.getFieldByIndex(a[m]).alias,t=f)}a=this._setSeriesData(this.chart.getSeries("male_bars"),0,this.maleIndices,-1);b=this._setSeriesData(this.chart.getSeries("female_bars"),
0,this.femaleIndices,1);this.expanded?(h=this._getComparisonRow(),d=this._setSeriesData(this.chart.getSeries("male_lines"),h,this.maleIndices,-1),h=this._setSeriesData(this.chart.getSeries("female_lines"),h,this.femaleIndices,1)):(this.chart.getSeries("male_lines").update([]),this.chart.getSeries("female_lines").update([]),h=d=Number.NEGATIVE_INFINITY);this.extreme=B.getCeiling(Math.max(a,b,d,h),!0);this.chart.removeAxis("y");this.chart.addAxis("y",{type:q,min:-this.extreme,max:this.extreme,minorTicks:!1,
labelFunc:g.hitch(this,this._getAxisLabel)});this.chart.removeAxis("x");if(this.showVerticalAxis){var p=/\d+$/i;this.chart.addAxis("x",{type:q,min:.5,max:this.maleIndices.length+1,majorTickStep:1E3,majorTicks:!1,minorTicks:!0,minorTickStep:2,vertical:!0,labelFunc:g.hitch(this,function(a,b,d){return(a=(a=(a=this.data.fields[this.maleIndices[b-1]])&&a.name.match(p))&&a[0])||" "})})}this.chart.render();this.expanded&&(e?n.replace(this.max,"AgePyramid_TextMale","AgePyramid_TextFemale"):n.replace(this.max,
"AgePyramid_TextFemale","AgePyramid_TextMale"),t?n.replace(this.min,"AgePyramid_TextMale","AgePyramid_TextFemale"):n.replace(this.min,"AgePyramid_TextFemale","AgePyramid_TextMale"),this.max.innerHTML=k,this.min.innerHTML=c)},_getAxisLabel:function(a,b,d){b=Math.abs(b);return b!=this.extreme?l.format(b,{places:0}):l.format(b/100,{places:0,type:"percent"})},_setSeriesData:function(a,b,d,h){var k=[],f=0,e,c;for(e=0;e<d.length;e++)c=this.getValueByIndex(b,d[e]),k.push(c),f+=c;b=Number.NEGATIVE_INFINITY;
for(e=0;e<d.length;e++)c=k[e]/f*100,k[e]=c*h,c>b&&(b=c);if("lines"===a.plot)for(e=0;e<k.length;e++)k[e]={x:k[e],y:e+1};a.update(k);return b},_ensureChart:function(){if(!this.chart){var a=this._currentTheme,b=this.chart=new v(this.chartDiv);b.setTheme(a.theme);b.addPlot("lines",{type:this._getLinesPlot(),markers:!0});b.addPlot("bars",{type:this._getBarsPlot(),gap:this.expanded?1.5:1});b.addSeries("male_bars",[],g.mixin({plot:"bars"},a.male));b.addSeries("female_bars",[],g.mixin({plot:"bars"},a.female));
b.addSeries("male_lines",[],g.mixin({plot:"lines"},a.line));b.addSeries("female_lines",[],g.mixin({plot:"lines"},a.line));var d={text:g.hitch(this,this._getTooltip)};new this.tooltipClass(b,"bars",d);new this.tooltipClass(b,"lines",d);new p(b,"bars",{duration:1});new p(b,"lines",{duration:1,highlight:a.highlight})}},_getLinesPlot:function(){return x},_getBarsPlot:function(){return w},_getTooltip:function(a){var b=this._currentTheme,d,c;switch(a.run.name){case "male_bars":d=this.maleIndices[a.index];
c=0;break;case "female_bars":d=this.femaleIndices[a.index];c=0;break;case "male_lines":d=this.maleIndices[a.index];c=this._getComparisonRow();break;case "female_lines":d=this.femaleIndices[a.index];c=this._getComparisonRow();break;default:return""}var f=this.getFeatureTitle(c),g=this.getFieldByIndex(d).alias;d=l.format(this.getValueByIndex(c,d),{places:0});a=l.format(Math.abs("lines"===a.plot.name?a.x:a.y)/100,{places:1,type:"percent"});return"\x3cdiv class\x3d'AgePyramid_Tooltip_Content'\x3e\x3cspan style\x3d'font:"+
b.font+"; color:"+b.color+";'\x3e\x3cb\x3e"+f+"\x3c/b \x3e \x3cbr / \x3e "+g+"\x3cbr/\x3e"+d+" ("+a+")\x3c/span\x3e\x3c/div\x3e"},resize:function(){this.inherited(arguments);this.chart&&this.chart.resize()},destroy:function(){this._destroyChart();this._themeChangeHandle&&(this._themeChangeHandle.remove(),this._themeChangeHandle=null);this.inherited(arguments)},_destroyChart:function(){this.chart&&(this.chart.destroy(),this.chart=null)}})});