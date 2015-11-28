function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('full.usersDashboard', {
            url: '/users/dashboard/:userId',
            templateUrl: 'client/modules/users/dashboard/dashboard.ng.html',
            controller: 'UsersDashboardCtrl'
        });
}

angular.module('app-users')
    .config(routes);