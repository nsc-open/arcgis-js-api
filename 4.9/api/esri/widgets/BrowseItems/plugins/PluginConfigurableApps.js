// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/kernel dojo/Deferred ../../../core/lang ../_AppTemplateFiltersMixin ../../../portal/PortalQueryParams dojo/i18n!../nls/BrowseItems".split(" "),function(g,h,k,c,l,f,m){var e=g(null,{declaredClass:"esri.widgets.BrowseItems.plugins.PluginConfigurableApps",_css:{base:"esri-browseitems",button:"esri-button",close:"esri-button esri-close"},infoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv class\x3d"thumbnail"\x3e\x3cimg src\x3d"${item:_formatInfoPanelImage}"\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d"quiet-scroll"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"${_css.button}" title\x3d"${i18n.items.createApp}"id\x3d"create-app"\x3e${i18n.items.createApp}\x3c/button\x3e\x3cbutton class\x3d"${_css.button}" title\x3d"${i18n.preview}" id\x3d"preview-app"\x3e${i18n.preview}\x3c/button\x3e\x3cbutton class\x3d"${_css.button}" title\x3d"${i18n.download}" id\x3d"download-app"\x3e${i18n.download}\x3c/button\x3e\x3cbutton class\x3d"${_css.close}" id\x3d"close-panel"\x3e${i18n.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
customGroupInfoPanelTemplate:'\x3cdiv\x3e\x3cdiv class\x3d"template-info-showing"\x3e\x3cdiv class\x3d"thumbnail"\x3e\x3cimg src\x3d"${item:_formatInfoPanelImage}"\x3e\x3c/div\x3e\x3ch4\x3e${item.title}\x3c/h4\x3e\x3cdiv class\x3d"template-info"\x3e\x3cp class\x3d"quiet-scroll"\x3e${item.snippet}\x3c/p\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"panel-actions"\x3e\x3cbutton class\x3d"btn blue btn-main" id\x3d"create-app"\x3e${i18n.items.createApp}\x3c/button\x3e\x3cbutton class\x3d"btn btn-secondary btn-wide" id\x3d"preview-app"\x3e${i18n.preview}\x3c/button\x3e\x3cbutton class\x3d"btn btn-cancel" id\x3d"close-panel"\x3e${i18n.close}\x3c/button\x3e\x3c/div\x3e\x3cdiv\x3e',
filters:c.mixin({},l.rootNodes.app),filterStrings:m.appTemplateFilters,rowsPerPage:9,extraClasses:[],_portal:null,_user:null,_groups:[],filterType:"all",constructor:function(a){c.mixin(this,a)},fetchData:function(){var a=[];this._portal=this.parent.get("portal");this._user=this._portal.user;this.parent.types=['type:"Web Mapping Application"'];this.helpLinkUrl||(this.helpLinkUrl=this._portal?this._portal.helpBase+this._portal.helpMap.m["120001055"]:"");return this._fetchGroups().then(function(b){b=
b||[];b.forEach(function(b){b&&b.id&&a.push('group:"'+b.id+'"')});return this._fetchGroupItems(a)}.bind(this))},_fetchGroups:function(){var a;return(a=this._portal.templatesGroupQuery||null)&&a.split("id:")[1]?this._fetchOrgConfigurableApps():this._fetchEsriConfigurableApps()},_fetchGroup:function(a,b){var d=new k;this._groups[a]?d.resolve([this._groups[a]]):this._portal.queryGroups(b,!0).then(function(b){b=b.total&&b.results&&b.results[0]||{};this._groups[a]=b;d.resolve([b])}.bind(this));return d},
_fetchGroupItems:function(a){a={groups:a,persistentTypekeywords:['-typekeywords:"Web AppBuilder"','-typekeywords:"WAB3D"'],types:['type:"Web Mapping Application"']};"2d"===this.filterType?(a.persistentTypekeywords.push('-typekeywords:"3Dscene"'),delete this.filters.present,delete this.filters["3dscene"]):"3d"===this.filterType&&(a.persistentTypekeywords.push('typekeywords:"3Dscene"'),this.filters=null);return this.parent._fetchItems(a)},_fetchEsriConfigurableApps:function(){var a=this._user&&this._user.culture||
this._portal&&this._portal.culture||h.locale||"en",b=new f({query:'title:"Web Application Templates" AND owner:"esri_'+a.split("-")[0].toLowerCase()+'"'});return this._fetchGroup("esriGallery_"+a,b).then(function(a){return a||[]})},_fetchOrgConfigurableApps:function(){var a=new f({query:this._portal.templatesGroupQuery||null});this.filters=null;this.rowsPerPage=8;this.extraClasses=["wide"];this.infoPanelTemplate=this.customGroupInfoPanelTemplate;return this._fetchGroup("customGallery",a).then(function(a){var b=
[];a&&a.length&&0<a.length&&(this.parent.sortDescending=a[0].sortOrder&&"desc"===a[0].sortOrder,this.parent.sortAttribute=a[0].sortField||"asc",b.push(a[0]));return b}.bind(this))}});c.mixin(e,{add:function(a,b){a.plugin||(b=c.mixin(b,{parent:a,filterType:a.filterType}),a.plugin=new e(b))},remove:function(a){a.plugIn&&(a.plugin.destroy(),delete a.plugIn)}});return e});