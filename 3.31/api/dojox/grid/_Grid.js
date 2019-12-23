//>>built
require({cache:{"url:dojox/grid/resources/_Grid.html":'\x3cdiv hidefocus\x3d"hidefocus" role\x3d"grid" dojoAttachEvent\x3d"onmouseout:_mouseOut"\x3e\r\n\t\x3cdiv class\x3d"dojoxGridMasterHeader" dojoAttachPoint\x3d"viewsHeaderNode" role\x3d"presentation"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridMasterView" dojoAttachPoint\x3d"viewsNode" role\x3d"presentation"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"dojoxGridMasterMessages" style\x3d"display: none;" dojoAttachPoint\x3d"messagesNode"\x3e\x3c/div\x3e\r\n\t\x3cspan dojoAttachPoint\x3d"lastFocusNode" tabindex\x3d"0"\x3e\x3c/span\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojox/grid/_Grid","dojo/_base/kernel ../main dojo/_base/declare ./_Events ./_Scroller ./_Layout ./_View ./_ViewManager ./_RowManager ./_FocusManager ./_EditManager ./Selection ./_RowSelector ./util dijit/_Widget dijit/_TemplatedMixin dijit/CheckedMenuItem dojo/text!./resources/_Grid.html dojo/string dojo/_base/array dojo/_base/lang dojo/_base/sniff dojox/html/metrics dojo/_base/html dojo/query dojo/dnd/common dojo/i18n!dijit/nls/loading".split(" "),function(h,q,l,x,y,z,J,A,B,C,D,E,r,t,F,G,
u,H,v,e,f,I,w,d,p){h.isCopyKey||(h.isCopyKey=h.dnd.getCopyKeyState);l=l("dojox.grid._Grid",[F,G,x],{templateString:H,classTag:"dojoxGrid",rowCount:5,keepRows:75,rowsPerPage:25,autoWidth:!1,initialWidth:"",autoHeight:"",rowHeight:0,autoRender:!0,defaultHeight:"15em",height:"",structure:null,elasticView:-1,singleClickEdit:!1,selectionMode:"extended",rowSelector:"",columnReordering:!1,headerMenu:null,placeholderLabel:"GridColumns",selectable:!1,_click:null,loadingMessage:"\x3cspan class\x3d'dojoxGridLoading'\x3e${loadingState}\x3c/span\x3e",
errorMessage:"\x3cspan class\x3d'dojoxGridError'\x3e${errorState}\x3c/span\x3e",noDataMessage:"",escapeHTMLInData:!0,formatterScope:null,editable:!1,summary:"",_setSummaryAttr:"domNode",sortInfo:0,_placeholders:null,_layoutClass:z,buildRendering:function(){this.inherited(arguments);this.domNode.getAttribute("tabIndex")||(this.domNode.tabIndex="0");this.createScroller();this.createLayout();this.createViews();this.createManagers();this.createSelection();this.connect(this.selection,"onSelected","onSelected");
this.connect(this.selection,"onDeselected","onDeselected");this.connect(this.selection,"onChanged","onSelectionChanged");w.initOnFontResize();this.connect(w,"onFontResize","textSizeChanged");t.funnelEvents(this.domNode,this,"doKeyEvent",t.keyEvents);"none"!=this.selectionMode&&this.domNode.setAttribute("aria-multiselectable","single"==this.selectionMode?"false":"true");d.addClass(this.domNode,this.classTag);this.isLeftToRight()||d.addClass(this.domNode,this.classTag+"Rtl");0<this.rowHeight&&d.addClass(this.viewsNode,
this.classTag+"FixedRowHeight")},postMixInProperties:function(){this.inherited(arguments);var a=h.i18n.getLocalization("dijit","loading",this.lang);this.loadingMessage=v.substitute(this.loadingMessage,a);this.errorMessage=v.substitute(this.errorMessage,a);this.srcNodeRef&&this.srcNodeRef.style.height&&(this.height=this.srcNodeRef.style.height);this._setAutoHeightAttr(this.autoHeight,!0);this.lastScrollTop=this.scrollTop=0},postCreate:function(){this._placeholders=[];this._setHeaderMenuAttr(this.headerMenu);
this._setStructureAttr(this.structure);this._click=[];this.inherited(arguments);this.domNode&&this.autoWidth&&this.initialWidth&&(this.domNode.style.width=this.initialWidth);this.domNode&&!this.editable&&d.attr(this.domNode,"aria-readonly","true")},destroy:function(){this.domNode.onReveal=null;this.domNode.onSizeChange=null;delete this._click;this.scroller&&(this.scroller.destroy(),delete this.scroller);this.edit.destroy();delete this.edit;this.views.destroyViews();this.focus&&(this.focus.destroy(),
delete this.focus);this.headerMenu&&this._placeholders.length&&(e.forEach(this._placeholders,function(a){a.unReplace(!0)}),this.headerMenu.unBindDomNode(this.viewsHeaderNode));this.inherited(arguments)},_setAutoHeightAttr:function(a,b){"string"==typeof a&&(a=a&&"false"!=a?"true"==a?!0:window.parseInt(a,10):!1);"number"==typeof a&&(isNaN(a)&&(a=!1),0>a?a=!0:0===a&&(a=!1));this.autoHeight=a;this._autoHeight="boolean"==typeof a?a:"number"==typeof a?a>=this.get("rowCount"):!1;this._started&&!b&&this.render()},
_getRowCountAttr:function(){return this.updating&&this.invalidated&&void 0!=this.invalidated.rowCount?this.invalidated.rowCount:this.rowCount},textSizeChanged:function(){this.render()},sizeChange:function(){this.update()},createManagers:function(){this.rows=new B(this);this.focus=new C(this);this.edit=new D(this)},createSelection:function(){this.selection=new E(this)},createScroller:function(){this.scroller=new y;this.scroller.grid=this;this.scroller.renderRow=f.hitch(this,"renderRow");this.scroller.removeRow=
f.hitch(this,"rowRemoved")},createLayout:function(){this.layout=new this._layoutClass(this);this.connect(this.layout,"moveColumn","onMoveColumn")},onMoveColumn:function(){this.update()},onResizeColumn:function(a){},createViews:function(){this.views=new A(this);this.views.createView=f.hitch(this,"createView")},createView:function(a,b){a=new (f.getObject(a))({grid:this,index:b});this.viewsNode.appendChild(a.domNode);this.viewsHeaderNode.appendChild(a.headerNode);this.views.addView(a);d.attr(this.domNode,
"align",this.isLeftToRight()?"left":"right");return a},buildViews:function(){for(var a=0,b;b=this.layout.structure[a];a++)this.createView(b.type||q._scopeName+".grid._View",a).setStructure(b);this.scroller.setContentNodes(this.views.getContentNodes())},_setStructureAttr:function(a){a&&f.isString(a)&&(h.deprecated("dojox.grid._Grid.set('structure', 'objVar')","use dojox.grid._Grid.set('structure', objVar) instead","2.0"),a=f.getObject(a));this.structure=a;if(!a)if(this.layout.structure)a=this.layout.structure;
else return;this.views.destroyViews();this.focus.focusView=null;a!==this.layout.structure&&this.layout.setStructure(a);this._structureChanged()},setStructure:function(a){h.deprecated("dojox.grid._Grid.setStructure(obj)","use dojox.grid._Grid.set('structure', obj) instead.","2.0");this._setStructureAttr(a)},getColumnTogglingItems:function(){var a,b=[];a=e.map(this.layout.cells,function(a){a.menuItems||(a.menuItems=[]);var c=this,d=new u({label:a.name,checked:!a.hidden,_gridCell:a,onChange:function(a){if(c.layout.setColumnVisibility(this._gridCell.index,
a)){var b=this._gridCell.menuItems;1<b.length&&e.forEach(b,function(b){b!==this&&b.setAttribute("checked",a)},this);a=e.filter(c.layout.cells,function(a){1<a.menuItems.length?e.forEach(a.menuItems,"item.set('disabled', false);"):a.menuItems[0].set("disabled",!1);return!a.hidden});1==a.length&&e.forEach(a[0].menuItems,"item.set('disabled', true);")}},destroy:function(){var a=e.indexOf(this._gridCell.menuItems,this);this._gridCell.menuItems.splice(a,1);delete this._gridCell;u.prototype.destroy.apply(this,
arguments)}});a.menuItems.push(d);a.hidden||b.push(d);return d},this);1==b.length&&b[0].set("disabled",!0);return a},_setHeaderMenuAttr:function(a){this._placeholders&&this._placeholders.length&&(e.forEach(this._placeholders,function(a){a.unReplace(!0)}),this._placeholders=[]);this.headerMenu&&this.headerMenu.unBindDomNode(this.viewsHeaderNode);if(this.headerMenu=a)this.headerMenu.bindDomNode(this.viewsHeaderNode),this.headerMenu.getPlaceholders&&(this._placeholders=this.headerMenu.getPlaceholders(this.placeholderLabel))},
setHeaderMenu:function(a){h.deprecated("dojox.grid._Grid.setHeaderMenu(obj)","use dojox.grid._Grid.set('headerMenu', obj) instead.","2.0");this._setHeaderMenuAttr(a)},setupHeaderMenu:function(){this._placeholders&&this._placeholders.length&&e.forEach(this._placeholders,function(a){a._replaced&&a.unReplace(!0);a.replace(this.getColumnTogglingItems())},this)},_fetch:function(a){this.setScrollTop(0)},getItem:function(a){return null},showMessage:function(a){a?(this.messagesNode.innerHTML=a,this.messagesNode.style.display=
""):(this.messagesNode.innerHTML="",this.messagesNode.style.display="none")},_structureChanged:function(){this.buildViews();this.autoRender&&this._started&&this.render()},hasLayout:function(){return this.layout.cells.length},resize:function(a,b){this._pendingChangeSize=a;this._pendingResultSize=b;this.sizeChange()},_getPadBorder:function(){return this._padBorder=this._padBorder||d._getPadBorderExtents(this.domNode)},_getHeaderHeight:function(){var a=this.viewsHeaderNode.style,b="none"==a.display?
0:this.views.measureHeader();a.height=b+"px";this.views.normalizeHeaderNodeHeight();return b},_resize:function(a,b){a=a||this._pendingChangeSize;b=b||this._pendingResultSize;delete this._pendingChangeSize;delete this._pendingResultSize;if(this.domNode){var c=this.domNode.parentNode;if(c&&1==c.nodeType&&this.hasLayout()&&"hidden"!=c.style.visibility&&"none"!=c.style.display){var f=this._getPadBorder(),m=void 0,k;this._autoHeight?this.domNode.style.height="auto":"number"==typeof this.autoHeight?(k=
m=this._getHeaderHeight(),k+=this.scroller.averageRowHeight*this.autoHeight,this.domNode.style.height=k+"px"):this.domNode.clientHeight<=f.h&&(c==document.body?this.domNode.style.height=this.defaultHeight:this.height?this.domNode.style.height=this.height:this.fitTo="parent");b&&(a=b);!this._autoHeight&&a?(d.marginBox(this.domNode,a),this.height=this.domNode.style.height,delete this.fitTo):"parent"==this.fitTo&&(k=this._parentContentBoxHeight=0<this._parentContentBoxHeight?this._parentContentBoxHeight:
d._getContentBox(c).h,this.domNode.style.height=Math.max(0,k)+"px");a=e.some(this.views.views,function(a){return a.flexCells});this._autoHeight||0!==(k||d._getContentBox(this.domNode).h)?(this.viewsHeaderNode.style.display="block",a||void 0!==m||(m=this._getHeaderHeight())):this.viewsHeaderNode.style.display="none";a&&(m=void 0);this.adaptWidth();this.adaptHeight(m);this.postresize()}}},adaptWidth:function(){var a=!this.initialWidth&&this.autoWidth,b=a?0:this.domNode.clientWidth||this.domNode.offsetWidth-
this._getPadBorder().w,b=this.views.arrange(1,b);this.views.onEach("adaptWidth");a&&(this.domNode.style.width=b+"px")},adaptHeight:function(a){a=void 0===a?this._getHeaderHeight():a;var b=this._autoHeight?-1:Math.max(this.domNode.clientHeight-a,0)||0;this.views.onEach("setSize",[0,b]);this.views.onEach("adaptHeight");if(!this._autoHeight){var c=0,d=0,f=e.filter(this.views.views,function(a){(a=a.hasHScrollbar())?c++:d++;return!a});0<c&&0<d&&e.forEach(f,function(a){a.adaptHeight(!0)})}!0===this.autoHeight||
-1!=b||"number"==typeof this.autoHeight&&this.autoHeight>=this.get("rowCount")?this.scroller.windowHeight=b:this.scroller.windowHeight=Math.max(this.domNode.clientHeight-a,0)},startup:function(){this._started||(this.inherited(arguments),this.autoRender&&this.render())},render:function(){this.domNode&&this._started&&(this.hasLayout()?(this.update=this.defaultUpdate,this._render()):this.scroller.init(0,this.keepRows,this.rowsPerPage))},_render:function(){this.scroller.init(this.get("rowCount"),this.keepRows,
this.rowsPerPage);this.prerender();this.setScrollTop(0);this.postrender()},prerender:function(){this.keepRows=this._autoHeight?0:this.keepRows;this.scroller.setKeepInfo(this.keepRows);this.views.render();this._resize()},postrender:function(){this.postresize();this.focus.initFocusView();d.setSelectable(this.domNode,this.selectable)},postresize:function(){if(this._autoHeight){var a=Math.max(this.views.measureContent())+"px";this.viewsNode.style.height=a}},renderRow:function(a,b){this.views.renderRow(a,
b,this._skipRowRenormalize)},rowRemoved:function(a){this.views.rowRemoved(a)},invalidated:null,updating:!1,beginUpdate:function(){this.invalidated=[];this.updating=!0},endUpdate:function(){this.updating=!1;var a=this.invalidated,b;if(a.all)this.update();else if(void 0!=a.rowCount)this.updateRowCount(a.rowCount);else for(b in a)this.updateRow(Number(b));this.invalidated=[]},defaultUpdate:function(){this.domNode&&(this.updating?this.invalidated.all=!0:(this.lastScrollTop=this.scrollTop,this.prerender(),
this.scroller.invalidateNodes(),this.setScrollTop(this.lastScrollTop),this.postrender()))},update:function(){this.render()},updateRow:function(a){a=Number(a);this.updating?this.invalidated[a]=!0:(this.views.updateRow(a),this.scroller.rowHeightChanged(a))},updateRows:function(a,b){a=Number(a);b=Number(b);var c;if(this.updating)for(c=0;c<b;c++)this.invalidated[c+a]=!0;else{for(c=0;c<b;c++)this.views.updateRow(c+a,this._skipRowRenormalize);this.scroller.rowHeightChanged(a)}},updateRowCount:function(a){this.updating?
this.invalidated.rowCount=a:(this.rowCount=a,this._setAutoHeightAttr(this.autoHeight,!0),this.layout.cells.length&&this.scroller.updateRowCount(a),this.layout.cells.length&&this.setScrollTop(this.scrollTop),this._resize())},updateRowStyles:function(a){this.views.updateRowStyles(a)},getRowNode:function(a){if(!this.focus.focusView||this.focus.focusView instanceof r)for(var b=0,c;c=this.views.views[b];b++){if(!(c instanceof r))return c.rowNodes[a]}else return this.focus.focusView.rowNodes[a];return null},
rowHeightChanged:function(a){this.views.renormalizeRow(a);this.scroller.rowHeightChanged(a)},fastScroll:!0,delayScroll:!1,scrollRedrawThreshold:I("ie")?100:50,scrollTo:function(a){if(this.fastScroll){var b=Math.abs(this.lastScrollTop-a);this.lastScrollTop=a;if(b>this.scrollRedrawThreshold||this.delayScroll){this.delayScroll=!0;this.scrollTop=a;this.views.setScrollTop(a);this._pendingScroll&&window.clearTimeout(this._pendingScroll);var c=this;this._pendingScroll=window.setTimeout(function(){delete c._pendingScroll;
c.finishScrollJob()},200)}else this.setScrollTop(a)}else this.setScrollTop(a)},finishScrollJob:function(){this.delayScroll=!1;this.setScrollTop(this.scrollTop)},setScrollTop:function(a){this.scroller.scroll(this.views.setScrollTop(a))},scrollToRow:function(a){this.setScrollTop(this.scroller.findScrollTop(a)+1)},styleRowNode:function(a,b){b&&this.rows.styleRowNode(a,b)},_mouseOut:function(a){this.rows.setOverRow(-2)},getCell:function(a){return this.layout.cells[a]},setCellWidth:function(a,b){this.getCell(a).unitWidth=
b},getCellName:function(a){return"Cell "+a.index},canSort:function(a){},sort:function(){},getSortAsc:function(a){a=void 0==a?this.sortInfo:a;return 0<a},getSortIndex:function(a){a=void 0==a?this.sortInfo:a;return Math.abs(a)-1},setSortIndex:function(a,b){var c=a+1;void 0!=b?c*=b?1:-1:this.getSortIndex()==a&&(c=-this.sortInfo);this.setSortInfo(c)},setSortInfo:function(a){this.canSort(a)&&(this.sortInfo=a,this.sort(),this.update())},doKeyEvent:function(a){a.dispatch="do"+a.type;this.onKeyEvent(a)},
_dispatch:function(a,b){return a in this?this[a](b):!1},dispatchKeyEvent:function(a){this._dispatch(a.dispatch,a)},dispatchContentEvent:function(a){this.edit.dispatchEvent(a)||a.sourceView.dispatchContentEvent(a)||this._dispatch(a.dispatch,a)},dispatchHeaderEvent:function(a){a.sourceView.dispatchHeaderEvent(a)||this._dispatch("doheader"+a.type,a)},dokeydown:function(a){this.onKeyDown(a)},doclick:function(a){if(a.cellNode)this.onCellClick(a);else this.onRowClick(a)},dodblclick:function(a){if(a.cellNode)this.onCellDblClick(a);
else this.onRowDblClick(a)},docontextmenu:function(a){if(a.cellNode)this.onCellContextMenu(a);else this.onRowContextMenu(a)},doheaderclick:function(a){if(a.cellNode)this.onHeaderCellClick(a);else this.onHeaderClick(a)},doheaderdblclick:function(a){if(a.cellNode)this.onHeaderCellDblClick(a);else this.onHeaderDblClick(a)},doheadercontextmenu:function(a){if(a.cellNode)this.onHeaderCellContextMenu(a);else this.onHeaderContextMenu(a)},doStartEdit:function(a,b){this.onStartEdit(a,b)},doApplyCellEdit:function(a,
b,c){this.onApplyCellEdit(a,b,c)},doCancelEdit:function(a){this.onCancelEdit(a)},doApplyEdit:function(a){this.onApplyEdit(a)},addRow:function(){this.updateRowCount(this.get("rowCount")+1)},removeSelectedRows:function(){this.allItemsSelected?this.updateRowCount(0):this.updateRowCount(Math.max(0,this.get("rowCount")-this.selection.getSelected().length));this.selection.clear()}});l.markupFactory=function(a,b,c,e){var m=function(a){a=d.attr(a,"width")||"auto";"auto"!=a&&"em"!=a.slice(-2)&&"%"!=a.slice(-1)&&
(a=parseInt(a,10)+"px");return a};a.structure||"table"!=b.nodeName.toLowerCase()||(a.structure=p("\x3e colgroup",b).map(function(a){var b=d.attr(a,"span"),b={noscroll:"true"==d.attr(a,"noscroll")?!0:!1,__span:b?parseInt(b,10):1,cells:[]};d.hasAttr(a,"width")&&(b.width=m(a));return b}),a.structure.length||a.structure.push({__span:Infinity,cells:[]}),p("thead \x3e tr",b).forEach(function(b,c){var h=0,k=0,l,n=null;p("\x3e th",b).map(function(b){n?h>=l+n.__span&&(k++,l+=n.__span,n=a.structure[k]):(l=
0,n=a.structure[0]);var g={name:f.trim(d.attr(b,"name")||b.innerHTML),colSpan:parseInt(d.attr(b,"colspan")||1,10),type:f.trim(d.attr(b,"cellType")||""),id:f.trim(d.attr(b,"id")||"")};h+=g.colSpan;var p=d.attr(b,"rowspan");p&&(g.rowSpan=p);d.hasAttr(b,"width")&&(g.width=m(b));d.hasAttr(b,"relWidth")&&(g.relWidth=window.parseInt(d.attr(b,"relWidth"),10));d.hasAttr(b,"hidden")&&(g.hidden="true"==d.attr(b,"hidden")||!0===d.attr(b,"hidden"));e&&e(b,g);g.type=g.type?f.getObject(g.type):q.grid.cells.Cell;
g.type&&g.type.markupFactory&&g.type.markupFactory(b,g);n.cells[c]||(n.cells[c]=[]);n.cells[c].push(g)})}));return new c(a,b)};return l});