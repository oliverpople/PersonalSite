const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path');
const app = express();
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../react-client/dist/index.html`));
});

app.post('/contact', function(req, res) {

  console.log("nodemailer request body", req.body);      // JSON
  res.send(req.body);  // echo the result back

      //// node mailer

        let transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
          }
        });

        let mailOptions = {
          from: '"Ollie nodemailer" <oliverpoplenodemail@gmail.com>',
          to: 'oliverpople@gmail.com',
          subject: req.body.name + ' ' + req.body.emailAddress,
          text: req.body.text,
          html: req.body.text
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return console.log(error);
          }
          console.log('Message sent: %s', info.messageId); // keep?
          console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info)); // keep?
        });


    });

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}!`);
    });
