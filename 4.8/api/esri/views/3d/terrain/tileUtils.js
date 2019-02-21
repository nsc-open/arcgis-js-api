// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/PooledArray ./UpsampleInfo ../webgl-engine/lib/gl-matrix ../webgl-engine/materials/internal/MaterialUtil".split(" "),function(x,f,z,N,A,O){function y(a,b){b(a);for(var c=0;4>c;c++){var d=a.children[c];d&&y(d,b)}}function B(a,b){for(var c=0;4>c;c++){var d=a.children[c];d&&B(d,b)}b(a)}Object.defineProperty(f,"__esModule",{value:!0});x=function(){function a(a){void 0===a&&(a=100);this.q=new z({initialSize:a});this._last=null;this.done=!0}a.prototype.reset=function(a){this.q.clear();
a&&this.q.pushAny(a);this._last=null;this.done=0===this.q.length};a.prototype.skip=function(){this._last=null;0===this.q.length&&(this.done=!0)};a.prototype.next=function(){if(this.done)return null;if(null!==this._last){var a=this._last.children;if(a[0])for(var c=4;0<=c;c--){var d=a[c];d&&this.q.push(d)}}this._last=this.q.pop();0!==this.q.length||this._last.children[0]||(this.done=!0);return this._last};return a}();f.IteratorPreorder=x;x=function(){function a(a){void 0===a&&(a=100);this.q=new z({initialSize:a});
this.done=!0}a.prototype.reset=function(a){this.q.clear();this.q.pushAny(a);for(a=0;a<this.q.length;)for(var b=this.q.data[a++],d=0;4>d;d++){var e=b.children[d];e&&this.q.push(e)}this.done=0===this.q.length};a.prototype.next=function(){var a=this.q.pop();this.done=0===this.q.length;return a};return a}();f.IteratorPostorder=x;f.lij2str=function(a,b,c){return a+"/"+b+"/"+c};f.tile2str=function(a){return a.lij[0]+"/"+a.lij[1]+"/"+a.lij[2]};f.traverseTilesPreorder=function(a,b){if(Array.isArray(a))for(var c=
0;c<a.length;c++)y(a[c],b);else y(a,b)};f.traverseTilesPostorder=function(a,b){if(Array.isArray(a))for(var c=0;c<a.length;c++)B(a[c],b);else B(a,b)};f.fallsWithinLayer=function(a,b,c){if(!b)return!1;var d=b.fullExtent,e=a.extent;if(c){if(e[0]<d.xmin||e[1]<d.ymin||e[2]>d.xmax||e[3]>d.ymax)return!1}else if(d.xmin>e[2]||d.ymin>e[3]||d.xmax<e[0]||d.ymax<e[1])return!1;a=a.parentSurface.tilingScheme.levels[a.lij[0]].scale;return 0<b.minScale&&a>1.00000001*b.minScale||0<b.maxScale&&a<.99999999*b.maxScale?
!1:!0};f.isPosWithinTile=function(a,b){a=a.extent;return b[0]>=a[0]&&b[1]>=a[1]&&b[0]<=a[2]&&b[1]<=a[3]};f.getTileNLevelsUp=function(a,b){for(;0<b;)a=a.parent,b--;return a};f.nextTileInAncestry=function(a,b){var c=a.lij[0]-b.lij[0]-1,d=a.lij[2]>>c,e=0;a.lij[1]>>c&1&&(e+=2);d&1&&(e+=1);return b.children[e]};f.computeUpsampleInfoForAncestor=function(a,b){for(var c=1,d=0,e=0;a!==b;)if(c*=.5,d*=.5,e*=.5,a.lij[2]&1&&(d+=.5),0===(a.lij[1]&1)&&(e+=.5),a=a.parent,null==a)throw Error("tile was not a descendant of ancestorTile");
a=N.Pool.acquire();a.init(b,d,e,c);return a};var C=[null];f.hasVisibleSiblings=function(a){Array.isArray(a)||(C[0]=a,a=C);for(var b=0;b<a.length;b++){var c=a[b],d=c.parent;if(d)for(var e=0;4>e;e++){var g=d.children[e];if(g&&g!==c&&g.visible)return!0}}return!1};var M=Math.pow(2,-52),g=A.vec3d.create(),P=A.vec3d.create();f.intersectSkirts=function(a,b,c,d,e,f,x,y,B){var m=f.data,I=f.offsetIdx;f=f.strideIdx;var z=a[0],C=a[1];a=a[2];var D=b[0]-z,E=b[1]-C;for(b=b[2]-a;c<d;c++){var F=x?x[c]:c,k=I+f*e[3*
F],l=I+f*e[3*F+1],p=I+f*e[3*F+2],h=m[k],r=m[k+1],n=m[k+2];2<=m[k+3]&&(A.vec3d.set3(h,r,n,g),y(g),h+=g[0],r+=g[1],n+=g[2]);var q=m[l],k=m[l+1],u=m[l+2];2<=m[l+3]&&(A.vec3d.set3(q,k,u,g),y(g),q+=g[0],k+=g[1],u+=g[2]);var l=m[p],v=m[p+1],w=m[p+2];2<=m[p+3]&&(A.vec3d.set3(l,v,w,g),y(g),l+=g[0],v+=g[1],w+=g[2]);var p=q-h,k=k-r,u=u-n,l=l-h,v=v-r,w=w-n,t=E*w-v*b,J=b*l-w*D,K=D*v-l*E,q=p*t+k*J+u*K,h=z-h,G=C-r,H=a-n,n=G*u-k*H,r=H*p-u*h,L=h*k-p*G;if(q>M){h=h*t+G*J+H*K;if(0>h||h>q)continue;t=D*n+E*r+b*L;if(0>
t||h+t>q)continue}else if(q<-M){h=h*t+G*J+H*K;if(0<h||h<q)continue;t=D*n+E*r+b*L;if(0<t||h+t<q)continue}else continue;n=(l*n+v*r+w*L)/q;0<=n&&(p=O.computeNormal(p,k,u,l,v,w,P),B(n,p,F))}}});