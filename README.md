# Aslase Portfolio Website

A modern, professional portfolio website featuring advanced animations, light/dark theme toggle, and responsive design.

## 🌟 Features

### Design & Theme
- **Light/Dark Mode Toggle**: Smooth transition between themes with persistent preference storage
- **Modern Color Palette**: Vibrant blue gradients matching your brand
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Professional Typography**: Using Inter and Space Grotesk fonts

### Animations & Interactivity
- **Scroll Animations**: Powered by AOS (Animate On Scroll) library
- **Image Hover Effects**: Parallax and scale effects on project images
- **Smooth Page Transitions**: Seamless navigation between sections
- **Cursor Following Effects**: Custom cursor with follower on desktop
- **Loading Animation**: Elegant gradient loader on page load
- **Gradient Animations**: Dynamic background gradients
- **Card Reveal Animations**: Staggered entrance animations
- **Tech Tag Animations**: Pulse effects
- **Ripple Effects**: Interactive button feedback
- **Micro-interactions**: Hover states on all interactive elements

### Content Sections
1. **Hero Section**: Bold headline with call-to-action buttons
2. **AI & Data Science Projects**: 17 AI/ML projects showcased
3. **Web Applications**: 11 full-stack projects
4. **Mobile Applications**: 6 mobile app projects
5. **WordPress & E-commerce**: 5 website projects
6. **Cybersecurity**: 3 security solutions
7. **IoT**: 7 Internet of Things projects
8. **UI/UX**: 9 design portfolio pieces
9. **Contact Section**: Email and phone contact information

## 📁 File Structure

```
portfolio-website/
├── index.html          # Main HTML file
├── styles.css          # Complete styling with theme system
├── script.js           # JavaScript with all animations
├── images/             # All project images
│   ├── aslase-logo.png    # Company logo
│   ├── slide2_img1.png    # AI section images
│   ├── slide3_img4.png
│   └── ... (80 images total)
└── README.md           # This file
```

## 🚀 Quick Deployment

### Option 1: Static Hosting (Recommended)

**Netlify / Vercel:**
1. Download and extract the ZIP file
2. Drag the folder to Netlify/Vercel
3. Your site is live in seconds!

**GitHub Pages:**
1. Create a new repository
2. Upload all files
3. Go to Settings > Pages
4. Select main branch
5. Your site is live!

### Option 2: Traditional Web Hosting

**Via cPanel:**
1. Login to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload all files
5. Extract if uploaded as ZIP
6. Access via your domain

**Via FTP:**
1. Connect via FileZilla or similar
2. Navigate to `public_html` or `www`
3. Upload all files and folders
4. Ensure images folder is uploaded correctly

### Option 3: Local Testing

**Using Python:**
```bash
cd portfolio-website
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using PHP:**
```bash
cd portfolio-website
php -S localhost:8000
```

**Using Node.js:**
```bash
npx serve
```

## 🛠️ Customization

### Changing Colors
Edit `styles.css` variables:
```css
:root {
    --accent-primary: #4f46e5;
    --accent-secondary: #7c3aed;
    --accent-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding Projects
1. Open `index.html`
2. Find the relevant section
3. Copy an existing project card
4. Update text and image path
5. Save and refresh

### Modifying Animations
Edit `script.js`:
```javascript
AOS.init({
    duration: 1000,  // Animation duration
    once: false,     // Repeat animations
    offset: 100      // Offset from viewport
});
```

### Updating Contact Info
Find the contact section in `index.html`:
```html
<a href="mailto:your-email@company.com">your-email@company.com</a>
<a href="tel:+1234567890">+123 456 7890</a>
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

## 🎨 Theme System

### Light Theme
- Clean, bright interface
- Subtle shadows
- Professional appearance

### Dark Theme  
- Dark backgrounds
- Enhanced contrast
- Same vibrant accents

Users can toggle between themes using the button in top-right corner. Preference is saved in browser.

## ⚡ Performance Features

- **Lazy Loading**: Images load as they enter viewport
- **Optimized Animations**: GPU-accelerated transforms
- **Debounced Events**: Optimized scroll/resize handlers
- **Minimal Dependencies**: Only AOS library used
- **Clean Code**: Well-organized and commented

## 🔧 Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Opera (latest)

## 📧 Contact Information

- **Email**: sales@aslase.com
- **Phone**: +971 50 236 3025

## 🚨 Troubleshooting

### Images Not Loading
1. Check that `images` folder is uploaded
2. Verify file paths are correct
3. Ensure folder structure is maintained
4. Check browser console for errors

### Theme Toggle Not Working
1. Clear browser cache
2. Check JavaScript is enabled
3. Open browser console for errors

### Mobile Menu Issues
1. Test on actual mobile device
2. Check viewport meta tag
3. Verify media queries in CSS

### Animations Not Working
1. Ensure AOS library is loaded
2. Check internet connection (for CDN)
3. Open browser console for errors

## 📚 Libraries Used

1. **AOS (Animate On Scroll)** v2.3.4
   - https://michalsnik.github.io/aos/
   
2. **Google Fonts**
   - Inter (body text)
   - Space Grotesk (headings)

## 🎯 Features Checklist

✅ 80 project images extracted  
✅ Company logo integrated  
✅ Light/Dark theme toggle  
✅ Smooth scroll navigation  
✅ Mobile-responsive design  
✅ AOS scroll animations  
✅ Image hover effects  
✅ Custom cursor (desktop)  
✅ Loading animation  
✅ Gradient animations  
✅ Card reveal effects  
✅ Ripple button effects  
✅ Performance optimized  
✅ Cross-browser compatible  
✅ SEO friendly structure  

## 🎨 Color Palette

### Brand Colors
- **Primary Blue**: #4f46e5
- **Secondary Purple**: #7c3aed
- **Gradient**: #667eea → #764ba2

### Light Mode
- Background: #ffffff
- Secondary BG: #f8f9fc
- Text: #1a1d2e

### Dark Mode
- Background: #0f1117
- Secondary BG: #1a1d2e
- Text: #f9fafb

## 📝 Image Attribution

All project images and company logo © Aslase. All rights reserved.

## 🔐 License

This website was created for Aslase. All content and branding are property of Aslase.

---

## 🚀 Ready to Launch!

Simply extract the ZIP file and upload to any web hosting service. The website is production-ready and fully functional!

**Need Help?**  
Contact: sales@aslase.com | +971 50 236 3025

---

**Built with ❤️ for Aslase**
