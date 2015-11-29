function UsersPostsCtrl($scope, $meteor, HeadMeta, $rootScope) {

    HeadMeta.setTitle($rootScope.currentUser.username.toUpperCase() + " Blog Posts");
    HeadMeta.setMetaDescription("Meteor angular users blog posts");
    HeadMeta.setMetaKeywords("meteor, angular");

    $rootScope.loading = true;

    $scope.$meteorSubscribe('usersPosts', Meteor.userId()).then(function(){
        $rootScope.loading = false;
    });

    $scope.posts = $meteor.collection(Posts, {owner: Meteor.userId()}, false);

}

angular.module('app-users')
    .controller('UsersPostsCtrl', UsersPostsCtrl);