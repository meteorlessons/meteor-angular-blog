function loadingSpinner() {
    return {
        restrict: 'E',
        templateUrl: 'client/components/directives/loading-spinner/loading-spinner.ng.html'
    };
}

angular.module('app')
    .directive('loadingSpinner', loadingSpinner);