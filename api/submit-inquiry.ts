/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

interface InquiryData {
  name: string;
  email: string;
  businessName: string;
  domain: string;
  businessOverview: string;
  logo?: {
    name: string;
    data: string; // base64
    type: string;
  };
  productImages: Array<{
    name: string;
    data: string; // base64
    type: string;
  }>;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!smtpUser || !smtpPass || !recipientEmail) {
      console.error('Missing SMTP configuration');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Parse request body
    const data: InquiryData = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.businessName || !data.domain || !data.businessOverview) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!data.productImages || data.productImages.length === 0) {
      return res.status(400).json({ error: 'At least one product image is required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Prepare email content
    const emailSubject = `New Feedl Inquiry from ${data.businessName}`;
    const emailHtml = `
      <h2>New Inquiry from Feedl Landing Page</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Business Name:</strong> ${data.businessName}</p>
      <p><strong>Domain:</strong> ${data.domain}</p>
      <p><strong>Business Overview:</strong></p>
      <p>${data.businessOverview.replace(/\n/g, '<br>')}</p>
      ${data.logo ? '<p><strong>Logo:</strong> Attached</p>' : ''}
      <p><strong>Product Images:</strong> ${data.productImages.length} image(s) attached</p>
    `;

    const emailText = `
New Inquiry from Feedl Landing Page

Name: ${data.name}
Email: ${data.email}
Business Name: ${data.businessName}
Domain: ${data.domain}

Business Overview:
${data.businessOverview}

${data.logo ? 'Logo: Attached' : ''}
Product Images: ${data.productImages.length} image(s) attached
    `;

    // Prepare attachments
    const attachments: any[] = [];

    // Handle logo attachment if provided
    if (data.logo) {
      attachments.push({
        filename: data.logo.name,
        content: data.logo.data,
        encoding: 'base64',
      });
    }

    // Handle product images attachments
    data.productImages.forEach((image, index) => {
      attachments.push({
        filename: image.name || `product-image-${index + 1}.png`,
        content: image.data,
        encoding: 'base64',
      });
    });

    // Send email
    const mailOptions = {
      from: `"Feedl Landing Page" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: data.email,
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      attachments: attachments.length > 0 ? attachments : undefined,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: 'Inquiry submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({
      error: error instanceof Error ? error.message : 'Failed to submit inquiry. Please try again later.',
    });
  }
}
