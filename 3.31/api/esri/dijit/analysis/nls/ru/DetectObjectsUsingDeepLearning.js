// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/DetectObjectsUsingDeepLearning",{toolDefine:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",outputLayerName:"${layername}_detected",modelLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u043e\u0434\u0435\u043b\u044c \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",
modelArgsLabel:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u044b \u043c\u043e\u0434\u0435\u043b\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",nameLabel:"\u0418\u043c\u044f",valueLabel:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",removeDuplicatesLable:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0434\u0443\u0431\u043b\u0438\u0440\u0443\u044e\u0449\u0438\u0435\u0441\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u0438\u0437 \u0432\u044b\u0445\u043e\u0434\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",
queryModelArgsMsg:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043c\u043e\u0434\u0435\u043b\u0438...",nonMaxSuppressionLabel:"\u041d\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435",options:"\u041e\u043f\u0446\u0438\u0438",confidenceLabel:"\u041f\u043e\u043b\u0435 \u0431\u0430\u043b\u043b\u0430 \u0434\u043e\u0441\u0442\u043e\u0432\u0435\u0440\u043d\u043e\u0441\u0442\u0438",
classValueLabel:"\u041f\u043e\u043b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u043a\u043b\u0430\u0441\u0441\u0430",maxOverlapLabel:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u044d\u0444\u0444\u0438\u0446\u0438\u0435\u043d\u0442 \u043f\u0435\u0440\u0435\u043a\u0440\u044b\u0442\u0438\u044f",numberOnlyMsg:"\u0414\u043e\u043f\u0443\u0441\u043a\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0438\u0441\u043b\u043e\u0432\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f.",
analysisLayerLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432",itemDescription:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f",
itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u0430\u0441\u0442\u0440\u0430, \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f, ${layername}",itemSnippet:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0433\u043b\u0443\u0431\u043e\u043a\u043e\u0433\u043e \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"});