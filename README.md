# Feedl Landing Page

A standalone landing page for Feedl with an inquiry form, ready for deployment on Vercel.

## Features

- Modern, responsive landing page
- Inquiry form with file uploads (logo and product images)
- Email notifications via SMTP (Gmail App Password)
- Vercel serverless function for form submission
- Beautiful UI with Tailwind CSS

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECIPIENT_EMAIL=your-email@gmail.com
```

**For Gmail:**
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://support.google.com/accounts/answer/185833
3. Use the App Password as `SMTP_PASS`

### 3. Add Feedl Logo

Add your Feedl logo image to the `assets/` folder as `feedl.png`. If the logo is not found, the page will fall back to text.

### 4. Development

```bash
npm run dev
```

The app will be available at `http://localhost:3001`

### 5. Build

```bash
npm run build
```

## Deployment to Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add all variables from `.env.example`

### Option 2: Using Vercel Dashboard

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in project settings
4. Deploy

### Environment Variables in Vercel

Make sure to add the following environment variables in your Vercel project settings:

- `SMTP_HOST` - SMTP server host (e.g., smtp.gmail.com)
- `SMTP_PORT` - SMTP server port (e.g., 587)
- `SMTP_USER` - Your email address
- `SMTP_PASS` - Your email App Password
- `RECIPIENT_EMAIL` - Email address to receive inquiries

## Project Structure

```
Feedl-landing/
├── api/
│   └── submit-inquiry.ts    # Serverless function for form submission
├── assets/
│   ├── feedl.png            # Feedl logo (add this)
│   ├── before.JPG           # Before image
│   ├── after.png            # After image
│   └── header-bg.jpg        # Header background
├── components/
│   ├── LandingPage.tsx      # Main landing page
│   ├── InquiryForm.tsx      # Inquiry form component
│   └── icons.tsx            # Icon components
├── App.tsx                  # Main app component
├── index.tsx                # React entry point
├── index.html               # HTML template
├── index.css                # Global styles
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
├── vercel.json              # Vercel configuration
└── README.md                # This file
```

## Form Fields

The inquiry form includes:

- **Name** (required)
- **Email** (required)
- **Business Name** (required)
- **Domain** (required)
- **Business Overview** (required, min 50 characters)
- **Logo** (optional, max 5MB)
- **Product Images** (required, max 10 images, 10MB per file)

## Email Format

When a form is submitted, you'll receive an email with:

- All form fields
- Logo attachment (if provided)
- Product image attachments

## Troubleshooting

### Email not sending

1. Check that all environment variables are set correctly in Vercel
2. Verify your Gmail App Password is correct
3. Check Vercel function logs for errors
4. Ensure 2-Factor Authentication is enabled on your Google account

### Logo not displaying

1. Make sure `feedl.png` exists in the `assets/` folder
2. The page will fall back to text if the logo is not found

### Build errors

1. Make sure all dependencies are installed: `npm install`
2. Check that TypeScript types are installed
3. Verify all file paths are correct

## License

SPDX-License-Identifier: Apache-2.0

