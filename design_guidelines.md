# Design Guidelines: Ivox Scale - Premium Dark Agency Site

## Design Approach
**Reference-Based**: Draw inspiration from Linear (premium dark UI), Stripe (sophisticated gradients), and Vercel (minimalist dark aesthetic). Maintain the existing iridescent, glass-morphism aesthetic while enhancing polish and functionality.

## Core Design Principles
- **Premium Dark**: Deep blacks (#0a0a0a, #121213) as primary background
- **Iridescent Accents**: Cyan-purple-pink gradients for visual interest
- **Glass Morphism**: Frosted glass effects (backdrop-blur) with subtle borders
- **Restrained Animation**: Smooth, purposeful motion - no excessive effects

## Typography System
**Font Families**: 
- Primary: System sans-serif stack (similar to Inter/Geist)
- Maintain current hierarchy

**Scale**:
- Hero Headlines: text-6xl to text-7xl, font-bold, tracking-tight (-0.04em)
- Section Titles: text-4xl to text-5xl, font-semibold
- Subsections: text-2xl to text-3xl, font-medium
- Body: text-base to text-lg, leading-relaxed
- Captions: text-sm, text-zinc-400

**Colors**: White for headlines, zinc-300/400 for body, gradient text for emphasis using bg-clip-text

## Layout & Spacing
**Container System**: max-w-7xl with px-6 horizontal padding

**Vertical Rhythm**: Use Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (mobile), py-32 (desktop)
- Element spacing: gap-8, gap-12, gap-16
- Card padding: p-6 to p-8

**Grid Patterns**:
- Hero: Single column, centered
- Features: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Case Studies: Masonry-style or grid-cols-1 md:grid-cols-2

## Component Library

### Navigation
- Fixed top navbar with backdrop-blur-xl on scroll
- White logo with black accent, Rainbow CTA button
- Mobile hamburger menu with slide-down animation
- Active state: gradient underline indicator

### Hero Section
- Full-width with min-h-screen (80-90vh)
- Centered content with max-w-4xl
- Large headline (text-6xl/7xl) with gradient text accent on key words
- Subheading (text-xl, text-zinc-300)
- Primary Rainbow button + secondary white button (no glow, bg-white/10)
- Background: Iridescent blobs (multiple, absolute positioned, blur-3xl)
- Trust indicators below CTA (logos or social proof text)

### Cards
**Standard Card**:
- Rounded-xl to rounded-2xl borders
- border border-white/10 with hover:border-white/20
- bg-black/40 with backdrop-blur-sm
- Glowing hover effect (radial gradient following cursor)
- Icon badge: rounded-lg, bg-white/5, border-white/10
- Internal padding: p-6 to p-8

**Feature Cards**: Icon + Title + Description format (as in current EcossistemaGrid)

### Testimonials Section
- Grid layout with 3 cards
- Each card: Quote icon, testimonial text, avatar (placeholder circle), name, role
- Rotating subtle glow effect on card borders
- bg-gradient-to-br from-white/5 to-transparent

### FAQ Section
- Accordion pattern with chevron icons
- Each item: border-b border-white/10
- Expand/collapse with smooth height animation
- Active state: gradient left border accent

### Case Studies Gallery
- Grid with hover scale effect (scale-105)
- Overlay gradient on hover revealing "Ver Detalhes" button
- Tags/categories with pill-shaped badges (rounded-full, bg-white/10)

### Contact Form
- Two-column layout (form + info/map)
- Input fields: bg-white/5, border-white/10, rounded-lg, focus:border-cyan-500
- Labels: text-sm, text-zinc-400
- Submit button: Rainbow button
- Validation states: border-red-500 for errors, border-green-500 for success

### Footer
- Multi-column grid (Company, Services, Resources, Contact)
- Newsletter signup: horizontal input + button
- Social icons with hover glow
- Copyright and legal links: text-xs, text-zinc-600

## Visual Effects Palette
- **Iridescent Blobs**: Absolute positioned, blur-[80px], gradient from cyan-purple-pink, animate-pulse
- **Glass Cards**: backdrop-blur-sm/md with border-white/5-10
- **Glow on Hover**: Radial gradient cursor-following effect (GlowingEffect component)
- **Rainbow Button**: Existing animated gradient border effect
- **Scroll Animations**: Fade-up on scroll (opacity + translateY) using Framer Motion
- **Parallax**: Subtle parallax on hero blobs (scroll-based transform)

## Images Strategy
- **Hero**: Large background image (if suitable) with dark overlay (bg-black/50) OR maintain current abstract blob design
- **Case Studies**: Thumbnail images for each project (16:9 aspect ratio)
- **Testimonials**: Avatar placeholders (circular, 48x48 or 64x64)
- **About Page**: Team photos or office imagery
- **Icons**: Continue using Lucide React icons consistently

## Page-Specific Guidance

### Home Page Sections (in order):
1. Hero with iridescent background
2. Social proof bar (logos or stats)
3. EcossistemaGrid (features)
4. Methodology preview (3-column process)
5. Case study highlights (grid, 3 featured)
6. Testimonials carousel/grid
7. FAQ accordion
8. Final CTA section (dark gradient, centered)

### Services Page:
- Hero with service overview
- Detailed service cards (larger format with icon, title, description, benefits list)
- Process timeline visualization
- Pricing/packages section (if applicable)

### Cases Page:
- Filterable gallery grid
- Modal/detail view for each case with metrics, screenshots, testimonials

### About Page:
- Company story with timeline
- Team grid with photos and roles
- Values/culture cards

## Accessibility Requirements
- Maintain WCAG AA contrast (white on #0a0a0a passes)
- Focus states: ring-2 ring-cyan-500 ring-offset-2 ring-offset-black
- Keyboard navigation for all interactive elements
- ARIA labels for icon-only buttons
- Alt text for all images

## Animation Guidelines
- Use Framer Motion sparingly
- Entrance animations: fadeIn with translateY (20px to 0)
- Duration: 300-500ms for micro-interactions, 800ms for page transitions
- Easing: ease-out for entrances, ease-in-out for state changes
- Hover: scale-105 or subtle glow, duration-300
- NO distracting infinite loops except subtle pulse on blobs