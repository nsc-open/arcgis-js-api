// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/arcade/request",["require","exports","../request"],function(k,d,e){Object.defineProperty(d,"__esModule",{value:!0});d.serviceRequest=function(a,b,d,f,c){void 0===c&&(c=null);if(null!==c)return c.getToken().then(function(h){a=a+="?token\x3d"+h;if("get"===f.toLowerCase())return e({url:a,disableIdentityLookup:!0,handleAs:"json",callbackParamName:"callback",content:b}).then(function(a){return{data:a}});if(b)for(var c in b)a=-1<a.indexOf("?")?a+"\x26":a+"?",a+=encodeURIComponent(c)+"\x3d"+
encodeURIComponent(b[c]);return e({url:a,disableIdentityLookup:!0,callbackParamName:"callback",content:d,handleAs:"json"},{usePost:!0}).then(function(a){return{data:a}})});if("get"===f.toLowerCase())return e({url:a,disableIdentityLookup:!0,callbackParamName:"callback",handleAs:"json",content:b}).then(function(a){return{data:a}});if(b)for(var g in b)a=-1<a.indexOf("?")?a+"\x26":a+"?",a+=encodeURIComponent(g)+"\x3d"+encodeURIComponent(b[g]);return e({url:a,disableIdentityLookup:!0,callbackParamName:"callback",
handleAs:"json",content:d},{usePost:!0}).then(function(a){return{data:a}})}});