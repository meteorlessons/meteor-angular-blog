Meteor.methods({
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
    }
});