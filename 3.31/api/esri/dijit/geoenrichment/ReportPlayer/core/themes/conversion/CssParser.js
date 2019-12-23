// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/core/themes/conversion/CssParser",["../PageBorderStyles","../ThemeUpdateUtil","../../../_devConfig"],function(q,r,t){var k={"font-size":"fontSize","font-family":"fontFamily","font-style":"fontStyle","font-weight":"fontWeight","text-decoration":"textDecoration",color:"color","background-color":"backgroundColor",opacity:"opacity",url:"data","background-position":"position","background-repeat":"repeat","background-size":"scale"},u={colors:1,colors3series:1};
return{fromCssText:function(c){function v(a){var b=h;a.split("@").forEach(function(a){b=b[a]=b[a]||{}});return b}function w(a,b){if(b.borderStyle||b.border)if(a.border={},a.border.style=q.toSupportedValue(b.borderStyle),"string"===typeof b.border){var g=b.border.split(" ");3===g.length&&(a.border.thickness=Number(g[0].replace("px","")),a.border.lineStyle=g[1],a.border.color=g[2])}for(var e in b)if("border"!==e&&"borderStyle"!==e){var g=b[e],d;d=e;var f=g,c=a;"font-size"===d?(c[k[d]]=l(f.replace("px",
"")),d=!0):"background-repeat"===d?(c[k[d]]=l("repeat"===f),d=!0):"background-size"===d?(c[k[d]]=l("contain"===f||"cover"===f),c.size="auto"===f?null:f,d=!0):d=!1;d||(a[k[e]||e]=l(g))}}function l(a){if(void 0===a||null===a||"null"===a||"undefined"===a)return"";if("true"===a)return!0;if("false"===a)return!1;if(!0===a)return!0;if(!1===a)return!1;var b=Number(a);return isNaN(b)?a:b}function n(a){if(t.emulateErrors.themeParseError)throw Error("Error test: something crashed during the parsing of the theme!");
if("object"===typeof a)for(var b in a){var c=a[b];if(u[b]){var e=[],d=Object.keys(c);if(d.length){var f=d.every(function(a){return-1!==a.indexOf("_")});d.forEach(function(a,b){e[f?a.split("_")[1]:b]=c[a]})}a[b]=e}else n(c)}}var h={};c=c.replace(/\n/g,"");c=c.replace(/(\w|\d)_(\w|\d)/g,"$1@$2");c=c.replace("data:","dataM");c=c.replace(";base64","Mbase64");var p=function(){var a={};(c.match(/\..*?\}/g)||[]).forEach(function(b){var c=b.substring(1,b.indexOf("{")).trim(),e={};b.substring(b.indexOf("{")+
1,b.indexOf("}")).trim().split(";").forEach(function(a){if(a=a.trim()){a=a.split(":");var b=a[1].trim(),b=b.replace("dataM","data:"),b=b.replace("Mbase64",";base64");e[a[0].trim()]=b}});a[c]=e});return a}(),m;for(m in p)w(v(m),p[m]);delete h.themeMetadata;n(h);r.populateMissingStyles(h);return h}}});