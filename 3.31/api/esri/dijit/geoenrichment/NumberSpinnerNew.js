// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/NumberSpinnerNew","dojo/_base/declare dojo/aspect dojo/on dojo/dom-construct dijit/form/NumberSpinner ./utils/InvokeUtil ./utils/ObjectUtil".split(" "),function(f,g,d,h,k,l,e){return f(k,{accumulateTimeout:300,displayValueFormatter:null,displayValueLabel:null,postCreate:function(){this.inherited(arguments);var a=this;d(this.upArrowNode,"click",function(){a.onChangeUser()});d(this.downArrowNode,"click",function(){a.onChangeUser()});d(this.textbox,"keyup",function(){l.invoke(a,
"onChangeUser",a.accumulateTimeout)});this.displayValueFormatter&&(this.displayValueLabel=h.create("div",null,this.domNode),this.domNode.style.position="relative",this.displayValueLabel.style.position="absolute",this.textbox.style.opacity="0.001",this.displayValueLabel.style.display="",g.after(this,"onChange",this._updateDisplayValueLabel.bind(this)),setTimeout(this._updateDisplayValueLabel.bind(this)),a=this,d(this,"focus",function(){a.textbox.style.opacity="";a.displayValueLabel.style.display="none"}),
d(this,"blur",function(){a.textbox.style.opacity="0.001";a.displayValueLabel.style.display=""}))},_updateDisplayValueLabel:function(){if(this.displayValueLabel){var a=this.displayValueLabel.style.display;this.displayValueLabel.style.display="";this.displayValueLabel.innerHTML=this.displayValueFormatter(this.textbox.value);this.displayValueLabel.style.top=Math.max(2,(this.domNode.clientHeight-this.displayValueLabel.clientHeight)/2)+"px";this.displayValueLabel.style.right=Math.max(24,this.downArrowNode.clientWidth+
5)+"px";this.displayValueLabel.style.display=a}},validator:function(a,c){var b=e.parseNumber(a);return isNaN(b)||""===a?!1:c&&b>=c.min&&b<=c.max},_getValueAttr:function(){if(""!==this.textbox.value){var a=e.parseNumber(this.textbox.value);if(!isNaN(a))return a}return this.inherited(arguments)},_lastSetValue:null,_setValueAttr:function(a){"number"!==typeof a||isNaN(a)||(this._lastSetValue=a);this.inherited(arguments);this._updateDisplayValueLabel()},_setBlurValue:function(){function a(a){var b=c._lastSetValue!==
a;c.set("value",a);b&&c.onChangeUser()}var c=this;this.inherited(arguments);if(this.textbox.value){var b=this.getConstrainedValue();isNaN(b)?a(this._lastSetValue):a(b)}else a(this._lastSetValue)},getConstrainedValue:function(){if(""!==this.textbox.value){var a=e.parseNumber(this.textbox.value);if(!isNaN(a)){if(this.constraints){if(void 0!==this.constraints.min&&a<this.constraints.min)return this.constraints.min;if(void 0!==this.constraints.max&&a>this.constraints.max)return this.constraints.max}return a}}return NaN},
onChangeUser:function(){}})});