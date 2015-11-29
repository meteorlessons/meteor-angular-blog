function PostCreateCtrl($scope, $meteor, $state, $rootScope, alertService, $stateParams, HeadMeta) {
    HeadMeta.setTitle("Create Blog Post");
    HeadMeta.setMetaDescription("Blog using meteor and angular js.");
    HeadMeta.setMetaKeywords("meteor, angular");

    $scope.post = {};

    $scope.post.published = false;

    $scope.createPost = function () {
        $rootScope.loading = true;
        $meteor.call('createPost', Meteor.userId(), $scope.post).then(function (data) {
            $rootScope.loading = false;
            alertService.add("success", "Your post has been successfully created.");
            $state.go('full.usersPosts', {userId: $stateParams.userId});
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("danger", "There were errors submitting your post: " + err.reason);
        });
    }

}

angular.module('app-post')
    .controller('PostCreateCtrl', PostCreateCtrl);