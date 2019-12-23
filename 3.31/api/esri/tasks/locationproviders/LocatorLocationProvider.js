// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/tasks/locationproviders/LocatorLocationProvider",["../../declare","dojo/_base/lang","dojo/_base/array","../../request","./LocationProviderRemoteBase"],function(l,c,m,n,p){return l("esri.tasks.locationproviders.LocatorLocationProvider",p,{locator:null,addressFields:null,constructor:function(){this.geometryType="esriGeometryPoint"},_getFieldMapping:function(){return this.addressFields},_init:function(){if(this.locator){var b=this.getInherited(arguments);return n({url:this.locator.url,content:{f:"json"},
callbackParamName:"callback"}).then(c.hitch(this,function(a){this._batchSize=a.locatorProperties&&a.locatorProperties.SuggestedBatchSize||1;b.call(this)}))}},_batchWillOverflow:function(b,a){return b.length+1>this._batchSize},_locateBatch:function(b,a){var q=this;a=function(a){for(var d=[],g=0;g<a.length;g++){var f=a[g],c=1===q._batchSize?0:f.attributes.ResultID,e=b[c];if((e=e&&e.features)&&f.score&&f.location){for(var h=0;h<e.length;h++){var k=e[h];k.geometry=f.location;d.push(k)}b[c]=null}}return d};
return 1===this._batchSize?this.locator.addressToLocations({address:b[0].expression,outFields:""}).then(a):this.locator.addressesToLocations({addresses:m.map(b,function(a,b){return c.mixin(a.expression,{OBJECTID:b})}),outFields:""}).then(a)},_createQueryExpression:function(b){for(var a={},c=0;c<this._fields.length;c++){var d=this._fields[c];a[d.outField]=b.attributes[d.inField]}return a}})});