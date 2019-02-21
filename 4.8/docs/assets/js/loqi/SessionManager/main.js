/*! ArcGIS API for JavaScript 4.8 | Copyright (c) 2018 Esri. All rights reserved. | http://www.esri.com/legal/privacy | https://developers.arcgis.com/terms/faq */
define(["dojo/_base/declare","dojo/_base/lang","dojo/cookie","dojo/topic","dojo/query","dojo/dom-construct","Notifications","esri/config","esri/request","esri/core/urlUtils"],function(r,e,i,o,s,t,a,n,u,c){var l=/^(https?:\/\/(arcgis.com|esri.com|.+.arcgis.com|.+.esri.com)|\/)/;n.request.proxyUrl="/proxy",n.request.corsEnabledServers.push(SiteConfig.billing),n.request.corsEnabledServers.push(SiteConfig.download_server),n.request.corsEnabledServers.push("https://geotriggerstg.arcgis.com"),n.request.corsEnabledServers.push("https://geotriggerdev.arcgis.com"),n.request.corsEnabledServers.push("https://geotrigger.arcgis.com"),n.request.corsEnabledServers.push("https://portalette.geotrigger.arcgis.com"),n.request.corsEnabledServers.push("https://portalettestg.geotrigger.arcgis.com");var h=r([],{constructor:function(r){e.mixin(this,r)},_callbacks:[],ready:!1,get_gravatar:function(r,e){e=e||80;return"//www.gravatar.com/avatar/"+function(r){function u(r,e){return r<<e|r>>>32-e}function c(r,e){var i,o,t,n,s;return t=2147483648&r,n=2147483648&e,s=(1073741823&r)+(1073741823&e),(i=1073741824&r)&(o=1073741824&e)?2147483648^s^t^n:i|o?1073741824&s?3221225472^s^t^n:1073741824^s^t^n:s^t^n}function e(r,e,i,o,t,n,s){var a;return c(u(r=c(r,c(c((a=e)&i|~a&o,t),s)),n),e)}function i(r,e,i,o,t,n,s){var a;return c(u(r=c(r,c(c(e&(a=o)|i&~a,t),s)),n),e)}function o(r,e,i,o,t,n,s){return c(u(r=c(r,c(c(e^i^o,t),s)),n),e)}function t(r,e,i,o,t,n,s){return c(u(r=c(r,c(c(i^(e|~o),t),s)),n),e)}function n(r){var e,i="",o="";for(e=0;e<=3;e++)i+=(o="0"+(r>>>8*e&255).toString(16)).substr(o.length-2,2);return i}var s,a,l,h,f,p,g,d,S,m=Array();for(m=function(r){for(var e,i=r.length,o=i+8,t=16*((o-o%64)/64+1),n=Array(t-1),s=0,a=0;a<i;)s=a%4*8,n[e=(a-a%4)/4]=n[e]|r.charCodeAt(a)<<s,a++;return s=a%4*8,n[e=(a-a%4)/4]=n[e]|128<<s,n[t-2]=i<<3,n[t-1]=i>>>29,n}(r=function(r){r=r.replace(/rn/g,"n");for(var e="",i=0;i<r.length;i++){var o=r.charCodeAt(i);o<128?e+=String.fromCharCode(o):(127<o&&o<2048?e+=String.fromCharCode(o>>6|192):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128)),e+=String.fromCharCode(63&o|128))}return e}(r)),p=1732584193,g=4023233417,d=2562383102,S=271733878,s=0;s<m.length;s+=16)g=t(g=t(g=t(g=t(g=o(g=o(g=o(g=o(g=i(g=i(g=i(g=i(g=e(g=e(g=e(g=e(l=g,d=e(h=d,S=e(f=S,p=e(a=p,g,d,S,m[s+0],7,3614090360),g,d,m[s+1],12,3905402710),p,g,m[s+2],17,606105819),S,p,m[s+3],22,3250441966),d=e(d,S=e(S,p=e(p,g,d,S,m[s+4],7,4118548399),g,d,m[s+5],12,1200080426),p,g,m[s+6],17,2821735955),S,p,m[s+7],22,4249261313),d=e(d,S=e(S,p=e(p,g,d,S,m[s+8],7,1770035416),g,d,m[s+9],12,2336552879),p,g,m[s+10],17,4294925233),S,p,m[s+11],22,2304563134),d=e(d,S=e(S,p=e(p,g,d,S,m[s+12],7,1804603682),g,d,m[s+13],12,4254626195),p,g,m[s+14],17,2792965006),S,p,m[s+15],22,1236535329),d=i(d,S=i(S,p=i(p,g,d,S,m[s+1],5,4129170786),g,d,m[s+6],9,3225465664),p,g,m[s+11],14,643717713),S,p,m[s+0],20,3921069994),d=i(d,S=i(S,p=i(p,g,d,S,m[s+5],5,3593408605),g,d,m[s+10],9,38016083),p,g,m[s+15],14,3634488961),S,p,m[s+4],20,3889429448),d=i(d,S=i(S,p=i(p,g,d,S,m[s+9],5,568446438),g,d,m[s+14],9,3275163606),p,g,m[s+3],14,4107603335),S,p,m[s+8],20,1163531501),d=i(d,S=i(S,p=i(p,g,d,S,m[s+13],5,2850285829),g,d,m[s+2],9,4243563512),p,g,m[s+7],14,1735328473),S,p,m[s+12],20,2368359562),d=o(d,S=o(S,p=o(p,g,d,S,m[s+5],4,4294588738),g,d,m[s+8],11,2272392833),p,g,m[s+11],16,1839030562),S,p,m[s+14],23,4259657740),d=o(d,S=o(S,p=o(p,g,d,S,m[s+1],4,2763975236),g,d,m[s+4],11,1272893353),p,g,m[s+7],16,4139469664),S,p,m[s+10],23,3200236656),d=o(d,S=o(S,p=o(p,g,d,S,m[s+13],4,681279174),g,d,m[s+0],11,3936430074),p,g,m[s+3],16,3572445317),S,p,m[s+6],23,76029189),d=o(d,S=o(S,p=o(p,g,d,S,m[s+9],4,3654602809),g,d,m[s+12],11,3873151461),p,g,m[s+15],16,530742520),S,p,m[s+2],23,3299628645),d=t(d,S=t(S,p=t(p,g,d,S,m[s+0],6,4096336452),g,d,m[s+7],10,1126891415),p,g,m[s+14],15,2878612391),S,p,m[s+5],21,4237533241),d=t(d,S=t(S,p=t(p,g,d,S,m[s+12],6,1700485571),g,d,m[s+3],10,2399980690),p,g,m[s+10],15,4293915773),S,p,m[s+1],21,2240044497),d=t(d,S=t(S,p=t(p,g,d,S,m[s+8],6,1873313359),g,d,m[s+15],10,4264355552),p,g,m[s+6],15,2734768916),S,p,m[s+13],21,1309151649),d=t(d,S=t(S,p=t(p,g,d,S,m[s+4],6,4149444226),g,d,m[s+11],10,3174756917),p,g,m[s+2],15,718787259),S,p,m[s+9],21,3951481745),p=c(p,a),g=c(g,l),d=c(d,h),S=c(S,f);return(n(p)+n(g)+n(d)+n(S)).toLowerCase()}(r)+".jpg?s="+e},redirect:function(r,e){l.test(r)||(r="http://developers.arcgis.com"),e&&(e=dojo.objectToQuery(e)),window.location=r+(e?"?"+e:"")},queue:function(r){this.ready?r():this._callbacks.push(r)},avatar:function(r){return this.profile.thumbnail?"https://"+SiteConfig.ago+"/sharing/rest/community/users/"+this.username()+"/info/"+this.profile.thumbnail+"?token="+this.token():this.get_gravatar(this.profile.email,r||18)+"&d=mm"},loggedIn:function(){return!!this.token()},displayName:function(){return this.profile?profile.fullName||this.username()||profile.email||"Your Account":this.username()},orgId:function(){return this.organization?this.organization.id:i("esri_auth")?JSON.parse(i("esri_auth")).accountId:void 0},orgUrlKey:function(){return this.organization?this.organization.urlKey:i("esri_auth")?JSON.parse(i("esri_auth")).urlKey:void 0},orgUrl:function(){if(this.organization)return(this.organization.allSSL?"https://":"http://")+this.orgUrlKey()+SiteConfig.ago_maps},token:function(){return!!i("esri_auth")&&JSON.parse(i("esri_auth")).token},role:function(){var r=JSON.parse(i("esri_auth"));return!!r&&(!!r.role&&r.role.replace("org_","").replace("account_",""))},isAdmin:function(){return"admin"===this.role()},username:function(){return this.profile?this.profile.username:i("esri_auth")?JSON.parse(i("esri_auth")).email:void 0},userId:function(){return this.username()},requireSession:function(){this.loggedIn()||this.redirect("/sign-in",{redirect_uri:window.encodeURIComponent(window.location.href)})},logout:function(){redirect("https://www.arcgis.com/sharing/rest/oauth2/signout",{redirect_uri:SiteConfig.destination})},developerSubscription:function(){if(this.organization&&this.organization.subscriptionInfo&&("Trial Developer"===this.organization.subscriptionInfo.type||"Developer"===this.organization.subscriptionInfo.type))return!0},developer:function(){return this.developerSubscription()},trial:function(){if(this.organization&&this.organization.subscriptionInfo.type.match(/Trial/))return!0},expired:function(){if(this.organization&&this.organization.subscriptionInfo&&"expired"===this.organization.subscriptionInfo.state)return!0},suspended:function(){if(this.organization&&this.organization.subscriptionInfo&&"suspended"===this.organization.subscriptionInfo.state)return!0},firstName:function(){return this.profile.fullName.split(/ |\.|_/)[0]},finishSignin:function(r){var e=this.isPublicAccount()?"/public-account/":"/applications/",i=c.urlToObject(window.location.href).query,o=i&&i.redirect_uri?i.redirect_uri:e;this.redirect(o)},isPublicAccount:function(){return!!i("esri_auth")&&!JSON.parse(i("esri_auth")).role}});window.ArcGIS=window.ArcGIS||{},window.ArcGIS.Session=new h;var f=i("esri_auth");return(f?JSON.parse(f):void 0)&&!window.ArcGIS.shouldExpireSession&&(u(SiteConfig.portal+"/rest/portals/self",{query:{token:ArcGIS.Session.token(),f:"json"}}).then(function(r){ArcGIS.Session.profile=r.user,ArcGIS.Session.organization=r,o.publish("session:organization"),u({url:SiteConfig.billing+"/subscription",content:{token:ArcGIS.Session.token(),f:"json"}}).then(function(r){ArcGIS.Session.subscription=r.subscription,ArcGIS.Session.ready=!0;for(var e=ArcGIS.Session._callbacks.length-1;0<=e;e--)ArcGIS.Session._callbacks[e]();o.publish("session:ready")},function(r){ArcGIS.Session.logout(),document.location.reload(!0)})},function(r){ArcGIS.Session.logout(),document.location.reload(!0)}),ArcGIS.Session.queue(function(){var r=ArcGIS.Session.expired()||ArcGIS.Session.suspended();if(s("#account-alerts").length&&r){var e=new a(s("#account-notifications")[0]),i=ArcGIS.Session.developer()&&ArcGIS.Session.expired(),o=ArcGIS.Session.developer()&&ArcGIS.Session.suspended(),t=!ArcGIS.Session.developer();if(i&&e.error("It looks like your account has expired. You won't be able to create new applications or feature services until you <a href='/account/modify-plan/'>renew your account</a>."),o&&e.error("Looks like you went over your credit limit for this month. You won't be able to create new applications or feature services. You can either <a href='/account/modify-plan/'>upgrade to a larger plan</a> or wait until next month."),t){var n=" <a href='"+ArcGIS.Session.orgUrl()+"/home/organization.html'>Upgrade Subscription</a>";e.error("Your subscription has been suspended or has expired."+n)}}})),window.ArcGIS.Session});