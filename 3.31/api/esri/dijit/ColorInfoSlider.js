// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/ColorInfoSlider/templates/ColorInfoSlider.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_sliderNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"_scaleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/ColorInfoSlider","../kernel ../numberUtils ../renderers/utils ../dijit/RendererSlider ../dijit/RendererSlider/sliderUtils dijit/_TemplatedMixin dijit/_WidgetBase dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/debounce dojo/dom-style dojo/Evented dojo/has dojox/gfx dojo/text!./ColorInfoSlider/templates/ColorInfoSlider.html".split(" "),function(r,p,q,t,g,m,u,h,v,b,w,n,x,y,d,z){m=v([u,m,x],{declaredClass:"esri.dijit.ColorInfoSlider",baseClass:"esriColorInfoSlider",templateString:z,
colorInfo:null,minValue:null,maxValue:null,histogram:null,statistics:!1,zoomOptions:null,handles:[],primaryHandle:null,showLabels:!0,showTicks:!0,showHandles:!0,showHistogram:!0,showStatistics:!0,showTransparentBackground:!1,showRatioLabels:!1,histogramWidth:100,rampWidth:26,_rampNode:null,_sliderHeight:null,_colorRampSurface:null,_histogramSurface:null,_surfaceRect:null,_barsGroup:null,_updateTimer:null,_transparentBackgroundNode:null,_forceMinValue:null,_forceMaxValue:null,constructor:function(a,
k){k&&(void 0!==a.minValue&&this.set("_forceMinValue",a.minValue),void 0!==a.maxValue&&this.set("_forceMaxValue",a.maxValue),this._updateTimeout=w(this._updateTimeout,0))},postCreate:function(){this.inherited(arguments);this._setupDataDefaults()},startup:function(){this.inherited(arguments);this._slider=new t({type:"ColorInfoSlider",values:this.values,isDate:this.isDate,minimum:this.zoomOptions?this.zoomOptions.minSliderValue:this.minValue,maximum:this.zoomOptions?this.zoomOptions.maxSliderValue:
this.maxValue,_minZoomLabel:this.zoomOptions?this.minValue:null,_maxZoomLabel:this.zoomOptions?this.maxValue:null,_isZoomed:this.zoomOptions?!0:!1,showLabels:this.showLabels,showTicks:this.showTicks,showHandles:this.showHandles,showRatioLabels:this.showRatioLabels,handles:this.handles,primaryHandle:this.primaryHandle},this._sliderNode);this._slider.startup();this._rampNode=this._slider._sliderAreaRight;this._sliderHeight=n.get(this._rampNode,"height")||155;this._valuesAutoAdjust();this._createSVGSurfaces();
this._slider.on("slide",b.hitch(this,function(a){this._valuesAutoAdjust();this._updateColorInfo(this._slider.values);this._fillRamp();this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,colorInfo:b.clone(this.colorInfo)})}));this._slider.on("handle-value-change",b.hitch(this,function(a){this.set("values",a.values);this._valuesAutoAdjust();this._updateColorInfo(this._slider.values);this._fillRamp();this._updateRendererSlider();a=b.clone(this.colorInfo);this.emit("handle-value-change",
a);this.emit("data-change",{minValue:this.minValue,maxValue:this.maxValue,colorInfo:a})}));this._slider.on("data-value-change",b.hitch(this,function(a){this.set({minValue:a.min,maxValue:a.max});this._updateRendererSlider();a={minValue:this.minValue,maxValue:this.maxValue,colorInfo:b.clone(this.colorInfo)};this.emit("data-change",a);this.emit("data-value-change",a)}));this._slider.on("stop",b.hitch(this,function(a){this.emit("handle-value-change",b.clone(this.colorInfo))}));this._slider.on("zoom-out",
b.hitch(this,function(a){this.set("zoomOptions",null)}));this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram();this.watch("colorInfo",this._updateTimeout);this.watch("handles",this._updateTimeout);this.watch("primaryHandle",this._updateTimeout);this.watch("statistics",this._updateTimeout);this.watch("histogram",this._updateTimeout);this.watch("zoomOptions",this._updateTimeout);
this.watch("showHandles",this._updateTimeout);this.watch("showLabels",this._updateTimeout);this.watch("showTicks",this._updateTimeout);this.watch("showRatioLabels",this._updateTimeout);this.watch("zoomOptions",this._zoomEventHandler);this.watch("showHistogram",this._toggleHistogram);this.watch("showTransparentBackground",this._toggleTransparentBackground)},destroy:function(){this.inherited(arguments);this._slider&&this._slider.destroy();this._avgHandleObjs&&this._avgHandleObjs.avgHandleTooltip&&this._avgHandleObjs.avgHandleTooltip.destroy();
this.countTooltips&&h.forEach(this.countTooltips,function(a){a.destroy()})},_updateTimeout:function(){this._updateRendererSlider()},_updateRendererSlider:function(){var a=this.get("showRatioLabels");!1!==a&&"percent"!==a&&"percentTotal"!==a&&this.set("showRatioLabels",!1);null!==this.zoomOptions&&!1!==this.zoomOptions?(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue,this._slider.set({minimum:this.zoomOptions.minSliderValue,
maximum:this.zoomOptions.maxSliderValue,showRatioLabels:this.showRatioLabels,_minZoomLabel:this.minValue,_maxZoomLabel:this.maxValue,_isZoomed:!0})):this._slider.set({minimum:this.minValue,maximum:this.maxValue,showRatioLabels:this.showRatioLabels,_minZoomLabel:null,_maxZoomLabel:null,_isZoomed:!1});this.set("values",this._generateHandleValues(b.clone(this.colorInfo.stops)));this._slider.set({values:this.values,handles:this.handles,primaryHandle:this.primaryHandle});this._slider._reset();this._slider._updateRoundedLabels();
this._slider._generateMoveables();this._clearRect();this._createSVGSurfaces();this.statistics&&this.showStatistics&&this._generateStatistics();this.showHistogram&&(this.histogram||this.zoomOptions&&this.zoomOptions.histogram)&&this._generateHistogram()},_generateHandleValues:function(a){h.forEach(a,b.hitch(this,function(a,c){-1===h.indexOf(this.handles,c)&&c!==this.primaryHandle&&(a.hidden=!0);c===this.primaryHandle&&(a.primaryHandle=!0)}));return a.slice()},_valuesAutoAdjust:function(){var a=this._slider.values,
k=[],c,b,e,f,g,d,l;h.forEach(a,function(a,c){a.hidden||k.push(c)});for(d=0;d<k.length-1;d++)for(c=k[d],b=k[d+1],e=b-c,f=a[c].value,g=a[b].value,l=c+1;l<b;l++)a[l].value=f*(b-l)/e+g*(l-c)/e},_zoomEventHandler:function(){this.emit("zoomed",!!this.zoomOptions)},_setupDataDefaults:function(){this.statistics?this.set({minValue:this.statistics.min,maxValue:this.statistics.max}):this.set({minValue:0,maxValue:100});null!==this._forceMinValue&&this.set("minValue",this._forceMinValue);null!==this._forceMaxValue&&
this.set("maxValue",this._forceMaxValue);null!==this.zoomOptions&&(this.toggleSliderBottom=this.zoomOptions.minSliderValue>this.minValue,this.toggleSliderTop=this.zoomOptions.maxSliderValue<this.maxValue);this.colorInfo.stops[0].value===this.colorInfo.stops[this.colorInfo.stops.length-1].value&&0!==this.colorInfo.stops[0].value&&(this.set({minValue:0,maxValue:2*this.colorInfo.stops[0].value}),this.colorInfo.stops[0].value=this.maxValue/5,this.colorInfo.stops[this.colorInfo.stops.length-1].value=this.maxValue/
5*4);this.minValue===this.maxValue&&(0===this.minValue?this.set("maxValue",100):null===this.minValue?this.set({minValue:0,maxValue:100}):this.set({minValue:0,maxValue:2*this.minValue}));this.set("values",this._generateHandleValues(b.clone(this.colorInfo.stops)))},_createSVGSurfaces:function(){this._colorRampSurface=d.createSurface(this._rampNode,this.rampWidth-2,this._sliderHeight-2);n.set(this._colorRampSurface.rawNode,"border","1px solid #888");this._surfaceRect=this._colorRampSurface.createRect({width:this.rampWidth,
height:this._sliderHeight});this._transparentBackgroundNode=g.generateTransparentBackground(this._colorRampSurface,this.rampWidth-2,this._sliderHeight-2,this.showTransparentBackground);this._histogramSurface=g.generateHistogramSurface(this._rampNode,this.histogramWidth,this._sliderHeight,this.rampWidth);this._fillRamp();null!==this.zoomOptions&&(this.toggleSliderBottom&&this.toggleSliderTop?(this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,
5)),this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,195))):this.toggleSliderBottom?this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,195)):this.toggleSliderTop&&this._colorRampSurface.createPath("M0,1 L6.25,-1 L12.5,1 L18.75,-1 L25,1").setStroke({color:"#fff",width:3}).setTransform(d.matrix.translate(0,5)))},_fillRamp:function(){var a=
this._slider.minimum,b=this._slider.maximum,c=this._slider.values.slice();h.forEach(c,function(c){c.offset=(b-c.value)/(b-a)});c.reverse();null!==this.zoomOptions?this.toggleSliderBottom&&this.toggleSliderTop?this._surfaceRect.setFill({type:"linear",x1:0,y1:10,x2:0,y2:this._sliderHeight-10,colors:c}):this.toggleSliderBottom?this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight-20,colors:c}):this.toggleSliderTop&&this._surfaceRect.setFill({type:"linear",x1:0,y1:20,x2:0,y2:this._sliderHeight,
colors:c}):this._surfaceRect.setFill({type:"linear",x1:0,y1:0,x2:0,y2:this._sliderHeight,colors:c})},_clearRect:function(){this._colorRampSurface.destroy();this._histogramSurface.destroy()},_toggleTransparentBackground:function(){this.showTransparentBackground?this._transparentBackgroundNode.setFill(g.getTransparentFill()):this._transparentBackgroundNode.setFill(null)},_updateColorInfo:function(a){a=h.map(a,function(a,c){return{value:a.value,index:c}});q.updateColorStops({stops:this.colorInfo.stops,
changes:a,isDate:this.isDate,dateFormatOptions:this.isDate?q.timelineDateFormatOptions:null})},_showHistogram:function(){this.histogram||this.zoomOptions&&this.zoomOptions.histogram?this._generateHistogram():this._barsGroup&&(this._barsGroup.destroy(),this._barsGroup=null)},_toggleHistogram:function(){this.showHistogram?(n.set(this._barsGroup.rawNode,"display","inline-block"),this._showHistogram()):n.set(this._barsGroup.rawNode,"display","none")},_generateHistogram:function(){var a=this.zoomOptions&&
this.zoomOptions.histogram?this.zoomOptions.histogram:this.histogram;this._barsGroup=g.generateHistogram(this._histogramSurface,a,this.histogramWidth,this.rampWidth,this.isLeftToRight());this.countTooltips=g.generateCountTooltips(a,this._barsGroup)},_generateStatistics:function(){if(!(2>this.statistics.count||isNaN(this.statistics.avg))){var a=this.statistics,b=this._slider,c=this.zoomOptions||null,d=g.getPrecision(this.maxValue),e,f;a.min===a.max&&a.min===a.avg?(e=0,f=2*a.avg):(e=a.min,f=a.max);
if(e!==b.minimum||f!==b.maximum)e=b.minimum,f=b.maximum;c&&(e=c.minSliderValue,f=c.maxSliderValue);b=this._sliderHeight*(f-a.avg)/(f-e);a=this.get("showRatioLabels")?p.round([this._slider._getRatioFromValue(a.avg),e,f])[0]:p.round([a.avg,f,e])[0];this._avgHandleObjs=g.generateAvgLine(this._histogramSurface,a,b,d,this.isLeftToRight(),this.isDate,this.get("showRatioLabels"))}}});y("extend-esri")&&b.setObject("dijit.ColorInfoSlider",m,r);return m});