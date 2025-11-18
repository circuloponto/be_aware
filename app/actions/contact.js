'use server'

export async function sendContactEmail(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Validate inputs
  if (!name || !email || !message) {
    return { success: false, error: 'All fields are required' };
  }

  // Name validation
  if (name.length < 2 || name.length > 100) {
    return { success: false, error: 'Name must be between 2 and 100 characters' };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, error: 'Invalid email address' };
  }

  // Message validation
  if (message.length < 10 || message.length > 1000) {
    return { success: false, error: 'Message must be between 10 and 1000 characters' };
  }

  try {
    // Using a simple fetch to send email via a service
    // For production, you should use a proper email service like SendGrid, Resend, or Nodemailer
    const emailContent = {
      to: 'asdias@consultis.com',
      from: email,
      subject: `BE AWARE Contact Form: Message from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission - BE AWARE Project</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };

    // For now, we'll just log it and return success
    // In production, integrate with an email service
    console.log('Contact form submission:', emailContent);
    
    // Simulate email sending
    // TODO: Integrate with actual email service (SendGrid, Resend, AWS SES, etc.)
    
    return { 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: 'Failed to send message. Please try again later.' 
    };
  }
}
