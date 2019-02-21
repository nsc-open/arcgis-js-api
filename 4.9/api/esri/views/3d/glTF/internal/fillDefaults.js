// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/assignHelper"],function(g,b,c){Object.defineProperty(b,"__esModule",{value:!0});var d={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},e={pbrMetallicRoughness:d,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutOff:.5,doubleSided:!1};b.material=function(a){void 0===a&&(a={});var b=c({},d,a?a.pbrMetallicRoughness:void 0);return c({},e,a,{pbrMetallicRoughness:b})};var f={magFilter:9729,minFilter:9987,wrapS:10497,wrapT:10497};b.textureSampler=
function(a){return c({},f,a)}});