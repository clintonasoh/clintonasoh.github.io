# My Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Perfect for showcasing your projects and professional profile.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections**:
  - Home/Hero section with social links
  - About section with statistics
  - Projects showcase with tags and links
  - Skills & technologies
  - Contact form
  - Footer with quick links
- **Interactive Elements**: Smooth scrolling, hamburger menu, hover effects
- **Easy to Customize**: Simple HTML structure with well-organized CSS variables

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git (for cloning the repository)
- Text editor or IDE (VS Code recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Open the project in your browser:
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

## Customization

### Update Your Information

1. **index.html**: 
   - Replace "Your Name" with your actual name
   - Update all placeholder text with your content
   - Replace placeholder project links with your actual project URLs
   - Update social media links (GitHub, LinkedIn, Twitter, Email)

2. **styles.css**:
   - Modify color scheme by changing CSS variables in the `:root` selector
   - Adjust font sizes, spacing, and other design elements as needed

3. **script.js**:
   - Add backend integration for contact form submissions
   - Customize animations and interactions

### Color Customization

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #667eea;      /* Main accent color */
    --secondary-color: #764ba2;    /* Secondary accent */
    --text-color: #333;            /* Text color */
    --bg-color: #f8f9fa;           /* Background color */
    /* ... more variables ... */
}
```

## Deployment on GitHub Pages

### Setup GitHub Pages

1. Create a new repository named `yourusername.github.io` on GitHub
2. Clone the repository to your local machine
3. Add your portfolio files to the repository
4. Push to GitHub:
```bash
git add .
git commit -m "Initial portfolio commit"
git push -u origin main
```

5. Your portfolio will be live at `https://yourusername.github.io`

### Alternative: Deploy to a subdirectory

If deploying to a repository subdirectory:
1. Create a `gh-pages` branch
2. In repository settings, set GitHub Pages source to `gh-pages` branch
3. Push your portfolio files to that branch

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Form

The contact form currently displays a confirmation message. To make it fully functional:

1. **Option 1**: Use a backend service (Node.js, Python, etc.)
2. **Option 2**: Use a third-party service like Formspree, Netlify Forms, or EmailJS
3. **Option 3**: Integrate with your email service

Example with Formspree:
```javascript
// Update form action attribute in HTML
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## Performance Tips

- Images are optimized with gradient placeholders
- CSS animations use GPU-accelerated properties
- JavaScript is vanilla (no dependencies)
- Minimal HTTP requests

## License

This portfolio template is free to use and modify for personal use.

## Support

For issues or questions:
1. Check the code comments in HTML, CSS, and JS files
2. Review the customization section above
3. Consult GitHub Pages documentation

## Future Enhancements

Consider adding:
- Blog section
- Dark mode toggle
- Back-to-top button
- Testimonials/reviews section
- Download CV button
- Analytics integration
- Photography/image gallery
- Case studies for projects

---

**Ready to showcase your work? Start customizing!** 🚀
