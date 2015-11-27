function NavBarCtrl($scope, $meteor, $state, alertService) {
    $scope.logoutUser = function () {
        $meteor.logout().then(function () {
            alertService.clear();
            alertService.add("info", "You have been successfully logged out.");
            $state.go('full.staticHome');
        }, function (err) {
            alertService.clear();
            alertService.add("danger", "Errors logging out: " + err.reason);
        });
    };
}

angular.module('app')
    .controller('NavBarCtrl', NavBarCtrl);
