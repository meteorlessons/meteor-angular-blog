function UsersDashboardCtrl($scope, $stateParams, $meteor, alertService, $rootScope, HeadMeta) {

    HeadMeta.setTitle($rootScope.currentUser.username.toUpperCase() + " User Dashboard");
    HeadMeta.setMetaDescription("meteor angular blog");
    HeadMeta.setMetaKeywords("meteor, angular");

    $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

    $scope.createdOn = "Signed up: " + moment($scope.user.createdAt).format("MM-DD-YYYY");
}

angular.module('app-users')
    .controller('UsersDashboardCtrl', UsersDashboardCtrl);