#!/bin/bash

# Script to set Supabase Edge Function secrets for Sanity CMS integration
# Make sure you're logged in: supabase login

echo "Setting Supabase secrets for Sanity CMS..."

# Read values from .env file
source .env

if [ -z "$SANITY_PROJECT_ID" ] || [ -z "$SANITY_API_TOKEN" ]; then
  echo "Error: SANITY_PROJECT_ID and SANITY_API_TOKEN must be set in .env file"
  exit 1
fi

# Set secrets
supabase secrets set SANITY_PROJECT_ID="$SANITY_PROJECT_ID" --project-ref yxbadmspxjcuagpehosl
supabase secrets set SANITY_DATASET="${SANITY_DATASET:-production}" --project-ref yxbadmspxjcuagpehosl
supabase secrets set SANITY_API_TOKEN="$SANITY_API_TOKEN" --project-ref yxbadmspxjcuagpehosl

echo ""
echo "✅ Secrets set successfully!"
echo ""
echo "Verify with: supabase secrets list --project-ref yxbadmspxjcuagpehosl"

