function PostEditCtrl($scope, $rootScope, $meteor, $state, $stateParams, alertService, HeadMeta) {

    $scope.$meteorSubscribe('editPost', $stateParams.postId, $stateParams.userId);

    $scope.post = $meteor.object(Posts, $stateParams.postId, false);

    HeadMeta.setTitle($scope.post.title);
    HeadMeta.setMetaDescription($scope.post.summary);
    HeadMeta.setMetaKeywords("meteor, angular");

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