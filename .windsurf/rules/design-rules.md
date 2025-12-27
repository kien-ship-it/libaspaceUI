---
trigger: model_decision
---

Best Practices

1.  **Verify All Dependencies Upfront:** When setting up a Next.js + Tailwind project, ensure `tailwindcss`, `postcss`, and `autoprefixer` are all listed in `package.json` and installed.
2.  **Use Semantic Naming for Design Tokens:** In `tailwind.config.ts`, always use descriptive, semantic names for your custom theme extensions, especially `spacing`. This prevents conflicts with Tailwind's default theme and makes your utility classes more intuitive (e.g., `px-padding-page-x` is clearer than `px-8`). There should be a primitives layer defining all the values, then a semantic layer that gives the use case, and then the component layer which creates groupings of those tokens to apply to components
3.  **Configure Image Domains Early:** If you're using external images with the `next/image` component, add the necessary domains to `next.config.js` at the beginning of the project to avoid runtime errors.
4.  **Adopt a Token-First Workflow:**
    *   **Step 1: Extract all tokens** from Figma (colors, fonts, spacing, radii) and define them in `tailwind.config.ts`.
    *   **Step 2: Build components** using *only* these predefined tokens. Avoid using "magic numbers" or default Tailwind utilities that don't map to your design system.
Primitives for space, typescale, gap, and padding use the fibonacci sequence. Sizes for icons use base 8 system 