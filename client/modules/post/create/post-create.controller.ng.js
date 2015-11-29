function PostCreateCtrl($scope, $meteor, $state, alertService, $stateParams) {
    $scope.post = {};

    $scope.post.published = false;

    $scope.createPost = function () {
        $meteor.call('createPost', Meteor.userId(), $scope.post).then(function (data) {
            alertService.add("success", "Your post has been successfully created.");
            $state.go('full.usersPosts', {userId: $stateParams.userId});
        }, function (err) {
            alertService.add("danger", "There were errors submitting your post.");
        });
    }

}

angular.module('app-post')
    .controller('PostCreateCtrl', PostCreateCtrl);