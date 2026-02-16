# Copilot Instructions for Portfolio Website

## Project Overview
This is a responsive portfolio website built with vanilla HTML, CSS, and JavaScript designed for hosting on GitHub Pages.

## Key Files
- `index.html` - Main page structure with all sections
- `styles.css` - Complete styling with responsive design
- `script.js` - Interactivity (menu toggle, form validation, animations)
- `README.md` - Setup and deployment instructions

## Customization Checklist

### Basic Information
- [ ] Replace "Your Name" throughout the site with your actual name
- [ ] Update the hero section subtitle to reflect your profession/skills
- [ ] Modify the about section text with your background

### Projects Section
- [ ] Add 3-6 of your best projects
- [ ] Update project titles, descriptions, and technologies
- [ ] Replace demo links with actual project URLs
- [ ] Add GitHub repository links
- [ ] Update gradient colors for project cards if desired

### Skills Section
- [ ] List your actual technical skills under each category
- [ ] Update categories (Frontend, Backend, Tools, Soft Skills) as needed
- [ ] Add or remove skill categories based on your expertise

### Contact Information
- [ ] Update email address in footer and hero section
- [ ] Add/update social media links (GitHub, LinkedIn, Twitter)
- [ ] Set up form submission (Formspree, Netlify, or backend)

### Design
- [ ] Modify color scheme in CSS `:root` variables if desired
- [ ] Adjust fonts, spacing, or layout to match your brand
- [ ] Update stats in the About section (years, projects, clients)

## Deployment

### GitHub Pages Deployment
1. Create a repository named `yourusername.github.io`
2. Push portfolio files to the main branch
3. Site will be live at `https://yourusername.github.io`

### Using Custom Domain
1. Purchase a custom domain
2. In GitHub repository settings, set custom domain
3. Add CNAME file with your domain name
4. Update DNS settings with your domain provider

## Features to Know
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- Intersection Observer for scroll animations
- Form validation (requires backend for actual submission)
- Sticky navigation bar
- Gradient backgrounds and hover effects

## Common Tasks

### Adding a New Project
1. Open `index.html`
2. Find the projects-grid section
3. Copy a project-card div
4. Update title, description, tags, and links
5. Optionally change the gradient in the project-image div

### Changing Colors
Edit `.vscode/snippet.md` or directly in `styles.css`:
```css
:root {
    --primary-color: #667eea;      /* Change this */
    --secondary-color: #764ba2;    /* And this */
}
```

### Adding Social Links
Update social-links section in `index.html` with your URLs.

## Best Practices
- Keep descriptions concise and project-focused
- Use real project links (GitHub, live demos)
- Test on mobile devices before deployment
- Update portfolio every 3-6 months
- Add new projects as you complete them

## Support Resources
- Font Awesome Icons: https://fontawesome.com/icons
- CSS Gradient Generator: https://cssgradient.io/
- GitHub Pages Docs: https://pages.github.com/
