var chart = AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    "marginRight": 80,
    "autoMarginOffset": 20,
    "dataDateFormat": "YYYY-MM-DD JJ:NN:SS",
    "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left"
    },{
        "id":"v2",
        "axisColor": "#FCD202",
        "axisThickness": 2,
        "gridAlpha": 0,
        "axisAlpha": 1,
        "position": "right"
    }],
    "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
    },
    "graphs": [{
        "id": "g1",
        "bullet": "round",
        "lineColor": "#FF6600",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[date]]</span><br>[[value]]</div>"
    },
    , {
        "id": "g2",
        "bullet": "round",
        "lineColor": "#FCD202",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "sum",
        "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[date]]</span><br>[[sum]]</div>"
    }],
    "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis":false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount":true,
        "color":"#AAAAAA"
    },
    "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":0,
        "valueLineAlpha":0.2
    },
    "categoryField": "date",
    "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true,
        "minPeriod": "ss"
    },
    "export": {
        "enabled": true
    },
    "dataProvider": [{
        "date": "2012-07-27 00:00:00",
        "value": 13,
        "sum": 10
    }, {
        "date": "2012-07-27 00:00:02",
        "value": 11,
        "sum": 12
    }, {
        "date": "2012-07-27 00:00:05",
        "value": 15,
        "sum": 13
    }, {
        "date": "2012-07-27 00:00:10",
        "value": 16,
        "sum": 14
    }]
});

chart.dataProvider.push({
    date: "2012-07-27 00:00:20",
    value: 10,
    sum: 15
});
console.log(chart.dataProvider)
chart.addListener("rendered", zoomChart);

zoomChart();

function zoomChart() {
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}

window.onload = function(){
    var find_tag = document.getElementsByTagName("a")[6]
    find_tag.style.visibility = "hidden"
};
console.log(qVResult)



