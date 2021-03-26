/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "Stops in the Philadelphia Region prior to Pandemic",
  filter: function(geojsonFeature) { return beforePandemic > 0; }
};

var slideExample = {
  slideNumber: 2,
  title: "stops with service at maximum service cut",
  filter: function(geojsonFeature) { return afterPandemic > 0; }
};
var slideExample = {
  slideNumber: 3,
  title: "stops without service ",
  filter: function(geojsonFeature) { return afterPandemic == 0; }
};
var slideExample = {
  slideNumber: 4,
  title: "changes in trips at stop",
  filter: function(geojsonFeature) { return true }
};
var slideExample = {
  slideNumber: 5,
  title: "Percent change of trips at stop",
  filter: function(geojsonFeature) { return true }
};


/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
