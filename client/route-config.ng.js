function routeConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);


    $urlRouterProvider.otherwise("/");
}

angular.module('app')
    .config(routeConfig);
