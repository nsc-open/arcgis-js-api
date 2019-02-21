// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["../../Component","dojo/i18n!../../Dropdowns/AccordionDropdown/nls/resources"],function(k,l){return function(e){function b(a){if(c[a])return c[a].exports;var d=c[a]={i:a,l:!1,exports:{}};return e[a].call(d.exports,d,d.exports,b),d.l=!0,d.exports}var c={};return b.m=e,b.c=c,b.d=function(a,d,c){b.o(a,d)||Object.defineProperty(a,d,{enumerable:!0,get:c})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,
"__esModule",{value:!0})},b.t=function(a,d){if((1&d&&(a=b(a)),8&d)||4&d&&"object"==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(b.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var g in a)b.d(c,g,function(b){return a[b]}.bind(null,g));return c},b.n=function(a){var d=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(d,"a",d),d},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=
270)}({0:function(e,b,c){function a(a,b){function h(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(h.prototype=b.prototype,new h)}c.d(b,"b",function(){return a});c.d(b,"a",function(){return f});var d=function(a,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])})(a,b)},f=function(){return(f=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=
arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)}},171:function(e,b){e.exports=l},270:function(e,b,c){c.r(b);var a=c(0),d=c(171);e=c(5);var f=c(87);c=function(b){function c(a){var c=b.call(this,a)||this;return c.handleDropdownKeyDown=Object(f.a)(c.handleDropdownClick.bind(c)),c.state={active:!!a.startActive&&a.startActive},c.handleDropdownClick=c.handleDropdownClick.bind(c),c.handleClear=c.handleClear.bind(c),c}return a.b(c,b),c.prototype.render=
function(a){var b={"drp-accordion__content":!0,"drp-accordion__content--no-padding":!1===this.props.padding},c={"drp-accordion__icon":!0,"drp-accordion__icon--active":this.state.active},e=null;return this.props.clearable&&(e=a("button",{class:"drp-accordion__clear-btn",onclick:this.handleClear},d.clear)),a("div",{key:this.props.key,classes:{"drp-accordion__section":!0},role:"tablist"},a("h4",{id:this.props.key,class:"drp-accordion__title",value:"itemType",onclick:this.handleDropdownClick,onkeydown:this.handleDropdownKeyDown,
role:"tab",tabindex:"0","aria-expanded":""+this.state.active,"aria-controls":this.props.key+"-tree"},a("span",{classes:c},a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 32 32"},a("path",{d:"M28 9v5L16 26 4 14V9l12 12L28 9z"}))),a("span",null,this.props.title),e),this.state.active?a("div",{classes:b},this.props.children):null)},c.prototype.handleDropdownClick=function(){this.setState({active:!this.state.active})},c.prototype.handleClear=function(a){a.stopPropagation();
this.props.onClear()},c}(e.Component);b.default=c},5:function(e,b){e.exports=k},87:function(e,b,c){c.d(b,"a",function(){return a});var a=function(a){return function(b){13===b.keyCode&&a(b)}}}})});