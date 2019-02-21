// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper","./BufferView","./InterleavedLayout"],function(d,b,e,a,k){function f(a){var c=[];a.fields.forEach(function(a,l){var b=a.constructor;a=e({},a,{constructor:b.ElementType+"_"+b.ElementCount});c.push([l,a])});return{stride:a.stride,fields:c,fieldNames:a.fieldNames}}function g(a){var c=k.newLayout();c.stride=a.stride;c.fieldNames=a.fieldNames;a.fields.forEach(function(a){return c.fields.set(a[0],e({},a[1],{constructor:h.get(a[1].constructor)}))});
return c}Object.defineProperty(b,"__esModule",{value:!0});b.packInterleavedBuffer=function(a,b){b.push(a.buffer);return{buffer:a.buffer,layout:f(a.layout)}};b.unpackInterleavedBuffer=function(a){return g(a.layout).createView(a.buffer)};b.packLayout=f;b.unpackLayout=g;d=[a.BufferViewFloat,a.BufferViewVec2f,a.BufferViewVec3f,a.BufferViewVec4f,a.BufferViewMat4f,a.BufferViewFloat64,a.BufferViewVec2f64,a.BufferViewVec3f64,a.BufferViewVec4f64,a.BufferViewUint8,a.BufferViewVec2u8,a.BufferViewVec3u8,a.BufferViewVec4u8,
a.BufferViewUint16,a.BufferViewVec2u16,a.BufferViewVec3u16,a.BufferViewVec4u16,a.BufferViewUint32,a.BufferViewVec2u32,a.BufferViewVec3u32,a.BufferViewVec4u32,a.BufferViewInt8,a.BufferViewVec2i8,a.BufferViewVec3i8,a.BufferViewVec4i8,a.BufferViewInt16,a.BufferViewVec2i16,a.BufferViewVec3i16,a.BufferViewVec4i16,a.BufferViewInt32,a.BufferViewVec2i32,a.BufferViewVec3i32,a.BufferViewVec4i32];var h=new Map;d.forEach(function(a){return h.set(a.ElementType+"_"+a.ElementCount,a)})});