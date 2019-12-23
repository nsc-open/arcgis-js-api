// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/request","require dojo/_base/array dojo/_base/config dojo/_base/Deferred dojo/_base/lang dojo/_base/url dojo/_base/xhr dojo/request/xhr ./core/request/script dojo/request/iframe dojo/dom-construct dojo/io-query ./kernel ./config ./sniff ./lang ./urlUtils ./deferredUtils".split(" "),function(U,G,H,t,v,V,z,ha,ia,ja,ca,W,g,X,r,I,u,C){function A(a){a=new V(a);return(a.host+(a.port?":"+a.port:"")).toLowerCase()}function ka(a){return this._xhr?this._xhr.getResponseHeader(a):null}function la(a,
e){var b=W.objectToQuery(a.content);b&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+b);if(2E3<a.url.length){if("data:"!==a.url.toLowerCase().slice(0,5))return a=new t,a.reject(v.mixin(Error(),{message:"When using responseType 'image', URL length cannot exceed 2000 characters."})),a;if(3E6<a.url.length)return a=new t,a.reject(v.mixin(Error(),{message:"When using responseType 'image', data URL length cannot exceed 3000000 characters."})),a}var d=new Image;e.allowImageDataAccess&&(d.crossOrigin=a.withCredentials?
"use-credentials":"anonymous");var g=!1,n=new t(function(a){g=!0;d.onload=d.onerror=d.onabort=null;d.src=""});e=function(a){d.onload=d.onerror=d.onabort=null;g||n.reject(Error("Unable to load the resource"))};d.onload=function(){d.onload=d.onerror=d.onabort=null;g||n.resolve(this)};d.onerror=e;d.onabort=e;d.alt="";d.src=a.url;return n}function J(a,e,b,d){var Y=!1,n=!1,y=!1,D,f;I.isDefined(e)&&(v.isObject(e)?(Y=!!e.useProxy,n=!!e.usePost,y=!!e.returnProgress,D=e.crossOrigin):Y=!!e);a=v.mixin({},a);
a._ssl&&(a.url=a.url.replace(/^http:/i,"https:"));10>r("ie")&&!ma.test(a.url)&&(a.url=encodeURI(a.url));var p=a.content,h=a.url,k=b&&a.form,B=q;D=I.isDefined(D)?D:B.useCors;a.load=function(c){var b;c&&(c.error?(b=v.mixin(Error(),c.error),b.log=!!H.isDebug):"error"===c.status&&(b=v.mixin(Error(),c),b.log=!!H.isDebug),b&&(a.failOk=!b.log,I.isDefined(b.httpCode)||(b.httpCode=b.code)));return b||c};a.error=function(c,b){b&&b.xhr&&b.xhr.abort();c instanceof Error||(c=v.mixin(Error(),c));c.log=!!H.isDebug;
a.failOk=!c.log;B.errorHandler(c,b);return c};a._token&&(a.content=a.content||{},a.content.token=a._token);var m=0,x;p&&h&&(x=W.objectToQuery(p),m=x.length+h.length+1,r("esri-url-encodes-apostrophe")&&(m=x.replace(/'/g,"%27").length+h.length+1));a.timeout=I.isDefined(a.timeout)?a.timeout:B.timeout;a.handleAs=a.handleAs||"json";try{var c,l,M=D&&u.canUseXhr(a.url)&&!/https?:\/\/[^\/]+\/[^\/]+\/admin\/?(\/.*)?$/i.test(a.url),da=u.hasSameOrigin(a.url,window.location.href)||M,K=n||b||m>B.postLength?!0:
!1,ea=da||-1===a.handleAs.indexOf("json")||!a.callbackParamName||b?!1:!0,E=u.getProxyRule(a.url)||B.alwaysUseProxy||Y||!("image"===a.handleAs&&!e.allowImageDataAccess||ea&&!K||da)?!0:!1;b&&!r("esri-file-upload")&&!E&&M&&(E=!0);if(E)if(c=u.getProxyUrl(h,D),l=c.path,c._xo&&(M=!0),!K&&l.length+1+m>B.postLength&&(K=!0),a.url=l+"?"+h,K)a.content=v.mixin(c.query||{},p);else{var fa=W.objectToQuery(v.mixin(c.query||{},p));fa&&(a.url+="?"+fa);a.content=null}if(!ea||K||E){var L=a.headers;!M||L&&L.hasOwnProperty("X-Requested-With")||
(L=a.headers=L||{},L["X-Requested-With"]=null);if(b){var A=a.callbackParamName||"callback.html",J=a.callbackElementName||"textarea",N,S,O,T,Q=k.elements?k.elements.length:0,w;if(p=a.content)for(N in p.token&&-1<h.toLowerCase().indexOf("/sharing/servers/")&&(h+=(-1===h.indexOf("?")?"?":"\x26")+"token\x3d"+p.token,a.url=E?l+"?"+h:h,delete p.token),p)if(O=p[N],I.isDefined(O)){S=null;for(T=0;T<Q;T++)if(w=k.elements[T],w.name===N){S=w;break}S?S.value=O:d?k.append(N,O):k.appendChild(ca.create("input",{type:"hidden",
name:N,value:O}))}if(r("esri-file-upload")){G.forEach(k.elements,function(a){a.name===A&&k.removeChild(a)});var P=d?k:new FormData(k);if(11<=r("safari")&&"entries"in P&&"delete"in P){d=[];for(var C=P.entries(),Z=C.next();!Z.done;){var aa=Z.value;aa[1]instanceof File&&""===aa[1].name&&d.push(aa[0]);Z=C.next()}d.forEach(function(a){P.delete(a)})}a.contentType=!1;a.postData=P;delete a.form}else{k.enctype="multipart/form-data";9>r("ie")&&(k.encoding="multipart/form-data");k.method="post";G.some(k.elements,
function(a){return a.name===A})||k.appendChild(ca.create("input",{type:"hidden",name:A,value:J}));if(-1!==h.toLowerCase().indexOf("addattachment")||-1!==h.toLowerCase().indexOf("updateattachment"))h+=(-1===h.indexOf("?")?"?":"\x26")+A+"\x3d"+J,a.url=E?l+"?"+h:h;delete a.content}}if(M&&!a.hasOwnProperty("withCredentials")&&"with-credentials"===q.useCors){var h=E?l:h,R=u.canUseXhr(h,!0),ba=-1<R?q.corsEnabledServers[R]:null;if(ba&&ba.hasOwnProperty("withCredentials"))ba.withCredentials&&(a.withCredentials=
!0);else if(g.id){var ga=g.id.findServerInfo(h);ga&&ga.webTierAuth&&(a.withCredentials=!0)}}a=F?F(a):a;if("image"===a.handleAs)return la(a,e);if(K){if(b&&!r("esri-file-upload")){f=new t(function(){U.cancel()});var U=ja.post(a.url,a).then(function(a){f.resolve(a)}).otherwise(function(a){f.reject(a)});f.addCallback(function(c){return a.load(c)});f.addErrback(function(c){return a.error(c)});return f}!E&&r("safari")&&(a.url+=(-1===a.url.indexOf("?")?"?":"\x26")+"_ts\x3d"+(new Date).getTime()+oa++);if(y){a.uploadProgress=
!0;a.data=a.postData;a.query=a.content;f=new t(function(){V.cancel()});var V=ha.post(a.url,a).then(function(a){f.resolve(a)},function(a){f.reject(a)},function(a){f.progress({transferType:a.transferType,loaded:a.loaded,total:a.total})});f.addCallback(function(c){return a.load(c)});f.addErrback(function(c){return a.error(c)});return f}return z.post(a)}return z.get(a)}a=F?F(a):a;a.jsonp=a.callbackParamName;a.query=a.content;f=new t(function(){X.cancel()});var X=ia.get(a.url,a).then(function(a){f.resolve(a)}).otherwise(function(a){f.reject(a)});
f.addCallback(function(c){return a.load(c)});f.addErrback(function(c){return a.error(c)});return f}catch(na){return f=new t,f.errback(a.error(na)),f}}function Q(a){var e=q.corsStatus,b=u.canUseXhr(a,!0);-1<b&&q.corsEnabledServers.splice(b,1);var d=new t;d.reject({log:!!H.isDebug});e[A(a)]=d.promise;return b}function w(a){var e=q.corsStatus;try{var b=A(a);if(q.corsDetection&&q.useCors&&r("esri-cors")&&a&&-1!==a.toLowerCase().indexOf("/rest/services")&&!u.hasSameOrigin(a,window.location.href)&&!u.canUseXhr(a)){if(e[b]&&
!e[b].isCanceled())return e[b];var d=new t(C._dfdCanceller);e[b]=d.promise;var g=z.get({url:a.substring(0,a.toLowerCase().indexOf("/rest/")+6)+"info",content:{f:"json"},failOk:!0,handleAs:"json",headers:{"X-Requested-With":null},timeout:1E3*q.corsDetectionTimeout});d._pendingDfd=g;g.then(function(e){e?(u.canUseXhr(a)||q.corsEnabledServers.push(b),d.resolve()):d.reject()},function(a){d.reject(a)});return d.promise}}catch(n){console.log("esri._detectCors: an unknown error occurred while detecting CORS support")}return pa}
function R(a){F=a}function x(a,e,b,d){function m(a){a._pendingDfd=J(b,d,k,h);if(!a._pendingDfd){a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;var c=Error("Deferred object is missing");c.log=!!H.isDebug;a.errback(c);a._pendingDfd=null;return a}a._pendingDfd.addCallback(function(b){if(!b)return b;var c=a._pendingDfd&&a._pendingDfd.ioArgs&&a._pendingDfd.ioArgs.xhr;if(!c)return b;if(c=c.getResponseHeader("Content-Type"))if(c=c.toLowerCase(),-1===c.indexOf("text/plain")&&-1===c.indexOf("application/json"))return b;
if(b instanceof ArrayBuffer&&750>=b.byteLength)c=new Blob([b]);else if(b instanceof Blob&&750>=b.size)c=b;else return b;var d=new t,l=new FileReader;l.readAsText(c);l.onloadend=function(){var a;if(!l.error)try{var c=JSON.parse(l.result);c.error&&(a=c.error)}catch(L){}a?(a=v.mixin(Error(),a),a.log=!!H.isDebug,null==a.httpCode&&(a.httpCode=a.code),d.reject(a)):d.resolve(b)};return d.promise}).addCallback(function(b){a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;d.returnFullResponse&&(b={data:b,_xhr:a.ioArgs&&
a.ioArgs.xhr,getHeader:ka});a.callback(b);a._pendingDfd=null}).addErrback(function(c){var l,e,f;c&&(l=c.code,e=c.subcode,f=(f=c.messageCode)&&f.toUpperCase());if(c&&403==l&&(4==e||c.message&&-1<c.message.toLowerCase().indexOf("ssl")&&-1===c.message.toLowerCase().indexOf("permission"))){if(!b._ssl){b._ssl=b._sslFromServer=!0;x(a,!0,b,d);return}}else if(c&&415==c.status){if(Q(b.url),!b._err415){b._err415=1;x(a,!0,b,d);return}}else if(g.id&&-1!==G.indexOf(g.id._errorCodes,l)&&!g.id._isPublic(b.url)&&
!w&&(403!=l||-1===G.indexOf(qa,f)&&(!I.isDefined(e)||2==e&&b._token))){a._pendingDfd=g.id.getCredential(b.url,{token:b._token,error:c});a._pendingDfd.addCallback(function(c){b._token=c.token;b._credential=c;b._ssl=b._sslFromServer||c.ssl;x(a,!0,b,d)}).addErrback(function(b){a.errback(b);a._pendingDfd=null});return}a.ioArgs=a._pendingDfd&&a._pendingDfd.ioArgs;a.isFulfilled()||a.errback(c);a._pendingDfd=null}).then(null,null,function(b){a.progress(b)})}var n=b.form,w=d.disableIdentityLookup,D=d._preLookup,
f=!1;if(r("esri-workers")&&!1!==q.useWorkers)if(!0===d.useWorkers||!0===q.useWorkers)f=!0;else if(d.workerOptions){var p=d.workerOptions;if(p.callback||p.worker&&p.worker.worker instanceof Worker)f=!0}var h=n&&r("esri-file-upload")&&n instanceof FormData,k=n&&(n.elements?G.some(n.elements,function(a){return"file"===a.type}):h),B=-1!==b.url.toLowerCase().indexOf("token\x3d")||b.content&&b.content.token||k&&G.some(n.elements,function(a){return"token"===a.name})?1:0;if(!e){a.addCallback(function(a){if((/\/sharing\/rest\/accounts\/self/i.test(b.url)||
/\/sharing\/rest\/portals\/self/i.test(b.url))&&!B&&!b._token&&a.user&&a.user.username){q.webTierAuthServers.push(A(b.url));a=q.corsEnabledServers;var c=u.canUseXhr(b.url,!0),d={host:A(b.url),withCredentials:!0};if(-1===c)a.push(d);else{var e=a[c];e instanceof RegExp?(d.host=e,a.splice(c,1,d)):"object"===typeof e?e.withCredentials=!0:a.splice(c,1,d)}}if(a=b._credential)if(c=(c=g.id.findServerInfo(a.server))&&c.owningSystemUrl)c=c.replace(/\/?$/,"/sharing"),(a=g.id.findCredential(c,a.userId))&&-1===
g.id._getIdenticalSvcIdx(c,a)&&a.resources.splice(0,0,c)});a.addBoth(function(a){delete b._credential;!a||r("ie")&&a.nodeType||(a._ssl=b._ssl)});var C=b.load,F=b.error;C&&a.addCallback(function(b){var c=a._pendingDfd,c=c&&c.ioArgs;return C.call(c&&c.args,b,c)});F&&a.addErrback(function(b){var c=a._pendingDfd,c=c&&c.ioArgs;return F.call(c&&c.args,b,c)})}!g.id||B||b._token||g.id._isPublic(b.url)||w&&!D||!(e=g.id.findCredential(b.url))||(b._token=e.token,b._ssl=e.ssl);f?d.workerOptions&&d.workerOptions.worker?
(y||(y=z),z=d.workerOptions.worker,m(a)):U(["./workers/RequestClient"],function(b){y||(y=z);if(d.workerOptions){var c=d.workerOptions;z=b.getClient(c.callback,c.cbFunction)}else z=b.getClient();m(a)}):(y&&(z=y,y=null),m(a));return a}function m(a,e){a.url=u.fixUrl(a.url);e=e||{};var b=new t(C._dfdCanceller),d=w(a.url);b._pendingDfd=d;d.always(function(d){d&&"cancel"===d.dojoType?b.reject(d):x(b,!1,a,e)});return b}var y=null,F,q=X.defaults.io,qa=["COM_0056","COM_0057","SB_0008"],oa=0,ma=/%[0-9A-F]{2}/i,
pa=function(){var a=new t;a.resolve();return a.promise}();m._makeRequest=J;m._processRequest=x;m._disableCors=Q;m._detectCors=w;m.setRequestPreCallback=R;r("extend-esri")&&(g.request=m,g._makeRequest=J,g._processRequest=x,g._disableCors=Q,g._detectCors=w,g.setRequestPreCallback=R);return m});