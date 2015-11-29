function metaRun($rootScope, HeadMeta) {
    $rootScope.HeadMeta = HeadMeta;
}

angular.module('app')
    .run(metaRun);