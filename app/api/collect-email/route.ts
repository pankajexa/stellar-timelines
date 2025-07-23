import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json()
    
    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Airtable configuration
    const AIRTABLE_API_TOKEN = process.env.AIRTABLE_API_TOKEN
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Emails'

    if (!AIRTABLE_API_TOKEN || !AIRTABLE_BASE_ID) {
      console.error('Missing Airtable configuration')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Send to Airtable
    const requestBody = {
      fields: {
        Email: email,
        Timestamp: new Date().toISOString().split('T')[0], // Just the date part: YYYY-MM-DD
        Source: source,
      },
    }
    
    console.log('Sending to Airtable:', JSON.stringify(requestBody, null, 2))
    
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${encodeURIComponent(AIRTABLE_TABLE_NAME)}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    )

    if (!airtableResponse.ok) {
      console.error('Airtable error:', await airtableResponse.text())
      return NextResponse.json(
        { error: 'Failed to save email' },
        { status: 500 }
      )
    }

    const result = await airtableResponse.json()
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email saved successfully',
      id: result.id 
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 