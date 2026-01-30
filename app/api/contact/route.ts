import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone', 'projectType', 'location'];
    for (const field of requiredFields) {
      if (!data[field]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log submission (in production, send email or save to database)
    console.log('New contact form submission:', {
      timestamp: new Date().toISOString(),
      data: data
    });

    // TODO: In production, integrate with:
    // - Email service (SendGrid, Resend, Nodemailer)
    // - CRM (HubSpot, Salesforce)
    // - Database (save lead)
    
    // For now, simulate success
    // Example SendGrid integration:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'info@treatinterio.com',
      from: 'noreply@treatinterio.com',
      subject: `New Consultation Request from ${data.name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Project Type:</strong> ${data.projectType}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Property Status:</strong> ${data.propertyStatus}</p>
        <p><strong>Timeline:</strong> ${data.timeline}</p>
        <p><strong>Square Feet:</strong> ${data.squareFeet}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully! We will contact you within 24 hours.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
