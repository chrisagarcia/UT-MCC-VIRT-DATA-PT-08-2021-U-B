const url = "https://api.spacexdata.com/v2/launchpads";

let requestedData = []

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  requestedData = data
  console.log(requestedData)
});

console.log(requestedData);

// // // Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);
