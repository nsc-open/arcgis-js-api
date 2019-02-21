/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
require(["dojo/query","dojo/dom-construct","dojo/date/locale","dojo/dom-attr","esri/config","esri/request"],function(a,l,i,s,e,c){function u(e){var t=document.createElement("div");t.className="flexible-block-group-item flexible-block-group-item-white trailer-1";var r,n,o,a=e.resources.html.ref;return t.innerHTML=['<div class="flexible-block-group-item-header">',"<small>"+function(e){var t="";if(e){var r=e.slice(0,-2)+":"+e.slice(-2);t=i.format(new Date(r),{selector:"date",formatLength:"long"})}return t}(e.published)+"</small>","</div>",'<div class="flexible-block-group-item-content">','<h4 class="leader-half">','<a href="'+a+'">',e.subject+"</a>","</h4>","<p>"+(r=e,n=r.content.text.replace(/(<([^>]+)>)/gi,""),o=100,n=(n=(n=n.replace(/[\n]/g," ")).substr(0,o)).substr(0,Math.min(n.length,n.lastIndexOf(" "))))+"</p>","</div>",'<div class="flexible-block-group-item-footer">','<a href="'+a+'">Continue reading <span class="icon-ui-right icon-ui-small"></span></a>',"</div>"].join("\n"),t}e.request.corsEnabledServers.push("webappsproxy.esri.com"),a("[data-geonet-feed-url]").forEach(function(e){var t,n=a(e)[0],r=s.get(n,"data-geonet-feed-url"),o=parseInt(s.get(n,"data-post-limit"),10)||10;(t=r,c(t,{responseType:"json"})).then(function(e){for(var t=function(e){for(var t=[],r=0;r<e.length;r++){var n=e[r];n.subject.length&&n.resources.html.ref.length&&n.content.text.length&&t.push(n)}return t}(e.data.list),r=0;r<Math.min(t.length,o);r++)l.place(u(t[r]),n)})})});