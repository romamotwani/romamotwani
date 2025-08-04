# Portfolio Website Setup Guide

This guide will help you set up and customize your modern portfolio website.

## 🚀 Quick Start

### 1. Prerequisites
- Node.js 18+ installed
- Git installed
- A code editor (VS Code recommended)

### 2. Installation Steps

```bash
# Clone the repository (if you haven't already)
git clone <your-repo-url>
cd portfolio-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

### 3. Access Your Website
Open your browser and navigate to `http://localhost:3000`

## 🎨 Customization Guide

### Personal Information Updates

#### 1. Update Your Name and Basic Info
Edit these files to replace "Your Name" with your actual information:

**`components/hero.tsx`** (lines 45, 52, 58):
```typescript
// Change "Your Name" to your actual name
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-6">
  Your Actual Name.
</h1>

// Update the tagline
<h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dark-700 dark:text-dark-300 mb-8">
  I build things for the web.
</h2>

// Update the description
<p className="text-lg md:text-xl text-dark-600 dark:text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed">
  I'm a software engineer specializing in building exceptional digital experiences. 
  Currently, I'm focused on building accessible, human-centered products.
</p>
```

**`components/header.tsx`** (line 42):
```typescript
<div className="text-xl font-bold gradient-text">
  Your Actual Name
</div>
```

#### 2. Update Social Media Links
In `components/hero.tsx` (lines 95-115), update the social media URLs:
```typescript
<a href="https://github.com/your-actual-username" target="_blank" rel="noopener noreferrer">
  <Github className="w-6 h-6" />
</a>
<a href="https://linkedin.com/in/your-actual-username" target="_blank" rel="noopener noreferrer">
  <Linkedin className="w-6 h-6" />
</a>
<a href="https://twitter.com/your-actual-username" target="_blank" rel="noopener noreferrer">
  <Twitter className="w-6 h-6" />
</a>
```

#### 3. Update Internships/Experience
Edit `components/internships.tsx` and replace the sample data with your actual experience:

```typescript
const internships = [
  {
    id: 1,
    company: 'Your Company Name',
    position: 'Your Job Title',
    location: 'City, State/Country',
    duration: 'Month Year - Month Year',
    description: 'Your job description and achievements.',
    technologies: ['Technology1', 'Technology2', 'Technology3'],
    link: 'https://company-website.com', // or null if no link
  },
  // Add more experiences...
]
```

#### 4. Update Projects
Edit `components/projects.tsx` and replace the sample projects with your actual projects:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Description of your project and what it does.',
    image: '/path/to/project-image.jpg', // or use placeholder
    technologies: ['Technology1', 'Technology2', 'Technology3'],
    github: 'https://github.com/yourusername/project-repo',
    live: 'https://your-project-demo.com', // or null if no live demo
    featured: true, // Set to true for featured projects
  },
  // Add more projects...
]
```

#### 5. Update Contact Information
Edit `components/contact.tsx` and update your contact details:

```typescript
// Update email address (line 108)
<a href="mailto:your-actual-email@example.com" className="text-primary-600 dark:text-primary-400 hover:underline">
  your-actual-email@example.com
</a>

// Update contact details (lines 130-150)
<div>
  <h4 className="font-medium text-dark-900 dark:text-white">Email</h4>
  <p className="text-dark-600 dark:text-dark-400">your-actual-email@example.com</p>
</div>

<div>
  <h4 className="font-medium text-dark-900 dark:text-white">Phone</h4>
  <p className="text-dark-600 dark:text-dark-400">+1 (555) 123-4567</p>
</div>

<div>
  <h4 className="font-medium text-dark-900 dark:text-white">Location</h4>
  <p className="text-dark-600 dark:text-dark-400">Your City, State/Country</p>
</div>
```

#### 6. Update Footer
Edit `components/footer.tsx` and update the social links and copyright:

```typescript
// Update social links (lines 15-35)
<a href="https://github.com/your-actual-username" target="_blank" rel="noopener noreferrer">
  <Github className="w-6 h-6" />
</a>

// Update copyright (line 40)
<p className="text-dark-400 mb-4">
  © {currentYear} Your Actual Name. All rights reserved.
</p>
```

#### 7. Update Metadata
Edit `app/layout.tsx` and update the metadata:

```typescript
export const metadata: Metadata = {
  title: 'Your Actual Name - Portfolio',
  description: 'Personal portfolio showcasing projects, experience, and thoughts on technology.',
  keywords: ['portfolio', 'developer', 'software engineer', 'web development'],
  authors: [{ name: 'Your Actual Name' }],
  openGraph: {
    title: 'Your Actual Name - Portfolio',
    description: 'Personal portfolio showcasing projects, experience, and thoughts on technology.',
    type: 'website',
  },
}
```

## 📝 Blog Setup

### Adding New Blog Posts
1. Create a new markdown file in `content/blog/` directory
2. Use the following frontmatter format:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
excerpt: "A brief description of your blog post"
tags: ["Tag1", "Tag2", "Tag3"]
---

# Your Blog Post Content

Write your blog post content here using markdown...
```

### Blog Features
- Supports full markdown syntax
- Automatic read time calculation
- Tag system for categorization
- SEO optimized URLs
- Syntax highlighting for code blocks

## 📧 Contact Form Setup

### Option 1: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint URL
4. Update `components/contact.tsx` line 75:

```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
})
```

### Option 2: EmailJS
1. Sign up at [emailjs.com](https://emailjs.com)
2. Install EmailJS: `npm install @emailjs/browser`
3. Configure your email service
4. Update the contact form to use EmailJS

### Option 3: Custom Backend
Create your own API endpoint to handle form submissions.

## 📊 Analytics Setup

The website includes basic visitor tracking. To enhance it:

### Google Sheets Integration
1. Create a Google Sheet
2. Set up a Google Apps Script to receive data
3. Update `components/analytics-provider.tsx` to send data to your script

### Alternative Analytics
You can integrate with:
- Google Analytics
- Plausible Analytics
- Simple Analytics
- Or any other analytics service

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Deploy to your preferred platform

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### File Structure
```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── content/               # Blog content
├── lib/                   # Utility functions
└── public/                # Static assets
```

## 🎨 Styling Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Dark mode colors
  },
  accent: {
    // Accent colors
  }
}
```

### Fonts
Update fonts in `tailwind.config.js`:

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

## 🔧 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   lsof -ti:3000 | xargs kill -9
   # Or use a different port
   npm run dev -- -p 3001
   ```

2. **Build errors**
   ```bash
   # Clear Next.js cache
   rm -rf .next
   npm run build
   ```

3. **Styling issues**
   ```bash
   # Rebuild Tailwind CSS
   npx tailwindcss -i ./app/globals.css -o ./app/output.css --watch
   ```

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify your Node.js version (18+)
4. Check the file paths and imports

## 🎉 Congratulations!

Your portfolio website is now ready! Make sure to:
- Test all sections thoroughly
- Update all personal information
- Add your actual projects and experience
- Set up the contact form
- Deploy to your preferred platform

Happy coding! 🚀