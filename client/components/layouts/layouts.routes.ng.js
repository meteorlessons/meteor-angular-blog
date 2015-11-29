function routes($stateProvider) {
    $stateProvider
        .state('full', {
            templateUrl: 'client/components/layouts/full-layout/full-layout.ng.html',
            controller: 'FullLayoutCtrl'
        })
        .state('post', {
            templateUrl: 'client/components/layouts/post-layout/post-layout.ng.html',
            controller: 'FullLayoutCtrl'
        });
}

angular.module('app')
    .config(routes);
