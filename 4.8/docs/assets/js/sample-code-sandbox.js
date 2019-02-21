/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
require(["calcite-web","beautify-web/beautify-html","eligrey/FileSaver","mousetrap","dojo/_base/connect","dojo/_base/event","dojo/dom-construct","dojo/dom-style","dojo/has","dojo/on","dojo/query","esri/config","esri/core/urlUtils","esri/request","dojo/NodeList-dom","dojo/domReady!"],function(o,a,n,e,t,i,s,r,c,d,l,m,u,p){var f,b,g,h,x,v,y,C,S,j,w,z,E,O,F,q=!1,_=14.11,k=!1,K=!1,A="codepen",T="https://codepen.io/pen/define/",L={title:"My first sample",editors:"100",html:"",layout:"left"};function H(){K&&M(),O.toggleClass("sandbox-container-minimized"),z.toggleClass("sandbox-output-maximized"),y.toggleClass("sandbox-container-minimized"),N(),f.resize(!0),k=!k}function M(){k&&H(),O.toggleClass("sandbox-container-maximized"),z.toggleClass("sandbox-output-minimized"),y.toggleClass("sandbox-container-minimized"),N(),f.resize(!0),K=!K}function V(){var e=j.attr("data-sample-description-url")[0];document.location=e}function D(){R("saveFile");try{if(!!new Blob){var e=new Blob([f.getSession().getValue()],{type:"text/plain;charset='"+document.characterSet+"'"});n(e,g+".html")}}catch(e){console.log("Download is not supported for %s",navigator.userAgent)}}function I(){R("openJSShare");var e=window.open("about:blank",function(){function e(e){for(var n="",t=0;t<e;t++)n+=(65536*(1+Math.random())|0).toString(16).substring(1);return n}return[e(2),e(1),e(1),e(1),e(3)].join("-")}()),n=function(e){var n=e,t=/<title>[^<]*<\/title>/im,o=e.match(t),a=o?o[0]:"",i=a.replace(/<\/?title>/gim,"");if(L.title=i,a&&""!==a){var s=h.match(/[-\w]*(?=\/live(\/index\.html)?)/im),r=s?s[0]:"sample",c="https://developers.arcgis.com/javascript/latest/"+r+"/index.html",d="";"jsbin"===A&&(d+='<meta name="description" content="['+i+']">\n  '),d+="\x3c!--\n  ArcGIS API for JavaScript, https://js.arcgis.com\n  For more information about the {{ sample_name }} sample, read the original sample description at developers.arcgis.com.\n  {{ sample_url }}\n  --\x3e\n".replace(/{{\ssample_name\s}}/,r).replace(/{{\ssample_url\s}}/,c)+a,n=e.replace(t,d)}return n}(f.getSession().getValue());localStorage&&localStorage.jsShareType&&(A=localStorage.jsShareType);var t,o=["html"],a=e.document.createElement("form");"jsbin"===A?T="https://jsbin.com?html,output":"codepen"===A&&(T="https://codepen.io/pen/define/"),a.setAttribute("target","_self"),a.setAttribute("method","post"),a.setAttribute("action",T),a.style.display="none";for(var i=0;i<o.length;i++)t=e.document.createElement("input"),a.appendChild(t),t.type="hidden","jsbin"===A?(t.name=o[i],t.value=encodeURIComponent(n)):"codepen"===A?(L.html=n.replace(/<!DOCTYPE html>\n?/i,""),t.name="data",t.value=JSON.stringify(L)):t.value="";e.document.body.appendChild(a),a.submit()}function U(e){i.stop(e),y.addClass("resizing"),E.addClass("resizing");var o=r.get("wrapper","width"),n=d(window,"mousemove",function(e){var n,t;i.stop(e),50<e.pageX&&e.pageX+70<o&&(n=e.pageX+11,t=o,O[0].style.right=t-n+"px",z[0].style.left=n+"px",f.resize(!0))});d.once(parent.document,"mouseup",function(e){y.removeClass("resizing"),E.removeClass("resizing"),t.disconnect(n)})}function N(){z.removeAttr("style"),O.removeAttr("style")}function P(){R("updateSandboxOutput"),F.addClass("is-active"),(E=l(".js-sandbox-iframe"))&&s.destroy(E[0]),x&&t.disconnect(x);var e=s.create("iframe",{class:"sandbox-iframe js-sandbox-iframe",allowfullscreen:"true"},z[0]);x=d(e,"load",function(){E=l(".js-sandbox-iframe"),F.removeClass("is-active"),w.removeClass("btn-disabled")}),R("sandboxIsLoaded"),idoc=e.contentWindow?e.contentWindow:e.contentDocument.document?e.contentDocument.document:e.contentDocument;var n=f.getSession().getValue();n=function(t){var e=t.match(/issMeshUrl = ".+?"/g);e&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/url = ".+?"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/".\/Clock.js"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/".\/clock.svg"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/image: ".+?"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/url: ".+?"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/src='.+?'/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split("'")[1];t=t.replace(n,h+"/"+n)});(e=t.match(/getUniqueValueSymbol\(".+?"/g))&&(e=(e=e.filter(function(e){return-1===e.indexOf("//")})).filter(function(e){return-1===e.indexOf("{")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/src=".+?"/g))&&(e=(e=e.filter(function(e){return-1===e.indexOf("//")})).filter(function(e){return-1===e.indexOf("{")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,h+"/"+n)});(e=t.match(/"dojo\/text!.+?"/g))&&(e=e.filter(function(e){return-1===e.indexOf("//")})).forEach(function(e){var n=e.split('"')[1];t=t.replace(n,"dojo/text!"+h+"/brightest.txt")});if(/layers-scenelayerview-query/.test(h)){var n=/<img[^>]*>/im,o=new RegExp(h+"/");if(n.test(t)){var a=t.match(n)[0],i=a.replace(o,"");t=t.replace(n,i)}}return t}(n),c("ie")?(idoc.contents=n,e.src="javascript:window['contents']"):(idoc.document.open(),idoc.document.write(n),idoc.document.close())}function R(e){q&&console&&console.log&&console.log(Array.prototype.slice.call(arguments))}m.request.corsEnabledServers.push("https://developers.arcgis.com/javascript/samples"),o.init(),function(){R("setSampleFolder");var e=u.urlToObject(document.location.href);e.query=e.query||{};var n=document.location.pathname.replace("sample-code/sandbox/index.html","");e.query&&e.query.sample?(g=e.query.sample,document.title="Sandbox: "+g,h=document.location.protocol+"//"+document.location.host+n+"sample-code/"+e.query.sample+"/live"):h=n+"sample-code/intro-mapview/live"}(),function(){R("startEditor"),ace.config.set("workerPath","../../assets/js/libs/ace");var e=l(".js-sandbox-editor")[0];(f=ace.edit(e)).$blockScrolling=1/0,f.setPrintMarginColumn(0),f.setTheme("ace/theme/github"),f.getSession().setTabSize(2),f.getSession().setUseSoftTabs(!0),f.getSession().setMode("ace/mode/html"),f.setOption("wrap",!0),v=_,localStorage&&(localStorage.sandboxFontSize?localStorage.sandboxFontSize&&(v=parseInt(localStorage.sandboxFontSize),f.setFontSize(v)):localStorage.sandboxFontSize=v);var t={current:"ace",ace:null,vim:void 0};ace.config.loadModule("ace/keyboard/vim",function(e){t.vim=e.handler;var n=e.CodeMirror.Vim;n.defineEx("write","w",function(e,n){e.ace.execCommand("sandboxSaveCommand")})}),f.commands.removeCommand({name:"gotoline",bindKey:{win:"Ctrl-L",mac:"Command-L"}}),f.commands.addCommand({name:"gotoline",bindKey:{win:"Ctrl-Alt-G",mac:"Option-Command-G"},exec:function(e,n){"number"!=typeof n&&(n=parseInt(prompt("Enter line number:"),10)),isNaN(n)||e.gotoLine(n)},readOnly:!0}),f.commands.addCommand({name:"sandboxSaveCommand",bindKey:{win:"Ctrl-Enter",mac:"Command-Enter"},exec:function(e){P()}}),f.commands.addCommand({name:"sandboxKeybindingCommand",bindKey:{win:"Ctrl-K",mac:"Command-K"},exec:function(e){"ace"===t.current?(e.setKeyboardHandler(t.vim),t.current="vim"):(e.setKeyboardHandler(t.ace),t.current="ace")}}),f.commands.addCommand({name:"sandboxCommentLinesCommand",bindKey:{win:"Ctrl-/",mac:"Command-/"},exec:function(e){e.toggleCommentLines()}}),f.commands.addCommand({name:"sandboxBeautifyCommand",bindKey:{win:"Ctrl-Alt-L",mac:"Option-Command-L"},exec:function(e){var n,t;n=f.getSession().getValue(),t=a.html_beautify(n,{brace_style:"none",end_with_newline:!1,extra_liners:"",indent_size:2,max_preserve_newlines:2,preserve_newlines:!0,wrap_line_length:80}),f.getSession().setValue(t)}}),f.commands.addCommand({name:"sandboxToogleHTMLCommand",bindKey:{win:"Ctrl-1",mac:"Ctrl-1"},exec:function(e){H()}}),f.commands.addCommand({name:"sandboxToogleOutputCommand",bindKey:{win:"Ctrl-2",mac:"Ctrl-2"},exec:function(e){M()}}),f.commands.addCommand({name:"sandboxIncreaseFontCommand",bindKey:{win:"Ctrl-Shift-.",mac:"Command-Shift-."},exec:function(e){"use strict";v++,e.setFontSize(v),18<(localStorage.sandboxFontSize=v)&&""===document.querySelector(".js-sandbox-editor").style.lineHeight&&(document.querySelector(".js-sandbox-editor").style.lineHeight=1.4)}}),f.commands.addCommand({name:"sandboxDecreaseFontCommand",bindKey:{win:"Ctrl-Shift-,",mac:"Command-Shift-,"},exec:function(e){"use strict";v--,e.setFontSize(v),(localStorage.sandboxFontSize=v)<18&&""!==document.querySelector(".js-sandbox-editor").style.lineHeight&&(document.querySelector(".js-sandbox-editor").style.lineHeight="")}}),f.commands.addCommand({name:"sandboxResetFontCommand",bindKey:{win:"Ctrl-0",mac:"Command-0"},exec:function(e){"use strict";e.setFontSize(_),v=_,localStorage&&delete localStorage.sandboxFontSize,document.querySelector(".js-sandbox-editor").style.lineHeight="",document.querySelector(".js-sandbox-editor").style.fontSize=""}}),f.commands.addCommand({name:"blur",bindKey:{win:"Shift-Esc",mac:"Shift-Esc"},exec:function(e){"use strict";e.isFocused()&&e.blur()}})}(),R("bindEventHandlers"),j=l(".js-btn-sample-description"),S=l(".js-btn-save-file"),C=l(".js-btn-jsshare"),w=l(".js-btn-refresh"),O=l(".js-sandbox-container"),y=l(".js-sandbox-handle"),z=l(".js-sandbox-output"),F=l(".js-loader"),j.on("click",V),S.on("click",D),C.on("click",I),w.on("click",P),l(".js-btn-sandbox-keyboard-shortcuts").on("click",function(){o.bus.emit("modal:open",{id:"modal-keyboard-shortcuts"})}),b=document.documentElement.getAttribute("data-platform"),/mac/i.test(b)&&o.addClass(o.findElements("body")[0],"macintosh"),o.bus.on("keyboard:mousetrap",function(e){var n=e.event.key,t=e.combination;"?"===n?o.bus.emit("modal:open","modal-keyboard-shortcuts"):"s"===n&&"g s"===t?V():"c"===n?(e.event.preventDefault(),f.isFocused()||f.focus()):"d"===n?D():"s"===n?I():"Enter"!==n||"command+enter"!==t&&"ctrl+enter"!==t?"h"===n&&"t h"===t?H():"o"===n&&"t o"===t&&M():P()}),e.bind(["g s","c","d","s","command+enter","ctrl+enter","t h","t o","?"],function(e,n){o.bus.emit("keyboard:mousetrap",{event:e,combination:n})}),y.on("mousedown",U),j.attr("data-sample-description-url","../../sample-code/"+g+"/index.html"),d(window,"resize",N),R("fetchSandboxSampleCode"),p(h+"/index.html",{responseType:"text"}).then(function(e){R("handleSample");var n=e.data;f.getSession().setValue(n),j.toggleClass("btn-disabled"),S.removeClass("btn-disabled"),C.removeClass("btn-disabled"),P()},function(e){console&&console.log&&console.log("error getting code sample: ",e)}),window.jsshare=function(e){"jsbin"===e?A="jsbin":"codepen"===e&&(A="codepen"),localStorage.jsShareType=A}});