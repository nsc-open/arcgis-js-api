// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/ru/FindPointClusters",{clustersLabel:"\u041d\u0430\u0439\u0434\u0438\u0442\u0435 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0434\u043b\u044f \u0441\u043b\u043e\u044f ${inputLayerName}.",chooseLayerLabel:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043b\u043e\u0439, \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0431\u0443\u0434\u0443\u0442 \u043d\u0430\u0439\u0434\u0435\u043d\u044b \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b",
minClusterPtsLabel:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0441\u0447\u0438\u0442\u0430\u0442\u044c\u0441\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u043c",minClustersPtsGAXLbl:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0442\u043e\u0447\u0435\u043a \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0430",
limitSearchLabel:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u043e (\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e)",limitSearchReqLabel:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u043e",outputLayerName:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0434\u043b\u044f ${inputLayerName}",
itemDescription:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u041d\u0430\u0439\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0442\u043e\u0447\u0435\u043a \u0434\u043b\u044f ${inputLayerName}.",itemTags:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0430\u043d\u0430\u043b\u0438\u0437\u0430, \u041d\u0430\u0439\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0442\u043e\u0447\u0435\u043a, ${inputLayerName}",
itemSnippet:"\u0412\u0435\u043a\u0442\u043e\u0440\u043d\u044b\u0439 \u0441\u043b\u043e\u0439, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u041d\u0430\u0439\u0442\u0438 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u044b \u0442\u043e\u0447\u0435\u043a",chooseClusteringMethod:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u043c\u0435\u0442\u043e\u0434 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u0438\u0437\u0430\u0446\u0438\u0438",
dbscanLabel:"\u0417\u0430\u0434\u0430\u043d\u043d\u043e\u0435 \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435 (DBSCAN)",hdbscanLabel:"\u0410\u0432\u0442\u043e\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 (HDBSCAN)",useTimeToFindCLusters:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043e\u0432",limitSearchDurLabel:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u043e\u0438\u0441\u043a\u0430 \u0434\u043e"});