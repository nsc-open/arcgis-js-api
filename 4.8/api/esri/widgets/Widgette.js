// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("../core/Accessor ../core/declare ../core/lang ../core/accessorSupport/metadata dijit/_WidgetBase dijit/Destroyable dijit/registry dojo/_base/window dojo/aspect dojo/dom dojo/dom-attr dojo/dom-class dojo/on".split(" "),function(q,k,l,r,c,t,f,u,v,m,n,g,w){function x(a){return function(b){this._set(a,b)}}function y(a,b){return function(d){z.call(this,a,b,d);this._set(a,d)}}function z(a,b,d){(Array.isArray(b)?b:[b]).forEach(function(b){var e=this[b.node||b||"domNode"];switch(b.type||"attribute"){case "attribute":"function"===
typeof d&&(d=d.bind(this));b=b.attribute?b.attribute:/^on[A-Z][a-zA-Z]*$/.test(a)?a.toLowerCase():a;e.tagName?n.set(e,b,d):e.set(b,d);break;case "innerText":e.innerHTML="";e.appendChild(this.ownerDocument.createTextNode(d));break;case "innerHTML":e.innerHTML=d;break;case "class":b=this._get(a),g.replace(e,d,b)}},this)}function p(a,b,d){v.around(a,b,function(b){return function(){d(a)||b.apply(a)}})}k.before(function(a,b){if(b.declaredClass===h||k.hasMixin(a,h)){var d=r.getPropertiesMetadata(b);Object.keys(d).forEach(function(a){var b=
d[a];var c=b.set;a="function"===typeof c?c:null===c?x(b.name):"string"===typeof c||"object"===typeof c?y(a,c):void 0;b.set=a})}});var h="esri.widgets._WidgetBase";return q.createSubclass([t],{declaredClass:h,postscript:function(a){var b=this.__accessor__;a=b.ctorArgs||a;var d;(d=this.getDefaults?a?this.getDefaults(a):this.getDefaults({}):null)&&Object.getOwnPropertyNames(d).forEach(function(a){b.set(a,d[a])},this);this.postMixInProperties();this.ownerDocument=this.ownerDocument||(this.srcNodeRef?
this.srcNodeRef.ownerDocument:document);this.ownerDocumentBody=u.body(this.ownerDocument);f.add(this);this.buildRendering();b.initialize();a&&(this.set(a),b.ctorArgs=null);b.initialize();this.initialize();this.postCreate();if(this.domNode){var c;(a=this.srcNodeRef)&&a.parentNode&&this.domNode!==a&&(a.parentNode.replaceChild(this.domNode,a),c=!0);n.set(this.domNode,{widgetId:this.id,id:this.id});c&&(this.srcNodeRef=null)}this._created=!0;this.notifyChange("container");p(this,"startup",function(a){return a._started});
p(this,"destroy",function(a){return a._beingDestroyed||a._destroyed});this.autoStart&&this.startup()},getDefaults:function(a){var b={};b.id=a.id?a.id:a.srcNodeRef&&a.srcNodeRef.id||f.getUniqueId(this.declaredClass.replace(/\./g,"_"));delete a.id;a.srcNodeRef&&(b.srcNodeRef=a.srcNodeRef,delete a.srcNodeRef);return l.mixin(this.inherited(arguments),b)},normalizeCtorArgs:function(a,b){a=a||{};if(b=a.container||a.srcNodeRef||b)a.srcNodeRef=m.byId(b);return a},destroy:function(){this._customWidgetBaseDestroy()},
postMixInProperties:c.prototype.postMixInProperties,buildRendering:c.prototype.buildRendering,postCreate:c.prototype.postCreate,startup:c.prototype.startup,_beingDestroyed:!1,_destroyed:!1,_created:!1,properties:{autoStart:!0,"class":{value:"",set:{node:"domNode",type:"class"}},domNode:{value:null},focused:!1,id:{value:""},srcNodeRef:{value:null},style:{value:null,set:c.prototype._setStyleAttr},widgetId:{}},destroyDescendants:c.prototype.destroyDescendants,destroyRecursive:c.prototype.destroyRecursive,
destroyRendering:c.prototype.destroyRendering,emit:c.prototype.emit,on:function(a,b){return this.own(w(this.domNode,a,b))[0]},toString:c.prototype.toString,getChildren:c.prototype.getChildren,getParent:c.prototype.getParent,isLeftToRight:c.prototype.isLeftToRight,placeAt:c.prototype.placeAt,onFocus:function(){},onBlur:function(){},_onFocus:function(){this.onFocus()},_onBlur:function(){this.onBlur()},dojoAttachEvent:"",dojoAttachPoint:"",_customWidgetBaseDestroy:function(a){function b(b){b.destroyRecursive?
b.destroyRecursive(a):b.destroy&&b.destroy(a)}this._beingDestroyed=!0;this.domNode&&f.findWidgets(this.domNode,this.containerNode).forEach(b);this.destroyRendering(a);f.remove(this.id);this._destroyed=!0}}).createSubclass({declaredClass:"esri.widgets.Widgette",getDefaults:function(){return l.mixin(this.inherited(arguments),{viewModel:{}})},buildRendering:function(){this.inherited(arguments);g.add(this.domNode,"esri-widget")},destroy:function(){this.viewModel.destroy&&this.viewModel.destroy();this.viewModel=
null},properties:{container:{get:function(){return this._created?this.domNode:this._get("container")},set:function(a){var b=this._get("container");this._created||b||!a||this._set("container",m.byId(a))}},viewModel:{value:null},visible:{value:!0,set:function(a){this._set("visible",a);g.toggle(this.domNode,"esri-hidden",!a)}}}})});