function StaticHomeCtrl($scope, $meteor, HeadMeta, $rootScope) {

    $rootScope.loading = true;

    $scope.$meteorSubscribe('publishedPosts').then(function () {
        $rootScope.loading = false;

        $scope.posts = $meteor.collection(Posts);

        HeadMeta.setTitle("Meteor Angular Blog");
        HeadMeta.setMetaDescription("Blog using meteor and angular js.");
        HeadMeta.setMetaKeywords("meteor, angular");
    });

}

angular.module('app-static')
    .controller('StaticHomeCtrl', StaticHomeCtrl);
