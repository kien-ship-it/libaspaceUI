# Design Document: Mobile Responsive Layout

## Overview

This design implements a responsive layout system for the JobNova website that adapts between mobile and desktop views. The core approach is to create a centralized AppShell component that manages layout state and renders existing components (Sidebar, AI Panel) either inline (desktop) or within drawer overlays (mobile). The implementation preserves all existing component internals while adding responsive behavior through composition.

## Architecture

The responsive layout follows a shell-based architecture pattern:

```
┌─────────────────────────────────────────────────────────────┐
│                        AppShell                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Mobile Header (visible < md)                            ││
│  │ [Menu Button]              [Logo]              [AI Btn] ││
│  └─────────────────────────────────────────────────────────┘│
│                                                              │
│  ┌──────────┐  ┌─────────────────────┐  ┌──────────────────┐│
│  │ Sidebar  │  │    Main Content     │  │    AI Panel      ││
│  │(fixed or │  │   (children prop)   │  │  (fixed or       ││
│  │ drawer)  │  │                     │  │   drawer)        ││
│  └──────────┘  └─────────────────────┘  └──────────────────┘│
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Drawer (left) - contains Sidebar on mobile              ││
│  └─────────────────────────────────────────────────────────┘│
│  ┌─────────────────────────────────────────────────────────┐│
│  │ Drawer (right) - contains AI Panel on mobile            ││
│  └─────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────┘
```

### Layout Modes

**Desktop (>= md / 768px):**
- Sidebar: Fixed left position, always visible
- Main Content: Margin-left to account for sidebar width
- AI Panel: Fixed right column, always visible
- Mobile Header: Hidden

**Mobile (< md / 768px):**
- Sidebar: Hidden, accessible via left drawer
- Main Content: Full width, no margins
- AI Panel: Hidden, accessible via right drawer
- Mobile Header: Visible with menu and AI buttons

## Components and Interfaces

### Drawer Component

```typescript
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  position: 'left' | 'right';
  children: React.ReactNode;
  ariaLabel: string;
}
```

The Drawer component is a reusable overlay panel that:
- Renders a semi-transparent backdrop when open
- Slides content in from the specified side
- Handles ESC key press for closing
- Handles backdrop click for closing
- Applies scroll lock when open
- Includes proper ARIA attributes for accessibility

### AppShell Component

```typescript
interface AppShellProps {
  children: React.ReactNode;
  aiPanel?: React.ReactNode;
}
```

The AppShell component:
- Manages `isSidebarOpen` and `isAiOpen` state
- Renders the mobile header with toggle buttons (visible < md)
- Renders Sidebar inline on desktop, in left Drawer on mobile
- Renders AI Panel inline on desktop, in right Drawer on mobile
- Passes children as the main content area

### MobileHeader Component

```typescript
interface MobileHeaderProps {
  onMenuClick: () => void;
  onAiClick: () => void;
}
```

The MobileHeader component:
- Displays menu button (hamburger icon) on the left
- Displays logo in the center
- Displays AI button on the right
- Only visible on mobile (< md breakpoint)

### useMediaQuery Hook

```typescript
function useMediaQuery(query: string): boolean
```

A custom hook that:
- Returns true/false based on whether the media query matches
- Updates on window resize
- Handles SSR by defaulting to false

## Data Models

No new data models are required. The feature uses existing component props and React state for UI management.

### State Management

```typescript
// AppShell internal state
interface AppShellState {
  isSidebarOpen: boolean;  // Controls left drawer visibility
  isAiOpen: boolean;       // Controls right drawer visibility
}
```



## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system-essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

Based on the acceptance criteria analysis, the following properties must hold:

### Property 1: Mobile layout configuration
*For any* viewport width below 768px, the AppShell SHALL hide the Sidebar and AI Panel from the main layout flow, display a mobile header with menu button (left) and AI button (right), and the header SHALL be visible.
**Validates: Requirements 1.1, 2.1, 6.1, 6.2, 6.3**

### Property 2: Desktop layout configuration
*For any* viewport width at or above 768px, the AppShell SHALL display the Sidebar in its fixed left position, display the AI Panel in its right column, and hide the mobile header.
**Validates: Requirements 1.4, 2.4, 6.4**

### Property 3: Drawer toggle behavior
*For any* drawer (sidebar or AI), when the corresponding toggle button is clicked, the drawer SHALL open and display its content (Sidebar for menu button, AI Panel for AI button).
**Validates: Requirements 1.2, 2.2**

### Property 4: Drawer close mechanisms
*For any* open drawer, clicking the backdrop OR pressing the ESC key SHALL close the drawer and return focus to the trigger button.
**Validates: Requirements 1.3, 2.3, 3.4, 3.5**

### Property 5: Drawer position behavior
*For any* Drawer component, when position="left" the drawer SHALL slide from the left edge, and when position="right" the drawer SHALL slide from the right edge.
**Validates: Requirements 3.1, 3.2**

### Property 6: Drawer backdrop visibility
*For any* Drawer component in the open state, a semi-transparent backdrop SHALL be rendered covering the main content.
**Validates: Requirements 3.3**

### Property 7: Drawer scroll lock
*For any* Drawer component in the open state, the document body SHALL have scroll disabled (overflow: hidden).
**Validates: Requirements 3.6**

### Property 8: Drawer accessibility attributes
*For any* Drawer component, the drawer element SHALL include role="dialog", aria-modal="true", and an aria-label attribute.
**Validates: Requirements 3.7**

### Property 9: Mobile content layout
*For any* viewport width below 768px, the main content area SHALL expand to full viewport width without sidebar margin and without the AI Panel rendered inline.
**Validates: Requirements 4.1, 4.2**

### Property 10: Desktop three-column layout
*For any* viewport width at or above 768px, the layout SHALL maintain three columns: Sidebar (fixed left), Main Content (center), AI Panel (right column).
**Validates: Requirements 4.3**

### Property 11: No horizontal overflow
*For any* viewport width and any layout transition, the AppShell SHALL not cause horizontal overflow (no horizontal scrollbar).
**Validates: Requirements 4.4**

### Property 12: AppShell state management
*For any* AppShell instance, the component SHALL internally manage isSidebarOpen and isAiOpen boolean states that control drawer visibility.
**Validates: Requirements 5.1**

## Error Handling

### Drawer Component
- If `onClose` callback is not provided, the drawer should still render but close actions will have no effect
- If `children` is null/undefined, render an empty drawer panel
- Handle rapid open/close toggling gracefully without animation glitches

### AppShell Component
- If `aiPanel` prop is not provided, hide the AI button on mobile and don't render the right column on desktop
- Handle SSR gracefully by defaulting to desktop layout (to avoid hydration mismatch)

### useMediaQuery Hook
- Return `false` during SSR (window is undefined)
- Clean up event listeners on unmount to prevent memory leaks
- Debounce resize events to prevent excessive re-renders

## Testing Strategy

### Testing Framework
- Use Vitest as the test runner (already configured in Next.js projects)
- Use React Testing Library for component testing
- Use fast-check for property-based testing

### Unit Tests

Unit tests will cover specific examples and edge cases:

1. **Drawer Component**
   - Renders children when open
   - Does not render children when closed
   - Calls onClose when backdrop is clicked
   - Calls onClose when ESC is pressed
   - Has correct ARIA attributes

2. **MobileHeader Component**
   - Renders menu and AI buttons
   - Calls correct handlers on button clicks

3. **AppShell Component**
   - Renders Sidebar inline on desktop
   - Renders AI Panel inline on desktop
   - Hides mobile header on desktop

4. **useMediaQuery Hook**
   - Returns false during SSR
   - Returns correct value based on window width
   - Updates on resize

### Property-Based Tests

Property-based tests will verify universal properties across many inputs:

1. **Property 1 & 2: Layout configuration by viewport**
   - Generate random viewport widths
   - Verify correct layout configuration based on breakpoint threshold

2. **Property 3 & 4: Drawer toggle and close**
   - Generate sequences of open/close actions
   - Verify drawer state is always consistent with actions

3. **Property 5: Drawer position**
   - Generate random position values ("left" | "right")
   - Verify correct CSS positioning

4. **Property 6, 7, 8: Drawer open state properties**
   - Generate random open/close states
   - Verify backdrop, scroll lock, and ARIA attributes are correct for each state

5. **Property 11: No horizontal overflow**
   - Generate random viewport widths and drawer states
   - Verify no horizontal overflow occurs

### Test Annotations
Each property-based test MUST be tagged with a comment in this format:
`**Feature: mobile-responsive-layout, Property {number}: {property_text}**`

### Test Configuration
- Property-based tests should run a minimum of 100 iterations
- Use viewport mocking utilities for responsive tests
