/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var title = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide2 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide3 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide4 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide5 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide6 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

var slide7 = {
  slideNumber: 1,
  title: "title",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [title, slide2, slide3, slide4,slide5,slide6,slide7]
