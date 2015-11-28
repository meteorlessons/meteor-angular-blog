function routes($stateProvider) {
    $stateProvider
        .state('full.blogPostCreate', {
            url: '/:userId/blog/post/create',
            templateUrl: 'client/modules/blog/create/create.ng.html',
            controller: 'BlogPostCreateCtrl'
        })
        .state('full.blogPostEdit', {
            url: '/:userId/blog/post/edit/:postId',
            templateUrl: 'client/modules/blog/edit/edit.ng.html',
            controller: 'BlogPostCreateCtrl'
        })
        .state('full.blogPostView', {
            url: '/blog/post/:postId',
            templateUrl: 'client/modules/blog/view/view.ng.html',
            controller: 'BlogPostViewCtrl'
        });
}

angular.module('app-blog')
    .config(routes);