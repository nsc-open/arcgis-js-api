// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/utils/InfographicThemeUtil",[],function(){function f(a,b){var c={},e;for(e in g)a&&void 0!==a[e]&&(c[e]=a[e]),b&&void 0!==b[e]&&(c[e]=b[e]);return c}var d={},g={backgroundColor:1,color:1,fontFamily:1,fontSize:1,fontStyle:1,fontWeight:1,textDecoration:1};d.applyThemeSettingsToJson=function(a,b){if(a.header){var c=a.header.data.data[0];b&&b.titleStyle?c.themeStyle={fields:{field0:f(b.titleStyle)}}:c&&delete c.themeStyle;if(c=a.header.data.data[1])(c=
c.fieldInfos.field0.shapeJson)&&b&&b.titleLine&&b.titleLine.color?c.style.borderColor||(c.themeStyle={borderColor:b.titleLine.color}):c&&delete c.themeStyle}a.variableTables&&a.variableTables.forEach(function(a){a.shape&&d.applyThemeSettingsToShapeJson(a.shape.shapeJson,b,a.shape.isHighlighted);if(a.variable)if(b&&b.variableLabelStyle){var c;a.variable.isHighlighted?c=f(b.variableLabelStyleHighlighted):a.variable.isContrastColor&&(c=f(b.variableLabelStyleContrast));a.variable.themeStyle=f(b.variableLabelStyle,
c);a.variable.themeStyle.isHighlighted=a.variable.isHighlighted;a.variable.themeStyle.isContrastColor=a.variable.isContrastColor}else delete a.variable.themeStyle;a.description&&(b&&b.variableDescriptionStyle?a.description.themeStyle=f(b.variableDescriptionStyle):delete a.description.themeStyle)});return a};d.applyThemeSettingsToShapeJson=function(a,b,c){var d=c?"highlightedIcon":"icon";a&&b&&b[d]&&b[d].backgroundColor?(a.themeStyle={isHighlighted:c},a.style.borderColor||(a.themeStyle.borderColor=
b[d].backgroundColor),a.style.fillColor||(a.themeStyle.fillColor=b[d].backgroundColor)):a&&delete a.themeStyle;a&&b&&b.iconBarBackground&&b.iconBarBackground.backgroundColor?(a.barBackgroundThemeStyle={},a.barBackgroundStyle&&a.barBackgroundStyle.fillColor||(a.barBackgroundThemeStyle.fillColor=b.iconBarBackground.backgroundColor)):a&&delete a.barBackgroundThemeStyle};d.undoThemeFromJson=function(a){return d.applyThemeSettingsToJson(a,null)};d.applyThemeSettingsPaginatableInfographicJson=function(a,
b){return d._applyThemeSettingsToTitleSectionJson(a,b)};d.applyThemeSettingsComparisonInfographicJson=function(a,b){return d._applyThemeSettingsToTitleSectionJson(a,b)};d.applyThemeSettingsAreaDetailsInfographicJson=function(a,b){return d._applyThemeSettingsToTitleSectionJson(a,b)};d._applyThemeSettingsToTitleSectionJson=function(a,b){if(a.titleSectionJson){var c=a.titleSectionJson.stack[0].data.data[0];b&&b.titleStyle?c.themeStyle={fields:{field0:f(b.titleStyle)}}:c&&delete c.themeStyle;if(c=a.titleSectionJson.stack[0].data.data[1])(c=
c.fieldInfos.field0.shapeJson)&&b&&b.titleLine&&b.titleLine.color?c.style.borderColor||(c.themeStyle={borderColor:b.titleLine.color}):c&&delete c.themeStyle}return a};return d});