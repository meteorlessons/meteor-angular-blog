function AuthForgotPasswordCtrl($scope, $meteor, alertService) {

  $scope.forgotPasswordSend = function() {
    $meteor.forgotPassword({
      email: $scope.email
    }).then(function() {
      alertService.add("info", "An email has been sent to '" + $scope.email + "'. Please click link to reset password.");
    }, function(err) {
      alertService("danger", "There were errors sending reset email: " + err.reason);
    });
  };

}

angular.module('app-auth')
  .controller('AuthForgotPasswordCtrl', AuthForgotPasswordCtrl);
