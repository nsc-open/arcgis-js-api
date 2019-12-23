// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/support/attributeUtils","dojo/_base/lang dojo/has dojox/encoding/digests/_base dojox/encoding/digests/MD5 ../../kernel ../../support/expressionUtils".split(" "),function(h,k,l,m,n,g){var f={viewScaleRE:/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,getAttributeId:function(a){return"string"===typeof a?m(a,l.outputTypes.Hex):null},getAttributeIdSource:function(a){if(!a)return null;var c=a.field,d=a.valueExpression,b=null;if(d)b=d;else if(h.isFunction(c))b=c.toString();else if(c){var e=
(d=a.normalizationField)?"field":a.normalizationType;a=parseFloat(a.normalizationTotal);if(e)if(e=e.toLowerCase(),b=c.toLowerCase()+",norm:"+e,d)b+=","+d.toLowerCase();else if("percent-of-total"===e){c=a;if("number"!==typeof c||isNaN(c)||Infinity===c||-Infinity===c||0===a)a=null;b+=","+a}}return b},createAttributeCache:function(a,c){if(!a)return null;var d=a.valueExpression,b=g.createSyntaxTree(d),e=f.getAttributeIdSource(a);return{attributeInfo:a,isNumeric:!c,idSource:e,id:f.getAttributeId(e),hasExpr:!!d,
compiledFunc:g.createFunction(b),syntaxTree:b,isScaleDriven:!!a.expression||f.viewScaleRE.test(d),dependsOnView:b?g.dependsOnView(b):!1,dependsOnGeometry:b?g.hasGeometryOperations(b):!1,isJSFunc:h.isFunction(a.field)}}};k("extend-esri")&&h.setObject("layers.support.attributeUtils",f,n);return f});