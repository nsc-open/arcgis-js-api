// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/InfographicsOptions","esri/declare dojo/_base/lang esri/dijit/geoenrichment/Deferred esri/tasks/geoenrichment/studyAreaOptionsFromJson esri/tasks/geoenrichment/GeoenrichmentTask ./utils/ArrayUtil ./config ./InfographicsOptionsItem".split(" "),function(h,z,A,B,C,D,n,v){function p(a,b){if(a)for(var c in a)if(a.hasOwnProperty(c)){b[c]=[];for(var e=0;e<a[c].length;e++){var g={};w(a[c][e],g);b[c].push(g)}}}function E(a,b){a=parseFloat(a.index);b=parseFloat(b.index);return isNaN(a)&&
isNaN(b)?0:isNaN(a)?1:isNaN(b)?-1:a-b}function x(a,b){for(var c=0;c<a.length;c++){var e=a[c];if(e.type==b.type&&D.arraysEqual(e.variables,b.variables))return{report:e,index:c}}return null}function w(a,b){b.type=a.type||("OneVarMultiComparison"==a.report?"OneVar":a.report);if(a.dataCollection)if(a.vars){b.variables=[];for(var c=0;c<a.vars.length;c++)b.variables.push(a.dataCollection+"."+a.vars[c])}else b.variables=[a.dataCollection+".*"];else b.variables=a.variables;y(a.isVisible)?b.isVisible=a.isVisible:
y(a.checked)&&(b.isVisible=a.checked)}function y(a){return"boolean"==typeof a||a instanceof Boolean}h=h("esri.dijit.geoenrichment.InfographicsOptions",null,{_items:null,_loaded:null,_loadPromises:null,studyAreaOptions:null,theme:"common",constructor:function(a){this._loaded={};this._loadPromises={};this.studyAreaOptions=B(a&&(a.buffer||a.studyAreaOptions));this._items={};if(a){var b=a.reports||a.items;if(b){p(b,this._items);for(var c in b)b[c]&&b[c].length&&(this._loaded[c]=!0)}a.theme&&(this.theme=
a.theme)}},getItems:function(a){var b=new A;if(this._loaded[a])b.resolve(this._items[a]);else{if(this._loadPromises[a])return this._loadPromises[a];var c=new C(n.server);c.token=n.token;c.getDataCollections(a,null,["id","alias"]).then(z.hitch(this,this._mergeItems,a,b),function(a){b.reject(a)})}return this._loadPromises[a]=b.promise},_mergeItems:function(a,b,c){try{var e={AgePyramid:1,TapestryNEW:1,RelatedVariables:1,OneVar:1},g={TapestryNEW:"Tapestry"},d,m,k=[];for(d=0;d<c.length;d++){var h=c[d].metadata.infographics||
c[d].metadata.infographics2;if(h){var q=JSON.parse(h),l;for(l in q)if(e[l]){var r=new v(g[l]||l,[c[d].id+".*"]),t;for(t in q[l])q[l].hasOwnProperty(t)&&(r[t]=q[l][t]);(m=x(k,r))?k[m.index]=r:k.push(r)}}}var u,f=this._items[a];f||(f=[],f.push(new v("OneVar",["KeyGlobalFacts.AVGHHSZ"])),this._items[a]=f);for(d=f.length-1;0<=d;d--)if(m=x(k,f[d]))w(f[d],m.report),f[d]=m.report,k.splice(m.index,1);else{if("OneVar"==f[d].type&&1==f[d].variables.length){var n,p=f[d].variables[0];if(!u)for(u={},e=0;e<c.length;e++)for(g=
0;g<c[e].variables.length;g++)u[c[e].id+"."+c[e].variables[g].id]=c[e].variables[g];if(n=u[p]){f[d].title=n.alias;continue}}f.splice(d,1);d--}for(d=0;d<k.length;d++)f.push(k[d]);f.sort(E);this._loaded[a]=!0;delete this._loadPromises[a];b.resolve(f)}catch(F){b.reject(F)}},toJson:function(){var a={};p(this._items,a);return{studyAreaOptions:this.studyAreaOptions.toJson(),items:a,theme:this.theme}}});h.Item=v;return h});