mobilessonApp.controller('courses', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {


    $http.get(domain + 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=all')
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;
            $scope.notStarted = $scope.statistics.general.employees - $scope.statistics.general.started - $scope.statistics.general.ended;

            //data for donat chart.
            donutChart = Morris.Donut({
                element: 'donutChartCourses',
                data: [
		            { label: "Finished", value: $scope.statistics.general.ended },
		            { label: "In Progress", value: $scope.statistics.general.started },
		            { label: "Haven't Started", value: $scope.notStarted }
	            ],
                colors: ['#f3ce85', '#65CEA7', '#FC8675']
            });

            //data for bar chart.
            barData = [];
            for (var i in $scope.statistics.statisticsByDepartment) {
                installed = Math.round($scope.statistics.statisticsByDepartment[i].installed / $scope.statistics.statisticsByDepartment[i].employees * 100);
                finished = Math.round($scope.statistics.statisticsByDepartment[i].ended / $scope.statistics.statisticsByDepartment[i].employees * 100);
                barData.push({ y: $scope.statistics.statisticsByDepartment[i].department.name, a: installed, b: finished })
            }

            barChart = Morris.Bar({
                element: 'barChartCourses',
                data: barData,
                //{ y: '2006', a: 150, b: 90 },
                //{ y: '2007', a: 75, b: 65 },
                //{ y: '2008', a: 50, b: 40 },
                //{ y: '2009', a: 75, b: 65 },
                //{ y: '2010', a: 50, b: 40 },
                //{ y: '2011', a: 75, b: 65 },
                //{ y: '2012', a: 100, b: 90 }
	              //],
                xkey: 'y',
                ykeys: ['a', 'b'],
                grid: false,
                labels: ['Installed', 'Finished'],
                barColors: ['#5EE1B1', '#3BC894'],
                gridTextColor: '#fff'
            });


        }
    })
    .error(function (data) {
        console.log(data);
    })

    //Morris Chart
    //  var donutChart = Morris.Donut({
    //      element: 'donutChartCourses',
    //      data: [
    //{ label: "Finished", value: 100 },
    //{ label: "In Progress", value: 3091 },
    //{ label: "Haven't Started", value: 2781 }
    // ],
    //      colors: ['#f3ce85', '#65CEA7', '#FC8675']
    //  });

  //  var barChart = Morris.Bar({
  //      element: 'barChartCourses',
  //      data: [
		//{ y: '2006', a: 150, b: 90 },
		//{ y: '2007', a: 75, b: 65 },
		//{ y: '2008', a: 50, b: 40 },
		//{ y: '2009', a: 75, b: 65 },
		//{ y: '2010', a: 50, b: 40 },
		//{ y: '2011', a: 75, b: 65 },
		//{ y: '2012', a: 100, b: 90 }
	 // ],
  //      xkey: 'y',
  //      ykeys: ['a', 'b'],
  //      grid: false,
  //      labels: ['Installed', 'Finished'],
  //      barColors: ['#5EE1B1', '#3BC894'],
  //      gridTextColor: '#fff'
  //  });


} ])

 