// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/reportContainerStack/supportClasses/AreaToolbarBuilder",["dojo/dom-construct","esri/dijit/geoenrichment/lists/FlowList","dojo/i18n!esri/nls/jsapi"],function(c,h,d){d=d.geoenrichment.dijit.ReportPlayer.ReportContainerStackAll;return{buildGroupToolbar:function(b,a){var f=c.create("div",{"class":"dijitInline innerContainerRoot_groupLabelContainer"},a.groupLabelsContainer);f.style.width=a.elementSize*b.areas.length+a.gap*(b.areas.length-1)+"px";a.showGroupLabels&&
(c.create("div",{"class":"innerContainerRoot_groupLabelLabel",innerHTML:b.label},f).style.opacity=b.hideGroupLabel?"0.001":"",1<b.areas.length&&c.create("div",{"class":"innerContainerRoot_groupLabelUnderline"},f));b.areas.forEach(function(b){var g=c.create("div",{"class":"dijitInline innerContainerRoot_areaLabelContainer"},f);g.style.width=a.elementSize+"px";var e=c.create("div",{"class":"innerContainerRoot_areaLabelLabel"},g);c.create("div",{"class":"dijitInline",innerHTML:b.shortName||b.name},e);
(g=a.benchmarkController.getAreaIndex()===b.index)&&c.create("div",{"class":"dijitInline esriGESpaceBeforeBig innerContainerRoot_areaLabelBenchmarkIndicator",innerHTML:d.benchmark},e);1<a.numVisibleAreas&&(e=c.create("div",{"class":"dijitInline esriGESpaceBeforeBig innerContainerRoot_moreOptionsButton"},e),(a.reportContainer.__toolbarMoreOptionsLists=a.reportContainer.__toolbarMoreOptionsLists||[]).push(h.createPopup({wizard:a.reportContainer,aroundNode:e,options:[{value:"toggleBenchmark",label:g?
d.removeBenchmark:d.makeBenchmark},{value:"removeArea",label:d.removeArea,hidden:3>a.numVisibleAreas}],listClass:"esriGEFlowListWhiteBackground esriGEFlowListSpacedOut",doNotOwn:!0,onChange:function(c){if("toggleBenchmark"===c.value)a.benchmarkController.getAreaIndex()===b.index?a.benchmarkController.setAreaIndex(-1):a.benchmarkController.setAreaIndex(b.index);else a.onRemoveArea(b)}})))})},sanitize:function(b){var a=b.__toolbarMoreOptionsLists;delete b.__toolbarMoreOptionsLists;a&&a.forEach(function(a){a.destroy()})}}});