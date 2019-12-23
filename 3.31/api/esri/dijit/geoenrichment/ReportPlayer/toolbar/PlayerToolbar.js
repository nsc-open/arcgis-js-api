// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/geoenrichment/ReportPlayer/templates/PlayerToolbarHolder.html":'\x3cdiv class\x3d"esriGEPlayerToolbar"\x3e\r\n\r\n    \x3c!--left--\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"infographicsSelectDiv" class\x3d"dijitInline playerToolbar_infographicsSelectDiv"\x3e\x3c/div\x3e\r\n    \r\n    \x3c!--center--\x3e\r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"areaTitleDiv" class\x3d"dijitInline playerToolbar_areaTitleDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"areaTitleInnerDiv" class\x3d"dijitInline playerToolbar_areaTitleInnerDiv TrimWithEllipses"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"areasSelectDiv" class\x3d"dijitInline playerToolbar_areasSelectDiv"\x3e\x3c/div\x3e\r\n\r\n    \x3c!--right--\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"rightSideControlsBlock" class\x3d"dijitInline playerToolbar_rightSideControlsBlock"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"zoomSelectDiv" class\x3d"dijitInline dijitInline playerToolbar_zoomSelectDiv"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"pageSelectDiv" class\x3d"dijitInline dijitInline playerToolbar_pageSelectDiv"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"commandButtonsContainer" class\x3d"dijitInline playerToolbar_commandButtonsContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/geoenrichment/ReportPlayer/toolbar/PlayerToolbar","dojo/_base/declare dojo/on dojo/string esri/dijit/geoenrichment/when dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin ../PlayerCommands ../PlayerThemes ./Select ./AreasSelect ./ZoomSelect ./ToolbarArranger ./ZoomUtil esri/dijit/geoenrichment/utils/DeviceUtil esri/dijit/geoenrichment/utils/DomUtil esri/dijit/geoenrichment/utils/InvokeUtil esri/dijit/geoenrichment/utils/MouseUtil esri/dijit/geoenrichment/utils/PopupUtil esri/dijit/geoenrichment/utils/TooltipUtil dojo/text!../templates/PlayerToolbarHolder.html dojo/i18n!esri/nls/jsapi".split(" "),
function(l,m,u,v,g,e,n,p,q,w,x,y,z,A,c,r,d,B,t,h,k,C,f){f=f.geoenrichment.dijit.ReportPlayer.PlayerToolbar;var D=l([n,p],{templateString:C,nls:f,player:null,areaTitleFormatter:null,areaTitleMultiFormatter:null,showAreaTitle:!1,stretchToolbarNode:null,canAddMoreAreas:!1,areasSelect:null,pageSelect:null,zoomSelect:null,_toolbarArranger:null,_infographicSelect:null,postCreate:function(){d.hide(this.commandButtonsContainer);this._toolbarArranger=new A({showAreaTitle:this.showAreaTitle,stretchToolbarNode:this.stretchToolbarNode,
domNode:this.domNode,infographicsSelectDiv:this.infographicsSelectDiv,areaTitleDiv:this.areaTitleDiv,areaTitleInnerDiv:this.areaTitleInnerDiv,rightSideControlsBlock:this.rightSideControlsBlock,areasSelectDiv:this.areasSelectDiv,zoomSelectDiv:this.zoomSelectDiv,pageSelectDiv:this.pageSelectDiv,commandButtonsContainer:this.commandButtonsContainer});this._initAreaSelect();this._initPageSelect();this._initZoomSelect();k.autoTooltip(this.domNode)},_initAreaSelect:function(){var a=this;this.areasSelect=
(new y({player:this.player,canAddMoreAreas:this.canAddMoreAreas,onChange:function(b){a.onShowAnalysisAreaAt(b.value);a.onClosePopup()},onAddMoreAreas:function(){a.onAddMoreAreas();a.onClosePopup()},onRemoveAreas:function(b,d){a.onRemoveAreas(b);d&&a.onClosePopup()},onCompareAreasSideBySide:function(){a.onCompareAreasSideBySide();a.onClosePopup()},onStopComparison:function(b){a.onShowAnalysisAreaAt(b);a.onClosePopup()}})).placeAt(this.areasSelectDiv);this.own(this.areasSelect)},updateAreaSelect:function(a){var b=
a.analysisAreas,c=a.combinedAreasInfo,f=a.currentAreaIndex,e=a.isMultiFeature;this.areasSelect.buildAreaOptions(a);this.areasSelect.set("value",f);d[1<this.areasSelect.get("options").length&&!e?"show":"hide"](this.areasSelectDiv);this._toolbarArranger.syncRightSideVisibility();e?this.areaTitleMultiFormatter?this.areaTitleMultiFormatter(this.areaTitleInnerDiv,c):this._formatAreaTitleMulti(c):(a=b["all"===f?0:f],this.areaTitleFormatter?this.areaTitleFormatter(this.areaTitleInnerDiv,a):this._formatAreaTitle(a,
f))},_formatAreaTitle:function(a,b){this.areaTitleInnerDiv.innerHTML="all"===b?f.allAreas:a.locationName||a.name},_formatAreaTitleMulti:function(a){this.areaTitleInnerDiv.innerHTML=a.locationName||a.name||a.shortName||""},_pageControlsVisible:!0,_initPageSelect:function(){var a=this;this.pageSelect=(new x({onChange:function(b){a.onShowPageAt(b.value);a.onClosePopup()}})).placeAt(this.pageSelectDiv);this.own(this.pageSelect)},setPageControlsVisible:function(a){this._pageControlsVisible=a;d[a?"show":
"hide"](this.pageSelectDiv)},updatePageSelect:function(a,b){for(var c=[],e=0;e<a;e++)c.push({label:u.substitute(f.pageIndex,{index:e+1}),value:e});this.pageSelect.set("options",c);this.pageSelect.set("value",b);d[this._pageControlsVisible&&1<a?"show":"hide"](this.pageSelectDiv)},_initZoomSelect:function(){var a=this;this.zoomSelect=(new z({onChange:function(b){if(b.value===c.FIT_PAGE)a.onZoomToFitPage();else if(b.value===c.FIT_PAGE_WIDTH)a.onZoomToFitPageWidth();else if(b.value===c.FIT_PAGE_HEIGHT)a.onZoomToFitPageHeight();
else a.onSetZoomPercent(b.value);a.onClosePopup()}})).placeAt(this.zoomSelectDiv);this.own(this.zoomSelect)},setZoomSupportsInfo:function(a){d[a.supported?"show":"hide"](this.zoomSelectDiv);this._toolbarArranger.syncRightSideVisibility();this.zoomSelect.store.data.forEach(function(b){b.hidden=!1;b.value!==c.FIT_PAGE||a.canFitPage?b.value!==c.FIT_PAGE_WIDTH||a.canFitPageWidth?b.value!==c.FIT_PAGE_HEIGHT||a.canFitPageHeight||(b.hidden=!0):b.hidden=!0:b.hidden=!0})},setZoomInfo:function(a){a=a.isFitPageScale?
c.FIT_PAGE:a.isFitPageWidthScale?c.FIT_PAGE_WIDTH:a.isFitPageHeightScale?c.FIT_PAGE_HEIGHT:c.getClosestZoomAndUpdateOptions(100*a.scale,this.zoomSelect.get("options"));a!==this.zoomSelect.get("value")&&this.zoomSelect.set("value",a)},createCommandButton:function(a,b){return this.createCustomCommandButton({callback:b,buttonClass:a.id===q.PRINT?"playerPrintButton":"playerExportButton",tooltip:a.id===q.PRINT?f.printInfographic:f.exportInfographic,visibleOnError:!1})},createCustomCommandButton:function(a){d.show(this.commandButtonsContainer);
var b=e.create("div",{"class":"playerToolbar_commandButtonContainer dijitInline"},this.commandButtonsContainer,a.addFirst?"first":"last");b.__visibleOnError=a.visibleOnError;b=e.create("div",{"class":"playerToolbar_commandButton"},b);a.buttonClass&&g.add(b,a.buttonClass);a.tooltip&&k.setTooltipToNode(b,a.tooltip);m(b,"click",a.callback);return b},setTheme:function(a){g.remove(this.domNode,"playerThemeDark playerThemeLight");g.add(this.domNode,a===w.DARK?"playerThemeDark":"playerThemeLight");this.areasSelect.setTheme(a);
this.pageSelect.setTheme(a);this.zoomSelect.setTheme(a)},setErrorShown:function(a){if(a)for(d.hide([this.areaTitleDiv,this.areasSelectDiv,this.pageSelectDiv,this.zoomSelectDiv]),a=0;a<this.commandButtonsContainer.children.length;a++){var b=this.commandButtonsContainer.children[a];d[b.__visibleOnError?"show":"hide"](b)}},arrangeControls:function(){this._toolbarArranger.arrangeControls()},hasVisibleControls:function(){return this._toolbarArranger.hasVisibleControls()},addInfographicsSelect:function(a){this._infographicSelect=
a;a.placeAt(this.infographicsSelectDiv)},isMouseOver:function(){return t.isMouseOver(this.domNode)||this.areasSelect&&this.areasSelect.isMouseOver()||this.pageSelect&&this.pageSelect.isMouseOver()||this.zoomSelect&&this.zoomSelect.isMouseOver()||this._infographicSelect&&this._infographicSelect.isMouseOver&&this._infographicSelect.isMouseOver()},setContentLoadPromise:function(a){d.enableContentAbsolute(this.commandButtonsContainer,!1);d.enableContentAbsolute(this.infographicsSelectDiv,!1);v(a,function(){d.enableContentAbsolute(this.commandButtonsContainer,
!0);d.enableContentAbsolute(this.infographicsSelectDiv,!0)}.bind(this))},onShowPageAt:function(a){},onShowAnalysisAreaAt:function(a){},onCompareAreasSideBySide:function(){},onZoomToFitPage:function(){},onZoomToFitPageWidth:function(){},onZoomToFitPageHeight:function(){},onSetZoomPercent:function(a){},onClosePopup:function(){},onAddMoreAreas:function(){},onRemoveAreas:function(a){}});return l([n,p],{templateString:"\x3cdiv class\x3d'esriGEPlayerToolbarOuter'\x3e\x3c/div\x3e",player:null,popupButtonDiv:null,
areaTitleFormatter:null,areaTitleMultiFormatter:null,showToolbarInPopup:!1,showAreaTitle:!1,stretchToolbarNode:null,showCloseButton:!1,canAddMoreAreas:!1,toolbarHolder:null,postCreate:function(){var a=this;this.inherited(arguments);this.toolbarHolder=(new D({player:this.player,showAreaTitle:this.showAreaTitle,stretchToolbarNode:this.stretchToolbarNode,canAddMoreAreas:this.canAddMoreAreas,onShowPageAt:function(b){a.onShowPageAt(b)},onShowAnalysisAreaAt:function(b){a.onShowAnalysisAreaAt(b)},onCompareAreasSideBySide:function(){a.onCompareAreasSideBySide()},
onZoomToFitPage:function(){a.onZoomToFitPage()},onZoomToFitPageWidth:function(){a.onZoomToFitPageWidth()},onZoomToFitPageHeight:function(){a.onZoomToFitPageHeight()},onSetZoomPercent:function(b){a.onSetZoomPercent(b)},onClosePopup:function(){a.closePopup()},onAddMoreAreas:function(){a.onAddMoreAreas()},onRemoveAreas:function(b){a.onRemoveAreas(b)}})).placeAt(this.domNode);this.own(this.toolbarHolder)},updateAreaSelect:function(a){this.toolbarHolder.areaTitleFormatter=this.areaTitleFormatter;this.toolbarHolder.areaTitleMultiFormatter=
this.areaTitleMultiFormatter;this.toolbarHolder.updateAreaSelect(a)},setPageControlsVisible:function(a){this.toolbarHolder.setPageControlsVisible(a)},updatePageSelect:function(a,b){this.toolbarHolder.updatePageSelect(a,b)},setZoomSupportsInfo:function(a){this.toolbarHolder.setZoomSupportsInfo(a)},setZoomInfo:function(a){this.toolbarHolder.setZoomInfo(a)},createCommandButton:function(a,b){return this.toolbarHolder.createCommandButton(a,b)},setTheme:function(a){this.toolbarHolder.setTheme(a)},setErrorShown:function(a){this.toolbarHolder.setErrorShown(a);
this._arrangeControls()},_arrangeControls:function(){d.show(this.domNode);this.toolbarHolder.arrangeControls();d[this.toolbarHolder.hasVisibleControls()?"show":"hide"]([this._popupButton,this.domNode])},_popupHandle:null,_popupButton:null,update:function(){B.invoke(this,"_doUpdateToolbar")},_doUpdateToolbar:function(){g[this.isScrollShown()?"add":"remove"](this.popupButtonDiv,"playerToolbar_parentHasScroll");g[r.isMobileDevice()?"add":"remove"](this.popupButtonDiv,"isMobileDevice");g[r.isMobileDevice()?
"add":"remove"](this.toolbarHolder.domNode,"isMobileDevice");this._resetToolbarNode();var a=h.isOpen(this.toolbarHolder);this._popupHandle&&this._popupHandle.remove();this._popupHandle=null;this.showToolbarInPopup?(this._popupButton=e.create("div",{"class":"dijitInline playerToolbar_outerButton playerToolbar_settingsButton"},this.popupButtonDiv,"first"),this._popupHandle=h.makePopup(this.toolbarHolder,this,this._popupButton,{orient:["before","below"],openPopup:a})):e.place(this.toolbarHolder.domNode,
this.domNode);this._arrangeControls()},_resetToolbarNode:function(){this.toolbarHolder.domNode.parentNode&&this.toolbarHolder.domNode.parentNode.removeChild(this.toolbarHolder.domNode);e.empty(this.domNode);this._popupButton&&e.destroy(this._popupButton);this._popupButton=null},closePopup:function(){this.showToolbarInPopup&&h.close(this.toolbarHolder)},isScrollShown:function(){return!1},createCustomCommandButton:function(a){return this.toolbarHolder.createCustomCommandButton(a)},notifyCommandButtonsAdded:function(){if(this.showCloseButton)if(this.showToolbarInPopup){var a=
e.create("div",{"class":"dijitInline playerToolbar_outerButton playerToolbar_closeButtonOuter"},this.popupButtonDiv);k.setTooltipToNode(a,f.close);m(a,"click",function(){this.onClose()}.bind(this))}else this.createCustomCommandButton({buttonClass:"playerToolbar_closeButton",tooltip:f.close,callback:function(){this.closePopup();this.onClose()}.bind(this),visibleOnError:!0})},addInfographicsSelect:function(a){this.toolbarHolder.addInfographicsSelect(a)},isMouseOver:function(){return t.isMouseOver(this.domNode)||
this.toolbarHolder.isMouseOver()},setContentLoadPromise:function(a){this.toolbarHolder.setContentLoadPromise(a)},onShowPageAt:function(a){},onShowAnalysisAreaAt:function(a){},onCompareAreasSideBySide:function(){},onZoomToFitPage:function(){},onZoomToFitPageWidth:function(){},onZoomToFitPageHeight:function(){},onSetZoomPercent:function(a){},onClose:function(){},onAddMoreAreas:function(){},onRemoveAreas:function(a){}})});