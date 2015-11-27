function footerBar() {
    return {
        restrict: 'E',
        templateUrl: 'client/components/directives/footer-bar/footer-bar.ng.html'
    };
}

angular.module('app')
    .directive('footerBar', footerBar);