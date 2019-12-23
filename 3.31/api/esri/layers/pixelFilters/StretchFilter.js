// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/pixelFilters/StretchFilter",["dojo/_base/declare","dojo/_base/lang","../PixelBlock"],function(x,y,z){var e;return x(null,{stretchType:0,min:0,max:255,numberOfStandardDeviations:2,statistics:null,histograms:null,dra:!1,minPercent:.25,maxPercent:.5,useGamma:!1,gamma:null,raster:null,outputPixelType:"U8",computeGamma:!1,constructor:function(b){this.stretchType=b.stretchType||b.StretchType||this.stretchType;this.min=b.min||b.Min||this.min;this.max=b.max||b.Max||this.max;this.numberOfStandardDeviations=
b.numberOfStandardDeviations||b.NumberOfStandardDeviations||this.numberOfStandardDeviations;this.statistics=b.statistics||b.Statistics||this.statistics;this.dra=b.dra||b.DRA||b.dRA||this.dra;this.minPercent=b.minPercent||b.MinPercent||this.minPercent;this.maxPercent=b.maxPercent||b.MaxPercent||this.maxPercent;this.useGamma=b.useGamma||b.UseGamma||this.useGamma;this.gamma=b.gamma||b.Gamma||this.gamma;this.computeGamma=b.computeGamma||b.ComputeGamma||this.computeGamma;this.raster=b.raster||b.Raster||
this.raster;this.outputPixelType=b.outputPixelType||b.OutputPixelType||this.outputPixelType;this.raster=b.raster||b.Raster||this.raster;e=this},filter:function(b){if(void 0!==b&&null!==b&&null!==b.pixelBlock&&null!==b.pixelBlock.pixels){var c=b.pixelBlock,f=c.pixels,h=c.width*c.height,q=f.length,g;(g=6===e.stretchType||3===e.stretchType&&e.dra)&&e._calculateStatisticsHistograms(b);if(e.dra)if(g)e._statistics=c.statistics,e._histograms=c.histograms;else{var k=c.statistics;e._statistics=[];for(g=0;g<
q;g++)e._statistics[g]=[k[g].minValue,k[g].maxValue,0,0]}else e._statistics=e.statistics,e._histograms=e.histograms;e.computeGamma&&(e.gamma=e._computeGammaValues(c.pixelType),e.useGamma=!0);e._createLUT(b);if(void 0===e.LUT||null===e.LUT)return e._filterNoLUT(b);var k=e.LUT,a=e.LUTOffset,d,l;for(g=0;g<q;g++)for(l=k[g],c=0;c<h;c++)d=f[g][c],f[g][c]=l[d-a];b.pixelBlock.pixelType="U8";return b}},_calculateStatisticsHistograms:function(b){b=b.pixelBlock;var c=b.pixelType,e=b.pixels,h=b.mask,q=e.length,
g,k,a,d,l=function(a){this.min=-.5;this.max=255.5;this.size=256;y.mixin(this,a);this.counts=this.counts||new Uint32Array(this.size)},v=[],m,t,n,p,u,r;for(a=0;a<q;a++){m=new l;t=m.counts;p=e[a];if("U8"===c)if(h)for(d=0;d<b.width*b.height;d++)h[d]&&t[p[d]]++;else for(d=0;d<b.width*b.height;d++)t[p[d]]++;else{g=b.statistics[a].minValue;k=b.statistics[a].maxValue;m.min=g;m.max=k;k=(k-g)/256;n=new Uint32Array(257);if(h)for(d=0;d<b.width*b.height;d++)h[d]&&n[Math.floor((p[d]-g)/k)]++;else for(d=0;d<b.width*
b.height;d++)n[Math.floor((p[d]-g)/k)]++;for(d=0;255>d;d++)t[d]=n[d];t[255]=n[255]+n[256]}v.push(m);p=[];g=b.statistics[a].minValue;k=b.statistics[a].maxValue;for(d=r=u=n=0;d<m.size;d++)n+=t[d],u+=d*t[d];u/=n;for(d=0;d<m.size;d++)r+=t[d]*Math.pow(d-u,2);t=Math.sqrt(r/(n-1));d=(u+.5)*(m.max-m.min)/m.size+m.min;m=t*(m.max-m.min)/m.size;p.push(g);p.push(k);p.push(d);p.push(m);b.statistics[a]=p}b.histograms=v},_getCutOffPoints:function(b){b=b.pixelBlock.pixels.length;var c=[],f=[],h,q,g,k,a,d;switch(e.stretchType){case 5:for(a=
0;a<b;a++)c[a]=e._statistics[a][0],f[a]=e._statistics[a][1];break;case 3:for(a=0;a<b;a++)c[a]=e._statistics[a][2]-e.numberOfStandardDeviations*e._statistics[a][3],f[a]=e._statistics[a][2]+e.numberOfStandardDeviations*e._statistics[a][3],c[a]<e._statistics[a][0]&&(c[a]=e._statistics[a][0]),f[a]>e._statistics[a][1]&&(f[a]=e._statistics[a][1]);break;case 6:for(a=0;a<b;a++){h=e._histograms[a];k=new Uint32Array(h.size);g=h.counts;for(d=q=0;d<h.size;d++)q+=g[d],k[d]=q;g=e.minPercent*q/100;for(d=1;d<h.size;d++)if(k[d]>
g){c[a]=h.min+(h.max-h.min)/h.size*(d-.5);break}g=(1-e.maxPercent/100)*q;for(d=h.size-2;0<=d;d--)if(k[d]<g){f[a]=h.min+(h.max-h.min)/h.size*(d+.5);break}}break;default:for(a=0;a<b;a++)c[a]=0,f[a]=255}return{minCutOff:c,maxCutOff:f}},_createLUT:function(b){var c=b.pixelBlock,f=c.pixelType;if("U8"===f||"U16"===f||"S8"===f||"S16"===f){if(e._LUTSignature&&(f=e._computeLutSignature(),f.length===e._LUTSignature.length&&!f.some(function(a,b){return a!==e._LUTSignature[b]})))return;var f=c.pixels.length,
h=[],q=[],g=[],k,a,d,l=e.max,v=e.min,m=e.gamma,t=l-v,n=e._getCutOffPoints(b);b=n.minCutOff;var n=n.maxCutOff,p=0,u=256,r;"S8"===c.pixelType?p=-127:"S16"===c.pixelType&&(p=-32767);if("U16"===c.pixelType||"S16"===c.pixelType)u=65536;for(c=0;c<f;c++)h[c]=n[c]-b[c];if(e.useGamma&&null!==m&&m.length===f)for(c=0;c<f;c++)g[c]=1<m[c]?2<m[c]?6.5+Math.pow(m[c]-2,2.5):6.5+100*Math.pow(2-m[c],4):1;if(e.useGamma)for(var w,c=0;c<f;c++){r=[];for(k=0;k<u;k++)a=k+p,w=(a-b[c])/h[c],d=1,1<m[c]&&(d-=Math.pow(1/t,w*g[c])),
a<n[c]&&a>b[c]?r[k]=Math.floor(d*t*Math.pow(w,1/m[c]))+v:a>n[c]?r[k]=l:a<b[c]&&(r[k]=v);q[c]=r}else for(c=0;c<f;c++){r=[];for(k=0;k<u;k++)a=k+p,r[k]=a<b[c]?v:a>n[c]?l:Math.floor((a-b[c])/h[c]*t)+v;q[c]=r}e.LUT=q;e.LUTOffset=p;e._LUTSignature=e._computeLutSignature()}},_computeLutSignature:function(){var b=[],c,f;b.push(e.stretchType);b.push(e.min);b.push(e.max);b.push(e.numberOfStandardDeviations);if(e._statistics)for(c=0;c<e._statistics.length;c++)for(f=0;f<e._statistics[c].length;f++)b.push(e._statistics[c][f]);
b.push(e.dra?1:0);b.push(e.minPercent);b.push(e.maxPercent);if(e.gamma)for(c=0;c<e._statistics.length;c++)b.push(e.gamma[c]);b.push(e.useGamma?1:0);return b},_filterNoLUT:function(b){if(null!==b&&null!==b.pixelBlock&&null!==b.pixelBlock.pixels){var c=b.pixelBlock,f=c.pixels,h=c.mask,c=c.width*c.height,q=f.length,g=[],k=[],a,d,l,v,m,t=e.max,n=e.min,p=e.gamma,u=t-n;a=e._getCutOffPoints(b);var r=a.minCutOff,w=a.maxCutOff;for(a=0;a<q;a++)g[a]=w[a]-r[a];if(e.useGamma&&null!==p&&p.length===q)for(a=0;a<
q;a++)k[a]=1<p[a]?2<p[a]?6.5+Math.pow(p[a]-2,2.5):6.5+100*Math.pow(2-p[a],4):1;if(e.useGamma)if(void 0!==h&&null!==h)for(d=0;d<c;d++){if(h[d])for(a=0;a<q;a++)l=f[a][d],m=(l-r[a])/g[a],v=1,1<p[a]&&(v-=Math.pow(1/u,m*k[a])),l<w[a]&&l>r[a]?f[a][d]=Math.floor(v*u*Math.pow(m,1/p[a]))+n:l>w[a]?f[a][d]=t:l<r[a]&&(f[a][d]=n)}else for(d=0;d<c;d++)for(a=0;a<q;a++)l=f[a][d],m=(l-r[a])/g[a],v=1,1<p[a]&&(v-=Math.pow(1/u,m*k[a])),l<w[a]&&l>r[a]?f[a][d]=Math.floor(v*u*Math.pow(m,1/p[a]))+n:l>w[a]?f[a][d]=t:l<r[a]&&
(f[a][d]=n);else if(void 0!==h&&null!==h)for(d=0;d<c;d++){if(h[d])for(a=0;a<q;a++)l=f[a][d],l<w[a]&&l>r[a]?f[a][d]=Math.floor((l-r[a])/g[a]*u)+n:l>w[a]?f[a][d]=t:l<r[a]&&(f[a][d]=n)}else for(d=0;d<c;d++)for(a=0;a<q;a++)l=f[a][d],l<w[a]&&l>r[a]?f[a][d]=Math.floor((l-r[a])/g[a]*u)+n:l>w[a]?f[a][d]=t:l<r[a]&&(f[a][d]=n);b.pixelBlock.pixelType="U8";return b}},_computeGammaValues:function(b){var c=this._statistics.length,e,h=[],q;for(e=0;e<c;e++)q=this._statistics[e][2],"U8"!==b&&(q=255*(q-this._statistics[e][0])/
(this._statistics[e][1]-this._statistics[e][0])),h.push(this._computeGammaValue(q));return h},_computeGammaValue:function(b){if(0!==b&&!(255<b||0>b)){var c=0;0<b&&150!=b&&255>b&&(c=150>=b?45*Math.cos(.01047*b):17*Math.sin(.021*b));c=Math.log((b+c)/255);if(0!==c&&(b=Math.log(b/255)/c,!isNaN(b)))return Math.min(9.9,Math.max(.01,b))}}})});