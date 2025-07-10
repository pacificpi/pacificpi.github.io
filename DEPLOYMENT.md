
# GitHub Pages Deployment Guide

This project is configured to be deployed on GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Update Repository Name**: In `vite.config.ts`, replace `your-repo-name` with your actual GitHub repository name:
   ```typescript
   base: mode === 'production' ? '/your-actual-repo-name/' : '/',
   ```

2. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "GitHub Actions" as the source

3. **Push to Main Branch**: The deployment will trigger automatically when you push to the main branch.

## Important Notes

- The site will be available at: `https://yourusername.github.io/your-repo-name/`
- If using a custom domain, set `base: '/'` in vite.config.ts instead
- The 404.html file handles client-side routing for single-page applications
- Build files are automatically generated in the `dist` folder

## Manual Deployment

If you prefer manual deployment:

1. Run `npm run build`
2. Push the `dist` folder contents to the `gh-pages` branch
3. Enable GitHub Pages to serve from the `gh-pages` branch

## Troubleshooting

- If routes don't work, ensure the base path in vite.config.ts matches your repository name
- For custom domains, set the base path to '/'
- Check that GitHub Actions has the necessary permissions in your repository settings
