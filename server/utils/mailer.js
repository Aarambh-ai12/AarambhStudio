import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendEmail = async (to, subject, name) => {
    const mailOptions = {
        from: `"Aarambh Fit & Flow" <${process.env.EMAIL_USER}>`,
        to,
        subject:"Thank you for registering with Aarambh Fit & Flow",
        html:`
        <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h2>Hi ${name},</h2>
        <p>Thank you for registering for dance classes at <b>Aarambh Dance Studio</b>! 💃🕺</p>
        <p>We’re excited to have you join our dance family. Get ready to move, groove, and shine!</p>
        <p>See you in class soon! ✨</p>
        <br/>
        <p>Best,<br/>The Aarambh Dance Studio Team</p>
      </div>
        `,
    };
    await transporter.sendMail(mailOptions);
}