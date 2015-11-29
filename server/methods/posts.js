Meteor.methods({
    createPost: function (userId, post) {
        check(userId, this.userId);
        check(post, {
            title: String,
            summary: String,
            body: String,
            published: Boolean
        });

        return Posts.insert({
            title: post.title,
            summary: post.summary,
            body: post.body,
            published: post.published,
            createdAt: new Date(),
            updatedAt: new Date(),
            owner: this.userId,
            ownerName: Meteor.user().username
        });
    },
    updatePost: function (userId, postId, post) {
        var thisPost = Posts.findOne({_id: postId}, {fields: {owner: 1}});
        check(userId, thisPost.owner);
        check(userId, this.userId);
        check(post, {
            title: String,
            summary: String,
            body: String,
            published: Boolean
        });

        return Posts.update({_id: postId}, {
            $set: {
                "title": post.title,
                "summary": post.summary,
                "body": post.body,
                "published": post.published,
                "updatedAt": new Date()
            }
        });
    }
});