/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
map.initialBounds = map.getBounds()
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);
arbitraryMarker = [];
markerIcon='';

/* =====================
Customized Icon Configuration
===================== */
var blueIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var yellowIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var purpleIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

/* =====================

## Task 1

Load the dataset into our application. Set the 'dataset' variable to the address for
'philadelphia-garbage-collection-boundaries.geojson' in the class dataset repository
https://raw.githubusercontent.com/CPLN692-MUSA611-Open-Source-GIS/datasets/master/geojson/philadelphia-garbage-collection-boundaries.geojson

You should now have GeoJSON data projected onto your map!

## Task 2 - our first choropleth map

Style each garbage collection area with a different color depending on what day
of the week garbage collection occurs. For example, all areas with Monday
garbage collection could be red, all areas with Tuesday garbage collection could
be blue, etc.

The myStyle function should return an object that contains style information.
For example, if you add the following line inside of the myStyle function, every
feature should be colored red.

return {fillColor: 'red'}

Other options for styling include opacity and weight. For a full list, see:
http://leafletjs.com/reference.html#path

For our myStyle function, we want a different fillColor to be returned depending
on the day of the week. If you need help, review http://leafletjs.com/examples/geojson.html for
working examples of this function.

## Task 3

You might have noticed that two of the features we are mapping have empty
strings as their value for collection date. These will probably have the default
style on your map, not the new styles you defined for the days of the week.

Our map is better than that. Let's filter out the junk data.

Check out the myFilter function. This function is used in a similar fashion to
the second argument we provide to Underscore's _.filter() function. The filter
loops through each feature in your GeoJSON file. For each feature, when the function
returns true, that feature is added to the map. When it returns false, that feature
is not added to the map.

Currently, the myFilter function contains only:

`return true;`

Since it always returns true, it will add each feature to the map. Modify the
code so it only adds features to the map if they have a collection day (not an
empty string).

## Task 4

Let's make something happen when a user clicks on a feature. Change the "Day of
Week" in the sidebar to show the day of the week of garbage removal. Make sure
to display the full name (display "Monday" instead of "MON").

We will write everything we want to happen to each feature inside of the
following (aptly named) function:

var eachFeatureFunction = function(feature, layer) {
  ...
});

You'll notice that inside of that block of code we have a second block of code:

layer.on('click', function (e) {
  ...
})

That part sets up a click event on each feature. Any code inside that second
block of code will happen each time a feature is clicked.

## Task 5

Create a legend for the map. You do not need to use Javascript. You can use HTML
and CSS to create legend boxes and give each a different color. Put a label next
to each box. Position the legend on top of the map (hint: you can use absolute
positioning, which is the technique used to position the sidebar and map on this
page).

## Task 6

Use fitBounds (http://leafletjs.com/reference.html#map-fitbounds) to zoom in and
center the map on one particular feature. To find the bounds for a feature, use
event.target.getBounds() inside of the layer.on function see
https://leafletjs.com/reference-1.7.1.html#evented for more on using events.

## Task 7 (Stretch goal)

Let's associate the leaflet ID (we can use this to look up a leaflet layer) with
our HTML element. Try to use the `getLayerId` method of `L.FeatureGroup` and
`L.LayerGroup` (on myFeatureGroup) below.
With it, add the Leaflet ID to the information provided on the left.

## Task 8 (Stretch Goal)

Add a "Close" or "X" button to the top right of your sidebar. When when the
button is clicked, call a function closeResults that performs the opposite
processes as showResults, returning the user to the original state of the
application.

## Task 9 (Stretch Goal)

Use Underscore to perform analysis on this GeoJSON data: which day of
the week was the most common for garbage removal? Update the original state
of the application to report/display this information.

===================== */

var dataset = "https://raw.githubusercontent.com/CPLN692-MUSA611-Open-Source-GIS/datasets/master/geojson/philadelphia-garbage-collection-boundaries.geojson"
var featureGroup;

var myStyle = function(feature) {
  switch (feature.properties.COLLDAY) {
    case 'MON': return {color: "blue"};
    case 'TUE': return {color: "red"};
    case 'WED': return {color: "green"};
    case 'THU': return {color: 'yellow'};
    case 'FRI': return {color: 'purple'};
    default: return {color: 'black'} // we probably have some "junk" data without a value for COLLDAY!!
  }
};

var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).show() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.
  ===================== */
  // => <div id="intro" css="display: none">
  $('#intro').hide();
  // => <div id="results">
  $('#results').show();
};

var removeMarkers = function(){
  map.removeLayer(arbitraryMarker);
}

var closeResults = function() {
  // => <div id="intro">
  $('#intro').show();
  // => <div id="results" css="display: none">
  $('#results').hide();
  map.fitBounds(map.initialBounds)
  removeMarkers();
};

var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    /* =====================
    The following code will run every time a layer on the map is clicked.
    Check out layer.feature to see some useful data about the layer that
    you can use in your application.
    ===================== */
    // console.log(layer.feature);
    removeMarkers();
    $('h1.day-of-week').text(collectionDay(layer.feature));
    $('span.day-of-week').text(collectionDay(layer.feature));
    showResults();
    // console.log(event)
    arbitraryMarker = L.marker(event.latlng, {icon: markerIcon});
    arbitraryMarker.addTo(map)
    // Zoom to a particular feature when clicked
    map.fitBounds(event.target.getBounds())
    // console.log(event.target.getBounds())s
    $('span.leaflet-id').text(layer._leaflet_id)
    // console.log(layer._leaflet_id)
    // console.log(event)
  });
};

var myFilter = function(feature) {
  // Avoid creating visualization for null data
  validCOLLDAY = ['MON', 'TUE', 'WED','THU', 'FRI']
  return(_.contains(validCOLLDAY, feature.properties.COLLDAY))
};

var collectionDay = function(feature){
  var displayDay = '';
  // Add collection information to the sidebar
  switch (feature.properties.COLLDAY) {
      case 'MON': displayDay = 'Monday'; markerIcon = blueIcon; break;
      case 'TUE': displayDay = 'Tuesday'; markerIcon = redIcon;  break;
      case 'WED': displayDay = 'Wednesday'; markerIcon = greenIcon;  break;
      case 'THU': displayDay = 'Thursday'; markerIcon = yellowIcon; break;
      case 'FRI': displayDay = 'Friday'; markerIcon = purpleIcon; break;
      default: displayDay = '';
  }
  return displayDay;
}

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);
    
    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);

    // _.each(parsedData, function(dat){
    //   dat.properties
    // })
    // console.log(parsedData.features)
    
    // which day of the week was the most common for garbage removal?
    COLLDAYStats = _.countBy(parsedData.features, function(feature){
      return feature.properties.COLLDAY
    })
    console.log(COLLDAYStats)

    // aa = _.countBy(parsedData, function(dat){
    //   return dat.features
    // })
    // console.log(aa)
    // console.log(parsedData.features.properties)
  });
});
