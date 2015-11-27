function NavBarCtrl($scope, $meteor, $state, alertService, $rootScope) {
    $scope.logoutUser = function () {
        $rootScope.loading = true;
        $meteor.logout().then(function () {
            $rootScope.loading = false;
            alertService.add("info", "You have been successfully logged out.");
            $state.go('full.staticHome');
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "Errors logging out: " + err.reason);
        });
    };
}

angular.module('app')
    .controller('NavBarCtrl', NavBarCtrl);
