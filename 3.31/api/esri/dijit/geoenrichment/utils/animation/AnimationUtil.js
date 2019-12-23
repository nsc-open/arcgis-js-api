// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/utils/animation/AnimationUtil",["dojo/dom-construct","dojo/dom-style","dojo/sniff","./Animator","esri/dijit/geoenrichment/utils/DomUtil"],function(u,n,v,m,p){var q={animateResize:function(a){function k(f){a.domNode=u.create("div",{"class":a.ghostClass},document.body);n.set(a.domNode,{width:f.w+"px",height:f.h+"px"})}function b(f,g,d){var e,b=a.fromOffset.x,c=a.fromOffset.y;if("number"!==typeof b)switch(e=g.w*d.x,b){case "l":b=0;break;case "r":b=(f.w||0)-e;break;default:b=
((f.w||0)-e)/2}if("number"!==typeof c)switch(e=g.h*d.y,c){case "t":c=0;break;case "b":c=(f.h||0)-e;break;default:c=((f.h||0)-e)/2}return{x:f.x+b,y:f.y+c}}function c(b,g,d){var e,f=a.toOffset.x,c=a.toOffset.y;if("number"!==typeof f)switch(e=b.w*d.x,f){case "l":f=0;break;case "r":f=(g.w||0)-e;break;default:f=((g.w||0)-e)/2}if("number"!==typeof c)switch(e=b.h*d.y,c){case "t":c=0;break;case "b":c=(g.h||0)-e;break;default:c=((g.h||0)-e)/2}return{x:g.x+f,y:g.y+c}}var h=a.fromBox||(a.domFrom||a.domNode)&&
p.noTransformPosition(a.domFrom||a.domNode);a.animateGhost&&k(h);var l=a.toBox||p.noTransformPosition(a.domTo);if(h&&l){var r=function(b,c){var d={x:a.startScaleX,y:a.startScaleY},e=0;"fit"===d.x&&(b.w?e=d.x=b.w/c.w:d.x=0);"fit"===d.y&&(b.h?e=Math.max(d.y=b.h/c.h,e):d.y=0);d.x=d.x||e||1;d.y=d.y||e||1;return d}(h,l),t=function(b,c){var d={x:a.endScaleX,y:a.endScaleY},e=0;"fit"===d.x&&(c.w?e=d.x=c.w/b.w:d.x=0);"fit"===d.y&&(c.h?e=Math.max(d.y=c.h/b.h,e):d.y=0);d.x=d.x||e||1;d.y=d.y||e||1;return d}(h,
l);a.fromOffset&&(h=b(h,l,r));a.toOffset&&(l=c(h,l,t));var q=v("webkit")?"webkitTransformOrigin":"transformOrigin";a.domNode.style[q]="0% 0%";return m.animateProperty({obj:a.domNode,duration:a.duration||250,properties:{__x:{start:h.x,end:l.x},__y:{start:h.y,end:l.y},__scaleX:{start:r.x||1,end:t.x},__scaleY:{start:r.y||1,end:t.y}},endFunction:function(){a.animateGhost&&u.destroy(a.domNode);a.onEnd&&a.onEnd()},progressFunction:function(b,c){var d=v("webkit")?"webkitTransform":"transform";"__x"==b?a.domNode.style.left=
c+"px":"__y"==b?a.domNode.style.top=c+"px":"__scaleX"==b?a.domNode.style[d]="scaleX("+c+") scaleY("+(a.domNode.__scaleY||1)+")":"__scaleY"==b&&(a.domNode.style[d]="scaleX("+(a.domNode.__scaleX||1)+") scaleY("+c+")")}}).promise}a.onEnd&&a.onEnd()},animateShrinkResize:function(a){a.endScaleX=a.endScaleX||.1;a.endScaleY=a.endScaleY||.05;return q.animateResize(a)},animateFadeIn:function(a){return m.animateProperty({obj:a.domNode.style,duration:a.duration||250,properties:{opacity:{start:0,end:1}},endFunction:function(){a.onEnd&&
a.onEnd()}}).promise},animateFadeOut:function(a){return m.animateProperty({obj:a.domNode.style,duration:a.duration||250,properties:{opacity:{start:1,end:0}},endFunction:function(){a.onEnd&&a.onEnd()}}).promise},animateSlide:function(a,k,b){var c=b.width;m.animateProperty({obj:a.style,duration:b.duration||250,properties:{left:{start:b.leftToRight?0:-c,end:b.leftToRight?-c:0,units:"px"},right:{start:b.leftToRight?0:c,end:b.leftToRight?c:0,units:"px"}},endFunction:function(){b.onEnd&&b.onEnd()}});return m.animateProperty({obj:k.style,
duration:b.duration||250,properties:{left:{start:b.leftToRight?c:0,end:b.leftToRight?0:c,units:"px"},right:{start:b.leftToRight?-c:0,end:b.leftToRight?0:-c,units:"px"}}}).promise},animateExpand:function(a,k,b){b=b||{};a.style.overflow="hidden";k&&p.show(a);var c=n.get(a,"height");return m.animateProperty({obj:a.style,duration:b.duration,properties:{height:{start:k?0:c,end:k?c:0,units:"px"}},progressFunction:b.progressFunction,endFunction:function(){!k&&p.hide(a);n.set(a,"height","");n.set(a,"overflow",
"")}}).promise}};return q});