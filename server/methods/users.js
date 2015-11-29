Meteor.methods({
    /**
     * Add member role to user on register
     *
     * @param userId
     * @returns {*}
     */
    addRoleToBasicUser: function(userId){
        check(userId, this.userId);
        if(userId === this.userId){
            return Roles.addUsersToRoles(userId, ['member']);
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
        check(userId, this.userId);
        check(user, {
            profile: {
                first_name: String,
                last_name: String,
                bio: String
            }
        });
        if (userId === this.userId) {
            return Meteor.users.update({_id: userId}, {
                $set: {
                    "updatedAt": new Date(),
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