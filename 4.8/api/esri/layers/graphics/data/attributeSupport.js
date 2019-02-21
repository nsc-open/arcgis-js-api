// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.8/esri/copyright.txt for details.
//>>built
define("require exports @dojo/shim/Set ../../../core/Error ../../../core/LRUCache ../../../core/LRUMap ../../../core/sql/WhereClause".split(" "),function(x,b,t,g,u,v,q){function k(a){if(!a)return null;if(b.invalidClauseCache.has(a))return b.invalidClauseCache.use(a);if(b.whereClausesCache.has(a))return b.whereClausesCache.get(a);var c;c=q.create(a);b.whereClausesCache.set(a,c);return c}function l(a,c,b,h){void 0===h&&(h=!0);for(var d=[],m=0;m<c.length;m++){var f=c[m];if("*"!==f&&!a.has(f))if(h){var e=
r(f);try{var n=k(e);if(!n.isStandardized())throw new g("feature-store:unsupported-query","expression is not standard",{clause:n});l(a,n.getFields(),"expression contains missing fields")}catch(p){if((e=p&&p.details)&&e.clause)throw p;e&&e.missingFields?Array.prototype.push.apply(d,e.missingFields):d.push(f)}}else d.push(f)}if(d.length)throw new g("feature-store:unsupported-query",b,{missingFields:d});}function r(a){return a.split(" as ")[0]}Object.defineProperty(b,"__esModule",{value:!0});b.invalidClauseCache=
new u(500);b.whereClausesCache=new v(50);var w=new t.default(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]);b.validateWhere=function(a,c){if(!c)return!0;var d;try{d=q.create(c),b.whereClausesCache.set(c,d)}catch(h){throw b.invalidClauseCache.insert(c,null),new g("feature-store:unsupported-query","invalid SQL expression",{where:c});}if(!d.isStandardized())throw new g("feature-store:unsupported-query","where clause is not standard",
{where:c});c=d.getFields();l(a,c,"where clause contains missing fields");return!0};b.getWhereClause=k;b.validateFields=l;b.getExpressionFromFieldName=r;b.getAliasFromFieldName=function(a){return a.split(" as ")[1]};b.hasInvalidFieldType=function(a,b){var c=!1;-1!==k(a).getFields().indexOf(a)&&(a=b.get(a),c=!w.has(a.type));return c}});