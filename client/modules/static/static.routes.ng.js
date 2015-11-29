function routes($stateProvider) {
    $stateProvider
        .state('full.staticHome', {
            url: "/",
            templateUrl: "client/modules/static/home/home.ng.html",
            controller: 'StaticHomeCtrl'
        })
        .state('full.staticAbout', {
            url: '/about',
            templateUrl: 'client/modules/static/about/about.ng.html',
            controller: 'StaticAboutCtrl'
        })
        .state('full.staticContact', {
            url: '/contact',
            templateUrl: 'client/modules/static/contact/contact.ng.html',
            controller: 'StaticContactCtrl'
        });
}

angular.module('app-static')
    .config(routes);
