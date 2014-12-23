mobilessonApp.controller('sidebar', ['$rootScope', '$scope', '$state', '$stateParams', '$http', function ($rootScope, $scope, $state, $stateParams, $http) {
    $scope.currentPage = 'courses';
    $scope.navigate = function (page,params) {
        console.log(page);
        $state.transitionTo(page,params)
        //add class active
        //remove active from others
        //transition to
        //if openable- slide down
        // if page=currentpage
    }
} ])