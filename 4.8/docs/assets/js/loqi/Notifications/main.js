/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/event","dojo/query","dojo/dom-construct","dojo/on","dojo/NodeList-manipulate"],function(e,a,t,s,u,l){return e([],{_container:null,constructor:function(e){this._container=e},clear:function(){s(".alert",s(this._container)[0]).remove()},create:function(e,t,o,n){n=!1!==n&&n;var c=u.create("div",{class:"alert is-active trailer-half "+t,innerHTML:e},s(this._container)[0]);if(n)var i=u.create("a",{class:"icon-close"},c),r=l.once(i,"click",a.hitch(this,function(e){u.destroy(c)}));o&&setTimeout(a.hitch(this,function(){r&&r.remove(),u.destroy(c)}),o)},success:function(e,t){t=t||0,this.create(e,"alert-green",t,!0)},error:function(e,t){t=t||0,this.create(e,"alert-red",t,!0)},info:function(e,t){t=t||0,this.create(e,"",t,!0)}})});