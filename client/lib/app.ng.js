angular.module('app', [
    'angular-meteor',
    'ui.router',
    'ui.bootstrap',
    'ngMessages',
    'textAngular',
    'app-static',
    'app-auth',
    'app-users',
    'app-post'
]);

function onReady() {
    angular.bootstrap(document, ['app'], {
        strictDi: true
    });
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);
