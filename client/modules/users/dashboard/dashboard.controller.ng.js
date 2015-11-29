function UsersDashboardCtrl($scope, $stateParams, $meteor, alertService, $rootScope) {

    $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

    $scope.createdOn = "Signed up: " + moment($scope.user.createdAt).format("MM-DD-YYYY");
}

angular.module('app-users')
    .controller('UsersDashboardCtrl', UsersDashboardCtrl);