// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver"],function(c,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.heatmap={name:"heatmap",shaders:{vertexShader:b.resolveIncludes("heatmap/heatmap.vert"),fragmentShader:b.resolveIncludes("heatmap/heatmap.frag")},attributes:{a_pos:0,a_tex:1}}});