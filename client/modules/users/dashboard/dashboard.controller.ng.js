function UsersDashboardCtrl($scope, $stateParams, $meteor, alertService, $rootScope) {

    $scope.user = $meteor.object(Meteor.users, $stateParams.userId, false);

    $scope.createdOn = "Signed up: "+moment($scope.user.createdAt).format("MM-DD-YYYY");


    $scope.editMode = false;

    $scope.editUser = function () {
        $scope.editMode = true;
    };

    $scope.viewUser = function () {
        $scope.editMode = false;
    };

    $scope.updateUserProfile = function () {
        $rootScope.loading = true;
        var userAttributes = {
            updatedAt: new Date(),
            profile: {
                first_name: $scope.user.profile.first_name,
                last_name: $scope.user.profile.last_name,
                bio: $scope.user.profile.bio
            }
        };

        $meteor.call('updateUserProfile', Meteor.userId(), userAttributes).then(function (res) {
            if (res) {
                $rootScope.loading = false;
                $scope.editMode = false;
                alertService.add("success", "Your profile has been updated.");
            }
        }, function (err) {
            $rootScope.loading = false;
            $scope.editMode = true;
            alertService.add("error", "There was an error updating your profile: " + err.reason);
        });
    }


}

angular.module('app-users')
    .controller('UsersDashboardCtrl', UsersDashboardCtrl);