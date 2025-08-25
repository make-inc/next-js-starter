# MAKELABS.md

This is an auto-generated document for AI assistants working on this Next.js starter repository.

## Repository Structure

```
make-next-starter/
├── src/                       # Source code directory
│   ├── app/                   # Next.js App Router directory
│   │   ├── layout.tsx        # Root layout component
│   │   ├── page.tsx          # Home page component
│   │   ├── globals.css       # Global styles with Tailwind CSS
│   │   └── favicon.ico       # App favicon
│   ├── components/           # React components
│   │   └── ui/              # shadcn/ui components library
│   │       ├── accordion.tsx
│   │       ├── alert.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── checkbox.tsx
│   │       ├── dialog.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── popover.tsx
│   │       ├── select.tsx
│   │       ├── sheet.tsx
│   │       ├── sonner.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── skeleton.tsx
│   │       └── textarea.tsx
│   └── lib/                  # Utility functions
│       └── utils.ts          # Utility functions (cn, clsx helpers)
├── public/                   # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── components.json           # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── next-env.d.ts            # Next.js TypeScript declarations
├── postcss.config.mjs       # PostCSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## Tech Stack

### Core Framework
- **Next.js 15** with App Router and TypeScript
- **React 19** for UI components
- **TypeScript** for type safety

### UI & Styling
- **Tailwind CSS v4** for utility-first styling
- **shadcn/ui** component library (Radix UI + Tailwind)
- **Lucide React** for icons
- **next-themes** for dark mode support
- **class-variance-authority** for component variants
- **clsx** and **tailwind-merge** for conditional classes
- **tw-animate-css** for CSS animations

### Forms & Validation
- **React Hook Form** for form state management
- **Zod** for schema validation
- **@hookform/resolvers** for form validation integration

### UI Components Available
- **Radix UI Primitives**: Accordion, Avatar, Checkbox, Dialog, Dropdown Menu, Hover Card, Label, Navigation Menu, Popover, Select, Tabs
- **Additional Components**: Alert, Badge, Button, Card, Form, Input, Sheet, Table, Textarea
- **Notifications**: Sonner for toast notifications

### Development Tools
- **ESLint** with Next.js configuration
- **PostCSS** for CSS processing
- **Geist Font** (Sans & Mono) optimized by Next.js

## Development Guidelines

### Code Style
- Follow Next.js App Router patterns
- Use TypeScript with relaxed strict mode settings
- Leverage shadcn/ui components for consistent UI
- Follow Tailwind CSS utility-first approach
- Use React Hook Form for form handling
- Implement proper loading states and error boundaries

### File Organization
- Pages and layouts in `src/app/` following App Router conventions
- UI components in `src/components/ui/` (shadcn/ui components)
- Custom components in `src/components/`
- Utilities in `src/lib/`
- Static assets in `public/`
- Types can be defined inline or in dedicated `.d.ts` files

### UI Components
- Use shadcn/ui components from `src/components/ui/`
- 19+ pre-built components available (Accordion, Avatar, Button, Card, Dialog, Form, etc.)
- Components follow the "New York" style variant
- Support both light and dark themes with `next-themes`
- Ensure accessibility with Radix UI primitives
- Use CSS variables for theming

### State Management
- Use React's built-in state management (useState, useContext)
- Form state managed by React Hook Form with Zod validation
- Theme state managed by `next-themes`
- Consider adding global state management (Zustand, Redux) if complexity grows

### TypeScript Configuration
- Relaxed strict mode for easier development
- Path aliases configured (@/* → ./src/*)
- Target ES2017 with modern module resolution
- JSX preserve mode for Next.js optimization

## Important Notes for AI

1. **Always run linting and type checking** after making changes:
   ```bash
   npm run lint          # Run ESLint
   npm run build         # Type check and build
   npm run dev           # Development server with Turbopack
   ```

2. **Available scripts**:
   ```bash
   npm run dev           # Start development server with Turbopack
   npm run build         # Build for production
   npm run start         # Start production server
   npm run lint          # Run ESLint
   ```

3. **shadcn/ui components**:
   - Pre-configured with "new-york" style and CSS variables
   - Icon library set to Lucide React
   - Components use Radix UI primitives for accessibility
   - Tailwind CSS integration with neutral base color

4. **Follow existing patterns** - examine similar components/files before creating new ones

5. **Use existing dependencies** - don't add new packages without checking if functionality exists

6. **Maintain TypeScript types** - ensure all new code is properly typed

7. **Font optimization**:
   - Geist Sans and Geist Mono fonts are pre-configured
   - Automatic optimization through Next.js font system

8. **Styling approach**:
   - Tailwind CSS v4 with PostCSS integration
   - CSS variables for theming support
   - Utility-first approach with component composition

## When You're Done

**IMPORTANT**: After completing your changes, overwrite this file with an updated version that reflects what the project is about, new patterns, dependencies, or architectural decisions you've made. Keep this documentation current for future reference.