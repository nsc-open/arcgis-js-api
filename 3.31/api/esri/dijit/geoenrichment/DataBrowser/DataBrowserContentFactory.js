// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/DataBrowser/DataBrowserContentFactory","dojo/_base/declare ../_WizardPage ../_PageButtons ./Breadcrumb ./DataBrowserBase ./DataBrowserManager ./DataCategoriesPage ./DataCollectionsPage ./DataVariablesPage ./DataVariableGrid dojo/i18n!../../../nls/jsapi".split(" "),function(f,g,h,k,d,l,m,n,p,q,r){return f(null,{createManager:function(a){return new l(a)},createBreadcrumb:function(a){return new k(a)},createPage:function(a,c){var b;switch(a){case d.CATEGORIES_PAGE:b=m;
break;case d.COLLECTIONS_PAGE:b=n;break;case d.VARIABLES_PAGE:b=p}b=f([g,h,b],{buildRendering:function(){function a(a){var c=a.toLowerCase(),e=d[c+"Button"];!0===e&&(e=r.geoenrichment.dijit.WizardButtons[c]);e&&b.push({id:c,label:e,onClick:function(){d.emit(a,{bubbles:!1})}})}this.inherited(arguments);var b=[],d=this;a("Cancel");a("OK");a("Back");b.length?this.addButtons(b):this.buttonsNode&&(this.buttonsNode.style.display="none")}});return new b(c)},createVariableGrid:function(a,c){return new q(a,
c)}})});