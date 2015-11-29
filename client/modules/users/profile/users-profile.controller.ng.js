function UsersProfileCtrl($scope, $meteor, $stateParams, $state, $rootScope, HeadMeta) {

    HeadMeta.setTitle($rootScope.currentUser.username.toUpperCase() + " User Profile");
    HeadMeta.setMetaDescription("meteor angular users profile");
    HeadMeta.setMetaKeywords("meteor, angular");
}

angular.module('app-users')
    .controller('UsersProfileCtrl', UsersProfileCtrl);