# 📧 Email Collection Setup Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Airtable Base

1. Go to [airtable.com](https://airtable.com) and sign up
2. Create a new base called **"Parallels Email Leads"**
3. Create a table called **"Emails"** with these columns:
   - `Email` (Single line text)
   - `Timestamp` (Date & time)
   - `Source` (Single line text)

### Step 2: Get Airtable Credentials

1. **API Key**: Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
   - Click "Create new token"
   - Name: "Parallels Email Collection"
   - Scopes: `data.records:write`
   - Access: Select your base
   - Copy the token

2. **Base ID**: 
   - Go to your Airtable base
   - Look at the URL: `airtable.com/app[BASE_ID]/...`
   - Copy the `app...` part (starts with `app`)

### Step 3: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Airtable Configuration
AIRTABLE_API_KEY=pat1234567890abcdef  # Your token from step 2
AIRTABLE_BASE_ID=app1234567890abcdef  # Your base ID from step 2
AIRTABLE_TABLE_NAME=Emails            # Your table name
```

### Step 4: Deploy to Vercel

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add email collection"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repo
   - Add environment variables in Vercel settings:
     - `AIRTABLE_API_KEY` = your token
     - `AIRTABLE_BASE_ID` = your base ID
     - `AIRTABLE_TABLE_NAME` = `Emails`

3. **Deploy**: Click "Deploy"

## ✅ Test Your Setup

1. Visit your deployed site
2. Enter a test email
3. Check your Airtable base - you should see the email appear!

## 📊 Alternative Options

### Option 2: Supabase (More Advanced)
- Free PostgreSQL database
- Real-time features
- More scalable

### Option 3: Google Sheets
- Use Google Sheets API
- Simpler than database
- Easy to view/export data

### Option 4: Email Services
- ConvertKit (email marketing)
- Mailchimp (email marketing) 
- EmailJS (sends to your email)

## 🔧 Troubleshooting

**"Server configuration error"**
- Check your environment variables are set correctly in Vercel

**"Failed to save email"**
- Verify your Airtable API key has write permissions
- Check your Base ID is correct

**Emails not appearing**
- Make sure table name matches exactly ("Emails")
- Check Airtable permissions

## 📈 Next Steps

Once emails are collecting:
1. Set up email automation (welcome emails)
2. Export leads for outreach
3. Track conversion metrics
4. A/B test your landing page

---

**Need help?** Check the Vercel logs for error details! 