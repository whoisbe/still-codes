# Security Notes

## Current Vulnerabilities

There are 8 vulnerabilities (3 low, 5 moderate) in development dependencies:

1. **cookie package** (low severity) - affects `@sveltejs/kit`
   - Only affects development server, not production builds
   - Fix would require breaking changes to SvelteKit

2. **esbuild** (moderate severity) - affects `vite`
   - Only affects development server, not production builds
   - Fix would require upgrading to Vite 7, which has breaking changes

## Status

These vulnerabilities are in **development dependencies only** and do not affect production builds or deployed applications. They only impact the local development server.

## Recommendations

- Monitor for updates to `@sveltejs/kit` and `vite` that address these issues
- Consider upgrading when stable versions are available
- For production deployments, these vulnerabilities do not apply

## Peer Dependency Warnings

The peer dependency warnings about `svelte-hmr` expecting Svelte 3/4 while using Svelte 5 are expected and harmless. They are suppressed via `.npmrc` configuration.

