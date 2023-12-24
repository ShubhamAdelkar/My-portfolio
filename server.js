require('events').EventEmitter.defaultMaxListeners = 15;

const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static(__dirname));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'adelkarshubham47@gmail.com',
            pass: 'hmul mufx qkjb wgdj'
        }
    });

    const mailOptions = {
        from: `${formData.fullNameInput} <${formData.emailInput}>`,
        to: 'adelkarshubham47@gmail.com',
        subject: 'Contact Submission',
        html: `
    <p><strong>Name:</strong> ${formData.fullNameInput}</p>
    <p><strong>Email:</strong> ${formData.emailInput}</p>
    <p><strong>Message:</strong></p>
    <p>${formData.messageInput}</p>
  `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            res.send('Internal Server Error: Could not send email.');
        } else {
            console.log('Message sent: ' + info.response);
            res.send('success');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
