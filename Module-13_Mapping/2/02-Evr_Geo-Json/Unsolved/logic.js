const queryUrl =
  "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02&maxlongitude=-69.52148437&minlongitude=-123.83789062&maxlatitude=48.74894534&minlatitude=25.16517337";

const mapBoxUrl =
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}";
const mapBoxAttr =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>';

const streetLayer = L.tileLayer(mapBoxUrl, {
  attribution: mapBoxAttr,
  maxZoom: 18,
  id: "mapbox/streets-v11",
  accessToken: API_KEY,
});

const darkLayer = L.tileLayer(mapBoxUrl, {
  attribution: mapBoxAttr,
  maxZoom: 18,
  id: "mapbox/dark-v10",
  accessToken: API_KEY,
});

d3.json(queryUrl).then((data) => {

  console.log(data);

  const earthquakes = L.geoJSON(data, {
    onEachFeature: (feature, layer) => {
      layer.bindPopup(
        `<h3> ${feature.properties.place}</h3><hr><p>${new Date(
          feature.properties.time
        )}</p>`
      );
    },
  }
  );

  const myMap = L.map("map", {
    center: [40.0, -97.0],
    zoom: 5,
    layers: [streetLayer, earthquakes],
  });

  L.control
    .layers(
      { street: streetLayer, dark: darkLayer },
      { earthquakes: earthquakes },
      {
        collapsed: false,
      }
    )
    .addTo(myMap);
});
