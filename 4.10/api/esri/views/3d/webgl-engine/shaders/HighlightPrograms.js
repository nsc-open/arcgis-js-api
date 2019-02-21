// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","../lib/DefaultVertexAttributeLocations","./sources/resolver","../../../webgl/programUtils"],function(h,c,d,b,e){Object.defineProperty(c,"__esModule",{value:!0});var f=function(a){return e.glslifyDefineMap({GRID_OPTIMIZATION:a.gridOptimization,GAUSSIAN_SAMPLES:a.gaussianSamples})},g=function(a){return e.glslifyDefineMap({GRID_OPTIMIZATION:a.gridOptimization,GRID_DEBUG:a.gridDebug})};c.downsamplePass={name:"highlight-downsample",shaders:{vertexShader:b.resolveIncludes("renderer/highlight/downsample.vert"),
fragmentShader:b.resolveIncludes("renderer/highlight/downsample.frag")},attributes:d.Default3D};c.blurPass={name:"highlight-blur",shaders:function(a){return{vertexShader:f(a)+b.resolveIncludes("renderer/highlight/blur.vert"),fragmentShader:f(a)+b.resolveIncludes("renderer/highlight/blur.frag")}},attributes:d.Default3D};c.applyPass={name:"highlight-apply",shaders:function(a){return{vertexShader:g(a)+b.resolveIncludes("renderer/highlight/apply.vert"),fragmentShader:g(a)+b.resolveIncludes("renderer/highlight/apply.frag")}},
attributes:d.Default3D}});