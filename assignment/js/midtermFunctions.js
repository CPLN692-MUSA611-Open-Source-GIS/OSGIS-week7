/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

/* ================================
Function 1: Filtering businesses by starting and ending year
================================ */
var filterStart = function(parsedData) {
    switch (starting year) {
        case '2021':   
          coords = "X, Y"; break;
        case '2020':   
          coords = "X, Y"; break;
        case '2019':   
          coords = "X, Y"; break;
      }
}
// find business start date and return the corresponding

var filterClose = function(parsedData) {
    switch (closed year) {
        case '2021':   
          coords = "X, Y"; break;
        case '2020':   
          coords = "X, Y"; break;
        case '2019':   
          coords = "X, Y"; break;
      }
}

/* ================================
Function 2: Filtering businesses by NAICS industry
================================ */
var filterNAICS = function(parsedData) {
    NAICS = {
        Professional, Scientific, and Technical Services
        Real Estate and Rental and Leasing Services(Other)
        ConstructionRetail 
        TradeFood 
        ServicesPrivate 
        Education and Health ServicesArts, 
        Entertainment, and Recreation
        Accommodations
        Transportation and Warehousing
        Multiple 
        Financial Services
    }
    coords = _.map(NAICS == something)
}
// find business NAICS category and return the corresponding

/* ================================
Function 3: Filtering businesses by parking availability
================================ */
var filterParking = function(parsedData) {
    coords = _.map(Parking == yes or no)
}
// find business NAICS category and return the corresponding

/* ================================
Function 4: Click to zoom in on individual marker
================================ */
var eachFeatureFunction = function(layer) {
    layer.on('click', function (event) {
      /* =====================
      The following code will run every time a layer on the map is clicked.
      Check out layer.feature to see some useful data about the layer that
      you can use in your application.
      ===================== */
      switch (business name) {
       busName = business name;
      }
      switch ( owner name) {
        busOwnName = business owner name;
       }
      $('.busName').text(busName)
      $('.busName').text(busOwnName)
      showResults();
      /* zoom in */
      map.fitBounds( event.target.getBounds())
    });
  };