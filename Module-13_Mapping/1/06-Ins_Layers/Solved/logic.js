const mapBoxUrl =
  "https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";

const mapBoxAttr =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
// An array of cities and their locations
var cities = [
  {
    name: "Paris",
    location: [48.8566, 2.3522],
  },
  {
    name: "Lyon",
    location: [45.764, 4.8357],
  },
  {
    name: "Cannes",
    location: [43.5528, 7.0174],
  },
  {
    name: "Nantes",
    location: [47.2184, -1.5536],
  },
];

// An array which will be used to store created cityMarkers
var cityMarkers = [];

for (var i = 0; i < cities.length; i++) {
  // loop through the cities array, create a new marker, push it to the cityMarkers array
  cityMarkers.push(
    L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
  );
}

// Add all the cityMarkers to a new layer group.
// Now we can handle them as one group instead of referencing each individually
var cityLayer = L.layerGroup(cityMarkers);

// Define variables for our tile layers
var light = L.tileLayer(mapBoxUrl, {
  attribution: mapBoxAttr,
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY,
});

// Overlays that may be toggled on or off

// Create map object and set default layers
var myMap = L.map("map", {
  center: [46.2276, 2.2137],
  zoom: 6,
  layers: [light, cityLayer],
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control
  .layers(
    {
      Light: light,
      Dark: L.tileLayer(mapBoxUrl, {
        attribution: mapBoxAttr,
        maxZoom: 18,
        id: "dark-v10",
        accessToken: API_KEY,
      }),
    },
    {
      Cities: cityLayer,
    }
  )
  .addTo(myMap);
