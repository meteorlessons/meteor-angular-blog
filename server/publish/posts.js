Meteor.publish('editPost', function (postId, userId) {
    check(userId, this.userId);
    return Posts.find({
        $or: [
            {
                $and: [
                    {"_id": postId}
                ]
            },
            {
                $and: [
                    {owner: userId},
                    {owner: {$exists: true}}
                ]
            }
        ]
    });
});

Meteor.publish('usersPublishedPosts', function (userId) {
    check(userId, this.userId);
    return Posts.find({
        $or: [
            {
                $and: [
                    {"published": true},
                    {"published": {$exists: true}}
                ]
            },
            {
                $and: [
                    {owner: this.userId},
                    {owner: {$exists: true}}
                ]
            }
        ]
    });
});

Meteor.publish('usersPosts', function (userId) {
    check(userId, this.userId);
    return Posts.find({
        $or: [
            {
                $and: [
                    {owner: this.userId},
                    {owner: {$exists: true}}
                ]
            }
        ]
    });
});

Meteor.publish('publishedPosts', function () {
    return Posts.find({
        $or: [
            {
                $and: [
                    {"published": true},
                    {"published": {$exists: true}}
                ]
            }
        ]
    });
});