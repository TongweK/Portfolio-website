const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact Details</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;


    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tongwe.kasaji@gmail.com', // replace with your email
            pass: 'jadenvert@gmail.com'  // replace with your email password
        }
    });

    let mailOptions = {
        from: 'tongwe.kasaji@gmail.com', // replace with your email
        to: 'jadenvert@gmail.com', // replace with recipient email
        subject: 'Node Contact Request',
        html: output
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});