# Requirements Document

## Introduction

This feature implements a mobile-first responsive layout for the JobNova landing website. The layout adapts between mobile (< md breakpoint) and desktop (>= md breakpoint) views. On mobile, the left sidebar and AI chat panel are hidden behind drawer buttons, while on desktop they remain always visible. All existing components (Sidebar, JobDetailAIPanel, AIPanelCard) are preserved and relocated into drawers on mobile without rewriting their internals.

## Glossary

- **AppShell**: A wrapper component that manages the responsive layout, controlling sidebar and AI panel visibility across breakpoints
- **Drawer**: A reusable overlay panel component that slides in from the left or right side of the screen
- **Sidebar**: The existing left navigation component containing logo, navigation items, and subscription CTA
- **AI Panel**: The existing right panel component displaying AI-powered job match analysis (JobDetailAIPanel or AIPanelCard)
- **Mobile View**: Screen width below the md breakpoint (< 768px)
- **Desktop View**: Screen width at or above the md breakpoint (>= 768px)
- **Breakpoint**: The screen width threshold (md = 768px) that triggers layout changes

## Requirements

### Requirement 1

**User Story:** As a mobile user, I want to access the sidebar navigation through a menu button, so that I can navigate the app without the sidebar taking up screen space.

#### Acceptance Criteria

1. WHILE the viewport width is below the md breakpoint, THE AppShell SHALL hide the Sidebar from the main layout and display a menu button in the header
2. WHEN a user taps the menu button on mobile, THE Drawer SHALL open from the left side and display the Sidebar component
3. WHEN a user taps the backdrop or presses ESC while the sidebar drawer is open, THE Drawer SHALL close and return focus to the menu button
4. WHILE the viewport width is at or above the md breakpoint, THE AppShell SHALL display the Sidebar in its fixed left position and hide the menu button

### Requirement 2

**User Story:** As a mobile user, I want to access the AI analysis panel through a dedicated button, so that I can view job match insights without the panel taking up screen space.

#### Acceptance Criteria

1. WHILE the viewport width is below the md breakpoint, THE AppShell SHALL hide the AI Panel from the main layout and display an AI button in the header
2. WHEN a user taps the AI button on mobile, THE Drawer SHALL open from the right side and display the AI Panel component
3. WHEN a user taps the backdrop or presses ESC while the AI drawer is open, THE Drawer SHALL close and return focus to the AI button
4. WHILE the viewport width is at or above the md breakpoint, THE AppShell SHALL display the AI Panel in its fixed right column and hide the AI button

### Requirement 3

**User Story:** As a developer, I want a reusable Drawer component, so that I can consistently implement slide-out panels throughout the application.

#### Acceptance Criteria

1. WHEN the Drawer component is rendered with position="left", THE Drawer SHALL slide in from the left edge of the viewport
2. WHEN the Drawer component is rendered with position="right", THE Drawer SHALL slide in from the right edge of the viewport
3. WHEN the Drawer is open, THE Drawer SHALL display a semi-transparent backdrop that covers the main content
4. WHEN a user clicks the backdrop, THE Drawer SHALL close by invoking the onClose callback
5. WHEN a user presses the ESC key while the Drawer is open, THE Drawer SHALL close by invoking the onClose callback
6. WHILE the Drawer is open, THE Drawer SHALL prevent body scroll by applying scroll lock to the document
7. WHEN the Drawer is rendered, THE Drawer SHALL include role="dialog", aria-modal="true", and aria-label attributes for accessibility

### Requirement 4

**User Story:** As a mobile user, I want the main content to use the full screen width, so that I can view job listings without horizontal overflow or broken layouts.

#### Acceptance Criteria

1. WHILE the viewport width is below the md breakpoint, THE main content area SHALL expand to full viewport width without the sidebar margin
2. WHILE the viewport width is below the md breakpoint, THE main content area SHALL not display the AI Panel inline
3. WHILE the viewport width is at or above the md breakpoint, THE main content area SHALL maintain the three-column layout (Sidebar | Main | AI Panel)
4. WHEN the layout transitions between breakpoints, THE AppShell SHALL not cause horizontal overflow or layout shifts

### Requirement 5

**User Story:** As a developer, I want the responsive layout logic centralized in a single AppShell component, so that I can maintain consistent behavior across all pages.

#### Acceptance Criteria

1. WHEN the AppShell component is used, THE AppShell SHALL manage isSidebarOpen and isAiOpen state internally
2. WHEN the AppShell component is used on any page, THE AppShell SHALL render the Sidebar, main content, and AI Panel in the appropriate layout for the current breakpoint
3. WHEN the AppShell component is used, THE AppShell SHALL preserve the existing Sidebar and AI Panel components without modifying their internal implementation

### Requirement 6

**User Story:** As a user, I want the mobile header to provide clear access to navigation and AI features, so that I can easily find and use these features on small screens.

#### Acceptance Criteria

1. WHILE the viewport width is below the md breakpoint, THE mobile header SHALL display a menu button on the left side
2. WHILE the viewport width is below the md breakpoint, THE mobile header SHALL display an AI button on the right side
3. WHILE the viewport width is below the md breakpoint, THE mobile header SHALL be visible at the top of the screen
4. WHILE the viewport width is at or above the md breakpoint, THE mobile header SHALL be hidden

### Requirement 7

**User Story:** As a developer, I want the responsive implementation to use the existing semantic design tokens, so that the mobile layout maintains visual consistency with the design system.

#### Acceptance Criteria

1. WHEN implementing responsive styles, THE implementation SHALL use existing semantic CSS variables (e.g., --color-surface-*, --spacing-*, --radius-*) from globals.css
2. WHEN implementing responsive styles, THE implementation SHALL use Tailwind's md: breakpoint prefix for responsive behavior
3. WHEN new spacing or color values are needed, THE implementation SHALL add them as semantic tokens in globals.css rather than using primitive Tailwind utilities
