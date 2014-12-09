function contentController() {
    var self = this;
    self.statistics = {};

    this.initContentPage = function () {
        self.getAllStatistics();

    }

    this.initCoursePage = function (id) {
        self.getCourseStatistics(id);
    }

    this.getAllStatistics = function () {
        query = 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=all';
        serverController.sendAjax(query, self.getAllStatisticsCallback, self.errorServer);
    }

    this.getAllStatisticsCallback = function (data) {
        self.statistics = data;
        console.log(self.statistics);
    }

    this.getCourseStatistics = function (id) {
        query = 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=course&id=' + id;
        serverController.sendAjax(query, self.getCourseStatisticsCallback, self.errorServer);
    }

    this.getCourseStatisticsCallback = function (data) {
        self.statistics = data;
        console.log(self.statistics);
    }

    this.errorServer = function (e) {
        console.log(e);
    }

    self.initContentPage();


}

var donutChartContent = Morris.Donut({
    element: 'donutChartContent',
    data: [
		{ label: "Finished", value: 100 },
		{ label: "In Progress", value: 3091 },
		{ label: "Havnwt Started", value: 2781 }
	  ],
    colors: ['#f3ce85', '#65CEA7', '#FC8675']
});

//var barChartContent = Morris.Bar({
//    element: 'barChartContent',
//    data: [
//		{ y: '2006', a: 150, b: 90 },
//		{ y: '2007', a: 75, b: 65 },
//		{ y: '2008', a: 50, b: 40 },
//		{ y: '2009', a: 75, b: 65 },
//		{ y: '2010', a: 50, b: 40 },
//		{ y: '2011', a: 75, b: 65 },
//		{ y: '2012', a: 100, b: 90 }
//	  ],
//    xkey: 'y',
//    ykeys: ['a', 'b'],
//    grid: false,
//    labels: ['Installed', 'Finished'],
//    barColors: ['#5EE1B1', '#3BC894'],
//    gridTextColor: '#fff'
//});