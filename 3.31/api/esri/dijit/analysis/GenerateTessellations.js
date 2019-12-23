// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/GenerateTessellations.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_ToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"generateTessellationsIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.generateTessellations}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs"  data-dojo-attach-point\x3d"_analysisModeLblNode"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.generateTessellations}\x3c/a\x3e\r\n            \x3c/nav\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_generateTessellationsTable"\x3e\r\n      \x3ctbody\x3e\r\n      \x3c!--A Line/Horzontal Divider--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"_titleRow" style\x3d"display: none;"\x3e\r\n        \x3ctd colspan\x3d"3" class\x3d"sectionHeader one-width" data-dojo-attach-point\x3d"_generatetesellationpolygonsToolDescription"\x3e\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Choose Shape Select Box Title--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow"\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"width-90 padBottom0"\x3e\r\n          \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n          \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.chooseShape}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"shortTextInput strict-onebythree-width padBottom0"\x3e\r\n          \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"binType"\x3e\x3c/a\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Choose Shape Select Box Widget--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow"\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_shapeSelect" data-dojo-props\x3d"required:true"\x3e\r\n          \x3c/select\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Define Extent Label--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"padBottom0"\x3e\r\n          \x3clabel data-dojo-attach-point\x3d"_labelOne" class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n          \x3clabel data-dojo-attach-point\x3d"_polylabel" class\x3d"esriAnalysisStepsLabel"\x3e${i18n.defineExtent}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"shortTextInput padBottom0"\x3e\r\n          \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' data-dojo-attach-point\x3d"_analysisFieldHelpLink" esriHelpTopic\x3d"extentLayer"\x3e\x3c/a\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Define Extent Select Box Widget--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3ctable class\x3d"width-90"\x3e\r\n            \x3ctbody\x3e \r\n              \x3ctr\x3e\r\n                \x3ctd class\x3d"width-90"\x3e\r\n                  \x3cselect class\x3d"esriLeadingMargin1 longInput esriAnalysisSelect esriLongLabel" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd\x3e\r\n                  \x3cdiv data-dojo-type\x3d"dijit/form/ToggleButton" data-dojo-attach-point\x3d"_bndgPolyDrawBtn" class\x3d"esriFloatTrailing esriActionButton" data-dojo-props\x3d"showLabel:false,iconClass:\'toolbarIcon polygonIcon\',label:\'${i18n.drawLabel}\'" data-dojo-attach-event\x3d"onChange:_handleBoundingBtnChange"\x3e\x3c/div\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!-- Define Extent Check Box --\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3" class\x3d"width-90"\x3e\r\n          \x3cdiv class\x3d"esriLeadingMargin1"\x3e\r\n            \x3clabel\x3e\r\n              \x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"_intersectChkBox" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"disabled:true"\x3e\r\n              ${i18n.intersectExtent}\r\n            \x3c/label\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Define bin size Label--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"padBottom0"\x3e\r\n          \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n          \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.defineBin}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"shortTextInput" class\x3d"padBottom0"\x3e\r\n          \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"binSize" data-dojo-attach-point\x3d"_defineBinHelpNode"\x3e\x3c/a\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Define bin size Radio buttons--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3ctable class\x3d"width-90"\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd class\x3d"mediumInput"\x3e\r\n                  \x3clabel class\x3d"esriSelectLabel esriLeadingMargin2"\x3e\r\n                    \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3dbinSizeType value\x3d"distance" data-dojo-attach-event\x3d"onChange:_handleAreaCheck" data-dojo-attach-point\x3d"_areaChkBox"/\x3e\r\n                    ${i18n.area}\r\n                  \x3c/label\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"mediumInput"\x3e\r\n                  \x3clabel class\x3d"esriSelectLabel esriLeadingMargin2"\x3e\r\n                    \x3cinput type\x3d"radio" data-dojo-type\x3d"dijit/form/RadioButton" name\x3dbinSizeType value\x3d"area" data-dojo-attach-event\x3d"onChange:_handleDistanceCheck" data-dojo-attach-point\x3d"_distanceChkBox"/\x3e\r\n                    ${i18n.distance}\r\n                  \x3c/label\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Define bin size value and units--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3ctable class\x3d"width-90"\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd class\x3d"mediumInput"\x3e\r\n                  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:0},intermediateChanges:true,required:true,missingMessage:\'${i18n.emptyBinSize}\'" data-dojo-attach-point\x3d"_binSizeInput" class\x3d"esriLeadingMargin1 width-90"\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd class\x3d"mediumInput"\x3e\r\n                  \x3cselect class\x3d"esriLeadingMargin1 esriAnalysisSelect width-90" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_binSizeUnitSelect"\x3e\r\n                  \x3c/select\x3e\r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Result Layer | Title--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"2" class\x3d"padBottom0"\x3e\r\n          \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n          \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.resultLayerName}\x3c/label\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"shortTextInput" class\x3d"padBottom0"\x3e\r\n          \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"tessellationPolygonLayer" data-dojo-attach-point\x3d"_outputLayerHelpNode"\x3e\x3c/a\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--Result Layer | Text Box--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true" class\x3d"longTextInput esriLeadingMargin1" data-dojo-attach-point\x3d"_outputLayerInput"\x3e\x3c/input\x3e\r\n        \x3c/td\x3e                \r\n      \x3c/tr\x3e\r\n      \x3c!--Save result in | Input Box--\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd colspan\x3d"3"\x3e\r\n          \x3cdiv class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_chooseFolderRow"\x3e\r\n            \x3clabel style\x3d"font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n            \x3cinput class\x3d"longInput esriFolderSelect" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_ToolContentButtons" style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont"  href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink" data-dojo-attach-event\x3d"onclick:_handleShowCreditsClick"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true, disabled:true" name\x3d"extent" value\x3d"true"/\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriLeadingMargin4 esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n      ${i18n.runAnalysis}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator"  data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriFormWarning esriRoundedBox" data-dojo-attach-point\x3d"_errorMessagePane" style\x3d"display:none;"\x3e\r\n    \x3ca href\x3d"#" title\x3d"${i18n.close}" class\x3d"esriFloatTrailing esriAnalysisCloseIcon" title\x3d\'${i18n.close}\' data-dojo-attach-event\x3d"onclick:_handleCloseMsg"\x3e\r\n    \x3c/a\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"_bodyNode"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/analysis/GenerateTessellations","require dojo/_base/declare dojo/_base/lang dojo/_base/connect dojo/_base/json dojo/_base/fx dojo/_base/Color dojo/has dojo/string dojo/dom-style dojo/query dojo/dom-class dojo/fx/easing dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/Button dijit/form/RadioButton dijit/form/CheckBox dijit/form/Form dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox dijit/layout/ContentPane dijit/form/FilteringSelect ../../kernel ./AnalysisBase ./_AnalysisOptions ./CreditEstimator ./AnalysisToggleButton ./GroupToggleButton ../../symbols/SimpleFillSymbol ../../symbols/SimpleLineSymbol ../../graphic ../../toolbars/draw ../../layers/FeatureLayer ./utils ./AnalysisRegistry dojo/i18n!./nls/GenerateTessellations dojo/text!./templates/GenerateTessellations.html".split(" "),
function(g,n,b,f,h,p,G,q,k,l,H,r,t,u,v,w,x,y,I,J,K,L,M,N,O,P,Q,R,z,A,B,S,T,U,V,W,C,m,D,d,e,E,F){g=n([u,v,w,x,y,B,A],{declaredClass:"esri.dijit.analysis.GenerateTessellations",templateString:F,widgetsInTemplate:!0,binType:null,extentLayer:null,extentLayers:[],intersectStudyArea:null,binSize:null,binSizeUnit:null,outputLayerName:null,distanceDefaultUnits:"",drawLayerName:"",drawnLayerIndex:-1,i18n:null,toolName:"GenerateTessellations",helpFileName:"GenerateTessellations",resultParameter:"tessellationLayer",
distanceOptions:[],areaOptions:[],shapeOptions:[],constructor:function(a){this._pbConnects=[];a.containerNode&&(this.container=a.containerNode)},destroy:function(){this.inherited(arguments);this._pbConnects.forEach(f.disconnect);delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments);b.mixin(this.i18n,E);this.set("drawLayerName",this.i18n.drawnPolygonLayer);this._initializeOptions()},postCreate:function(){this.inherited(arguments);r.add(this._form.domNode,"esriSimpleForm");
this._outputLayerInput.set("validator",b.hitch(this,this.validateServiceName));this._buildUI()},startup:function(){},_initializeOptions:function(){this.distanceOptions=[{value:"Miles",label:this.i18n.miles,selected:"Miles"===this.distanceDefaultUnits},{value:"Yards",label:this.i18n.yards},{value:"Feet",label:this.i18n.feet},{value:"NauticalMiles",label:this.i18n.nautMiles},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers,selected:"Kilometers"===this.distanceDefaultUnits},{value:"Meters",
label:this.i18n.meters}];this.areaOptions=[{value:"SquareMiles",label:this.i18n.sqMiles,selected:"Miles"===this.distanceDefaultUnits},{value:"SquareFeet",label:this.i18n.sqFeet},{value:"SquareYards",label:this.i18n.sqYards},{value:"SquareInches",label:this.i18n.sqIn},{type:"separator"},{value:"SquareKilometers",label:this.i18n.sqKm,selected:"Kilometers"===this.distanceDefaultUnits},{value:"SquareMeters",label:this.i18n.sqMeters},{value:"Hectares",label:this.i18n.hectares},{value:"Acres",label:this.i18n.acres}];
this.shapeOptions=[{value:e.Shapes.square,iconClassName:"squareBinTessIcon",iconTextLabel:this.i18n.square,selected:!0},{value:e.Shapes.hexagon,iconClassName:"regularHexagonBinTessIcon",iconTextLabel:this.i18n.hexagon},{value:e.Shapes.transverseHexagon,iconClassName:"transverseHexagonBinTessIcon",iconTextLabel:this.i18n.transverseHexagon},{value:e.Shapes.triangle,iconClassName:"triangleBinTessIcon",iconTextLabel:this.i18n.triangle},{value:e.Shapes.diamond,iconClassName:"diamondBinTessIcon",iconTextLabel:this.i18n.diamond}]},
_loadConnections:function(){this.on("start",b.hitch(this,"_onClose",!0));this._connect(this._closeBtn,"onclick",b.hitch(this,"_onClose",!1))},_connect:function(a,c,b){this._pbConnects.push(f.connect(a,c,b))},_buildUI:function(){this._loadConnections();this.signInPromise.then(b.hitch(this,d.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer}));this.showSelectFolder&&this.getFolderStore().then(b.hitch(this,function(a){this.folderStore=a;d.setupFoldersUI({folderStore:this.folderStore,
folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})}));l.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none");l.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none");this._addOptionsToSelectBoxes();this._harmonizeJobParamsAndUI()},_addOptionsToSelectBoxes:function(){this._addOptionIcons(this._shapeSelect,this.shapeOptions);this._addExtentLayersOptions();this._addBinSizeUnitOptions()},
_harmonizeJobParamsAndUI:function(){this.binType&&this._shapeSelect.set("value",this.binType);this.intersectStudyArea&&this._intersectChkBox.set("checked",!0);this.binSizeUnit&&this._binSizeUnitSelect.set("value",this.binSizeUnit);this.binSize&&this._binSizeInput.set("value",this.binSize);this.outputLayerName&&this._outputLayerInput.set("value",this.outputLayerName)},_updateOutputLayerName:function(){var a=k.substitute(this.i18n.outputLayerName,{extentLayerName:this.extentLayer?this.extentLayer.name:
this.i18n.currentExtent});this._outputLayerInput.set("value",a)},_generateOptionLabelMarkUp:function(a,c){return'\x3cdiv class\x3d"esriFloatLeading bufferIcon '+a+'"\x3e\x3c/div\x3e\x3cdiv class\x3d"esriLeadingMargin4" style\x3d"height:20px;margin-top:10px;"\x3e'+c+"\x3c/div\x3e"},_addOptionIcons:function(a,c){c=c.map(function(a){return{value:a.value,label:this._generateOptionLabelMarkUp(a.iconClassName,a.iconTextLabel),selected:a.selected}},this);d.updateOptions(a,c)},_addExtentLayersOptions:function(){var a=
[{value:"sameAsDisplay",label:this.i18n.sameAsDisplay}];this.get("showSelectAnalysisLayer")&&this.extentLayers&&this.extentLayer&&!d.isLayerInLayers(this.extentLayer,this.extentLayers)&&this.extentLayers.push(this.extentLayer);this.extentLayers.forEach(function(c,b){var e=!!d.isSameLayer(c,this.extentLayer);a.push({value:b.toString(),label:c.name,selected:e})},this);this._analysisSelect.addOption(a);d.addReadyToUseLayerOption(this,[this._analysisSelect])},_addBinSizeUnitOptions:function(){var a=this.areaOptions.some(function(a){return this.binSizeUnit===
a.value},this);!this.binSizeUnit||a?(this._areaChkBox.set("checked",!0,!1),this._handleAreaCheck(!0)):(this._distanceChkBox.set("checked",!0,!1),this._handleDistanceCheck(!0))},_setAnalysisGpServerAttr:function(a){a&&(this.analysisGpServer=a,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setExtentLayerAttr:function(a){this.extentLayer=a;this._updateOutputLayerName();this._intersectChkBox.set("disabled",!a)},_setDisableRunAnalysisAttr:function(a){this._saveBtn.set("disabled",
a)},_getBinTypeAttr:function(){return this._shapeSelect.get("value")},_getExtentLayerAttr:function(){return this.extentLayer},_getIntersectStudyAreaAttr:function(){return this._intersectChkBox.get("checked")},_getBinSizeAttr:function(){return this._binSizeInput.get("value")},_getBinSizeUnitAttr:function(){return this._binSizeUnitSelect.get("value")},_getOutputLayerNameAttr:function(){return this._outputLayerInput.get("value")},_handleAnalysisLayerChange:function(a){"browse"===a||"browselayers"===
a?this._createBrowseItems(a,{},this._analysisSelect):"sameAsDisplay"===a?(this._intersectChkBox.set("checked",!1),this._useExtentCheck.set("checked",!0),this.set("extentLayer",null)):(this._useExtentCheck.set("checked",!1),this.set("extentLayer",this.extentLayers[a]));this.drawnLayerIndex!==a&&this.clear()},_handleDistanceCheck:function(a){a&&d.updateOptions(this._binSizeUnitSelect,b.clone(this.distanceOptions))},_handleAreaCheck:function(a){a&&d.updateOptions(this._binSizeUnitSelect,b.clone(this.areaOptions))},
_handleBrowseItemsSelect:function(a,c){a&&a.selection&&d.addAnalysisReadyLayer({item:a.selection,layers:this.extentLayers,layersSelect:this._analysisSelect,browseDialog:a.dialog||this._browsedlg,widget:this},c)},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_getDrawLayerAttr:function(){return this._featureLayer},_handleBoundingBtnChange:function(a){a?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._toolbar.activate(m.POLYGON)):(this._toolbar.deactivate(),
this.emit("drawtool-deactivate",{}))},_createBoundingPolyFeatColl:function(){var a=d.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new D(a,{id:this.drawLayerName});this.map.addLayer(this._featureLayer);f.connect(this._featureLayer,"onClick",b.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])}))},_setDrawLayerNameAttr:function(a){this.drawLayerName=a},_setMapAttr:function(a){this.map=a;this._toolbar=new m(this.map);f.connect(this._toolbar,"onDrawEnd",b.hitch(this,
this._addFeatures))},_getMapAttr:function(){return this.map},_addFeatures:function(a){var c=[],b={};a=new C(a);b.description="blayer desc";b.title="blayer";a.setAttributes(b);c.push(a);this._featureLayer.applyEdits(c,null,null);-1===this.drawnLayerIndex&&(this.drawnLayerIndex=(this.extentLayers.push(this._featureLayer)-1).toString(),d.updateOptions(this._analysisSelect),this._addExtentLayersOptions(),this._analysisSelect.set("value",this.drawnLayerIndex));this._bndgPolyDrawBtn.reset()},clear:function(){this._featureLayer&&
(this.map.removeLayer(this._featureLayer),this._analysisSelect.removeOption({value:this.drawnLayerIndex,label:this._featureLayer.name}),this.extentLayers.splice(this.drawnLayerIndex,1),this._featureLayer=null,this.drawnLayerIndex=-1);this._handleBoundingBtnChange(!1)},_buildJobParams:function(){var a={},b={},a={binType:this.get("binType"),extentLayer:this.extentLayer?h.toJson(this.constructAnalysisInputLyrObj(this.extentLayer)):null,intersectStudyArea:this.get("intersectStudyArea"),binSize:this.get("binSize"),
binSizeUnit:this.get("binSizeUnit")};this.showChooseExtent&&this._useExtentCheck.get("checked")&&(b.extent=this.map.extent._normalize(!0));this.returnFeatureCollection?b.outSR=this.map.spatialReference:a.OutputName=h.toJson({serviceProperties:{name:this.get("outputLayerName")}});a.context=h.toJson(b);return a},_buildExecuteObj:function(){var a={};a.jobParams=this._buildJobParams();a.itemParams={description:k.substitute(this.i18n.itemDescription,{extentLayerName:this.extentLayer?this.extentLayer.name:
this.i18n.currentExtent}),tags:k.substitute(this.i18n.itemTags,{extentLayerName:this.extentLayer?this.extentLayer.name:this.i18n.currentExtent}),snippet:this.i18n.itemSnippet};this.showSelectFolder&&(a.itemParams.folder=this.get("folderId"));this.showGeoAnalyticsParams&&(a.isSpatioTemporalDataStore=!0);return a},_handleShowCreditsClick:function(a){a.preventDefault();this._form.validate()&&this.getCreditsEstimate(this.toolName,this._buildJobParams()).then(b.hitch(this,function(a){this._usageForm.set("content",
a);this._usageDialog.show()}))},_handleSaveBtnClick:function(){var a;this._form.validate()&&(this.set("disableRunAnalysis",!0),a=this._buildExecuteObj(),this.execute(a))},_handleCloseMsg:function(a){a&&a.preventDefault();p.fadeOut({node:this._errorMessagePane,easing:t.quadOut,onEnd:b.hitch(this,function(){l.set(this._errorMessagePane,{display:"none"})})}).play()},_onClose:function(a){a?(this._save(),this.emit("save",{save:!0})):this.clear();this.emit("close",{save:a})},_save:function(){},validateServiceName:function(a){return d.validateServiceName(a,
{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})}});q("extend-esri")&&b.setObject("dijit.analysis.GenerateTessellations",g,z);return g});