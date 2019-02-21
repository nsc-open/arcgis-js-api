// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators ./PortalQueryParams".split(" "),function(m,n,h,d,k,f,l,c,e){return function(g){function a(b){b=g.call(this)||this;b.access=null;b.created=null;b.description=null;b.id=null;b.isInvitationOnly=!1;b.modified=null;b.owner=null;b.portal=null;b.snippet=null;b.sortField=null;b.sortOrder=null;b.tags=null;b.title=
null;return b}h(a,g);Object.defineProperty(a.prototype,"thumbnailUrl",{get:function(){var b=this.url,a=this.thumbnail;return b&&a?this.portal._normalizeUrl(b+"/info/"+a+"?f\x3djson"):null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"url",{get:function(){var b=this.get("portal.restUrl");return b?b+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0});a.prototype.fetchCategorySchema=function(){var b=this;return this.portal._request(this.url+"/categorySchema").then(function(a){a=
a.categorySchema||[];return a.some(function(b){return"contentCategorySetsGroupQuery.LivingAtlas"===b.source})?b._fetchCategorySchemaSet("LivingAtlas"):a})};a.prototype.fetchMembers=function(){return this.portal._request(this.url+"/users")};a.prototype.getThumbnailUrl=function(b){var a=this.thumbnailUrl;a&&b&&(a+="\x26w\x3d"+b);return a};a.prototype.toJSON=function(){throw new f("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};a.prototype.queryItems=function(b){if(5<parseFloat(this.portal.currentVersion))return b=
b||new e,this.portal._queryPortal("/content/groups/"+this.id+"/search",b,"PortalItem");b=b?b.clone():new e;b.query="group:"+this.id+(b.query?" "+b.query:"");return this.portal.queryItems(b)};a.prototype._fetchCategorySchemaSet=function(b){var a=this;return this.portal._fetchSelf(this.portal.authMode,!0).then(function(b){if(b=b.contentCategorySetsGroupQuery){var c=new e;c.disableExtraQuery=!0;c.num=1;c.query=b;return a.portal.queryGroups(c)}throw new f("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery value not found");
}).then(function(a){if(a.total){a=a.results[0];var c=new e;c.num=1;c.query='typekeywords:"'+b+'"';return a.queryItems(c)}throw new f("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found");}).then(function(a){return a.total?a.results[0].fetchData().then(function(a){return(a=a&&a.categorySchema)&&a.length?a:[]}):[]})};d([c.property()],a.prototype,"access",void 0);d([c.property({type:Date})],a.prototype,"created",void 0);d([c.property()],a.prototype,"description",void 0);
d([c.property()],a.prototype,"id",void 0);d([c.property()],a.prototype,"isInvitationOnly",void 0);d([c.property({type:Date})],a.prototype,"modified",void 0);d([c.property()],a.prototype,"owner",void 0);d([c.property()],a.prototype,"portal",void 0);d([c.property()],a.prototype,"snippet",void 0);d([c.property()],a.prototype,"sortField",void 0);d([c.property()],a.prototype,"sortOrder",void 0);d([c.property()],a.prototype,"tags",void 0);d([c.property()],a.prototype,"thumbnail",void 0);d([c.property({dependsOn:["url",
"thumbnail","portal.credential.token"],readOnly:!0})],a.prototype,"thumbnailUrl",null);d([c.property()],a.prototype,"title",void 0);d([c.property({dependsOn:["portal.restUrl"],readOnly:!0})],a.prototype,"url",null);d([k(0,c.cast(e))],a.prototype,"queryItems",null);return a=d([c.subclass("esri.portal.PortalGroup")],a)}(c.declared(l))});