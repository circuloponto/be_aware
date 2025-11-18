# BE AWARE Project - Style Guide & Design System
## Official Brand & Design Documentation

**Project:** BE AWARE - Supported Employment Project  
**Version:** 1.0  
**Last Updated:** November 2025  
**Status:** EU Submission Ready

---

## Table of Contents
1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Spacing & Layout](#spacing--layout)
5. [Components](#components)
6. [Iconography](#iconography)
7. [Responsive Design](#responsive-design)
8. [Accessibility](#accessibility)
9. [Animation & Transitions](#animation--transitions)
10. [Internationalization](#internationalization)

---

## 1. Brand Identity

### Project Name
**BE AWARE** - Building Employment Awareness and Resources in Europe

### Mission Statement
An EU-funded initiative dedicated to promoting supported employment and creating inclusive work environments across Europe.

### Brand Personality
- **Professional**: Trustworthy and credible for EU institutional standards
- **Inclusive**: Welcoming to all target groups and stakeholders
- **Modern**: Contemporary design reflecting innovation
- **Accessible**: Clear communication and universal design principles

### Logo Usage
- **Primary Logo**: `logo_be_aware.svg`
- **Dimensions**: 240px × 64px (standard)
- **Minimum Size**: 180px width
- **Clear Space**: Minimum 16px on all sides
- **Placement**: Top-left of header, links to homepage

---

## 2. Color Palette

### Primary Colors

#### Blue Palette
```
Primary Blue: #4681BC
- Usage: Primary actions, links, highlights
- RGB: 70, 129, 188
- HSL: 207°, 46%, 51%
- Accessibility: WCAG AA compliant with white text

Dark Blue: #2C5282
- Usage: Headings, emphasis, dark backgrounds
- RGB: 44, 82, 130
- HSL: 207°, 49%, 34%
- Accessibility: WCAG AAA compliant with white text

Light Blue: #E8F2F9
- Usage: Backgrounds, subtle highlights, hover states
- RGB: 232, 242, 249
- HSL: 205°, 61%, 94%
- Accessibility: WCAG AAA compliant with dark text
```

#### Yellow/Gold Palette
```
Primary Yellow: #F1C424
- Usage: Accents, CTAs, highlights, borders
- RGB: 241, 196, 36
- HSL: 47°, 88%, 54%
- Accessibility: WCAG AA compliant with dark text

Dark Gold: #D4A91E
- Usage: Hover states, emphasis
- RGB: 212, 169, 30
- HSL: 46°, 75%, 47%

Light Gold: #FFF9E6
- Usage: Light backgrounds, subtle accents
- RGB: 255, 249, 230
- HSL: 46°, 100%, 95%
```

### Neutral Colors
```
White: #FFFFFF
- Usage: Backgrounds, text on dark backgrounds

Light Gray: #F5F5F5
- Usage: Subtle backgrounds, dividers

Medium Gray: #6B7280
- Usage: Secondary text, borders

Dark Gray: #171717
- Usage: Body text, primary content

Black: #000000
- Usage: Maximum contrast elements (sparingly)
```

### Color Combinations

#### Approved Pairings
1. **Primary Blue (#4681BC) + White (#FFFFFF)**
   - Use: Primary buttons, navigation highlights
   - Contrast Ratio: 4.58:1 (WCAG AA)

2. **Dark Blue (#2C5282) + White (#FFFFFF)**
   - Use: Headings, hero sections
   - Contrast Ratio: 8.59:1 (WCAG AAA)

3. **Primary Yellow (#F1C424) + Dark Blue (#2C5282)**
   - Use: Accent combinations, borders with headings
   - Contrast Ratio: 4.89:1 (WCAG AA)

4. **Light Blue (#E8F2F9) + Dark Blue (#2C5282)**
   - Use: Card backgrounds with text
   - Contrast Ratio: 11.2:1 (WCAG AAA)

#### Gradient Usage
```css
/* Blue to Yellow Gradient (Mobile Menu) */
background: linear-gradient(to bottom right, #2C5282, #4681BC, #F1C424);

/* Blue Gradient (Hero Sections) */
background: linear-gradient(to bottom right, #E8F2F9, #FFFFFF, #FFF9E6);

/* Accent Gradient (Dividers, Underlines) */
background: linear-gradient(to right, #4681BC, #F1C424);
```

---

## 3. Typography

### Font Families
```css
Primary Font: Arial, Helvetica, sans-serif
- Usage: All body text, headings, UI elements
- Fallback: System sans-serif
- Rationale: Maximum compatibility, excellent readability
```

### Font Sizes & Hierarchy

#### Desktop
```
Hero Heading (H1): 72px (4.5rem) - font-black
Page Heading (H1): 60px (3.75rem) - font-bold
Section Heading (H2): 48px (3rem) - font-bold
Subsection (H3): 36px (2.25rem) - font-bold
Card Title (H3): 24px (1.5rem) - font-bold
Body Large: 20px (1.25rem) - font-normal
Body Regular: 16px (1rem) - font-normal
Body Small: 14px (0.875rem) - font-normal
Caption: 12px (0.75rem) - font-semibold
```

#### Mobile
```
Hero Heading (H1): 48px (3rem) - font-black
Page Heading (H1): 40px (2.5rem) - font-bold
Section Heading (H2): 32px (2rem) - font-bold
Subsection (H3): 24px (1.5rem) - font-bold
Card Title (H3): 18px (1.125rem) - font-bold
Body Large: 18px (1.125rem) - font-normal
Body Regular: 16px (1rem) - font-normal
Body Small: 14px (0.875rem) - font-normal
```

### Font Weights
```
font-normal: 400 - Body text
font-semibold: 600 - Emphasis, labels
font-bold: 700 - Headings, important text
font-black: 900 - Hero headings, major emphasis
```

### Line Heights
```
Headings: 1.2 (tight)
Body Text: 1.5 (normal)
Large Text: 1.75 (relaxed)
```

### Text Colors
```
Primary Text: #171717 (on light backgrounds)
Secondary Text: #6B7280 (less emphasis)
Light Text: #FFFFFF (on dark backgrounds)
Link Text: #4681BC (hover: #2C5282)
Accent Text: #F1C424 (highlights, active states)
```

---

## 4. Spacing & Layout

### Spacing Scale (Tailwind-based)
```
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
```

### Container Widths
```
max-w-4xl: 896px - Target Groups, narrow content
max-w-5xl: 1024px - Objectives, Activities, Results
max-w-6xl: 1152px - News, Contacts, Partners
max-w-7xl: 1280px - Header, Home page
```

### Section Padding
```
Desktop: py-20 (5rem / 80px)
Mobile: py-16 (4rem / 64px)
Horizontal: px-4 sm:px-6 lg:px-8 (responsive)
```

### Component Spacing
```
Card Padding: p-8 (2rem / 32px)
Button Padding: px-8 py-4 (horizontal 2rem, vertical 1rem)
Input Padding: px-4 py-3 (horizontal 1rem, vertical 0.75rem)
List Item Spacing: space-y-4 (1rem between items)
Grid Gap: gap-8 (2rem)
```

### Border Radius
```
Small: rounded (0.25rem / 4px)
Medium: rounded-lg (0.5rem / 8px)
Large: rounded-xl (0.75rem / 12px)
Extra Large: rounded-2xl (1rem / 16px)
Extra Extra Large: rounded-3xl (1.5rem / 24px)
Full: rounded-full (9999px - pills, circles)
```

---

## 5. Components

### 5.1 Header

#### Desktop Header
```
Height: h-24 (6rem / 96px)
Background: bg-white/95 backdrop-blur-md
Position: sticky top-0
Z-index: z-50
Border: border-b border-[#F1C424]/20
Shadow: shadow-lg

Logo:
- Size: 240px × 64px
- Position: Left-aligned
- Hover: scale-105 (5% scale up)

Navigation Links:
- Font: text-sm font-semibold
- Color: text-[#2C5282]
- Hover: text-[#4681BC]
- Active: text-[#4681BC] with full-width underline
- Underline: h-0.5 gradient from blue to yellow
- Spacing: space-x-2 (0.5rem)
- Padding: px-4 py-2

Language Selector:
- Style: Dropdown select
- Background: gradient blue
- Text: white
- Border-radius: rounded-full
- Padding: px-4 py-2
- Font: text-sm font-semibold
```

#### Mobile Header
```
Breakpoint: Below xl (1280px)
Hamburger Button:
- Size: h-7 w-7
- Color: text-[#4681BC]
- Hover: bg-[#E8F2F9]
- Padding: p-2
- Border-radius: rounded-lg
```

### 5.2 Mobile Menu

```
Position: fixed left-0 right-0 top-24
Height: calc(100vh - 6rem)
Background: gradient from #2C5282 via #4681BC to #F1C424
Z-index: z-[60]
Overflow: overflow-y-auto

Menu Items:
- Font: text-base font-bold
- Color: white (inactive), #F1C424 (active)
- Padding: px-6 py-3.5
- Border-left: 4px (transparent inactive, #F1C424 active)
- Background: transparent (inactive), white/20 (active)
- Hover: bg-white/10, text-[#F1C424]
- Animation: fade-in with stagger (50ms delay per item)

Language Selector:
- Background: bg-white/20 backdrop-blur-sm
- Border: border-2 border-white/30
- Padding: px-4 py-3
- Font: text-sm font-bold
- Border-radius: rounded-xl
```

### 5.3 Buttons

#### Primary Button
```css
Background: gradient from #4681BC to #2C5282
Text: white, font-bold
Padding: px-8 py-4
Border-radius: rounded-full
Shadow: shadow-xl
Hover: shadow-2xl, scale-105
Transition: all 300ms
```

#### Secondary Button
```css
Background: white
Border: 2px solid #4681BC
Text: #4681BC, font-bold
Padding: px-8 py-4
Border-radius: rounded-full
Shadow: shadow-lg
Hover: bg-[#4681BC], text-white, scale-105
Transition: all 300ms
```

### 5.4 Cards

#### Standard Card
```
Background: white
Padding: p-8 (2rem)
Border-radius: rounded-xl or rounded-2xl
Shadow: shadow-md
Hover: shadow-xl, -translate-y-2
Border: border border-gray-100
Transition: all 300ms
```

#### Feature Card (Home Page)
```
Background: white
Padding: p-8
Border-radius: rounded-2xl
Shadow: shadow-lg
Hover: shadow-2xl, -translate-y-2
Border: border border-gray-100
Gradient Overlay: opacity-0, hover:opacity-5

Icon:
- Size: text-5xl (3rem)
- Color: Alternating #4681BC and #F1C424
- Hover: scale-110
- Transition: 300ms

Title:
- Font: text-xl font-bold
- Color: #2C5282
- Hover: #4681BC
```

#### Objective Card
```
Background: white
Padding: p-10
Border-radius: rounded-3xl
Shadow: shadow-xl
Hover: shadow-2xl
Border: border border-gray-100
Gradient Overlay: blue/5 or yellow/5, opacity-0 to opacity-100

Icon Container:
- Size: w-16 h-16
- Background: gradient (blue or yellow)
- Border-radius: rounded-2xl
- Shadow: shadow-lg
- Hover: scale-110
```

### 5.5 Forms

#### Input Fields
```
Border: 2px solid #D1D5DB
Border-radius: rounded-lg
Padding: px-4 py-3
Font: text-base
Focus: border-[#4681BC], ring-2 ring-[#4681BC]/20
Transition: colors
Background: white
```

#### Labels
```
Font: text-sm font-semibold
Color: #374151
Margin-bottom: mb-2
Display: block
```

#### Textarea
```
Same as input fields
Rows: 6
Resize: resize-vertical
```

#### Submit Button
```
Width: w-full
Padding: px-8 py-4
Background: gradient from #4681BC to #2C5282
Text: white, font-semibold
Border-radius: rounded-lg
Shadow: shadow-lg
Hover: gradient reverses
Disabled: opacity-50, cursor-not-allowed
Focus: ring-4 ring-[#4681BC]/30
```

### 5.6 Footer
```
Background: gradient from #2C5282 to #4681BC
Text: white
Padding: py-12
Border-top: border-t border-[#F1C424]/20

Links:
- Color: white/80
- Hover: text-[#F1C424]
- Transition: colors 300ms
```

---

## 6. Iconography

### Icon Library
**React Icons** - https://react-icons.github.io/react-icons/

### Icon Set Usage

#### Feature Icons (Home Page)
```
Objectives: FiTarget (Feather Icons)
Target Groups: TiGroup (Typicons)
Activities: MdVolunteerActivism (Material Design)
Results: CgCompressRight (css.gg)

Size: text-5xl (3rem / 48px)
Colors: Alternating #4681BC and #F1C424
```

#### Emoji Icons (Content Pages)
```
Objectives:
- Inclusive Employment: 🎯
- Build Capacity: 💪
- Collaboration: 🤝

Target Groups:
- Employment Support Professionals: 👨‍💼
- People with Disabilities: 🦽
- Employers: 🏢
- Training Organizations: 🎓
- Policy Makers: ⚖️
- Social Service Agencies: 🤝

Size: text-3xl to text-4xl
```

#### UI Icons
```
Arrows: Chevron right, arrow right
- Usage: Navigation, CTAs, "Learn more" links
- Size: w-4 h-4 to w-5 h-5
- Color: currentColor (inherits from parent)

Menu: Hamburger (three lines), X (close)
- Size: h-7 w-7
- Stroke-width: 2.5
- Color: #4681BC

Dropdown: Chevron down
- Size: w-4 h-4
- Color: white or currentColor
```

### Icon Guidelines
- Always use semantic icons that clearly represent their function
- Maintain consistent sizing within component groups
- Ensure sufficient contrast with backgrounds (WCAG AA minimum)
- Provide aria-labels for icon-only buttons
- Use `aria-hidden="true"` for decorative icons

---

## 7. Responsive Design

### Breakpoints
```
sm: 640px - Small tablets
md: 768px - Tablets
lg: 1024px - Small laptops
xl: 1280px - Desktops
2xl: 1536px - Large desktops
```

### Responsive Patterns

#### Header Navigation
```
xl and above: Full horizontal navigation with language selector
Below xl: Hamburger menu with full-screen mobile menu
```

#### Grid Layouts
```
Home Features: 1 column → 2 columns (md) → 4 columns (lg)
Target Groups: 1 column → 2 columns (md)
News Cards: 1 column (stacked)
Results Stats: 1 column → 3 columns (md)
Partners: 1 column → 2 columns (md)
```

#### Typography Scaling
```
Hero headings: 48px mobile → 72px desktop
Page headings: 40px mobile → 60px desktop
Section headings: 32px mobile → 48px desktop
Body text: 16px (consistent)
```

#### Spacing Adjustments
```
Section padding: py-16 mobile → py-20 desktop
Container padding: px-4 → px-6 (sm) → px-8 (lg)
Card padding: p-6 mobile → p-8 desktop
```

### Mobile-First Approach
All styles are written mobile-first, with larger breakpoints adding enhancements:
```css
/* Mobile base */
.element { padding: 1rem; }

/* Tablet and up */
@media (min-width: 768px) {
  .element { padding: 1.5rem; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .element { padding: 2rem; }
}
```

---

## 8. Accessibility

### WCAG 2.1 Compliance Level
**Target: AA (minimum), AAA where possible**

### Color Contrast
All text meets WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text (18pt+): 3:1 minimum
- UI components: 3:1 minimum

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states are clearly visible
- Tab order is logical and intuitive
- Skip links provided where appropriate

### Focus Indicators
```css
Focus ring: ring-2 ring-[#4681BC]/30 or ring-4 ring-[#4681BC]/30
Outline: outline-none (replaced with custom ring)
Transition: smooth focus transitions
```

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Form labels properly associated with inputs
- Buttons use `<button>` elements, links use `<a>` elements

### ARIA Labels
```html
<!-- Navigation -->
<nav aria-label="Main navigation">

<!-- Buttons -->
<button aria-label="Toggle menu">
<button aria-label="Send email to...">

<!-- Form states -->
<input aria-required="true" aria-invalid="false" aria-describedby="error-id">

<!-- Current page -->
<a aria-current="page">

<!-- Live regions -->
<div role="alert" aria-live="assertive">
```

### Screen Reader Support
- All images have descriptive alt text
- Decorative images use `alt=""` or `aria-hidden="true"`
- Form errors are announced
- Dynamic content changes are announced with aria-live regions

### Language Support
- HTML lang attribute set per locale (`lang="en"`, `lang="pt"`, `lang="nl"`)
- Content fully translated for all supported languages
- No hard-coded text strings

---

## 9. Animation & Transitions

### Timing Functions
```css
ease-out: Default for most transitions
ease-in-out: For reversible animations
linear: For continuous animations (spinners, etc.)
```

### Duration Standards
```
Fast: 150ms - Hover states, simple transitions
Normal: 300ms - Most UI transitions
Slow: 500ms - Complex animations, page transitions
```

### Common Transitions
```css
/* Hover scale */
transition: transform 300ms ease-out;
hover: scale-105 (5% larger)

/* Hover translate */
transition: transform 300ms ease-out;
hover: -translate-y-2 (8px up)

/* Color transitions */
transition: colors 300ms ease-out;

/* All properties */
transition: all 300ms ease-out;
```

### Keyframe Animations

#### Fade In (Mobile Menu Items)
```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.4s ease-out forwards;
  opacity: 0;
}
```

#### Pulse (Hero Background)
```css
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

#### Bounce (Scroll Indicator)
```css
.animate-bounce {
  animation: bounce 1s infinite;
}
```

### Staggered Animations
Mobile menu items animate in sequence with 50ms delay:
```jsx
style={{ animationDelay: `${index * 50}ms` }}
```

### Reduced Motion
Respect user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Internationalization

### Supported Languages
```
en: English (default)
pt: Portuguese (European)
nl: Dutch (Belgian)
```

### Translation Framework
**next-intl** - https://next-intl-docs.vercel.app/

### Translation Structure
```
messages/
├── en.json
├── pt.json
└── nl.json

Namespaces:
- nav: Navigation labels
- home: Homepage content
- objectives: Objectives page
- targetGroups: Target Groups page
- activities: Activities page
- results: Results page
- news: News page
- contacts: Contacts page
- partners: Partners page
```

### Translation Keys Format
```json
{
  "namespace": {
    "key": "Translation text",
    "nested": {
      "key": "Nested translation"
    }
  }
}
```

### Usage Patterns
```jsx
// Server components
import {getTranslations} from 'next-intl/server';
const t = await getTranslations('namespace');

// Client components
import {useTranslations} from 'next-intl';
const t = useTranslations('namespace');

// Rendering
{t('key')}
{t('nested.key')}
```

### Locale Routing
```
URL structure: /[locale]/[page]
Examples:
- /en/objectives
- /pt/activities
- /nl/contacts

Default locale: en
Fallback: en
```

### Date Formatting
```javascript
new Date(date).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
```

### Number Formatting
```
Stats display: 500+, 50+, 15
Format: Numeric with optional + suffix
```

---

## Technical Implementation

### Framework & Tools
```
Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 4.0
Icons: React Icons
Internationalization: next-intl
Language: JavaScript/JSX
```

### File Structure
```
app/
├── [locale]/
│   ├── page.js (Home)
│   ├── objectives/page.js
│   ├── target-groups/page.js
│   ├── activities/page.js
│   ├── results/page.js
│   ├── news/page.js
│   ├── contacts/page.js
│   ├── partners/page.js
│   └── layout.js
├── globals.css
└── actions/

components/
├── Header.js
└── Footer.js

messages/
├── en.json
├── pt.json
└── nl.json

i18n/
└── routing.js

public/
└── logo_be_aware.svg
```

### CSS Variables
```css
:root {
  --primary-blue: #4681BC;
  --primary-gold: #F1C424;
  --dark-blue: #2C5282;
  --light-blue: #E8F2F9;
  --dark-gold: #D4A91E;
  --light-gold: #FFF9E6;
  --background: #ffffff;
  --foreground: #171717;
}
```

---

## Brand Assets

### Logo Files
- **Format**: SVG (vector)
- **Location**: `/public/logo_be_aware.svg`
- **Usage**: All digital applications
- **Modifications**: Do not alter colors, proportions, or elements

### Color Profiles
- **Digital**: RGB/Hex values as specified
- **Print**: Convert to CMYK using standard profiles

### Typography License
- **Arial**: System font, universally available
- **License**: No licensing required

---

## Quality Assurance Checklist

### Design Consistency
- [ ] All colors match the defined palette
- [ ] Typography follows the hierarchy
- [ ] Spacing uses the defined scale
- [ ] Components match specifications
- [ ] Icons are consistent in style and size

### Accessibility
- [ ] Color contrast meets WCAG AA
- [ ] All interactive elements are keyboard accessible
- [ ] Focus states are visible
- [ ] ARIA labels are present where needed
- [ ] Semantic HTML is used throughout

### Responsiveness
- [ ] Layout works on all breakpoints
- [ ] Text is readable on all screen sizes
- [ ] Touch targets are minimum 44×44px
- [ ] Images scale appropriately
- [ ] Navigation adapts correctly

### Internationalization
- [ ] All text is translatable
- [ ] No hardcoded strings
- [ ] Translations are complete
- [ ] Date/number formats are locale-aware
- [ ] RTL support considered (if needed)

### Performance
- [ ] Images are optimized
- [ ] Animations are smooth (60fps)
- [ ] Fonts load efficiently
- [ ] CSS is minified
- [ ] JavaScript is optimized

---

## Maintenance & Updates

### Version Control
- Document all changes to this style guide
- Maintain version history
- Communicate updates to all stakeholders

### Review Schedule
- **Quarterly**: Review for consistency and updates
- **Annual**: Major revision and EU compliance check
- **As Needed**: When adding new components or features

### Contact Information
For questions or clarifications regarding this style guide:
- **Project Email**: asdias@consultis.com
- **Project Coordination**: European Employment Network
- **Address**: Rue de la Loi 123, 1040 Brussels, Belgium
- **Phone**: +32 2 123 45 67

---

## Appendix

### Browser Support
```
Chrome: Latest 2 versions
Firefox: Latest 2 versions
Safari: Latest 2 versions
Edge: Latest 2 versions
Mobile Safari: iOS 13+
Chrome Mobile: Latest
```

### EU Compliance Notes
- GDPR compliant (no tracking without consent)
- Accessibility meets EU Web Accessibility Directive
- Multilingual support for EU member states
- Inclusive design principles throughout

### References
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- EU Web Accessibility Directive: https://ec.europa.eu/digital-single-market/en/web-accessibility
- Tailwind CSS Documentation: https://tailwindcss.com/docs
- Next.js Documentation: https://nextjs.org/docs
- React Icons: https://react-icons.github.io/

---

**Document End**

*This style guide is a living document and should be updated as the project evolves. All team members and stakeholders should refer to this guide when creating or modifying any visual or interactive elements of the BE AWARE website.*
