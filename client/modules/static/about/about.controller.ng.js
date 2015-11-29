function StaticAboutCtrl(HeadMeta) {
    HeadMeta.setTitle("About Us | Meteor Angular Blog");
    HeadMeta.setMetaDescription("Blog using meteor and angular js.");
    HeadMeta.setMetaKeywords("meteor, angular");
}

angular.module('app-static')
    .controller('StaticAboutCtrl', StaticAboutCtrl);
