function AuthChangePasswordCtrl($scope, $meteor, $rootScope, alertService, $state) {

    $scope.changePassword = function () {
        $rootScope.loading = true;
        $meteor.changePassword($scope.currentPassword, $scope.password).then(function () {
            $rootScope.loading = false;
            alertService.add("success", "Your password has been successfully changed.");
            $state.go('full.usersDashboard', {userId: $rootScope.currentUser._id});
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "There was an error changing your password: <b>" + err.reason + "</b>");
        });
    }
}

angular.module('app-auth')
    .controller('AuthChangePasswordCtrl', AuthChangePasswordCtrl);