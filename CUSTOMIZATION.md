# TransactFlow Customization Guide

A comprehensive guide to customize TransactFlow to match your brand and business needs.

## 🎨 Brand Customization

### **1. Color Scheme**

The website uses a professional green color palette. To customize:

#### **Primary Colors**
```css
/* In src/styles/global.css or component CSS files */
:root {
  --primary-color: #103713;    /* Main green - Change this */
  --secondary-color: #0A4834;  /* Dark green - Change this */
  --accent-color: #9F8151;     /* Gold accent - Change this */
  --background-color: #E2DBD0; /* Light background - Change this */
  --text-color: #333333;       /* Text color - Change this */
  --white: #ffffff;            /* White - Change this */
  --gray-light: #f5f5f5;       /* Light gray - Change this */
}
```

#### **Quick Color Schemes**

**Blue Professional:**
```css
--primary-color: #1e40af;
--secondary-color: #1e3a8a;
--accent-color: #f59e0b;
--background-color: #f8fafc;
```

**Purple Modern:**
```css
--primary-color: #7c3aed;
--secondary-color: #5b21b6;
--accent-color: #fbbf24;
--background-color: #faf5ff;
```

**Red Corporate:**
```css
--primary-color: #dc2626;
--secondary-color: #991b1b;
--accent-color: #f59e0b;
--background-color: #fef2f2;
```

### **2. Typography**

#### **Change Fonts**
1. **Update Google Fonts** in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **Update CSS** in `src/styles/global.css`:
```css
body {
  font-family: 'Inter', sans-serif;
}
```

#### **Popular Font Combinations**
- **Inter + Roboto** - Modern, clean
- **Poppins + Open Sans** - Friendly, approachable
- **Montserrat + Lato** - Professional, elegant
- **Playfair Display + Source Sans Pro** - Sophisticated, editorial

### **3. Logo and Branding**

#### **Replace Logo**
1. **Replace the logo file**:
   - Replace `src/assets/images/logos/success-rate.png` with your logo
   - Recommended size: 200x50px (PNG with transparent background)

2. **Update logo references** in `src/components/Navbar.jsx`:
```javascript
import yourLogo from '../assets/images/logos/your-logo.png';

// Update the logo usage
<img src={yourLogo} alt="Your Company Logo" />
```

3. **Update favicon**:
   - Replace `public/favicon.ico` with your favicon
   - Create multiple sizes: 16x16, 32x32, 48x48, 192x192, 512x512

#### **Brand Colors in Components**
Update these files with your brand colors:
- `src/styles/components/Navbar.css`
- `src/styles/components/Footer.css`
- `src/styles/pages/Home.css`
- `src/styles/pages/About.css`

## 📝 Content Customization

### **1. Company Information**

#### **Update Profile Data**
Edit `src/data/profile.js`:
```javascript
const profile = {
  name: 'Your Company Name',
  email: 'contact@yourcompany.com',
  phone: '+1 (555) 123-4567',
  website: 'yourcompany.com',
  address: '123 Business Street, City, State 12345',
  description: 'Your company description here...',
  founded: '2020',
  employees: '50+',
  industry: 'Technology Consulting'
};
```

#### **Update Contact Information**
Edit `src/pages/Contact.jsx`:
```javascript
const contactInfo = {
  address: '123 Business Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'contact@yourcompany.com',
  hours: 'Monday - Friday: 9:00 AM - 6:00 PM'
};
```

### **2. Hero Section**

#### **Update Hero Content**
Edit `src/pages/Home.jsx`:
```javascript
// Update hero text
<p className="welcome-text">WELCOME TO YOUR SOLUTIONS</p>
<h1 className="hero-title">Your Company Tagline</h1>
<p className="hero-subtitle">Your company description and value proposition.</p>
```

#### **Replace Hero Image**
1. Replace `src/assets/images/hero/hero_image.jpeg`
2. Recommended size: 800x600px
3. Format: JPG or WebP for better performance

### **3. Services/Solutions**

#### **Update Services**
Edit `src/components/Features/Features.jsx`:
```javascript
const features = [
  {
    icon: yourServiceIcon,
    title: 'Your Service 1',
    description: 'Description of your first service offering.',
  },
  {
    icon: yourServiceIcon2,
    title: 'Your Service 2',
    description: 'Description of your second service offering.',
  },
  // Add more services...
];
```

### **4. Team Section**

#### **Update Team Members**
Edit `src/pages/About.jsx`:
```javascript
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/images/team/john-doe.jpg",
    bio: "John has over 10 years of experience in...",
    socialLinks: {
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      email: "john@company.com"
    }
  },
  // Add more team members...
];
```

### **5. Blog Content**

#### **Update Blog Posts**
Edit `src/data/blogPosts.json`:
```json
[
  {
    "id": 1,
    "title": "Your Blog Title",
    "excerpt": "Your blog excerpt that appears in the preview...",
    "content": "Your full blog content with detailed information...",
    "author": "Your Name",
    "date": "2024-01-15",
    "image": "/images/blog/your-blog-image.jpg",
    "tags": ["business", "strategy", "technology"],
    "readTime": "5 min read"
  }
]
```

### **6. Testimonials**

#### **Update Testimonials**
Edit `src/components/Testimonials/TestimonialsSection.jsx`:
```javascript
const testimonials = [
  {
    name: 'Jane Smith',
    role: 'CEO, Tech Solutions Inc.',
    photo: 'https://yourdomain.com/images/testimonials/jane-smith.jpg',
    quote: 'Your company helped us achieve amazing results...'
  },
  // Add more testimonials...
];
```

## 🏗️ Layout Customization

### **1. Navigation Menu**

#### **Update Navigation Links**
Edit `src/components/Navbar.jsx`:
```javascript
const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' }, // Add your pages
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' }
];
```

### **2. Footer Customization**

#### **Update Footer Content**
Edit `src/components/Footer.jsx`:
```javascript
const footerData = {
  companyName: 'Your Company Name',
  address: '123 Business Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  email: 'contact@yourcompany.com',
  socialLinks: {
    linkedin: 'https://linkedin.com/company/yourcompany',
    twitter: 'https://twitter.com/yourcompany',
    facebook: 'https://facebook.com/yourcompany',
    instagram: 'https://instagram.com/yourcompany'
  }
};
```

### **3. Page Layouts**

#### **Add New Pages**
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Create corresponding CSS file in `src/styles/pages/`

Example new page:
```javascript
// src/pages/Services.jsx
import React from 'react';
import '../styles/pages/Services.css';

function Services() {
  return (
    <main className="services-page">
      <h1>Our Services</h1>
      {/* Your services content */}
    </main>
  );
}

export default Services;
```

## 🎯 Advanced Customization

### **1. Component Styling**

#### **Custom CSS Classes**
Add your custom styles in the appropriate CSS files:
```css
/* src/styles/components/YourComponent.css */
.your-custom-class {
  background: var(--primary-color);
  color: var(--white);
  padding: 1rem;
  border-radius: 8px;
}
```

### **2. Animations**

#### **Add Custom Animations**
```css
/* In your component CSS */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}
```

### **3. Interactive Elements**

#### **Add Hover Effects**
```css
.custom-button {
  transition: all 0.3s ease;
}

.custom-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
```

## 📱 Mobile Customization

### **1. Mobile-Specific Styles**
```css
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
    line-height: 1.2;
  }
  
  .navbar-link {
    padding: 1rem 0;
  }
}
```

### **2. Touch-Friendly Elements**
```css
/* Ensure touch targets are at least 44px */
.touch-target {
  min-height: 44px;
  min-width: 44px;
}
```

## 🔧 Technical Customization

### **1. Environment Variables**
Create `.env` file:
```env
VITE_APP_TITLE=Your Company Name
VITE_APP_DESCRIPTION=Your company description
VITE_CONTACT_EMAIL=contact@yourcompany.com
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### **2. Meta Tags**
Update `index.html`:
```html
<meta name="description" content="Your company description">
<meta name="keywords" content="your, keywords, here">
<meta property="og:title" content="Your Company Name">
<meta property="og:description" content="Your company description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

### **3. SEO Optimization**
Add structured data in `index.html`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Your Company Name",
  "url": "https://yourdomain.com",
  "logo": "https://yourdomain.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service"
  }
}
</script>
```

## 🎨 Design System

### **1. Spacing Scale**
```css
:root {
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
}
```

### **2. Typography Scale**
```css
:root {
  --text-xs: 0.75rem;      /* 12px */
  --text-sm: 0.875rem;     /* 14px */
  --text-base: 1rem;       /* 16px */
  --text-lg: 1.125rem;     /* 18px */
  --text-xl: 1.25rem;      /* 20px */
  --text-2xl: 1.5rem;      /* 24px */
  --text-3xl: 1.875rem;    /* 30px */
  --text-4xl: 2.25rem;     /* 36px */
}
```

### **3. Border Radius**
```css
:root {
  --radius-sm: 0.25rem;    /* 4px */
  --radius-md: 0.5rem;     /* 8px */
  --radius-lg: 0.75rem;    /* 12px */
  --radius-xl: 1rem;       /* 16px */
}
```

## 🚀 Performance Tips

### **1. Image Optimization**
- Use WebP format for better compression
- Implement lazy loading for images
- Use appropriate image sizes

### **2. Code Splitting**
- Components are already lazy-loaded
- Consider splitting large pages into smaller components

### **3. CSS Optimization**
- Use CSS variables for consistent theming
- Minimize CSS bundle size
- Use critical CSS for above-the-fold content

## 📋 Customization Checklist

- [ ] Update company name and information
- [ ] Replace logo and favicon
- [ ] Update color scheme
- [ ] Customize typography
- [ ] Update hero section content
- [ ] Replace team photos and information
- [ ] Update services/solutions
- [ ] Add real testimonials
- [ ] Update blog content
- [ ] Customize contact information
- [ ] Update meta tags and SEO
- [ ] Test on mobile devices
- [ ] Optimize images
- [ ] Test performance

---

**Need help with customization?** Check the [SETUP.md](SETUP.md) guide or create an issue on GitHub.

**Happy customizing! 🎨** 