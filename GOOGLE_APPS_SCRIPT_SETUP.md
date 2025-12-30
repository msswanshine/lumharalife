# Google Apps Script Setup for Newsletter

This guide will help you set up Google Apps Script to save newsletter signups directly to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Lumhara Newsletter Signups" (or whatever you prefer)
4. In the first row, add headers: `Email` and `Date`
5. Note the Sheet ID from the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete any default code
3. Paste this code:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data
    const data = JSON.parse(e.postData.contents);
    const email = data.email;
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the email and timestamp
    sheet.appendRow([email, new Date()]);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Email added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type" and choose **Web app**
3. Set the following:
   - **Description**: "Newsletter signup handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this allows your website to call it)
4. Click **Deploy**
5. **Copy the Web App URL** - this is what you'll use in your form

## Step 4: Update Your Website

1. Open `js/lumhara-newsletter.js`
2. Find the line: `action="YOUR_GOOGLE_APPS_SCRIPT_URL"`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL` with your Web App URL from Step 3

Example:
```html
<form class="newsletter-form" action="https://script.google.com/macros/s/AKfycby.../exec" aria-label="Newsletter signup">
```

## Step 5: Test

1. Visit your website
2. Enter an email in the newsletter form
3. Click Subscribe
4. Check your Google Sheet - the email should appear with a timestamp

## Troubleshooting

- **"Please configure the Google Apps Script URL"**: Make sure you've updated the form action with your Web App URL
- **Emails not appearing**: Check that "Who has access" is set to "Anyone" in the deployment settings
- **Permission errors**: You may need to authorize the script the first time - click "Review Permissions" and allow access

## Security Note

Since we're using `mode: 'no-cors'`, the form will always show success (we can't read the response). The email will still be saved to your sheet. For better error handling, you could set up CORS, but this requires additional configuration.

