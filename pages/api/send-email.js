// /pages/api/send-email.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, surname, email, phone, message, course } = req.body;

    // Nodemailer transporter configuration
    let transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service, e.g., Gmail
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // Sender's email
        to: process.env.EMAIL_TO, // Your email address (the recipient)
        subject: `Bokning av kursplats: ${course}`,
        text: `
          Förnamn: ${firstName}
          Efternamn: ${surname}
          Email: ${email}
          Telefon: ${phone}
          
          Meddelande:
          ${message}
        `,
      });

      // Respond with success message
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
