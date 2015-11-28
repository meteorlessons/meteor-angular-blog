Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster%40sandboxa8757c7aa6204f9980765403c5f9cf91.mailgun.org:secret102@smtp.mailgun.org:587';

    Accounts.urls.resetPassword = function (token) {
        return Meteor.absoluteUrl('auth/reset-password/' + token);
    };

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            username: 'admin',
            email: 'admin@example.com',
            password: 'secret',
            createdAt: new Date(),
            profile: {
                first_name: 'Admin',
                last_name: 'User',
                bio: '<p>This is the admin user bio</p>'
            }
        });
    }


});
