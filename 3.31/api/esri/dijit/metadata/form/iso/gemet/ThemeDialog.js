// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/form/iso/gemet/ThemeDialog","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/has dijit/_WidgetBase dojo/i18n!../../../nls/i18nBase dojo/i18n!../../../nls/i18nIso dijit/Dialog ./ThemePane ../../../../../kernel".split(" "),function(a,c,d,e,f,m,g,h,k,l){a=a([f],{dialog:null,gxeDocument:null,initiallySelectedValues:null,title:g.gemet.theme.dialogTitle,postCreate:function(){this.inherited(arguments)},onSelect:function(b){},show:function(){var b=null,a=new k({dialogBroker:this,
gxeDocument:this.gxeDocument,initiallySelectedValues:this.initiallySelectedValues,onOkClick:c.hitch(this,function(a){if(a)this.onSelect(a);b&&b.hide()}),onCancelClick:c.hitch(this,function(){b&&b.hide()})}),b=this.dialog=new h({"class":"gxeDialog gxePopupDialog gxeGemetDialog",title:this.title,content:a,autofocus:!1});this.isLeftToRight()||d.add(b.domNode,"gxeRtl");this.own(b.on("hide",c.hitch(this,function(){setTimeout(c.hitch(this,function(){a.destroyRecursive(!1);b.destroyRecursive(!1);this.destroyRecursive(!1)}),
300)})));b.show()}});e("extend-esri")&&c.setObject("dijit.metadata.form.iso.gemet.ThemeDialog",a,l);return a});