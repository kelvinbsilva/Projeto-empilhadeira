google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
  var data = google.visualization.arrayToDataTable([
    ['Number', 'Leves', 'Sérios'],
    ['1001', 2, 1],
    ['1002', 1, 0],
    ['1003', 6, 1],
    ['1004', 0, 5],
    ['1005', 2, 4],
  ]);

  var options = {
    title: 'Problemas nas empilhadeiras nos ultimos 30 dias', titleTextStyle: { color: 'white', fontSize: "13" },
    isStacked: true,
    backgroundColor: '#303337',
    hAxis: { textStyle: { color: "white" } },
    vAxis: { textStyle: { color: "white" } },
    legend: { position: "bottom", textStyle: { color: "white" } },
  };

  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
  chart.draw(data, options);
}