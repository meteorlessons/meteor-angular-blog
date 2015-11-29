function PostEditCtrl($scope, $meteor, $stateParams) {

    $scope.post = $meteor.object(Posts, $stateParams.postId, false)
        .subscribe('editPost', $stateParams.postId, $stateParams.userId);

    $scope.editPost = function () {
        var post = {
            title: $scope.post.title,
            summary: $scope.post.summary,
            body: $scope.post.body,
            published: $scope.post.published
        };

        $meteor.call('updatePost', $stateParams.userId, $stateParams.postId, post).then(function (data) {
            console.log(data);
        }, function (err) {
            console.log(err);
        });
    };
}

angular.module('app-post')
    .controller('PostEditCtrl', PostEditCtrl);