function permissions($rootScope, $state, alertService) {
    $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        // We can catch the error thrown when the $meteor.requireUser() promise is rejected
        // or the custom error, and redirect the user back to the login page
        var userId = Meteor.userId();
        switch (error) {
            case "AUTH_REQUIRED":
                alertService.add("warning", "You must be logged in to access that page.");
                $state.go('authLogin');
                break;
            case "FORBIDDEN":
                alertService.add("warning", "You do not have permission to access that page.");
                $state.go('full.usersDashboard', {userId: userId});
                break;
            case "UNAUTHORIZED":
                alertService.add("warning", "You do not have permission to access that page.");
                $state.go('full.usersDashboard', {userId: userId});

                break;
            case "IS_AUTHORIZED":
                alertService.add("warning", "You are already logged in.");
                $state.go('full.usersDashboard', {userId: userId});

                break;
            default:
                alertService.add("danger", "There has been an internal error.");
                $state.go('full.usersDashboard', {userId: userId});

        }
    });
}

angular.module('app')
    .run(permissions);