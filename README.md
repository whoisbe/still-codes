# Still Codes

A modern portfolio website built with SvelteKit 5, featuring a headless CMS architecture with Sanity and Supabase Edge Functions.

## 🚀 Features

- **SvelteKit 5** with Svelte 5 runes (`$props`, `$state`, etc.)
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Sanity CMS** for content management
- **Supabase Edge Functions** for API layer
- **File-based routing** with SvelteKit
- **Responsive design** with modern UI components

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm or yarn
- Supabase account and project
- Sanity account and project

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/still-codes.git
cd still-codes
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=your-project-id
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_BASE_PATH=/functions/v1/your-function-name

# Sanity Configuration (for migration script)
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
```

## 🏃 Development

Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## 📦 Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 🗂️ Project Structure

```
still-codes/
├── src/
│   ├── routes/              # File-based routing
│   │   ├── +layout.svelte   # Root layout
│   │   └── +page.svelte     # Home page
│   ├── lib/
│   │   ├── components/      # Svelte components
│   │   │   ├── About.svelte
│   │   │   ├── Contact.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── Header.svelte
│   │   │   ├── Hero.svelte
│   │   │   ├── Navigation.svelte
│   │   │   ├── Services.svelte
│   │   │   └── Skills.svelte
│   │   └── utils/
│   │       └── sanity.ts    # Sanity client utilities
│   ├── components/          # UI component library
│   └── styles/              # Global styles
├── sanity/
│   └── schemas/             # Sanity CMS schemas
├── supabase/
│   └── functions/           # Supabase Edge Functions
├── scripts/                 # Utility scripts
└── package.json
```

## 🎨 Content Management

This project uses Sanity CMS for content management. Content is fetched via Supabase Edge Functions.

### Setting Up Sanity

1. Follow the setup guide in `SANITY_SETUP.md`
2. Configure your Sanity project with the schemas in `sanity/schemas/`
3. Set up Supabase secrets (see `DEPLOYMENT_COMPLETE.md`)

### Migrating Content

Run the migration script to populate Sanity with initial content:
```bash
npm run migrate:sanity
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript and Svelte checks
- `npm run check:watch` - Run checks in watch mode
- `npm run migrate:sanity` - Migrate content to Sanity

## 🏗️ Technologies

- **SvelteKit 5** - Full-stack framework
- **Svelte 5** - Component framework with runes
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vite** - Build tool (via SvelteKit)
- **Sanity** - Headless CMS
- **Supabase** - Backend as a service (Edge Functions)

## 📚 Documentation

- `SANITY_SETUP.md` - Sanity CMS setup guide
- `DEPLOYMENT_COMPLETE.md` - Deployment status and notes
- `MIGRATION.md` - Migration notes from React to SvelteKit

## 🚢 Deployment

This project is configured for deployment on Vercel (or any platform that supports SvelteKit).

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy!

The project uses `@sveltejs/adapter-auto` which automatically detects the deployment platform.

## 📝 License

Private project - All rights reserved

## 👤 Author

Still Codes
