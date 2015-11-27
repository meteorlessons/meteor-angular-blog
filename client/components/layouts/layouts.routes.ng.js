function routes($stateProvider) {
    $stateProvider
        .state('full', {
            templateUrl: 'client/components/layouts/full-layout/full-layout.ng.html',
            controller: 'FullLayoutCtrl'
        });
}

angular.module('app')
    .config(routes);
