# Email Setup Guide for Lumhara

## Option 1: Cloudflare Email Routing (Recommended - Free)

### Step 1: Set Up Cloudflare Email Routing

1. **Go to Cloudflare Dashboard**
   - Log into your Cloudflare account
   - Make sure your domain `lumharalife.com` is added and active

2. **Enable Email Routing**
   - In the left sidebar, click **Email** → **Email Routing**
   - Click **Get Started** or **Enable Email Routing**
   - Cloudflare will automatically configure DNS records (MX, SPF, etc.)

3. **Create Email Address**
   - Click **Create address**
   - Choose an address (e.g., `hello@lumharalife.com` or `amy@lumharalife.com`)
   - Enter your personal email where you want to receive messages
   - Click **Create**

4. **Verify Your Personal Email**
   - Cloudflare will send a verification email to your personal address
   - Click the verification link in the email
   - Your email routing is now active!

### Step 2: Update Contact Form

Once you have your email address (e.g., `hello@lumharalife.com`), update the contact form:

1. Open `contact.html`
2. Find this line:
   ```html
   <form id="contact-form" class="contact-form" action="https://formsubmit.co/YOUR_EMAIL@example.com" method="POST">
   ```
3. Replace `YOUR_EMAIL@example.com` with your Cloudflare email:
   ```html
   <form id="contact-form" class="contact-form" action="https://formsubmit.co/hello@lumharalife.com" method="POST">
   ```

### Step 3: Test the Form

1. Visit your contact page
2. Fill out and submit the form
3. Check your personal email inbox
4. You should receive the form submission!

---

## Option 2: FormSubmit with Personal Email (Quick Setup)

If you prefer to skip Cloudflare Email Routing for now:

1. **Update Contact Form**
   - Open `contact.html`
   - Replace `YOUR_EMAIL@example.com` with your personal email:
   ```html
   <form id="contact-form" class="contact-form" action="https://formsubmit.co/your-personal-email@gmail.com" method="POST">
   ```

2. **Verify Email with FormSubmit**
   - FormSubmit will send a verification email to your address
   - Click the verification link
   - Your form will start working!

**Note:** This will show your personal email in the form action (visible in page source), which is why Option 1 is recommended.

---

## Option 3: Google Workspace (If You Want Full Email Service)

If you want a full email inbox (not just forwarding):

1. **Sign up for Google Workspace**
   - Go to workspace.google.com
   - Choose Business Starter plan ($6/month)
   - Use your domain: `lumharalife.com`

2. **Configure DNS**
   - Google will provide MX records
   - Add them to Cloudflare DNS
   - Wait for verification

3. **Update Contact Form**
   - Use your Google Workspace email in FormSubmit

---

## Recommended: Option 1 (Cloudflare Email Routing)

**Why it's best:**
- ✅ Free
- ✅ Professional email address (`hello@lumharalife.com`)
- ✅ Easy to set up
- ✅ Works immediately
- ✅ Can upgrade to Google Workspace later if needed

**Next Steps:**
1. Set up Cloudflare Email Routing (follow Step 1 above)
2. Update the contact form with your new email address
3. Test it!

---

## Troubleshooting

### FormSubmit Not Working?
- Make sure you verified your email with FormSubmit
- Check that the email address in the form action is correct
- Check browser console for errors

### Not Receiving Emails?
- Check spam folder
- Verify Cloudflare Email Routing is enabled
- Check that DNS records (MX, SPF) are configured correctly
- Wait a few minutes for DNS propagation

### Want to Change Email Address Later?
- Just update the form action in `contact.html`
- No need to change anything else

