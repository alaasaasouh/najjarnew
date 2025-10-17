# Najjar Trading Portfolio Website

A professional, creative portfolio website featuring 3D effects, animations, and interactive elements.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **3D Animations**: Floating elements and smooth transitions
- **Interactive Projects**: Clickable project cards with detailed modal views
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Modern UI**: Gradient effects, glassmorphism, and professional styling

## File Structure

```
najjar-portfolio-html/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript for interactivity
├── assets/             # Images and media files
│   ├── 3d_asset_1.png
│   ├── 3d_asset_2.png
│   ├── 3d_asset_3.png
│   ├── image-002.png  # Najjar Aluminum logo
│   ├── image-004.png  # Glass & Mirror logo
│   ├── image-005.png  # Glass sheets
│   ├── image-006.png  # Decorative mirror
│   ├── image-007.png  # Quality control worker
│   ├── image-008.png  # Cutting machine
│   ├── image-009.png  # Polishing machine
│   ├── image-010.png  # Water jet machine
│   ├── image-011.png  # Drilling machine
│   ├── image-012.png  # EVA machine
│   └── image-013.png  # Glass tempering furnace
└── README.md           # This file
```

## How to Use

### Opening the Website Locally

1. **Double-click** `index.html` to open it in your default web browser
2. Or **right-click** `index.html` → Open with → Choose your preferred browser

### Hosting on a Web Server

1. Upload all files to your web hosting service
2. Ensure the folder structure is maintained
3. Access via your domain or hosting URL

### Popular Hosting Options

- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect to GitHub or upload directly
- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **Traditional Hosting**: Upload via FTP/SFTP to your server

## How to Modify

### Changing Images

1. **Locate the image** you want to change in the `assets/` folder
2. **Replace the file** with your new image (keep the same filename)
3. Or **add a new image** and update the reference in the code:
   - For hero/background images: Edit `index.html` and `styles.css`
   - For project images: Edit the `projects` array in `script.js`
   - For section images: Edit the `<img>` tags in `index.html`

**Example**: To change the About Us image:
- Find `<img src="assets/image-007.png" alt="Quality Control Worker">` in `index.html`
- Replace `image-007.png` with your new image filename

### Changing Text Content

1. **Open** `index.html` in any text editor (VS Code, Notepad++, Sublime Text, etc.)
2. **Find** the text you want to change
3. **Edit** the text between HTML tags
4. **Save** the file

**Example**: To change the hero text:
```html
<p class="hero-text">Excellence in Aluminum, Glass & Mirror Solutions Since 1976</p>
```
Change the text between `<p>` and `</p>`

### Adding or Removing Projects

1. **Open** `script.js` in a text editor
2. **Find** the `projects` array at the top of the file
3. **Add** a new project object:
```javascript
{
    name: 'Your Project Name',
    location: 'Location, Country',
    type: 'Project Type',
    description: 'Project description here',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    image: 'assets/your-image.png'
}
```
4. **Remove** a project by deleting its entire object (including the comma)
5. **Save** the file

### Changing Colors

1. **Open** `styles.css` in a text editor
2. **Find** the `:root` section at the top
3. **Modify** the color variables:
```css
:root {
    --primary-blue: #60a5fa;      /* Change this hex code */
    --primary-purple: #a78bfa;    /* Change this hex code */
    --primary-pink: #f472b6;      /* Change this hex code */
    ...
}
```
4. **Save** the file

### Changing Contact Information

1. **Open** `index.html` in a text editor
2. **Find** the Contact Section (search for `id="contact"`)
3. **Update** phone, email, and social media links:
```html
<a href="tel:+9613635965" class="contact-card">
    ...
    <p class="contact-info">+961 3 635 965</p>
</a>
```
4. **Save** the file

## Tips for Beginners

- **Always make a backup** before making changes
- **Test locally** before uploading to your server
- **Use a code editor** like VS Code for syntax highlighting
- **Check the browser console** (F12) for any errors
- **Maintain the file structure** - don't move files around

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Opera: ✅ Full support
- IE11: ⚠️ Limited support (animations may not work)

## Support

For questions or issues, please contact:
- Email: Najjartrading12@gmail.com
- Phone: +961 3 635 965
- Instagram: @najjartrading

---

© 2024 Najjar Trading. All rights reserved.
