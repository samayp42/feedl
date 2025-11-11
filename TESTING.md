# Testing Guide

## Local Development

The development server is running at: **http://localhost:3001**

### What Works Locally:
- ✅ Landing page renders correctly
- ✅ Form UI and validation
- ✅ File uploads and previews
- ✅ All styling and animations

### What Doesn't Work Locally:
- ❌ API endpoint (`/api/submit-inquiry`) - Serverless functions only work on Vercel

## Testing the Frontend

1. Open http://localhost:3001 in your browser
2. Test the landing page:
   - Scroll through sections
   - Click "Get Started" button (should scroll to form)
   - Click "See how it works" (should scroll to steps)
   - Test the Before/After image toggle

3. Test the form:
   - Fill out all required fields
   - Upload logo (optional)
   - Upload product images
   - Test validation (try submitting with empty fields)
   - Check file previews

## Testing the API (Production Only)

To test the email functionality, you need to deploy to Vercel:

1. Deploy to Vercel (see README.md)
2. Set environment variables in Vercel dashboard
3. Test form submission on the deployed site

## Local API Testing (Optional)

If you want to test the API locally, you can use Vercel CLI:

```bash
npm i -g vercel
vercel dev
```

This will run the serverless functions locally on a different port.

## Troubleshooting

### Port 3001 already in use:
```bash
# Kill the process or change port in vite.config.ts
lsof -ti:3001 | xargs kill
```

### Logo not showing:
- Check that `assets/feedl.png` exists
- The page will show "Feedl" text if logo fails to load

### Form validation errors:
- All fields are required except logo
- Business overview must be at least 50 characters
- Domain must contain a dot and be at least 4 characters
- Product images are required (at least 1, max 10)

