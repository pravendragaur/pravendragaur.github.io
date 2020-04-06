// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['PPM', 'Rating'],
  ['Planview', 4],
  ['Clarity', 6],
  
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'width':'94%', 'height':250,
    colors: ['rgb(253,71,0)', 'rgb(0,200,143)'],
    is3D: true,
    backgroundColor:  'rgb(24,27,46)',
    legend: {textStyle: {color: 'white'},position:'bottom'}
    };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart1'));
  chart.draw(data, options);
}

google.charts.load('current', {
  callback: function () {
    drawChart();
    $(window).resize(drawChart);
  },
  packages:['corechart']
});