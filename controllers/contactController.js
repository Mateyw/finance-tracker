import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

export const getContact = (req, res) => {
    return res.render('contact.ejs', {message: null, title: 'Contact', userId: req.session.userId
    });
};



// "DOESNT WORK!"
export const sendEmail = (req, res) => {
//  get user contact details from request body on form submission

    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email, 
        to: process.env.EMAIL_USER,
        subject: `New message from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
};