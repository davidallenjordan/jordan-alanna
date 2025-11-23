// app/api/rsvp/route.ts
import {google} from 'googleapis'
import {NextResponse} from 'next/server'
import {z} from 'zod'

// Validation schema
const rsvpSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  guests: z.string(),
  attending: z.enum(['yes', 'no']),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional()
})

export async function POST(request: Request) {
  try {
    // Check environment variables
    const hasBase64Creds = process.env.GOOGLE_CREDENTIALS_BASE64
    const hasRegularCreds = process.env.GOOGLE_SHEETS_CLIENT_EMAIL && process.env.GOOGLE_SHEETS_PRIVATE_KEY

    if ((!hasBase64Creds && !hasRegularCreds) || !process.env.GOOGLE_SHEET_ID) {
      console.error('Missing environment variables')
      console.error('Has base64:', !!hasBase64Creds)
      console.error('Has regular:', !!hasRegularCreds)
      console.error('Has sheet ID:', !!process.env.GOOGLE_SHEET_ID)
      return NextResponse.json(
        {error: 'Server configuration error. Please contact the administrator.'},
        {status: 500}
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = rsvpSchema.parse(body)

    // Authenticate with Google Sheets
    // Handle both regular and base64-encoded credentials
    let credentials
    if (process.env.GOOGLE_CREDENTIALS_BASE64) {
      const decoded = Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf-8')
      credentials = JSON.parse(decoded)
    } else {
      credentials = {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, '\n')
      }
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    })

    const sheets = google.sheets({version: 'v4', auth})
    const spreadsheetId = process.env.GOOGLE_SHEET_ID

    // Prepare row data with readable timestamp
    const now = new Date()
    const timestamp = now.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Toronto'
    })

    const row = [
      timestamp,
      validatedData.name,
      validatedData.email,
      validatedData.attending,
      validatedData.guests,
      validatedData.dietaryRestrictions || '',
      validatedData.message || ''
    ]

    // Initialize sheet with headers if needed
    try {
      const getResponse = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: 'Sheet1!A1:G1'
      })

      // If sheet is empty, add headers
      if (!getResponse.data.values || getResponse.data.values.length === 0) {
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: 'Sheet1!A1:G1',
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              'Timestamp',
              'Name',
              'Email',
              'Attending',
              'Number of Guests',
              'Dietary Restrictions',
              'Message'
            ]]
          }
        })
      }
    } catch (error) {
      console.error('Error checking/adding headers:', error)
    }

    // Append the new RSVP
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row]
      }
    })

    return NextResponse.json(
      {message: 'RSVP submitted successfully'},
      {status: 200}
    )
  } catch (error) {
    console.error('RSVP submission error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {error: 'Invalid form data', details: error.issues},
        {status: 400}
      )
    }

    return NextResponse.json(
      {error: 'Failed to submit RSVP. Please try again.'},
      {status: 500}
    )
  }
}