function AuthLoginCtrl($scope, $meteor, $state, alertService, $rootScope) {


    $scope.loginUser = function () {
        $rootScope.loading = true;

        $meteor.loginWithPassword($scope.email, $scope.password).then(function () {
            $rootScope.loading = false;
            alertService.add("success", "You have been successfully logged in.");
            $state.go('full.staticHome');
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "There were errors logging in: " + err.reason);
        });

    };

}

angular.module('app-auth')
    .controller('AuthLoginCtrl', AuthLoginCtrl);
