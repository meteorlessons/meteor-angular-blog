Posts = new Mongo.Collection("posts");

Posts.allow({
    insert: function () {
        return false;
    },
    update: function () {
        return false;
    },
    remove: function () {
        return false;
    }
});

Posts.deny({
    insert: function () {
        return true;
    },
    update: function () {
        return true;
    },
    remove: function () {
        return true;
    }
});