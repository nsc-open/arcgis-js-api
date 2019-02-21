//>>built
define("dojo/_base/kernel ../main dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/event dojo/dom-attr dojo/dom-class dojo/query dojo/keys dijit/tree/ForestStoreModel ./DataGrid ./_Layout ./_FocusManager ./_RowManager ./_EditManager ./TreeSelection ./cells/tree ./_TreeView".split(" "),function(u,v,n,m,l,w,h,x,p,y,z,r,A,B,C,D,E,F){u.experimental("dojox.grid.TreeGrid");var G=n("dojox.grid._TreeAggregator",null,{cells:[],grid:null,childFields:[],constructor:function(a){this.cells=a.cells||
[];this.childFields=a.childFields||[];this.grid=a.grid;this.store=this.grid.store},_cacheValue:function(a,b,c){return a[b]=c},clearSubtotalCache:function(){this.store&&delete this.store._cachedAggregates},cnt:function(a,b,c){var e=0,d=this.store,f=this.childFields;f[b]?(c=d.getValues(c,f[b]),a.index<=b+1?e=c.length:m.forEach(c,function(c){e+=this.getForCell(a,b+1,c,"cnt")},this)):e=1;return e},sum:function(a,b,c){var e=0,d=this.store,f=this.childFields;f[b]?m.forEach(d.getValues(c,f[b]),function(c){e+=
this.getForCell(a,b+1,c,"sum")},this):e+=d.getValue(c,a.field);return e},value:function(a,b,c){},getForCell:function(a,b,c,e){var d=this.store;if(!d||!c||!d.isItem(c))return"";var f=d._cachedAggregates=d._cachedAggregates||{},g=d.getIdentity(c),f=f[g]=f[g]||[];a.getOpenState||(a=this.grid.getCell(a.layoutIndex+b+1));g=a.index;f=f[g]=f[g]||{};e=e||(a.parentCell?a.parentCell.aggregate:"sum")||"sum";a.field==d.getLabelAttributes()[0]&&(e="cnt");f=f[e]=f[e]||[];return void 0!=f[b]?f[b]:(g=(a.parentCell&&
a.parentCell.itemAggregates?a.parentCell.itemAggregates[a.idxInParent]:"")||"")&&d.hasAttribute(c,g)?this._cacheValue(f,b,d.getValue(c,g)):g?this._cacheValue(f,b,0):this._cacheValue(f,b,this[e](a,b,c))}});u=n("dojox.grid._TreeLayout",A,{_isCollapsable:!1,_getInternalStructure:function(a){var b=this.grid,c={type:"dojox.grid._TreeView",cells:[[]]},e=[],d=0,f=function(a,b){var c=function(c,e){var d,f={};for(d in c)f[d]=c[d];return f=l.mixin(f,{level:b,idxInParent:0<b?e:-1,parentCell:0<b?a:null})},q=
[];m.forEach(a.children,function(a,d){"children"in a?(e.push(a.field),q[q.length-1].isCollapsable=!0,a.level=b,q=q.concat(f(a,b+1))):q.push(c(a,d))});d=Math.max(d,b);return q};c.cells[0]=f({children:a[0].cells[0],itemAggregates:[]},0);b.aggregator=new G({cells:c.cells[0],grid:b,childFields:e});b.scroller&&b.defaultOpen&&(b.scroller.defaultRowHeight=b.scroller._origDefaultRowHeight*(2*d+1));return[c]},setStructure:function(a){var b=a,c=this.grid;c&&c.treeModel&&!m.every(b,function(a){return"cells"in
a})&&(b=arguments[0]=[{cells:[b]}]);1==b.length&&1==b[0].cells.length&&(c&&c.treeModel?(b[0].type="dojox.grid._TreeView",this._isCollapsable=!0,b[0].cells[0][this.grid.treeModel?this.grid.expandoCell:0].isCollapsable=!0):1===m.filter(b[0].cells[0],function(a){return"children"in a}).length&&(this._isCollapsable=!0));!this._isCollapsable||c&&c.treeModel||(arguments[0]=this._getInternalStructure(b));this.inherited(arguments)},addCellDef:function(a,b,c){var e=this.inherited(arguments);return l.mixin(e,
F)}});var k=n("dojox.grid.TreePath",null,{level:0,_str:"",_arr:null,grid:null,store:null,cell:null,constructor:function(a,b){l.isString(a)?(this._str=a,this._arr=m.map(a.split("/"),function(a){return parseInt(a,10)})):l.isArray(a)?(this._str=a.join("/"),this._arr=a.slice(0)):"number"==typeof a?(this._str=String(a),this._arr=[a]):(this._str=a._str,this._arr=a._arr.slice(0));this.level=this._arr.length-1;this.grid=b;this.store=this.grid.store;this.cell=b.treeModel?b.layout.cells[b.expandoCell]:b.layout.cells[this.level]},
item:function(){this._item||(this._item=this.grid.getItem(this._arr));return this._item},compare:function(a){if(l.isString(a)||l.isArray(a)){if(this._str==a||a.join&&this._str==a.join("/"))return 0;a=new k(a,this.grid)}else if(a instanceof k&&this._str==a._str)return 0;for(var b=0,c=this._arr.length<a._arr.length?this._arr.length:a._arr.length;b<c;b++){if(this._arr[b]<a._arr[b])return-1;if(this._arr[b]>a._arr[b])return 1}return this._arr.length<a._arr.length?-1:this._arr.length>a._arr.length?1:0},
isOpen:function(){return this.cell.openStates&&this.cell.getOpenState(this.item())},previous:function(){var a=this._arr.slice(0);if("0"==this._str)return null;var b=a.length-1;if(0===a[b])return a.pop(),new k(a,this.grid);a[b]--;return(new k(a,this.grid)).lastChild(!0)},next:function(){var a=this._arr.slice(0);if(this.isOpen())a.push(0);else{a[a.length-1]++;for(var b=this.level;0<=b;b--){var c=this.grid.getItem(a.slice(0,b+1));if(0<b)c||(a.pop(),a[b-1]++);else if(!c)return null}}return new k(a,this.grid)},
children:function(a){if(!this.isOpen()&&!a)return null;var b=[];if(a=this.grid.treeModel){var c=this.item(),e=a.store;if(!a.mayHaveChildren(c))return null;m.forEach(a.childrenAttrs,function(a){b=b.concat(e.getValues(c,a))})}else if(b=this.store.getValues(this.item(),this.grid.layout.cells[this.cell.level+1].parentCell.field),1<b.length&&this.grid.sortChildItems&&(a=this.grid.getSortProps())&&a.length){var d=a[0].attribute,f=this.grid;if(d&&b[0][d]){var g=!!a[0].descending,b=b.slice(0);b.sort(function(a,
b){return f._childItemSorter(a,b,d,g)})}}return b},childPaths:function(){var a=this.children();return a?m.map(a,function(a,c){return new k(this._str+"/"+c,this.grid)},this):[]},parent:function(){return 0===this.level?null:new k(this._arr.slice(0,this.level),this.grid)},lastChild:function(a){var b=this.children();if(!b||!b.length)return this;b=new k(this._str+"/"+String(b.length-1),this.grid);return a?b.lastChild(!0):b},toString:function(){return this._str}}),H=n("dojox.grid._TreeFocusManager",B,{setFocusCell:function(a,
b){a&&a.getNode(b)&&this.inherited(arguments)},isLastFocusCell:function(){if(this.cell&&this.cell.index==this.grid.layout.cellCount-1){var a=new k(this.grid.rowCount-1,this.grid),a=a.lastChild(!0);return this.rowIndex==a._str}return!1},next:function(){if(this.cell){var a=this.cell.index+1,b=this.grid.layout.cellCount-1,c=new k(this.rowIndex,this.grid);a>b&&((b=c.next())?(a=0,c=b):a--);if(this.grid.edit.isEditing()&&(b=this.grid.getCell(a),!this.isLastFocusCell()&&!b.editable)){this._focusifyCellNode(!1);
this.cell=b;this.rowIndex=c._str;this.next();return}this.setFocusIndex(c._str,a)}},previous:function(){if(this.cell){var a=(this.cell.index||0)-1,b=new k(this.rowIndex||0,this.grid);if(0>a){var c=b.previous();c?(a=this.grid.layout.cellCount-1,b=c):a=0}if(this.grid.edit.isEditing()&&(c=this.grid.getCell(a),!this.isFirstFocusCell()&&!c.editable)){this._focusifyCellNode(!1);this.cell=c;this.rowIndex=b._str;this.previous();return}this.setFocusIndex(b._str,a)}},move:function(a,b){if(this.isNavHeader())this.inherited(arguments);
else if(this.cell){var c=this.grid.scroller,e=this.rowIndex,d=new k(this.rowIndex,this.grid);if(a){var f;0<a?(d=d.next(),f=d._arr[0],f>c.getLastPageRow(c.page)&&this.grid.setScrollTop(this.grid.scrollTop+c.findScrollTop(f)-c.findScrollTop(e))):0>a&&(d=d.previous(),f=d._arr[0],f<=c.getPageRow(c.page)&&this.grid.setScrollTop(this.grid.scrollTop-c.findScrollTop(e)-c.findScrollTop(f)))}c=this.grid.layout.cellCount-1;f=this.cell.index;for(var g=Math.min(c,Math.max(0,f+b)),t=this.grid.getCell(g),h=0>b?
-1:1;0<=g&&g<c&&t&&!0===t.hidden;)g+=h,t=this.grid.getCell(g);t&&!0!==t.hidden||(g=f);a&&this.grid.updateRow(e);this.setFocusIndex(d._str,g)}}});n=n("dojox.grid.TreeGrid",r,{defaultOpen:!0,sortChildItems:!1,openAtLevels:[],treeModel:null,expandoCell:0,aggregator:null,_layoutClass:u,createSelection:function(){this.selection=new E(this)},_childItemSorter:function(a,b,c,e){a=this.store.getValue(a,c);b=this.store.getValue(b,c);return a!=b?a<b==e?1:-1:0},_onNew:function(a,b){if(b&&b.item){var c=this.getItemIndex(b.item);
"string"==typeof c?this.updateRow(c.split("/")[0]):-1<c&&this.updateRow(c)}else this.inherited(arguments)},_onSet:function(a,b,c,e){this._checkUpdateStatus();this.aggregator&&this.aggregator.clearSubtotalCache();a=this.getItemIndex(a);"string"==typeof a?this.updateRow(a.split("/")[0]):-1<a&&this.updateRow(a)},_onDelete:function(a){this._cleanupExpandoCache(this._getItemIndex(a,!0),this.store.getIdentity(a),a);this.inherited(arguments)},_clearData:function(){this.inherited(arguments);this._by_idty_paths=
{}},_cleanupExpandoCache:function(a,b,c){},_addItem:function(a,b,c,e){!e&&this.model&&-1==m.indexOf(this.model.root.children,a)&&(this.model.root.children[b]=a);this.inherited(arguments)},getItem:function(a){var b=l.isArray(a);l.isString(a)&&a.indexOf("/")&&(a=a.split("/"),b=!0);b&&1==a.length&&(a=a[0],b=!1);if(!b)return r.prototype.getItem.call(this,a);var b=this.store,c=r.prototype.getItem.call(this,a[0]),e,d,f;if(this.aggregator)for(e=this.aggregator.childFields||[],d=0;d<a.length-1&&c;d++)c=e[d]?
(b.getValues(c,e[d])||[])[a[d+1]]:null;else if(this.treeModel&&(e=this.treeModel.childrenAttrs||[],c))for(d=1,il=a.length;d<il&&c;d++)for(f=0,jl=e.length;f<jl&&!(c=e[f]?(b.getValues(c,e[f])||[])[a[d]]:null);f++);return c||null},_getItemIndex:function(a,b){if(!b&&!this.store.isItem(a))return-1;var c=this.inherited(arguments);return-1==c?(c=this.store.getIdentity(a),this._by_idty_paths[c]||-1):c},postMixInProperties:function(){!this.treeModel||"defaultOpen"in this.params||(this.defaultOpen=!1);var a=
this.defaultOpen;this.openAtLevels=m.map(this.openAtLevels,function(b){if("string"==typeof b)switch(b.toLowerCase()){case "true":return!0;case "false":return!1;default:return b=parseInt(b,10),isNaN(b)?a:b}return b});this._by_idty_paths={};this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.treeModel&&this._setModel(this.treeModel)},setModel:function(a){this._setModel(a);this._refresh(!0)},_setModel:function(a){if(a&&!(z&&a instanceof z))throw Error("dojox.grid.TreeGrid: treeModel must be an instance of dijit.tree.ForestStoreModel");
this.treeModel=a;x.toggle(this.domNode,"dojoxGridTreeModel",this.treeModel?!0:!1);this._setQuery(a?a.query:null);this._setStore(a?a.store:null)},createScroller:function(){this.inherited(arguments);this.scroller._origDefaultRowHeight=this.scroller.defaultRowHeight},createManagers:function(){this.rows=new C(this);this.focus=new H(this);this.edit=new D(this)},_setStore:function(a){this.inherited(arguments);this.treeModel&&!this.treeModel.root.children&&(this.treeModel.root.children=[]);this.aggregator&&
(this.aggregator.store=a)},getDefaultOpenState:function(a,b){var c,e=this.store;if(this.treeModel||!(a&&e&&e.isItem(b)&&(c=this.aggregator.childFields[a.level])))return this.defaultOpen;if(this.openAtLevels.length>a.level){a=this.openAtLevels[a.level];if("boolean"==typeof a)return a;if("number"==typeof a)return e.getValues(b,c).length<=a}return this.defaultOpen},onStyleRow:function(a){if(this.layout._isCollapsable){var b=h.get(a.node,"dojoxTreeGridBaseClasses");b&&(a.customClasses=b);var b=a,c=b.node.tagName.toLowerCase();
b.customClasses+=(b.odd?" dojoxGridRowOdd":"")+(b.selected&&"tr"==c?" dojoxGridRowSelected":"")+(b.over&&"tr"==c?" dojoxGridRowOver":"");this.focus.styleRow(b);this.edit.styleRow(b)}else this.inherited(arguments)},styleRowNode:function(a,b){b&&("div"==b.tagName.toLowerCase()&&this.aggregator&&p("tr[dojoxTreeGridPath]",b).forEach(function(a){this.rows.styleRowNode(h.get(a,"dojoxTreeGridPath"),a)},this),this.rows.styleRowNode(a,b))},onCanSelect:function(a){var b=p("tr[dojoxTreeGridPath\x3d'"+a+"']",
this.domNode);return b.length&&x.contains(b[0],"dojoxGridSummaryRow")?!1:this.inherited(arguments)},onKeyDown:function(a){if(!a.altKey&&!a.metaKey)switch(a.keyCode){case y.UP_ARROW:this.edit.isEditing()||"0"==this.focus.rowIndex||(w.stop(a),this.focus.move(-1,0));break;case y.DOWN_ARROW:var b=new k(this.focus.rowIndex,this),c=new k(this.rowCount-1,this),c=c.lastChild(!0);this.edit.isEditing()||b.toString()==c.toString()||(w.stop(a),this.focus.move(1,0));break;default:this.inherited(arguments)}},canEdit:function(a,
b){return a.getNode(b)&&this._canEdit},doApplyCellEdit:function(a,b,c){var e=this.getItem(b),d=this.store.getValue(e,c);"number"==typeof d?a=isNaN(a)?a:parseFloat(a):"boolean"==typeof d?a="true"==a?!0:"false"==a?!1:a:d instanceof Date&&(d=new Date(a),a=isNaN(d.getTime())?a:d);this.store.setValue(e,c,a);this.onApplyCellEdit(a,b,c)}});n.markupFactory=function(a,b,c,e){var d=function(a){a=h.get(a,"width")||"auto";"auto"!=a&&"em"!=a.slice(-2)&&"%"!=a.slice(-1)&&(a=parseInt(a,10)+"px");return a},f=function(a){var b;
return"table"==a.nodeName.toLowerCase()&&0===p("\x3e colgroup",a).length&&1==(b=p("\x3e thead \x3e tr",a)).length?p("\x3e th",b[0]).map(function(a){var b={type:l.trim(h.get(a,"cellType")||""),field:l.trim(h.get(a,"field")||"")};b.type&&(b.type=l.getObject(b.type));var c=p("\x3e table",a)[0];c?(b.name="",b.children=f(c),h.has(a,"itemAggregates")?b.itemAggregates=m.map(h.get(a,"itemAggregates").split(","),function(a){return l.trim(a)}):b.itemAggregates=[],h.has(a,"aggregate")&&(b.aggregate=h.get(a,
"aggregate")),b.type=b.type||v.grid.cells.SubtableCell):(b.name=l.trim(h.get(a,"name")||a.innerHTML),h.has(a,"width")&&(b.width=d(a)),h.has(a,"relWidth")&&(b.relWidth=window.parseInt(h.get(a,"relWidth"),10)),h.has(a,"hidden")&&(b.hidden="true"==h.get(a,"hidden")),b.field=b.field||b.name,r.cell_markupFactory(e,a,b),b.type=b.type||v.grid.cells.Cell);b.type&&b.type.markupFactory&&b.type.markupFactory(a,b);return b}):[]};if(!a.structure){var g=f(b);g.length&&(a.structure=[{__span:Infinity,cells:[g]}])}return r.markupFactory(a,
b,c,e)};return n});