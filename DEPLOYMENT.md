# Deployment Guide: Cloudflare Pages

This guide walks you through deploying your Lumhara website to Cloudflare Pages.

## Prerequisites

- A Cloudflare account (free to create)
- Your website files ready to deploy
- (Optional) A custom domain (lumharalife.com)

## Step 1: Prepare Your Files

Before deploying, make sure your site is ready:

1. **Verify all files are present:**
   - `index.html`
   - `contact.html`
   - `privacy.html`
   - `terms.html`
   - `accessibility.html`
   - `css/styles.css`
   - `js/` folder with all components
   - `assets/images/` folder
   - `sitemap.xml`
   - `robots.txt`

2. **Test locally:**
   - Open `index.html` in a browser
   - Check all pages load correctly
   - Verify images display
   - Test navigation

## Step 2: Create Cloudflare Account

1. Go to [cloudflare.com](https://www.cloudflare.com)
2. Click **Sign Up** (top right)
3. Enter your email and create a password
4. Verify your email address

## Step 3: Deploy to Cloudflare Pages

### Option A: Direct Upload (Easiest for First Deployment)

1. Log into Cloudflare dashboard
2. Click **Workers & Pages** in the left sidebar
3. Click **Create application**
4. Click **Pages** tab
5. Click **Upload assets**
6. Click **Select a folder** and choose your `lumharalife` project folder
7. Click **Deploy site**
8. Wait for deployment (usually 1-2 minutes)
9. Your site will be live at: `your-site-name.pages.dev`

### Option B: Git Integration (Recommended for Updates)

If you have your code in GitHub/GitLab/Bitbucket:

1. Push your code to your Git repository (make sure `wrangler.toml` is included)
2. In Cloudflare dashboard → **Workers & Pages** → **Pages**
3. Click **Create application** → **Pages**
4. Click **Connect to Git**
5. Authorize Cloudflare to access your repository
6. Select your repository
7. Configure build settings:
   - **Framework preset:** None
   - **Build command:** (leave completely empty - do NOT put anything here)
   - **Build output directory:** `/` (just a forward slash, or leave empty)
   - **Root directory:** `/` (leave as default)
8. Click **Save and Deploy**

**Important:** If you see build errors, make sure:
- Build command is completely empty (not even a space)
- You have `wrangler.toml` in your repository root (this file is included in the project)

## Step 4: Configure Custom Domain (If You Have One)

If you have `lumharalife.com`:

### 4a. Add Domain to Cloudflare

1. In Cloudflare dashboard, click **Add a Site**
2. Enter your domain: `lumharalife.com`
3. Choose a plan (Free plan is fine)
4. Cloudflare will scan your existing DNS records

### 4b. Update Nameservers

1. Cloudflare will provide you with nameservers (e.g., `alice.ns.cloudflare.com`)
2. Go to your domain registrar (where you bought the domain)
3. Update nameservers to Cloudflare's nameservers
4. Wait for DNS propagation (can take up to 24 hours, usually much faster)

### 4c. Connect Domain to Pages

1. Go to **Workers & Pages** → **Pages**
2. Click on your site
3. Go to **Custom domains** tab
4. Click **Set up a custom domain**
5. Enter: `lumharalife.com` and `www.lumharalife.com`
6. Cloudflare will automatically configure DNS records
7. SSL certificate will be issued automatically (takes a few minutes)

## Step 5: Verify Deployment ✅

1. Visit your site URL (either `.pages.dev` or your custom domain)
2. Test all pages:
   - ✅ Homepage (`/`)
   - ✅ Contact page (`/contact.html`)
   - ✅ Privacy (`/privacy.html`)
   - ✅ Terms (`/terms.html`)
   - ✅ Accessibility (`/accessibility.html`)
3. Check:
   - ✅ Images load correctly (logo, headshot, approach icons, etc.)
   - ✅ Navigation works (hamburger menu, jump links)
   - ✅ Forms display (contact form, newsletter signup - they won't work yet, but should show)
   - ✅ Mobile responsiveness (test on phone or resize browser)
   - ✅ HTTPS is working (lock icon in browser)
   - ✅ GDPR banner appears
   - ✅ All sections load (Hero, Approach, Offerings, Testimonials, etc.)
   - ✅ Skip to main content link works (press Tab on page load)

## Step 6: Update Sitemap (If Needed)

If your domain changed, update `sitemap.xml`:
- Replace any `.pages.dev` URLs with `lumharalife.com`
- Update `lastmod` dates if you want

## Troubleshooting

### Images Not Loading
- Check that image paths are relative (e.g., `assets/images/logo.png` not `/assets/images/logo.png`)
- Verify all images are in the `assets/images/` folder

### 404 Errors
- Make sure all HTML files are in the root directory
- Check that file names match exactly (case-sensitive)

### CSS/JS Not Loading
- Verify paths in HTML files are correct
- Check browser console for 404 errors

### Custom Domain Not Working
- Wait for DNS propagation (can take up to 24 hours)
- Verify nameservers are correctly set at your registrar
- Check DNS records in Cloudflare dashboard

## Next Steps (After Deployment)

1. **Set up email routing** (Cloudflare Email Routing - free)
2. **Configure contact form** (FormSubmit or Netlify Forms)
3. **Set up Google Analytics** (optional)
4. **Test everything thoroughly**

## Useful Cloudflare Pages Features

- **Automatic HTTPS:** SSL certificates are free and automatic
- **Global CDN:** Your site is served from locations worldwide
- **Preview Deployments:** Every Git push creates a preview URL
- **Rollback:** Easy to revert to previous deployments
- **Analytics:** Basic analytics available in dashboard

## Support

- **Cloudflare Docs:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Cloudflare Community:** [community.cloudflare.com](https://community.cloudflare.com)

---

**Note:** This is a static site, so no build process is needed. Just upload your files and you're done!

