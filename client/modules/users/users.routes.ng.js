function routes($stateProvider) {
    $stateProvider
        .state('full.usersDashboard', {
            url: '/users/:userId/dashboard',
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
        })
        .state('full.usersPosts', {
            url: '/users/:userId/posts',
            templateUrl: 'client/modules/users/posts/users-posts.ng.html',
            controller: 'UsersPostsCtrl as usersPosts'
        });
}

angular.module('app-users')
    .config(routes);