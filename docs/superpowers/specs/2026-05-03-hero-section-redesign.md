# Hero Section Redesign - Parallax + Liquidmorphism

**Date:** 2026-05-03  
**Status:** Approved  
**Branch:** feature/add-bilingual-en-np

## Overview

Redesign the hero section to use parallax scrolling with liquidmorphism (glass morphism) design. Move from static full-screen image to dynamic 2-column grid layout with animated stats cards.

## Design Decisions

### 1. Architecture & Style

**Approach:** Image Blend + Animated Stats (Approach 2 from brainstorming)

**Layout:**
- 2-column grid on desktop (text left, stats right)
- Single parallax background image with blended overlay
- Stats cards fade in with staggered animation

**Liquidmorphism Preserved:**
- Stats cards: `backdrop-filter: blur(20px) saturate(1.8)` + glass border
- Text container: subtle glass background `rgba(0,0,0,0.2)`
- Navbar glass pill (already exists, unchanged)
- Consistent with existing design system (brand green `#00864B`, light green `#F0FDF4`)

**File to Modify:** `src/pages/Home.tsx` (lines 130-374)

### 2. Parallax & Animations

**Parallax Implementation:**
```typescript
const [scrollY, setScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Apply to background div:
<div style={{
  transform: `translateY(${scrollY * 0.4}px)`,
  // ... other styles
}}>
```

**Stats Animation:**
- Reuse existing `useCountUp` hook for number animation
- `motion.div` with `whileInView` for fade-in effect
- Stagger delays: 0.2s, 0.4s, 0.6s

**Scroll Indicator:**
- Pulsing arrow at bottom center
- Fades out when scroll > 100px
- Uses CSS animation `pulse-down`

### 3. Content Layout

**Left Column (Text Content):**
- EST. 1994 badge (glass pill)
- Main H1: "Empowering Minds, Shaping Futures"
- Description: Current `t.hero.subtext`
- CTA Buttons: "Apply Now" + "Learn More" (reuse existing)
- Trust badges: Pre-Registration + Excellence Proven (existing)

**Right Column (Stats Cards):**
```
[Card 1]: 500+ Students | "Growing every year"
[Card 2]: 30+ Teachers  | "Dedicated staff"
[Card 3]: 99% Pass Rate | "Proven results"
```

**Stats Cards Style:**
```typescript
background: "rgba(255,255,255,0.08)",
backdropFilter: "blur(20px) saturate(1.8)",
WebkitBackdropFilter: "blur(20px) saturate(1.8)",
border: "1.5px solid rgba(255,255,255,0.18)",
borderRadius: "20px",
// ... rest of styles
```

**Reused Elements:**
- `useCountUp` hook (already exists)
- `stats` data from `src/data/home.ts`
- Lucide icons: `Trophy`, `Users`, `TrendingUp`
- Existing CTA button styles

## Technical Implementation

### Changes to `src/pages/Home.tsx`:

1. **Replace lines 130-374** (current hero section) with new structure:
   - Wrapper div with relative positioning + overflow hidden
   - Background image div with parallax transform
   - Gradient overlay div
   - Content grid (2 columns)
   - Scroll indicator div

2. **Add scroll state:**
   ```typescript
   const [scrollY, setScrollY] = useState(0);
   ```

3. **Add scroll listener in useEffect**

4. **Create StatsCard component** (inline or separate) with:
   - Glass morphism styling
   - CountUp animation
   - Icon display
   - Description text

### Responsive Behavior:
- Desktop (≥1024px): 2-column grid
- Tablet/Mobile (<1024px): Single column, stats below text
- Stats cards: 1-column on mobile, 3-column on desktop

## Success Criteria

1. ✅ Parallax effect works on scroll (background moves at 0.4x speed)
2. ✅ Stats cards animate in with stagger effect
3. ✅ Liquidmorphism styling consistent with navbar/design system
4. ✅ All existing content preserved (text, CTAs, trust badges)
5. ✅ Responsive layout (mobile/tablet/desktop)
6. ✅ No TypeScript errors (lint passes)
7. ✅ No console errors

## Files Modified

- `src/pages/Home.tsx` (hero section only, lines 130-374)

## Notes

- Keep existing `AnnouncementBar` - it's outside hero section
- Reuse existing translation keys (`t.hero.*`)
- Image used: `/images/imageherofinal.png` (already compressed)
- No new dependencies required
