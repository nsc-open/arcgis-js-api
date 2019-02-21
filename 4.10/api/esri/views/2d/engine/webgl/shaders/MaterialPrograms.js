// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver","../../../../webgl/programUtils"],function(f,d,c,e){Object.defineProperty(d,"__esModule",{value:!0});var b=function(a){return e.glslifyDefineMap({ID:a.id,HIGHLIGHT:a.highlight,SDF:a.isSDF,VV_SIZE_MIN_MAX_VALUE:a.vvSizeMinMaxValue,VV_SIZE_SCALE_STOPS:a.vvSizeScaleStops,VV_SIZE_FIELD_STOPS:a.vvSizeFieldStops,VV_SIZE_UNIT_VALUE:a.vvSizeUnitValue,VV_COLOR:a.vvColor,VV_ROTATION:a.vvRotation,VV_OPACITY:a.vvOpacity,VERTEX_VISIBILITY:a.visibility,PATTERN:a.pattern})};
b;d.fill={name:"fill",shaders:function(a){return{vertexShader:b(a)+c.resolveIncludes("materials/fill/fill.vert"),fragmentShader:b(a)+c.resolveIncludes("materials/fill/fill.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_tlbr:3,a_aux1:4,a_aux2:5,a_vv:6,a_visible:7}};d.icon={name:"icon",shaders:function(a){return{vertexShader:b(a)+c.resolveIncludes("materials/icon/icon.vert"),fragmentShader:b(a)+c.resolveIncludes("materials/icon/icon.frag")}},attributes:{a_pos:0,a_vertexOffsetAndTex:1,a_id:2,a_color:3,
a_outlineColor:4,a_sizeAndOutlineWidth:5,a_vv:6,a_visible:8}};d.label={name:"label",shaders:function(a){return{vertexShader:b(a)+c.resolveIncludes("materials/label/label.vert"),fragmentShader:b(a)+c.resolveIncludes("materials/label/label.frag")}},attributes:{a_pos:0,a_color:1,a_vertexOffset:2,a_texAndSize:3,a_refSymbolAndPlacementOffset:4,a_vvSize:5,a_visible:6,a_visibilityRange:7}};d.line={name:"line",shaders:function(a){return{vertexShader:b(a)+c.resolveIncludes("materials/line/line.vert"),fragmentShader:b(a)+
c.resolveIncludes("materials/line/line.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_offsetAndNormal:3,a_accumulatedDistanceAndHalfWidth:4,a_tlbr:5,a_segmentDirection:6,a_vv:7,a_visible:8}};d.text={name:"text",shaders:function(a){return{vertexShader:b(a)+c.resolveIncludes("materials/text/text.vert"),fragmentShader:b(a)+c.resolveIncludes("materials/text/text.frag")}},attributes:{a_pos:0,a_id:1,a_color:2,a_vertexOffset:3,a_texFontSize:4,a_visible:5,a_vv:6}}});