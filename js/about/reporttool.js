// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Tools', 'Rating'],
  ['Jaspersoft', 6.5],
  ['SSRS', 2],
  ['Power BI', 1.5],
  
]);

  // Optional; add a title and set the width and height of the chart
  var options = { 'width':'94%', 'height':250,
    colors: ['#67b7dc', '#dc67ce', '#8067dc'],
    
    pieSliceBorderColor: "none",
    pieHole: 0.35,
    backgroundColor:  'rgb(24,27,46)',
    legend: {textStyle: {color: 'white'},position:'bottom', alignment: 'start'}
    
    };

  // Display the chart inside the <div> element with id="reporttool"
  var chart = new google.visualization.PieChart(document.getElementById('reporttool'));
  chart.draw(data, options);
}

google.charts.load('current', {
  callback: function () {
    drawChart();
    $(window).resize(drawChart);
  },
  packages:['corechart']
});
