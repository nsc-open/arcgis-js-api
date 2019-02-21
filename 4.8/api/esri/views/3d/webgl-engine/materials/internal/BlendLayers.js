// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/views/3d/webgl-engine/materials/internal/BlendLayers.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\r\n\r\n\x3csnippets\x3e\r\n\r\n\x3csnippet name\x3d"vertexShaderBlendLayers"\x3e\x3c![CDATA[\r\n  $vsprecisionf\r\n\r\n  attribute vec3 $position;\r\n  attribute vec2 $uv0;\r\n\r\n  uniform float scale;\r\n  uniform vec2 offset;\r\n\r\n  varying vec2 uv;\r\n\r\n  void main(void) {\r\n    gl_Position \x3d vec4($position, 1.0);\r\n    uv \x3d $uv0 * scale + offset;;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3csnippet name\x3d"fragmentShaderBlendLayers"\x3e\x3c![CDATA[\r\n  $fsprecisionf\r\n\r\n  varying vec2 uv;\r\n\r\n  uniform sampler2D tex;\r\n  uniform float opacity;\r\n\r\n  void main() {\r\n    vec4 color \x3d texture2D(tex, uv);\r\n\r\n    // Note: output in pre-multiplied alpha for correct alpha compositing\r\n    gl_FragColor \x3d vec4(color.xyz, 1.0) * color.a * opacity;\r\n  }\r\n]]\x3e\x3c/snippet\x3e\r\n\r\n\x3c/snippets\x3e\r\n'}});
define(["require","exports","dojo/text!./BlendLayers.xml","../../lib/DefaultVertexAttributeLocations","../../../../webgl/Program"],function(g,h,c,d,e){return function(){function b(){}b.loadShaders=function(a,b,f){a._parse(c);a=new e(f,a.vertexShaderBlendLayers,a.fragmentShaderBlendLayers,d.Default3D);b.add("blendLayers",a)};return b}()});