function routes($stateProvider) {
    $stateProvider
        .state('authLogin', {
            url: '/auth/login',
            templateUrl: 'client/modules/auth/login/login.ng.html',
            controller: 'AuthLoginCtrl',
            resolve: {
                "currentUser": function ($rootScope, $q) {
                    if ($rootScope.currentUser) {
                        return $q.reject('IS_AUTHORIZED');
                    }
                }
            }
        })
        .state('authRegister', {
            url: '/auth/register',
            templateUrl: 'client/modules/auth/register/register.ng.html',
            controller: 'AuthRegisterCtrl',
            resolve: {
                "currentUser": function ($rootScope, $q) {
                    if ($rootScope.currentUser) {
                        return $q.reject('IS_AUTHORIZED');
                    }
                }
            }
        })
        .state('authForgotPassword', {
            url: '/auth/forgot-password',
            templateUrl: 'client/modules/auth/forgot-password/forgot-password.ng.html',
            controller: 'AuthForgotPasswordCtrl',
            resolve: {
                "currentUser": function ($rootScope, $q) {
                    if ($rootScope.currentUser) {
                        return $q.reject('IS_AUTHORIZED');
                    }
                }
            }
        })
        .state('authResetPassword', {
            url: '/auth/reset-password/:token',
            templateUrl: 'client/modules/auth/reset-password/reset-password.ng.html',
            controller: 'AuthResetPasswordCtrl',
            resolve: {
                "currentUser": function ($rootScope, $q) {
                    if ($rootScope.currentUser) {
                        return $q.reject('IS_AUTHORIZED');
                    }
                }
            }
        });
}

angular.module('app-auth')
    .config(routes);
