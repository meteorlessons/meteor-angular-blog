function StaticContactCtrl(HeadMeta) {
    HeadMeta.setTitle("Contact Us | Meteor Angular Blog");
    HeadMeta.setMetaDescription("Blog using meteor and angular js.");
    HeadMeta.setMetaKeywords("meteor, angular");
}

angular.module('app-static')
    .controller('StaticContactCtrl', StaticContactCtrl);
