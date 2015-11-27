function navBar() {
    return {
        restrict: 'E',
        templateUrl: 'client/components/directives/nav-bar/nav-bar.ng.html',
        controller: 'NavBarCtrl'
    };
}
angular.module('app')
    .directive('navBar', navBar);
