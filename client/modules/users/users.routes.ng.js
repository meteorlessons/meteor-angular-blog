function routes($stateProvider) {
    $stateProvider
        .state('full.usersDashboard', {
            url: '/users/:userId/dashboard',
            templateUrl: 'client/modules/users/dashboard/dashboard.ng.html',
            controller: 'UsersDashboardCtrl',
            resolve: {
                "currentUser": function ($meteor, $q) {
                    return $meteor.requireValidUser(function (user) {
                        if (Roles.userIsInRole(user, ['member'])) {
                            return true;
                        }
                        return $q.reject('FORBIDDEN');
                    });
                }
            }
        })
        .state('full.usersEditProfile', {
            url: '/users/:userId/profile/edit',
            templateUrl: 'client/modules/users/edit-profile/edit-profile.ng.html',
            controller: 'UsersEditProfileCtrl'
        })
        .state('full.usersProfile', {
            url: '/users/:userId/profile',
            templateUrl: 'client/modules/users/profile/users-profile.ng.html',
            controller: 'UsersProfileCtrl'
        })
        .state('full.usersPosts', {
            url: '/users/:userId/posts',
            templateUrl: 'client/modules/users/posts/users-posts.ng.html',
            controller: 'UsersPostsCtrl'
        });
}

angular.module('app-users')
    .config(routes);