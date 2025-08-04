---
title: "Getting Started with Next.js 14"
date: "2024-01-15"
excerpt: "Learn how to build modern web applications with Next.js 14, including the new App Router and server components."
tags: ["Next.js", "React", "Web Development"]
---

# Getting Started with Next.js 14

Next.js 14 is the latest version of the popular React framework that brings significant improvements and new features. In this post, we'll explore the key features and how to get started with building modern web applications.

## What's New in Next.js 14?

### App Router
The App Router is the new recommended way to build applications in Next.js. It provides:

- **Server Components**: Components that run on the server by default
- **Layouts**: Shared UI that wraps pages
- **Loading UI**: Built-in loading states
- **Error Boundaries**: Graceful error handling

### Server Actions
Server Actions allow you to run async code directly on the server from your components:

```typescript
async function createPost(formData: FormData) {
  'use server'
  
  const title = formData.get('title')
  const content = formData.get('content')
  
  // Save to database
  await savePost({ title, content })
}
```

## Setting Up Your First Project

1. **Create a new project**:
   ```bash
   npx create-next-app@latest my-app --typescript --tailwind --app
   ```

2. **Navigate to your project**:
   ```bash
   cd my-app
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## Project Structure

With the App Router, your project structure looks like this:

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/
│   └── page.tsx       # About page
├── blog/
│   ├── layout.tsx     # Blog layout
│   ├── page.tsx       # Blog list
│   └── [slug]/
│       └── page.tsx   # Individual blog post
└── globals.css        # Global styles
```

## Key Concepts

### Server Components
Server Components are the default in the App Router. They run on the server and can directly access backend resources:

```typescript
// app/posts/page.tsx
async function getPosts() {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function PostsPage() {
  const posts = await getPosts()
  
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  )
}
```

### Client Components
When you need interactivity, use the `'use client'` directive:

```typescript
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  )
}
```

## Styling with Tailwind CSS

Next.js 14 works seamlessly with Tailwind CSS:

```typescript
export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">
          Welcome to Next.js 14
        </h1>
        <p className="text-xl">
          Build amazing web applications with React
        </p>
      </div>
    </div>
  )
}
```

## Deployment

Deploying your Next.js 14 application is straightforward:

1. **Vercel** (Recommended):
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Other platforms**: Build your app and deploy the output:
   ```bash
   npm run build
   npm start
   ```

## Conclusion

Next.js 14 brings powerful new features that make building modern web applications easier and more efficient. The App Router, Server Components, and improved performance make it an excellent choice for your next project.

Start building with Next.js 14 today and experience the future of React development!