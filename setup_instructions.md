# Maison de Parfum - Setup Instructions

Welcome to the Maison de Parfum project! This is a modern, luxury e-commerce application built with Next.js (App Router), Tailwind CSS v4, Prisma, NextAuth, and Stripe.

## Prerequisites
- Node.js 18+ (20+ recommended)
- npm or yarn
- Docker (optional, for deployment)

## Local Development Initialization

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   The `.env` file is already created for local SQLite development. If you wish to switch to PostgreSQL, comment out the SQLite URL and uncomment the PostgreSQL URL, then start the provided `docker-compose.yml`.

3. **Database Setup**
   Ensure your database schemas are synchronized:
   ```bash
   npx prisma db push
   ```
   *Optional: To view and edit your local database data, you can run `npx prisma studio`.*

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Docker)

This project has been optimized for Docker deployments via the Next.js `standalone` output trace.
A `Dockerfile` has been provided which uses a multi-stage build to keep the image tiny.

1. **Build the Docker Image**
   ```bash
   docker build -t maison-de-parfum .
   ```

2. **Run the Container**
   ```bash
   docker run -p 3000:3000 --env-file .env maison-de-parfum
   ```

## Key Technologies
- **Next.js 15 (App Router)** - React Framework
- **Tailwind CSS v4** - Styling & responsive grids
- **Framer Motion** - Micro-interactions and fluid animations
- **Prisma** - ORM for database interaction
- **Zustand** - Local state management (Shopping Cart)
- **Lucide React** - Minimalist, modern iconography
