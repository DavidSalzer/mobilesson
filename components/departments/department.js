mobilessonApp.controller('department', ['$rootScope', '$scope', '$state', '$stateParams', '$http', function ($rootScope, $scope, $state, $stateParams, $http) {
    $('#scroll-to-top').click();

    $http.get(domain + 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=department&id=' + $stateParams.departmentId)
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;
        }
    })
    .error(function (data) {
        console.log(data);
    })

} ])