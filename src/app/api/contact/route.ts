import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare form data for Formspree
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // Send email using Formspree form ID with FormData
    const response = await fetch('https://formspree.io/f/xqenvwaw', {
      method: 'POST',
      body: formData,
    });

    console.log('Formspree response status:', response.status);
    const responseData = await response.json().catch(() => ({}));
    console.log('Formspree response data:', responseData);

    if (response.ok) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon!' 
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again or contact via email.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
