# Compliance Risk Radar Documentation

A professional documentation site for Charlotte Evason's Compliance Risk Radar fraud detection dashboard.

## 🚀 Live Demo

- **Documentation Site**: [Deploy on Netlify]
- **Streamlit Dashboard**: [https://compliance-risk-radar-charlotte-evason.streamlit.app/](https://compliance-risk-radar-charlotte-evason.streamlit.app/)

## 📋 Features

- **Professional Portfolio Site**: Clean, minimal design showcasing technical expertise
- **Comprehensive Documentation**: Complete guide to the fraud detection dashboard
- **Interactive Navigation**: Sidebar navigation with active states
- **Responsive Design**: Optimized for desktop and mobile devices
- **Static Site Generation**: Fast loading with Next.js static export

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Netlify (static export)

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Homepage with introduction
│   ├── dashboard/          # Dashboard overview documentation
│   ├── schema/             # Data schema reference
│   ├── filtering/          # Filtering options guide
│   └── launch/             # Dashboard launch page
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── app-sidebar.tsx     # Main navigation sidebar
├── netlify.toml            # Netlify configuration
└── next.config.mjs         # Next.js static export config
\`\`\`

## 🚀 Deployment Instructions

### Deploy to Netlify

1. **Connect Repository**:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository

2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
   - Node version: `18`

3. **Deploy**:
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site

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

## 📝 Content Structure

### Homepage (`/`)
- Personal introduction as Charlotte Evason
- Project overview and technical highlights
- Quick start guide
- Feature showcase cards

### Dashboard Overview (`/dashboard`)
- Risk score summaries explanation
- Anomaly detection features
- Geographic heatmap details
- KPI metrics breakdown

### Data Schema (`/schema`)
- Complete field reference for processed_users.csv
- Data types and descriptions
- Usage guidelines and best practices

### Filtering Options (`/filtering`)
- Anomaly flag filtering
- Country-based filtering
- Risk score threshold controls
- Advanced filter combinations

### Launch Dashboard (`/launch`)
- Direct link to Streamlit app
- Usage instructions
- Feature exploration guide
- Technical requirements

## 🎨 Customization

### Colors
The site uses a professional red color scheme appropriate for risk/compliance:
- Primary: `red-600` (#dc2626)
- Hover: `red-700` (#b91c1c)

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing
- Professional hierarchy

### Components
Built with shadcn/ui components:
- Sidebar navigation
- Cards and layouts
- Buttons and badges
- Responsive design utilities

## 📱 Responsive Design

- **Desktop**: Full sidebar navigation
- **Tablet**: Collapsible sidebar
- **Mobile**: Mobile-optimized navigation

## 🔒 Security Headers

Netlify configuration includes security headers:
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## 📈 Performance

- Static site generation for fast loading
- Optimized images and assets
- Efficient caching strategies
- Minimal JavaScript bundle

## 🤝 Contributing

This is a personal portfolio project by Charlotte Evason. For questions or suggestions, please contact Charlotte directly.

## 📄 License

This project is part of Charlotte Evason's technical portfolio.

---

**Built by Charlotte Evason** | [Streamlit Dashboard](https://compliance-risk-radar-charlotte-evason.streamlit.app/)
