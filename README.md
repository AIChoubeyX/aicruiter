# AICruiter - AI-Powered Interview Platform

An innovative AI-powered recruiting and interview platform built with React, Vite, and modern web technologies. AICruiter streamlines the hiring process with intelligent automation and enhanced candidate evaluation capabilities.

## 🚀 Features

- **AI-Powered Interviews**: Leverage artificial intelligence to conduct and analyze candidate interviews
- **Modern UI/UX**: Beautiful, responsive interface built with Tailwind CSS and shadcn/ui components
- **Real-time Updates**: Powered by TanStack React Query for efficient data management
- **Interactive Components**: Rich component library with animations and smooth interactions
- **Form Management**: Robust form handling with React Hook Form and validation
- **Theme Support**: Next.js themes integration for light/dark mode support
- **Data Visualization**: Charts and analytics using Recharts
- **Accessibility**: Built with accessibility best practices using Radix UI primitives

## 📋 Tech Stack

### Frontend Framework
- **React 18.3**: Latest React with hooks and concurrent features
- **Vite 5**: Ultra-fast build tool with HMR (Hot Module Replacement)
- **React Router 6**: Client-side routing for navigation

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library built on Radix UI
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Animation library for smooth interactions

### State & Data Management
- **TanStack React Query (v5)**: Powerful server state management
- **React Hook Form**: Performant, flexible form validation
- **next-themes**: Theme management

### Additional Libraries
- **Recharts**: Composable charting library for analytics
- **Embla Carousel**: Carousel/slider component
- **Sonner**: Toast notifications
- **date-fns**: Date utility library
- **input-otp**: OTP input component
- **cmdk**: Command menu component

## 📁 Project Structure

```
Client/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── ui/              # shadcn/ui component library
│   │   ├── Button.jsx       # Custom button component
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer component
│   │   └── SectionWrapper.jsx # Layout wrapper
│   │
│   ├── pages/               # Page components
│   │   ├── Index.jsx        # Entry page
│   │   ├── Home.jsx         # Home page
│   │   └── NotFound.jsx     # 404 page
│   │
│   ├── sections/            # Page sections
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Features.jsx     # Features section
│   │   ├── CTA.jsx          # Call-to-action section
│   │   ├── FAQ.jsx          # FAQ section
│   │   ├── Scenarios.jsx    # Use case scenarios
│   │   ├── Testimonials.jsx # User testimonials
│   │   └── WhyLockedIn.jsx  # Why choose section
│   │
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.jsx   # Mobile detection hook
│   │   └── use-toast.js     # Toast notification hook
│   │
│   ├── lib/                 # Utility functions
│   │   └── utils.js         # Helper utilities
│   │
│   ├── assets/              # Static assets
│   ├── App.jsx              # Root App component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
│
├── public/                  # Static files
├── package.json             # Project dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── eslint.config.js         # ESLint rules
├── jsconfig.json            # JavaScript config
├── components.json          # Component library config
└── index.html               # HTML entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd aicruiter/Client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This generates optimized production build in the `dist` folder.

```bash
npm run preview
```

Preview the production build locally.

## 📝 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview production build

## 🎨 Component Architecture

### Page Structure
The application follows a modular section-based architecture:
- **Hero Section**: Eye-catching introduction
- **Features Section**: Key product features
- **Scenarios Section**: Use case demonstrations
- **FAQ Section**: Common questions and answers
- **Testimonials Section**: User feedback and success stories
- **Why Section**: Value proposition
- **CTA Section**: Call-to-action for conversion

### UI Components
All UI components are built using shadcn/ui, which provides:
- Accessible component primitives
- Customizable styling with Tailwind CSS
- Consistent design system
- Type-safe component props

## 🔧 Configuration

### Tailwind CSS
Customizable via `tailwind.config.js` for:
- Color schemes
- Typography
- Spacing
- Dark mode

### Vite
Development and build settings in `vite.config.js`:
- Fast refresh with React plugin
- Optimized production builds
- Asset handling

### ESLint
Code quality rules configured in `eslint.config.js`

## 🌟 Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Custom mobile detection hook
- Fully responsive across all devices

### Performance
- Vite's fast HMR for instant updates
- Code splitting and lazy loading
- Optimized bundle size
- React Query for efficient data caching

### Accessibility
- Built on Radix UI primitives
- ARIA labels and semantic HTML
- Keyboard navigation support
- Theme support for reduced motion

### Forms
- React Hook Form for performance
- Built-in validation
- Error handling and user feedback
- OTP and custom input components

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)
- [TanStack React Query](https://tanstack.com/query)

## 📄 License

This project is proprietary software for AICruiter.

## 🤝 Contributing

For contribution guidelines, please contact the development team.

## 📞 Support

For support and inquiries, please reach out to the development team.
