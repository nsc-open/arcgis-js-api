// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/symbols/utils","dojo/_base/lang dojo/_base/window dojo/has dojox/gfx ../kernel ../Color".split(" "),function(q,l,m,f,r,t){function k(a){a.removeAttribute("marker-start");a.removeAttribute("marker-end");a.removeAttribute("opacity")}function h(a,b){for(var d in b)a.setAttribute(d,b[d])}function n(a,b,d){b="url(#"+b.getAttribute("id")+")";a.rawNode.setAttribute("marker-"+d,b)}var u=-1!==f.renderer.toLowerCase().indexOf("svg"),v=9===m("ie"),p={marker:{markerWidth:"6",markerHeight:"6",markerUnits:"strokeWidth",
orient:"auto"},spear:{marker:{end:{viewBox:"0 0 25.4 23.43",refX:"20",refY:"12.76"},start:{viewBox:"-25.4 0 25.4 23.43",refX:"-20",refY:"12.76"}},path:{common:{d:"M1.63 23.43 L5.37 16.6 L5.37 8.93 L1.63 2.09 L25.4 12.76 L1.63 23.43 Z","stroke-width":"0","fill-opacity":"1"},start:{transform:"matrix(-1, 0, 0, 1, 0, 0)"}}}};f={applyLineMarker:function(a,b,d,g){if(u&&!v){var c=a&&a.rawNode,e=b.marker;d=d||b.color;c&&"none"!==b.style&&d&&e&&"arrow"===e.style&&e.placement?c.getTotalLength&&0===c.getTotalLength()?
k(c):(b=-1!==e.placement.indexOf("begin"),e=-1!==e.placement.indexOf("end"),b||e?(c.removeAttribute("stroke-opacity"),c.setAttribute("opacity",d.a),b?(b=g(a,d,"spear","start"),n(a,b,"start")):c.removeAttribute("marker-start"),e?(d=g(a,d,"spear","end"),n(a,d,"end")):c.removeAttribute("marker-end")):k(c)):c&&k(c)}},createSVGMarker:function(a,b,d,g){d=p[d];var c=l.doc.createElementNS("http://www.w3.org/2000/svg","marker");c.setAttribute("id",b);h(c,p.marker);h(c,d.marker[g]);b=l.doc.createElementNS("http://www.w3.org/2000/svg",
"path");b.setAttribute("fill",a.toCss());h(b,d.path.common);h(b,d.path[g]);c.appendChild(b);return c},create2DColorRamp:function(a){var b=a.surface.createGroup(),d=a.colors,g=a.numClasses;a=(a.size||75)/g;for(var c=0;c<g;c++)for(var e=c*a,f=0;f<g;f++){var h=d[c][f];b.createRect({x:f*a,y:e,width:a,height:a}).setFill(h).setStroke(null)}return b},setSymbolFillColor:function(a,b){if(a)switch(b=b?new t(b):null,a.type){case "simplemarkersymbol":"cross"===a.style||"x"===a.style?a.outline&&a.outline.setColor(b):
a.setColor(b);break;case "simplelinesymbol":case "cartographiclinesymbol":case "simplefillsymbol":case "shieldlabelsymbol":case "textsymbol":a.setColor(b)}}};m("extend-esri")&&q.setObject("renderer.utils",f,r);return f});