/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */
var map = L.map('map', {
    center: [40.000, -75.1090],  /* need to update */
    zoom: 11
  });
  var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  }).addTo(map);

  var showResults = function() {
    // => <div id="intro" css="display: none">
    $('#intro').hide();
    // => <div id="results">
    $('#results').show();
  };

// read dataset
var rawdata = "https://raw.githubusercontent.com/CPLN692-MUSA611-Open-Source-GIS/datasets/master/geojson/housingprice_Beijing.geojson"

// apply to each feature: bind popups function with "name", "area", "totalprice", "yearbuilt"
// on click event to show full information on each data point
var eachFeatureFunction = function(layer) {
    layer.bindPopup (layer.feature.properties.name,layer.feature.properties.area,
        layer.feature.properties.totalprice,layer.feature.properties.yearbuilt)
    layer.on('click', function (event) {
        $('.name').text(layer.feature.properties.name)
        $('.total_price').text(layer.feature.properties.totalprice)
        $('.area').text(layer.feature.properties.area)
        $('.price_perm2').text(layer.feature.properties.priceperm2)
        $('.bedrooms').text(layer.feature.properties.bedrooms)
        $('.floor').text(layer.feature.properties.floor)
        $('.builtyear').text(layer.feature.properties.yearbuilt)
        $('.school_district').text(layer.feature.properties.schooldistrict)
    });
};

// set styles - different scenarios for different slides??
var myStyle = function(feature) {
    switch (feature.properties.COLLDAY) { /* need to update below */
      case 'MON': return {fillColor: "#756060", weight:1}
      case 'TUE': return {fillColor: "#fed049", weight:1}
      case 'WED': return {fillColor: "#007580", weight:1}
      case 'THU': return {fillColor: "#282846", weight:1}
      case 'FRI': return {fillColor: "#c06014", weight:1}
      case 'SAT': return {fillColor: "#536162", weight:1}
      case 'SUN': return {fillColor: "#cdc733", weight:1}
    }
};

//Slide 1 - all data points with popups: Housing Price in Beijing (size of marker for total price)
var slide1 = {
    slideNumber: 1,
    title: "Housing Prices in Beijing - Total Price",
    filter: function(geojsonFeature) { return true }  /* need to update */
  };

//Slide 2 - all data points with popups: Housing Price in Beijing (size of marker for price perm2)
var slide2 = {
    slideNumber: 2,
    title: "Housing Prices in Beijing - Per m2",
    filter: function(geojsonFeature) { return true }  /* need to update */
  };

//Slide 3 - breakdown by school districts (size of marker for price perm2, color group for school district)
var slide3 = {
    slideNumber: 3,
    title: "Housing Prices perm2 in Beijing by School District",
    filter: function(geojsonFeature) { return true }  /* need to update */
  };

//Slide 4 - breakdown by built year (size of marker for price perm2, color group for built year)
var slide3 = {
    slideNumber: 4,
    title: "Housing Prices perm2 in Beijing by Built Year",
    filter: function(geojsonFeature) { return true }  /* need to update */
  };

var slideDeck = [slide1, slide2, slide3, slide4] 

// main function
$(document).ready(function() {
    $.ajax(rawdata).done(function(data) {
        var parsedData = JSON.parse(data);
        var layerGroup = L.geoJson (parsedData, {
            style: myStyle

            }).addTo(map)
        layerGroup.eachLayer(eachFeatureFunction);
    })
})