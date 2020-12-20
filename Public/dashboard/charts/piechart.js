google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work',     11],
    ['Eat',      2],
    ['Commute',  2],
    ['Watch TV', 2],
    ['Sleep',    7]
  ]);

  var options = {
    title: 'Principais problemas', titleTextStyle: { color: 'white', fontSize: "13" },
    backgroundColor: '#303337',
    hAxis: { textStyle: { color: "white" } },
    vAxis: { textStyle: { color: "white" } },
    legend: { position: "none" },
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}