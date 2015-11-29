function PostEditCtrl($scope, $rootScope, $meteor, $state, $stateParams, alertService) {

    $scope.post = $meteor.object(Posts, $stateParams.postId, false)
        .subscribe('editPost', $stateParams.postId, $stateParams.userId);

    $scope.editPost = function () {
        $rootScope.loading = true;
        var post = {
            title: $scope.post.title,
            summary: $scope.post.summary,
            body: $scope.post.body,
            published: $scope.post.published
        };

        $meteor.call('updatePost', $stateParams.userId, $stateParams.postId, post).then(function (data) {
            $rootScope.loading = false;
            alertService.add("success", "This post has been updated.");
            $state.go('full.usersPosts', {userId: $stateParams.userId});
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "There were errors updating this post: " + err.reason);
        });
    };
}

angular.module('app-post')
    .controller('PostEditCtrl', PostEditCtrl);