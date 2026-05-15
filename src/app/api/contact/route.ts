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

    // Send using application/x-www-form-urlencoded format (Formspree standard)
    const params = new URLSearchParams();
    params.append('name', name);
    params.append('email', email);
    params.append('subject', subject);
    params.append('message', message);

    const response = await fetch('https://formspree.io/f/xqenvwaw', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    console.log('Formspree response status:', response.status);
    const responseText = await response.text();
    console.log('Formspree response:', responseText);

    if (response.ok || response.status === 200) {
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you! Your message has been sent successfully. I will get back to you soon!' 
      });
    } else {
      console.error('Formspree error response:', responseText);
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
