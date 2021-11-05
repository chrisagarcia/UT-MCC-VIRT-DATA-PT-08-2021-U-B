// Sort the data by Greek search results
data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
const reversedData = data.slice(0, 10)
reversedData.reverse()

// Trace1 for the Greek Data
const trace1 = {
  x: reversedData.map(e => e.greekSearchResults),
  y: reversedData.map(e => e.pair),
  text: reversedData.map(e => e.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

const trace2 = {
  x: reversedData.map(e => e.romanSearchResults),
  y: reversedData.map(e => e.pair),
  text: reversedData.map(e => e.romanName),
  name: "Roman",
  type: "bar",
  orientation: "h"
};



// // data
const dataPloty = [trace1, trace2];

// // Apply the group bar mode to the layout
const layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  },
  barmode: "stack"
};

// // Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", dataPloty, layout);
