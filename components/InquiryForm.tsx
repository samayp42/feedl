/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState } from 'react';
import { UploadIcon, XMarkIcon } from './icons';

interface FormData {
  name: string;
  email: string;
  businessName: string;
  domain: string;
  businessOverview: string;
  logo: File | null;
  productImages: File[];
}

interface FormErrors {
  name?: string;
  email?: string;
  businessName?: string;
  domain?: string;
  businessOverview?: string;
  productImages?: string;
}

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessName: '',
    domain: '',
    businessOverview: '',
    logo: null,
    productImages: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.businessName.trim()) {
      newErrors.businessName = 'Business name is required';
    }

    if (!formData.domain.trim()) {
      newErrors.domain = 'Domain is required';
    } else {
      const domain = formData.domain.trim().toLowerCase();
      // Basic domain validation - must contain at least one dot and valid characters
      if (!domain.includes('.') || domain.length < 4) {
        newErrors.domain = 'Please enter a valid domain (e.g., example.com)';
      }
    }

    if (!formData.businessOverview.trim()) {
      newErrors.businessOverview = 'Business overview is required';
    } else if (formData.businessOverview.trim().length < 50) {
      newErrors.businessOverview = 'Business overview must be at least 50 characters';
    }

    if (formData.productImages.length === 0) {
      newErrors.productImages = 'At least one product image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setErrors(prev => ({ ...prev, logo: 'Logo file size must be less than 10MB' }));
        return;
      }
      setFormData(prev => ({ ...prev, logo: file }));
    }
  };

  const handleProductImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      const validFiles = files.filter(file => {
        if (file.size > 10 * 1024 * 1024) {
          return false;
        }
        return true;
      });

      if (validFiles.length !== files.length) {
        setErrors(prev => ({ ...prev, productImages: 'Some files were too large (max 10MB per file)' }));
      }

      setFormData(prev => ({
        ...prev,
        productImages: [...prev.productImages, ...validFiles].slice(0, 5), // Limit to 5 images
      }));

      if (errors.productImages) {
        setErrors(prev => ({ ...prev, productImages: undefined }));
      }
    }
  };

  const removeProductImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      productImages: prev.productImages.filter((_, i) => i !== index),
    }));
  };

  const removeLogo = () => {
    setFormData(prev => ({ ...prev, logo: null }));
  };

  const compressImage = (file: File, maxWidth: number = 1200, quality: number = 0.7): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Resize if image is too large
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Failed to get canvas context'));
            return;
          }

          ctx.drawImage(img, 0, 0, width, height);

          // Convert to base64 with compression
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Failed to compress image'));
                return;
              }
              const reader = new FileReader();
              reader.readAsDataURL(blob);
              reader.onload = () => {
                const result = reader.result as string;
                const base64 = result.split(',')[1];
                resolve(base64);
              };
              reader.onerror = error => reject(error);
            },
            'image/jpeg',
            quality
          );
        };
        img.onerror = () => reject(new Error('Failed to load image'));
      };
      reader.onerror = error => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Convert and compress images to base64
      const logoData = formData.logo
        ? {
            name: formData.logo.name,
            data: await compressImage(formData.logo, 800, 0.8),
            type: 'image/jpeg',
          }
        : undefined;

      const productImagesData = await Promise.all(
        formData.productImages.map(async (image) => ({
          name: image.name,
          data: await compressImage(image, 1200, 0.7),
          type: 'image/jpeg',
        }))
      );

      const payload = {
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        domain: formData.domain,
        businessOverview: formData.businessOverview,
        logo: logoData,
        productImages: productImagesData,
      };

      // In development, simulate API call
      if (import.meta.env.DEV) {
        console.log('Development mode: Form data would be sent:', {
          name: payload.name,
          email: payload.email,
          businessName: payload.businessName,
          domain: payload.domain,
          businessOverview: payload.businessOverview,
          logo: payload.logo ? 'Logo attached' : 'No logo',
          productImages: `${payload.productImages.length} image(s)`,
        });
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
      } else {
        const response = await fetch('/api/submit-inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Failed to submit inquiry' }));
          throw new Error(errorData.error || 'Failed to submit inquiry');
        }

        setSubmitStatus('success');
      }
      // Reset form
      setFormData({
        name: '',
        email: '',
        businessName: '',
        domain: '',
        businessOverview: '',
        logo: null,
        productImages: [],
      });
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Note: Object URLs are cleaned up automatically when component unmounts
  // or when files are removed, but we could add cleanup if needed
  const getFilePreviewUrl = (file: File): string => {
    return URL.createObjectURL(file);
  };

  return (
    <section id="inquiry-form" className="container py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="section-title text-3xl md:text-4xl text-[#3B3030] mb-4 font-bold">Get Your First Campaign</h2>
          <p className="text-center text-[#5A4A4A] text-lg md:text-xl mb-2 font-semibold">
            Free Preview
          </p>
          <p className="text-center text-[#5A4A4A] text-sm md:text-base mt-4 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you soon to discuss how Feedl can help your business get consistent, creative content every month.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="form-section">
          {submitStatus === 'success' && (
            <div className="form-success">
              <div className="flex items-center gap-3 justify-center mb-2">
                <span className="text-2xl">🎉</span>
                <h3 className="text-lg font-bold">Thank you for your interest!</h3>
              </div>
              <p>We'll be in touch soon to discuss your first campaign — free preview.</p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="form-error-message">
              {errorMessage || 'Failed to submit inquiry. Please try again.'}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? 'border-red-500' : ''}`}
              placeholder="Your full name"
            />
            {errors.name && <div className="form-error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? 'border-red-500' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="businessName" className="form-label">
              Business Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              className={`form-input ${errors.businessName ? 'border-red-500' : ''}`}
              placeholder="Your Business Name"
            />
            {errors.businessName && <div className="form-error">{errors.businessName}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="domain" className="form-label">
              Domain <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="domain"
              name="domain"
              value={formData.domain}
              onChange={handleInputChange}
              className={`form-input ${errors.domain ? 'border-red-500' : ''}`}
              placeholder="example.com"
            />
            {errors.domain && <div className="form-error">{errors.domain}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="businessOverview" className="form-label">
              Business Overview <span className="text-red-500">*</span>
            </label>
            <textarea
              id="businessOverview"
              name="businessOverview"
              value={formData.businessOverview}
              onChange={handleInputChange}
              className={`form-textarea ${errors.businessOverview ? 'border-red-500' : ''}`}
              placeholder="Tell us about your business, your products, and your goals..."
              rows={5}
            />
            {errors.businessOverview && <div className="form-error">{errors.businessOverview}</div>}
            <div className="text-sm text-[#5A4A4A] mt-1">
              {formData.businessOverview.length}/50 minimum characters
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="logo" className="form-label">
              Logo (Optional)
            </label>
            <input
              type="file"
              id="logo"
              name="logo"
              accept="image/*"
              onChange={handleLogoChange}
              className="form-file-input"
            />
            {formData.logo && (
              <div className="mt-2">
                <div className="file-preview-item inline-block">
                  <img src={getFilePreviewUrl(formData.logo)} alt="Logo preview" />
                  <button
                    type="button"
                    onClick={removeLogo}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    aria-label="Remove logo"
                  >
                    <XMarkIcon className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-sm text-[#5A4A4A] mt-1">{formData.logo.name}</div>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="productImages" className="form-label">
              Product Images <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="productImages"
              name="productImages"
              accept="image/*"
              multiple
              onChange={handleProductImagesChange}
              className="form-file-input"
            />
            {errors.productImages && <div className="form-error">{errors.productImages}</div>}
            {formData.productImages.length > 0 && (
              <div className="file-preview mt-2">
                {formData.productImages.map((image, index) => (
                  <div key={index} className="file-preview-item">
                    <img src={getFilePreviewUrl(image)} alt={`Product ${index + 1}`} />
                    <button
                      type="button"
                      onClick={() => removeProductImage(index)}
                      aria-label={`Remove image ${index + 1}`}
                    >
                      <XMarkIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
            <div className="text-sm text-[#5A4A4A] mt-1">
              {formData.productImages.length} image(s) selected (max 5, 10MB per file)
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary w-full mt-6 text-lg py-4"
          >
            {isSubmitting ? (
              <>
                <span className="loading-spinner"></span>
                Sending...
              </>
            ) : (
              'Get My Free Preview'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;

