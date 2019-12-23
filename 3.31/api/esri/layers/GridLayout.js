// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/GridLayout","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/has ../kernel ../geometry/Point ../geometry/Extent ../geometry/Polyline ../geometry/Polygon ../geometry/normalizeUtils ../srUtils".split(" "),function(u,v,q,w,x,y,p,z,A,B,C){var n=u(null,{declaredClass:"esri.layers._GridLayout",constructor:function(a,b,c,e){this.origin=a;this.cellWidth=b.width;this.cellHeight=b.height;this.mapWidth=c.width;this.mapHeight=c.height;this.srInfo=e},setResolution:function(a){this.resolution=
(a.xmax-a.xmin)/this.mapWidth;this.srInfo&&(a=Math.round(Math.round(2*this.srInfo.valid[1]/this.resolution)/this.cellWidth),this._frameStats=[a,0,a-1])},setMapState:function(a,b,c){this.mapWidth=b;this.mapHeight=c;this.setResolution(a)},getCellCoordinates:function(a){var b=this.resolution,c=this.origin;return{row:Math.floor((c.y-a.y)/(this.cellHeight*b)),col:Math.floor((a.x-c.x)/(this.cellWidth*b))}},normalize:function(a){var b=this._frameStats;if(b){var c=b[0],e=b[1],b=b[2];a<e?(a%=c,a=a<e?a+c:a):
a>b&&(a%=c)}return a},intersects:function(a,b){var c=this.srInfo;return c?q.some(b._getParts(c),function(b){return a.intersects(b.extent)}):a.intersects(b)},getCellExtent:function(a,b){var c=this.resolution,e=this.origin,h=this.cellWidth,k=this.cellHeight;return new p(b*h*c+e.x,e.y-(a+1)*k*c,(b+1)*h*c+e.x,e.y-a*k*c,C.createSpatialReference(e.spatialReference.toJson()))},getLatticeID:function(a){var b=this.getCellCoordinates({x:a.xmin,y:a.ymax}),c=this.getCellCoordinates({x:a.xmax,y:a.ymin});a=b.row;
var e=c.row,b=this.normalize(b.col),c=this.normalize(c.col);return a+"_"+e+"_"+b+"_"+c},sorter:function(a,b){return a<b?-1:1},getCellsInExtent:function(a,b){var c=this.getCellCoordinates({x:a.xmin,y:a.ymax}),e=this.getCellCoordinates({x:a.xmax,y:a.ymin}),h=c.row,k=e.row,c=c.col,e=e.col,m=[],d,l,r,f=[],g=[],n,p,t=[];for(d=h;d<=k;d++)for(l=c;l<=e;l++)r=this.normalize(l),a=this.getCellExtent(d,r),q.some(m,function(a){return a.row===d&&a.col===r})||m.push({row:d,col:r,extent:a,resolution:this.resolution}),
b&&(f.push(a.xmin,a.xmax),g.push(a.ymin,a.ymax));c=this.normalize(c);e=this.normalize(e);f.sort(this.sorter);g.sort(this.sorter);b=f.length;for(d=b-1;0<=d;d--)d<b-1&&f[d]===f[d+1]&&f.splice(d,1);b=g.length;for(d=b-1;0<=d;d--)d<b-1&&g[d]===g[d+1]&&g.splice(d,1);if(f.length&&g.length){a=f[0];l=f[f.length-1];n=g[0];p=g[g.length-1];b=f.length;for(d=0;d<b;d++)t.push([[f[d],p],[f[d],n]]);b=g.length;for(d=0;d<b;d++)t.push([[a,g[d]],[l,g[d]]]);f=new z({paths:t,spatialReference:this.origin.spatialReference.toJson()});
m.push({latticeID:h+"_"+k+"_"+c+"_"+e,lattice:f,resolution:this.resolution})}return{minRow:h,maxRow:k,minCol:c,maxCol:e,topRow:h,bottomRow:k,leftCol:c,rightCol:e,cells:m}},_findCell:function(a,b,c){var e;q.some(a,function(a){a.row===b&&a.col===c&&(e=a);return!!e});return e},getExtentOfIntersectingCells:function(a){var b=this.getCellsInExtent(a),c=b&&b.cells;if(c&&c.length){var e=b.topRow,h=b.leftCol,k=0;q.forEach(c,function(a){a.row===e&&k++});var m=this._findCell(c,e,h).extent,d=this.srInfo,l;!d||
k!==this._frameStats[0]&&h!==b.rightCol?(l=m.xmin,d=l+k*m.getWidth()):(l=d.valid[0],d=d.valid[1]);b=this._findCell(c,b.bottomRow,h).extent.ymin;(a=(new p(l,b,d,m.ymax,a.spatialReference))._normalize(!1,!1))&&a.rings&&(a=new A(a),a=B.getDenormalizedExtent(a));return a}}});n.createFromFeatureLayer=function(a){var b=a.layer;a=b.getMap()||a.map;var c=b._srInfo;(b=a&&a.loaded?new n(new y(c?c.valid[0]:a.extent.xmin,c?c.valid[1]:a.extent.ymax,a.spatialReference),{width:b._tileWidth,height:b._tileHeight},
{width:a.width,height:a.height},c):null)&&b.setResolution(a.extent);return b};w("extend-esri")&&v.setObject("layers._GridLayout",n,x);return n});