'use strict';
require('dotenv').config();
const nodemailer = require('nodemailer');

nodemailer.createTestAccount((err, account) => {

    let transporter = nodemailer.createTransport({
        service:'Gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    let mailOptions = {
        from: '"Ollie nodemailer" <oliverpoplenodemail@gmail.com>',
        to: 'oliverpople@gmail.com',
        subject: 'Hello ✔',
        text: 'Hello world?',
        html: '<b>Hello world?</b>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});
