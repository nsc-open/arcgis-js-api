// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper dojo/errors/CancelError ../../../../Color ../../../../core/Error ../../../../core/has ../../../../core/lang ../../../../core/promiseUtils ../../../../core/screenUtils ../../../../core/urlUtils ../../../../core/libs/gl-matrix-2/gl-matrix ../../../../symbols/support/utils ./ElevationAligners ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./graphicUtils ./SignedDistanceFunctions ../support/FastSymbolUpdates ../../support/projectionUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryUtil ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/HUDMaterial".split(" "),
function(w,da,E,F,G,H,x,I,J,K,l,L,h,M,N,O,P,n,Q,R,q,t,S,u,T,y,U,V,z){function v(g){return"cross"===g||"x"===g}function W(g){var b;"primitive:"===g.substring(0,10)&&(g=g.substring(10));switch(g){case r.PRIM_CIRCLE:b=q.computeSignedDistancefieldCicle(128,64);break;case r.PRIM_SQUARE:b=q.computeSignedDistancefieldSquare(128,64,!1);break;case r.PRIM_KITE:b=q.computeSignedDistancefieldSquare(128,64,!0);break;case r.PRIM_CROSS:b=q.computeSignedDistancefieldCrossAndX(128,64,!1);break;case r.PRIM_X:b=q.computeSignedDistancefieldCrossAndX(128,
64,!0)}return new V(b,"sdf_"+g,{mipmap:!1,wrap:{s:33071,t:33071},width:128,height:128,components:4})}var A=h.mat4f64.create(),B=h.vec3f64.fromValues(0,0,1),X=[0,0,0,0],C=h.vec3f64.fromValues(0,0,0),Y=h.vec3f64.fromValues(1,1,1),D="center bottom top left right bottom-left bottom-right top-left top-right".split(" "),Z=[.25,.25,.75,.75],r={PRIM_CIRCLE:"circle",PRIM_SQUARE:"square",PRIM_CROSS:"cross",PRIM_X:"x",PRIM_KITE:"kite"},aa=[64,64];w=function(g){function b(){var a=null!==g&&g.apply(this,arguments)||
this;a._elevationOptions={supportsOffsetAdjustment:!0,supportsOnTheGround:!0};return a}F(b,g);b.prototype._prepareResources=function(){var a=this.symbol,c=Math.round(null!=a.size?l.pt2px(a.size):16);this._size=null;this._symbolTextureRatio=1;this._primitive=null;var e=this._getStageIdHint();if(!this._isPropertyDriven("size")){var d=R.validateSymbolLayerSize(c);if(d){this._logWarning(d);this.reject();return}}this._isPropertyDriven("size")&&64>c&&(c=64);var b=a.resource||{primitive:"circle",href:void 0},
d={anchorPos:this._getAnchorPos(a)},f=this.symbolContainer;if(this._hasVisibleVerticalOffset(f)){var f=f.verticalOffset,g=f.minWorldLength,p=f.maxWorldLength;d.verticalOffset={screenLength:l.pt2px(f.screenLength),minWorldLength:g||0,maxWorldLength:null!=p?p:Infinity}}this._context.screenSizePerspectiveEnabled&&(d.screenSizePerspective=this._context.sharedResources.screenSizePerspectiveSettings);b.href?(this._outlineSize=this._getOutlineSize(a,null),d.color=this._getFillColor(a,null),d.outlineColor=
this._getOutlineColor(a),d.outlineSize=this._outlineSize,d.textureIsSignedDistanceField=!1,this._prepareImageResources(c,d,e)):(b=b.primitive||"circle",f="primitive:"+b,this._primitive=b,this._outlineSize=this._getOutlineSize(a,b),d.color=this._getFillColor(a,b),d.outlineColor=this._getOutlineColor(a),d.outlineSize=this._outlineSize,v(b)&&0===d.outlineSize?this.reject():(this.texture=this._context.sharedResources.textures.acquire(f,W),this._textureURI=f,d.textureIsSignedDistanceField=!0,d.distanceFieldBoundingBox=
Z,d.textureId=this.texture.id,this._size=[c,c],this._symbolTextureRatio=2,this._createMaterialsAndAddToStage(d,this._context.stage,e),this.resolve()))};b.prototype._getOutlineSize=function(a,c){var e=0,e=a.outline&&null!=a.outline.size?l.pt2px(a.outline.size):v(c)?1.5:0;return Math.max(e,0)};b.prototype._getOutlineColor=function(a){var c=this._getLayerOpacity();if(a.outline&&null!=a.outline.color){var e=H.toUnitRGB(a.outline.color);return[e[0],e[1],e[2],a.outline.color.a*c]}return[0,0,0,c]};b.prototype._getFillColor=
function(a,c){return v(c)?X:this._getMaterialOpacityAndColor()};b.prototype._getAnchorPos=function(a){return-1<D.indexOf(a.anchor)?a.anchor:"center"};b.prototype._prepareImageResources=function(a,c,e){var d=this,b=M.getIconHref(this.symbolContainer,this.symbol);!I("esri-canvas-svg-support")&&L.isSVG(b)?(this._logWarning("IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"),this.reject(new x("SVG Not Supported","IconSymbol3DLayer failed to load (SVG symbols are not supported in IE11)"))):
(K.when(this._context.sharedResources.textures.acquire(b,a)).then(function(b){if(!d.isRejected()){var f=b.params,p=f.width/f.height;d._size=a?1<p?[a,Math.round(a/p)]:[Math.round(a*p),a]:[f.width,f.height];c.textureId=b.id;d._createMaterialsAndAddToStage(c,d._context.stage,e);d.resolve()}},function(a){a instanceof G?d.reject():(a="IconSymbol3DLayer failed to load (Request for icon resource failed: "+b+")",d._logWarning(a),d.reject(new x("Request Failed",a)))}),this._textureURI=b)};b.prototype._createMaterialsAndAddToStage=
function(a,c,e){this._fastUpdates=t.initFastSymbolUpdatesState(this._context.renderer,this._fastVisualVariableConvertOptions());this._fastUpdates.enabled&&J.mixin(a,this._fastUpdates.materialParameters);var d=E({},a);d.verticalOffset=null;d.screenSizePerspective=null;d.occlusionTest=!1;d.slicePlaneEnabled=!1;d.shaderPolygonOffset=0;this._drapedMaterial=new z(d,e+"_iconDraped");c.add(u.ModelContentType.MATERIAL,this._drapedMaterial);a.occlusionTest=!0;a.slicePlaneEnabled=this._context.slicePlaneEnabled;
this._material=new z(a,e+"_icon");c.add(u.ModelContentType.MATERIAL,this._material)};b.prototype.destroy=function(){g.prototype.destroy.call(this);this.isFulfilled()||this.reject();this._material&&(this._context.stage.remove(u.ModelContentType.MATERIAL,this._material.id),this._material=null);this._drapedMaterial&&(this._context.stage.remove(u.ModelContentType.MATERIAL,this._drapedMaterial.id),this._drapedMaterial=null);this._textureURI&&(this._context.sharedResources.textures.release(this._textureURI),
this._textureURI=null)};b.prototype._getScaleFactor=function(a){if(this._isPropertyDriven("size")&&a.size){for(var c=0;3>c;c++){var e=a.size[c];e&&"symbolValue"!==e&&"proportional"!==e&&(a.size[c]=l.pt2px(e))}c=this._size[0]>this._size[1]?this._size[0]:this._size[1];if("symbolValue"!==a.size[0]){if(isFinite(+a.size[0]))return+a.size[0]/c;if(isFinite(+a.size[2]))return+a.size[2]/c}}return 1};b.prototype.createGraphics3DGraphic=function(a){var c=a.renderingInfo;a=a.graphic;if(!this._validateGeometry(a.geometry))return null;
var e=n.placePointOnGeometry(a.geometry);if(!e)return this._logWarning("unsupported geometry type for icon symbol: "+a.geometry.type),null;var d="graphic"+a.uid,b=this._getVertexOpacityAndColor(c),f=1;this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size||(f=this._getScaleFactor(c));f*=this._symbolTextureRatio;c=[this._size[0]*f,this._size[1]*f];f=this.getGraphicElevationContext(a);return"on-the-ground"===f.mode?this._createAsOverlay(a,e,b,c,f,d,a.uid):this._createAs3DShape(a,e,b,c,f,
d,a.uid)};b.prototype.layerOpacityChanged=function(){var a=this._getFillColor(this.symbol,this._primitive);this._drapedMaterial.setParameterValues({color:a});this._material.setParameterValues({color:a});a=this._getOutlineColor(this.symbol);this._drapedMaterial.setParameterValues({outlineColor:a});this._material.setParameterValues({outlineColor:a});return!0};b.prototype.layerElevationInfoChanged=function(a,c,b){var d=this._elevationContext.mode;if("on-the-ground"===b&&"on-the-ground"===d)return!0;
if(b!==d&&("on-the-ground"===b||"on-the-ground"===d))return!1;var e=n.needsElevationUpdates2D(d)||"absolute-height"===d;return this.updateGraphics3DGraphicElevationInfo(a,c,function(){return e})};b.prototype.slicePlaneEnabledChanged=function(a,c){this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};b.prototype.applyRendererDiff=function(a,c){for(var b in a.diff)switch(b){case "visualVariables":if(t.updateFastSymbolUpdatesState(this._fastUpdates,c,this._fastVisualVariableConvertOptions()))this._material.setParameterValues(this._fastUpdates.materialParameters),
this._drapedMaterial.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};b.prototype.setDrawOrder=function(a,c,b){this.updateSymbolLayerOrder(a,c);this._drapedMaterial&&(this._drapedMaterial.renderPriority=a,b.add(this._drapedMaterial.id))};b.prototype._defaultElevationInfoNoZ=function(){return ba};b.prototype._createAs3DShape=function(a,b,e,d,g,f,h){var c=this,m=this.getFastUpdateAttrValues(a);a=m?function(a){return t.evaluateModelTransform(c._fastUpdates.materialParameters,
m,a)}:null;e=y.createPointGeometry(B,null,e,d,ca,null,m);e=[new T(e,f)];f=n.createStageObjectForPoint(this._context,b,e,[this._material],null,null,g,f,this._context.layer.uid,h,!0,a);if(null===f)return null;var k=new P(this,f.object,e,null,null,N.perObjectElevationAligner,g);k.alignedTerrainElevation=f.terrainElevation;k.needsElevationUpdates=n.needsElevationUpdates2D(g.mode)||"absolute-height"===g.mode;k.getScreenSize=this._createScreenSizeGetter(d,a);k.calculateRelativeScreenBounds=function(a){return c._material.calculateRelativeScreenBounds(k.getScreenSize(),
1,a)};n.extendPointGraphicElevationContext(k,b,this._context.elevationProvider);return k};b.prototype._createAsOverlay=function(a,b,e,d,g,f,l){var c=this;this._drapedMaterial.renderPriority=this._symbolLayerOrder;g=h.vec3f64.create();S.pointToVector(b,g,this._context.overlaySR);g[2]=this._getDrapedZ();if((b=this._context.clippingExtent)&&!n.pointInBox2D(g,b))return null;var m=this.getFastUpdateAttrValues(a);a=m?function(a){return t.evaluateModelTransform(c._fastUpdates.materialParameters,m,a)}:null;
e=y.createPointGeometry(B,g,e,d,null,null,m);b=new U(e);b.material=this._drapedMaterial;b.center=g;b.bsRadius=0;b.transformation=A;b.name=f;b.uniqueName=f+"#"+e.id;var k=new O(this,[b],null);k.getScreenSize=this._createScreenSizeGetter(d,a);k.calculateRelativeScreenBounds=function(a){return c._drapedMaterial.calculateRelativeScreenBounds(k.getScreenSize(),1,a)};return k};b.prototype._createScreenSizeGetter=function(a,b){var c=this._outlineSize+2;if(this._fastUpdates.enabled){var d=a[0]/this._symbolTextureRatio,
g=a[1]/this._symbolTextureRatio;return function(a){void 0===a&&(a=h.vec2f64.create());var e=b(A);a[0]=e[0]*d+c;a[1]=e[5]*g+c;return a}}var f=a[0]/this._symbolTextureRatio+c,l=a[1]/this._symbolTextureRatio+c;return function(a){void 0===a&&(a=h.vec2f64.create());a[0]=f;a[1]=l;return a}};b.prototype._fastVisualVariableConvertOptions=function(){var a=this._size[0]>this._size[1]?this._size[0]:this._size[1],b=h.vec3f64.fromValues(a,a,a),e=l.px2pt(1),a=a*e,a=h.vec3f64.fromValues(a,a,a);return{modelSize:b,
symbolSize:a,unitInMeters:e,transformation:{anchor:C,scale:Y,rotation:C}}};b.prototype._hasVisibleVerticalOffset=function(a){return this.symbolContainer&&"point-3d"===this.symbolContainer.type&&this.symbolContainer.hasVisibleVerticalOffset()};b.PRIMITIVE_SIZE=aa;b.VALID_ANCHOR_STRINGS=D;return b}(Q);var ba={mode:"relative-to-ground",offset:0},ca=h.vec4f64.fromValues(0,0,0,1);return w});