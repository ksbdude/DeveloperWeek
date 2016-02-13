// Meteor.startup(function() {
//
//   Meteor.Mailgun.config({
//     username: 'postmaster@domain.com',
//     password: 'password-goes-here'
//   });
//
//   Meteor.methods({
//     'sendContactEmail': function(name, email, message) {
//       this.unblock();
//
//       Meteor.Mailgun.send({
//         to: 'recipient@example.com',
//         from: name + ' <' + email + '>',
//         subject: 'New Contact Form Message',
//         text: message,
//         html: Handlebars.templates['contactEmail']({siteURL: Meteor.absoluteUrl(), fromName: name, fromEmail: email, message: message})
//       });
//     }
//   });
// });


//handles email
Meteor.startup(function() {
  smtp = {
    username:'postmaster@idbolt.io',
    password:'email22',
    server: 'smtp.sparkpostmail.com',
    post: 587
  }
  process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});


//sparkpost
var SparkPost = Meteor.npmRequire('sparkpost');
var sparky = new SparkPost('<YOUR API KEY>');

sparky.transmissions.send({
  transmissionBody: {
    content: {
      from: 'testing@sparkpostbox.com',
      subject: 'Oh hey!',
      html:'<html><body><p>Testing SparkPost - the world\'s most awesomest email service!</p></body></html>'
    },
    recipients: [
      {address: 'developers@sparkpost.com'}
    ]
  }
}, function(err, res) {
  if (err) {
    console.log('Whoops! Something went wrong');
    console.log(err);
  } else {
    console.log('Woohoo! You just sent your first mailing!');
  }
});
