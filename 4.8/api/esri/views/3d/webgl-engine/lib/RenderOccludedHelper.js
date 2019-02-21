// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/occluded.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vsRenderOccludedApply"\x3e\x3c![CDATA[\r\n  $vsprecisionf\r\n\r\n  attribute vec2 $position;\r\n  varying vec2 uv;\r\n\r\n  void main(void) {\r\n    gl_Position \x3d vec4($position, 0.0, 1.0);\r\n    uv \x3d $position.xy * 0.5 + vec2(0.5);\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fsRenderOccludedApply"\x3e\x3c![CDATA[\r\n  $fsprecisionf\r\n\r\n  uniform sampler2D occludedColorMap;\r\n\r\n  varying vec2 uv;\r\n\r\n  void main() {\r\n    vec4 occludedColor \x3d texture2D(occludedColorMap, uv);\r\n    gl_FragColor \x3d occludedColor * vec4(1.0, 1.0, 1.0, 0.4);\r\n  }\r\n\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define("require exports dojo/text!../materials/internal/occluded.xml ./DefaultVertexAttributeLocations ./gl-matrix ./glUtil3D ./Util ../../../webgl/FramebufferObject ../../../webgl/Program ../../../webgl/Util".split(" "),function(m,n,d,e,f,g,c,h,k,l){return function(){function b(a,p,b){this._quadVAO=null;this._rctx=b;this._colorFBO=void 0;this._viewportToRestore=f.vec4d.create();this.programRep=a}Object.defineProperty(b.prototype,"enabled",{get:function(){return void 0!==this._colorFBO},set:function(a){a?
this.enable():this.disable()},enumerable:!0,configurable:!0});b.prototype.setupFBOs=function(a){c.assert(this.enabled);this._viewportToRestore=a=a.fullViewport;this._width=a[2];this._height=a[3];this._rctx.setViewport(0,0,this._width,this._height)};b.prototype.prepareColorPass=function(){c.assert(this.enabled);var a=this._rctx,b=a.gl;this._colorFBO.resize(this._width,this._height);a.bindFramebuffer(this._colorFBO);a.setClearColor(0,0,0,0);a.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)};b.prototype.finish=
function(a){var b=this._rctx;b.bindFramebuffer(a);b.setViewport(this._viewportToRestore[0],this._viewportToRestore[1],this._viewportToRestore[2],this._viewportToRestore[3])};b.prototype.apply=function(){var a=this._rctx,b=this.programRep.get("render-occluded-apply");a.bindProgram(b);a.bindVAO(this._quadVAO);a.bindTexture(this._colorFBO.colorTexture,0);b.setUniform1i("occludedColorMap",0);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);a.setBlendingEnabled(!0);a.setBlendFunction(770,771);a.drawArrays(5,
0,l.vertexCount(this._quadVAO,"geometry"));a.bindVAO(null);a.setDepthWriteEnabled(!0);a.setDepthTestEnabled(!0);a.setBlendingEnabled(!1)};b.prototype.enable=function(){this.enabled||(this._quadVAO=g.createQuadVAO(this._rctx),this._colorFBO=h.createWithAttachments(this._rctx,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:0,height:0},{colorTarget:0,depthStencilTarget:1}))};b.prototype.disable=function(){this.enabled&&(this._quadVAO.dispose(!0),this._quadVAO=void 0,
this._colorFBO.dispose(),this._colorFBO=void 0)};b.loadShaders=function(a,b,c){a._parse(d);b.add("render-occluded-apply",new k(c,a.vsRenderOccludedApply,a.fsRenderOccludedApply,e.Default3D))};return b}()});