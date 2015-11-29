function StaticHomeCtrl($scope, $meteor) {
    $scope.posts = $meteor.collection(Posts).subscribe('publishedPosts');
}

angular.module('app-static')
    .controller('StaticHomeCtrl', StaticHomeCtrl);
