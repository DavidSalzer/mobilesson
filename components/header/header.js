mobilessonApp.controller('header', ['$rootScope', '$scope', '$state', '$stateParams', '$http', '$timeout', 'httpRequest', function ($rootScope, $scope, $state, $stateParams, $http, $timeout, httpRequest) {

    queryString = '?action=profile';

    httpRequest.sendRequest('get', queryString)
    .then(function (data) {
        if (data.status == 'ok') {
            $timeout(function () {
                $scope.user = data.data;
            }, 0);
            $rootScope.$broadcast('setUser', { user: data.data });
        }
    })

    $scope.logout = function () {
        queryString = '?action=logout';
        httpRequest.sendRequest('get', queryString)
        .then(function (data) {
            if (data.status == 'ok') {
               window.location.replace(cmsOrigin + 'login.html');
            }
        })
    }

} ])