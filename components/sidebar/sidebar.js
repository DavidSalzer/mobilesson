mobilessonApp.controller('sidebar', ['$rootScope', '$scope', '$state', '$stateParams', '$http', '$timeout', function ($rootScope, $scope, $state, $stateParams, $http, $timeout) {
    $scope.departments = []; // [{ 'name': 'transport', 'id': '123' }, { 'name': 'finance', 'id': '456'}];
    $scope.currentPage = 'courses';
    $scope.navigate = function (page, params) {
        console.log(page);
        $state.transitionTo(page, params)
        //add class active
        //remove active from others
        //transition to
        //if openable- slide down
        // if page=currentpage
    }

    $http.get(domain + '?action=getDepartments')//&offset=&limit=&status
    .success(function (data) {
        if (data.status == 'ok') {
            $timeout(function () {
                $scope.departments = data.data;
            }, 0);
            console.log(data.data);
        }
    })
    .error(function (data) {
        console.log(data);
    })

} ])