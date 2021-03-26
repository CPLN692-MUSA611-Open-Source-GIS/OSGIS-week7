/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slide1 = {
  slideNumber: 1,
  title: "Registered businesses in SF",
  filter: function(geojsonFeature) { return true }
};

var slide2 = {
  slideNumber: 2,
  title: "Businesses by year started",
  filter: function(geojsonFeature) { return true }
};

var slide3 = {
  slideNumber: 3,
  title: "Businesses by NAICS industries",
  filter: function(geojsonFeature) { return true }
};

var slide4 = {
  slideNumber: 4,
  title: "Businesses by parking availaibility",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3, slide4]
