/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

// I will use data of Beijing housing price
var data = "https://raw.githubusercontent.com/CPLN692-MUSA611-Open-Source-GIS/datasets/master/geojson/housingprice_Beijing.geojson"


//Filter conditions

//housing area
var areaFilter = function(feature) {
    return true
};

//built year
var yearFilter = function(feature) {
    return true
};

//floor
var floorFilter = function(feature) {
    return true
};

//the number of bedrooms
var numBedroom = function(feature) {
    return true
};



//output function
$(document).ready(function() {
    $.ajax(data).done(function(data) {
      var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        style: myStyle,
        filter: myFilter
      }).addTo(map);
  
      // quite similar to _.each
      featureGroup.eachLayer(eachFeatureFunction);
    });
  });
