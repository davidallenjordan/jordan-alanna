import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name } = await request.json();

    if (!name) {
      return NextResponse.json({ exists: false }, { status: 400 });
    }

    // Authenticate with Google Sheets
    let credentials;
    if (process.env.GOOGLE_CREDENTIALS_BASE64) {
      const decoded = Buffer.from(process.env.GOOGLE_CREDENTIALS_BASE64, 'base64').toString('utf-8');
      credentials = JSON.parse(decoded);
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Get the guest list
    const guestListResponse = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: 'Invitees!A:A',
    });

    const guestList = guestListResponse.data.values?.flat() || [];

    // Check if name exists (exact match)
    const exists = guestList.includes(name);

    return NextResponse.json({ exists });
  } catch (error) {
    console.error('Error verifying guest:', error);
    return NextResponse.json({ exists: false }, { status: 500 });
  }
}