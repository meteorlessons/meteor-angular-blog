function UsersDashboardCtrl($scope, $stateParams, $meteor, alertService, $rootScope, HeadMeta) {

    $rootScope.loading = true;

    $scope.$meteorSubscribe('user', $stateParams.userId).then(function () {
        $rootScope.loading = false;

        $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

        HeadMeta.setTitle($scope.user.username.toUpperCase() + " Dashboard");
        HeadMeta.setMetaDescription("meteor angular users dashboard");
        HeadMeta.setMetaKeywords("meteor, angular");
    });

}

angular.module('app-users')
    .controller('UsersDashboardCtrl', UsersDashboardCtrl);