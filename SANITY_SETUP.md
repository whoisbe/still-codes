# Sanity CMS Migration Setup Guide

This guide will help you set up and migrate your website content to Sanity CMS via Supabase Edge Functions.

## Prerequisites

1. Sanity project with API token (with write permissions)
2. Supabase project (already configured)
3. Node.js and npm installed

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration (already provided)
VITE_SUPABASE_PROJECT_ID=yxbadmspxjcuagpehosl
VITE_SUPABASE_URL=https://yxbadmspxjcuagpehosl.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
VITE_API_BASE_PATH=/functions/v1/make-server-2b77be06

# Sanity Configuration (for migration script)
SANITY_PROJECT_ID=your-sanity-project-id
SANITY_DATASET=production
SANITY_API_TOKEN=your-sanity-api-token
```

## Step 3: Set Up Sanity Schemas

The Sanity schemas are already created in `sanity/schemas/`. You need to:

1. Set up a Sanity Studio project (if not already done)
2. Import the schemas into your Sanity Studio configuration

To set up Sanity Studio, you can create a `sanity.config.ts` file:

```typescript
import { defineConfig } from 'sanity';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Website CMS',
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [],
  schema: {
    types: schemaTypes,
  },
});
```

Or use the Sanity CLI to initialize a new project and copy the schemas.

## Step 4: Deploy Supabase Edge Function

1. Install Supabase CLI if you haven't already:
   ```bash
   npm install -g supabase
   ```

2. Link your project:
   ```bash
   supabase link --project-ref yxbadmspxjcuagpehosl
   ```

3. Set secrets for the edge function:
   ```bash
   supabase secrets set SANITY_PROJECT_ID=your-sanity-project-id
   supabase secrets set SANITY_DATASET=production
   supabase secrets set SANITY_API_TOKEN=your-sanity-api-token
   ```

4. Deploy the edge function:
   ```bash
   supabase functions deploy sanity-content
   ```

## Step 5: Run Migration Script

Migrate your existing content to Sanity:

```bash
npm run migrate:sanity
```

This will:
- Upload the logo image to Sanity
- Create all content documents (Hero, About, Services, Skills, Contact, Footer, Navigation)

## Step 6: Verify Setup

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Check that all content loads from Sanity via the edge function

3. Verify in Sanity Studio that all content was created correctly

## Troubleshooting

### Edge Function Errors

- Check that all secrets are set correctly in Supabase
- Verify the edge function is deployed: `supabase functions list`
- Check function logs: `supabase functions logs sanity-content`

### Migration Script Errors

- Ensure `SANITY_PROJECT_ID` and `SANITY_API_TOKEN` are set in `.env`
- Verify the API token has write permissions
- Check that the dataset name matches your Sanity project

### Frontend Loading Issues

- Verify `VITE_SUPABASE_URL` and `VITE_API_BASE_PATH` are correct
- Check browser console for fetch errors
- Ensure the edge function is accessible and returns valid JSON

## Next Steps

- Update content in Sanity Studio
- Content changes will automatically reflect on the website
- No code changes needed for content updates!

