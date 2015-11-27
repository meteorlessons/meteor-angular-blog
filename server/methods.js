Meteor.methods({
    uniqueUsername: function (username) {
        var user = Meteor.users.findOne({username: username}, {fields: {_id: 1}});
        console.log(user);
        if(!user){
            throw new Meteor.Error('no-exist');
        }
        return true;
    },
    uniqueEmail: function (email) {
        var user = Meteor.users.findOne({"emails.0.address": email}, {fields: {_id: 1}});
        console.log(user);
        if(!user){
            throw new Meteor.Error('no-exist');
        }
        return true;
    }
});