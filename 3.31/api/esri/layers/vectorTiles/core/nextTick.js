// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/nextTick",["require","exports","./global"],function(k,l,a){function h(){if(a.postMessage&&!a.importScripts){var c=a.onmessage,d=!0;a.onmessage=function(){d=!1};a.postMessage("","*");a.onmessage=c;return d}return!1}var f=a.MutationObserver||a.WebKitMutationObserver;return function(){var c;if(a.process&&a.process.nextTick)c=function(b){a.process.nextTick(b)};else if(a.Promise)c=function(b){a.Promise.resolve().then(b)};else if(f){var d=[],g=document.createElement("div");
(new f(function(){for(;0<d.length;)d.shift()()})).observe(g,{attributes:!0});c=function(a){d.push(a);g.setAttribute("queueStatus","1")}}else if(h()){var e=[];a.addEventListener("message",function(b){if(b.source===a&&"esri-nexttick-message"===b.data)for(b.stopPropagation();e.length;)e.shift()()},!0);c=function(b){e.push(b);a.postMessage("esri-nexttick-message","*")}}else c=a.setImmediate?function(b){return a.setImmediate(b)}:function(b){return a.setTimeout(b,0)};return c}()});