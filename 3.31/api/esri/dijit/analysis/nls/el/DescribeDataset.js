// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/DescribeDataset",{inputLayerLabel:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03c3\u03c5\u03bd\u03cc\u03bb\u03bf\u03c5 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03b3\u03b9\u03b1 \u03c0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae",describeDataLabel:"\u039a\u03b1\u03c4\u03b1\u03bd\u03bf\u03ae\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03b1 \u03c3\u03b1\u03c2 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ce\u03bd\u03c4\u03b1\u03c2 (\u03c0\u03c1\u03bf\u03b1\u03b9\u03c1\u03b5\u03c4\u03b9\u03ba\u03ac)",
sampleLayer:"\u0394\u03b5\u03af\u03b3\u03bc\u03b1 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",extentLayer:"\u0398\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03ad\u03ba\u03c4\u03b1\u03c3\u03b7\u03c2",noOfFeaturesLabel:"\u0391\u03c1\u03b9\u03b8\u03bc\u03cc\u03c2 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03c0\u03b5\u03c1\u03b9\u03bb\u03b1\u03bc\u03b2\u03ac\u03bd\u03bf\u03bd\u03c4\u03b1\u03b9",
outputLayerName:"\u038c\u03bd\u03bf\u03bc\u03b1 \u03b5\u03be\u03b1\u03b3\u03cc\u03bc\u03b5\u03bd\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",resultName:"\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03b4\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5 ${layerName}",itemDescription:"Feature layer \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03b7\u03bd \u03b5\u03ba\u03c4\u03ad\u03bb\u03b5\u03c3\u03b7 \u03c4\u03bf\u03c5 \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf\u03c5 \u00ab\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03c5\u03bd\u03cc\u03bb\u03bf\u03c5 \u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd\u00bb \u03b3\u03b9\u03b1 \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf ${layerName}. ",
itemTags:"\u0391\u03c0\u03bf\u03c4\u03ad\u03bb\u03b5\u03c3\u03bc\u03b1 \u03b1\u03bd\u03ac\u03bb\u03c5\u03c3\u03b7\u03c2, \u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03c5\u03bd\u03cc\u03bb\u03bf\u03c5 \u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd, ${layername}",itemSnippet:"Feature layer \u03c0\u03bf\u03c5 \u03b8\u03b1 \u03b4\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03b5\u03af\u03c4\u03b1\u03b9 \u03b1\u03c0\u03cc \u03c4\u03bf \u03b5\u03c1\u03b3\u03b1\u03bb\u03b5\u03af\u03bf \u00ab\u03a0\u03b5\u03c1\u03b9\u03b3\u03c1\u03b1\u03c6\u03ae \u03a3\u03c5\u03bd\u03cc\u03bb\u03bf\u03c5 \u0394\u03b5\u03b4\u03bf\u03bc\u03ad\u03bd\u03c9\u03bd\u00bb."});