// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/infographics/comparison/jsonBuilder/ComparisonUtil",["esri/dijit/geoenrichment/utils/SortUtil"],function(k){function l(f,g){var c={};(g||[]).forEach(function(d){var a=0,e=0;f.forEach(function(b){b=null==b[d]?NaN:+b[d];isNaN(b)||(a++,e+=b)});c[d]=a?e/a:NaN});return c}function m(f,g){var c={};(g||[]).forEach(function(d){var a=[];f.forEach(function(b){b=null==b[d]?NaN:+b[d];!isNaN(b)&&a.push(b)});if(a.length){a.sort(k.compareNumeric);var e=Math.floor(a.length/
2);c[d]=a.length!==2*e?a[e]:(a[e-1]+a[e])/2}else c[d]=NaN});return c}var h={USE_AVERAGE_VALUES:"averageOfSites",USE_MEDIAN_VALUES:"medianOfSites",calculateStatisticalComparison:function(f,g,c){return(c===h.USE_MEDIAN_VALUES?m:l)(f,g)}};return h});