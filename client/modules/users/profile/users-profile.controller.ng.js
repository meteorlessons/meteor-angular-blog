function UsersProfileCtrl($scope, $meteor, $stateParams, $state, $rootScope, HeadMeta) {

    $rootScope.loading = true;

    $scope.$meteorSubscribe('user', $stateParams.userId).then(function () {
        $rootScope.loading = false;

        $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

        HeadMeta.setTitle($scope.user.username.toUpperCase() + " User Profile");
        HeadMeta.setMetaDescription("meteor angular users profile");
        HeadMeta.setMetaKeywords("meteor, angular");
    });




}

angular.module('app-users')
    .controller('UsersProfileCtrl', UsersProfileCtrl);