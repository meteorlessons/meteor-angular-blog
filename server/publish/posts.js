Meteor.publish('editPost', function (postId, userId) {
    check(postId, String);
    check(userId, this.userId);
    return Posts.find({_id: postId, owner: userId});
});

Meteor.publish('usersPublishedPosts', function (userId) {
    check(userId, this.userId);
    return Posts.find({published: true, owner: userId});
});

Meteor.publish('usersPosts', function (userId) {
    check(userId, this.userId);
    return Posts.find({owner: userId});
});

Meteor.publish('publishedPosts', function () {
    return Posts.find({published: true});
});

Meteor.publish('postView', function (postId) {
    check(postId, String);
    return Posts.find({_id: postId, published: true});
});

Meteor.publish('previewPost', function (userId, postId) {
    check(postId, String);
    check(userId, this.userId);
    return Posts.find({_id: postId, owner: userId});
});