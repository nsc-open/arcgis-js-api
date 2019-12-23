// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.
//>>built
define("esri/basemaps",["require","dojo/has","./kernel","dojo/i18n!./nls/jsapi"],function(a,c,d,b){a={streets:{title:b.basemaps.streets,thumbnailUrl:a.toUrl("./images/basemap/streets.jpg"),itemId:"d8855ee4d3d74413babfb0f41203b168",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer"}]},satellite:{title:b.basemaps.satellite,thumbnailUrl:a.toUrl("./images/basemap/satellite.jpg"),itemId:"86de95d4e0244cba80f0fa2c9403a7b2",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"}]},
hybrid:{title:b.basemaps.hybrid,thumbnailUrl:a.toUrl("./images/basemap/hybrid.jpg"),itemId:"413fd05bbd7342f5991d5ec96f4f8b18",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"},{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer",isReference:!0}]},terrain:{title:b.basemaps.terrain,thumbnailUrl:a.toUrl("./images/basemap/terrain.jpg"),itemId:"aab054ab883c4a4094c72e949566ad40",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer"},
{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Reference_Overlay/MapServer",isReference:!0}]},topo:{title:b.basemaps.topo,thumbnailUrl:a.toUrl("./images/basemap/topo.jpg"),itemId:"6e03e8c26aad4b9c92a87c1063ddb0e3",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer"}]},gray:{title:b.basemaps.gray,thumbnailUrl:a.toUrl("./images/basemap/gray.jpg"),itemId:"8b3b470883a744aeb60e5fff0a319ce7",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer"},
{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer",isReference:!0}]},"dark-gray":{title:b.basemaps["dark-gray"],thumbnailUrl:a.toUrl("./images/basemap/dark-gray.jpg"),itemId:"da65bacab5bd4defb576f839b6b28098",baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer"},{url:"https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer",isReference:!0}]},
oceans:{title:b.basemaps.oceans,thumbnailUrl:a.toUrl("./images/basemap/oceans.jpg"),itemId:"48b8cec7ebf04b5fbdcaf70d09daff21",baseMapLayers:[{url:"https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Base/MapServer"},{url:"https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer",isReference:!0}]},"national-geographic":{title:b.basemaps["national-geographic"],thumbnailUrl:a.toUrl("./images/basemap/national-geographic.jpg"),itemId:"509e2d6b034246d692a461724ae2d62c",
baseMapLayers:[{url:"https://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer"}]},osm:{title:b.basemaps.osm,thumbnailUrl:a.toUrl("./images/basemap/osm.jpg"),itemId:"5d2bfa736f8448b3a1708e1f6be23eed",baseMapLayers:[{type:"OpenStreetMap"}]},"dark-gray-vector":{title:b.basemaps["dark-gray"],thumbnailUrl:a.toUrl("./images/basemap/dark-gray.jpg"),itemId:"c11ce4f7801740b2905eb03ddc963ac8",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/c11ce4f7801740b2905eb03ddc963ac8/resources/styles/root.json",
type:"VectorTile"}]},"gray-vector":{title:b.basemaps.gray,thumbnailUrl:a.toUrl("./images/basemap/gray.jpg"),itemId:"8a2cba3b0ebf4140b7c0dc5ee149549a",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/8a2cba3b0ebf4140b7c0dc5ee149549a/resources/styles/root.json",type:"VectorTile"}]},"streets-vector":{title:b.basemaps.streets,thumbnailUrl:a.toUrl("./images/basemap/streets.jpg"),itemId:"de26a3cf4cc9451298ea173c4b324736",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/de26a3cf4cc9451298ea173c4b324736/resources/styles/root.json",
type:"VectorTile"}]},"topo-vector":{title:b.basemaps.topo,thumbnailUrl:a.toUrl("./images/basemap/topo.jpg"),itemId:"7dc6cea0b1764a1f9af2e679f642f0f5",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/7dc6cea0b1764a1f9af2e679f642f0f5/resources/styles/root.json",type:"VectorTile"}]},"streets-night-vector":{title:b.basemaps["streets-night-vector"],thumbnailUrl:a.toUrl("./images/basemap/streets-night.jpg"),itemId:"86f556a2d1fd468181855a35e344567f",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/86f556a2d1fd468181855a35e344567f/resources/styles/root.json",
type:"VectorTile"}]},"streets-relief-vector":{title:b.basemaps["streets-relief-vector"],thumbnailUrl:a.toUrl("./images/basemap/streets-relief.jpg"),itemId:"b266e6d17fc345b498345613930fbd76",baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/b266e6d17fc345b498345613930fbd76/resources/styles/root.json",type:"VectorTile"}]},"streets-navigation-vector":{title:b.basemaps["streets-navigation-vector"],thumbnailUrl:a.toUrl("./images/basemap/streets-navigation.jpg"),itemId:"63c47b7177f946b49902c24129b87252",
baseMapLayers:[{url:"https://www.arcgis.com/sharing/rest/content/items/63c47b7177f946b49902c24129b87252/resources/styles/root.json",type:"VectorTile"}]}};c("extend-esri")&&(d.basemaps=a);return a});