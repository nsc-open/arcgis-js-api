// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Accessor ../../../core/accessorSupport/decorators ./AltitudeConstraint ./ClipDistanceConstraint ./CollisionConstraint ./TiltConstraint".split(" "),function(b,e,l,d,m,c,f,g,h,k){Object.defineProperty(e,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.tilt=new k.default;a.altitude=new f.default;a.clipDistance=new g.default;a.collision=
new h.default;return a}l(a,b);d([c.property({type:k.default})],a.prototype,"tilt",void 0);d([c.property({type:f.default})],a.prototype,"altitude",void 0);d([c.property({type:g.default})],a.prototype,"clipDistance",void 0);d([c.property({type:h.default})],a.prototype,"collision",void 0);return a=d([c.subclass("esri.views.3d.constraints.Constraints")],a)}(c.declared(m));e.Constraints=b;e.default=b});