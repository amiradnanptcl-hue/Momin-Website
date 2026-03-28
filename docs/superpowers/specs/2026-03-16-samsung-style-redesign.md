# ATOSHI Website Samsung-Style Redesign

## Goal
Transform the ATOSHI blockchain website from a crypto-native dark theme into a Samsung-inspired premium experience with hybrid light/dark sections, cinematic scroll animations, and frosted-glass UI elements.

## Design Decisions
- **Theme**: Hybrid — dark cinematic hero/feature sections alternating with light informational sections
- **Navigation**: Frosted-glass sticky nav, 4 centered links, adaptive text color per section
- **Typography**: Syne (headlines), DM Sans (body), DM Mono (numbers/stats only)
- **Colors**: Orange #F5821F primary, #FAFAFA light bg, #0A0E1A dark bg, #00D4FF subtle secondary
- **Spacing**: Samsung-scale whitespace (120-160px between sections)
- **Animations**: Scroll-triggered reveals via framer-motion whileInView

## Page Flow

### 1. Navbar (complete rewrite)
- Frosted glass: `backdrop-blur-xl bg-white/80` on light, `bg-black/60` on dark
- Logo left, 4 centered links (Ecosystem, Technology, Apps, Community), "Get ATOS" pill right
- Starts transparent over dark hero, transitions on scroll
- Text color adapts: white on dark sections, dark on light sections

### 2. Hero (dark, modify existing Web3MediaHero)
- Keep blockchain particle canvas (subtler, fewer particles)
- Remove floating crypto icons — Samsung doesn't do clutter
- Massive Syne typography: "Mining Made Simple" + giant "ATOSHI" gradient
- Single subtitle line, single CTA button (orange gradient pill)
- Scroll indicator at bottom

### 3. Stats Ticker (gradient transition strip)
- Gradient from dark to light (hero → ecosystem transition)
- 4 animated counters in a row: Users, Price, Market Cap, Mine-Out
- Numbers in DM Mono, labels in DM Sans
- Animate on scroll into view

### 4. Ecosystem Section (light background)
- Background: #FAFAFA
- Clean section title with orange accent line
- 2x2 card grid with rounded corners (24px), soft shadows
- Each card: lucide icon, title, description
- Generous padding (40-60px per card)
- Features: Community Mining, DeFi & Investment, Gaming, Biometric Wallet

### 5. Why ATOSHI (dark cinematic)
- Background: #0A0E1A
- 3 full-width feature blocks, each with:
  - Large number (01, 02, 03)
  - Bold headline
  - Description text
  - Reveal on scroll with fade+slide animation
- Features: Zero Fees, Instant Payments, Limited Supply
- Samsung "spec highlight" aesthetic — big text, lots of space

### 6. Apps Section (light background)
- Background: white
- Horizontal scrollable cards showing 6 apps
- Each card: gradient top area, app name, status badge, description
- Smooth horizontal scroll with grab cursor
- Apps: ATOSHI App, DeTok, Gaming, CoinSwap, ATOS Wallet, MetaATOSHI

### 7. Value/Investment Section (dark)
- Background: #0A0E1A
- Big centered stats/numbers — Samsung spec-sheet style
- Key metrics displayed large with descriptions
- Hexagon styling removed — clean rectangular layout

### 8. CTA Section (orange gradient)
- Full-width orange gradient background
- Centered white text: "Start Mining Today"
- Single white pill CTA button
- Clean, no particles or distractions

### 9. Footer (dark, minimal)
- Background: #050810
- 4-column grid: About, Ecosystem, Technology, Company
- Social icons row
- Subtle top border separator
- Copyright line at bottom

## Component File Changes
| File | Action |
|------|--------|
| Navbar.tsx | Complete rewrite |
| Web3MediaHero (web3media-hero.tsx) | Simplify, remove crypto icons clutter |
| web3media-hero.demo.tsx | Update props |
| StatsBar.tsx | Redesign as gradient transition |
| EcosystemSection.tsx | Light bg, card grid, remove hex SVG |
| WhySection.tsx | Dark, 3 feature blocks with scroll reveal |
| AppsSection.tsx | Light bg, cleaner horizontal cards |
| ValueSection.tsx | Dark, big centered numbers, remove hexagons |
| CTASection.tsx | Orange gradient, minimal |
| Footer.tsx | Minimal cleanup |
| globals.css | Add light section styles, update scrollbar |
| page.tsx | May reorder/adjust section composition |

## Dependencies
No new dependencies needed. Existing stack (framer-motion, lucide-react, tailwind) covers everything.
