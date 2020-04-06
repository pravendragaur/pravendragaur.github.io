// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
 var data = google.visualization.arrayToDataTable([
         ['Charts', 'Rating', { role: 'style' }],
         ['High charts', 80, '#ea1e62'],            // RGB value
         ['Google charts', 75,'#304fff'],            // English color name
         ['Flash charts', 55,'#944bd8'],

       ['D3 charts', 33, '#00798c' ], // CSS-style declaration
      ]);;
var view = new google.visualization.DataView(data);
      
view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
  // Optional; add a title and set the width and height of the chart
  var options = { 'width':'94%', 'height':250,
    
    is3D: true,
    backgroundColor: 'rgb(24,27,46)',
    legend: { position: "none" },
    vAxis: {title: 'Rating Percentage', textStyle: {color: 'white'}},
            hAxis: {title: 'Libraries',textStyle: {color: 'white'}},
  
    };

  // Display the chart inside the <div> element with id="columnchart"
  var chart = new google.visualization.ColumnChart(document.getElementById('columnchart'));
  chart.draw(view,options)
}