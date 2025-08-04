# Modern Portfolio Website

A beautiful, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by Brittany Chiang's design with modern features including dark mode, smooth animations, and a markdown-based blog.

## ✨ Features

- **Modern Design**: Clean, professional design inspired by Brittany Chiang's portfolio
- **Dark/Light Mode**: Toggle between dark and light themes
- **Responsive**: Fully responsive design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Blog System**: Markdown-based blog with syntax highlighting
- **Contact Form**: Functional contact form with validation
- **Visitor Analytics**: Simple visitor tracking system
- **SEO Optimized**: Built with Next.js for excellent SEO performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js App Router
│   ├── blog/              # Blog pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── analytics-provider.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── internships.tsx
│   ├── projects.tsx
│   └── theme-provider.tsx
├── content/               # Blog content
│   └── blog/
├── lib/                   # Utility functions
│   └── blog.ts
├── public/                # Static assets
└── package.json
```

## 🎨 Customization

### Personal Information

Update your personal information in the following files:

1. **Hero Section** (`components/hero.tsx`):
   - Change "Your Name" to your actual name
   - Update the tagline and description
   - Add your social media links

2. **Header** (`components/header.tsx`):
   - Update the logo text

3. **Internships** (`components/internships.tsx`):
   - Replace the sample internship data with your actual experience

4. **Projects** (`components/projects.tsx`):
   - Update the projects array with your actual projects
   - Add your GitHub links and live demos

5. **Contact** (`components/contact.tsx`):
   - Update email, phone, and location information

6. **Footer** (`components/footer.tsx`):
   - Update social media links
   - Change the copyright name

### Styling

The website uses Tailwind CSS with a custom color palette. You can customize colors in `tailwind.config.js`:

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

### Blog Posts

Add new blog posts by creating markdown files in `content/blog/`:

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

## 📧 Contact Form Setup

The contact form currently simulates submission. To make it functional, you have several options:

### Option 1: Formspree (Recommended for beginners)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update the form action in `components/contact.tsx`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const formData = new FormData(e.target as HTMLFormElement)
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    
    if (response.ok) {
      setSubmitStatus('success')
    } else {
      setSubmitStatus('error')
    }
  } catch (error) {
    setSubmitStatus('error')
  }
}
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://emailjs.com)
2. Configure your email service
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the contact form to use EmailJS

### Option 3: Backend API

Create your own API endpoint to handle form submissions and send emails using services like Nodemailer.

## 📊 Analytics Setup

The website includes a basic analytics system that tracks:
- Visitor IP (if available)
- User agent
- Timestamp
- Session duration

### Google Sheets Integration

To store analytics data in Google Sheets:

1. Create a Google Sheet
2. Set up a Google Apps Script to receive data
3. Update the analytics provider to send data to your script

### Alternative: Database Storage

You can modify `components/analytics-provider.tsx` to send data to your preferred database or analytics service.

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

### Adding New Features

1. **New Sections**: Add new components in the `components/` directory
2. **New Pages**: Create new pages in the `app/` directory
3. **Styling**: Use Tailwind CSS classes or add custom CSS in `globals.css`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact me directly.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
