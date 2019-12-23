// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/renderers/colorRampGenerator",["dojo/_base/declare","dojo/_base/lang","../renderers/colorUtils"],function(r,q,p){return{createAlgorithmicColorRamp:function(b,n){if(!b)return null;var c=b.fromColor,a=b.toColor;if(!c||!a)return null;void 0===c.r&&3<=c.length&&(c={r:c[0],g:c[1],b:c[2]});void 0===a.r&&3<=a.length&&(a={r:a[0],g:a[1],b:a[2]});var d=b.size||256;b=b.algorithm||"cie-lab";var f;if(-1<b.toLowerCase().indexOf("hsv")){f=p.toHSV(c);var a=p.toHSV(a),d=d||256,l=0===f.s,m=0===a.s,c=f.h;
b=a.h;l&&!m?c=f.h=b:m&&!l&&(b=a.h=c);l=Math.abs(b-c);180>l?b=(b-c)/(d-1):(l=360-l,b=c>b?l/(d-1):-l/(d-1));var l=(a.s-f.s)/(d-1),m=(a.v-f.v)/(d-1),h=f.s;f=f.v;var k,g,e=new Uint8Array(4*d);for(k=0;k<d-1;k++)g=p.toRGB({h:c,s:h,v:f}),e[4*k]=g.r,e[4*k+1]=g.g,e[4*k+2]=g.b,e[4*k+3]=255,c+=b,h+=l,f+=m,360<c?c-=360:0>c&&(c+=360);g=p.toRGB(a);e[4*(d-1)]=g.r;e[4*(d-1)+1]=g.g;e[4*(d-1)+2]=g.b;e[4*(d-1)+3]=255;f=e}else if(-1<b.toLowerCase().indexOf("lch")){h=p.toLCH(c);a=p.toLCH(a);d=d||256;f=(a.l-h.l)/(d-1);
c=(a.c-h.c)/(d-1);b=(a.h-h.h)/(d-1);l=h.l;m=h.c;h=h.h;e=new Uint8Array(4*d);for(k=0;k<d-1;k++)g=p.toRGB({l:l,c:m,h:h}),e[4*k]=g.r,e[4*k+1]=g.g,e[4*k+2]=g.b,e[4*k+3]=255,l+=f,m+=c,h+=b;g=p.toRGB(a);e[4*(d-1)]=g.r;e[4*(d-1)+1]=g.g;e[4*(d-1)+2]=g.b;e[4*(d-1)+3]=255;f=e}else if(-1<b.toLowerCase().indexOf("lab")){h=p.toLAB(c);a=p.toLAB(a);d=d||256;f=(a.l-h.l)/(d-1);c=(a.a-h.a)/(d-1);b=(a.b-h.b)/(d-1);l=h.l;m=h.a;h=h.b;e=new Uint8Array(4*d);for(k=0;k<d-1;k++)g=p.toRGB({l:l,a:m,b:h}),e[4*k]=g.r,e[4*k+1]=
g.g,e[4*k+2]=g.b,e[4*k+3]=255,l+=f,m+=c,h+=b;g=p.toRGB(a);e[4*(d-1)]=g.r;e[4*(d-1)+1]=g.g;e[4*(d-1)+2]=g.b;e[4*(d-1)+3]=255;f=e}if(n&&!1===n.flattened)for(n=f,f=[],a=0;a<f/4;a++)f[a]=n.slice(4*a,4*a+4);return f},createMultiPartColorRamp:function(b,n){if(!b)return null;n=n&&q.clone(n)||{flattened:!0};var c=b.colorRamps;if(!c||0===c.length)return null;var a=b.size||256;b=Math.max(Math.floor(a/c.length),3);var d=Math.max(b,a-(c.length-1)*b),f=!1!==n.flattened;n.flattened=!0;for(var a=(c.length-1)*b+
d,l,m=new Uint8Array(4*a),a=0;a<c.length;a++)l={fromColor:c[a].fromColor,toColor:c[a].toColor,size:a===c.length-1?d:b},m instanceof Array?m.concat(this.createAlgorithmicColorRamp(l,n)):m.set(this.createAlgorithmicColorRamp(l,n),b*a*4);if(!f)for(n=m,m=[],a=0;a<m/4;a++)m[a]=n.slice(4*a,4*a+4);return m},createRandomColorRamp:function(b){b=b||{};var n=b.size||256,c=!1===b.flattened,a;a=c?new Uint8Array(4*n):[];for(b=0;b<n;b++)c?(a[4*b]=Math.round(255*Math.random()),a[4*b+1]=Math.round(255*Math.random()),
a[4*b+2]=Math.round(255*Math.random()),a[4*b+3]=255):a[b]=[Math.round(255*Math.random()),Math.round(255*Math.random()),Math.round(255*Math.random()),255];return a}}});