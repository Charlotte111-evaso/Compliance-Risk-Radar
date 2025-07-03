# Compliance Risk Radar Documentation

A professional documentation site for Charlotte Evason's Compliance Risk Radar fraud detection dashboard.

## 🚀 Live Demo

- **Documentation Site**: [Deploy on Netlify]
- **Streamlit Dashboard**: [https://compliance-risk-radar-charlotte-evason.streamlit.app/](https://compliance-risk-radar-charlotte-evason.streamlit.app/)

## 📋 Features

- **Professional Portfolio Site**: Clean, minimal design showcasing technical expertise
- **Three-Section Navigation**: Home, Dashboard, and Insights pages
- **Interactive Dashboard Integration**: Direct link to live Streamlit app
- **Comprehensive Insights Report**: Detailed analysis with visual formatting
- **Responsive Design**: Optimized for desktop and mobile devices
- **Static Site Generation**: Fast loading with Next.js static export

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui with Sidebar primitives
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with sidebar navigation
│   ├── page.tsx            # Homepage with project summary
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard overview and launch page
│   ├── insights/
│   │   └── page.tsx        # Detailed insights report
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── app-sidebar.tsx     # Main navigation sidebar
├── netlify.toml            # Netlify configuration with redirects
├── next.config.mjs         # Next.js static export configuration
└── package.json            # Dependencies and build scripts
\`\`\`

## 🚀 Deployment Instructions

### Deploy to Netlify (Recommended)

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings** (Auto-configured via netlify.toml):
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - The site will be available at your Netlify URL

### Manual Deployment

1. **Install Dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

2. **Build for Production**:
   \`\`\`bash
   npm run build
   \`\`\`

3. **Deploy the `out` folder** to any static hosting service

## 🔧 Local Development

1. **Clone the repository**:
   \`\`\`bash
   git clone <your-repo-url>
   cd compliance-risk-radar-docs
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Start development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open in browser**:
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📝 Site Structure

### 🏠 Homepage (`/`)
- **Personal Introduction**: Charlotte Evason's professional profile
- **Project Summary**: Technical overview of the fraud detection system
- **Key Statistics**: Visual metrics and achievements
- **Navigation Cards**: Quick access to Dashboard and Insights

### 📊 Dashboard (`/dashboard`)
- **Interactive Launch**: Direct access to Streamlit application
- **Feature Overview**: Comprehensive dashboard capabilities
- **Usage Guide**: Step-by-step workflow instructions
- **Technical Details**: Risk analysis and anomaly detection features

### 💡 Insights (`/insights`)
- **Executive Summary**: Key findings and statistics
- **Anomaly Analysis**: Detailed detection results with visual formatting
- **Geographic Risk**: Country-level risk distribution with flags
- **Operational Impact**: Benefits and technical achievements
- **Professional Conclusion**: Project impact and scalability

## 🎨 Design Features

### Visual Enhancements
- **Color-coded sections**: Each page has distinct visual themes
- **Professional icons**: Lucide React icons throughout
- **Responsive cards**: Clean card layouts with proper spacing
- **Interactive elements**: Hover effects and active states

### Typography & Layout
- **Font**: Inter (Google Fonts) for professional appearance
- **Responsive design**: Mobile-first approach with breakpoints
- **Visual hierarchy**: Clear heading structure and content organization
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🔒 Security & Performance

### Security Headers (via Netlify)
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin

### Performance Optimizations
- **Static site generation**: Pre-built HTML for fast loading
- **Asset optimization**: Efficient caching strategies
- **Image optimization**: Unoptimized images for static export
- **Minimal JavaScript**: Lightweight bundle size

## 🌐 External Integration

### Streamlit Dashboard
- **Live URL**: https://compliance-risk-radar-charlotte-evason.streamlit.app/
- **Integration**: Direct launch buttons throughout the site
- **Target**: Opens in new tab with proper security attributes

## 📱 Responsive Behavior

- **Desktop**: Full sidebar navigation with expanded content
- **Tablet**: Collapsible sidebar with touch-friendly interactions
- **Mobile**: Mobile-optimized navigation and card layouts

## 🤝 Contributing

This is a personal portfolio project by Charlotte Evason. For questions or suggestions, please contact Charlotte directly.

## 📄 License

This project is part of Charlotte Evason's technical portfolio.

---

**Built by Charlotte Evason** | [Live Dashboard](https://compliance-risk-radar-charlotte-evason.streamlit.app/) | [Documentation Site](https://your-netlify-url.netlify.app)
