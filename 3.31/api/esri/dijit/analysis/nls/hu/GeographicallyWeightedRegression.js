// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/dijit/analysis/nls/hu/GeographicallyWeightedRegression",{chooseLayer:"Elemezni k\u00edv\u00e1nt r\u00e9teg kiv\u00e1laszt\u00e1sa",chooseField:"Modellezni k\u00edv\u00e1nt mez\u0151 kiv\u00e1laszt\u00e1sa",chooseExplanatoryField:"Magyar\u00e1z\u00f3 mez\u0151k kiv\u00e1laszt\u00e1sa",chooseNeighborhood:"A szomsz\u00e9ds\u00e1g meghat\u00e1roz\u00e1si m\u00f3dszer\u00e9nek kiv\u00e1laszt\u00e1sa",distanceBand:"T\u00e1vols\u00e1gs\u00e1v",numNeighbors:"Szomsz\u00e9dok sz\u00e1ma",chooseWeighted:"Szomsz\u00e9dos vektoros elemek s\u00falyoz\u00e1s\u00e1nak kiv\u00e1laszt\u00e1sa",
bisquare:"Duplan\u00e9gyzet",gaussian:"Gauss",resultLayerName:"Eredm\u00e9ny r\u00e9teg neve",outputLayerName:"GWR ${inputLayerName}",distanceBandWarning:"A t\u00e1vols\u00e1gs\u00e1v \u00e9rt\u00e9k\u00e9nek ${min} \u00e9s ${max} k\u00f6z\u00f6tt kell lennie.",numNeighborsWarning:"A szomsz\u00e9dok sz\u00e1m\u00e1nak ${min} \u00e9s ${max} k\u00f6z\u00f6tt kell lennie.",explanatoryFieldsWarning:"V\u00e1lasszon legal\u00e1bb 1 magyar\u00e1z\u00f3 mez\u0151t.",explanatoryLayerWarning:"A kiv\u00e1lasztott r\u00e9teg nem tartalmaz egyetlen \u00e9rv\u00e9nyes magyar\u00e1z\u00f3 mez\u0151t sem, v\u00e1lasszon m\u00e1sik r\u00e9teget.",
inputLayerWarning:"A kiv\u00e1lasztott r\u00e9teg nem tartalmaz egyetlen modellezhet\u0151 numerikus mez\u0151t sem, v\u00e1lasszon m\u00e1sik r\u00e9teget.",itemDescription:"A F\u00f6ldrajzilag s\u00falyozott regresszi\u00f3s megold\u00e1sok futtat\u00e1s\u00e1val l\u00e9trehozott vektoros r\u00e9teg.",itemTags:"Elemz\u00e9s v\u00e9geredm\u00e9nye, F\u00f6ldrajzilag s\u00falyozott regresszi\u00f3, ${inputLayerName}, illeszt\u00e9s",itemSnippet:"A F\u00f6ldrajzilag s\u00falyozott regresszi\u00f3s eszk\u00f6zb\u0151l l\u00e9trehozott vektoros r\u00e9teg"});