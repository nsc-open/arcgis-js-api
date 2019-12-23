// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/VisibleScaleRangeSlider","../kernel ./_EventedWidget ./_Tooltip ./VisibleScaleRangeSlider/_RecommendedScaleRangeBounds ./VisibleScaleRangeSlider/_SlideEvent ./VisibleScaleRangeSlider/ScaleMenu ./VisibleScaleRangeSlider/ScalePreview ./VisibleScaleRangeSlider/ScaleRanges dijit/form/DropDownButton dijit/popup dojo/_base/array dojo/_base/lang dojo/aspect dojo/debounce dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/on dojo/string dojox/form/HorizontalRangeSlider dojo/i18n!../nls/jsapi".split(" "),
function(r,e,t,u,v,l,w,m,n,h,x,d,f,y,p,z,q,k,A,B,C,D,E,F){e=e.createSubclass([t],{declaredClass:"esri.dijit.VisibleScaleRangeSlider",baseClass:"esriVisibleScaleRangeSlider",css:{currentScaleIndicator:"esriCurrentScaleIndicator",currentScaleIndicatorContainer:"esriCurrentScaleIndicatorContainer",scaleIndicator:"esriScaleIndicator",scaleIndicatorContainer:"esriScaleIndicatorContainer"},disabled:!1,map:null,layer:null,region:"en-US",minScale:0,maxScale:0,intermediateChanges:!1,labels:F.widgets.visibleScaleRangeSlider,
_slider:null,_currentScaleIndicator:null,_scalePreview:null,_maxScaleButton:null,_minScaleButton:null,_mapUpdateHandler:null,_scaleRanges:null,_scheduleScaleRangeChangeEmit:null,_getSliderIndexRange:function(a){a=Math.floor(a);return{min:a,max:a+.99999}},_setDisabledAttr:function(a){this._slider.set("disabled",a);this._maxScaleButton.set("disabled",a);this._minScaleButton.set("disabled",a);this._set("disabled",a)},_setMapAttr:function(a){this._set("map",a);this._mapUpdateHandler&&this._mapUpdateHandler.remove();
this._slider.set("disabled",!0);this._ensureMap().then(this._updateFromMap)},_setConstraintsAttr:function(a){this._set("constraints",a);this._setUpSlider({minScale:a.minScale,maxScale:a.maxScale})},_updateFromMap:function(a){var b=a.getMinScale(),c=a.getMaxScale();this._setUpSlider({minScale:b,maxScale:c});this._updateCurrentScaleIndicator();a=a.on("zoom-end",d.hitch(this,this._updateCurrentScaleIndicator));this.own(a);this._mapUpdateHandler=a},_setUpSlider:function(a){var b=a.maxScale;a=a.minScale;
var c;this._slider.set("disabled",this.get("disabled"));this._scaleRanges.set("scaleRangeBounds",{minScale:a,maxScale:b});c=this._getSliderIndexRange(this._scaleRanges.length-1);this._slider.set("maximum",c.max);this._silentSliderUpdate({maxScale:b,minScale:a})},_ensureMap:function(){return this._untilLoaded(this.map)},_untilLoaded:function(a){var b=new p;if(a)if(a.loaded)b.resolve(a);else a.on("load",function(){b.resolve(a)});else b.reject(Error("could not load resource"));return b.promise},_updateCurrentScaleIndicator:function(){var a=
this._scaleRanges.clampScale(this.map.getScale()),a=this._mapScaleToSlider(a)/this._slider.maximum;this.isLeftToRight()||(a=1-a);A.set(this._currentScaleIndicator,{left:100*a+"%"})},_setLayerAttr:function(a){this._set("layer",a);this._ensureScaleRangeProvider().then(this._ensureLayer).then(this._updateMinMaxScaleFromLayer)},_ensureLayer:function(){return this._untilLoaded(this.layer)},_updateMinMaxScaleFromLayer:function(a){this.set({minScale:a.minScale,maxScale:a.maxScale})},_mapSliderToScale:function(a){var b=
this._getSliderIndexRange(a),c=this._scaleRanges.findScaleRangeByIndex(a);return this._mapToRange(a,b.min,b.max,c.minScale,c.maxScale)},_mapToRange:function(a,b,c,d,g){return d+(a-b)*(g-d)/(c-b)},_setRegionAttr:function(a){this._set("region",a);this._scalePreview.set("source",m.getScalePreviewSource(a))},_getMinimumAttr:function(){return this._mapSliderToScale(this._slider.minimum)},_getMaximumAttr:function(){return this._mapSliderToScale(this._slider.maximum)},_getActualMaxScaleAttr:function(){return this._scaleRanges.clampMaxScale(this.maxScale)},
_setMaxScaleAttr:function(a){this._set("maxScale",a);this._ensureScaleRangeProvider().then(d.hitch(this,function(){a=this._scaleRanges.clampMaxScale(a);this._set("maxScale",this._layerConstrainedMaxScale(a));this._silentSliderUpdate({maxScale:a});this._scheduleScaleRangeChangeEmit()}))},_silentSliderUpdate:function(a){var b=a.minScale,c=a.maxScale,d=this._scaleRanges;a=this._slider;void 0!==b&&(b=this._mapScaleToSlider(d.clampMinScale(b)),a.set("value",b,!1,!1));void 0!==c&&(b=this._mapScaleToSlider(d.clampMaxScale(c)),
a.set("value",b,!1,!0))},_mapScaleToSlider:function(a){var b=this._scaleRanges.scaleToRangeIndex(a),c=this._getSliderIndexRange(b),b=this._scaleRanges.findScaleRangeByIndex(b);return this._mapToRange(a,b.minScale,b.maxScale,c.min,c.max)},_getActualMinScaleAttr:function(){return this._scaleRanges.clampMinScale(this.minScale)},_setMinScaleAttr:function(a){this._set("minScale",a);this._ensureScaleRangeProvider().then(d.hitch(this,function(){a=this._scaleRanges.clampMinScale(a);this._set("minScale",this._layerConstrainedMinScale(a));
this._silentSliderUpdate({minScale:a});this._scheduleScaleRangeChangeEmit()}))},_ensureScaleRangeProvider:function(){if(this.map)return this._ensureMap();var a=new p;this.constraints&&a.resolve();return a.promise},_emitScaleRangeChange:function(){this.emit("scale-range-change",{minScale:this.minScale,maxScale:this.maxScale})},_layerConstrainedMinScale:function(a){var b=d.getObject("tileInfo.lods",!1,this.layer)||[],c;return 0<b.length?(b=b[0].scale,c=this._scaleRanges.get("firstRange"),(c=.85<this._mapToRange(a,
c.maxScale,c.minScale,0,1))?b:a>b?b:a):this._scaleRanges.beyondMinScale(a)?0:a},_layerConstrainedMaxScale:function(a){var b=d.getObject("tileInfo.lods",!1,this.layer)||[];return 0<b.length?(b=b[b.length-1].scale,a<b?b:a):this._scaleRanges.beyondMaxScale(a)?0:a},constructor:function(){this._scaleRanges=new (m.createSubclass([u]));this._scheduleScaleRangeChangeEmit=y(d.hitch(this,this._emitScaleRangeChange),0);this._ensureMap=d.hitch(this,this._ensureMap);this._ensureScaleRangeProvider=d.hitch(this,
this._ensureScaleRangeProvider);this._ensureLayer=d.hitch(this,this._ensureLayer);this._updateMinMaxScaleFromLayer=d.hitch(this,this._updateMinMaxScaleFromLayer);this._updateFromMap=d.hitch(this,this._updateFromMap)},buildRendering:function(){this.inherited(arguments);this._initSlider();this._initScalePreview();this._initCurrentScaleIndicator();this._initScaleMenus()},_initSlider:function(){var a=new (E.createSubclass([v]))({baseClass:"esriHorizontalSlider",showButtons:!1,intermediateChanges:this.intermediateChanges,
disabled:!0});this._slider=a;a.placeAt(this.domNode);a.startup();this.own(a.on("slide-onmousemove, slidemax-onmousemove",d.hitch(this,function(a){this._updateScalePreview(a.movable.handle)})),a.on("slide-onmovestop, slidemax-onmovestop",d.hitch(this,function(a){z.contains(a.movable.handle,"dijitSliderThumbHover")||this._closeScalePreview()})),a.on("change",d.hitch(this,function(){var a=Math.round(this._mapSliderToScale(this._getSliderMin())),c=Math.round(this._mapSliderToScale(this._getSliderMax()));
this.set({minScale:a,maxScale:c})})),f.after(a,"_setValueAttr",d.hitch(this,this._updateLabelMenus)))},_getSliderMin:function(){return this._slider.get("value")[0]},_getSliderMax:function(){return this._slider.get("value")[1]},_updateLabelMenus:function(){var a=this._maxScaleButton;this._minScaleButton.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMin()));a.set("label",this._scaleRanges.getScaleRangeLabel(this._getSliderMax()))},_initScalePreview:function(){var a=new w;a.startup();
h.moveOffScreen(a);x.forEach([this._slider._movable.handle,this._slider._movableMax.handle],function(a){a.onmouseenter=d.hitch(this,this._updateScalePreview,a);a.onmouseleave=d.hitch(this,this._closeScalePreview)},this);this.own(a);this._scalePreview=a},_closeScalePreview:function(){h.close(this._scalePreview)},_updateScalePreview:function(a){if(!this.disabled){var b=this._scalePreview;h.moveOffScreen(b);var c=this._slider,d=a===c.sliderHandle?this._getSliderMin():this._getSliderMax(),g=k.position(a),
e=k.position(b.domNode),c=k.position(c.sliderBarContainer),f=this.isLeftToRight(),d=this._scaleRanges.getScalePreviewSpriteBackgroundPosition(d);b.set("backgroundPosition",d);g=g.x-c.x;e=.5*e.w;h.open({parent:this,popup:b,around:a,orient:g<e?f?["above","below"]:["above-alt","below-alt"]:g<c.w-e?["above-centered","below-centered"]:f?["above-alt","below-alt"]:["above","below"]})}},_initCurrentScaleIndicator:function(){if(this.map){var a=q.create("div",{className:this.css.scaleIndicatorContainer+" "+
this.css.currentScaleIndicatorContainer},this._slider.sliderBarContainer),b=q.create("div",{className:this.css.scaleIndicator+" "+this.css.currentScaleIndicator},a);this._currentScaleIndicator=b;this.createTooltip(b);a=C(b,"mouseover",d.hitch(this,function(){var a=D.substitute(this.labels.currentScaleTooltip,{scaleLabel:this._scaleRanges.getScaleRangeLabel(this._mapScaleToSlider(this.map.getScale()))});this.findTooltip(b).set("label",a)}));this.own(a)}},_initScaleMenus:function(){var a=new l,b=new l,
c,e;this.own(a.on("scale-selected",d.hitch(this,function(a){c.closeDropDown();this.set("minScale",a.scale)})));this.own(b.on("scale-selected",d.hitch(this,function(a){e.closeDropDown();this.set("maxScale",a.scale)})));c=new n({baseClass:"esriScaleMenuButton esriMinScaleMenuButton",dropDown:a,dropDownPosition:["below","above"]});c.toggleDropDown();c.toggleDropDown();e=new n({baseClass:"esriScaleMenuButton esriMaxScaleMenuButton",dropDown:b,dropDownPosition:["below","above"]});e.toggleDropDown();e.toggleDropDown();
this.own(f.before(c,"openDropDown",d.hitch(this,function(){var b=this._scaleRanges.findScaleRange(this.get("actualMaxScale")).minScale;a.set("options",{label:c.label,scale:{current:this.get("actualMinScale"),map:this._getMapScale(),min:this.get("minimum"),max:b}})})));this.own(f.before(e,"openDropDown",d.hitch(this,function(){var a=this._scaleRanges.findScaleRange(this.get("actualMinScale")).maxScale;b.set("options",{label:e.label,scale:{current:this.get("actualMaxScale"),map:this._getMapScale(),
min:a,max:this.get("maximum")}})})));c.placeAt(this.domNode);e.placeAt(this.domNode);a.startup();b.startup();c.startup();e.startup();this._minScaleButton=c;this._maxScaleButton=e},_getMapScale:function(){return this.map?this.map.getScale():-1},startup:function(){this.inherited(arguments);this.watch("intermediateChanges",function(a,b,c){this._slider.set(a,c)})}});B("extend-esri")&&d.setObject("dijit.VisibleScaleRangeSlider",e,r);return e});