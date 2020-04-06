// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
 var data = google.visualization.arrayToDataTable([
         ['Charts', 'Rating', { role: 'style' }],
         ['SQL Developer', 90, '#6794dc'],            // RGB value
         ['SQl Plus', 80,'#a367dc'],            // English color name
         ['Compass', 50,'#dc6788'],
         
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

  // Display the chart inside the <div> element with id="dbtools"
  var chart = new google.visualization.ColumnChart(document.getElementById('dbtools'));
  chart.draw(view,options)
}
