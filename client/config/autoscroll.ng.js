function autoscroll($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
}

angular.module('app')
    .run(autoscroll);