function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('full.staticHome', {
            url: "/",
            templateUrl: "client/modules/static/home/home.ng.html"
        })
        .state('full.staticAbout', {
            url: '/about',
            templateUrl: 'client/modules/static/about/about.ng.html'
        })
        .state('full.staticContact', {
            url: '/contact',
            templateUrl: 'client/modules/static/contact/contact.ng.html'
        });
}

angular.module('app-static')
    .config(routes);
