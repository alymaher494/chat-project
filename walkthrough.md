# ROOT Deployment Build Walkthrough

Here is a summary of the layout fixes completed:

## Changes Implemented

### 1. Switched Build Configuration to Root Domain
- **File**: [next.config.ts](file:///c:/Users/alyma/Downloads/workspace-f01ef353-a637-473b-acaf-5518f1eff44f/next.config.ts)
  - Removed `basePath` and `assetPrefix` keys to build for the root directory (`/`).
- **File**: [hero-section.tsx](file:///c:/Users/alyma/Downloads/workspace-f01ef353-a637-473b-acaf-5518f1eff44f/src/components/hero-section.tsx)
  - Modified standard styling URL inside iframe query parameters to point directly to `https://librairc.net/custom-kiwi.css` (root).

---

## Verification Results
- Ran `npm run build` which successfully outputted the static files under the `/out` directory.
- Zipped contents of `out` folder directly into a root deployment package `out.zip`.
