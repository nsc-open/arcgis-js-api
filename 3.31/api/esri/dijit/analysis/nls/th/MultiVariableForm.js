// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/th/MultiVariableForm",{distToNearest:"\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",attrOfInterest:"\u0e41\u0e2d\u0e15\u0e17\u0e23\u0e34\u0e1a\u0e34\u0e27\u0e15\u0e4c\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",summaryNearby:"\u0e2a\u0e23\u0e38\u0e1b\u0e2a\u0e16\u0e32\u0e19\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e40\u0e04\u0e35\u0e22\u0e07",
summaryIntersecting:"\u0e2a\u0e23\u0e38\u0e1b\u0e08\u0e38\u0e14\u0e15\u0e31\u0e14\u0e01\u0e31\u0e19",distToNearestLabel:"\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e08\u0e32\u0e01\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07\u0e44\u0e1b\u0e22\u0e31\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e43\u0e19\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e15",
attrOfInterestLabel:"\u0e04\u0e48\u0e32\u0e02\u0e2d\u0e07\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e23\u0e30\u0e1a\u0e38\u0e08\u0e32\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e43\u0e01\u0e25\u0e49\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14\u0e08\u0e32\u0e01\u0e0a\u0e31\u0e49\u0e19\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25\u0e2d\u0e34\u0e19\u0e1e\u0e38\u0e15",summaryNearbyLabel:"\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e17\u0e35\u0e48\u0e04\u0e33\u0e19\u0e27\u0e13\u0e08\u0e32\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e17\u0e35\u0e48\u0e1e\u0e1a\u0e42\u0e14\u0e22\u0e21\u0e35\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07\u0e17\u0e35\u0e48\u0e23\u0e30\u0e1a\u0e38",
summaryIntersectingLabel:"\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e17\u0e35\u0e48\u0e04\u0e33\u0e19\u0e27\u0e13\u0e08\u0e32\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e17\u0e35\u0e48\u0e15\u0e31\u0e14\u0e01\u0e31\u0e19\u0e16\u0e31\u0e07",maxDistancefromCtr:"\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e08\u0e32\u0e01\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07",fieldToIncude:"\u0e1f\u0e34\u0e25\u0e14\u0e4c\u0e17\u0e35\u0e48\u0e08\u0e30\u0e23\u0e27\u0e21",
statstoCalculate:"\u0e2a\u0e16\u0e34\u0e15\u0e34\u0e17\u0e35\u0e48\u0e08\u0e30\u0e04\u0e33\u0e19\u0e27\u0e13",summFeatuesWithin:"\u0e2a\u0e23\u0e38\u0e1b\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e20\u0e32\u0e22\u0e43\u0e19",smallMaxDistErrorMsg:"\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e08\u0e32\u0e01\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e02\u0e19\u0e32\u0e14\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07",
smallSumFeaturesErrorMsg:"\u0e23\u0e30\u0e22\u0e30\u0e2b\u0e48\u0e32\u0e07\u0e2a\u0e39\u0e07\u0e2a\u0e38\u0e14\u0e08\u0e32\u0e01\u0e28\u0e39\u0e19\u0e22\u0e4c\u0e01\u0e25\u0e32\u0e07\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07\u0e15\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01\u0e01\u0e27\u0e48\u0e32\u0e02\u0e19\u0e32\u0e14\u0e02\u0e2d\u0e07\u0e16\u0e31\u0e07"});