# Parallels 🌟

> Every timeline where you got lucky exists. Find yours.

An immersive web experience that lets you explore alternate timelines where you made the lucky choices that led to wealth and success.

## ✨ Features

- **Deep Space Background**: Dark galaxy-themed background with twinkling stars
- **Interactive Timeline Cards**: Compact hover effects and smooth animations
- **Email Collection**: Automated email capture with Airtable integration
- **One-Screen Design**: Everything fits perfectly without scrolling
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📧 Email Collection Setup

For production email collection, see **[EMAIL_SETUP.md](./EMAIL_SETUP.md)** for complete setup instructions using Airtable.

**Quick setup:**
1. Create Airtable account and base
2. Get API key and Base ID
3. Set environment variables in Vercel
4. Deploy and start collecting emails!

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Email Collection**: Airtable API
- **Deployment**: Vercel

## 📋 Timeline Previews

1. **Earth-3120**: The Bitcoin timeline where you bought 1,000 BTC for $10
2. **Earth-7451**: The lottery timeline where your random ticket hit all six numbers
3. **Earth-9901**: The startup timeline where your joke app got acquired by Google

## 🎯 MVP Checklist

- [x] Next.js project setup
- [x] Deep space starfield background
- [x] Three compelling timeline teasers
- [x] Compact email capture form
- [x] One-screen responsive design
- [x] Dark galaxy theme
- [x] Email collection API with Airtable
- [x] Error handling and validation
- [ ] Deploy to Vercel
- [ ] Configure production environment variables

## 🌟 Future Features

- Interactive timeline exploration
- User authentication
- Personalized success stories
- Payment integration
- Email automation
- Analytics dashboard

## 📁 Project Structure

```
app/
├── api/collect-email/     # Email collection endpoint
├── page.tsx              # Main landing page
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── Starfield.tsx         # Animated background
├── TimelineCard.tsx      # Square timeline cards
└── EmailCapture.tsx      # Email form with Airtable integration

lib/
└── timelines.ts          # Timeline data
```

---

**Parallels** - Where your successful parallel selves are waiting to be discovered.
