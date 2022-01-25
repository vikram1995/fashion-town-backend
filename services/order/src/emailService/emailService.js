import nodemailer from 'nodemailer';
import 'dotenv/config';
import { generateEmailHtml } from './emailBody';

const emailService = async (orderData) => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    const emailBody = generateEmailHtml(orderData);
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL_ID, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    try {
        let info = await transporter.sendMail({
            from: process.env.EMAIL_ID, // sender address
            to: orderData.orderByEmailId, // list of receivers
            subject: 'Order Confirmation', // Subject line
            // text: 'Its done using node mailer pacakage', // plain text body
            html: emailBody, // html body
        });

        console.log('Message sent: %s', info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    } catch (error) {
        console.log(error);
    }
};

 export { emailService };
