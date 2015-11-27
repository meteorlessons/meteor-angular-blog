Meteor.startup(function() {
  process.env.MAIL_URL = 'smtp://postmaster%40sandboxa8757c7aa6204f9980765403c5f9cf91.mailgun.org:secret102@smtp.mailgun.org:587';

  Accounts.urls.resetPassword = function(token) {
    return Meteor.absoluteUrl('auth/reset-password/' + token);
  };
});
