const sales = [{'drink': 'beer', 'volume': 22.7}, {'drink': 'wine', 'volume': 17.1}, {'drink': 'martini', 'volume': 9.9}, {'drink': 'margarita', 'volume': 8.7}, {'drink': 'ice tea', 'volume': 7.2}, {'drink': 'rum & coke', 'volume': 6.1}, {'drink': 'mai tai', 'volume': 6.0}, {'drink': 'gin & tonic', 'volume': 4.6}]

const dataPie = [{
    values: sales.map(e => e.volume),
    labels: sales.map(e => e.drink),
    type: 'pie'
}];
  
  
const layoutPie = {
    height: 400,
    width: 500,
    title: 'My Pie'
};

var dataBar = [
    {
      x: sales.map(e => e.drink),
      y: sales.map(e => e.volume),
      type: 'bar'
    }
];

const layoutBar = {
    height: 400,
    width: 500,
    title: 'My Bar'
};
  
  
Plotly.newPlot('myPie', dataPie, layoutPie);
Plotly.newPlot('myBar', dataBar, layoutBar);