//>>built
define("dojo dijit dojox dijit/_Widget dijit/_TemplatedMixin dijit/_editor/_Plugin dojo/_base/connect dojo/_base/declare dojox/layout/ResizeHandle".split(" "),function(b,f,g,h,k,l){b.experimental("dojox.editor.plugins.StatusBar");var e=b.declare("dojox.editor.plugins._StatusBar",[h,k],{templateString:'\x3cdiv class\x3d"dojoxEditorStatusBar"\x3e\x3ctable\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd class\x3d"dojoxEditorStatusBarText" tabindex\x3d"-1" aria-role\x3d"presentation" aria-live\x3d"aggressive"\x3e\x3cspan dojoAttachPoint\x3d"barContent"\x3e\x26nbsp;\x3c/span\x3e\x3c/td\x3e\x3ctd\x3e\x3cspan dojoAttachPoint\x3d"handle"\x3e\x3c/span\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/tbody\x3e\x3ctable\x3e\x3c/div\x3e',
_getValueAttr:function(){return this.barContent.innerHTML},_setValueAttr:function(a){a?(a=b.trim(a))||(a="\x26nbsp;"):a="\x26nbsp;";this.barContent.innerHTML=a}}),d=b.declare("dojox.editor.plugins.StatusBar",l,{statusBar:null,resizer:!0,setEditor:function(a){this.editor=a;this.statusBar=new e;this.resizer?(this.resizeHandle=new g.layout.ResizeHandle({targetId:this.editor,activeResize:!0},this.statusBar.handle),this.resizeHandle.startup()):b.style(this.statusBar.handle.parentNode,"display","none");
var c=null;a.footer.lastChild&&(c="after");b.place(this.statusBar.domNode,a.footer.lastChild||a.footer,c);this.statusBar.startup();this.editor.statusBar=this;this._msgListener=b.subscribe(this.editor.id+"_statusBar",b.hitch(this,this._setValueAttr))},_getValueAttr:function(){return this.statusBar.get("value")},_setValueAttr:function(a){this.statusBar.set("value",a)},set:function(a,c){if(a){var d="_set"+a.charAt(0).toUpperCase()+a.substring(1,a.length)+"Attr";if(b.isFunction(this[d]))this[d](c);else this[a]=
c}},get:function(a){if(a){var c="_get"+a.charAt(0).toUpperCase()+a.substring(1,a.length)+"Attr";return b.isFunction(this[c])?this[c]():this[a]}return null},destroy:function(){this.statusBar&&(this.statusBar.destroy(),delete this.statusBar);this.resizeHandle&&(this.resizeHandle.destroy(),delete this.resizeHandle);this._msgListener&&(b.unsubscribe(this._msgListener),delete this._msgListener);delete this.editor.statusBar}});d._StatusBar=e;b.subscribe(f._scopeName+".Editor.getPlugin",null,function(a){a.plugin||
"statusbar"!==a.args.name.toLowerCase()||(a.plugin=new d({resizer:"resizer"in a.args?a.args.resizer:!0}))});return d});