import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Formspree form ID
    const response = await fetch('https://formspree.io/f/xqenvwaw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
    });

    const responseText = await response.text();

    if (response.ok || response.status === 200) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon!' 
      });
    } else {
      console.error('Formspree error:', responseText);
      return NextResponse.json(
        { success: false, message: 'Failed to send email. Please try again.' },
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
