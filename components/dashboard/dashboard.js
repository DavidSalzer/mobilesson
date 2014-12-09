mobilessonApp.controller('dashboard', ['$rootScope', '$scope', '$state', '$http', function ($rootScope, $scope, $state, $http) {


    $http.get(domain + 'statistics/MobiStatistics.php?action=getStatisticsByUnit&unit=all')
    .success(function (data) {
        if (data.status == 'ok') {
            $scope.statistics = data.data;
        }
    })
    .error(function (data) {
        console.log(data);
    })

} ])
