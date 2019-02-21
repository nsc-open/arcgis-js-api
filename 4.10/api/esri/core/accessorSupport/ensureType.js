// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../Logger"],function(H,c,E){function q(a,b){return b.isInstanceOf?b.isInstanceOf(a):b instanceof a}function r(a){return null==a?a:new Date(a)}function t(a){return null==a?a:!!a}function u(a){return null==a?a:a.toString()}function v(a){return null==a?a:parseFloat(a)}function w(a){return null==a?a:Math.round(parseFloat(a))}function n(a){return a&&a.constructor&&void 0!==a.constructor._meta}function l(a,b){return null!=b&&a&&!q(a,b)}function x(a){return a&&("isCollection"in
a||a._meta&&a._meta.bases&&a._meta.bases.some(function(a){return"isCollection"in a}))}function y(a){return a&&a.Type?"function"===typeof a.Type?a.Type:a.Type.base:null}function F(a,b){if(!b||!b.constructor||!x(b.constructor))return k(a,b)?b:new a(b);var d=y(a.prototype.itemType),c=y(b.constructor.prototype.itemType);if(!d)return b;if(!c)return new a(b);if(d===c)return b;if((c=c._meta&&c._meta.bases)&&-1!==c.indexOf(d))return new a(b);k(a,b);return b}function k(a,b){return n(b)?(p.error("Accessor#set",
"Assigning an instance of '"+(b.declaredClass||"unknown")+"' which is not a subclass of '"+(a&&a.prototype&&a.prototype.declaredClass||"unknown")+"'"),!0):!1}function z(a,b){return null==b?b:x(a)?F(a,b):l(a,b)?k(a,b)?b:new a(b):b}function G(a){switch(a){case Number:return v;case A:return w;case Boolean:return t;case String:return u;case Date:return r;default:return z.bind(null,a)}}function e(a,b){var c=G(a);return 1===arguments.length?c:c(b)}function h(a,b){return 1===arguments.length?h.bind(null,
a):b?Array.isArray(b)?b.map(a):[a(b)]:b}function B(a,b,c){return 0!==b&&Array.isArray(c)?c.map(function(c){return B(a,b-1,c)}):a(c)}function f(a,b,c){if(2===arguments.length)return f.bind(null,a,b);if(!c)return c;c=B(a,b,c);for(var d=b,g=c;0<d&&Array.isArray(g);)d--,g=g[0];if(void 0!==g)for(g=0;g<d;g++)c=[c];return c}function C(a,b){if(2===arguments.length)return C(a).call(null,b);for(var c=new Set,e=0;e<a.length;e++)c.add(a[e]);var g=null;return function(b,d){if(null==b)return b;c.has(b)||(g||(g=
a.map(function(a){return"string"===typeof a?"'"+a+"'":""+a}).join(", ")),p.error("Accessor#set","'"+b+"' is not a valid value for this property, only the following values are valid: "+g),d&&(d.valid=!1));return b}}function D(a,b){if(2===arguments.length)return D(a).call(null,b);var c={},h=[],g=[],f;for(f in a.typeMap){var m=a.typeMap[f];c[f]=e(m);h.push(m&&m.prototype&&m.prototype.declaredClass||"unknown");g.push(f)}var k="string"===typeof a.key?function(b){return b[a.key]}:a.key;return function(b){if(a.base&&
!l(a.base,b))return b;var d=k(b)||a.defaultKeyValue,e=c[d];if(!e)return b="Invalid property value, value needs to be one of "+("'"+h.join("', '")+"'"),!1!==a.castable&&(b+=", or a plain object that can autocast (having .type \x3d "+("'"+g.join("', '")+"'")+")"),p.error("Accessor#set",b),null;if(!l(a.typeMap[d],b))return b;if("string"!==typeof a.key||n(b))return e(b);var d={},f;for(f in b)f!==a.key&&(d[f]=b[f]);return e(d)}}Object.defineProperty(c,"__esModule",{value:!0});var p=E.getLogger("esri.core.Accessor");
c.isInstanceOf=q;c.ensureDate=r;c.ensureBoolean=t;c.ensureString=u;c.ensureNumber=v;c.ensureInteger=w;c.isClassedType=n;c.requiresType=l;c.ensureClass=z;c.ensureType=e;c.ensureArrayTyped=h;c.ensureArray=function(a,b){return 1===arguments.length?h(e.bind(null,a)):h(e.bind(null,a),b)};c.ensureNArrayTyped=f;c.ensureNArray=function(a,b,c){return 2===arguments.length?f(e.bind(null,a),b):f(e.bind(null,a),b,c)};c.isOneOf=function(a){if(!Array.isArray(a))return!1;a=typeof a[0];return"string"===a||"number"===
a};c.ensureOneOf=C;c.ensureOneOfType=D;var A=function(){return function(){}}();c.Integer=A;c.default=e});