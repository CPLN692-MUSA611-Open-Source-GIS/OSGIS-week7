/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [37.75903643086071, -122.4458419542184],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);




var dataset = "https://data.sfgov.org/resource/g8m3-pdis.json"
var featureGroup;

var getData = $.ajax("https://data.sfgov.org/resource/g8m3-pdis.json")
coord = getData.responseJSON[1]["location"]["coordinates"]

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);
    legend.addTo(map);
    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});
