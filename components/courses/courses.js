mobilessonApp.controller('courses', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {


    $http.get(domain + 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=all')
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
        element: 'donutChartCourses',
        data: [
		{ label: "Finished", value: 100 },
		{ label: "In Progress", value: 3091 },
		{ label: "Haven't Started", value: 2781 }
	  ],
        colors: ['#f3ce85', '#65CEA7', '#FC8675']
    });

    var barChart = Morris.Bar({
        element: 'barChartCourses',
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


} ])

