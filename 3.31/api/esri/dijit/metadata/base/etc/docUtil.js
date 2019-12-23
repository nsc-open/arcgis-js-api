// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/etc/docUtil","dojo/_base/lang dojo/_base/array dojo/query dijit/registry dojo/has ../../../../kernel".split(" "),function(e,f,g,h,k,l){var d={cleanHtml:function(a){if("undefined"===typeof a||null===a)return null;a=a.replace(/<\s*script[^>]*>((.|\s)*?)<\\?\/\s*script\s*>/ig,"");a=a.replace(/<\s*script\b([^<>]|\s)*>?/ig,"");a=a.replace(/<[^>]*=(\s|)*[("|')]javascript:[^$1][(\s|.)]*[$1][^>]*>/ig,"");a=a.replace(/<\s*iframe[^>]*>((.|\s)*?)<\\?\/\s*iframe\s*>/ig,"");a=
a.replace(/\x3c!--(.|\s){1,}?--\x3e/g,"");f.forEach("script iframe embed object applet html head title meta link style body base basefont canvas svg input button select dialog img audio video figure".split(" "),function(b){var c=new RegExp("\x3c\\\\?\\/\\s*"+b+"\\s*\x3e","igm");a=a.replace(new RegExp("\x3c\\s*"+b+"[^\x3e]*\x3e","igm"),"");a=a.replace(c,"")});a=a.replace("_self","_blank");a=a.replace("_parent","_blank");return a=a.replace("_top","_blank")},ensureVisibility:function(a){if(a){var b=
a;for(a=a.getParent();a;)a._isGxeTabs?a.ensureActiveTab(b):a._isGxeMultiplicityHeader&&a.useTabs&&a.ensureActiveTab(b),b=a,a=a.getParent()}},findElementChoice:function(a,b){var c=a;for(a=a.getParent();a;){if(a._isGxeElementChoice)return b&&(a.ensureActiveTab(c),(b=a.getParent())&&b.toggleContent&&b.toggleContent(!0)),a;c=a;a=a.getParent()}return null},findDescriptor:function(a){for(a=a.getParent();a;){if(a._isGxeDescriptor)return a;a=a.getParent()}return null},findDescriptorAndPath:function(a){var b=
{descriptor:null,path:""};a._isGxeNode&&(b.path=""+a.target);for(a=a.getParent();a;){a._isGxeElement&&(b.path=a.target+"/"+b.path);if(a._isGxeDescriptor){b.descriptor=a;break}a=a.getParent()}return b},findGxeContext:function(a){if(a.gxeContext)return a.gxeContext;for(a=a.getParent();a;){if(a.gxeContext)return a.gxeContext;a=a.getParent()}return null},findGxeDocument:function(a){if(a.gxeDocument)return a.gxeDocument;for(a=this.getParent();a;){if(a.gxeDocument)return a.gxeDocument;a=a.getParent()}return null},
findInputWidget:function(a,b){return(a=g("[data-gxe-path\x3d'"+a+"']",b))&&1===a.length&&(a=h.byNode(a[0]))?a.inputWidget:null},setI18nNodeText:function(a,b){"undefined"===typeof b&&(b=null);a.innerHTML="";null!==b&&a.appendChild(document.createTextNode(b))},setNodeText:function(a,b){"undefined"===typeof b&&(b=null);a.innerHTML="";null!==b&&a.appendChild(document.createTextNode(b))}};k("extend-esri")&&e.setObject("dijit.metadata.base.etc.docUtil",d,l);return d});