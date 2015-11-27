function uniqueEmail($meteor, $q) {
    return {
        require: 'ngModel',
        scope: {
            uniqueEmail: '='
        },
        link: function ($scope, element, attrs, ngModel) {
            ngModel.$asyncValidators.uniqueEmail = function (modelValue, viewValue) {
                var value = modelValue || viewValue;
                $meteor.collection(Meteor.users, false).subscribe('users');
                return $meteor.call('uniqueEmail', value).then(function (data) {
                    return $q.reject('exists');
                }, function (err) {
                    return false;
                });
            };
        }
    }
}

angular.module('app')
    .directive('uniqueEmail', uniqueEmail);