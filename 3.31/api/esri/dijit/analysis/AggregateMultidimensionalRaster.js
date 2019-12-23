// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/analysis/templates/AggregateMultidimensionalRaster.html":'\x3cdiv class\x3d"esriAnalysis"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" style\x3d"margin-top:0.5em; margin-bottom: 0.5em;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_aggregateToolContentTitle" class\x3d"analysisTitle"\x3e\r\n      \x3ctable class\x3d"esriFormTable" \x3e \r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriToolIconTd"\x3e\x3cdiv class\x3d"aggregateMultidimensionalRasterIcon"\x3e\x3c/div\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"esriAlignLeading esriAnalysisTitle" data-dojo-attach-point\x3d"_toolTitle"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_titleLbl"\x3e${i18n.aggregateMultidimensionalRaster}\x3c/label\x3e\r\n            \x3cnav class\x3d"breadcrumbs" data-dojo-attach-point\x3d"_analysisModeLblNode" style\x3d"display:none;"\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb breadcrumbs__modelabel" data-dojo-attach-event\x3d"onclick:_handleModeCrumbClick" data-dojo-attach-point\x3d"_analysisModeCrumb"\x3e\x3c/a\x3e\r\n              \x3ca href\x3d"#" class\x3d"crumb is-active" data-dojo-attach-point\x3d"_analysisTitleCrumb" style\x3d"font-size:16px;"\x3e${i18n.aggregateMultidimensionalRaster}\x3c/a\x3e\r\n            \x3c/nav\x3e \r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"esriFloatTrailing" style\x3d"padding:0;"\x3e\r\n              \x3cdiv class\x3d"esriFloatLeading"\x3e\r\n                \x3ca href\x3d"#" class\x3d\'esriFloatLeading helpIcon\' esriHelpTopic\x3d"toolDescription"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"esriFloatTrailing"\x3e\r\n                \x3ca href\x3d"#" data-dojo-attach-point\x3d"_closeBtn" title\x3d"${i18n.close}" class\x3d"esriAnalysisCloseIcon"\x3e\x3c/a\x3e\r\n              \x3c/div\x3e              \r\n            \x3c/div\x3e               \r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both; border-bottom: #CCC thin solid; height:1px;width:100%;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/Form" data-dojo-attach-point\x3d"_form" readOnly\x3d"true"\x3e\r\n    \x3ctable class\x3d"esriFormTable"  data-dojo-attach-point\x3d"_aggregateTable"  style\x3d"border-collapse:collapse;border-spacing:5px;" cellpadding\x3d"5px" cellspacing\x3d"5px"\x3e \r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_titleRow"\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"sectionHeader" data-dojo-attach-point\x3d"_interpolateToolDescription"\x3e${i18n.toolDefine}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_analysisLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2" style\x3d"padding-bottom:0;"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading  esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.analysisLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput" style\x3d"padding-bottom:0;"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"inputMultidimensionalRaster"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_selectAnalysisRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"esriLeadingMargin1 longInput esriLongLabel" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_analysisSelect" data-dojo-attach-event\x3d"onChange:_handleAnalysisLayerChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.oneLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_dimensionLabel"\x3e${i18n.dimensionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"dimension"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_dimensionSelect" data-dojo-attach-event\x3d"onChange:_handleDimensionChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.twoLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_variablesLabel"\x3e${i18n.variablesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"variables"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_variablesListLabel" style\x3d"display:none"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2"\x3e${i18n.variablesListLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv\x3e\r\n              \x3ctable class\x3d"esriFormTable"\x3e\r\n                \x3ctbody data-dojo-attach-point\x3d"_variablesList"\x3e\x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.threeLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_aggregationMethodLabel"\x3e${i18n.aggregationMethodLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"aggregationMethod"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_aggregationMethodSelect" data-dojo-attach-event\x3d"onChange:_handleAggregationMethodChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_aggregationFunctionLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_aggregationFunctionLabel"\x3e${i18n.aggregationFunctionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"aggregationFunction"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_aggregationFunctionSelectRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3" style\x3d"padding-top:0;"\x3e\r\n            \x3cselect class\x3d"longInput esriLongLabel esriLeadingMargin1" style\x3d"margin-top:1.0em;" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_aggregationFunctionSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fourLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_aggregationDefinitionLabel"\x3e${i18n.aggregationDefinitionLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"aggregationDefinition"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_aggregationDefinitionSelect" data-dojo-attach-event\x3d"onChange:_handleAggregationDefinitionChange"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalKeywordLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_intervalKeywordLabel"\x3e${i18n.intervalKeywordLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalKeyword"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalKeywordSelectRow" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cselect class\x3d"longInput esriLeadingMargin1" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_intervalKeywordSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalValueRow" class\x3d"esriLeadingMargin1" style\x3d"display:none;"\x3e\r\n          \x3ctd\x3e\r\n            \x3clabel\x3e${i18n.intervalValueLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true" data-dojo-attach-point\x3d"_intervalValue" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalValue"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalUnitRow" class\x3d"esriLeadingMargin1" style\x3d"display:none;"\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel data-dojo-attach-point\x3d"_intervalUnitLabel"\x3e${i18n.intervalUnitLabel}\x3c/label\x3e\r\n            \x3cselect class\x3d"longInput" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"_intervalUnitSelect"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalUnit"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3c!--IntervalRange--\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalRangesLabelRow" style\x3d"display:none;"\x3e\r\n          \x3ctd\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin1" data-dojo-attach-point\x3d"_intervalValueLabel"\x3e${i18n.intervalRangesLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esrihelptopic\x3d"intervalRanges"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"_intervalRangesRow" style\x3d"display:none;"\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv\x3e\r\n              \x3ctable class\x3d"esriFormTable"\x3e\r\n                \x3ctbody\x3e\r\n                  \x3ctr data-dojo-attach-point\x3d"_intervalRangeListRow"\x3e\r\n                    \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n                  \x3c/tr\x3e\r\n                \x3c/tbody\x3e\r\n              \x3c/table\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel" data-dojo-attach-point\x3d"_ignoreNodataLabel"\x3e${i18n.ignoreNodataLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"ignoreNodataLabel"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3clabel class\x3d"esriLeadingMargin2 esriSelectLabel" data-dojo-attach-point\x3d"_ignoreNodata"\x3e\r\n              \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_ignoreNoDataCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" checked value\x3d"true" /\x3e\r\n              ${i18n.ignore}\r\n            \x3c/label\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3" class\x3d"clear"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"2"\x3e\r\n            \x3clabel class\x3d"esriFloatLeading esriTrailingMargin025 esriAnalysisNumberLabel"\x3e${i18n.fiveLabel}\x3c/label\x3e\r\n            \x3clabel class\x3d"esriAnalysisStepsLabel"\x3e${i18n.outputLayerLabel}\x3c/label\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"shortTextInput"\x3e\r\n            \x3ca href\x3d"#" class\x3d\'esriFloatTrailing helpIcon\' esriHelpTopic\x3d"outputName"\x3e\x3c/a\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" class\x3d"longInput esriLeadingMargin1" data-dojo-props\x3d"trim:true,required:true" data-dojo-attach-point\x3d"_outputLayerInput" value\x3d""\x3e\x3c/input\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseFolderRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel style\x3d"width:9px;font-size:smaller;"\x3e${i18n.saveResultIn}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput" data-dojo-attach-point\x3d"_webMapFolderSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:60%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd colspan\x3d"3"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_chooseLayerTypeRow" class\x3d"esriLeadingMargin1"\x3e\r\n              \x3clabel class\x3d"esriSaveLayerlabel"\x3e${i18n.saveLayerType}\x3c/label\x3e\r\n              \x3cinput class\x3d"longInput esriLongLabel" data-dojo-attach-point\x3d"_webLayerTypeSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" trim\x3d"true" style\x3d"width:55%;"\x3e\x3c/input\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e         \r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"padding:5px;margin-top:5px;border-top:solid 1px #BBB;"\x3e\r\n    \x3cdiv class\x3d"esriExtentCreditsCtr"\x3e\r\n      \x3ca class\x3d"esriFloatTrailing esriSmallFont" href\x3d"#" data-dojo-attach-point\x3d"_showCreditsLink"\x3e${i18n.showCredits}\x3c/a\x3e\r\n      \x3clabel data-dojo-attach-point\x3d"_chooseExtentDiv" class\x3d"esriSelectLabel esriExtentLabel"\x3e\r\n        \x3cinput type\x3d"radio" data-dojo-attach-point\x3d"_useExtentCheck" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-props\x3d"checked:true" name\x3d"extent" value\x3d"true" /\x3e\r\n        ${i18n.useMapExtent}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3ctable class\x3d"esriFormTable"\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cbutton data-dojo-type\x3d"dijit/form/Button" type\x3d"submit" data-dojo-attach-point\x3d"_saveBtn" class\x3d"esriAnalysisSubmitButton" data-dojo-attach-event\x3d"onClick:_handleSaveBtnClick"\x3e\r\n              ${i18n.runAnalysis}\r\n            \x3c/button\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/Dialog" title\x3d"${i18n.creditTitle}" data-dojo-attach-point\x3d"_usageDialog" style\x3d"width:40em;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/analysis/CreditEstimator" data-dojo-attach-point\x3d"_usageForm"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e       \r\n\x3c/div\x3e\r\n'}});
define("esri/dijit/analysis/AggregateMultidimensionalRaster","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/_base/connect dojo/has dojo/dom-class dojo/dom-style dojo/string dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_OnDijitClickMixin dijit/_FocusMixin dijit/registry dijit/form/CheckBox dijit/form/Select ../../kernel ../../lang ./RasterAnalysisMixin ./utils ./AnalysisRegistry ./ItemTypes dojo/i18n!../../nls/jsapi dojo/i18n!./nls/AggregateMultidimensionalRaster dojo/text!./templates/AggregateMultidimensionalRaster.html".split(" "),
function(l,e,h,t,n,u,I,m,v,d,w,x,y,z,A,B,p,J,q,C,K,D,E,L,F,r,G,H){l=l([x,y,z,A,B,D],{declaredClass:"esri.dijit.analysis.AggregateMultidimensionalRaster",templateString:H,widgetsInTemplate:!0,inputLayers:null,inputLayer:null,dimension:null,dimensions:null,variables:null,variableList:null,aggregationFunctions:null,aggregationMethod:"MEAN",aggregationFunction:null,aggregationDefinition:"ALL",intervalKeyword:"HOURLY",intervalValue:1,intervalUnit:"Hours",intervalRanges:null,ignoreNoData:!0,_emptyValue:-12345678,
toolName:"AggregateMultidimensionalRaster",helpFileName:"AggregateMultidimensionalRaster",toolNlsName:r.aggregateMultidimensionalRasterTool,rasterGPToolName:"AggregateMultidimensionalRaster",resultParameter:"outputMultidimensionalRaster",browseType:[F.IS],hasCustomCheck:!0,customCheckFailureMessage:r.customCheckFailureMessage.integerService,constructor:function(a,b){this._pbConnects=[];this._statsRows=[];a.containerNode&&(this.container=a.containerNode);a.rerun&&(a.inputMultidimensionalRaster=a.inputLayer)},
postMixInProperties:function(){this.inherited(arguments);e.mixin(this.i18n,G)},_getJobParameters:function(){var a=t.toJson(E.constructAnalysisInputLyrObj(this.get("inputLayer"))),b=this.get("dimension"),c=this.get("variables"),f=this._getAggregationMethodParam(),g=this._getAggregationDefinitionParam(),d=this.get("ignoreNoData");return e.mixin({inputMultidimensionalRaster:a,dimension:b,variables:c,ignoreNoData:d},e.mixin(f,g))},_setDefaultInputs:function(){this.dimension&&this.dimensions&&this._dimensionSelect.set("value",
this.dimension);this.variables&&this._variables.set("value",this.variables);this.aggregationMethod&&this._loadAggregationMethod(!0);this.aggregationDefinition&&this._loadAggregationDefinition(!0);var a=0;this.aggregationFunctions&&h.forEach(this.aggregationFunctions,function(b,c){this._aggregationFunctionSelect.addOption({value:c,label:b.name});0!==c||this.rerun?this.aggregationFunction&&this.aggregationFunction.name===this.aggregationFunction.name&&this.aggregationFunction.url===this.aggregationFunction.url&&
(a=c):this.set("aggregationFunction",b)},this);this.aggregationFunction&&0<a&&this._aggregationFunctionSelect.set("value",a);this.aggregationDefinition&&this._loadAggregationDefinition(!0);this.intervalKeyword&&this._loadIntervalKeyword(!0);this.intervalValue&&this._intervalValue.set("value",this.intervalValue);this.intervalUnit&&this._loadIntervalUnit();this.intervalRanges&&this._intervalRanges.set("value",this.intervalRanges);this._ignoreNoDataCheck.set("checked",this.ignoreNoData)},_resetUI:function(){this.inputLayer&&
(this.outputLayerName=v.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name}),this._outputLayerInput.set("value",this.outputLayerName),this.inputLayer.getMultidimensionalInfo().then(e.hitch(this,function(a){this.variableList=a.variables;this.set("variables",this.variableList)})))},_loadAggregationMethod:function(a){this._aggregationMethodSelect.removeOption(this._aggregationMethodSelect.getOptions());a=a&&this.aggregationMethod;this._aggregationMethodSelect.addOption([{value:"MEAN",
label:this.i18n.mean,selected:"MEAN"===a},{value:"MAJORITY",label:this.i18n.majority,selected:"MAJORITY"===a},{value:"MAXIMUM",label:this.i18n.maximum,selected:"MAXIMUM"===a},{value:"MEDIAN",label:this.i18n.median,selected:"MEDIAN"===a},{value:"MINIMUM",label:this.i18n.minimum,selected:"MINIMUM"===a},{value:"MINORITY",label:this.i18n.minority,selected:"MINORITY"===a},{value:"RANGE",label:this.i18n.range,selected:"RANGE"===a},{value:"STD",label:this.i18n.standardDeviation,selected:"STD"===a},{value:"SUM",
label:this.i18n.sum,selected:"SUM"===a},{value:"VARIETY",label:this.i18n.variety,selected:"VARIETY"===a},{value:"CUSTOM",label:this.i18n.custom,selected:"CUSTOM"===a}])},_loadAggregationDefinition:function(a){this._aggregationDefinitionSelect.removeOption(this._aggregationDefinitionSelect.getOptions());a=a&&this.aggregationDefinition;this.dimension=this.get("dimension");"StdTime"!==this.dimension?this._aggregationDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===a},{value:"INTERVAL_VALUE",
label:this.i18n.intervalValue,selected:"INTERVAL_VALUE"===a},{value:"INTERVAL_RANGES",label:this.i18n.intervalRanges,selected:"INTERVAL_RANGES"===a}]):this._aggregationDefinitionSelect.addOption([{value:"ALL",label:this.i18n.all,selected:"ALL"===a},{value:"INTERVAL_KEYWORD",label:this.i18n.intervalKeyword,selected:"INTERVAL_KEYWORD"===a},{value:"INTERVAL_VALUE",label:this.i18n.intervalValue,selected:"INTERVAL_VALUE"===a},{value:"INTERVAL_RANGES",label:this.i18n.intervalRanges,selected:"INTERVAL_RANGES"===
a}]);this._handleAggregationDefinitionChange("ALL")},_loadIntervalKeyword:function(a){this._intervalKeywordSelect.removeOption(this._intervalKeywordSelect.getOptions());a=a&&this.intervalKeyword;this._intervalKeywordSelect.addOption([{value:"HOURLY",label:this.i18n.hourly,selected:"HOURLY"===a},{value:"DAILY",label:this.i18n.daily,selected:"DAILY"===a},{value:"WEEKLY",label:this.i18n.weekly,selected:"WEEKLY"===a},{value:"MONTHLY",label:this.i18n.monthly,selected:"MONTHLY"===a},{value:"QUARTERLY",
label:this.i18n.quarterly,selected:"QUARTERLY"===a},{value:"YEARLY",label:this.i18n.yearly,selected:"YEARLY"===a},{value:"DEKADLY",label:this.i18n.dekadly,selected:"DEKADLY"===a},{value:"PENTADLY",label:this.i18n.pentadly,selected:"PENTADLY"===a},{value:"RECURRING_DAILY",label:this.i18n.recurringDaily,selected:"RECURRING_DAILY"===a},{value:"RECURRING_WEEKLY",label:this.i18n.recurringWeekly,selected:"RECURRING_WEEKLY"===a},{value:"RECURRING_MONTHLY",label:this.i18n.recurringMonthly,selected:"RECURRING_MONTHLY"===
a},{value:"RECURRING_QUARTERLY",label:this.i18n.recurringQuarterly,selected:"RECURRING_QUARTERLY"===a}])},_loadIntervalUnit:function(a){this._intervalUnitSelect.removeOption(this._intervalUnitSelect.getOptions());a=a&&this.intervalUnit;this._intervalUnitSelect.addOption([{value:"HOURS",label:this.i18n.hours,selected:"HOURS"===a},{value:"DAYS",label:this.i18n.days,selected:"DAYS"===a},{value:"WEEKS",label:this.i18n.weeks,selected:"WEEKS"===a},{value:"MONTHS",label:this.i18n.months,selected:"MONTHS"===
a},{value:"YEARS",label:this.i18n.years,selected:"YEARS"===a}])},_loadValueRanges:function(){this._removeStatsRows();var a=this.get("variables"),b=this.get("dimension");if(a&&b){var c=a.split(",")[0],f=[];this.variableList.find(function(a){return a.name===c}).dimensions.find(function(a){return a.name===b}).values.forEach(function(a){var c=a.toString(),d=a;"StdTime"===b&&(a=new Date(a),d=a.toISOString().split(".")[0],c=a.toLocaleString());f.push({value:d,label:c})});this._options=f;this._createStatsRow()}},
_createStatsRow:function(){var a,b,c,f,g;a=d.create("tr",null,this._intervalRangeListRow,"before");c=d.create("td",{style:{width:"45%"}},a);b=d.create("td",{style:{width:"45%"}},a);c=new q({maxHeight:200,"class":"esriLeadingMargin05 mediumInput esriTrailingMargin025 attrSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},d.create("select",null,c));b=new q({"class":"mediumInput statsSelect",style:{tableLayout:"fixed",overflowX:"hidden"}},d.create("select",null,b));this.addRangeOptions({selectWidget:c,
label:this.i18n.minimumValueLabel});this.addRangeOptions({selectWidget:b,label:this.i18n.maximumValueLabel});c.set("statisticSelect",b);n.connect(c,"onChange",this._handleAttrSelectChange);g=d.create("td",{"class":"shortTextInput removeTd",style:{display:"none",maxWidth:"12px"}},a);f=d.create("a",{title:this.i18n.removeAttrStats,"class":"closeIcon statsRemove",innerHTML:"\x3cimg src\x3d'"+require.toUrl("./images/close.gif")+"' border\x3d'0''/\x3e"},g);n.connect(f,"onclick",e.hitch(this,this._removeStatsRow,
a));this._statsRows.push(a);b.set("attributeSelect",c);b.set("removeTd",g);b.set("isnewRowAdded",!1);b.set("referenceWidget",this);b.watch("value",this._handleStatsValueUpdate);this._currentStatsSelect=b;this._currentAttrSelect=c;return!0},addRangeOptions:function(a){var b=a.selectWidget;b.removeOption(b.getOptions());b.addOption([{value:this._emptyValue,label:a.label}]);b.addOption(this._options)},_removeStatsRow:function(a){h.forEach(p.findWidgets(a),function(a){a.destroyRecursive()});d.destroy(a)},
_removeStatsRows:function(){h.forEach(this._statsRows,this._removeStatsRow,this);this._statsRows=[]},_handleDimensionChange:function(a){var b;this.dimension!==a&&(this.dimension=a,this.variableList&&(b=this.variableList.filter(function(b){return b.dimensions.some(function(b){return b.name===a})}),this.set("variables",b),0<b.length&&(b=b[0].dimensions.filter(function(b){return b.name===a})[0].interval)&&this.set("intervalValue",b)),this._loadAggregationDefinition(this.aggregationDefinition))},_handleAggregationMethodChange:function(a){this._showDiv(this._aggregationFunctionLabelRow,
"CUSTOM"==a);this._showDiv(this._aggregationFunctionSelectRow,"CUSTOM"==a)},_handleAggregationDefinitionChange:function(a){this._showDiv(this._intervalKeywordSelectRow,"INTERVAL_KEYWORD"==a&&"StdTime"===this.dimension);this._showDiv(this._intervalKeywordLabelRow,"INTERVAL_KEYWORD"==a&&"StdTime"===this.dimension);this._showDiv(this._intervalValueRow,"INTERVAL_VALUE"==a);this._showDiv(this._intervalUnitRow,"INTERVAL_VALUE"==a&&"StdTime"===this.dimension);this._showDiv(this._intervalRangesLabelRow,"INTERVAL_RANGES"==
a);this._showDiv(this._intervalRangesRow,"INTERVAL_RANGES"==a);"INTERVAL_RANGES"==a&&this._loadValueRanges()},_handleAttrSelectChange:function(a){var b,c;b=this.get("statisticSelect");c=this._emptyValue;a===c||b.get("value")===c||b.get("isnewRowAdded")||(a=b.get("removeTd"),m.set(a,"display","block"),a=b.get("referenceWidget"),e.hitch(a,a._createStatsRow()),b.set("isnewRowAdded",!0))},_handleStatsValueUpdate:function(a,b,c){this.get("attributeSelect")&&(a=this.get("attributeSelect"),b=this._emptyValue,
a.get("value")&&a.get("value")!==b&&c&&c!==b&&!this.get("isnewRowAdded")&&(c=this.get("removeTd"),m.set(c,"display","block"),c=this.get("referenceWidget"),e.hitch(c,c._createStatsRow()),this.set("isnewRowAdded",!0)))},isMultidimensionalLayer:function(a){return a.hasMultidimensions},_showDiv:function(a,b){m.set(a,"display",b?"block":"none")},_getAggregationMethodParam:function(){var a=this.get("aggregationMethod");return"CUSTOM"===a?{aggregationMethod:a,aggregationFunction:JSON.stringify(this.get("aggregationFunction"))}:
{aggregationMethod:a}},_getAggregationDefinitionParam:function(){var a=this.get("aggregationDefinition");return"INTERVAL_KEYWORD"===a?{aggregationDefinition:a,intervalKeyword:this.get("intervalKeyword")}:"INTERVAL_VALUE"===a?{aggregationDefinition:a,intervalValue:this.get("intervalValue"),intervalUnit:this.get("intervalUnit")}:"INTERVAL_RANGES"===a?{aggregationDefinition:a,intervalRanges:this.get("intervalRanges")}:{aggregationDefinition:a}},_setInputLayersAttr:function(a){this.inputLayers=h.filter(a,
e.hitch(this,function(a){return this.isMultidimensionalLayer(a)}))},isValidInputLayer:function(a){return this.isMultidimensionalLayer(a)},_getInputLayersAttr:function(){return this.inputLayers},_setDimensionAttr:function(a){this.dimension=a;this._loadAggregationDefinition(this.AggregationDefinition)},_getDimensionAttr:function(){this._dimensionSelect&&this._dimensionSelect.get("value")&&(this.dimension=this._dimensionSelect.get("value"));return this.dimension},_setDimensionsAttr:function(a){var b;
this.dimensions!==a&&this.inputLayer&&(this._dimensionSelect.removeOption(this._dimensionSelect.getOptions()),h.forEach(a,function(a){this._dimensionSelect.addOption({value:a.name,label:a.name})},this),this.dimension?this._dimensionSelect.set("value",this.dimension):(this.dimension=this._dimensionSelect.get("value"),b=this._dimensionSelect.get("value"),this._loadAggregationDefinition(),this.set("intervalValue",a.find(function(a){return a.name==b}).interval)))},_getDimensionsAttr:function(){return this.dimensions},
_setVariablesAttr:function(a){var b=!1,c=" checked";this._variablesList.innerHTML="";h.forEach(a,function(a){var g="",f,e,k=a.dimensions;k&&0<k.length&&(f=null,h.forEach(k,function(a){f=a.name+"\x3d"+a.values.length+",";g+=f}),g=g.slice(0,-1),e=a.name+" ["+g+"] ("+a.description+")",a=d.toDom("\x3ctr\x3e\x3ctd colspan\x3d'3'\x3e\x3clabel class\x3d'esriLeadingMargin1 esriSelectLabel'\x3e\x3cinput type\x3d'checkbox' data-dojo-type\x3d'dijit/form/CheckBox' value\x3d"+a.name+c+"/\x3e"+e+"\x3c/label\x3e\x3c/td\x3e\x3c/tr\x3e"),
d.place(a,this._variablesList),c="",b||this.dimensions===k||(this.set("dimensions",k),b=!0))},this);this._showDiv(this._variablesListLabel,0<this.variableList.length)},_getVariablesAttr:function(){var a=this._variablesList.querySelectorAll("input:checked");if(a&&0<a.length){var b=[];a.forEach(function(a){b.push(a.value)});return b.join(",")}return""},_setAggregationMethodAttr:function(a){this.aggregationMethod=a},_getAggregationMethodAttr:function(){this._aggregationMethodSelect&&this._aggregationMethodSelect.get("value")&&
(this.aggregationMethod=this._aggregationMethodSelect.get("value"));return this.aggregationMethod},_setAggregationDefinitionAttr:function(a){this.aggregationDefinition=a},_getAggregationDefinitionAttr:function(){this._aggregationDefinitionSelect&&this._aggregationDefinitionSelect.get("value")&&(this.aggregationDefinition=this._aggregationDefinitionSelect.get("value"));return this.aggregationDefinition},_setAggregationFunctionAttr:function(a){this.aggregationFunction=a},_getAggregationFunctionAttr:function(){this._aggregationFunctionSelect&&
this._aggregationFunctionSelect.get("value")&&(this.aggregationFunction=this._aggregationFunctionSelect.get("value"));return this.aggregationFunction},_setIntervalKeywordAttr:function(a){this.intervalKeyword=a},_getIntervalKeywordAttr:function(){this._intervalKeywordSelect&&this._intervalKeywordSelect.get("value")&&(this.intervalKeyword=this._intervalKeywordSelect.get("value"));return this.intervalKeyword},_setIntervalValueAttr:function(a){this.intervalValue=a;this._intervalValue.set("value",a)},
_getIntervalValueAttr:function(){this._intervalValue&&this._intervalValue.get("value")&&(this.intervalValue=this._intervalValue.get("value"));return this.intervalValue},_setIntervalUnitAttr:function(a){this.intervalUnit=a},_getIntervalUnitAttr:function(){this._intervalUnitSelect&&this._intervalUnitSelect.get("value")&&(this.intervalUnit=this._intervalUnitSelect.get("value"));return this.intervalUnit},_setIntervalRangesAttr:function(a){this.intervalRanges=a},_getIntervalRangesAttr:function(){var a=
[],b,c,d=this._emptyValue;w(".statsSelect",this.domNode).forEach(function(e){b=p.byNode(e);c=b.get("attributeSelect");c.get("value")!==d&&b.get("value")!==d&&a.push(c.get("value")+" "+b.get("value"))});return a.join(";")},_setIgnoreNoDataAttr:function(a){this.ignoreNoData=a},_getIgnoreNoDataAttr:function(){this._ignoreNoDataCheck&&(this.ignoreNoData=this._ignoreNoDataCheck.get("checked"));return this.ignoreNoData}});u("extend-esri")&&e.setObject("dijit.analysis.AggregateMultidimensionalRaster",l,
C);return l});