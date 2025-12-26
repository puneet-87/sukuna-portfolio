# Deployment Guide

This project has been cleaned of Replit references and configured for Vercel deployment.

## Prerequisites

- Node.js & npm (or yarn/pnpm)
- Git
- A Vercel account
- A GitHub account

## Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Environment Variables**:
    -   Copy `.env.example` to `.env`.
    -   Update `DATABASE_URL` with your PostgreSQL connection string (e.g., from Neon, Supabase, or Vercel Postgres).

## Deployment to Vercel

### Option 1: Via GitHub (Recommended)

1.  **Initialize Git**:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Push to GitHub**:
    -   Create a new repository on GitHub.
    -   Run the commands shown by GitHub to push your code:
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
        git branch -M main
        git push -u origin main
        ```

3.  **Deploy on Vercel**:
    -   Go to [Vercel Dashboard](https://vercel.com/new).
    -   Import your GitHub repository.
    -   **Important**: Add `DATABASE_URL` in the "Environment Variables" section during deployment.
    -   Click **Deploy**.

### Option 2: Via Vercel CLI

1.  Install Vercel CLI: `npm i -g vercel`
2.  Run `vercel` in this directory.

## Configuration Details

-   **Frontend**: Built with Vite (`npm run build:client`).
-   **Backend**: Refactored to `api/index.ts` for Vercel Serverless Functions.
-   **Routing**: `vercel.json` handles routing between API and Frontend.

## Troubleshooting

-   If you see database errors, ensure your `DATABASE_URL` is correct/reachable.
-   This app uses `drizzle-orm` and `pg`. Ensure your database schema is pushed (`npm run db:push`).
