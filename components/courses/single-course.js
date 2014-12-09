mobilessonApp.controller('course', ['$rootScope', '$scope', '$state', '$stateParams', '$http', function ($rootScope, $scope, $state, $stateParams, $http) {


    $http.get(domain + 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=course&id=' + $stateParams.courseId)
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistic = data.data;
        }
    })
    .error(function (data) {
        console.log(data);
    })

} ])
