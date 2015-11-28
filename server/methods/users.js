Meteor.methods({
    /**
     * Add member role to user on register
     *
     * @param userId
     * @returns {*}
     */
    addRoleToBasicUser: function(userId){
        if(userId === Meteor.userId()){
            return Roles.addUsersToRoles(userId, ['member'], 'standard-group');
        }
        throw new Meteor.Error('FORBIDDEN');
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