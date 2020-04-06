// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Database', 'Rating'],
  ['Oracle', 5.5],
  ['SQL Server', 2],
  ['Mongo DB', 2.5],
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'width':'94%', 'height':250,
    colors: ['#e32124', '#5d78ff', '#12aa50'],
    is3D: true,
    backgroundColor:  'rgb(24,27,46)',
    legend: {textStyle: {color: 'white'},position:'bottom', alignment: 'start'}
    
    };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

google.charts.load('current', {
  callback: function () {
    drawChart();
    $(window).resize(drawChart);
  },
  packages:['corechart']
});
