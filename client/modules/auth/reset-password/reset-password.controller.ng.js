function AuthResetPasswordCtrl($scope, $meteor, $stateParams, $state, alertService, $rootScope) {

    $scope.resetPassword = function () {
        $rootScope.loading = true;
        $meteor.resetPassword($stateParams.token, $scope.password).then(function () {
            $rootScope.loading = false;
            alertService.add("success", "Your password has been reset, and you are now logged in.");
            $state.go('full.staticHome');
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "There were errors reseting your password: " + err.reason);
        });
    };

}

angular.module('app-auth')
    .controller('AuthResetPasswordCtrl', AuthResetPasswordCtrl);
