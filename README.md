# My Portfolio

A personal portfolio website showcasing my illustration and visual media work.

## Tech Stack

- **React** + **TypeScript** (Vite)
- **Tailwind CSS** — styling
- **Framer Motion** — animations
- **Lenis** — smooth scroll
- **React Router** — client-side routing
- **Supabase** — database and image storage
- **Vercel** — hosting

## Getting Started

1. Clone the repo

```bash
   git clone https://github.com/YOUR_USERNAME/my-portfolio.git
   cd my-portfolio
```

2. Install dependencies

```bash
   npm install
```

3. Set up environment variables — create a `.env.local` file in the root:
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

4. Run the dev server

```bash
   npm run dev
```

## Notes

Supabase credentials are required to fetch project data and images.
The `.env.local` file is gitignored and never committed.
