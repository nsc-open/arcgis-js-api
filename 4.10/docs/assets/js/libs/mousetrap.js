/*!
* mousetrap - https://craig.is/killing/mice - A simple library for handling keyboard shortcuts in Javascript
*  
*                               Apache License 
*                         Version 2.0, January 2004 
*                      http://www.apache.org/licenses/ 
*  
* TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION 
*  
* 1. Definitions. 
*  
*    "License" shall mean the terms and conditions for use, reproduction, 
*    and distribution as defined by Sections 1 through 9 of this document. 
*  
*    "Licensor" shall mean the copyright owner or entity authorized by 
*    the copyright owner that is granting the License. 
*  
*    "Legal Entity" shall mean the union of the acting entity and all 
*    other entities that control, are controlled by, or are under common 
*    control with that entity. For the purposes of this definition, 
*    "control" means (i) the power, direct or indirect, to cause the 
*    direction or management of such entity, whether by contract or 
*    otherwise, or (ii) ownership of fifty percent (50%) or more of the 
*    outstanding shares, or (iii) beneficial ownership of such entity. 
*  
*    "You" (or "Your") shall mean an individual or Legal Entity 
*    exercising permissions granted by this License. 
*  
*    "Source" form shall mean the preferred form for making modifications, 
*    including but not limited to software source code, documentation 
*    source, and configuration files. 
*  
*    "Object" form shall mean any form resulting from mechanical 
*    transformation or translation of a Source form, including but 
*    not limited to compiled object code, generated documentation, 
*    and conversions to other media types. 
*  
*    "Work" shall mean the work of authorship, whether in Source or 
*    Object form, made available under the License, as indicated by a 
*    copyright notice that is included in or attached to the work 
*    (an example is provided in the Appendix below). 
*  
*    "Derivative Works" shall mean any work, whether in Source or Object 
*    form, that is based on (or derived from) the Work and for which the 
*    editorial revisions, annotations, elaborations, or other modifications 
*    represent, as a whole, an original work of authorship. For the purposes 
*    of this License, Derivative Works shall not include works that remain 
*    separable from, or merely link (or bind by name) to the interfaces of, 
*    the Work and Derivative Works thereof. 
*  
*    "Contribution" shall mean any work of authorship, including 
*    the original version of the Work and any modifications or additions 
*    to that Work or Derivative Works thereof, that is intentionally 
*    submitted to Licensor for inclusion in the Work by the copyright owner 
*    or by an individual or Legal Entity authorized to submit on behalf of 
*    the copyright owner. For the purposes of this definition, "submitted" 
*    means any form of electronic, verbal, or written communication sent 
*    to the Licensor or its representatives, including but not limited to 
*    communication on electronic mailing lists, source code control systems, 
*    and issue tracking systems that are managed by, or on behalf of, the 
*    Licensor for the purpose of discussing and improving the Work, but 
*    excluding communication that is conspicuously marked or otherwise 
*    designated in writing by the copyright owner as "Not a Contribution." 
*  
*    "Contributor" shall mean Licensor and any individual or Legal Entity 
*    on behalf of whom a Contribution has been received by Licensor and 
*    subsequently incorporated within the Work. 
*  
* 2. Grant of Copyright License. Subject to the terms and conditions of 
*    this License, each Contributor hereby grants to You a perpetual, 
*    worldwide, non-exclusive, no-charge, royalty-free, irrevocable 
*    copyright license to reproduce, prepare Derivative Works of, 
*    publicly display, publicly perform, sublicense, and distribute the 
*    Work and such Derivative Works in Source or Object form. 
*  
* 3. Grant of Patent License. Subject to the terms and conditions of 
*    this License, each Contributor hereby grants to You a perpetual, 
*    worldwide, non-exclusive, no-charge, royalty-free, irrevocable 
*    (except as stated in this section) patent license to make, have made, 
*    use, offer to sell, sell, import, and otherwise transfer the Work, 
*    where such license applies only to those patent claims licensable 
*    by such Contributor that are necessarily infringed by their 
*    Contribution(s) alone or by combination of their Contribution(s) 
*    with the Work to which such Contribution(s) was submitted. If You 
*    institute patent litigation against any entity (including a 
*    cross-claim or counterclaim in a lawsuit) alleging that the Work 
*    or a Contribution incorporated within the Work constitutes direct 
*    or contributory patent infringement, then any patent licenses 
*    granted to You under this License for that Work shall terminate 
*    as of the date such litigation is filed. 
*  
* 4. Redistribution. You may reproduce and distribute copies of the 
*    Work or Derivative Works thereof in any medium, with or without 
*    modifications, and in Source or Object form, provided that You 
*    meet the following conditions: 
*  
*    (a) You must give any other recipients of the Work or 
*        Derivative Works a copy of this License; and 
*  
*    (b) You must cause any modified files to carry prominent notices 
*        stating that You changed the files; and 
*  
*    (c) You must retain, in the Source form of any Derivative Works 
*        that You distribute, all copyright, patent, trademark, and 
*        attribution notices from the Source form of the Work, 
*        excluding those notices that do not pertain to any part of 
*        the Derivative Works; and 
*  
*    (d) If the Work includes a "NOTICE" text file as part of its 
*        distribution, then any Derivative Works that You distribute must 
*        include a readable copy of the attribution notices contained 
*        within such NOTICE file, excluding those notices that do not 
*        pertain to any part of the Derivative Works, in at least one 
*        of the following places: within a NOTICE text file distributed 
*        as part of the Derivative Works; within the Source form or 
*        documentation, if provided along with the Derivative Works; or, 
*        within a display generated by the Derivative Works, if and 
*        wherever such third-party notices normally appear. The contents 
*        of the NOTICE file are for informational purposes only and 
*        do not modify the License. You may add Your own attribution 
*        notices within Derivative Works that You distribute, alongside 
*        or as an addendum to the NOTICE text from the Work, provided 
*        that such additional attribution notices cannot be construed 
*        as modifying the License. 
*  
*    You may add Your own copyright statement to Your modifications and 
*    may provide additional or different license terms and conditions 
*    for use, reproduction, or distribution of Your modifications, or 
*    for any such Derivative Works as a whole, provided Your use, 
*    reproduction, and distribution of the Work otherwise complies with 
*    the conditions stated in this License. 
*  
* 5. Submission of Contributions. Unless You explicitly state otherwise, 
*    any Contribution intentionally submitted for inclusion in the Work 
*    by You to the Licensor shall be under the terms and conditions of 
*    this License, without any additional terms or conditions. 
*    Notwithstanding the above, nothing herein shall supersede or modify 
*    the terms of any separate license agreement you may have executed 
*    with Licensor regarding such Contributions. 
*  
* 6. Trademarks. This License does not grant permission to use the trade 
*    names, trademarks, service marks, or product names of the Licensor, 
*    except as required for reasonable and customary use in describing the 
*    origin of the Work and reproducing the content of the NOTICE file. 
*  
* 7. Disclaimer of Warranty. Unless required by applicable law or 
*    agreed to in writing, Licensor provides the Work (and each 
*    Contributor provides its Contributions) on an "AS IS" BASIS, 
*    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or 
*    implied, including, without limitation, any warranties or conditions 
*    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A 
*    PARTICULAR PURPOSE. You are solely responsible for determining the 
*    appropriateness of using or redistributing the Work and assume any 
*    risks associated with Your exercise of permissions under this License. 
*  
* 8. Limitation of Liability. In no event and under no legal theory, 
*    whether in tort (including negligence), contract, or otherwise, 
*    unless required by applicable law (such as deliberate and grossly 
*    negligent acts) or agreed to in writing, shall any Contributor be 
*    liable to You for damages, including any direct, indirect, special, 
*    incidental, or consequential damages of any character arising as a 
*    result of this License or out of the use or inability to use the 
*    Work (including but not limited to damages for loss of goodwill, 
*    work stoppage, computer failure or malfunction, or any and all 
*    other commercial damages or losses), even if such Contributor 
*    has been advised of the possibility of such damages. 
*  
* 9. Accepting Warranty or Additional Liability. While redistributing 
*    the Work or Derivative Works thereof, You may choose to offer, 
*    and charge a fee for, acceptance of support, warranty, indemnity, 
*    or other liability obligations and/or rights consistent with this 
*    License. However, in accepting such obligations, You may act only 
*    on Your own behalf and on Your sole responsibility, not on behalf 
*    of any other Contributor, and only if You agree to indemnify, 
*    defend, and hold each Contributor harmless for any liability 
*    incurred by, or claims asserted against, such Contributor by reason 
*    of your accepting any such warranty or additional liability. 
*  
* END OF TERMS AND CONDITIONS 
*  
* --- Exceptions to the Apache 2.0 License ---- 
*  
* As an exception, if, as a result of your compiling your source code, portions 
* of this Software are embedded into an Object form of such source code, you 
* may redistribute such embedded portions in such Object form without complying 
* with the conditions of Sections 4(a), 4(b) and 4(d) of the License. 
*  
* In addition, if you combine or link compiled forms of this Software with 
* software that is licensed under the GPLv2 ("Combined Software") and if a 
* court of competent jurisdiction determines that the patent provision (Section 
* 3), the indemnity provision (Section 9) or other Section of the License 
* conflicts with the conditions of the GPLv2, you may retroactively and 
* prospectively choose to deem waived or otherwise exclude such Section(s) of 
* the License, but only in their entirety and only with respect to the Combined 
* Software. 
*/
(function(window,document,undefined){if(!window){return}var _MAP={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"};var _KEYCODE_MAP={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"};var _SHIFT_MAP={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"};var _SPECIAL_ALIASES={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"};var _REVERSE_MAP;for(var i=1;i<20;++i){_MAP[111+i]="f"+i}for(i=0;i<=9;++i){_MAP[i+96]=i.toString()}function _addEvent(object,type,callback){if(object.addEventListener){object.addEventListener(type,callback,false);return}object.attachEvent("on"+type,callback)}function _characterFromEvent(e){if(e.type=="keypress"){var character=String.fromCharCode(e.which);if(!e.shiftKey){character=character.toLowerCase()}return character}if(_MAP[e.which]){return _MAP[e.which]}if(_KEYCODE_MAP[e.which]){return _KEYCODE_MAP[e.which]}return String.fromCharCode(e.which).toLowerCase()}function _modifiersMatch(modifiers1,modifiers2){return modifiers1.sort().join(",")===modifiers2.sort().join(",")}function _eventModifiers(e){var modifiers=[];if(e.shiftKey){modifiers.push("shift")}if(e.altKey){modifiers.push("alt")}if(e.ctrlKey){modifiers.push("ctrl")}if(e.metaKey){modifiers.push("meta")}return modifiers}function _preventDefault(e){if(e.preventDefault){e.preventDefault();return}e.returnValue=false}function _stopPropagation(e){if(e.stopPropagation){e.stopPropagation();return}e.cancelBubble=true}function _isModifier(key){return key=="shift"||key=="ctrl"||key=="alt"||key=="meta"}function _getReverseMap(){if(!_REVERSE_MAP){_REVERSE_MAP={};for(var key in _MAP){if(key>95&&key<112){continue}if(_MAP.hasOwnProperty(key)){_REVERSE_MAP[_MAP[key]]=key}}}return _REVERSE_MAP}function _pickBestAction(key,modifiers,action){if(!action){action=_getReverseMap()[key]?"keydown":"keypress"}if(action=="keypress"&&modifiers.length){action="keydown"}return action}function _keysFromString(combination){if(combination==="+"){return["+"]}combination=combination.replace(/\+{2}/g,"+plus");return combination.split("+")}function _getKeyInfo(combination,action){var keys;var key;var i;var modifiers=[];keys=_keysFromString(combination);for(i=0;i<keys.length;++i){key=keys[i];if(_SPECIAL_ALIASES[key]){key=_SPECIAL_ALIASES[key]}if(action&&action!="keypress"&&_SHIFT_MAP[key]){key=_SHIFT_MAP[key];modifiers.push("shift")}if(_isModifier(key)){modifiers.push(key)}}action=_pickBestAction(key,modifiers,action);return{key:key,modifiers:modifiers,action:action}}function _belongsTo(element,ancestor){if(element===null||element===document){return false}if(element===ancestor){return true}return _belongsTo(element.parentNode,ancestor)}function Mousetrap(targetElement){var self=this;targetElement=targetElement||document;if(!(self instanceof Mousetrap)){return new Mousetrap(targetElement)}self.target=targetElement;self._callbacks={};self._directMap={};var _sequenceLevels={};var _resetTimer;var _ignoreNextKeyup=false;var _ignoreNextKeypress=false;var _nextExpectedAction=false;function _resetSequences(doNotReset){doNotReset=doNotReset||{};var activeSequences=false,key;for(key in _sequenceLevels){if(doNotReset[key]){activeSequences=true;continue}_sequenceLevels[key]=0}if(!activeSequences){_nextExpectedAction=false}}function _getMatches(character,modifiers,e,sequenceName,combination,level){var i;var callback;var matches=[];var action=e.type;if(!self._callbacks[character]){return[]}if(action=="keyup"&&_isModifier(character)){modifiers=[character]}for(i=0;i<self._callbacks[character].length;++i){callback=self._callbacks[character][i];if(!sequenceName&&callback.seq&&_sequenceLevels[callback.seq]!=callback.level){continue}if(action!=callback.action){continue}if(action=="keypress"&&!e.metaKey&&!e.ctrlKey||_modifiersMatch(modifiers,callback.modifiers)){var deleteCombo=!sequenceName&&callback.combo==combination;var deleteSequence=sequenceName&&callback.seq==sequenceName&&callback.level==level;if(deleteCombo||deleteSequence){self._callbacks[character].splice(i,1)}matches.push(callback)}}return matches}function _fireCallback(callback,e,combo,sequence){if(self.stopCallback(e,e.target||e.srcElement,combo,sequence)){return}if(callback(e,combo)===false){_preventDefault(e);_stopPropagation(e)}}self._handleKey=function(character,modifiers,e){var callbacks=_getMatches(character,modifiers,e);var i;var doNotReset={};var maxLevel=0;var processedSequenceCallback=false;for(i=0;i<callbacks.length;++i){if(callbacks[i].seq){maxLevel=Math.max(maxLevel,callbacks[i].level)}}for(i=0;i<callbacks.length;++i){if(callbacks[i].seq){if(callbacks[i].level!=maxLevel){continue}processedSequenceCallback=true;doNotReset[callbacks[i].seq]=1;_fireCallback(callbacks[i].callback,e,callbacks[i].combo,callbacks[i].seq);continue}if(!processedSequenceCallback){_fireCallback(callbacks[i].callback,e,callbacks[i].combo)}}var ignoreThisKeypress=e.type=="keypress"&&_ignoreNextKeypress;if(e.type==_nextExpectedAction&&!_isModifier(character)&&!ignoreThisKeypress){_resetSequences(doNotReset)}_ignoreNextKeypress=processedSequenceCallback&&e.type=="keydown"};function _handleKeyEvent(e){if(typeof e.which!=="number"){e.which=e.keyCode}var character=_characterFromEvent(e);if(!character){return}if(e.type=="keyup"&&_ignoreNextKeyup===character){_ignoreNextKeyup=false;return}self.handleKey(character,_eventModifiers(e),e)}function _resetSequenceTimer(){clearTimeout(_resetTimer);_resetTimer=setTimeout(_resetSequences,1e3)}function _bindSequence(combo,keys,callback,action){_sequenceLevels[combo]=0;function _increaseSequence(nextAction){return function(){_nextExpectedAction=nextAction;++_sequenceLevels[combo];_resetSequenceTimer()}}function _callbackAndReset(e){_fireCallback(callback,e,combo);if(action!=="keyup"){_ignoreNextKeyup=_characterFromEvent(e)}setTimeout(_resetSequences,10)}for(var i=0;i<keys.length;++i){var isFinal=i+1===keys.length;var wrappedCallback=isFinal?_callbackAndReset:_increaseSequence(action||_getKeyInfo(keys[i+1]).action);_bindSingle(keys[i],wrappedCallback,action,combo,i)}}function _bindSingle(combination,callback,action,sequenceName,level){self._directMap[combination+":"+action]=callback;combination=combination.replace(/\s+/g," ");var sequence=combination.split(" ");var info;if(sequence.length>1){_bindSequence(combination,sequence,callback,action);return}info=_getKeyInfo(combination,action);self._callbacks[info.key]=self._callbacks[info.key]||[];_getMatches(info.key,info.modifiers,{type:info.action},sequenceName,combination,level);self._callbacks[info.key][sequenceName?"unshift":"push"]({callback:callback,modifiers:info.modifiers,action:info.action,seq:sequenceName,level:level,combo:combination})}self._bindMultiple=function(combinations,callback,action){for(var i=0;i<combinations.length;++i){_bindSingle(combinations[i],callback,action)}};_addEvent(targetElement,"keypress",_handleKeyEvent);_addEvent(targetElement,"keydown",_handleKeyEvent);_addEvent(targetElement,"keyup",_handleKeyEvent)}Mousetrap.prototype.bind=function(keys,callback,action){var self=this;keys=keys instanceof Array?keys:[keys];self._bindMultiple.call(self,keys,callback,action);return self};Mousetrap.prototype.unbind=function(keys,action){var self=this;return self.bind.call(self,keys,function(){},action)};Mousetrap.prototype.trigger=function(keys,action){var self=this;if(self._directMap[keys+":"+action]){self._directMap[keys+":"+action]({},keys)}return self};Mousetrap.prototype.reset=function(){var self=this;self._callbacks={};self._directMap={};return self};Mousetrap.prototype.stopCallback=function(e,element){var self=this;if((" "+element.className+" ").indexOf(" mousetrap ")>-1){return false}if(_belongsTo(element,self.target)){return false}return element.tagName=="INPUT"||element.tagName=="SELECT"||element.tagName=="TEXTAREA"||element.isContentEditable};Mousetrap.prototype.handleKey=function(){var self=this;return self._handleKey.apply(self,arguments)};Mousetrap.addKeycodes=function(object){for(var key in object){if(object.hasOwnProperty(key)){_MAP[key]=object[key]}}_REVERSE_MAP=null};Mousetrap.init=function(){var documentMousetrap=Mousetrap(document);for(var method in documentMousetrap){if(method.charAt(0)!=="_"){Mousetrap[method]=function(method){return function(){return documentMousetrap[method].apply(documentMousetrap,arguments)}}(method)}}};Mousetrap.init();window.Mousetrap=Mousetrap;if(typeof module!=="undefined"&&module.exports){module.exports=Mousetrap}if(typeof define==="function"&&define.amd){define(function(){return Mousetrap})}})(typeof window!=="undefined"?window:null,typeof window!=="undefined"?document:null);