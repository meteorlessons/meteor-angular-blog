function uniqueUsername($meteor, $q) {
    return {
        require: 'ngModel',
        scope: {
            uniqueUsername: '='
        },
        link: function ($scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.uniqueUsername = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                $meteor.collection(Meteor.users, false).subscribe('users');
                return $meteor.call('uniqueUsername', value).then(function (data) {
                    return $q.reject('exists');
                }, function (err) {
                    return false;
                });
            };
        }
    }
}

angular.module('app')
    .directive('uniqueUsername', uniqueUsername);