// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/has","../../core/libs/gl-matrix/mat4"],function(q,r,l,m){var n={extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,isWrappable:!0},intersects:function(a){return!1}},center:[0,0],scale:1,resolution:1,rotation:0,width:1,height:1,pixelRatio:1,size:[256,256],spatialReference:{wkid:102100,isWrappable:!0},worldScreenWidth:1,viewpoint:{},toMap:function(a,e,c){return null},toScreen:function(a,e,c){return null},clone:function(){return null},copy:function(a){return this},
toJSON:function(){return null}};return function(a,e,c,g,d,h,k){if(h!==k)throw Error("It is expected that tiles are square!");var b=d.adjustLevel(e[0]),b={context:a,drawPhase:0,state:n,stationary:!0,pixelRatio:1,displayLevel:b,requiredLevel:b,drawphase:0,renderer:g,layerOpacity:1,painter:null};g.initializeProgramCache(a);var f=d.getScale(e[0]);d=d.getShift(e,f);var p=d[1];c.tileTransform.displayCoord[0]=-1-d[0];c.tileTransform.displayCoord[1]=1+p;d=c.tileTransform.transform;m.identity(d);f=.25*f/h;
d[0]=f;d[5]=-f;a.setBlendFunctionSeparate(1,771,1,771);b.state.size=[h,k];b.state.width=h;b.state.height=k;g.setStateParams(b.state,b.pixelRatio,e[0]);c.attach(b);a.setFaceCullingEnabled(!1);a.setDepthFunction(515);a.setBlendingEnabled(!1);a.setDepthTestEnabled(!0);a.setDepthWriteEnabled(!0);c.processRender(b);a.setDepthWriteEnabled(!1);a.setBlendingEnabled(!0);b.drawphase=1;c.processRender(b);b.drawphase=2;c.processRender(b);l("esri-vector-tiles-debug")&&g.renderTileInfo(a,c);a.setDepthWriteEnabled(!0);
a.setDepthTestEnabled(!1);a.setFaceCullingEnabled(!0)}});