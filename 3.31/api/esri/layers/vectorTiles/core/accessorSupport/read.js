// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/core/accessorSupport/read","require exports ../tsSupport/assignHelper ./get ./utils ./extensions/serializableProperty".split(" "),function(E,e,C,u,D,r){function q(v,b,k){void 0===k&&(k=y);for(var f=D.getProperties(v),p=f.metadatas,e={},d=0,g=Object.getOwnPropertyNames(b);d<g.length;d++){var m=e,h=p,c=g[d],n=b,q=k,a=r.originSpecificReadPropertyDefinition(h[c],q);a&&(!a.read||!1!==a.read.enabled&&!a.read.source)&&(m[c]=!0);for(var w=0,z=Object.getOwnPropertyNames(h);w<
z.length;w++){var A=z[w],a=r.originSpecificReadPropertyDefinition(h[A],q),l;a:{l=c;var B=n;if(a&&a.read&&!1!==a.read.enabled&&a.read.source)if(a=a.read.source,"string"===typeof a){if(a===l||-1<a.indexOf(".")&&0===a.indexOf(l)&&u.exists(a,B)){l=!0;break a}}else for(var x=0;x<a.length;x++){var t=a[x];if(t===l||-1<t.indexOf(".")&&0===t.indexOf(l)&&u.exists(t,B)){l=!0;break a}}l=!1}l&&(m[A]=!0)}}f.setDefaultOrigin(k.origin);g=0;for(m=Object.getOwnPropertyNames(e);g<m.length;g++)d=m[g],c=(h=r.originSpecificReadPropertyDefinition(p[d],
k).read)&&h.source,n=void 0,n=c&&"string"===typeof c?u.valueOf(b,c):b[d],h&&h.reader&&(n=h.reader.call(v,n,b,k)),void 0!==n&&f.set(d,n);b=0;for(p=Object.getOwnPropertyNames(p);b<p.length;b++)d=p[b],e[d]||(g=v,m=f,h=k,c=(c=r.originSpecificReadPropertyDefinition(m.metadatas[d],h))&&c.read&&c.read.default,void 0!==c&&(g="function"===typeof c?c.call(g,d,h):c,void 0!==g&&m.set(d,g)));f.setDefaultOrigin("user")}Object.defineProperty(e,"__esModule",{value:!0});var y={origin:"service"};e.read=q;e.readLoadable=
function(e,b,k,f){void 0===f&&(f=y);b=C({},f,{messages:[]});k(b);b.messages.forEach(function(b){"warning"!==b.type||e.loaded?f&&f.messages.push(b):e.loadWarnings.push(b)})};e.default=q});