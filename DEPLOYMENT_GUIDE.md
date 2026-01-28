# Aslase Portfolio - Vercel Deployment Guide

## Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Extract the ZIP file** to a folder on your computer

2. **Go to Vercel**: Visit https://vercel.com and sign up/login
   - You can sign up with GitHub, GitLab, or Bitbucket

3. **Create New Project**:
   - Click "Add New..." → "Project"
   - Click "Browse" and select your portfolio folder
   - Or drag and drop the folder

4. **Configure Project**:
   - Framework Preset: Select "Other"
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: (leave empty)

5. **Deploy**:
   - Click "Deploy"
   - Wait for deployment (usually takes 1-2 minutes)
   - Your site will be live at: `https://your-project-name.vercel.app`

6. **Custom Domain** (Optional):
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., portfolio.aslase.com)
   - Follow the DNS configuration instructions

---

## Option 2: Deploy via GitHub (Recommended for Updates)

1. **Create GitHub Repository**:
   - Go to https://github.com/new
   - Create a new repository (e.g., "aslase-portfolio")
   - Don't initialize with README

2. **Upload Files to GitHub**:
   - Extract your ZIP file
   - Open terminal/command prompt in that folder
   - Run these commands:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/aslase-portfolio.git
   git push -u origin main
   ```

3. **Connect to Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your GitHub repository
   - Click "Import"

4. **Configure & Deploy**:
   - Framework Preset: Other
   - Click "Deploy"
   - Your site will be live!

5. **Auto-Deploy**: 
   - Any future changes pushed to GitHub will automatically deploy to Vercel

---

## Option 3: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   - Navigate to your portfolio folder
   ```bash
   cd /path/to/portfolio
   vercel
   ```

4. **Follow Prompts**:
   - Set up and deploy: Y
   - Which scope: (select your account)
   - Link to existing project: N
   - What's your project's name: aslase-portfolio
   - In which directory is your code located: ./
   - Want to override the settings: N

5. **Production Deploy**:
   ```bash
   vercel --prod
   ```

---

## Post-Deployment Checklist

- [ ] Test email link (opens email client)
- [ ] Test phone/WhatsApp link (opens WhatsApp)
- [ ] Test "Start Your Project" button (opens WhatsApp)
- [ ] Test website link in footer
- [ ] Check all images load correctly
- [ ] Test theme toggle (dark/light mode)
- [ ] Test responsive design on mobile
- [ ] Verify all project links work

---

## Custom Domain Setup

### If you want to use aslase.com:

1. **In Vercel Dashboard**:
   - Go to your project
   - Settings → Domains
   - Add domain: `aslase.com` or `portfolio.aslase.com`

2. **Update DNS Settings** (at your domain registrar):
   - For root domain (aslase.com):
     - Type: A Record
     - Name: @
     - Value: 76.76.21.21

   - For subdomain (portfolio.aslase.com):
     - Type: CNAME
     - Name: portfolio
     - Value: cname.vercel-dns.com

3. **Wait for DNS Propagation** (5-30 minutes)

4. **Enable HTTPS** (automatic in Vercel)

---

## Environment Variables (if needed)

If you need to add any API keys or environment variables:
1. Go to Project Settings → Environment Variables
2. Add your variables
3. Redeploy your project

---

## Troubleshooting

**Images not loading?**
- Make sure the `images` folder is included in your deployment
- Check that image paths are relative (e.g., `images/logo.png`)

**Links not working?**
- Verify all href attributes are correct
- Check that WhatsApp number format is correct: `https://wa.me/971502363025`

**CSS not applying?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that `styles.css` is in the root directory

---

## Support

For Vercel support: https://vercel.com/support
For deployment issues: Check Vercel deployment logs in the dashboard

---

**Your Portfolio is Ready to Deploy! 🚀**

Choose the deployment method that works best for you and follow the steps above.
