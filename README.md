# Complytics AI Insights

AI-powered commission tracking platform that transforms sales compensation workflows with automated, transparent, and error-free payouts.

## Website Overview

Complytics is a modern React-based website showcasing an AI commission platform. The site features a clean, professional design with a purplish-blue gradient theme and focuses on explaining how AI can streamline commission processes.

### Page Structure

**Main Landing Page (`/`)**
- **Hero Section**: Main value proposition with animated background dots and gradient effects
- **How It Works**: 4-card grid explaining the process (Upload → AI Parse → CRM Sync → Dashboards)
- **Use Cases**: Tabbed interface for different user types (Sales Leaders, Sales Reps, Finance Leads, RevOps)
- **Features**: Overview of key platform capabilities
- **Stats Section**: Key metrics and performance indicators
- **CTA Section**: Call-to-action for demo booking

**Additional Pages**
- **Team (`/team`)**: About us section with team member profiles and company story
- **Contact Us (`/contact-us`)**: Contact form and information
- **Waitlist (`/waitlist`)**: Email signup for early access
- **404 Page**: Custom not found page

### Key Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Scroll-triggered animations using Framer Motion
- **Modern UI Components**: Built with shadcn/ui component library
- **Professional Typography**: Clean, readable font hierarchy
- **Gradient Themes**: Consistent blue-to-purple gradient styling
- **Interactive Elements**: Hover effects, form validations, and smooth transitions

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Components**: shadcn/ui component library
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (for forms and data)
- **Deployment**: Vercel

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd complytics-ai-insights

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check

# Linting
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Hero.tsx        # Landing page hero section
│   ├── HowItWorks.tsx  # Process explanation cards
│   ├── ProductTabs.tsx # Use cases tabbed interface
│   ├── Features.tsx    # Feature overview
│   ├── Navigation.tsx  # Header navigation
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   ├── Team.tsx        # About/team page
│   ├── ContactUs.tsx   # Contact form page
│   ├── Waitlist.tsx    # Signup page
│   └── NotFound.tsx    # 404 page
├── hooks/              # Custom React hooks
├── integrations/       # External service integrations
│   └── supabase/       # Database and forms
├── lib/                # Utility functions
└── index.css           # Global styles and design tokens
```

## Design System

### Colors
- **Primary**: Cyan (#00D4E7) - Used for buttons, icons, and accents
- **Gradients**: Blue to purple gradients for hero sections and highlights
- **Background**: Subtle gradient with light blues and purples
- **Text**: Dark foreground with muted secondary text

### Components
- **Cards**: White backgrounds with subtle shadows and rounded corners
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with proper validation states
- **Typography**: Responsive font sizes with proper hierarchy

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly on different screen sizes
4. Submit a pull request with a clear description

## License

Private repository - All rights reserved.