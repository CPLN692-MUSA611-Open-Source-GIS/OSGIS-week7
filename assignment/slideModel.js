/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
// LinkNYC represents ~1/2 of the WiFi hotspots in NYC
var slideExample = {
  slideNumber: 1,
  title: "LinkNYC WiFi Hotspots",
  filter: function(geojsonFeature) { 
    if (feature.properties.provider === 'LinkNYC - Citybridge' ) {
      return true;
    } else {
      return false
    }
  }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
