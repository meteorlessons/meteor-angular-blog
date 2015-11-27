function AuthLoginCtrl($scope, $meteor, $state, alertService) {

    $scope.loginUser = function () {
        $meteor.loginWithPassword($scope.email, $scope.password).then(function () {
            alertService.add("success", "You have been successfully logged in.");
            $state.go('full.staticHome');
        }, function (err) {
            alertService.add("danger", "There were errors logging in: " + err.reason);
        });
    };

}

angular.module('app-auth')
    .controller('AuthLoginCtrl', AuthLoginCtrl);
