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
                    {"owner": userId}
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
                    {"published": true}
                ]
            },
            {
                $and: [
                    {"owner": userId}
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
                    {"owner": userId}
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
                    {"published": true}
                ]
            }
        ]
    });
});

Meteor.publish('postView', function (postId) {
    return Posts.find({
        $or: [
            {
                $and: [
                    {"_id": postId}
                ]
            }
        ]
    });
});

Meteor.publish('previewPost', function (userId, postId) {
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
                    {"owner": userId}
                ]
            }
        ]
    });
});