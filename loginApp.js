var domain = 'http://ec2-184-73-131-143.compute-1.amazonaws.com/';

var loginApp = angular.module('loginApp', [])

.controller('loginCtrl', ['$rootScope', '$scope', '$http', '$timeout', function ($rootScope, $scope, $http, $timeout) {

    $scope.sendLogin = function () {

        //validation
        $scope.showUserNameError = $scope.userName == undefined || $scope.userName == '';
        $scope.showPasswordError = $scope.password == undefined || $scope.password == '';

        if ($scope.showUserNameError || $scope.showPasswordError) {
            return;
        }
        
        queryString = 'MobiStatistics.php?action=login';
        request = {
            userName: $scope.userName,
            password: $scope.password
        }
        $scope.json = JSON.stringify(request);

        $http.post(domain + queryString, $scope.json)
        .success(function (data) {
            console.log(data);
            //if server return success code - need match to sever api.
            if (data.success) {
                window.location.replace('/index.html');
            }
        })
        .error(function (data) {

        })
    }
} ])

