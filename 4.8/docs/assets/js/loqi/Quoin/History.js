/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","dojo/query","dojo/dom-construct","dojo/on","dojo/_base/array","dojo/Evented","Quoin/Base"],function(t,n,e,r,o,s,a,i){var c=/^[#\/]|\s+$/g,l=/^\/+|\/+$/g,d=/msie [\w.]+/,h=/\/$/,g=t("Quoin.History",[a,i],{interval:50,started:!1,handlers:[],getHash:function(){var t=window.location.href.match(/#(.*)$/);return t?t[1]:""},getFragment:function(t,e){if(null==t)if(this._hasPushState||!this._wantsHashChange||e){t=window.location.pathname;var s=this.root.replace(h,"");t.indexOf(s)||(t=t.substr(s.length))}else t=this.getHash();return t.replace(c,"")},start:function(t){if(this.started)throw new Error("Backbone.history has already been started");this.started=!0,this.options=n.mixin({},{root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!!(this.options.pushState&&window.history&&window.history.pushState);var e=this.getFragment(),s=document.documentMode,a=d.exec(navigator.userAgent.toLowerCase())&&(!s||s<=7);this.root=("/"+this.root+"/").replace(l,"/"),a&&this._wantsHashChange&&(this.iframe=r("iframe",{src:"javascript:0",tabIndex:-1,style:"display:none;"},"body"),this.navigate(e)),this._hasPushState?this._handler=o(window,"popstate",n.hitch(this,this.checkUrl)):this._wantsHashChange&&"onhashchange"in window&&!a?this._handler=o(window,"hashchange",n.hitch(this,this.checkUrl)):this._wantsHashChange&&(this._checkUrlInterval=setInterval(n.hitch(this,this.checkUrl),this.interval)),this.fragment=e;var i=window.location,h=i.pathname.replace(/[^\/]$/,"$&/")===this.root;return this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!h?(this.fragment=this.getFragment(null,!0),window.location.replace(this.root+window.location.search+"#"+this.fragment),!0):(this._wantsPushState&&this._hasPushState&&h&&i.hash&&(this.fragment=this.getHash().replace(c,""),window.history.replaceState({},document.title,this.root+this.fragment+i.search)),this.options.silent?void 0:this.loadUrl())},stop:function(){this._handler.remove(),clearInterval(this._checkUrlInterval),g.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe&&(e=this.getFragment(this.getHash(this.iframe))),e===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(t){var e=this.fragment=this.getFragment(t);return s.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0})},navigate:function(t,e){if(this.started&&(e&&!0!==e||(e={trigger:e}),t=this.getFragment(t||""),this.fragment!==t)){this.fragment=t;var s=this.root+t;if(this._hasPushState)window.history[e.replace?"replaceState":"pushState"]({},document.title,s);else{if(!this._wantsHashChange)return window.location.assign(s);this._updateHash(window.location,t,e.replace),this.iframe&&t!==this.getFragment(this.getHash(this.iframe))&&(e.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,t,e.replace))}e.trigger&&this.loadUrl(t)}},_updateHash:function(t,e,s){if(s){var a=t.href.replace(/(javascript:|#).*$/,"");t.replace(a+"#"+e)}else t.hash="#"+e}});return new g});