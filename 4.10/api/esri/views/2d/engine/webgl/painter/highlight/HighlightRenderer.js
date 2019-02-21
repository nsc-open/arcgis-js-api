// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../shaders/HighlightPrograms ../../../../../webgl/BufferObject ../../../../../webgl/programUtils ../../../../../webgl/Texture ../../../../../webgl/VertexArrayObject".split(" "),function(x,y,p,r,q,t,u){var m=[void 0,void 0,void 0,1],k=[3,4],v=[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1],w=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];return function(){function d(){this._height=this._width=void 0;this._highlightOptions={fillColor:[.2,.6,.9,.75],outlineColor:[.2,.6,.9,.9],outlinePosition:0,outlineWidth:3.4,
innerHaloWidth:2,outerHaloWidth:3.3};this._resources=null}d.prototype.dispose=function(){this._resources&&(this._resources.quadGeometry.dispose(),this._resources.quadVAO.dispose(),this._resources.highlightProgram.dispose(),this._resources.blurProgram.dispose(),this._resources.shadeTex.dispose(),this._resources=null)};d.prototype.preBlur=function(a,h){a.bindTexture(h,k[0]);a.bindProgram(this._resources.blurProgram);this._resources.blurProgram.setUniform4fv("u_direction",[1,0,1/this._width,0]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",
v);a.bindVAO(this._resources.quadVAO);a.drawArrays(5,0,4);a.bindVAO()};d.prototype.finalBlur=function(a,h){a.bindTexture(h,k[0]);a.bindProgram(this._resources.blurProgram);this._resources.blurProgram.setUniform4fv("u_direction",[0,1,0,1/this._height]);this._resources.blurProgram.setUniformMatrix4fv("u_channelSelector",w);a.bindVAO(this._resources.quadVAO);a.drawArrays(5,0,4);a.bindVAO()};d.prototype.renderHighlight=function(a,h){a.bindTexture(h,k[0]);a.bindTexture(this._resources.shadeTex,k[1]);a.bindProgram(this._resources.highlightProgram);
a.bindVAO(this._resources.quadVAO);a.drawArrays(5,0,4);a.bindVAO()};d.prototype._initialize=function(a,h,e){this._width=h;this._height=e;h=new r(a,34962,35044,(new Int8Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1])).buffer);e=new u(a,{a_position:0,a_texcoord:1},{geometry:[{name:"a_position",count:2,type:5120,offset:0,stride:4,normalized:!1},{name:"a_texcoord",count:2,type:5121,offset:2,stride:4,normalized:!1}]},{geometry:h});var d=q.createProgram(a,p.highlight),n=q.createProgram(a,p.blur);d.setUniform1i("u_texture",
k[0]);d.setUniform1i("u_shade",k[1]);d.setUniform4fv("u_sigmas",m);n.setUniform1i("u_texture",k[0]);n.setUniform4fv("u_sigmas",m);a=new t(a,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:256,height:1,samplingMode:9728});this._resources={quadGeometry:h,quadVAO:e,highlightProgram:d,blurProgram:n,shadeTex:a}};d.prototype.setHighlightOptions=function(a){function h(a,c,b){f[0]=(1-b)*a[0]+b*c[0];f[1]=(1-b)*a[1]+b*c[1];f[2]=(1-b)*a[2]+b*c[2];f[3]=(1-b)*a[3]+b*c[3]}this._highlightOptions=
a;if(this._resources){var e=a.outlinePosition-a.outlineWidth/2-a.outerHaloWidth,d=a.outlinePosition-a.outlineWidth/2,k=a.outlinePosition+a.outlineWidth/2,l=a.outlinePosition+a.outlineWidth/2+a.innerHaloWidth,b=Math.sqrt(Math.PI/2)*m[3],c=Math.abs(e)>b?Math.round(10*(Math.abs(e)-b))/10:0,b=Math.abs(l)>b?Math.round(10*(Math.abs(l)-b))/10:0;c&&!b?console.warn("The outer rim of the highlight is "+c+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):
!c&&b?console.warn("The inner rim of the highlight is "+b+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):c&&b&&console.warn("The highlight is "+Math.max(c,b)+"px away from the edge of the feature; consider reducing some width values.");for(var c=new Uint8Array(1024),f=[void 0,void 0,void 0,void 0],g=0;256>g;++g)b=e+g/255*(l-e),b<e?(c[4*g+0]=0,c[4*g+1]=0,c[4*g+2]=0,c[4*g+3]=0):b<d?h([0,0,0,0],a.outlineColor,
(b-e)/(d-e)):b<k?(f[0]=a.outlineColor[0],f[1]=a.outlineColor[1],f[2]=a.outlineColor[2],f[3]=a.outlineColor[3]):b<l?h(a.outlineColor,a.fillColor,(b-k)/(l-k)):(c[4*g+0]=a.fillColor[0],c[4*g+1]=a.fillColor[1],c[4*g+2]=a.fillColor[2],c[4*g+3]=a.fillColor[3]),c[4*g+0]=255*f[0]*f[3],c[4*g+1]=255*f[1]*f[3],c[4*g+2]=255*f[2]*f[3],c[4*g+3]=255*f[3];this._resources.highlightProgram.setUniform2fv("u_minMaxDistance",[e,l]);this._resources.shadeTex.updateData(0,0,0,256,1,c)}};d.prototype.setup=function(a,d,e){this._resources?
(this._width=d,this._height=e):(this._initialize(a,d,e),this.setHighlightOptions(this._highlightOptions))};return d}()});