function AuthRegisterCtrl($scope, $meteor, $state, alertService) {

    $scope.createUser = function () {
        $meteor.createUser({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
        }).then(function () {
            alertService.clear();
            alertService.add("success", "Your account has been created, and you are now logged in.");
            $state.go('full.staticHome');
        }, function (err) {
            alertService.clear();
            alertService.add("danger", "There were errors creating your account: " + err.reason);
        });
    };

}

angular.module('app-auth')
    .controller('AuthRegisterCtrl', AuthRegisterCtrl);
