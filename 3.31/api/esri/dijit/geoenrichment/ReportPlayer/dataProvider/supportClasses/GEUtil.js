// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/dataProvider/supportClasses/GEUtil","dojo/_base/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/dijit/geoenrichment/when esri/dijit/geoenrichment/promise/all dojox/uuid/generateRandomUuid esri/kernel esri/request esri/urlUtils esri/dijit/geoenrichment/utils/requests/FileContent esri/dijit/geoenrichment/utils/requests/UniversalClient esri/dijit/geoenrichment/utils/UrlUtil ./stdGeographies/StdGeographiesModel".split(" "),function(v,m,n,p,
w,x,t,g,y,z,q,A,B){function C(a){return l?l:(a=a&&t.id.findCredential(a)||t.id.credentials[0])&&a.token}function f(a,b){var c=y.urlToObject(a);b=m.mixin({f:"json",token:C(a),langCode:dojo.locale},c.query||{},b);for(var d in b)a=b[d],a instanceof z||a&&"object"===typeof a&&(b[d]=JSON.stringify("function"===typeof a.toJson?a.toJson():a));return{url:c.path,taskParams:b}}function e(a){h||(h=new u(k));return!a||h.initialized?h:h.initialize()}var u=v(null,{url:null,_geInfo:null,_capabilities:null,_supportedOperations:null,
constructor:function(a){this.url=a},_initDfd:null,initialized:!1,initialize:function(){var a=this;if(this._initDfd)return this._initDfd.promise;this._initDfd=new n;q.requestPublicFirst(f(this.url).url+"/Geoenrichment",{content:{f:"json"},handleAs:"json"},{retryOnAnyError:!0}).then(function(b){a.initWithJson(b)});return this._initDfd.promise},initWithJson:function(a){this._geInfo=a;this._capabilities={};this._supportedOperations={};a.capabilities&&a.capabilities.forEach(function(a){this._capabilities[a.toLowerCase()]=
!0},this);a.supportedOperations&&a.supportedOperations.forEach(function(a){this._supportedOperations[a.toLowerCase()]=!0},this);this._initDfd=this._initDfd||new n;this._initDfd.resolve();this.initialized=!0},hasCapability:function(a){return this._capabilities[a.toLowerCase()]},supportsOperation:function(a){return this._supportedOperations[a.toLowerCase()]},enrich:function(a){a=f(this.url,a);a.taskParams.AddDerivativeVariables="all";return g({url:a.url+"/Geoenrichment/Enrich",content:a.taskParams,
handleAs:"json"}).then(function(a){return a.results[0].value.FeatureSet||[]})},stdGeographyQuery:function(a){a=f(this.url,a);return g({url:a.url+"/StandardGeographyQuery/execute",content:a.taskParams,handleAs:"json"}).then(function(a){return a.results[0].value.features||[]})},getDataCollections:function(a,b,c){c=f(this.url,c);return g({url:c.url+"/Geoenrichment/DataCollections/"+a+(b?"/"+b:""),content:c.taskParams,handleAs:"json"}).then(function(a){return a.DataCollections})},_contriesCache:{},getCountries:function(){var a=
f(this.url);return g({url:a.url+"/Geoenrichment/Countries",content:a.taskParams,handleAs:"json"}).then(function(a){return a.countries})},getCountryInfo:function(a){var b=this;if(!this._contriesCache[a]){var c=f(this.url);this._contriesCache[a]=g({url:c.url+"/Geoenrichment/Countries/"+a,content:c.taskParams,handleAs:"json"}).then(function(c){var d=c.countries[0],e={};return w(d.hierarchies.map(function(c){return p(b._getStdGeographyModel(a,c.ID),function(a){e[c.ID]=a})})).then(function(){return{country:d,
geographiesModels:e}})})}return this._contriesCache[a]},_stdModelCache:null,_getStdGeographyModel:function(a,b){this._stdModelCache=this._stdModelCache||{};var c=a+b;if(!this._stdModelCache[c]){var d=f(this.url);this._stdModelCache[c]=g({url:d.url+"/Geoenrichment/StandardGeographyLevels/"+a+"/"+b,content:d.taskParams,handleAs:"json"}).then(function(c){return new B({countryID:a,hierarchyID:b,levels:c.geographyLevels[0].hierarchies[0].levels})})}return this._stdModelCache[c]},formatReport:function(a){a=
f(this.url,a);return q.request({url:a.url,urlSuffix:"Geoenrichment/FormatReport"},{handleAs:"bin",content:a.taskParams}).then(function(a){return a&&a.data&&"text/plain"===a.data.type?null:a})},getReports:function(a){var b=f(this.url);return g({url:b.url+"/Geoenrichment/reports/"+a,content:b.taskParams,handleAs:"json"}).then(function(a){return a.reports})},_tasksHash:{},createReport:function(a){var b=f(this.url,a),c=x();this._tasksHash[c]={taskName:"createReport",taskParams:m.clone(a)};return q.request({url:b.url,
urlSuffix:"Geoenrichment/createReport"},{handleAs:"xml"===a.format?"text":"bin",content:b.taskParams}).then(function(a){return{taskID:c,result:a}})},consumeCredits:function(a){if(a=this._tasksHash[a])return a=m.clone(a),delete a.taskParams.forStorage,this[a.taskName](a.taskParams)},_dataLayersCache:{},getLayerInfos:function(a){this._dataLayersCache[a]||(this._dataLayersCache[a]=this._getLayerInfos(a));return this._dataLayersCache[a]},_getLayerInfos:function(a){var b=f(this.url);return g({url:b.url+
"/Geoenrichment/DataLayers/"+a,content:b.taskParams,handleAs:"json"}).then(function(a){return a&&a.layers||[]}).otherwise(function(a){console.log(a);return[]})},getLayerInfo:function(a,b){var c=a+"_"+b;this._dataLayersCache[c]||(this._dataLayersCache[c]=this._getLayerInfo(a,b));return this._dataLayersCache[c]},_getLayerInfo:function(a,b){var c=f(this.url);return g({url:c.url+"/Geoenrichment/DataLayers/"+a+"/"+b,content:c.taskParams,handleAs:"json"}).then(function(a){return a&&a.layer}).otherwise(function(a){console.log(a);
return null})}}),d={},k,l,r=new n;d.setGeoenrichmentUrl=function(a,b){(k=a||k)&&A.registerCORS(k);l=b||l;!r.promise.isFulfilled()&&r.resolve()};d.canMakeRequests=function(){return!!k};d.getInitPromise=function(){return r.promise};d.GEClient=u;var h;d.getClient=function(){return e()};d.initialize=function(){return e(!0)};d.initWithJson=function(a,b){d.setGeoenrichmentUrl(a);e().initWithJson(b)};d.enrich=function(a){return e().enrich(a)};d.stdGeographyQuery=function(a){return e().stdGeographyQuery(a)};
d.getDataCollections=function(a,b,c){return e().getDataCollections(a,b,c)};d.formatReport=function(a){return e().formatReport(a)};d.createReport=function(a){return e().createReport(a)};d.consumeCredits=function(a){return e().consumeCredits(a)};d.getLayerInfos=function(a){return e().getLayerInfos(a)};d.hasCapability=function(a){return p(e(!0),function(){return h&&h.hasCapability(a)})};d.supportsOperation=function(a){return p(e(!0),function(){return h&&h.supportsOperation(a)})};d.getCountryInfo=function(a){return e().getCountryInfo(a)};
return d});