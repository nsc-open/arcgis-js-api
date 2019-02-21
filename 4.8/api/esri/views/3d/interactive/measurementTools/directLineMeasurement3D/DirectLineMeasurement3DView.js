// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/StackedObjectPool ./LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../lib/glMatrix ../../../support/mathUtils ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/lib/Selector ../../../webgl-engine/materials/ColorMaterial ../../../webgl-engine/materials/DefaultMaterial ../../../webgl-engine/materials/MeasurementArrowMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/parts/Model".split(" "),
function(t,R,S,T,H,I,J,B,w,C,F,m,h,u,z,K,D,L,q,M,N,O,P,E,c){var k=new I(function(){return h.vec3d.create()});t=[1,.5,0,.75];var Q={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:.75,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,triangleColor:t,triangleLineWidth:3,triangleCornerSize:32,triangleSubdivisions:128,arrowWidth:16,arrowOutlineColor:[1,
.5,0,1],arrowOutlineWidth:.2,arrowStripeEvenColor:[1,1,1,1],arrowStripeOddColor:[1,.5,0,1],arrowStripeLength:16,arrowSubdivisions:128,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:t,guideLineWidth:2,guideLineColor:t,guideStippleLengthPixels:6,labelDistance:25},r;(function(b){b[b.Small=12]="Small";b[b.Large=16]="Large"})(r||(r={}));t=function(){function b(a,d,f){void 0===f&&(f={});this._visible=!1;this._laserLineRenderer=null;this._handleGeometry=new z(D.createSphereGeometry(1,32,32),"handle");
this._directDistanceLabel=new B;this._horizontalDistanceLabel=new B;this._verticalDistanceLabel=new B;this._listenerHandles=null;this._cursorPosition=h.vec3d.create();this._startPosition=h.vec3d.create();this._endPosition=h.vec3d.create();this._centerPosition=h.vec3d.create();this._cornerPosition=h.vec3d.create();this._arrowLabelSegment=new w;this._horizontalLabelSegment=new w;this._verticalLabelSegment=new w;this._geodesicProjectionLabelSegment=new w;this._origin=h.vec3d.create();this._originTransform=
h.mat4d.create();this._tempMat4=h.mat4d.create();this._model=a;this._sceneView=d;this._params=m.copyParameter(Q,f);this._layer=new L("point-to-point-measurement",{},"point-to-point-measurement");this._createMaterials();this._createObjects();this._selector=new M(this._sceneView.viewingMode)}b.prototype.destroy=function(){this.hide()};Object.defineProperty(b.prototype,"requiresCursorPoint",{get:function(){return"initial"===this._model.state},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"cameraAboveGround",{get:function(){return this._sceneView.state.camera.aboveGround},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"testData",{get:function(){return{labels:{direct:this._directDistanceLabel,horizontal:this._horizontalDistanceLabel,vertical:this._verticalDistanceLabel},laserLineRenderer:this._laserLineRenderer}},
enumerable:!0,configurable:!0});b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new J(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addExternalRenderer(this._laserLineRenderer.renderSlots,this._laserLineRenderer);this._addToStage(a);
this._directDistanceLabel.addToView(this._sceneView);this._horizontalDistanceLabel.addToView(this._sceneView);this._verticalDistanceLabel.addToView(this._sceneView);this._initializeListeners();this._updateCursorPosition();this._updateStartPosition();this._updateEndPosition();this._updateMouseCursor();this._updateView()}};b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeExternalRenderer(this._laserLineRenderer);this._laserLineRenderer=null;this._removeFromStage(a);
this._directDistanceLabel.removeFromView(this._sceneView);this._horizontalDistanceLabel.removeFromView(this._sceneView);this._verticalDistanceLabel.removeFromView(this._sceneView);this._destroyListeners();this._sceneView.cursor=null}};b.prototype.handleAt=function(a,d){a=a.toArray();d="touch"===d?this._params.handleRadiusTouch:this._params.handleRadiusMouse;return this._model.endPoint&&m.pointToScreenPositionDistance(this._model.endPoint,a,this._sceneView)<d?"end":this._model.startPoint&&m.pointToScreenPositionDistance(this._model.startPoint,
a,this._sceneView)<d?"start":null};b.prototype.pick=function(a){for(var d=[],f=this._sceneView._stage.getViewContent(),g=this._sceneView._stage.getAll(c.ContentType.LAYER),e=0;e<f.length;e++){var p=g[f[e]];p&&p!==this._layer&&p.isPickable&&d.push(p.id)}f=this._sceneView.spatialReference;a=[a.screenPoint.x,this._sceneView.height-a.screenPoint.y];g=this._sceneView._stage.pick(a,d,!0,this._selector);g=g.getMinResult();d=h.vec3d.create();this._sceneView.basemapTerrain.isSeeThrough()&&!g.getIntersectionPoint(d)&&
(g=this._sceneView._stage.pick(a,[],!1,this._selector),g=g.getMinResult());if(!g.getIntersectionPoint(d))return new b.PickResult;a=this._sceneView.renderCoordsHelper.fromRenderCoords(d,f);return new b.PickResult("TerrainRenderer"===g.intersector?"surface":"feature",d,a)};b.prototype.getElevation=function(a){return this._sceneView.basemapTerrain.ready?this._sceneView.basemapTerrain.getElevation(a)||0:0};b.prototype.overlappingHandles=function(a,d){return m.pointToPointScreenDistance(a,d,this._sceneView)<=
this._params.handleRadius};b.prototype._createMaterials=function(){this._handleMaterial=new O({diffuse:this._params.handleColor,transparent:1!==this._params.handleOpacity,opacity:this._params.handleOpacity,castShadows:!1},"handle");this._handleMaterial.renderOccluded=!0;this._triangleLineMaterial=new E({width:this._params.triangleLineWidth,color:this._params.triangleColor,polygonOffset:!0},"triangle-line");this._triangleLineMaterial.renderOccluded=!0;this._triangleCornerMaterial=new N({color:this._params.triangleColor,
transparent:!0,polygonOffset:!0},"triangle-corner");this._triangleCornerMaterial.renderOccluded=!0;this._arrowMaterial=new P({outlineColor:this._params.arrowOutlineColor,stripeEvenColor:this._params.arrowStripeEvenColor,stripeOddColor:this._params.arrowStripeOddColor,polygonOffset:!0},"arrow");this._arrowMaterial.renderOccluded=!0;this._geodesicProjectionLineMaterial=new E({width:this._params.geodesicProjectionLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0},"geodesic-line");
this._geodesicProjectionLineMaterial.renderOccluded=!0;this._geodesicGuideLineMaterial=new E({width:this._params.guideLineWidth,color:this._params.geodesicProjectionLineColor,polygonOffset:!0,stippleLength:0},"geodesic-guide");this._geodesicGuideLineMaterial.renderOccluded=!0};b.prototype._createObjects=function(){this._startHandleObject=new q;this._startHandleObject.addGeometry(this._handleGeometry,[this._handleMaterial],h.mat4d.identity());this._layer.addObject(this._startHandleObject);this._endHandleObject=
new q;this._endHandleObject.addGeometry(this._handleGeometry,[this._handleMaterial],h.mat4d.identity());this._layer.addObject(this._endHandleObject);this._triangleLineObject=new q;this._layer.addObject(this._triangleLineObject);this._triangleCornerObject=new q;this._layer.addObject(this._triangleCornerObject);this._arrowObject=new q;this._layer.addObject(this._arrowObject);this._geodesicProjectionLineObject=new q;this._layer.addObject(this._geodesicProjectionLineObject);this._geodesicProjectionStartGuideObject=
new q;this._layer.addObject(this._geodesicProjectionStartGuideObject);this._geodesicProjectionEndGuideObject=new q;this._layer.addObject(this._geodesicProjectionEndGuideObject)};b.prototype._addToStage=function(a){a.add(c.ContentType.LAYER,this._layer);a.add(c.ContentType.MATERIAL,this._handleMaterial);a.add(c.ContentType.MATERIAL,this._triangleLineMaterial);a.add(c.ContentType.MATERIAL,this._triangleCornerMaterial);a.add(c.ContentType.MATERIAL,this._arrowMaterial);a.add(c.ContentType.MATERIAL,this._geodesicProjectionLineMaterial);
a.add(c.ContentType.MATERIAL,this._geodesicGuideLineMaterial);a.add(c.ContentType.OBJECT,this._startHandleObject);a.add(c.ContentType.OBJECT,this._endHandleObject);a.add(c.ContentType.OBJECT,this._triangleLineObject);a.add(c.ContentType.OBJECT,this._triangleCornerObject);a.add(c.ContentType.OBJECT,this._arrowObject);a.add(c.ContentType.OBJECT,this._geodesicProjectionLineObject);a.add(c.ContentType.OBJECT,this._geodesicProjectionStartGuideObject);a.add(c.ContentType.OBJECT,this._geodesicProjectionEndGuideObject);
a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(c.ContentType.LAYER,this._layer.id);a.remove(c.ContentType.MATERIAL,this._handleMaterial.id);a.remove(c.ContentType.MATERIAL,this._triangleLineMaterial.id);a.remove(c.ContentType.MATERIAL,this._triangleCornerMaterial.id);a.remove(c.ContentType.MATERIAL,this._arrowMaterial.id);a.remove(c.ContentType.MATERIAL,this._geodesicProjectionLineMaterial.id);a.remove(c.ContentType.MATERIAL,
this._geodesicGuideLineMaterial.id);a.remove(c.ContentType.OBJECT,this._startHandleObject.id);a.remove(c.ContentType.OBJECT,this._endHandleObject.id);a.remove(c.ContentType.OBJECT,this._triangleLineObject.id);a.remove(c.ContentType.OBJECT,this._triangleCornerObject.id);a.remove(c.ContentType.OBJECT,this._arrowObject.id);a.remove(c.ContentType.OBJECT,this._geodesicProjectionLineObject.id);a.remove(c.ContentType.OBJECT,this._geodesicProjectionStartGuideObject.id);a.remove(c.ContentType.OBJECT,this._geodesicProjectionEndGuideObject.id)};
b.prototype._getLabelPositions=function(a,d,f,g,b){var p=this._model.triangleView.collapsed;k.push();var e=k.allocate(),c=k.allocate();b.projectPoint(f,e);b.projectPoint(d,c);e={direct:p?"top":"bottom",horizontal:"top",vertical:e[0]<c[0]?"left":"right"};p||(c=k.allocate(),p=k.allocate(),m.screenSpaceTangent(a,f,c,b),m.screenSpaceTangent(a,d,p,b),h.vec2d.dot(c,p)>=G?e.direct=u.sign(c[1])===u.sign(p[1])?C.mirrorPosition(e.vertical):e.vertical:(a=k.allocate(),m.screenSpaceTangent(f,d,a,b),h.vec2d.dot(a,
p)>=G&&(e.direct=u.sign(a[0])===u.sign(p[0])?C.mirrorPosition(e.horizontal):e.horizontal)));"below-the-surface"===g&&(d=function(a){return"top"===a?"bottom":"top"},e.direct=d(e.direct),e.horizontal=d(e.horizontal),e.vertical=d(e.vertical));k.pop();return e};b.prototype._updateView=function(){var a;if(this._sceneView.ready){var d=this._sceneView._stage.getCamera(),f=this._sceneView.renderCoordsHelper;this._updateHandleObject(this._startHandleObject,this._startPosition,null!==this._model.startPoint,
"start"===this._model.hoveredHandle,this._model.draggedHandles.includes("start"),d);this._updateHandleObject(this._endHandleObject,this._endPosition,null!==this._model.endPoint,"end"===this._model.hoveredHandle,this._model.draggedHandles.includes("end"),d);var g=this._model.triangleView;if(g.visible){var e="camera-dependent"===this._model.measurementSurfaceLocation?this._sceneView.state.camera.aboveGround?"above-the-surface":"below-the-surface":this._model.measurementSurfaceLocation,b=this._startPosition;
a=this._endPosition;var c="above-the-surface"===e?1:-1,k=c*(f.getAltitude(a)-f.getAltitude(b));0>k&&(a=[a,b],b=a[0],a=a[1]);var n=this._cornerPosition;f.worldUpAtPosition(b,n);h.vec3d.scale(n,c*Math.abs(k));h.vec3d.add(n,b);f=this._centerPosition;m.midpoint([b,a,n],f);h.vec3d.set(f,this._origin);h.mat4d.identity(this._originTransform);h.mat4d.translate(this._originTransform,this._origin);g.collapsed?(this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries()):
this._updateTriangleObjects(this._triangleLineObject,this._triangleCornerObject,b,a,n,this._origin,this._originTransform,d,g.mode,this._horizontalLabelSegment,this._verticalLabelSegment);this._updateArrowObject(this._arrowObject,this._startPosition,this._endPosition,this._origin,this._originTransform,g.stripeLength,d,g.mode,this._arrowLabelSegment);f=this._requiresGeodesicGuides(this._startPosition,this._endPosition,d,g.mode);this._updateGeodesicProjectionLineObject(this._geodesicProjectionLineObject,
this._startPosition,this._endPosition,this._origin,this._originTransform,f,this._geodesicProjectionLabelSegment);this._updateGeodesicProjectionGuideObjects(d,f);c=this._params.labelDistance;e=this._getLabelPositions(b,a,n,e,d);this._updateAuxiliaryMeasureLabels(g,d,e);"geodesic"!==g.mode?this._updateLabel(this._directDistanceLabel,this._arrowLabelSegment,c,e.direct,g.directLabel,g.visible,r.Large,d):(this._updateLabel(this._horizontalDistanceLabel,f?this._geodesicProjectionLabelSegment:this._arrowLabelSegment,
c,e.horizontal,g.horizontalLabel,g.visible,r.Large,d),this._directDistanceLabel.visible=!1)}else this._triangleLineObject.removeAllGeometries(),this._triangleCornerObject.removeAllGeometries(),this._arrowObject.removeAllGeometries(),this._geodesicProjectionLineObject.removeAllGeometries(),this._geodesicProjectionStartGuideObject.removeAllGeometries(),this._geodesicProjectionEndGuideObject.removeAllGeometries(),this._directDistanceLabel.visible=!1,this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=
!1}};b.prototype._updateAuxiliaryMeasureLabels=function(a,d,f){if(a.collapsed)this._horizontalDistanceLabel.visible=!1,this._verticalDistanceLabel.visible=!1;else{var b=this._params.labelDistance;this._updateLabel(this._horizontalDistanceLabel,this._horizontalLabelSegment,b,f.horizontal,a.horizontalLabel,!0,r.Small,d);this._updateLabel(this._verticalDistanceLabel,this._verticalLabelSegment,b,f.vertical,a.verticalLabel,!0,r.Small,d)}};b.prototype._updateHandleObject=function(a,d,f,b,e,c){a.removeAllGeometries();
f&&!e&&(m.scaleTranslateMatrix((b?this._params.handleRadiusHovered:this._params.handleRadius)*c.computePixelSizeAt(d),d,this._tempMat4),a.addGeometry(this._handleGeometry,[this._handleMaterial],this._tempMat4))};b.prototype._updateTriangleObjects=function(a,d,f,b,e,c,A,l,n,v,m){k.push();n=[h.vec3d.subtract(f,c,k.allocate()),h.vec3d.subtract(e,c,k.allocate()),h.vec3d.subtract(b,c,k.allocate())];v.update(e,b);m.update(f,e);v=new z(D.createPolylineGeometry(n),"triangle-line");a.removeAllGeometries();
a.addGeometry(v,[this._triangleLineMaterial],A);a=k.allocate();v=k.allocate();h.vec3d.subtract(e,f,a);h.vec3d.normalize(a,a);h.vec3d.subtract(b,e,v);h.vec3d.normalize(v,v);f=.33*Math.min(h.vec3d.dist(e,f),h.vec3d.dist(e,b));l=this._params.triangleCornerSize*l.computePixelSizeAt(e);e=new z(this._quadGeometryData(e,a,v,Math.min(f,l),c),"triangle-corner");d.removeAllGeometries();d.addGeometry(e,[this._triangleCornerMaterial],A);k.pop()};b.prototype._updateArrowObject=function(a,d,b,g,e,c,k,h,n){this._createInterpolatedLineGeometry(a,
this._arrowMaterial,"arrow",d,b,g,e,h,this._arrowLabelSegment);a=k.computePixelSizeAt(n.origin);this._arrowMaterial.setParameterValues({width:this._params.arrowWidth*a,stripeLength:c})};b.prototype._getSegmentInterpolator=function(a,d){var b=this._sceneView.spatialReference,g=this._sceneView.renderCoordsHelper.spatialReference;return b.isWebMercator||b.isWGS84?new F.Spherical(a,d,g,g):new F.Linear(a,d)};b.prototype._updateGeodesicProjectionLineObject=function(a,d,b,g,e,c,m){c?(k.push(),c=this._sceneView.renderCoordsHelper,
d=h.vec3d.set(d,k.allocate()),b=h.vec3d.set(b,k.allocate()),c.setAltitude(0,d),c.setAltitude(0,b),this._createInterpolatedLineGeometry(a,this._geodesicProjectionLineMaterial,"geodesicProjectionLine",d,b,g,e,"geodesic",m),k.pop()):a.removeAllGeometries()};b.prototype._requiresGeodesicGuides=function(a,d,b,c){return"geodesic"===c&&this._model.geodesicDistanceExceeded?this._requiresGeodesicGuideAt(a,b)||this._requiresGeodesicGuideAt(d,b):!1};b.prototype._requiresGeodesicGuideAt=function(a,b){var d=this._sceneView.renderCoordsHelper;
b=b.computePixelSizeAt(a);return 10<=d.getAltitude(a)/b};b.prototype._updateGeodesicProjectionGuideObjects=function(a,b){if(b){k.push();b=this._sceneView.renderCoordsHelper;var d=h.vec3d.set(this._startPosition,k.allocate()),c=h.vec3d.set(this._endPosition,k.allocate());b.setAltitude(0,d);b.setAltitude(0,c);this._createInterpolatedLineGeometry(this._geodesicProjectionStartGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",d,this._startPosition,this._origin,this._originTransform,"euclidean");
this._createInterpolatedLineGeometry(this._geodesicProjectionEndGuideObject,this._geodesicGuideLineMaterial,"geodesicGuideLine",c,this._endPosition,this._origin,this._originTransform,"euclidean");a=Math.min(a.computePixelSizeAt(this._startPosition),a.computePixelSizeAt(d),a.computePixelSizeAt(this._endPosition),a.computePixelSizeAt(c));this._geodesicGuideLineMaterial.setParameterValues({stippleLength:this._params.guideStippleLengthPixels*a});k.pop()}else this._geodesicProjectionStartGuideObject.removeAllGeometries(),
this._geodesicProjectionEndGuideObject.removeAllGeometries()};b.prototype._createInterpolatedLineGeometry=function(a,b,c,g,e,p,A,l,n){k.push();var d=this._sceneView.renderCoordsHelper,f=[],t=[],q=function(a,b){var d=k.allocate();h.vec3d.subtract(a,p,d);f.push(d);t.push(b)};if("euclidean"===l){var r=k.allocate();m.midpoint([g,e],r);l=k.allocate();d.worldUpAtPosition(r,l);q(g,l);q(e,l);n&&n.update(g,e)}else{g=this._getSegmentInterpolator(g,e);e=this._params.arrowSubdivisions+1&-2;for(var u=r=null,x=
0;x<e;++x){var w=x/(e-1),y=k.allocate();l=k.allocate();g.eval(w,y);d.worldUpAtPosition(y,l);x===e/2-1?r=y:x===e/2&&(u=y);q(y,l)}n&&n.update(r,u)}c=new z(D.createPolylineGeometry(f,t),c);a.removeAllGeometries();a.addGeometry(c,[b],A);k.pop()};b.prototype._quadGeometryData=function(a,b,c,g,e){k.push();var d=k.allocate(),f=[],l=k.allocate();h.vec3d.scale(c,g,l);c=k.allocate();h.vec3d.scale(b,-g,c);for(b=0;4>b;++b)h.vec3d.set(a,d),h.vec3d.subtract(d,e),b&1&&h.vec3d.add(d,l),b&2&&h.vec3d.add(d,c),f.push(d[0],
d[1],d[2]);a=new K({position:{size:3,data:f}},{position:new Uint32Array([0,1,2,1,2,3])});k.pop();return a};b.prototype._updateLabel=function(a,b,c,g,e,h,m,l){k.push();var d=k.allocate(),f=k.allocate();b=C.computeLabelPositionFromSegment(l,b,c,g,d,f);a.updatePosition(d,f);a.text=e;a.visible=b&&h;a.fontSize=m;k.pop()};b.prototype._updateMouseCursor=function(){if("drawing"===this._model.state||"initial"===this._model.state)this._sceneView.cursor="crosshair";else if("editing"===this._model.state||"measured"===
this._model.state)this._sceneView.cursor=0<this._model.draggedHandles.length?"grabbing":this._model.hoveredHandle?"pointer":"crosshair"};b.prototype._updateCursorPosition=function(){this._model.cursorPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.cursorPoint,this._cursorPosition);this._updateLaserLine()};b.prototype._updateStartPosition=function(){this._model.startPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.startPoint,this._startPosition);this._updateLaserLine()};
b.prototype._updateEndPosition=function(){this._model.endPoint&&this._sceneView.renderCoordsHelper.toRenderCoords(this._model.endPoint,this._endPosition);this._updateLaserLine()};b.prototype._lastAddedDraggedHandle=function(){return 0<this._model.draggedHandles.length?this._model.draggedHandles.items[this._model.draggedHandles.length-1]:null};b.prototype._getFocusPosition=function(){var a=this._model,b=a.triangleView.visible&&a.triangleView.collapsed&&"euclidean"===a.measurementMode;switch(a.state){case "drawing":return b?
this._startPosition:a.endPoint?this._endPosition:this._startPosition;case "editing":return b?"start"===this._lastAddedDraggedHandle()?this._endPosition:this._startPosition:"start"===this._lastAddedDraggedHandle()?this._startPosition:this._endPosition;default:return a.cursorPoint?this._cursorPosition:null}};b.prototype._getFocusSpherePosition=function(){return"drawing"===this._model.state||"end"===this._lastAddedDraggedHandle()?this._startPosition:this._endPosition};b.prototype._updateLaserLine=function(){var a=
this._model,b=this._getFocusPosition(),c=this._params.laserLineEnabled&&!!b&&"measured"!==a.state;c?(this._laserLineRenderer.focusPlaneActive=c&&"euclidean"===a.measurementMode,this._laserLineRenderer.focusSphereActive=c&&!!a.startPoint&&"geodesic"===a.measurementMode,this._laserLineRenderer.focusPosition=b,this._laserLineRenderer.focusSpherePosition=this._getFocusSpherePosition(),this._laserLineRenderer.segmentActive=c&&a.triangleView.visible&&!a.triangleView.collapsed,this._laserLineRenderer.segmentStartPosition=
this._startPosition,this._laserLineRenderer.segmentEndPosition=this._endPosition):(this._laserLineRenderer.focusPlaneActive=!1,this._laserLineRenderer.focusSphereActive=!1,this._laserLineRenderer.segmentActive=!1)};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new H;this._listenerHandles.add(this._model.watch("state",function(){a._updateMouseCursor();a._updateLaserLine()}));this._listenerHandles.add(this._model.watch("measurementMode",function(){a._updateLaserLine()}));
this._listenerHandles.add(this._model.watch("hoveredHandle",function(){a._updateMouseCursor();a._updateView()}));this._listenerHandles.add(this._model.draggedHandles.on("change",function(){a._updateMouseCursor();a._updateView()}));this._listenerHandles.add(this._model.watch("cursorPoint",function(){a._updateCursorPosition()}));this._listenerHandles.add(this._model.watch("startPoint",function(){a._updateStartPosition();a._updateView()}));this._listenerHandles.add(this._model.watch("endPoint",function(){a._updateEndPosition();
a._updateView()}));this._listenerHandles.add(this._model.watch("unit",function(){a._updateView()}));this._listenerHandles.add(this._sceneView.state.watch("camera",function(){a._updateView()}))};b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,c){void 0===a&&(a=null);void 0===b&&(b=null);void 0===c&&(c=null);this.type=a;this.scenePoint=
b;this.mapPoint=c}}();b.PickResult=a})(t||(t={}));var G=Math.cos(u.deg2rad(12));return t});