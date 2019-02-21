// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.9/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators ./GPMessage".split(" "),function(l,m,e,c,f,g,b,h){var k=g({esriJobCancelled:"job-cancelled",esriJobCancelling:"job-cancelling",esriJobDeleted:"job-deleted",esriJobDeleting:"job-deleting",esriJobTimedOut:"job-timed-out",esriJobExecuting:"job-executing",esriJobFailed:"job-failed",esriJobNew:"job-new",esriJobSubmitted:"job-submitted",
esriJobSucceeded:"job-succeeded",esriJobWaiting:"job-waiting"});return function(d){function a(a){a=d.call(this)||this;a.jobId=null;a.jobStatus=null;a.messages=null;return a}e(a,d);c([b.property()],a.prototype,"jobId",void 0);c([b.property({json:{read:k.read}})],a.prototype,"jobStatus",void 0);c([b.property({type:[h]})],a.prototype,"messages",void 0);return a=c([b.subclass("esri.tasks.support.JobInfo")],a)}(b.declared(f))});