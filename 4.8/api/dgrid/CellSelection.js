//>>built
define("dojo/_base/declare dojo/aspect dojo/dom-class dojo/on dojo/has ./Selection".split(" "),function(p,r,m,t,u,q){return p(q,{selectionDelegate:".dgrid-cell",_selectionTargetType:"cells",_select:function(a,b,d){var e,f;"undefined"===typeof d&&(d=!0);if("object"!==typeof a||!("element"in a))a=this.cell(a);else if(!a.row){if(d&&"object"===typeof d)for(f in d)this._select(this.cell(a.id,f),null,d[f]);else for(f in this.columns)this._select(this.cell(a.id,f),null,d);return}if(this.allowSelect(a)){var h=
a.row.id,c=this.selection[h];if(a.column){var g=c&&c[a.column.id];null===d&&(d=!g);var k=a.element,c=c||{};c[a.column.id]=d;this.selection[h]=c;var n=!1;for(e in c)if(!0===c[e]){n=!0;break}n||delete this.selection[h];k&&(d?m.add(k,"dgrid-selected"+(this.addUiClasses?" ui-state-active":"")):m.remove(k,"dgrid-selected ui-state-active"));d!=g&&k&&this._selectionEventQueues[(d?"":"de")+"select"].push(a);if(b)if(b.element||(b=this.cell(b)),b&&b.row){g=b.element;e=a.element;h=this._determineSelectionDirection(e,
g);h||(g=(b=this.cell(document.getElementById(b.row.element.id),g.columnId))&&b.element,h=this._determineSelectionDirection(e,g));e=a.column.id;var g=b.column.id,l,c=[];for(f in this.columns)if(l&&c.push(f),f===e&&(e=c)||f===g&&(g=c)){c.push(f);if(l||e==c&&f==g)break;l=!0}f=a.row.element;g=b.row.element;do{for(e=0;e<c.length;e++)a=this.cell(f,c[e]),this._select(a,null,d);if(f==g)break}while(f=a.row.element[h])}else this._lastSelected=k,console.warn("The selection range has been reset because the beginning of the selection is no longer in the DOM. If you are using OnDemandList, you may wish to increase farOffRemoval to avoid this, but note that keeping more nodes in the DOM may impact performance.")}else for(e in this.columns)this._select(this.cell(h,
e),null,d)}},_determineSelectionDirection:function(){var a=this.inherited(arguments);return"down"===a?"nextSibling":"up"===a?"previousSibling":a},isSelected:function(a,b){if("undefined"===typeof a||null===a)return!1;a.element||(a=this.cell(a,b));b=a.row.id;return b in this.selection?!!this.selection[b][a.column.id]:this.allSelected&&(!a.row.data||this.allowSelect(a))},clearSelection:function(a){a=!1;this.inherited(arguments)}})});