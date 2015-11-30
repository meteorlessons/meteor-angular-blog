function PostViewCtrl($scope, $meteor, $stateParams, HeadMeta, $rootScope) {

    $rootScope.loading = true;

    $scope.$meteorSubscribe('postView', $stateParams.postId).then(function(){
        $rootScope.loading = false;

        $scope.post = $meteor.object(Posts, $stateParams.postId, false);

        HeadMeta.setTitle($scope.post.title);
        HeadMeta.setMetaDescription($scope.post.summary);
        HeadMeta.setMetaKeywords("meteor, angular");
    });


}

angular.module('app-post')
    .controller('PostViewCtrl', PostViewCtrl);