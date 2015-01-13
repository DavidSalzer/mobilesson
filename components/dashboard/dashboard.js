mobilessonApp.controller('dashboard', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {

    //need to replace in data from server.
    $scope.installedInCompany = 347;
    $scope.departmentsInCompany = 568;
    $scope.testDone = 982;
    $scope.courses = 78;

    $http.get(domain + '?action=getStatisticsByUnit&unit=all')
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;
        }
    })
    .error(function (data) {
        console.log(data);
    })

    //Morris Chart
    var donutChart = Morris.Donut({
        element: 'donutChartDashboard',
        data: [
    { label: "Finished", value: 100 },
    { label: "In Progress", value: 3091 },
    { label: "Haven't Started", value: 2781 }
     ],
        colors: ['#f3ce85', '#65CEA7', '#FC8675']
    });

    var barChart = Morris.Bar({
        element: 'barChartDashboard',
        data: [
		{ y: '2006', a: 150, b: 90 },
		{ y: '2007', a: 75, b: 65 },
		{ y: '2008', a: 50, b: 40 },
		{ y: '2009', a: 75, b: 65 },
		{ y: '2010', a: 50, b: 40 },
		{ y: '2011', a: 75, b: 65 },
		{ y: '2012', a: 100, b: 90 }
	  ],
        xkey: 'y',
        ykeys: ['a', 'b'],
        grid: false,
        labels: ['Installed', 'Finished'],
        barColors: ['#5EE1B1', '#3BC894'],
        gridTextColor: '#fff'
    });

    //Flot Chart
    //Website traffic chart				
    var init = { data: [[1183240800000, 184.36], [1185919200000, 31.85], [1188597600000, 280.74], [1191189600000, 381.15], [1193871600000, 82.38], [1196463600000, 483.94], [1199142000000, 85.44]],
        label: "Entries Per Day"
    };

    options = {
        series: {
            lines: {
                show: true,
                fill: true,
                fillColor: 'rgba(121,206,167,0.2)'
            },
            points: {
                show: true,
                radius: '4.5'
            },
            xaxis: { mode: "time",
                timeformat: "%Y/%m/%d"
            }
        },
        grid: {
            hoverable: true,
            clickable: true
        },
        colors: ["#37b494"],
        xaxis: { mode: "time" }
    };

    plot = $.plot("#placeholder", [init], options);

    $("<div id='tooltip'></div>").css({
        position: "absolute",
        display: "none",
        border: "1px solid #222",
        padding: "4px",
        color: "#fff",
        "border-radius": "4px",
        "background-color": "rgb(0,0,0)",
        opacity: 0.90
    }).appendTo("body");

    $("#placeholder").bind("plothover", function (event, pos, item) {

        var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
        $("#hoverdata").text(str);

        if (item) {
            var x = item.datapoint[0],
				y = item.datapoint[1];

            $("#tooltip").html("Visitor : " + y)
				.css({ top: item.pageY + 5, left: item.pageX + 5 })
				.fadeIn(200);
        } else {
            $("#tooltip").hide();
        }
    });

    $("#placeholder").bind("plotclick", function (event, pos, item) {
        if (item) {
            $("#clickdata").text(" - click point " + item.dataIndex + " in " + item.series.label);
            plot.highlight(item.series, item.datapoint);
        }
    });

    var animate = function () {
        $('#placeholder').animate({ tabIndex: 0 }, {
            duration: 3000,
            step: function (now, fx) {

                var r = $.map(init.data, function (o) {
                    return [[o[0], o[1] * fx.pos]];
                });

                plot.setData([{ data: r}]);
                plot.draw();
            }
        });
    }

    animate();

} ])
