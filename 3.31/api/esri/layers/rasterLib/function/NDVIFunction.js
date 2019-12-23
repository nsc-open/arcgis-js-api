// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/rasterLib/function/NDVIFunction","dojo/_base/declare dojo/_base/lang ./RasterFunctionX ../../PixelBlock ./pixelShaders ./RasterFunctionWebGLMixin ./rasterIndex".split(" "),function(h,k,l,q,m,n,p){return h([l,n],{declaredClass:"esri.layers.rasterLib.function.NDVIFunction",functionName:"NDVI",supportWebGL:!0,support2D:!0,constructor:function(a){this.functionArguments=this.mixinIgnoreCase({visibleBandID:1,infraredBandID:2,scaled:!0,raster:null},a)},bind:function(a){a=this.getSourceRasterInfo(a);
if(!(a.raster&&1<a.raster.bandCount))return Error("The raster input to ndvi function is invalid. It requires more than 1 band.");this.rasterInfo=k.mixin(a.raster,{bandCount:1,pixelType:this._calculatePixelType(this.pixelType,this.scaled?"U8":"F32"),statistics:this.scaled?[{min:0,max:200}]:[{min:-1,max:1}],histograms:null});this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{};this.rasterInfo.keyProperties.DataType="Generic";return!0},read2D:function(a){this._performance.start();a=a.raster;
var c=p.calculate(a.pixelBlock,{bandIndexes:[this.functionArguments.infraredBandID+1,this.functionArguments.visibleBandID+1].join(" "),method:1}),d,e,f,g,b;if(this.functionArguments.scaled){d=c.pixels[0];f=c.mask;g=d.length;e=new Uint8Array(g);if(null==f)for(b=0;b<g;b++)e[b]=100*d[b]+100&255;else for(b=0;b<g;b++)f[b]&&(e[b]=100*d[b]+100&255);c.pixels[0]=e;c.pixelType="U8"}this._addPerformanceMetric(this._performance.elapsed());"Unknown"!==this.pixelType&&(c.pixelType=this.pixelType);return{extent:a.extent,
pixelBlock:c}},readGL:function(a){this._performance.start();this._initializeProgram({fragment:m.ndvi,fragmentName:"NDVI"});var c=this.functionArguments.visibleBandID,d=this.functionArguments.infraredBandID,e=this.functionArguments.scaled||!1;this._alterBand=2<Math.max(d,c)?!0:!1;a=this._setupTextureData(a.raster,{bandIDs:this._alterBand?{bandIDs:[d,c,d]}:null});var f=this.gl,g=this.bindFrameBuffer();f.bindTexture(f.TEXTURE_2D,a.texture);this._alterBand?this._setUniforms({u_bandId_nir:0,u_bandId_red:1,
u_scaled:e}):this._setUniforms({u_bandId_nir:d,u_bandId_red:c,u_scaled:e});this._drawGL();this._addPerformanceMetric(this._performance.elapsed());return{extent:a.extent,texture:g.texture}}})});