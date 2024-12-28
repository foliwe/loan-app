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

    try {
      console.log('Sending admin email...');
      const adminInfo = await transporter.sendMail(adminMailOptions);
      console.log('Admin email sent:', adminInfo.response);

      return NextResponse.json({ 
        success: true,
        message: 'Application submitted successfully'
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
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Server error', details: error.message },
      { status: 500 }
    );
  }
}
