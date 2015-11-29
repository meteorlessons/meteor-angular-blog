function getOwner($meteor) {
    return function (ownerId) {

        var user = $meteor.object(Meteor.users, {_id: ownerId}, false).subscribe('getOwner', ownerId);

        console.log(user);
    }
}

angular.module('app')
    .filter('getOwner', getOwner);