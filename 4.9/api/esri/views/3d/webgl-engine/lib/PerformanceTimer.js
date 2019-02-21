// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define(["require","exports","./Performance"],function(d,e,c){return function(){function a(a){this._filterSampleIndex=0;this._lastTime=NaN;this._numMeasurements=this._totalTime=0;this._filterSamples=Array(a);this.reset();this._filterSize=a}a.prototype.reset=function(){for(var a=this._filterSampleIndex=0;a<this._filterSize;a++)this._filterSamples[a]=NaN};a.prototype.start=function(){this._tsStart=c.now()};a.prototype.stop=function(){this._lastTime=c.now()-this._tsStart;this._totalTime+=this._lastTime;
this._numMeasurements++;this._filterSize&&(this._filterSamples[this._filterSampleIndex]=this._lastTime,this._filterSampleIndex=(this._filterSampleIndex+1)%this._filterSize);return this._lastTime};a.prototype.getLast=function(){return this._lastTime};a.prototype.getLastFiltered=function(){for(var a=0,b=0;b<this._filterSamples.length;b++)a+=this._filterSamples[b];return a/this._filterSamples.length};a.prototype.getAverage=function(){return this._totalTime/this._numMeasurements};a.prototype.getTotal=
function(){return this._totalTime};a.prototype.getNumMeasurements=function(){return this._numMeasurements};return a}()});