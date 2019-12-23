// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/tasks/ClosestFacilityTask","dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task ./ClosestFacilitySolveResult ./NAServiceDescription".split(" "),function(a,b,g,k,l,m,n,p,q){a=a([n,q],{declaredClass:"esri.tasks.ClosestFacilityTask",_eventMap:{"solve-complete":["result"]},constructor:function(e){this._url.orig=this._url.path;this._url.path+="/solveClosestFacility";this._handler=b.hitch(this,this._handler);this.registerConnectEvents()},__msigns:[{n:"solve",
c:3,a:[{i:0,p:["incidents.features","facilities.features","pointBarriers.features","polylineBarriers.features","polygonBarriers.features"]}],e:2}],_handler:function(e,a,f,c,d){try{var b=new p(e);this._successHandler([b],"onSolveComplete",f,d)}catch(h){this._errorHandler(h,c,d)}},solve:function(a,g,f,c){var d=c.assembly;a=this._encode(b.mixin({},this._url.query,{f:"json"},a.toJson(d&&d[0])));var e=this._handler,h=this._errorHandler;return l({url:this._url.path,content:a,callbackParamName:"callback",
load:function(a,b){e(a,b,g,f,c.dfd)},error:function(a){h(a,f,c.dfd)}})},onSolveComplete:function(){}});m._createWrappers(a);g("extend-esri")&&b.setObject("tasks.ClosestFacilityTask",a,k);return a});