# JobNova - AI-Powered Job Matching Platform

A production-grade job matching platform with AI-powered mock interview features, built from Figma design specifications.

## Features

- **Job Matching System**: Advanced matching algorithm with percentage-based compatibility
- **AI Mock Interviews**: Integrated AI-powered interview preparation
- **Modern UI**: Clean, responsive design with smooth animations
- **Type-Safe**: Built with TypeScript for enhanced developer experience
- **Design System**: Consistent design tokens from Figma variables

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Sidebar.tsx
│   ├── JobCard.tsx
│   ├── AIPanel.tsx
│   ├── Button.tsx
│   ├── MatchBadge.tsx
│   └── Logo.tsx
├── constants/        # Design tokens and assets
│   ├── assets.ts
│   └── theme.ts
├── data/            # Mock data
│   └── mockJobs.ts
├── types/           # TypeScript definitions
│   └── index.ts
├── App.tsx          # Main application
├── main.tsx         # Application entry
└── index.css        # Global styles
```

## Design Tokens

All design tokens are extracted from Figma variables:

- **Colors**: Primary (#734AE2), Secondary (#B9FD33), and semantic colors
- **Typography**: Inter font family with consistent sizing and spacing
- **Spacing**: Consistent spacing scale
- **Border Radius**: Rounded corners for modern look

## Features Implementation

### Job Matching
- Visual match percentage with color-coded badges
- Detailed job information cards
- Quick actions (Apply, Mock Interview, Like)

### AI Mock Interview Panel
- Contextual information about AI features
- Clear call-to-action
- Beautiful gradient background

### Responsive Design
- Fixed sidebar navigation
- Scrollable content area
- Fixed AI panel on the right

## Production Considerations

- ✅ Type-safe with TypeScript
- ✅ Optimized asset loading
- ✅ Semantic HTML for accessibility
- ✅ Consistent design system
- ✅ Component-based architecture
- ✅ Clean code structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved
