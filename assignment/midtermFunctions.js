/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

var mapOpts = {
    center: [40.700468, -73.947944],
    zoom: 10
};
var map = L.map('map', mapOpts);

// Another options object
var tileOpts = {
attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
subdomains: 'abcd',
minZoom: 0,
maxZoom: 20,
ext: 'png'
};
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', tileOpts).addTo(map);


var dataset = 'https://data.cityofnewyork.us/api/geospatial/a9we-mtpn?method=export&format=GeoJSON';
var featureGroup;
var parsedData;

// Function to display name of point when user clicks
var displayName = function(feature) {};

// Aggregagte by counts by a given field for landing page
var countByProvider = function(feature, field) {};

// Filter data by a given borough
var filterByBourough = function(feature, borough) {};

// Three objects for the slides
var slide1 = {title: 'name', text: 'text', geography: 'geo'};
var slide2 = {title: 'name', text: 'text', geography: 'geo'};
var slide3 = {title: 'name', text: 'text', geography: 'geo'};

// Function takes param next or previous called to change slide in a direction
var changeSlide = function(direction) {};

// Remove title and map data upon user request to prepare for next slide
var clearSlide = function() {};


$(document).ready(function() {
    $.ajax(dataset).done(function(data) {
      var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        style: myStyle,
        filter: myFilter
      }).addTo(map);
  
  
      // quite similar to _.each
      featureGroup.eachLayer(eachFeatureFunction);
      // For now, this just returns to initial page after 5s.
      // Will add close button later if I have time.
    });
  });

