import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email configuration');
    return NextResponse.json(
      { error: 'Server configuration error' },
      { status: 500 }
    );
  }

  try {
    const formData = await request.json();
    console.log('Received form data:', formData);

    // Validate form data
    if (!formData.email || !formData.name) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify SMTP connection
    try {
      await transporter.verify();
      console.log('SMTP connection verified');
    } catch (smtpError) {
      console.error('SMTP verification failed:', smtpError);
      return NextResponse.json(
        { error: 'Email server connection failed' },
        { status: 500 }
      );
    }

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: 'kifaruwabantu@gmail.com',
      subject: 'New Loan Application',
      html: `
        <h2>New Loan Application</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Loan Type:</strong> ${formData.loanType}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: formData.email,
      subject: 'Loan Application Received',
      html: `
        <h2>Thank You for Your Application</h2>
        <p>Dear ${formData.name},</p>
        <p>We have received your loan application. Our team will review it and get back to you within 24-48 business hours.</p>
        <p>Application Details:</p>
        <ul>
          <li>Loan Type: ${formData.loanType}</li>
          <li>Phone: ${formData.phone}</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Your Loan Team</p>
      `,
    };

    try {
      console.log('Sending admin email...');
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log('Admin email sent:', adminInfo.response);

      console.log('Sending user email...');
      const userInfo = await transporter.sendMail(userMailOptions);
      console.log('User email sent:', userInfo.response);

      return NextResponse.json({ 
        success: true,
        message: 'Emails sent successfully'
      });
    } catch (emailError: any) {
      console.error('Error sending email:', emailError);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          details: emailError.message
        },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error.message
      },
      { status: 500 }
    );
  }
}
