// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/layers/vectorTiles/views/webgl/Program",["require","exports","dojo/has","./ShaderTranspiler"],function(l,m,h,k){var g=h("dojo-debug-messages");return function(){function d(a,b,c,e,f){void 0===f&&(f={});this._glName=this._context=null;this._locations={};this._id=void 0;this._initialized=!1;this._fShader=this._vShader=null;this._defines={};this._nameToUniformLocation={};this._nameToAttribLocation={};this._nameToUniform1={};this._nameToUniform2={};this._nameToUniform3={};this._nameToUniform4=
{};this._nameToUniformMatrix3={};this._nameToUniformMatrix4={};a||console.error("RenderingContext isn't initialized!");0===b.length&&console.error("Shaders source should not be empty!");this._context=a;this._vertexShaderSource=b;this._fragmentShaderSource=c;if(Array.isArray(f))for(b=0;b<f.length;b++)this._defines[f[b]]="1";else this._defines=f;this._id=d._nextId++;this._locations=e;h("esri-webgl-debug")&&a.instanceCounter.incrementCount(3)}Object.defineProperty(d.prototype,"id",{get:function(){return this._id},
enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0});d.prototype.getDefine=function(a){return this._defines[a]};d.prototype.dispose=function(){if(this._context){var a=this._context.gl;this._vShader&&(a.deleteShader(this._vShader),this._vShader=null);this._fShader&&(a.deleteShader(this._fShader),
this._fShader=null);this._glName&&(a.deleteProgram(this._glName),this._glName=null);h("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(3);this._context=null}};d.prototype.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633);this._fShader=this._loadShader(35632);this._vShader&&this._fShader||console.error("Error loading shaders!");var a=this._context.gl,b=a.createProgram();a.attachShader(b,this._vShader);a.attachShader(b,this._fShader);for(var c in this._locations)a.bindAttribLocation(b,
this._locations[c],c);a.linkProgram(b);a.getProgramParameter(b,a.LINK_STATUS)||console.error("Could not initialize shader\nVALIDATE_STATUS: "+a.getProgramParameter(b,a.VALIDATE_STATUS)+", gl error ["+a.getError()+"]infoLog: "+a.getProgramInfoLog(b));this._glName=b;this._initialized=!0}};d.prototype.getUniformLocation=function(a){this.initialize();void 0===this._nameToUniformLocation[a]&&(this._nameToUniformLocation[a]=this._context.gl.getUniformLocation(this._glName,a));return this._nameToUniformLocation[a]};
d.prototype.hasUniform=function(a){return null!==this.getUniformLocation(a)};d.prototype.getAttribLocation=function(a){this.initialize();void 0===this._nameToAttribLocation[a]&&(this._nameToAttribLocation[a]=this._context.gl.getAttribLocation(this._glName,a));return this._nameToAttribLocation[a]};d.prototype.setUniform1i=function(a,b){var c=this._nameToUniform1[a];if(void 0===c||b!==c)this._context.bindProgram(this),this._context.gl.uniform1i(this.getUniformLocation(a),b),this._nameToUniform1[a]=
b};d.prototype.setUniform1f=function(a,b){var c=this._nameToUniform1[a];if(void 0===c||b!==c)this._context.bindProgram(this),this._context.gl.uniform1f(this.getUniformLocation(a),b),this._nameToUniform1[a]=b};d.prototype.setUniform1fv=function(a,b){var c=this._nameToUniform2[a];void 0!==c&&d._arraysEqual(b,c)||(this._context.bindProgram(this),this._context.gl.uniform1fv(this.getUniformLocation(a),b),void 0===c?this._nameToUniform2[a]=new Float32Array(b):c.set(b))};d.prototype.setUniform2f=function(a,
b,c){var e=this._nameToUniform2[a];if(void 0===e||b!==e[0]||c!==e[1])this._context.bindProgram(this),this._context.gl.uniform2f(this.getUniformLocation(a),b,c),void 0===e?this._nameToUniform2[a]=new Float32Array([b,c]):(e[0]=b,e[1]=c)};d.prototype.setUniform2fv=function(a,b){g&&0!==b.length%2&&console.error("Value array must have even number of elements!");var c=this._nameToUniform2[a];void 0!==c&&d._arraysEqual(b,c)||(this._context.bindProgram(this),this._context.gl.uniform2fv(this.getUniformLocation(a),
b),void 0===c?this._nameToUniform2[a]=new Float32Array(b):c.set(b))};d.prototype.setUniform3f=function(a,b,c,e){var d=this._nameToUniform3[a];if(void 0===d||b!==d[0]||c!==d[1]||e!==d[2])this._context.bindProgram(this),this._context.gl.uniform3f(this.getUniformLocation(a),b,c,e),void 0===d?this._nameToUniform3[a]=new Float32Array([b,c,e]):(d[0]=b,d[1]=c,d[2]=e)};d.prototype.setUniform3fv=function(a,b){g&&0!==b.length%3&&console.error("Value array must contain sets of three values!");var c=this._nameToUniform3[a];
void 0!==c&&d._arraysEqual(b,c)||(this._context.bindProgram(this),this._context.gl.uniform3fv(this.getUniformLocation(a),b),void 0===c?this._nameToUniform3[a]=new Float32Array(b):c.set(b))};d.prototype.setUniform4f=function(a,b,c,d,f){var e=this._nameToUniform4[a];if(void 0===e||b!==e[0]||c!==e[1]||d!==e[2]||f!==e[3])this._context.bindProgram(this),this._context.gl.uniform4f(this.getUniformLocation(a),b,c,d,f),void 0===e?this._nameToUniform4[a]=new Float32Array([b,c,d,f]):(e[0]=b,e[1]=c,e[2]=d,e[3]=
f)};d.prototype.setUniform4fv=function(a,b){g&&0!==b.length%4&&console.error("Value array must contain sets of four values!");var c=this._nameToUniform4[a];void 0!==c&&d._arraysEqual(b,c)||(this._context.bindProgram(this),this._context.gl.uniform4fv(this.getUniformLocation(a),b),void 0===c?this._nameToUniform4[a]=new Float32Array(b):c.set(b))};d.prototype.setUniformMatrix3fv=function(a,b,c){void 0===c&&(c=!1);g&&0!==b.length%9&&console.error("Matrix array must contain sets ot 9 elements!");var e=
this._nameToUniformMatrix3[a];void 0!==e&&(9===e.length?d._matrix3Equal(e,b):d._arraysEqual(b,e))||(this._context.bindProgram(this),this._context.gl.uniformMatrix3fv(this.getUniformLocation(a),c,b),void 0===e?this._nameToUniformMatrix3[a]=new Float32Array(b):e.set(b))};d.prototype.setUniformMatrix4fv=function(a,b,c){void 0===c&&(c=!1);g&&0!==b.length%16&&console.error("Matrix array must contain sets ot 16 elements!");var e=this._nameToUniformMatrix4[a];void 0!==e&&(16===e.length?d._matrix4Equal(e,
b):d._arraysEqual(b,e))||(this._context.bindProgram(this),this._context.gl.uniformMatrix4fv(this.getUniformLocation(a),c,b),void 0===e?this._nameToUniformMatrix4[a]=new Float32Array(b):e.set(b))};d._padToThree=function(a){var b=a.toString();1E3>a&&(b=("  "+a).slice(-3));return b};d.prototype._addLineNumbers=function(a){var b=2;return a.replace(/\n/g,function(){return"\n"+d._padToThree(b++)+":"})};d.prototype._loadShader=function(a){var b=35633===a,c=b?this._vertexShaderSource:this._fragmentShaderSource,
d;d="";for(var f in this._defines)d+="#define "+f+" "+this._defines[f]+"\n";d+=c;"webgl2"===this._context.contextVersion&&(d=k.transpileShader(d,b?"vertex":"fragment"));b=this._context.gl;a=b.createShader(a);b.shaderSource(a,d);b.compileShader(a);b.getShaderParameter(a,b.COMPILE_STATUS)||(console.error(b.getShaderInfoLog(a)),console.error(this._addLineNumbers(d)),"webgl2"===this._context.contextVersion&&(console.log("Shader source before transpilation:"),console.log(c)));return a};d._matrix4Equal=
function(a,b){g&&(16===a.length&&16===b.length||console.error("Matrix object must contain 16 elements!"));return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]&&a[9]===b[9]&&a[10]===b[10]&&a[11]===b[11]&&a[12]===b[12]&&a[13]===b[13]&&a[14]===b[14]&&a[15]===b[15]};d._matrix3Equal=function(a,b){g&&(9===a.length&&9===b.length||console.error("Matrix object must contain 16 elements!"));return a[0]===b[0]&&a[1]===b[1]&&a[2]===b[2]&&a[3]===
b[3]&&a[4]===b[4]&&a[5]===b[5]&&a[6]===b[6]&&a[7]===b[7]&&a[8]===b[8]};d._arraysEqual=function(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;++c)if(a[c]!==b[c])return!1;return!0};d._nextId=0;return d}()});