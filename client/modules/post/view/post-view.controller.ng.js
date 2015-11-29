function PostViewCtrl($scope, $meteor, $stateParams) {
    $scope.post = $meteor.object(Posts, $stateParams.postId, false)
        .subscribe('postView', $stateParams.postId);
}

angular.module('app-post')
    .controller('PostViewCtrl', PostViewCtrl);