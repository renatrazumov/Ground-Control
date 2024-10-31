# Ground Control Landscaping Website

A modern, responsive website for Ground Control Landscaping LLC built with React, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Built with Vite for lightning-fast development
- 🎨 Styled with Tailwind CSS for modern, responsive design
- 📱 Fully responsive across all devices
- 🔍 SEO optimized
- 🚀 Performance optimized with lazy loading and image optimization
- 💻 TypeScript for enhanced development experience

## Prerequisites

- Node.js v18.20.4 (tested and confirmed)
- npm v10.7.0 (tested and confirmed)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ground-control-landscaping.git
cd ground-control-landscaping
```

2. Install dependencies:
```bash
npm install -g vite  # Install Vite globally
npm install         # Install project dependencies
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm start` - Start production server

## Project Structure

```
/
├── dist/                    # Production build output
│   ├── assets/             # Compiled assets
│   └── index.html          # Production HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Contact.tsx     # Contact information section
│   │   ├── CTAButton.tsx   # Call-to-action button
│   │   ├── Footer.tsx      # Site footer
│   │   ├── Hero.tsx       # Hero/landing section
│   │   ├── ServiceCard.tsx # Individual service component
│   │   ├── Services.tsx    # Services section
│   │   ├── SocialMedia.tsx # Social media links
│   │   ├── TestimonialCard.tsx # Individual testimonial
│   │   └── Testimonials.tsx    # Testimonials section
│   ├── App.tsx            # Main App component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── server.js             # Production server configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── tsconfig.app.json     # App-specific TS config
├── tsconfig.node.json    # Node-specific TS config
├── vite.config.ts        # Vite configuration
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── eslint.config.js      # ESLint configuration
```

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Deployment to Namecheap cPanel

### Prerequisites
- cPanel access with Node.js Selector feature
- Domain configured in Namecheap
- Node.js v18.20.4
- npm v10.7.0

### Configuration Steps

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Files to Upload**
   Upload the following files to your cPanel application root:
   - `dist/` directory (contains built files)
   - `server.js`
   - `package.json`
   - `package-lock.json`

3. **Node.js App Setup in cPanel**
   - Navigate to Node.js Selector in cPanel
   - Click "Create Application"
   - Configure the following settings:
     - Node.js version: 18.20.4
     - Application mode: Production
     - Application root: Your upload directory (e.g., /public_html/groundcontrol)
     - Application URL: Your domain (e.g., gcl401.com)
     - Application startup file: server.js
     - Environment Variables:
       - NODE_ENV: production
       - VITE_CONTACT_EMAIL: GroundControlLandscaping401@gmail.com
       - VITE_PUBLIC_URL: https://gcl401.com/

4. **Critical Configuration**
   - In `package.json`, ensure "type" is set to "commonjs":
     ```json
     {
       "type": "commonjs"
     }
     ```
   - Server.js must be configured to serve from the dist directory
   - All imports must use CommonJS require() syntax

5. **Post-Deployment**
   - Enter the virtual environment:
     ```bash
     source /home/username/nodevenv/public_html/groundcontrol/18/bin/activate && cd /home/username/public_html/groundcontrol
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the application from cPanel Node.js Selector

### Troubleshooting
- Check application logs in cPanel for any errors
- Verify Node.js version matches exactly v18.20.4
- Verify npm version matches v10.7.0
- Ensure all dependencies are properly listed in package.json
- Check file permissions in the application directory
- Verify "type": "commonjs" in package.json
- Confirm server.js is using correct dist directory paths

## Technologies Used

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [Express](https://expressjs.com/)

## License

MIT © Ground Control Landscaping LLC