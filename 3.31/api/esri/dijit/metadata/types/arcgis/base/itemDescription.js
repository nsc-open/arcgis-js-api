// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/itemDescription",["dojo/_base/lang","dojo/_base/array","dojo/dom-class","dojo/has","../../../../../kernel"],function(g,e,f,k,l){e={beforeInitializeElement:function(b,c){var a=c.gxePath;b=function(){c.hide=!0;c.notApplicable=!0;c.domNode.style.display="none"};var d=function(){var a=c.getParent();a&&(a._isGxeDescriptor||a.initializeSection)&&(a.notApplicable=!0)},e=function(){var a=c.getParent();a&&(a._isGxeDescriptor||a.initializeSection)&&(a.notApplicable=
!0,(a=a.getParent())&&a._isGxeTabs&&(a=a.getParent())&&a._isGxeDescriptor&&(a.notApplicable=!0))},h=function(){for(var a=c,b=null;a;){if(a._isGxeTabs){b&&(b.notApplicable=!0);break}b=a;a=a.getParent()}},g=function(){for(var a=c;a;){if(a._isGxeTabs)return a;a=a.getParent()}return null};if("/metadata"===a||"/metadata/Esri"===a||"/metadata/dataIdInfo"===a)a=null;else if("/metadata/dqInfo"===a||"/metadata/distInfo"===a)b(),d();else if("/metadata/contInfo"===a||"/metadata/eainfo"===a)b(),d();else if("/metadata/refSysInfo"===
a)b(),e();else if("/metadata/spatRepInfo"===a||"/metadata/appSchInfo"===a||"/metadata/porCatInfo"===a)b(),d();else if("/metadata/mdContact"===a||"/metadata/mdMaint"===a||"/metadata/mdConst"===a)b(),d();else if("/metadata/dataIdInfo/idPoC"===a||"/metadata/dataIdInfo/resMaint"===a)b(),d();else if("/metadata/dataIdInfo/idAbs"===a)b=c.getParent().getParent().getParent(),b.tabsNode.style.display="none",f.remove(b.domNode,"gxeTabs gxeIndent");else if("/metadata/dataIdInfo/suppInfo"===a||"/metadata/dataIdInfo/envirDesc"===
a)b();else if("/metadata/dataIdInfo/dataLang"===a||"/metadata/dataIdInfo/dataChar"===a)b(),d();else if("/metadata/dataIdInfo/idStatus"===a||"/metadata/dataIdInfo/spatRpType"===a)b(),d();else if("/metadata/dataIdInfo/dataScale"===a)b(),d();else if("/metadata/dataIdInfo/searchKeys"===a)b=c.getParent().getParent(),b.tabsNode.style.display="none",f.remove(b.domNode,"gxeTabs gxeIndent");else if("/metadata/dataIdInfo/tpCat"===a)b(),d();else if("/metadata/dataIdInfo/themeKeys"===a||"/metadata/dataIdInfo/placeKeys"===
a)b(),d();else if("/metadata/dataIdInfo/tempKeys"===a||"/metadata/dataIdInfo/discKeys"===a)b(),d();else if("/metadata/dataIdInfo/stratKeys"===a||"/metadata/dataIdInfo/otherKeys"===a)b(),d();else if("/metadata/dataIdInfo/graphOver"===a)b(),c.getParent().getParent().notApplicable=!0,c.getParent().getParent().getParent().getParent().notApplicable=!0;else if("/metadata/dataIdInfo/dsFormat"===a||"/metadata/dataIdInfo/idSpecUse"===a)b(),d();else if("/metadata/dataIdInfo/aggrInfo"===a)b(),d();else if("/metadata/Esri/locales"===
a)b();else if("/metadata/Binary"===a)c.getParent().notApplicable=!0,h();else if("/metadata/Esri/CreaDate"===a)c.getParent().notApplicable=!0,h();else if("/metadata/Esri/ArcGISstyle"===a){if(b=g())b.tabsNode.style.display="none",f.remove(b.domNode,"gxeTabs gxeIndent")}else a=a.substring(10),-1===a.indexOf("/")?(b(),"mdHrLv"===a?d():"mdLang"===a&&h()):0===a.indexOf("dataIdInfo/")&&(a=a.substring(11),-1===a.indexOf("/")&&0===a.indexOf("sv")?b():0===a.indexOf("idCitation/")&&("idCitation/resTitle"==a?
(b=c.getParent().getParent(),b.tabsNode.style.display="none",f.remove(b.domNode,"gxeTabs gxeIndent")):b()))}};k("extend-esri")&&g.setObject("dijit.metadata.types.arcgis.base.itemDescription",e,l);return e});