import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, loanType, message } = req.body;

    // Configure the email transport using your SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'admin@example.com', // Admin email address
      subject: 'New Loan Application Submission',
      text: `You have received a new loan application from ${name}.\n\nDetails:\nEmail: ${email}\nPhone: ${phone}\nLoan Type: ${loanType}\nMessage: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
