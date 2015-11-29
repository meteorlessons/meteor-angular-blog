function HeadMeta() {
    var title = 'Meteor Angular Blog';
    var metaDescription = '';
    var metaKeywords = '';
    return {
        title: function () {
            return title;
        },
        setTitle: function (newTitle) {
            title = newTitle;
        },
        metaDescription: function () {
            return metaDescription;
        },
        metaKeywords: function () {
            return metaKeywords;
        },
        reset: function () {
            metaDescription = '';
            metaKeywords = '';
        },
        setMetaDescription: function (newMetaDescription) {
            metaDescription = newMetaDescription;
        },
        setMetaKeywords: function (newKeywords) {
            metaKeywords = newKeywords;
        }
    };
}

angular.module('app')
    .service('HeadMeta', HeadMeta);