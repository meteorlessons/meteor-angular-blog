Meteor.methods({
    addRoleToBasicUser: function(userId){
        if(userId === Meteor.userId()){
            return Roles.addUsersToRoles(userId, ['member'], 'standard-group');
        }
        throw new Meteor.Error('FORBIDDEN');
    },
    /**
     * Validation check for unique username
     *
     * @param username
     * @returns {boolean}
     */
    uniqueUsername: function (username) {
        var user = Meteor.users.findOne({username: username}, {fields: {_id: 1}});
        if (!user) {
            throw new Meteor.Error('no-exist');
        }
        return true;
    },
    /**
     * Validation check for unique email
     *
     * @param email
     * @returns {boolean}
     */
    uniqueEmail: function (email) {
        var user = Meteor.users.findOne({"emails.0.address": email}, {fields: {_id: 1}});
        if (!user) {
            throw new Meteor.Error('no-exist');
        }
        return true;
    },
    /**
     * Update current users profile
     *
     * @param userId
     * @param user
     * @returns {*|any}
     */
    updateUserProfile: function (userId, user) {
        if (userId === Meteor.userId()) {
            return Meteor.users.update({_id: userId}, {
                $set: {
                    "updatedAt": user.updatedAt,
                    "profile": {
                        "first_name": user.profile.first_name,
                        "last_name": user.profile.last_name,
                        "bio": user.profile.bio
                    }
                }
            });
        } else {
            throw new Meteor.Error("Not allowed to edit this profile.");
        }

    }
});