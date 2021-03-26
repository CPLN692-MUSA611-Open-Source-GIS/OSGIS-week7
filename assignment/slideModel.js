/* ================================
Week 6 Assignment: Slide Model
================================ */

var slide1 = {
    slideNumber: 1,
    title: "Philly's Bike Network",
    filter: function(geojsonFeature) { return true }
};

var slide2 = {
    slideNumber: 2,
    title: "Spruce/Pine Bikeway",
    filter: function(geojsonFeature) {
        //STREETNAME === 'SPRUCE  ST' | STREETNAME === 'PINE ST'
        //TYPE === 'Paint Buffered'
        return true
    }
};

var slide3 = {
    slideNumber: 3,
    title: "Chestnut Bikeway",
    filter: function(geojsonFeature) {
        //STREETNAME === 'CHESTNUT  ST'
        //TYPE === 'One Way Protected Bicycle Lane'
        return true
    }
};

var slide4 = {
    slideNumber: 4,
    title: "North Philly Bikeway",
    filter: function(geojsonFeature) {
        //STREETNAME === 'N  10TH  ST' | STREETNAME === 'N  13TH  ST'
        //TYPE === 'Paint Buffered'
        return true
    }
};

var slide5 = {
    slideNumber: 5,
    title: "Girard Ave",
    filter: function(geojsonFeature) {
        //zoom to Girard Ave to show good candidate for bike lanes
        return true
    }
};

var slide6 = {
    slideNumber: 6,
    title: "Conventional",
    filter: function(geojsonFeature) {
        //TYPE === 'CONVENTIONAL'
        return true
    }
};

var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6]