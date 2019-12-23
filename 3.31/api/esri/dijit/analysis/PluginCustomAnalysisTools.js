// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/PluginCustomAnalysisTools","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/query dojo/Deferred dojo/store/Memory dojo/Evented dojo/has ../../request ../../kernel dgrid/OnDemandList dgrid/Selection dojo/i18n!../../nls/jsapi ./utils".split(" "),function(g,c,h,k,l,e,m,n,p,q,r,t,u,v,f,w){var d=g([p],{infoPanelTemplateRFT:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv\x3e\x3cimg width\x3d\'16px\' height\x3d\'16px\' alt\x3d\'\' src\x3d\'${item.iconUrl}\'\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d\'analysis-tool-item-type\'\x3e${item.type}\x3c/div\x3e\x3cdiv class\x3d"rft-info-panel-description"\x3e\x3c/div\x3e\x3cdiv\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"btn blue btn-main" id\x3d"edit-raster-function-template"\x3e${i18n.common.editTemplate}\x3c/button\x3e\x3cbutton class\x3d"btn blue btn-main" id\x3d"select-raster-function-template"\x3e${i18n.common.selectTemplate}\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" id\x3d"close-panel"\x3e${i18n.common.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
infoPanelTemplateWebTool:'\x3cdiv class\x3d"web-tool-info-template"\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv\x3e\x3cimg width\x3d\'16px\' height\x3d\'16px\' alt\x3d\'\' src\x3d\'${item.iconUrl}\'\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d\'analysis-tool-item-type\'\x3e${item.type}\x3c/div\x3e\x3cdiv class\x3d"web-tool-info-panel-description"\x3e\x3cp style\x3d"height:10em;"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3cdiv class\x3d"custom-web-tools-container"\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"btn blue btn-main disabled" id\x3d"select-custom-web-tool"\x3e${i18n.common.add}\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" id\x3d"close-panel"\x3e${i18n.common.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
galleryTemplate:"\x3cdiv class\x3d'listServiceTitle'\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' width\x3d'100%'\x3e\x3ctr width\x3d'100%'\x3e\x3ctd nowrap\x3d'nowrap'\x3e\x3cdiv style\x3d'overflow:hidden;'\x3e\x3ca style\x3d\"height:20px; font-size: medium;\"\x3e${item.title}\x3c/a\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3ctable cellpadding\x3d'0' cellspacing\x3d'0' width\x3d'100%'\x3e\x3ctr width\x3d'100%' class\x3d'bottomRowTable'\x3e\x3ctd width\x3d'20'\x3e  \x3cspan class\x3d'esriAlignLeading'\x3e${item:formatThumbnail}\x3c/span\x3e\x3c/td\x3e\x3ctd nowrap\x3d'nowrap'\x3e  \x3cspan class\x3d'esriAlignLeading' style\x3d'color:#656565; margin-left: .3em;'\x3e${item.owner}\x3c/span\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e",
groups:{},constructor:function(a){c.mixin(this,a);this.i18n=c.mixin({},f.browseLayersDlg);c.mixin(this.i18n,f.browseItems);c.mixin(this.i18n,f.common);if(this.parent&&this.parent._portal&&this.parent._portal.loaded)this._onPortalLoad();else if(this.parent)this.parent.on("portal-load",this._onPortalLoad.bind(this))},getSelectedTool:function(){if(this._taskList){var a=this._taskList.selection,b;for(b in a)if(a.hasOwnProperty(b))break;return b}},_onPortalLoad:function(){this._fetchGroupForRFT(this.parent._portal).then(function(){this._setFilters();
this._setFilterStrings();this._attachEventHandlers();this.parent._createFilters()}.bind(this))},_attachEventHandlers:function(){this.parent&&this.parent.own(this.parent.on("grid-row-click",c.hitch(this,this._handleGridRowClick)),this.parent.on("show-info-panel",c.hitch(this,this._handleShowInfoPanel)))},_handleGridRowClick:function(){var a=this.parent&&this.parent.get("selection");a&&(a.type&&"raster function template"===a.type.toLowerCase()?this.parent.infoPanelTemplate=this.infoPanelTemplateRFT:
this.parent.infoPanelTemplate=this.infoPanelTemplateWebTool)},_handleShowInfoPanel:function(){var a=this.parent&&this.parent.get("selection");if(a){var b=a.type&&a.type.toLowerCase();"geoprocessing service"===b?this._populateCustomWebTools(a):"raster function template"===b&&this._populateRFTDesc(a)}},_populateRFTDesc:function(a){var b=e(".rft-info-panel-description",this.parent.domNode)[0];b&&a&&(b.innerHTML=a.description?a.description:this.i18n.genericRasterFxTemplateDesc1+"\x3cbr\x3e\x3cbr\x3e"+
this.i18n.genericRasterFxTemplateDesc2)},_populateCustomWebTools:function(a){var b=e(".custom-web-tools-container",this.parent.domNode)[0];b&&a&&this._getGeoprocessingServiceTasks(a).then(c.hitch(this,function(a){this._taskList=new (g([u,v]))({store:new n({data:a}),selectionMode:"single","class":"esriAnalysisLayersGrid quiet-scroll",renderRow:function(a){return l.toDom("\x3cdiv\x3e"+a.id+"\x3c/div\x3e")}},b);this._taskList.startup();this._taskList.on("dgrid-select,dgrid-deselect",c.hitch(this,function(a){e(".panel-actions .btn-main",
this.parent.infoPanel).forEach(function(a){k.toggle(a,"disabled",!this._taskList.selection)},this)}))}))},_getGeoprocessingServiceTasks:function(a){return r({url:a.url,handleAs:"json",content:{f:"json"},callbackParamName:"callback",load:function(a){return h.map(a.tasks,function(a){return{id:a}})}})},_setFilters:function(){var a=this.self&&this.self.user?this.self.user:null;this.filters={all:{}};a&&(a.orgId&&(this.filters.myorganization={orgids:[a.orgId]}),this.filters.mycontent={owners:[a.username]},
a.favGroupId&&(this.filters.myfavorites={owners:[a.username],groups:[a.favGroupId]}));this._systemRFTsGroup&&(this.filters.system={groups:[this._systemRFTsGroup.id]})},_setFilterStrings:function(){this.filterStrings={all:{title:this.self&&this.self.isPortal?this.i18n.items.portalOrg:this.i18n.items.onlineLabel},myorganization:{title:this.i18n.items.organizationLabel},mycontent:{title:this.i18n.items.contentLabel},myfavorites:{title:this.i18n.items.favoritesLabel},system:{title:this.i18n.items.systemLabel}}},
_fetchGroupForRFT:function(a){var b=new m;this._systemRFTsGroup&&b.resolve(this._systemRFTsGroup);w.fetchGroupForRFT(a).then(function(a){this._systemRFTsGroup=a;b.resolve(a)}.bind(this));return b},fetchData:function(){this._portal=this.parent._portal;this._user=this._portal.getPortalUser();return this._fetchItems()},_fetchItems:function(a){a=this.parent&&this.parent.canPerformRasterAnalysis;var b=this.parent&&this.parent.canPerformSpatialAnalysis,c="";a&&b?c='((typekeywords:"Web Tool" AND type: "Geoprocessing Service") OR type:"Raster Function Template")  -type:"Attachment" -tags:"mature support"':
b?c='(typekeywords:"Web Tool" AND type: "Geoprocessing Service")  -type:"Attachment" -tags:"mature support"':a&&(c='type:"Raster Function Template"  -type:"Attachment" -tags:"mature support"');this.parent._fetchItems({query:c})}});c.mixin(d,{add:function(a,b){a.plugIn||(b=b||{},b.parent=a,b.self=a.self,b.type=a.type,a.plugIn=new d(b))},remove:function(a){a.plugIn&&(a.plugIn.destroy(),delete a.plugIn)}});q("extend-esri")&&c.setObject("dijit.analysis.PluginCustomAnalysisTools",d,t);return d});