function AuthRegisterCtrl($scope, $meteor, $state, alertService, $rootScope) {

    $scope.createUser = function () {
        $rootScope.loading = true;
        $meteor.createUser({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
        }).then(function () {
            $rootScope.loading = false;
            alertService.clear();
            alertService.add("success", "Your account has been created, and you are now logged in.");
            $state.go('full.staticHome');
        }, function (err) {
            $rootScope.loading = false;
            alertService.clear();
            alertService.add("danger", "There were errors creating your account: " + err.reason);
        });
    };

}

angular.module('app-auth')
    .controller('AuthRegisterCtrl', AuthRegisterCtrl);
