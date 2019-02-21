// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper dojo/Deferred dojo/i18n!./nls/Directions ../../Color ../../Graphic ../../symbols ../../core/Accessor ../../core/Collection ../../core/Error ../../core/Evented ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/support/graphicsUtils ../../geometry/support/scaleUtils ../../layers/GraphicsLayer ../../tasks/RouteTask ../../tasks/support/FeatureSet ../../tasks/support/RouteParameters ./support/directionsUtils ../support/GoTo".split(" "),
function(O,P,z,A,d,t,B,C,D,g,E,u,p,F,G,H,m,q,e,I,J,r,v,K,w,l,L){var M=H.getLogger("esri.widgets.Directions.DirectionsViewModel"),x={first:new g.SimpleMarkerSymbol({color:[105,220,255,1],size:19,outline:{color:[51,51,51,1],width:3}}),middle:new g.SimpleMarkerSymbol({color:[51,51,51,1],size:12,outline:{color:[105,220,255,1],width:3}}),last:new g.PictureMarkerSymbol({width:23,height:23,url:"data:image/svg+xml,%3Csvg width\x3d'30' height\x3d'30' viewBox\x3d'0 0 30 30' xmlns\x3d'http://www.w3.org/2000/svg'%3E%3Cg fill-rule\x3d'nonzero' fill\x3d'none'%3E%3Cpath d\x3d'M15.15.3C6.9.3.3 6.9.3 15.15S6.9 29.7 15.15 29.7 29.7 23.1 29.7 15.15C29.7 6.9 23.25.3 15.15.3z' fill\x3d'%23333'/%3E%3Cpath d\x3d'M15 4.8C9.3 4.8 4.8 9.45 4.8 15c0 5.55 4.65 10.2 10.2 10.2 5.55 0 10.2-4.5 10.2-10.2 0-5.55-4.5-10.2-10.2-10.2z' fill\x3d'%2369DCFF'/%3E%3Cpath fill\x3d'%23333' d\x3d'M10.5 10.5h9v9h-9z'/%3E%3C/g%3E%3C/svg%3E"}),
unlocated:new g.PictureMarkerSymbol({height:18,width:18,url:"data:image/svg+xml,%3Csvg width\x3d'20' height\x3d'20' viewBox\x3d'0 0 20 20' xmlns\x3d'http://www.w3.org/2000/svg'%3E%3Cg fill\x3d'none' fill-rule\x3d'evenodd'%3E%3Cpath d\x3d'M10.1.2C4.6.2.2 4.6.2 10.1s4.4 9.7 9.9 9.7 9.7-4.4 9.7-9.7c0-5.5-4.3-9.9-9.7-9.9z' fill\x3d'%23333' fill-rule\x3d'nonzero'/%3E%3Cpath d\x3d'M10 2.7c-4.08 0-7.3 3.328-7.3 7.3s3.328 7.3 7.3 7.3 7.3-3.22 7.3-7.3c0-3.972-3.22-7.3-7.3-7.3z' fill\x3d'%2369DCFF' fill-rule\x3d'nonzero'/%3E%3Cpath d\x3d'M11.414 10l5.304-5.303-1.415-1.415L10 8.586 4.697 3.282 3.282 4.697 8.586 10l-5.304 5.303 1.415 1.415L10 11.414l5.303 5.304 1.415-1.415L11.414 10z' fill\x3d'%23333'/%3E%3C/g%3E%3C/svg%3E"}),
waypoint:new g.SimpleMarkerSymbol({color:[255,255,255,1],size:10,outline:{color:[20,89,127,1],width:2.5}})};return function(y){function a(b){b=y.call(this,b)||this;b._handles=new G;b._routeLayer=new r({listMode:"hide"});b._highlightLayer=new r({listMode:"hide"});b._stopId=9999;b._stopLayer=new r({listMode:"hide"});b._serviceDescriptionLoadStatus=0;b.departureTime="now";b.lastRoute=null;b.routeSymbol=new g.SimpleLineSymbol({color:[105,220,255,1],width:7,cap:"round",join:"round"});b.routeParameters=
new w({doNotLocateOnRestrictedElements:!0,ignoreInvalidLocations:!0,directionsOutputType:"complete",findBestSequence:!1,preserveFirstStop:!0,preserveLastStop:!0,restrictUTurns:"at-dead-ends-and-intersections",directionsLengthUnits:"kilometers",returnBarriers:!1,returnDirections:!0,returnPolygonBarriers:!1,returnPolylineBarriers:!1,returnRoutes:!1,returnStops:!0,returnZ:!0,startTime:null,startTimeIsUTC:!0,stops:null,useHierarchy:!0,useTimeWindows:!1});b.routeServiceUrl="https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";
b.serviceDescription=null;b.error=null;b.stops=new u;b.view=null;return b}A(a,y);a.prototype.initialize=function(){var b=this;this._handles.add([q.on(this,"stops","change",function(a){b.clearResults();b._addStopsToLayer()}),q.watch(this,"view.map",function(a,c){var h=[b._routeLayer,b._stopLayer,b._highlightLayer];c&&c.removeMany(h);a&&a.addMany(h)}),q.watch(this,"lastRoute",function(){return b._addRouteToLayer()})])};a.prototype.destroy=function(){this.stops.destroy()};Object.defineProperty(a.prototype,
"impedanceAttribute",{get:function(){var b=this.get("routeParameters.travelMode.impedanceAttributeName")||this.get("routeParameters.impedanceAttribute")||this.get("serviceDescription.impedance");return this.getCostAttribute(b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"maxStops",{set:function(b){this._set("maxStops",2>=b?2:50<b?50:b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"_routeTask",{get:function(){return new v(this.routeServiceUrl)},enumerable:!0,
configurable:!0});Object.defineProperty(a.prototype,"selectedTravelMode",{get:function(){var b=this.serviceDescription;if(!b)return null;for(var a=b.defaultTravelMode,b=b.supportedTravelModes,b=void 0===b?[]:b,c=null,f=0;f<b.length;f++)b[f].id===a&&(c=b[f]);return c||b[0]||null},set:function(b){void 0===b?this._clearOverride("selectedTravelMode"):this._override("selectedTravelMode",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"state",{get:function(){var b=this._serviceDescriptionLoadStatus;
return 4===b?"unauthenticated":0===b?"disabled":1===b?"initializing":this._activeRoute?"routing":3===b||this.error?"error":"ready"},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"stopSymbols",{set:function(b){b=z({},x,b);this._set("stopSymbols",b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"timeAttribute",{get:function(){var b=this.get("routeParameters.travelMode.timeAttributeName")||this.get("routeParameters.directionsTimeAttribute")||this.get("serviceDescription.directionsTimeAttribute");
return this.getCostAttribute(b)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"travelModes",{get:function(){return this.get("serviceDescription.supportedTravelModes")||[]},enumerable:!0,configurable:!0});a.prototype.load=function(){var b=this;return this.serviceDescription?m.resolve():m.resolve().then(function(){b._serviceDescriptionLoadStatus=1;b.notifyChange("state");return b._loadServiceDescription()}).then(function(){b._serviceDescriptionLoadStatus=2;b.notifyChange("state")}).catch(function(a){var c=
"identity-manager:user-aborted"===a.name;b._serviceDescriptionLoadStatus=c?4:3;b.notifyChange("state");if(!c)throw new p("directions-view-model:failed-to-fetch-service-description","Cannot load route service metadata.",{error:a});})};a.prototype.highlightSegment=function(b){var a=this._highlightLayer;if(this.view){this.clearHighlights();var c=b.symbol.clone();c.color=new C([0,0,0,.8]);c.width=Math.ceil(c.width/2);b=new D({geometry:b.geometry,symbol:c});a.graphics.add(b)}};a.prototype.clearHighlights=
function(){this._highlightLayer.graphics.removeAll()};a.prototype.centerAt=function(b){this.view&&this.callGoTo({target:b})};a.prototype.clearResults=function(){this._set("lastRoute",null)};a.prototype.getDirections=function(){var b=this;if("initializing"===this.state||"disabled"===this.state)return m.reject(new p("directions:disabled-state","Cannot get directions when disabled"));this._set("error",null);this._activeRoute&&(this._activeRoute.cancel(),this._activeRoute=null);var a=this.departureTime;
this.routeParameters.set({startTime:"now"===a?new Date:a,startTimeIsUTC:"now"===a});this.selectedTravelMode&&this.routeParameters.set({travelMode:this.selectedTravelMode});if(1>=this.stops.length)return a=new p("directionsviewmodel:not-enough-stops",B.messages.errors.notEnoughStops),this._set("error",a),m.reject(a);this._activeRoute=this._enqueue(function(){var a=b.stops.clone().toArray(),f={},e=function(b){var c=b&&b.routeResults&&b.routeResults[0]&&b.routeResults[0].stops||[];(b&&b.routeResults&&
b.routeResults[0]&&b.routeResults[0].directions&&b.routeResults[0].directions.features||[]).map(function(b){for(var c=0;c<a.length;c++)if(-1<b.attributes.text.indexOf(a[c].attributes.Name)){var k=a[c].attributes.Name;b.attributes.text=b.attributes.text.replace(k,f[k]);b._associatedStop=a[c];break}});a.map(function(b){return b.attributes.Name=f[b.attributes.Name]});c.map(function(b){b.attributes.Name=f[b.attributes.Name]})},d=function(a){if(a&&a.routeResults&&a.routeResults[0]){a=a.routeResults[0];
var c=a.stops||[],f=b.stops.clone().toArray(),e=a.directions&&a.directions.routeName||a.routeName||"";c.map(function(b,a){var c=b.attributes,d=f[a].attributes;e=e.replace(c.Name,d.Name);Object.keys(c).forEach(function(b){0===b.indexOf("Cumul_")&&(d[b]=c[b])});d.ArriveCurbApproach=c.ArriveCurbApproach;d.ArriveTime=c.ArriveTime;d.ArriveTimeUTC=c.ArriveTimeUTC;d.DepartCurbApproach=c.DepartCurbApproach;d.DepartTime=c.DepartTime;d.DepartTimeUTC=c.DepartTimeUTC;d.Sequence=c.Sequence;d.Status=c.Status});
a.directions&&(a.directions.routeName=e);null!==a.route&&(a.route.attributes.Name=e);a.routeName=e}};(function(){a.map(function(a){a=a.attributes;var c=(a.Name||"[not yet geocoded]").substr(0,100)+"_#"+ ++b._stopId;f[c]=a.Name;a.Name=c})})();b.routeParameters.set({stops:new K({features:a})});return b._routeTask.solve(b.routeParameters).then(function(a){for(var c=a&&a.routeResults&&a.routeResults[0]&&a.routeResults[0].stops||[],h=b.stops.toArray(),n=c.length===h.length,k=0;n&&k<c.length;)n=n&&f[c[k].attributes.Name]===
h[k++].attributes.Name;if(n)return d(a),e(a),b._set("lastRoute",a),a;M.warn("Response stops don't match current stops of the ViewModel, invalidating the results.");b._set("lastRoute",null);return null}).catch(function(b){e(null);throw b;})}).then(function(a){b._activeRoute=null;b.notifyChange("state");b.zoomToRoute();return a}).catch(function(a){b._activeRoute=null;b.notifyChange("state");if("cancel"!==a.dojoType)throw b._set("error",a),a;});this.notifyChange("state");return this._activeRoute};a.prototype.getCostAttribute=
function(b){for(var a=this.serviceDescription&&this.serviceDescription.networkDataset.networkAttributes||[],c="",d=0;d<a.length;d++)if(a[d].name===b&&"esriNAUTCost"===a[d].usageType){c=a[d];break}return c};a.prototype.reset=function(){this.stops.removeAll();this._set("lastRoute",null)};a.prototype.zoomToRoute=function(){var b=this.directionLines,a=this.view;b&&a&&(b=I.graphicsExtent(b).expand(2),a=J.getScale(a,b),this.callGoTo({target:{target:b,scale:a}}))};a.prototype._loadServiceDescription=function(){var b=
this;return this._routeTask.getServiceDescription().then(function(a){b._set("serviceDescription",a)})};a.prototype._enqueue=function(b,a){var c=this,d=new t;this._requestQueueTail||(this._requestQueueTail=new t,this._requestQueueTail.resolve());this._requestQueueTail.promise.always(function(){try{var a=b.call(c);a&&"object"===typeof a&&a.hasOwnProperty("isFulfilled")?a.then(d.resolve,d.reject):d.resolve(a)}catch(N){d.reject(N)}});this._requestQueueTail=d;return d.promise};a.prototype._addStopsToLayer=
function(){var b=this;this._stopLayer.graphics.removeAll();var a=this.stops.map(function(a,d){var c=b.stopSymbols,e=c.first,f=c.middle,h=c.last,g=c.unlocated,c=c.waypoint;l.isWaypoint(a)?a.symbol=c:a.symbol=void 0===a.attributes.Status?0===d?e:d===b.stops.length-1?h:f:l.isWaypoint(a)?c:l.isStopLocated(a)?l.isFirstStop(a)?e:l.isLastStop(a)?h:f:g;return a.clone()});this._stopLayer.graphics.addMany(a)};a.prototype._addRouteToLayer=function(){var a=this;this._routeLayer.graphics.removeAll();var d=this.directionLines;
d&&(d.forEach(function(b){b.symbol=a.routeSymbol}),this._routeLayer.graphics.addMany(d))};d([e.property()],a.prototype,"departureTime",void 0);d([e.property({aliasOf:"lastRoute.routeResults.0.directions.features"})],a.prototype,"directionLines",void 0);d([e.property({readOnly:!0,dependsOn:["routeParameters","serviceDescription"]})],a.prototype,"impedanceAttribute",null);d([e.property({readOnly:!0})],a.prototype,"lastRoute",void 0);d([e.property({value:50})],a.prototype,"maxStops",null);d([e.property()],
a.prototype,"routeSymbol",void 0);d([e.property({type:w})],a.prototype,"routeParameters",void 0);d([e.property()],a.prototype,"routeServiceUrl",void 0);d([e.property({dependsOn:["routeServiceUrl"],type:v})],a.prototype,"_routeTask",null);d([e.property({dependsOn:["serviceDescription"]})],a.prototype,"selectedTravelMode",null);d([e.property({readOnly:!0})],a.prototype,"serviceDescription",void 0);d([e.property({dependsOn:["error"],readOnly:!0})],a.prototype,"state",null);d([e.property()],a.prototype,
"error",void 0);d([e.property({type:u})],a.prototype,"stops",void 0);d([e.property({value:x})],a.prototype,"stopSymbols",null);d([e.property({readOnly:!0,dependsOn:["routeParameters","serviceDescription"]})],a.prototype,"timeAttribute",null);d([e.property({dependsOn:["serviceDescription"]})],a.prototype,"travelModes",null);d([e.property()],a.prototype,"view",void 0);d([e.property()],a.prototype,"getDirections",null);d([e.property()],a.prototype,"zoomToRoute",null);return a=d([e.subclass("esri.widgets.Directions.DirectionsViewModel")],
a)}(e.declared(E,F,L))});