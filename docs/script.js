var chartDom = document.getElementById('grafico');
var myChart = echarts.init(chartDom);

var option = {
    title: {
        text: 'Ocupación de Camas vs Letalidad',
        left: 'center'
    },
    tooltip: {
        trigger: 'item'
    },
    xAxis: {
        name: 'Índice Ocupacional (%)',
        type: 'value'
    },
    yAxis: {
        name: 'Letalidad (%)',
        type: 'value'
    },
    series: [{
        symbolSize: 15,
        data: [
            [74.73, 33.33],
            [61.31, 14.29],
            [62.90, 33.33],
            [70.00, 20.83],
            [75.81, 23.33]
        ],
        type: 'scatter'
    }]
};