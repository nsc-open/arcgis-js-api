// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/createHTML/HTMLPageBuilder",[],function(){return{composeHtmlStringFromParts:function(a){var b='\x3c!DOCTYPE html\x3e\n\x3chtml xmlns\x3d"http://www.w3.org/1999/xhtml"\x3e\n\x3chead\x3e\n\x3cmeta http-equiv\x3d"Content-Type" content\x3d"text/html; charset\x3dutf-8"\x3e\n\x3cmeta name\x3d"viewport" content\x3d"initial-scale\x3d1, maximum-scale\x3d1,user-scalable\x3dno"\x3e\n\x3ctitle\x3e'+a.reportTitle+"\x3c/title\x3e\n";a.links&&a.links.forEach(function(a){b+=
'\x3clink href\x3d"'+a+'" rel\x3d"stylesheet" /\x3e\n'});a.cssFiles&&a.cssFiles.forEach(function(a){b+="\x3cstyle\x3e\n";b+=a+"\n";b+="\x3c/style\x3e\n"});a.additionalStyleNodes&&a.additionalStyleNodes.length&&(b+="\x3cstyle\x3e\n",a.additionalStyleNodes.forEach(function(a){b+=a.innerHTML+"\n"}),b+="\x3c/style\x3e\n");a.scripts&&a.scripts.forEach(function(a){if("object"===typeof a){b+="\x3cscript";for(var c in a)b+=" "+c+'\x3d"'+a[c]+'"';b+="\x3e\x3c/script\x3e\n"}else b+="\x3cscript\x3e\n",b+=a+
"\n",b+="\x3c/script\x3e\n"});b+='\x3c/head\x3e\n\x3cbody class\x3d"claro" style\x3d"margin:0px;"\x3e\n';b+=a.contentString+"\n";return b+="\x3c/body\x3e\n\x3c/html\x3e"}}});