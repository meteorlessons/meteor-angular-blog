function PostPreviewCtrl($scope, $meteor, $stateParams) {

    $scope.post = $meteor.object(Posts, $stateParams.postId).subscribe('previewPost', $stateParams.userId, $stateParams.postId)

}

angular.module('app-post')
    .controller('PostPreviewCtrl', PostPreviewCtrl);
