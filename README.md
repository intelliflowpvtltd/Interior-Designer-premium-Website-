# Luxe Interiors - Ultra-Premium Interior Design Website

A modern, high-performance website for India's premier luxury interior design firm, built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🌟 Features

### Design System
- **Custom Color Palette**: Royal Blue (#0A1628), Champagne Gold (#D4AF37), Ivory White (#FFFFF0)
- **Premium Typography**: Playfair Display for headings, Inter for body text
- **Sophisticated Animations**: Framer Motion for smooth, elegant transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices

### Core Pages
- **Homepage**: Hero section, brand essence, featured projects, philosophy, testimonials, awards, and CTA
- **Portfolio**: Advanced filtering system (category, city, style, space type), individual project detail pages with galleries
- **About**: Company story, design philosophy, team profiles, awards & recognition
- **Services**: 6 service offerings with detailed descriptions and investment ranges
- **Process**: 4-step design process with deliverables and FAQs
- **Contact**: Multi-step consultation inquiry form with validation
- **Journal**: Blog/insights section with categorized articles

### Technical Features
- **Next.js 14+ App Router**: Latest React features with server components
- **TypeScript**: Full type safety across the application
- **SEO Optimized**: Comprehensive metadata, sitemap, robots.txt
- **Performance**: Image optimization, lazy loading, code splitting
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML
- **Forms**: React Hook Form with validation
- **Animations**: Framer Motion with scroll-triggered effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to project directory
cd website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
website/
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── contact/           # Contact & consultation form
│   ├── journal/           # Blog/insights
│   ├── portfolio/         # Portfolio listing & detail pages
│   │   └── [slug]/       # Dynamic project routes
│   ├── process/           # Design process
│   ├── services/          # Services overview
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles & design system
│   ├── sitemap.ts         # Dynamic sitemap generation
│   └── robots.ts          # Robots.txt configuration
├── components/            # React components
│   ├── home/             # Homepage sections
│   ├── ui/               # Reusable UI components
│   ├── Navigation.tsx    # Header navigation
│   └── Footer.tsx        # Footer component
├── lib/                   # Utilities & data
│   ├── projectsData.ts   # Portfolio projects data
│   ├── metadata.ts       # SEO metadata helpers
│   └── utils.ts          # Utility functions
└── public/               # Static assets

```

## 🎨 Design System

### Colors
```css
--royal-blue: #0A1628      /* Primary - Navigation, headings */
--champagne-gold: #D4AF37  /* Accent - Highlights, CTAs */
--ivory-white: #FFFFF0     /* Background */
--burgundy: #800020        /* Selective emphasis */
--charcoal: #36454F        /* Body text */
--pearl-gray: #E8E8E8      /* Borders, dividers */
```

### Typography
- **Display Font**: Playfair Display (headings, 400-700)
- **Body Font**: Inter (body text, 300-700)
- **Scale**: Following 8px grid system

### Components
- Button (primary, secondary, text variants)
- Card (with hover effects)
- Container (responsive wrapper)
- Navigation (fixed with scroll effects)
- Footer (comprehensive sitemap)

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add API keys for form submission, analytics, etc.
```

### Customization
- **Colors**: Update in `app/globals.css` CSS variables
- **Typography**: Modify Google Fonts import in `app/globals.css`
- **Projects Data**: Edit `lib/projectsData.ts` to add/modify portfolio projects
- **Navigation**: Update links in `components/Navigation.tsx`
- **Footer**: Modify office locations and links in `components/Footer.tsx`

## 📊 Portfolio Management

Projects are managed in `lib/projectsData.ts`. Each project includes:
- Basic info (title, category, location, year)
- Multiple images for gallery
- Detailed case study content
- Client testimonials
- Technical specifications

Add new projects by extending the `projects` array:

```typescript
{
  id: 9,
  title: 'Your Project',
  slug: 'your-project-slug',
  category: 'Residential',
  // ... other fields
}
```

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Vercel auto-detects Next.js and deploys
4. Configure custom domain in Vercel settings

### Other Platforms
The build output (`npm run build`) works with any Node.js hosting:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📈 Performance Targets

Based on PRD specifications:
- **Lighthouse Performance**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 SEO Features

- Comprehensive metadata for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Dynamic sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Alt text for all images

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.4
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 3.x
- **Animations**: Framer Motion 11.x
- **Forms**: React Hook Form 7.x
- **Icons**: Heroicons (via inline SVG)
- **Fonts**: Google Fonts (Playfair Display, Inter)

## 📝 Development Notes

### Adding New Pages
1. Create page in `app/[page-name]/page.tsx`
2. Add to navigation in `components/Navigation.tsx`
3. Update sitemap in `app/sitemap.ts`
4. Add metadata for SEO

### Form Handling
Contact form currently logs to console. To enable email:
1. Set up email service (SendGrid, Resend, etc.)
2. Create API route in `app/api/contact/route.ts`
3. Update form submission in `app/contact/page.tsx`

### CMS Integration
For content management, integrate Sanity.io:
1. Set up Sanity project
2. Define schemas for projects, blog posts, team
3. Replace static data imports with Sanity queries
4. Use incremental static regeneration

## 📄 License

Proprietary - Luxe Interiors

## 🤝 Support

For technical support or questions:
- Email: tech@luxeinteriors.com
- Documentation: [Internal Wiki]

---

Built with ❤️ for discerning clients who demand excellence.
