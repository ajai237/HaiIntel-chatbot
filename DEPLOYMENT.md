# Deployment Guide

## Quick Deploy to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI globally:

```bash
npm i -g vercel
```

2. Login to Vercel:

```bash
vercel login
```

3. Deploy from project directory:

```bash
cd haiintel-chat
vercel --prod
```

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your repository to Vercel at [vercel.com](https://vercel.com)
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. Deploy automatically on every push

### Option 3: Manual Upload

1. Build the project:

```bash
npm run build
```

2. Upload the `.next` folder to your hosting provider
3. Configure your server to serve Next.js static files

## Environment Configuration

No environment variables are required for this demo implementation.

## Performance Optimization

The project is already optimized for production with:

- Static generation where possible
- Optimized images and assets
- Efficient bundle splitting
- Minimal JavaScript footprint

## Custom Domain

To use a custom domain:

1. Add your domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificates are automatically provisioned

## Monitoring

Vercel provides built-in analytics and monitoring for:

- Performance metrics
- Error tracking
- User analytics
- Core Web Vitals
