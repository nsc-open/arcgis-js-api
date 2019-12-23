// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/xml/XmlImporter","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../etc/docUtil ../etc/matchTopNodeUtil ./XmlFlattener ./xmlUtil ../../../../kernel dojo/sniff".split(" "),function(k,m,g,n,r,p,t,l,q){k=k(null,{constructor:function(c){m.mixin(this,c)},importDocument:function(c,a,b){var d=c.rootElement;c={asTemplate:b,considerGML3andGML32:!0,gxeDocument:c,xmlDocument:a,gxeData:{nsUrisByPrefix:l.makeGxeUrisByPrefix(c.getNamespaces()),nsPrefixesByUri:l.makeGxePrefixesByUri(c.getNamespaces())}};
this._walk(c,d,null)},_findMatchingDomAttribute:function(c,a,b){var d=null;g.some(b.attributes,function(b){if(this._isMatching(c,a,b))return d=b,!0},this);return d},_findMatchingDomElements:function(c,a,b){var d=null,e=l.nodeTypes.ELEMENT_NODE;g.forEach(b.childNodes,function(b){b.nodeType===e&&this._isMatching(c,a,b)&&(null===d&&(d=[]),d.push(b))},this);return d},_findMatchingSubTarget:function(c,a,b){var d=null,e=l.nodeTypes.ELEMENT_NODE;g.some(b.childNodes,function(b){if(b.nodeType===e)if("TopicCatCd@value"===
a){if(this._isMatching(c,"TopicCatCd",b)&&g.some(b.attributes,function(a){if(this._isMatching(c,"value",a))return d=a,!0},this))return!0}else if(this._isMatching(c,a,b))return d=b,!0},this);return d},_isMatching:function(c,a,b){var d,e=!1,f=null,h=c.gxeData.nsUrisByPrefix,g;d=a;-1!==d.indexOf(":")&&(d=d.split(":"),g=d[0],d=d[1],g in h?f=h[g]:0===a.indexOf("xml:")?f="http://www.w3.org/XML/1998/namespace":console.log("Warning: namespace prefix was not configured: "+a));8>=n("ie")&&(f="");c=c.considerGML3andGML32;
a=b.namespaceURI===f;!a&&c&&("http://www.opengis.net/gml/3.2"===f?a="http://www.opengis.net/gml"===b.namespaceURI:"http://www.opengis.net/gml"===f&&(a="http://www.opengis.net/gml/3.2"===b.namespaceURI));a&&d===b.localName&&(e=!0);return e},_getDomNodeText:function(c){return l.getNodeText(c)},_getDomNodeTextValues:function(c,a,b){var d=[],e,f;g.forEach(a,function(a){e=null;b?(f=this._findMatchingSubTarget(c,b,a))&&(e=this._getDomNodeText(f)):e=this._getDomNodeText(a);null!=e&&d.push(e)},this);return d},
_printGxeReferences:function(c){var a,b="";for(a=0;a<c.depth;a++)b+="  ";console.log(b+c.widget.target);g.forEach(c.attributeRefs,function(a){console.log(b+"    @"+a.widget.target)});g.forEach(c.elementRefs,function(a){this._printGxeReferences(a)},this)},_repairChoices:function(c,a){var b=function(b,c){var d=[];g.forEach(a,function(a){var e=!0;g.forEach(a.childNodes,function(a){if(a.localName===c)if(e)e=!1;else{var f=document.createElement(b);f.appendChild(a.cloneNode(!0));d.push(f)}})});g.forEach(d,
function(b){a.push(b)})};a&&0<a.length&&"attrdomv"===c.target&&b("attrdomv","edom")},_updateAttribute:function(c,a,b){if(!a.fixed){var d=this._findMatchingDomAttribute(c,a.target,b);d&&(b=this._getDomNodeText(d),this._updateXNode(c,a,d,b))}},_updateElementText:function(c,a,b){if(!a.fixed){var d=this._getDomNodeText(b);this._updateXNode(c,a,b,d)}},_updateXNode:function(c,a,b,d){if(null!==d&&a.inputWidget){if(a.isDocumentTitle&&(c.gxeDocument.originalTitle=d,c.asTemplate))return;a.inputWidget.importValue({domNode:b,
asTemplate:c.asTemplate},d);!a.hide&&a.toggleContent&&a.toggleContent(!0)}},_walk:function(c,a,b){if(!a.fixed){var d=!0,e=null,f,h;if(b)a._isGxeElement?(e=this._findMatchingDomElements(c,a.target,b))||(d=!1):a._isGxeAttribute&&(d=!1,this._updateAttribute(c,a,b));else if(b=c.xmlDocument.documentElement,this._isMatching(c,a.target,b))e=[b];else throw Error("The XML root element does not match the editor definition.");e&&0<e.length&&(e=p.evaluateDomMatch(a,e,c.gxeData.nsPrefixesByUri))&&0<e.length&&
this._repairChoices(a,e);var l=a.inputWidget&&a.inputWidget._supportsMultipleValues,k=a.multiplicityHeader;e&&0<e.length&&(a.toggleContent&&a.toggleContent(!0),(f=a.getParent())&&f._isGxeElementChoice?f.ensureActiveTab(a):f&&((h=f.getParent())&&h._isGxeElementChoice?h.ensureActiveTab(f):h&&(f=h.getParent())&&f._isGxeElementChoice&&f.ensureActiveTab(h)),l?(d=!1,h=this._getDomNodeTextValues(c,e,a.inputWidget.subTarget),a.inputWidget.importValues({domNodes:e},h)):1===e.length?(b=e[0],this._updateElementText(c,
a,b)):k?(b=e[0],this._updateElementText(c,a,e[0]),g.forEach(e,function(b,d){0<d&&("unbounded"===a.maxOccurs||d!==a.maxOccurs)&&k.repeatElement(a,!1).then(m.hitch(this,function(a){a&&(this._updateElementText(c,a,b),g.forEach(a.getChildren(),function(a){this._walk(c,a,b)},this))}),function(a){console.error(a)})},this)):(b=e[0],this._updateElementText(c,a,b)));d&&g.forEach(a.getChildren(),function(a){this._walk(c,a,b)},this)}}});n("extend-esri")&&m.setObject("dijit.metadata.base.xml.XmlImporter",k,q);
return k});