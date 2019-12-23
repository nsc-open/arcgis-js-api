// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/tasks/QueryTask","require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/_base/json dojo/DeferredList ../kernel ../sniff ../request ../deferredUtils ../geometry/Extent ../geometry/normalizeUtils ./Task ./FeatureSet".split(" "),function(w,t,g,x,r,q,y,z,u,p,A,B,C,D,v){var E=u("esri-pbf"),F=t(null,{url:null,query:null,requestOptions:null,pagination:null,pageSize:null,_fetchDfd:null,_startPage:null,_result:null,constructor:function(a){this._handleSuccess=g.hitch(this,
this._handleSuccess);this._handleError=g.hitch(this,this._handleError);g.mixin(this,a);null==this.pagination&&(this.pagination=!1);null==this.pageSize&&(this.pageSize=1E3)},execute:function(){var a=new r(this._canceler);this._fetchDfd=a;this._result=null;this._sendRequest();return a.promise},_canceler:function(a){var c=a._pendingRequest,d;a.isFulfilled()||!c||c.isFulfilled()||(c.cancel(),d=c.results&&c.results[1]);a._pendingRequest=null;return d},_sendRequest:function(a){var c=this.query;this.pagination&&
(this._startPage=c.resultOffset=null==a?0:a,c.resultRecordCount=this.pageSize);a=this.requestOptions;this._fetchDfd._pendingRequest=p({url:this.url,content:c,handleAs:"pbf"===c.f?"arraybuffer":"json",callbackParamName:"callback",timeout:a&&a.timeout},a);this._fetchDfd._pendingRequest.then(this._handleSuccess).otherwise(this._handleError)},_handleSuccess:function(a){this.pagination?(a.exceededTransferLimit&&this._sendRequest(this._startPage+this.pageSize),this._result?this._result.features=this._result.features.concat(a.features):
this._result=a,this._fetchDfd.progress(a),a.exceededTransferLimit||this._fetchDfd.resolve(this._result)):(this._fetchDfd.progress(a),this._fetchDfd.resolve(a))},_handleError:function(a){this._fetchDfd.reject(a)}}),m=t(D,{declaredClass:"esri.tasks.QueryTask",_eventMap:{complete:["featureSet"],"execute-for-count-complete":["count"],"execute-for-ids-complete":["objectIds"],"execute-relationship-query-complete":["featureSets"]},constructor:function(a,c){this._handler=g.hitch(this,this._handler);this._relationshipQueryHandler=
g.hitch(this,this._relationshipQueryHandler);this._executeForIdsHandler=g.hitch(this,this._executeForIdsHandler);this._countHandler=g.hitch(this,this._countHandler);this._extentHandler=g.hitch(this,this._extentHandler);this.source=c&&c.source;this.gdbVersion=c&&c.gdbVersion;this.registerConnectEvents()},__msigns:[{n:"execute",c:4,a:[{i:0,p:["geometry"]}],e:2},{n:"rawExecute",c:2,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForIds",c:3,a:[{i:0,p:["geometry"]}],e:2},{n:"executeForCount",c:3,a:[{i:0,p:["geometry"]}],
e:2},{n:"executeForExtent",c:3,a:[{i:0,p:["geometry"]}],e:2}],onComplete:function(){},onRawExecuteComplete:function(){},onExecuteRelationshipQueryComplete:function(){},onExecuteForIdsComplete:function(){},onExecuteForCountComplete:function(){},onExecuteForExtentComplete:function(){},execute:function(a,c,d,e,b){var f=b.assembly;a=this._encode(g.mixin({},this._url.query,{f:e&&e.format||"json"},a.toJson(f&&f[0])));var k=this._handler,h=this._errorHandler;this.source&&(e={source:this.source.toJson()},
a.layer=q.toJson(e));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);var n="pbf"===a.f;if(n){var l;E||(l="QueryTask.execute: 'pbf' format is not supported in your browser.");if(l)return a=new r,a.addErrback(function(a){h(a,d,b.dfd)}),a.reject(Error(l)),a}l=this.requestOptions;l=p({url:this._url.path+"/query",content:a,callbackParamName:"callback",handleAs:n?"arraybuffer":"json",timeout:l&&l.timeout},l);a=[l];n&&a.push(m.loadPBFReader());(new y(a)).then(function(a){b.dfd.isFulfilled()||(a=a[0],a[0]?
k(a[1],n,c,d,b.dfd):h(a[1],d,b.dfd))});return l},rawExecute:function(a,c,d){c=c||{};a=this._encode(g.mixin({},this._url.query,{f:c.format||"json"},a.toJson(d.assembly&&d.assembly[0])));this.source&&(a.layer=q.toJson({source:this.source.toJson()}));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);return(new F({url:this._url.path+"/query",query:a,requestOptions:this.requestOptions,pagination:c.pagination,pageSize:c.pageSize})).execute().then(null,null,function(a){d.dfd.progress(a)}).then(g.hitch(this,
function(a){this._successHandler([a],"onRawExecuteComplete",null,d.dfd)})).otherwise(g.hitch(this,function(a){this._errorHandler(a,null,d.dfd)}))},executeRelationshipQuery:function(a,c,d){a=this._encode(g.mixin({},this._url.query,{f:"json"},a.toJson()));var e=this._relationshipQueryHandler,b=this._errorHandler;this.gdbVersion&&(a.gdbVersion=this.gdbVersion);var f=new r(A._dfdCanceller),k=this.requestOptions,h=this._url.path;this.source&&void 0!==this.source.mapLayerId&&null!==this.source.mapLayerId&&
h.endsWith("/dynamicLayer")&&(h=h.slice(0,-13),h=h+"/"+this.source.mapLayerId);f._pendingDfd=p({url:h+"/queryRelatedRecords",content:a,callbackParamName:"callback",timeout:k&&k.timeout,load:function(a,b){e(a,b,c,d,f)},error:function(a){b(a,d,f)}},k);return f},executeForIds:function(a,c,d,e){var b=e.assembly;a=this._encode(g.mixin({},this._url.query,{f:"json",returnIdsOnly:!0},a.toJson(b&&b[0])));var f=this._executeForIdsHandler,k=this._errorHandler;this.source&&(b={source:this.source.toJson()},a.layer=
q.toJson(b));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);b=this.requestOptions;return p({url:this._url.path+"/query",content:a,callbackParamName:"callback",timeout:b&&b.timeout,load:function(a,b){f(a,b,c,d,e.dfd)},error:function(a){k(a,d,e.dfd)}},b)},executeForCount:function(a,c,d,e){var b=e.assembly;a=this._encode(g.mixin({},this._url.query,{f:"json",returnIdsOnly:!0,returnCountOnly:!0},a.toJson(b&&b[0])));var f=this._countHandler,k=this._errorHandler;this.source&&(b={source:this.source.toJson()},
a.layer=q.toJson(b));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);b=this.requestOptions;return p({url:this._url.path+"/query",content:a,callbackParamName:"callback",timeout:b&&b.timeout,load:function(a,b){f(a,b,c,d,e.dfd)},error:function(a){k(a,d,e.dfd)}},b)},executeForExtent:function(a,c,d,e){var b=e.assembly;a=this._encode(g.mixin({},this._url.query,{f:"json",returnExtentOnly:!0,returnCountOnly:!0},a.toJson(b&&b[0])));var f=this._extentHandler,k=this._errorHandler;this.source&&(b={source:this.source.toJson()},
a.layer=q.toJson(b));this.gdbVersion&&(a.gdbVersion=this.gdbVersion);b=this.requestOptions;return p({url:this._url.path+"/query",content:a,callbackParamName:"callback",timeout:b&&b.timeout,load:function(a,b){f(a,b,c,d,e.dfd)},error:function(a){k(a,d,e.dfd)}},b)},_handler:function(a,c,d,e,b){try{a&&c&&(a=m.pbfDeps.optimizedFeatures.convertToFeatureSet(m.pbfDeps.pbfQueryUtils.parsePBFFeatureQuery(a)));var f=new v(a);this._successHandler([f],"onComplete",d,b)}catch(k){this._errorHandler(k,e,b)}},_relationshipQueryHandler:function(a,
c,d,e,b){try{var f=a.geometryType,g=a.spatialReference,h={};x.forEach(a.relatedRecordGroups,function(a){var b={};b.geometryType=f;b.spatialReference=g;b.features=a.relatedRecords;b=new v(b);if(null!=a.objectId)h[a.objectId]=b;else for(var c in a)a.hasOwnProperty(c)&&"relatedRecords"!==c&&(h[a[c]]=b)});this._successHandler([h],"onExecuteRelationshipQueryComplete",d,b)}catch(n){this._errorHandler(n,e,b)}},_executeForIdsHandler:function(a,c,d,e,b){try{this._successHandler([a.objectIds],"onExecuteForIdsComplete",
d,b)}catch(f){this._errorHandler(f,e,b)}},_countHandler:function(a,c,d,e,b){try{var f,g=a.features,h=a.objectIds;if(h)f=h.length;else{if(g)throw Error("Unable to perform query. Please check your parameters.");f=a.count}this._successHandler([f],"onExecuteForCountComplete",d,b)}catch(n){this._errorHandler(n,e,b)}},_extentHandler:function(a,c,d,e,b){try{a.extent&&(a.extent=new B(a.extent)),this._successHandler([a],"onExecuteForExtentComplete",d,b)}catch(f){this._errorHandler(f,e,b)}}});m.loadPBFReader=
function(){var a=new r;m.pbfDeps?a.resolve():w(["./support/pbfDeps"],function(c){m.pbfDeps=c;a.isFulfilled()||a.resolve()});return a.promise};C._createWrappers(m);u("extend-esri")&&g.setObject("tasks.QueryTask",m,z);return m});