// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/comparison/ComparisonListUtil",["dojo/_base/declare","dojo/dom-class","esri/dijit/geoenrichment/OnDemandSelect","esri/dijit/geoenrichment/ReportPlayer/countryConfig"],function(k,m,n,l){var h={getListOptionsFromFeatures:function(a,b){a=h.getFeatureGroups(a,b);return h.getOptionsFromGroups(a,b)},getFeatureGroups:function(a,b){var c={},d=[];a.forEach(function(a){if(!a.attributes.isThisArea){var b=a.attributes.StdGeographyLevel||"",e=c[b];e||(e=(e=l.getGeographiesModel())?
e.getLevelPluralName(b):b,e={levelId:b,label:e,features:[]},c[b]=e,d.push(e));e.features.push(a)}});d.forEach(function(b){b.features.sort(function(b,a){return(b.attributes.StdGeographyName||"").localeCompare(a.attributes.StdGeographyName||"")})});return d},getOptionsFromGroups:function(a,b){function c(b){b.features.forEach(function(a){f.push({isArea:!0,value:d||!a.attributes.StdGeographyID?String(e++):a.attributes.StdGeographyLevel+"."+a.attributes.StdGeographyID,label:a.attributes.StdGeographyName||
"",attributes:a.attributes,featureId:a.attributes.StdGeographyID,levelId:b.levelId})})}var d=b&&b.isIndexBased,g=b&&b.hideTitleForSingleGroup,f=[],e=0;1!==a.length||a[0].levelId?a.forEach(function(b,e){0<e&&f.push({isSeparator:!0});(1<a.length||!g)&&f.push({isTitle:!0,enabled:!1,value:b.levelId,label:b.label+":"});c(b)}):c(a[0]);return f},getDefaultOptionValue:function(a,b){function c(b){var c;a.some(function(a){if(a.isArea&&(!b||!d||a.levelId===d.id))return c=a,!0});return c}var d;b&&(d=l.getGeographiesModel().getLevel(b));
return(b=c(!0)||c(!1))&&b.value},getFeatureIndexInOptionsById:function(a,b,c){var d=b+"."+c,g=-1,f=0;a.some(function(b){if(b.isArea){if(b.value===d)return g=f,!0;f++}});return g},getOptionValueByFeatureIndex:function(a,b){var c,d=0;a.some(function(a){if(a.isArea){if(d===b)return c=a,!0;d++}});return c&&c.value},getNumFeaturesFromOptions:function(a){var b=0;a.forEach(function(a){a.isArea&&b++});return b}};k=k(n.itemRenderers.DefaultItemRenderer,{createPresentation:function(a,b,c,d,g){var f=this.inherited(arguments);
a.isArea&&m.add(f,"esriGEComparisonList_areaItemRoot");return f}});h.ComparisonListItemRenderer=k;return h});