function UsersEditProfileCtrl($scope, $rootScope, $meteor, $stateParams, alertService, $state) {

    $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

    $scope.updateUserProfile = function () {

        $rootScope.loading = true;

        var userAttributes = {
            profile: {
                first_name: $scope.user.profile.first_name,
                last_name: $scope.user.profile.last_name,
                bio: $scope.user.profile.bio
            }
        };

        $meteor.call('updateUserProfile', Meteor.userId(), userAttributes).then(function (res) {
            if (res) {
                $rootScope.loading = false;
                alertService.add("success", "Your profile has been updated.");
                $state.go('full.usersDashboard', {userId: $stateParams.userId});
            }
        }, function (err) {
            $rootScope.loading = false;
            alertService.add("error", "There was an error updating your profile: " + err.reason);
        });
    }
}

angular.module('app-users')
    .controller('UsersEditProfileCtrl', UsersEditProfileCtrl);