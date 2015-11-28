function routes($stateProvider) {
    $stateProvider
        .state('authLogin', {
            url: '/auth/login',
            templateUrl: 'client/modules/auth/login/login.ng.html',
            controller: 'AuthLoginCtrl'
        })
        .state('authRegister', {
            url: '/auth/register',
            templateUrl: 'client/modules/auth/register/register.ng.html',
            controller: 'AuthRegisterCtrl'
        })
        .state('authForgotPassword', {
            url: '/auth/forgot-password',
            templateUrl: 'client/modules/auth/forgot-password/forgot-password.ng.html',
            controller: 'AuthForgotPasswordCtrl'
        })
        .state('authResetPassword', {
            url: '/auth/reset-password/:token',
            templateUrl: 'client/modules/auth/reset-password/reset-password.ng.html',
            controller: 'AuthResetPasswordCtrl'
        });
}

angular.module('app-auth')
    .config(routes);
