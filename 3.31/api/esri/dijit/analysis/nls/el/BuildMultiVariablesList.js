// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/el/BuildMultiVariablesList",{chooseInputLayer:"\u0395\u03c0\u03b9\u03bb\u03bf\u03b3\u03ae \u03ba\u03b1\u03c4\u03b1\u03c7\u03c9\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c5 \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03bf\u03cd \u03b5\u03c0\u03b9\u03c0\u03ad\u03b4\u03bf\u03c5",addAVar:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ae\u03ba\u03b7 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae\u03c2",distToNearest:"\u0391\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03c9\u03c2 \u03c4\u03bf \u03c0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf",
attrOfInterest:"\u0393\u03bd\u03ce\u03c1\u03b9\u03c3\u03bc\u03b1 \u03c0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf\u03c5",summaryNearby:"\u03a3\u03cd\u03bd\u03bf\u03c8\u03b7 \u03b3\u03b5\u03b9\u03c4\u03bf\u03bd\u03b9\u03ba\u03ce\u03bd",summaryIntersecting:"\u03a3\u03cd\u03bd\u03bf\u03c8\u03b7 \u03c4\u03b5\u03bc\u03bd\u03cc\u03bc\u03b5\u03bd\u03c9\u03bd",distToNearestLabel:"\u0397 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03bf \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf \u03c4\u03bf\u03c5 bin \u03c9\u03c2 \u03c4\u03bf \u03c0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c3\u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5",
attrOfInterestLabel:"\u0397 \u03c4\u03b9\u03bc\u03ae \u03b5\u03bd\u03cc\u03c2 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf\u03c5 \u03c0\u03b5\u03b4\u03af\u03bf\u03c5 \u03b1\u03c0\u03cc \u03c4\u03bf \u03c0\u03bb\u03b7\u03c3\u03b9\u03ad\u03c3\u03c4\u03b5\u03c1\u03bf \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03b1\u03c0\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5",
summaryNearbyLabel:"\u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03cc \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf \u03b3\u03b9\u03b1 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c0\u03bf\u03c5 \u03b2\u03c1\u03ad\u03b8\u03b7\u03ba\u03b1\u03bd \u03b5\u03bd\u03c4\u03cc\u03c2 \u03c4\u03c2 \u03ba\u03b1\u03b8\u03bf\u03c1\u03b9\u03c3\u03bc\u03ad\u03bd\u03b7\u03c2 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7\u03c2 \u03b1\u03c0\u03cc \u03c4\u03bf \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf \u03c4\u03bf\u03c5 bin",
summaryIntersectingLabel:"\u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03cc \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03ad\u03bd\u03bf \u03b3\u03b9\u03b1 \u03cc\u03bb\u03b1 \u03c4\u03b1 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03b1 \u03c0\u03bf\u03c5 \u03c4\u03ad\u03bc\u03bd\u03bf\u03c5\u03bd \u03c4\u03bf bin",maxDistancefromCtr:"\u039c\u03ad\u03b3\u03b9\u03c3\u03c4\u03b7 \u03b1\u03c0\u03cc\u03c3\u03c4\u03b1\u03c3\u03b7 \u03b1\u03c0\u03cc \u03c4\u03bf \u03ba\u03ad\u03bd\u03c4\u03c1\u03bf \u03c4\u03bf\u03c5 bin",
fieldToIncude:"\u03a0\u03b5\u03b4\u03af\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c3\u03c5\u03bc\u03c0\u03b5\u03c1\u03af\u03bb\u03b7\u03c8\u03b7",statstoCalculate:"\u03a3\u03c4\u03b1\u03c4\u03b9\u03c3\u03c4\u03b9\u03ba\u03cc \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03bf \u03c0\u03c1\u03bf\u03c2 \u03c5\u03c0\u03bf\u03bb\u03bf\u03b3\u03b9\u03c3\u03bc\u03cc",summFeatuesWithin:"\u03a3\u03cd\u03bd\u03bf\u03c8\u03b7 \u03c3\u03c4\u03bf\u03b9\u03c7\u03b5\u03af\u03c9\u03bd \u03b5\u03bd\u03c4\u03cc\u03c2",layerChangeWarnMsg:"\u038c\u03c3\u03b5\u03c2 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ad\u03c2 \u03ad\u03c7\u03bf\u03c5\u03bd \u03c0\u03c1\u03bf\u03c3\u03c4\u03b5\u03b8\u03b5\u03af \u03b3\u03b9\u03b1 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf \u03b5\u03b9\u03c3\u03cc\u03b4\u03bf\u03c5 \u03b8\u03b1 \u03ba\u03b1\u03c4\u03b1\u03c1\u03b3\u03b7\u03b8\u03bf\u03cd\u03bd \u03b1\u03bd \u03c4\u03bf \u03b1\u03bb\u03bb\u03ac\u03be\u03b5\u03c4\u03b5.",
validationErrorMsg:"\u0394\u03b9\u03bf\u03c1\u03b8\u03ce\u03c3\u03c4\u03b5 \u03c4\u03b1 \u03bb\u03ac\u03b8\u03b7 \u03b5\u03c0\u03b9\u03ba\u03cd\u03c1\u03c9\u03c3\u03b7\u03c2 \u03c0\u03c1\u03bf\u03c4\u03bf\u03cd \u03c0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03b5\u03c4\u03b5 \u03bd\u03ad\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae.",atleastOneVarMsg:"\u03a0\u03c1\u03bf\u03c3\u03b8\u03ad\u03c3\u03c4\u03b5 \u03c4\u03bf\u03c5\u03bb\u03ac\u03c7\u03b9\u03c3\u03c4\u03bf\u03bd \u03bc\u03af\u03b1 \u03bc\u03b5\u03c4\u03b1\u03b2\u03bb\u03b7\u03c4\u03ae \u03c3\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03b5\u03c0\u03b9\u03bb\u03b5\u03b3\u03bc\u03ad\u03bd\u03bf \u03b8\u03b5\u03bc\u03b1\u03c4\u03b9\u03ba\u03cc \u03b5\u03c0\u03af\u03c0\u03b5\u03b4\u03bf."});