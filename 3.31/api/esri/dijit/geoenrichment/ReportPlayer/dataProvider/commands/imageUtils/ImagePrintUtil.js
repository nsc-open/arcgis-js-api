// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/commands/imageUtils/ImagePrintUtil","dojo/_base/declare esri/dijit/geoenrichment/when dojo/dom-construct dojo/dom-style esri/dijit/geoenrichment/utils/DelayUtil esri/dijit/geoenrichment/utils/async/AsyncQueue".split(" "),function(f,l,a,b,m,g){var d={},n=f(null,{_printNode:null,setUpDocument:function(){return this._printNode=a.create("div",{"class":"esriGEBehindScreen"},document.body)},unsetDocument:function(){a.destroy(this._printNode)}});
d.printImages=function(e){var h=[],a=new n,k=a.setUpDocument();return g.executeFunctions(e.svgStrings.map(function(a){a=a.replace(/&nbsp;|&#160;/g," ");return function(){k.innerHTML=a;var c=k.children[0],d=e.scale||1;b.set(c,"width",b.get(c,"width")*d+"px");b.set(c,"height",b.get(c,"height")*d+"px");var f=b.get(c,"width"),g=b.get(c,"height");return m.delay().then(function(){return l(e.nodeToCanvasFunc(k,f,g),function(a){a=a.toDataURL("image/png");h.push(a);e.onRenderImage&&e.onRenderImage(h.length-
1)})})}}),0).then(function(){a.unsetDocument();return h})};return d});