// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/ReportPlayerViewModel","dojo/_base/declare dojo/aspect esri/dijit/geoenrichment/promise/all ./core/layout/LayoutBuilder ./core/themes/ThemeLibrary ./core/themes/ReportThemes ./core/supportClasses/map/layers/locator/LocatorPointsController ./core/supportClasses/map/layers/std/StdPolygonsController ./core/supportClasses/map/layers/thisAreas/ThisAreasHighlightController ./core/supportClasses/EditorUnits ../utils/ColorUtil".split(" "),function(g,e,h,k,l,m,
n,p,q,f,r){return g(null,{isReportPlayerViewModel:!0,isGraphicStyle:!1,layoutBuilder:null,dynamicReportInfo:null,enableDataDrilling:!1,showDataDrillingInsidePanel:!1,preInitialize:function(){this.layoutBuilder=this.layoutBuilder||new k;return this.layoutBuilder.initCoreComponents()},initialize:function(a,b){this.preInitialize();return this.layoutBuilder[a?"initClassicComponents":"initGraphicComponents"](b)},_animationAllowed:!1,_animationSuspended:!1,isAnimationAllowed:function(){return this._animationAllowed&&
!this._animationSuspended},setAnimationAllowed:function(a){this._animationAllowed=a},setAnimationSuspended:function(a){this._animationSuspended=a},_theme:null,getCurrentTheme:function(a){return a||this._theme},setTheme:function(a){this._theme=a||l.getReportThemeById(m.GRAPHIC)},getTableDefaultStyles:function(a,b){a=this.getCurrentTheme(a).table.overrideStyles;return b?a[b]:a},getChartDefaultStyles:function(a){return this.getCurrentTheme(a).chart},getDocumentDefaultStyles:function(a){return this.getCurrentTheme(a).document},
getInfographicDefaultStyles:function(a){return this.getCurrentTheme(a).infographic},getStaticInfographicDefaultStyles:function(a){return(a=this.getInfographicDefaultStyles(a))&&a.staticInfographic},isLightDocumentTheme:function(a){return r.isLightColor(this.getCurrentTheme(a).document.backgroundColor)},setDynamicReportInfo:function(a){this.dynamicReportInfo=a;this.isGraphicStyle=!a.isClassic},getDynamicImageFunc:function(a,b,c){},enrichFieldData:function(a){},_locatorPointsControllers:null,getLocatorPointsController:function(a,
b){var c=a.calculatorName+"_"+b;this._locatorPointsControllers=this._locatorPointsControllers||{};var d=this._locatorPointsControllers[c];d||(d=this._locatorPointsControllers[c]=new n(a,this.dynamicReportInfo.fieldData,this.dynamicReportInfo.isMultiFeature,b),e.after(d,"destroy",function(){delete this._locatorPointsControllers[c]}.bind(this)));return d},_stdPolygonsControllers:null,getStdPolygonsController:function(a,b){this._stdPolygonsControllers=this._stdPolygonsControllers||{};var c=a+"_"+(b||
0);a=this._stdPolygonsControllers[c];a||(a=this._stdPolygonsControllers[c]=new p(c),e.after(a,"destroy",function(){delete this._stdPolygonsControllers[c]}.bind(this)));return a},loadAllStdFeatures:function(){var a=[],b;for(b in this._stdPolygonsControllers)a.push(this._stdPolygonsControllers[b].loadAllFeatures());return h(a)},_thisAreasHighlightController:null,getThisAreasHighlightController:function(){this._thisAreasHighlightController||(this._thisAreasHighlightController=new q,e.after(this._thisAreasHighlightController,
"destroy",function(){this._thisAreasHighlightController=null}.bind(this)));return this._thisAreasHighlightController},_legendControllers:null,registerLegendController:function(a,b,c){this._legendControllers=this._legendControllers||{};var d=this._legendControllers[b]=this._legendControllers[b]||{};d[c]=a;var e=a.addCallback(function(b,c){if(c)for(id in d)c=d[id],c!==a&&c.setLegendVisible(b)},"viewModel");return{remove:function(){delete d[c];e.remove()}}},_benchmarkController:null,_benchmarkDisabled:!1,
getBenchmarkController:function(){return!this._benchmarkDisabled&&this._benchmarkController},registerBenchmarkController:function(a){this._benchmarkController&&this._benchmarkController.destroy();this._benchmarkController=a;e.after(this._benchmarkController,"destroy",function(){this._benchmarkController=null}.bind(this))},isBenchmarkedArea:function(a){return this._benchmarkDisabled?!1:"number"===typeof a&&this._benchmarkController&&0<=this._benchmarkController.getAreaIndex()&&this._benchmarkController.getAreaIndex()!==
a},setBenchmarkDisabled:function(a){this._benchmarkDisabled=a},reset:function(){[this._locatorPointsControllers,this._stdPolygonsControllers].forEach(function(a){a&&Object.keys(a).forEach(function(b){(b=a[b])&&b.destroy()})});this._stdPolygonsControllers=this._locatorPointsControllers=null;this._thisAreasHighlightController&&this._thisAreasHighlightController.destroy();this._thisAreasHighlightController=null},canExportToExcel:function(){return!1},exportToExcel:function(a){},pepareExportToExcelParameters:function(a){},
getUnits:function(){return"px"},provideUnits:function(a){return f.provideUnits(a,this.getUnits())},roundForUnits:function(a){return f.round(a,this.getUnits())}})});