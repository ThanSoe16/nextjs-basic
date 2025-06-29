// README.tsx

/\*\*

- ✅ Overview
- This project uses Next.js App Router and has the following architecture:
-
- ── Pages and Layout Structure
- - app/layout.tsx : Global layout (header, sidebar)
- - app/template.tsx : Per-navigation layout with animation support
- - app/global-error.tsx : Catch-all server error boundary
- - components/ErrorContainer.tsx : Client-side error boundary for rendering errors in UI (non-breaking)
-
- ── API Server Side
- - All API routes are under /app/api/\*
- - These use edge/serverless functions to connect to a backend (e.g., Supabase or Prisma)
- - Reusable utility functions: `errorResponse`, `successResponse`
    \*/
