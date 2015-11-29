Meteor.publish('getOwner', function (ownerId) {
    return Meteor.users.find({_id: ownerId}, {fields: {username: 1}});
});