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