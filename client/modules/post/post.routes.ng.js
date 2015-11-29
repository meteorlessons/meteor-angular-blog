function routes($stateProvider) {
    $stateProvider
        .state('full.postCreate', {
            url: '/:userId/post/create',
            templateUrl: 'client/modules/post/create/post-create.ng.html',
            controller: 'PostCreateCtrl'
        })
        .state('full.postEdit', {
            url: '/:userId/post/edit/:postId',
            templateUrl: 'client/modules/post/edit/post-edit.ng.html',
            controller: 'PostEditCtrl'
        })
        .state('full.postView', {
            url: '/blog/post/:postId',
            templateUrl: 'client/modules/post/view/post-view.ng.html',
            controller: 'PostViewCtrl'
        });
}

angular.module('app-post')
    .config(routes);