/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Serve static files from dist
app.use(express.static(path.join(__dirname, 'dist')));

// API endpoint for form submission
app.post('/api/submit-inquiry', async (req, res) => {
  try {
    const { name, email, businessName, domain, businessOverview, logo, productImages } = req.body;

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Prepare attachments
    const attachments = [];

    if (logo) {
      attachments.push({
        filename: logo.name,
        content: Buffer.from(logo.data, 'base64'),
        contentType: logo.type,
      });
    }

    if (productImages && productImages.length > 0) {
      productImages.forEach((image, index) => {
        attachments.push({
          filename: image.name,
          content: Buffer.from(image.data, 'base64'),
          contentType: image.type,
        });
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Feedl Inquiry from ${name}`,
      html: `
        <h2>New Feedl Campaign Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Domain:</strong> ${domain}</p>
        <p><strong>Business Overview:</strong></p>
        <p>${businessOverview}</p>
        <p><strong>Logo Attached:</strong> ${logo ? 'Yes' : 'No'}</p>
        <p><strong>Product Images:</strong> ${productImages?.length || 0} image(s)</p>
      `,
      attachments,
    });

    res.json({ success: true, message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Error processing inquiry:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to submit inquiry. Please try again.'
    });
  }
});

// Serve index.html for all other routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
