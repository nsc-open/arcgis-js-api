/*!
* Copyright (C) 2015-2017 Andrea Giammarchi - @WebReflection
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/
var URLSearchParams=URLSearchParams||function(){"use strict";function s(t){var n,e,r,i,o,a,s=Object.create(null);if(this[h]=s,t)if("string"==typeof t)for("?"===t.charAt(0)&&(t=t.slice(1)),o=0,a=(i=t.split("&")).length;o<a;o++)-1<(n=(r=i[o]).indexOf("="))?f(s,l(r.slice(0,n)),l(r.slice(n+1))):r.length&&f(s,l(r),"");else if(c(t))for(o=0,a=t.length;o<a;o++)f(s,(r=t[o])[0],r[1]);else for(e in t)f(s,e,t[e])}var c=Array.isArray,u=s.prototype,n=/[!'\(\)~]|%20|%00/g,e=/\+/g,r={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},i=function(t){return r[t]},h="__URLSearchParams__:"+Math.random();function f(t,n,e){n in t?t[n].push(""+e):t[n]=c(e)?e:[""+e]}function l(t){return decodeURIComponent(t.replace(e," "))}function a(t){return encodeURIComponent(t).replace(n,i)}u.append=function(t,n){f(this[h],t,n)},u.delete=function(t){delete this[h][t]},u.get=function(t){var n=this[h];return t in n?n[t][0]:null},u.getAll=function(t){var n=this[h];return t in n?n[t].slice(0):[]},u.has=function(t){return t in this[h]},u.set=function(t,n){this[h][t]=[""+n]},u.forEach=function(e,r){var t=this[h];Object.getOwnPropertyNames(t).forEach(function(n){t[n].forEach(function(t){e.call(r,t,n,this)},this)},this)},u.toJSON=function(){return{}},u.toString=function(){var t,n,e,r,i=this[h],o=[];for(n in i)for(e=a(n),t=0,r=i[n];t<r.length;t++)o.push(e+"="+a(r[t]));return o.join("&")};var p=Object.defineProperty,v=Object.getOwnPropertyDescriptor,d=function(t){var n=t.append;t.append=u.append,s.call(t,t._usp.search.slice(1)),t.append=n},g=function(t,n){if(!(t instanceof n))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+n.name)},t=function(n){var e,r,t=n.prototype,i=v(t,"searchParams"),o=v(t,"href"),a=v(t,"search");!i&&a&&a.set&&(r=function(e){function r(t,n){u.append.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function i(t){u.delete.call(this,t),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}function o(t,n){u.set.call(this,t,n),t=this.toString(),e.set.call(this._usp,t?"?"+t:"")}return function(t,n){return t.append=r,t.delete=i,t.set=o,p(t,"_usp",{configurable:!0,writable:!0,value:n})}}(a),e=function(t,n){return p(t,"_searchParams",{configurable:!0,writable:!0,value:r(n,t)}),n},Object.defineProperties(t,{href:{get:function(){return o.get.call(this)},set:function(t){var n=this._searchParams;o.set.call(this,t),n&&d(n)}},search:{get:function(){return a.get.call(this)},set:function(t){var n=this._searchParams;a.set.call(this,t),n&&d(n)}},searchParams:{get:function(){return g(this,n),this._searchParams||e(this,new s(this.search.slice(1)))},set:function(t){g(this,n),e(this,t)}}}))};return t(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&t(URL),s}();!function(t){var r=function(){try{return!!Symbol.iterator}catch(t){return!1}}();"forEach"in t||(t.forEach=function(e,r){var t=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(n){!n.length||n in t||(t[n]=this.getAll(n)).forEach(function(t){e.call(r,t,n,this)},this)},this)}),"keys"in t||(t.keys=function(){var e=[];this.forEach(function(t,n){e.push(n)});var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}),"values"in t||(t.values=function(){var n=[];this.forEach(function(t){n.push(t)});var t={next:function(){var t=n.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}),"entries"in t||(t.entries=function(){var e=[];this.forEach(function(t,n){e.push([n,t])});var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}),!r||Symbol.iterator in t||(t[Symbol.iterator]=t.entries),"sort"in t||(t.sort=function(){for(var t,n,e,r=this.entries(),i=r.next(),o=i.done,a=[],s=Object.create(null);!o;)n=(e=i.value)[0],a.push(n),n in s||(s[n]=[]),s[n].push(e[1]),o=(i=r.next()).done;for(a.sort(),t=0;t<a.length;t++)this.delete(a[t]);for(t=0;t<a.length;t++)n=a[t],this.append(n,s[n].shift())})}(URLSearchParams.prototype);