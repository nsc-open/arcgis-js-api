// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/PortalQueryUtil",[],function(){var c={combineQueryString:function(a){var b="";a.type&&(b+='type:"'+a.type+'"');a.typeKeywords?b=Array.isArray(a.typeKeywords[0])?b+(" typekeywords:("+a.typeKeywords.map(function(a){return c.combineTypeKeywords(a)}).join(" OR ")+")"):b+(" typekeywords:"+c.combineTypeKeywords(a.typeKeywords,a.typeKeywordsNot)):a.typeKeywordsNot&&(b+=" typekeywords:"+c.combineTypeKeywords(null,a.typeKeywordsNot));a.owner&&(b+=" owner:"+a.owner);a.isShared&&
(b+=' (access:"shared" OR access:"org")');a.ownerNot&&(b+=" NOT owner:"+a.ownerNot);return b},combineTypeKeywords:function(a,b){a=a?c._combineArray(a):"";return b?(b=c._combineArray(b),"("+a+" NOT "+b+")"):a},_combineArray:function(a){return"string"===typeof a?"("===a.charAt(0)||'"'===a.charAt(0)?a:'"'+a+'"':1===a.length?'"'+a[0]+'"':"("+a.map(function(a){return'"'+a+'"'}).join(" ")+")"}};return c});