// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/conversion/portalToEditorUtils/parsers/MapParser",["../../ConversionUtil","./AlignParser"],function(d,h){var g={getElement:function(f,e){var c=f.attributes,b={id:"map",isMap:!0,style:{top:d.ptToPx(c.top)||0,left:d.ptToPx(c.left)||0,width:d.ptToPx(c.width),height:d.ptToPx(c.height)}},a=e.templateJson.metadata.mapImageInfosHash[c.name];b.webMapId=a?a.webMapId:c.webMapId;b.defaultBasemapId=a?a.defaultBasemapId:c.defaultBasemapId;b.mapScale=a?a.mapScale:
null;b.calculatorFieldName=a&&a.fieldName;b.additionalLayerInfos=a&&a.additionalLayerInfos;b.pinSymbolJson=a&&a.pinSymbolJson;b.areaSymbolJsons=a&&a.areaSymbolJsons;b.areaSymbolRamp=a&&a.areaSymbolRamp;b.showMapLegend=c.showMapLegend;h.parseAlign(c,b.style);e.postProcessMapJson&&e.postProcessMapJson(f,b);return b},parseMapImageDField:function(d,e){return g.getElement({name:"mapImage",attributes:{name:d}},e)}};return g});