# TechManthan Official Website

Welcome to the official website repository for **TechManthan**, a platform showcasing our projects, team, and vision.

---

## 🚀 Project Overview

This project is the **official website of TechManthan**, built with:

- **Next.js 16.1.1** - React framework for production
- **Sass (SCSS)** - Advanced CSS styling
- **React 19** - Latest React library
- **Framer Motion** - Animation library
- **Nodemailer** - Email service for contact forms

The website features multiple pages such as Home, About Us, ARC, Products, Solutions, Careers, Contact, and more, all designed to be responsive and user-friendly. It includes career portals, internship programs, and product showcases.

---

## 🛠 Getting Started

To run the project locally:

### 1️⃣ Clone and Install

```bash
git clone https://gitlab.com/tech-manthan-nepal/techmanthan-website.git
cd techmanthan-website
npm install
npm run dev
```

### 2️⃣ Environment Setup

We use environment variables for sensitive configurations such as email sending (Contact Form & Newsletter Subscription).

A sample configuration is provided in `.env.example`.  
To set up your environment:

1. Duplicate `.env.example` and rename it to `.env.local`

   ```bash
   cp .env.example .env.local
   ```

2. Open `.env.local` and update the variables with your own credentials:

   ```env
   # Email Configuration for Contact Form & Subscription

   # Your Gmail address (or SMTP-compatible email address)
   EMAIL_USER=your_email@gmail.com

   # Gmail App Password or SMTP password
   EMAIL_PASS=your_app_password
   ```

**Note:**

- If using Gmail, you must enable **2-Step Verification** and generate an **App Password** (regular password will not work).
- For other email providers, ensure they support SMTP and update the `nodemailer` config accordingly.

---

### 3️⃣ Run the Development Server

```bash
npm run dev
```

Then visit: `http://localhost:3000`

---

## 🚢 Deployment (Netlify)

### Option A: Netlify UI (Git-connected)

1. Push your code to a Git host (GitLab/GitHub).
2. In Netlify, choose **Add new site → Import an existing project** and connect the repo.
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: .next
   - Functions directory: .netlify/functions (auto-created)
4. Environment variables (Site settings → Environment variables): add `EMAIL_USER` and `EMAIL_PASS` to match your `.env.local`.
5. Deploy. Netlify’s Next.js runtime will auto-detect the framework and create serverless functions for the API routes.

### Option B: Netlify CLI (manual deploy)

```bash
npm install -g netlify-cli
netlify login
netlify init          # link or create the site
netlify deploy --build --prod
```

Notes:

- Use Node.js 18 or newer in Netlify (Site settings → Build & deploy → Environment → Node version) to match Next.js 15 requirements.
- If you rotate credentials, update them in Netlify env vars and redeploy to refresh the functions.
- The generated static assets live in .next and serverless outputs in .netlify/functions; Netlify handles routing automatically for the app router.

---

## 🧱 Technologies Used

- Next.js
- React
- Sass (SCSS)
- React Icons
- Framer Motion (animations)
- Zod + React Hook Form (form validation)
- Nodemailer (email sending)

---

## 📝 Features

- Server-side rendering
- Component-based structure
- Responsive layout
- Hero section with carousel
- Flip card team section
- Reusable Header and Footer
- Contact Form with email sending
- Newsletter Subscription with email sending

---

## 📁 Project Structure

```
/components   - Reusable components
/pages        - Page components (Home, About, etc.)
/styles       - SCSS stylesheets
/public       - Static assets
```

## 📈 Project Status

Active development is ongoing.
