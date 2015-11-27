function AuthResetPasswordCtrl($scope, $meteor, $stateParams, $state, alertService) {

  $scope.resetPassword = function() {
    $meteor.resetPassword($stateParams.token, $scope.password).then(function() {
      alertService.add("success", "Your password has been reset, and you are now logged in.");
      $state.go('full.staticHome');
    }, function(err) {
      alertService.add("danger", "There were errors reseting your password: " + err.reason);
    });
  };

}

angular.module('app-auth')
  .controller('AuthResetPasswordCtrl', AuthResetPasswordCtrl);
