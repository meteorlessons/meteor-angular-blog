function PostPreviewCtrl($scope, $meteor, $stateParams, HeadMeta, $rootScope) {

    $rootScope.loading = true;

    $scope.$meteorSubscribe('previewPost', $stateParams.userId, $stateParams.postId).then(function () {
        $rootScope.loading = false;

        $scope.post = $meteor.object(Posts, $stateParams.postId);

        HeadMeta.setTitle($scope.post.title);
        HeadMeta.setMetaDescription($scope.post.summary);
        HeadMeta.setMetaKeywords("meteor, angular");
    });


}

angular.module('app-post')
    .controller('PostPreviewCtrl', PostPreviewCtrl);
