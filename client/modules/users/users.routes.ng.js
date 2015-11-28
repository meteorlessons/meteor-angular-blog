function routes($stateProvider) {
    $stateProvider
        .state('full.usersDashboard', {
            url: '/users/dashboard/:userId',
            templateUrl: 'client/modules/users/dashboard/dashboard.ng.html',
            controller: 'UsersDashboardCtrl',
            resolve: {
                "currentUser": function($meteor, $q){
                    return $meteor.requireValidUser(function(user) {
                        if (Roles.userIsInRole(user, ['member'])) {
                            return true;
                        }
                        return $q.reject('FORBIDDEN');
                    });
                }
            }
        });
}

angular.module('app-users')
    .config(routes);