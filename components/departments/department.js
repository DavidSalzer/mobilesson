mobilessonApp.controller('department', ['$rootScope', '$scope', '$state', '$stateParams', '$http', function ($rootScope, $scope, $state, $stateParams, $http) {
    $('#scroll-to-top').click();

    //$scope.departmentId = $stateParams.departmentId;
    $http.get(domain + '?action=getStatisticsByUnit&unit=department&id=' + $stateParams.departmentId)
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;

            $scope.courses = data.data.statisticsByCourse;
            for (i = 0; i < $scope.courses.length; i++) {
                $scope.courses[i].completedPercent = $scope.courses[i].employees * $scope.courses[i].ended / 100;
            }
            console.log($scope.statistics)
        }
    })
    .error(function (data) {
        console.log(data);
    })

    $scope.getEmployeesByCourse = function () {
        $http.get(domain + '?action=getStatisticsByUnit&unit=department&id=' + $stateParams.departmentId)
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;

            $scope.courses = data.data.statisticsByCourse;
            for (i = 0; i < $scope.courses.length; i++) {
                $scope.courses[i].completedPercent = $scope.courses[i].employees * $scope.courses[i].ended / 100;
            }
            console.log($scope.statistics)
        }
    })
    .error(function (data) {
        console.log(data);
    })
    }
} ])