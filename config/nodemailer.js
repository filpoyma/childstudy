// // Create a Transport instance using nodemailer
// var nodemailer = require('nodemailer');
//
// sails.log.debug('try to send mail');
// const smtpTransport = nodemailer.createTransport("SMTP", {
//   service: "Gmail",
//   auth: {
//     XOAuth2: {
//       user: "childstudyinfo@gmail.com", // Your gmail address.
//       clientId: "407408718192.apps.googleusercontent.com",
//       clientSecret: "YOUR_CLIENT_SECRET",
//       refreshToken: "REFRESH_TOKEN_YOU_JUST_FOUND"
//     }
//   }
// });
// // Setup mail configuration
// var mailOptions = {
//   from: 'childstudyinfo@gmail.com', // sender address
//   to: ${mails}, // list of receivers
//   subject: 'A_SUBJECT', // Subject line
//   // text: '', // plaintext body
//   html: htmlBody // html body
// };
// // send mail
// smtpTransport.sendMail(mailOptions, function(error, info) {
//   if (error) {
//     sails.log.debug(error);
//     return res.notOk({
//       status: 'error',
//       msg: 'Email sending failed'
//     })
//   } else {
//     console.log('Message %s sent: %s', info.messageId, info.response);
//     return res.ok({
//       status: 'ok',
//       msg: 'Email sent'
//     })
//   }
//   smtpTransport.close();
// });