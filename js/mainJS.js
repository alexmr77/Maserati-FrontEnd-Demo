$(document).ready(function() {

    $('#vehicle').click(function() {
        $("html, body").animate({
            scrollTop: $("#vehicleBanner").offset().top
        }, 1200);
        $('#mGT').hide();
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mMC12').hide();
        $('.dataChart').hide();
    });

    $('#GT').click(function() {
        $('#mGT').show();
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mMC12').hide();
        $('.dataChart').hide();
        $("html, body").animate({
            scrollTop: $("#mGT").offset().top
        }, 1200);
    });

    $('#ghibli').click(function() {
        $('#mGhibli').show();
        $('#mGT').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mMC12').hide();
        $('.dataChart').hide();
        $("html, body").animate({
            scrollTop: $("#mGhibli").offset().top
        }, 1200);
    });

    $('#quat').click(function() {
        $('#mQuat').show();
        $('#mGhibli').hide();
        $('#mGT').hide();
        $('#mLev').hide();
        $('#mMC12').hide();
        $('.dataChart').hide();
        $("html, body").animate({
            scrollTop: $("#mQuat").offset().top
        }, 1200);
    });

    $('#lev').click(function() {
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mGT').hide();
        $('#mMC12').hide();
        $('#mLev').show();
        $('.dataChart').hide();
        $("html, body").animate({
            scrollTop: $("#mLev").offset().top
        }, 1200);
    });

    $('#mc12').click(function() {
        $('#mMC12').show();
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mGT').hide();
        $('.dataChart').hide();
        $("html, body").animate({
            scrollTop: $("#mMC12").offset().top
        }, 1200);
    });

    $('#home').click(function() {
        $('#mMC12').hide();
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mGT').hide();
        $('.dataChart').hide();
    });

    $('#data').click(function() {
        $('#mMC12').hide();
        $('#mGhibli').hide();
        $('#mQuat').hide();
        $('#mLev').hide();
        $('#mGT').hide();
        $('.dataChart').show();
        $("html, body").animate({
            scrollTop: $(".dataChart").offset().top
        }, 1200);
    });


    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: '2017 Maserati Monthly Sales'
        },
        subtitle: {
            text: 'Source: carsalesbase.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Car Sales (per Unit)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} Cars sold</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Gran Turismo',
            data: [32, 144, 68, 103, 76, 70, 43, 74, 85, 85, 88, 119]

        }, {
            name: 'Ghibli',
            data: [356, 523, 536, 512, 578, 328, 446, 418, 420, 439, 438, 569]

        }, {
            name: 'Quattroporte',
            data: [122, 115, 141, 177, 160, 125, 128, 165, 139, 123, 132, 174]

        }, {
            name: 'Levante',
            data: [379, 305, 567, 473, 451, 377, 446, 446, 475, 493, 483, 565]

        }]
    });




    // Radialize the colors
    Highcharts.setOptions({
        colors: Highcharts.map(Highcharts.getOptions().colors, function(color) {
            return {
                radialGradient: {
                    cx: 0.5,
                    cy: 0.3,
                    r: 0.7
                },
                stops: [
                    [0, color],
                    [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
                ]
            };
        })
    });

    // Build the chart
    Highcharts.chart('container2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Percentage of Maserati Model Sales 2017'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Share',
            data: [{
                    name: 'Gran Turismo',
                    y: 7.3
                },
                {
                    name: 'Ghibli',
                    y: 40.5
                },
                {
                    name: 'Quattroporte',
                    y: 12.4
                },
                {
                    name: 'Levante',
                    y: 39.8
                }

            ]
        }]
    });

});