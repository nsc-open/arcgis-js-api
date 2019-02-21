/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["require","esri/Map","esri/Color","esri/Graphic","esri/core/requireUtils","esri/core/HandleRegistry","esri/views/MapView","esri/views/SceneView","esri/layers/GraphicsLayer","esri/symbols/SimpleMarkerSymbol","esri-playground-js/utils/CurrentState","esri-playground-js/utils/CodeGenerator","esri-playground-js/utils/geometryUtils","esri-playground-js/utils/DOMBuilder","esri-playground-js/utils/ObjectProvider","esri-playground-js/utils/symbols/WebStyleSymbol","dojo/dom","dojo/on","dojo/dom-construct","dijit/registry"],function(require,Map,Color,Graphic,requireUtils,HandleRegistry,MapView,SceneView,GraphicsLayer,SimpleMarkerSymbol,CurrentState,CodeGenerator,geometryUtils,DOMBuilder,ObjectProvider,WebStyleSymbolUtils,dom,on,domConstruct,registry){var initializer={},_views={view2d:null,view3d:null},_maps={map2d:null,map3d:null},_selectionGraphicsLayer=new GraphicsLayer,_playGraphicsLayer=new GraphicsLayer,initViewHandlers=function(){var e=dom.byId("2d"),t=dom.byId("3d"),a=CurrentState.getInstance(),n=on(e,"click",function(e){var t=CurrentState.getInstance();t.set("view",getView()),_drawOnMap(t),e.stopPropagation()});a.handles.add(n,"2d-view");var r=on(t,"click",function(e){var t=CurrentState.getInstance();t.set("view",getView(!0)),_drawOnMap(t),e.stopPropagation()});a.handles.add(r,"3d-view");var o=dom.byId("basemapSelector"),i=on(o,"change",function(){var e=_getMap(),t=_getMap(!0);e.basemap=o.value,t.basemap=o.value,sessionStorage.setItem("basemap",o.value)});a.handles.add(i,"basemap-selector")},_getMap=function(e){var t=null;if(e){if(_maps.map3d)return _maps.map3d;t=[new GraphicsLayer]}else{if(_maps.map2d)return _maps.map2d;t=[_playGraphicsLayer,_selectionGraphicsLayer]}var a=dom.byId("basemapSelector"),n=sessionStorage.getItem("basemap");return"topo"===a.value&&n&&(a.value=n),new Map({basemap:a.value||"topo",layers:t})},getView=function(e){var t=dom.byId("2d"),a=dom.byId("3d"),n=dom.byId("view2d"),r=dom.byId("view3d");return e?(n.style.display="none",r.style.display="",t.className="",a.className="active",_views.view3d?_views.view3d:(_maps.map3d||(_maps.map3d=_getMap(!0)),_views.view3d=new SceneView({container:"view3d",map:_maps.map3d,camera:{position:[-118.5,22,1032626],tilt:50,zoom:8}}))):(n.style.display="",r.style.display="none",a.className="",t.className="active",_views.view2d?_views.view2d:(_maps.map2d||(_maps.map2d=_getMap()),_views.view2d=new MapView({container:"view2d",center:[-118,34.5],zoom:8,map:_maps.map2d})))},_initCopy=function(e,t,a){ZeroClipboard.config({swfPath:require.toUrl("zeroclipboard")+"/ZeroClipboard.swf"});var n=new ZeroClipboard(e);n.on("ready",function(){n.on("copy",function(e){e.clipboardData.setData("text/plain",a?t.getValue():t.value)}),n.on("aftercopy",function(){var e=dom.byId("msg");e.innerHTML="Copied to clipboard!";var t=new Event("notification");e.dispatchEvent(t)})}),n.on("error",function(){ZeroClipboard.destroy()})},initEditor=function(){var e=dom.byId("code-area"),t=CodeMirror.fromTextArea(e,{theme:"monokai",lineNumbers:!0,readOnly:!0,gutters:["CodeMirror-linenumbers"]});_initCopy(dom.byId("copyButton"),t.getDoc(),!0),t.on("change",function(e){var t=e.getDoc().getValue(),a=CurrentState.getInstance();_isJsonRegex(t)||-1!==t.indexOf("require([")||(_drawOnMap(a),a.config.autocastType?_changeMenu(dom.byId("autocastOption")):_changeMenu(dom.byId("codeOption")))}),CurrentState.getInstance().set("editor",t)},_isJsonRegex=function(e){return""!=e&&(e=e.replace(/\\./g,"@").replace(/"[^"\\\n\r]*"/g,""),/^[,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]*$/.test(e))},_drawOnMap=function(){var currentState=CurrentState.getInstance(),map=currentState.view.map,paths=currentState.required.paths,names=currentState.required.reqVariables,configData=currentState.config,code=CodeGenerator.generateCode(currentState.ast),graphicsLayer=map.layers.getItemAt(0);graphicsLayer.removeAll(),requireUtils.when(require,paths).then(function(){for(var i=0;i<arguments[0].length;i++)this[names[i]]=arguments[0][i];var variableHolder=eval(code+configData.variable),className=configData.className;if(-1<className.indexOf("Symbol")){var geometry=geometryUtils.getGeometry(className);if(-1<code.indexOf("offset")){var geoLocSym=new SimpleMarkerSymbol({style:SimpleMarkerSymbol.STYLE_CIRCLE,color:"black",size:5}),geoLocGraphic=new Graphic({geometry:geometry,symbol:geoLocSym});graphicsLayer.add(geoLocGraphic)}var graphic=new Graphic({geometry:geometry,symbol:variableHolder});graphicsLayer.add(graphic);var state=CurrentState.getInstance();-1<className.indexOf("WebStyleSymbol")?state.view.goTo({center:[-117.9998834,34.50012405],zoom:20,heading:30,tilt:75}):-1<className.toLowerCase().indexOf("3d")&&state.view.goTo({position:[-118.5,22,1032626],tilt:50,zoom:8,heading:0})}})},_changeMenu=function(e){for(var t=dom.byId("codeBlockMenu").childNodes,a=0;a<t.length;a++)if(t[a].className){t[a].className="";break}"copyButton"!==e.id&&(e.className="active")},initCodeBlockHandlers=function(){var currentState=CurrentState.getInstance();currentState.config.autocastType?dom.byId("autocastOption").style.display="block":dom.byId("autocastOption").style.display="none";var menu=dom.byId("codeBlockMenu"),handle=on(menu,"click",function(event){var node=event.target;node.id||(node=event.target.parentNode),_changeMenu(node);var state=CurrentState.getInstance(),code=CodeGenerator.generateCode(state.ast),configData=state.config,editor=state.editor;if("codeOption"===node.id)editor.getDoc().setValue(state.required.commentReqModules.join("\n")+"\n\n"+js_beautify(code));else if("autocastOption"===node.id){var autocastAST=CodeGenerator.getAutocastAST(configData.variable,configData.autocastType,state.ast),autocastCode=CodeGenerator.generateCode(autocastAST);editor.getDoc().setValue("// autocasts as new "+configData.className+"() \n\n"+js_beautify(autocastCode))}else if("jsonOption"===node.id){var variableHolder=eval(code+configData.variable);variableHolder&&"web-style-symbol"===variableHolder.type?variableHolder.fetchSymbol().then(function(e){editor.getDoc().setValue(JSON.stringify(e.toJSON(),null,4))}):editor.getDoc().setValue(JSON.stringify(variableHolder.toJSON(),null,4))}});currentState.handles.add(handle,"code-block-menu")},_resetObj=function(e){for(var t in e)e.hasOwnProperty(t)&&"_watchCallbacks"!==t&&"className"!==t&&(e[t]instanceof Object&&!(e[t]instanceof Array)?_resetObj(e[t]):e[t]&&e.set(t,null))},initResetBtnHandlers=function(){var e=CurrentState.getInstance(),o=e.config,i=e.editor,t=on(dom.byId("reset"),"click",function(){var e=CurrentState.getInstance();_resetObj(e.statefulObject),e.set("ast",CodeGenerator.getAST(o.className,o.variable));var t=o.autocastType;if(t){var a=CodeGenerator.getAutocastAST(o.variable,t,e.ast),n=CodeGenerator.generateCode(a);i.getDoc().setValue("// autocasts as new "+o.className+"() \n\n"+js_beautify(n))}else{var r=CodeGenerator.generateCode(e.ast);i.getDoc().setValue(e.required.commentReqModules.join("\n")+"\n\n"+js_beautify(r))}});e.handles.add(t,"reset");var a=on(dom.byId("share"),"click",function(){var e=CurrentState.getInstance();dom.byId("modalBlock").style.display="block",dom.byId("shareInput").value=window.location.href+"?state="+JSON.stringify(e.statefulObject)});e.handles.add(a,"share");var n=on(dom.byId("shareClose"),"click",function(){dom.byId("modalBlock").style.display="none"});e.handles.add(n,"shareClose"),_initCopy(dom.byId("copyShare"),dom.byId("shareInput"))},initMsgCenterHandlers=function(){var e=dom.byId("msg"),t=e.parentNode;on(e,"errMsg",function(){t.style.display="block",setTimeout(function(){t.style.display="none"},4e3)}),on(e,"notification",function(){t.style.display="block",setTimeout(function(){t.style.display="none"},4e3)})},initSelectionHandlers=function(e,t){var a=dom.byId("searchBtn"),n=dom.byId("pageSubTitle"),r=dom.byId("searchContainer"),o=dom.byId("searchBox"),i=dom.byId("selectionList"),s=dom.byId("symbolsList"),l=t[0].list,d=_selectionGraphicsLayer;l.forEach(function(t){var e=document.createElement("a");e.setAttribute("href",window.location.pathname+"#/config="+t.location),e.innerHTML=t.name,i.appendChild(e),s.appendChild(e.cloneNode(!0));var a=new Graphic({geometry:geometryUtils.getGeometry(t.name),symbol:geometryUtils.getSymbol(t.name)});on(e,"mouseenter, mouseleave",function(e){e.preventDefault(),d.removeAll(),"mouseenter"===e.type&&"2d"===t.type&&d.add(a),e.stopPropagation()})}),on(a,"click",function(){pageTitle.style.display="none",n.style.display="none",r.style.display="inline",o.focus(),event.stopPropagation()}),on(document,"click",function(){pageTitle.style.display="inline",n.style.display="inline",r.style.display="none"}),on(o,"keyup",function(){for(var e=o.value.toLowerCase(),t=s.getElementsByTagName("a"),a=0;a<t.length;a++)-1<t[a].href.toLowerCase().indexOf(e)?t[a].style.display="":t[a].style.display="none"})},clearGraphicsLayer2D=function(){_playGraphicsLayer.removeAll()},init=function(){var e=CurrentState.getInstance();initViewHandlers(),initEditor();var a=e.config,t=DOMBuilder.getMainfragment(a);dom.byId("playArea").appendChild(t),e.view.when(function(){var e=CurrentState.getInstance();e.set("ast",CodeGenerator.getAST(a.className,a.variable)),e.statefulObject||e.set("statefulObject",ObjectProvider.getStatefullObject(a));var t=a.className;"PictureMarkerSymbol"===t&&null==e.statefulObject.url?e.statefulObject.set("url","https://goo.gl/58GeAx"):"TextSymbol"===t&&null==e.statefulObject.text?e.statefulObject.set("text","Sample Text"):"PictureFillSymbol"===t&&null==e.statefulObject.url?e.statefulObject.set("url","https://goo.gl/58GeAx"):"WebStyleSymbol"===t&&WebStyleSymbolUtils.init(),initCodeBlockHandlers(),initResetBtnHandlers()})},reset=function(){var e=CurrentState.getInstance();domConstruct.empty("playArea"),e.editor&&domConstruct.destroy(e.editor.getWrapperElement()),registry.toArray().forEach(function(e){"color-picker"===e.title&&e.destroy(!0)}),CurrentState.destroy()};return initializer.getView=getView,initializer.clearGraphicsLayer2D=clearGraphicsLayer2D,initializer.init=init,initializer.reset=reset,initializer.initMsgCenterHandlers=initMsgCenterHandlers,initializer.initSelectionHandlers=initSelectionHandlers,initializer});