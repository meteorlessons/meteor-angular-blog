function UsersPostsCtrl($scope, $meteor){

    $scope.posts = $meteor.collection(Posts, Meteor.userId(), false).subscribe('usersPosts', Meteor.userId());

}

angular.module('app-users')
.controller('UsersPostsCtrl', UsersPostsCtrl);