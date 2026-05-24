# Project Instructions & Locked States

## 1. Locked Home Screen & Layout State (DO NOT MODIFY)
The following visual elements and layout files have been optimized to perfection and **MUST NOT** be modified, refactored, or adjusted under any circumstances unless explicitly requested by the user:

- **Top Navigation (`src/components/Navigation.tsx`)**:
  - Regular header height (`py-5` padding, down from `py-8`).
  - Strict black (`#000000`) branding text and SVG logo style via `filter: brightness(0)`.
  - Minimal size for logo branding text.

- **Hero Typography (`src/components/HeroView.tsx`)**:
  - Visual layout is left-constrained (up to `xl:max-w-[45%]`) so that texts do not overlap or overlay the video's subject.
  - Title font size: `text-[10vw] md:text-[8vw] lg:text-[6.8vw] xl:text-[6.4rem] leading-[0.85]` for a spacious, elegant editorial style.
  - Chinese narrative bio is set to highly readable `text-[14px]` with standard sans-serif typeface matching the tracking constraints (`tracking-[0.16em]`).
  - No shadows, outline-borders, or secondary bounding-boxes surrounding the main display typography.

- **Introductory Presentation Video (`src/App.tsx` aspect positions)**:
  - Background portrait video is aligned perfectly to the left side (`object-[15%_center] md:object-[22%_center] lg:object-[28%_center]`) to keep the presenter shifted out of the way of the left-hand text column.
