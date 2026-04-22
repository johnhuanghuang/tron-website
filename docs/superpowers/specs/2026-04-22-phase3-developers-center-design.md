# TRON Website Phase 3: Developer Center Design

**Date:** 2026-04-22
**Status:** Draft (pending approval)
**Phase:** Phase 3

---

## 1. Concept & Vision

Build a comprehensive Developer Center that serves as the primary entry point for TRON developers. The experience should feel like a polished documentation hub — fast, navigable, and professional. Content is fetched from `developers.tron.network` at build time, rendered in our own styling, with external links for deep-dive topics.

---

## 2. Pages & Structure

### 2.1 Developer Center Homepage (`/developers`)
**Purpose:** 4-grid entry page leading to sub-sections

**Layout:**
- Hero banner with tagline + quick stats
- 4 entrance cards in 2x2 grid:
  1. **Documentation** → `/developers/docs`
  2. **API Reference** → `/developers/api`
  3. **Cookbook** → `/developers/cookbook`
  4. **Grants & Funding** → `/developers/grants`
- Secondary links: Office Hours, Bug Bounty, GitHub

**Entrance cards:** Icon + title + description + arrow, hover glow effect (orange)

---

### 2.2 Documentation Page (`/developers/docs`)
**Purpose:** Browse TRON developer documentation

**Layout:**
- Left sidebar: category navigation (Get Started, Basics, Smart Contracts, etc.)
- Main content area: rendered Markdown with our own typography/styling
- Right sidebar (desktop): page table of contents (auto-generated from headings)
- Mobile: sidebar becomes a drawer toggled by button

**Content Strategy:**
- Fetch from `developers.tron.network` at build time
- Store as Markdown/JSON in `/content/docs/` directory
- Render using `react-markdown` + syntax highlighting (Shiki or Prism)
- External links to `developers.tron.network` for deep content
- Internal links between docs pages work as SPA navigation

**Sidebar Categories (from architecture doc):**
- Get Started
- Basics
- Smart Contracts
- TRC Tokens
- API Reference (links to `/developers/api`)
- SDKs
- Tools

---

### 2.3 API Reference Page (`/developers/api`)
**Purpose:** Interactive TRON API reference

**Layout:**
- Search bar at top (filter methods by name/category)
- Method list grouped by category (Network, TRX, Tokens, etc.)
- Each method card: name, description, parameters table, response format, "Try it" button
- Clicking a method expands to show full documentation + code examples

**Content Source:**
- Static JSON from build-time fetch of TRON API documentation
- Categories: Account, Transaction, TRC20 Token, TRC721 NFT, Network

---

### 2.4 Cookbook Page (`/developers/cookbook`)
**Purpose:** Step-by-step tutorials and example projects

**Layout:**
- Filter tabs: All / DeFi / NFT / Gaming / Infrastructure
- Card grid of tutorials
- Each card: thumbnail, title, difficulty badge, estimated time, description

**Content:** Placeholder real content (sample tutorials matching TRON ecosystem)

---

### 2.5 Grants Page (`/developers/grants`)
**Purpose:** TRON grants and funding programs

**Content Sections:**
- Grant types overview (MVP Grant, Growth Grant, Research Grant)
- Eligibility requirements
- Application process (steps)
- FAQ accordion
- Apply Now CTA button

---

### 2.6 Office Hours Page (`/developers/office-hours`)
**Purpose:** Schedule 1:1 sessions with TRON team

**Layout:**
- Calendar view showing available slots
- Booking form: name, email, project description, preferred time
- Alternatively: link to external booking tool (Calendly)

---

## 3. Component Inventory

### DevSidebar
- Collapsible category groups
- Active state highlighting
- Mobile drawer variant
- Props: `categories[]`, `currentPath`

### DocRenderer
- Renders Markdown content
- Custom components: code blocks with copy button, callout boxes, tables
- Props: `content: string`

### ApiMethodCard
- Collapsible card showing API method details
- Copy-to-clipboard for code examples
- "View Full Docs" external link
- States: collapsed, expanded, loading

### CookbookCard
- Image, title, difficulty badge, time estimate
- Hover: scale + border glow

### GrantAccordion
- Expandable FAQ items
- Smooth height animation

### BookingCalendar
- Available slots display
- Time zone selector
- Booking form

---

## 4. Technical Approach

### Content Fetching Pipeline

```
Build Time:
developers.tron.network → fetch docs → parse → store in /content/docs/*.md
                                         → build API refs JSON → /content/api-refs.json
```

**Implementation:**
- Node.js script in `/scripts/fetch-docs.ts`
- Run via `npm run fetch-docs` before build
- Or automatic via GitHub Actions on schedule
- Fetch HTML → extract main content via DOM parsing → convert to Markdown
- Fallback: if fetch fails, use cached content from last successful run

**Scripts directory:**
```
scripts/
├── fetch-docs.ts          # Main fetcher
├── parse-html.ts          # HTML to Markdown conversion
└── cache/                 # Cached content (gitignored)
```

### Routes Structure

```
app/
├── developers/
│   ├── page.tsx           # /developers homepage
│   ├── docs/
│   │   ├── page.tsx       # Documentation index
│   │   └── [...slug]/page.tsx  # Dynamic doc pages
│   ├── api/
│   │   └── page.tsx       # API Reference
│   ├── cookbook/
│   │   └── page.tsx       # Cookbook
│   ├── grants/
│   │   └── page.tsx       # Grants
│   └── office-hours/
│       └── page.tsx       # Office Hours
```

### Dependencies

- `react-markdown` - Markdown rendering
- `shiki` or `prism-react-renderer` - Syntax highlighting
- `gray-matter` - Frontmatter parsing (for doc metadata)
- `reading-time` - Estimated read time

---

## 5. Key Files to Create/Modify

**New directories:**
- `app/developers/` - All developer center pages
- `app/developers/docs/[...slug]/` - Dynamic doc route
- `components/dev/` - Developer-specific components
- `content/docs/` - Fetched documentation content
- `scripts/` - Build-time fetch scripts

**New components:**
- `components/dev/DevSidebar.tsx`
- `components/dev/DocRenderer.tsx`
- `components/dev/ApiMethodCard.tsx`
- `components/dev/CookbookCard.tsx`
- `components/dev/GrantAccordion.tsx`
- `components/dev/BookingCalendar.tsx`

**Modified files:**
- `components/layout/Header.tsx` - Add /developers to nav
- `components/layout/Footer.tsx` - Add developer links
- `app/page.tsx` - Link to developer center

---

## 6. Out of Scope for Phase 3

- Actual content population beyond initial samples (content team responsibility)
- Full-text search (Phase 6 or later)
- User authentication for Office Hours booking
- Comments/feedback on docs
- Version switching (different API versions)

---

## 7. Success Criteria

- [ ] All 6 developer center pages render correctly
- [ ] Documentation pages load from static content
- [ ] Sidebar navigation works on all doc pages
- [ ] Code blocks have syntax highlighting + copy button
- [ ] API reference shows grouped methods with search
- [ ] Mobile responsive (drawer nav, stacked layout)
- [ ] Build succeeds with `npm run build`
- [ ] External links open in new tab
