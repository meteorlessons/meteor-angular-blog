function AuthForgotPasswordCtrl($scope, $meteor, alertService, $rootScope, HeadMeta) {
    HeadMeta.setTitle("Forgot Password");
    HeadMeta.setMetaDescription("Blog using meteor and angular js.");
    HeadMeta.setMetaKeywords("meteor, angular");

    $scope.forgotPasswordSend = function () {
        $rootScope.loading = true;
        $meteor.forgotPassword({
            email: $scope.email
        }).then(function () {
            $rootScope.loading = false;
            alertService.add("info", "An email has been sent to '" + $scope.email + "'. Please click link to reset password.");
        }, function (err) {
            $rootScope.loading = false;
            alertService("danger", "There were errors sending reset email: " + err.reason);
        });
    };

}

angular.module('app-auth')
    .controller('AuthForgotPasswordCtrl', AuthForgotPasswordCtrl);
