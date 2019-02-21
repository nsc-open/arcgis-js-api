// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/promise/all ../Basemap ../Viewpoint ../core/Collection ../core/collectionUtils ../core/JSONSupport ../core/lang ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../support/basemapUtils ../views/3d/lib/glMatrix ../webdoc/support/Thumbnail ./Environment ./Lighting ./support/Description ./support/SlideGround ./support/Title".split(" "),
function(I,J,n,t,e,y,z,A,u,B,g,C,D,f,c,p,v,E,k,l,F,q,r,h){var G=0,w=function(f){function b(){var a=null!==f&&f.apply(this,arguments)||this;a.id="";return a}t(b,f);a=b;b.prototype.clone=function(){return new a({id:this.id})};var a;e([c.property({type:String,json:{write:!0}})],b.prototype,"id",void 0);return b=a=e([c.subclass()],b)}(c.declared(g)),m=u.ofType(w),H=D.getLogger("esri.webscene.Slide");return function(g){function b(a){a=g.call(this,a)||this;a._currentAnimation=null;a.id=Date.now().toString(16)+
"-slide-"+G++;a.title=new h.default;a.description=new q.default;a.thumbnail=new k.default;a.viewpoint=null;a.basemap=null;a.ground=null;a.environment=new l;a.visibleLayers=new m;return a}t(b,g);b.prototype.castTitle=function(a){return"string"===typeof a?new h.default({text:a}):p.ensureType(h.default,a)};b.prototype.castDescription=function(a){return"string"===typeof a?new q.default({text:a}):p.ensureType(q.default,a)};b.prototype.castThumbnail=function(a){return"string"===typeof a?new k.default({url:a}):
p.ensureType(k.default,a)};b.prototype.castBasemap=function(a){return v.ensureType(a)};Object.defineProperty(b.prototype,"visibleLayers",{set:function(a){this._set("visibleLayers",B.referenceSetter(a,this._get("visibleLayers"),m))},enumerable:!0,configurable:!0});b.prototype.castVisibleLayers=function(a){return a&&"function"===typeof a.map?a.map(function(a){if("string"===typeof a)return{id:a};if(a.id)return{id:a.id};H.warn('Invalid visible layer, expected { id }, Layer or "id"');return a}):a};b.prototype.clone=
function(){return new this.constructor({id:this.id,title:this.title.clone(),thumbnail:this.thumbnail.clone(),description:this.description&&this.description.clone()||null,viewpoint:this.viewpoint&&this.viewpoint.clone()||null,basemap:this.basemap&&this.basemap.clone()||null,ground:this.ground&&this.ground.clone()||null,visibleLayers:this.visibleLayers.clone(),environment:this.environment&&this.environment.clone()||null})};b.prototype._whenLayerView=function(a,d){if(d.isRejected())return f.reject();
var b=a.allLayerViews.find(function(a){return a.layer===d});return b?b.when():a.whenLayerView(d)};b.prototype._updateVisibleLayersFrom=function(a){var b=this,x=[];return f.eachAlways(this._allLayers(a.map).map(function(d){return b._whenLayerView(a,d).then(function(a){a.visible&&x.push(new w({id:a.layer.id}))})}).toArray()).then(function(){b.visibleLayers.removeAll();b.visibleLayers.addMany(x)})};b.prototype.updateFrom=function(a,b){var d=this;b=n({screenshot:n({format:"jpeg",quality:80,width:120,
height:75},b&&b.screenshot)},b);return a.when(function(){d.viewpoint=a.viewpoint.clone();d.environment.lighting=F.prototype.clone.apply(a.environment.lighting);d.basemap=a.map.basemap&&a.map.basemap.clone()||null;d.ground=a.map.ground?r.default.fromGround(a.map.ground):null;return d._updateVisibleLayersFrom(a)}).then(function(){return a.takeScreenshot(b.screenshot)}).then(function(a){d.thumbnail=new k.default({url:a.dataURL});return d})};b.prototype.applyTo=function(a,b){var d=this,c=n({animate:!0},
b);return this._applyBasemap(a).then(function(){return y([d._applyViewpoint(a,c),d._applyLayerVisibility(a,c),d._applyGround(a)])}).then(function(){return d})};b.prototype._applyBasemap=function(a){var b=this;return this.basemap?this.basemap.load().always(function(){a.map.basemap=v.clonePreservingTiledLayers(b.basemap,a.map.basemap)}):f.resolve()};b.prototype._applyGround=function(a){this.ground&&(a.map.ground=this.ground.cloneAndApplyTo(a.map.ground));return f.resolve()};b.prototype._allLayers=function(a){var b=
new u;this._collectLayers(a,b);this._collectLayers(a.ground,b);return b};b.prototype._collectLayers=function(a,b){var d=this;a.layers.forEach(function(a){b.add(a);a.layers&&d._collectLayers(a,b)})};b.prototype._applyLayerVisibility=function(a,b){var d=this;if(this.visibleLayers){var c=this._allLayers(a.map);if(b.applyToLayerViews)return f.eachAlways(c.map(function(b){return d._whenLayerView(a,b).then(function(a){a.visible=d.visibleLayers.some(function(b){return b.id===a.layer.id})})}).toArray());
c.forEach(function(a){return a.visible=d.visibleLayers.some(function(b){return b.id===a.id})});return f.resolve()}};b.prototype._applyViewpoint=function(a,b){if(this.viewpoint){this.viewpoint.camera.fov=a.camera.fov;if(b.animate){if(this.get("environment.lighting.date"))return this._animateToLighting(a,b);a.environment.lighting=this.environment.lighting.clone();return a.goTo(this.viewpoint,b)}a.viewpoint=this.viewpoint;a.environment.lighting=this.environment.lighting.clone()}return f.resolve()};b.prototype._animateToLighting=
function(a,b){var d=this,c;"global"===a.viewingMode&&(c=this._animateLightingWithCamera(a));this._currentAnimation&&(this._currentAnimation.cancel(),this._currentAnimation=null);a.environment.lighting.cameraTrackingEnabled=!1;a.environment.lighting.directShadowsEnabled=this.environment.lighting.directShadowsEnabled;null!=this.environment.lighting.displayUTCOffset&&(a.environment.lighting.displayUTCOffset=this.environment.lighting.displayUTCOffset);var e=a.goTo(this.viewpoint,b);this._currentAnimation=
e;this._currentAnimation.always(function(){c&&c.remove();d._currentAnimation===e&&(a.environment.lighting.cameraTrackingEnabled=!0)});this._currentAnimation.then(function(){a.environment.lighting=d.environment.lighting.clone()});return this._currentAnimation};b.prototype._getTime=function(a){var b=a.getTime();a=3600*a.getUTCHours()+60*a.getUTCMinutes()+a.getUTCSeconds();return[b,a]};b.prototype._setTime=function(a,b,c){a.setTime(b);a.setUTCHours(c/3600);a.setUTCMinutes(c%3600/60);a.setUTCSeconds(c%
3600%60);return a};b.prototype._animateLightingWithCamera=function(a){var b=this,c=E.vec3d,e=this._getTime(new Date(a.environment.lighting.date.toString())),f=e[0],g=e[1],e=this._getTime(this.environment.lighting.date),k=e[0],q=e[1],h=a.renderCoordsHelper,n=[0,0,0];h.toRenderCoords(a.camera.position,n);var p=[0,0,0];h.toRenderCoords(this.viewpoint.camera.position,p);var l=[0,0,0],r=new Date;return a.watch("camera",function(d){h.toRenderCoords(d.position,l);d=c.dist2(n,l);var e=c.dist2(p,l),m=0;0!==
d+e&&(m=d/(d+e));a.environment.lighting.date=b._setTime(r,f+(k-f)*m,g+(q-g)*m)})};b.createFrom=function(a,b){return(new this).updateFrom(a,b)};b.sanitizeJSON=function(a){var b;b=void 0!==a.visibleLayers&&Array.isArray(a.visibleLayers)?C.clone(a.visibleLayers):[];b={id:a.id||"",title:a.title||{text:""},thumbnail:a.thumbnail||{url:""},viewpoint:a.viewpoint,baseMap:a.baseMap,visibleLayers:b};void 0!==a.description&&(b.description=a.description);void 0!==a.environment&&(b.environment=l.sanitizeJSON(a.environment));
void 0!==a.ground&&(b.ground=r.default.sanitizeJSON(a.ground));return b};e([c.property({type:String,json:{write:{isRequired:!0}}})],b.prototype,"id",void 0);e([c.property({type:h.default,json:{write:{isRequired:!0}}})],b.prototype,"title",void 0);e([c.cast("title")],b.prototype,"castTitle",null);e([c.property({type:q.default,json:{write:{overridePolicy:function(a){return{enabled:!(!a||!a.text)}}}}})],b.prototype,"description",void 0);e([c.cast("description")],b.prototype,"castDescription",null);e([c.property({type:k.default,
json:{write:{isRequired:!0}}})],b.prototype,"thumbnail",void 0);e([c.cast("thumbnail")],b.prototype,"castThumbnail",null);e([c.property({type:A,json:{write:{isRequired:!0}}})],b.prototype,"viewpoint",void 0);e([c.property({type:z,json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],b.prototype,"basemap",void 0);e([c.cast("basemap")],b.prototype,"castBasemap",null);e([c.property({type:r.default,json:{write:!0}})],b.prototype,"ground",void 0);e([c.property({type:m,json:{write:{isRequired:!0}}})],
b.prototype,"visibleLayers",null);e([c.cast("visibleLayers")],b.prototype,"castVisibleLayers",null);e([c.property({type:l,json:{write:!0}})],b.prototype,"environment",void 0);return b=e([c.subclass("esri.webscene.Slide")],b)}(c.declared(g))});