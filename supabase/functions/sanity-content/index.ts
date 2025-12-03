import { createClient } from 'https://esm.sh/@sanity/client@6';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Env {
	SANITY_PROJECT_ID: string;
	SANITY_DATASET: string;
	SANITY_API_TOKEN: string;
}

Deno.serve(async (req) => {
	// Handle CORS preflight
	if (req.method === 'OPTIONS') {
		return new Response('ok', { headers: corsHeaders });
	}

	try {
		// Get environment variables
		const sanityProjectId = Deno.env.get('SANITY_PROJECT_ID');
		const sanityDataset = Deno.env.get('SANITY_DATASET') || 'production';
		const sanityApiToken = Deno.env.get('SANITY_API_TOKEN');

		if (!sanityProjectId || !sanityApiToken) {
			return new Response(
				JSON.stringify({ error: 'Missing Sanity configuration' }),
				{
					status: 500,
					headers: { ...corsHeaders, 'Content-Type': 'application/json' },
				}
			);
		}

		// Initialize Sanity client
		const client = createClient({
			projectId: sanityProjectId,
			dataset: sanityDataset,
			useCdn: false, // Use API for fresh data
			token: sanityApiToken,
			apiVersion: '2024-01-01',
		});

		// Parse request to get content type
		const url = new URL(req.url);
		const contentType = url.searchParams.get('type') || 'all';

		let data;

		switch (contentType) {
			case 'hero': {
				const hero = await client.fetch(
					`*[_type == "hero"][0]{
						title,
						subtitle,
						"logoUrl": logo.asset->url,
						ctaText
					}`
				);
				data = hero;
				break;
			}
			case 'about': {
				const about = await client.fetch(
					`*[_type == "about"][0]{
						content
					}`
				);
				data = about;
				break;
			}
			case 'services': {
				const services = await client.fetch(
					`*[_type == "service"] | order(order asc){
						title,
						description,
						tags,
						pricing
					}`
				);
				data = services;
				break;
			}
			case 'skills': {
				const skills = await client.fetch(
					`*[_type == "skillCategory"] | order(order asc){
						title,
						skills
					}`
				);
				data = skills;
				break;
			}
			case 'contact': {
				const contact = await client.fetch(
					`*[_type == "contact"][0]{
						heading,
						description,
						email,
						socialLinks
					}`
				);
				data = contact;
				break;
			}
			case 'footer': {
				const footer = await client.fetch(
					`*[_type == "footer"][0]{
						copyrightText
					}`
				);
				data = footer;
				break;
			}
			case 'navigation': {
				const navigation = await client.fetch(
					`*[_type == "navigation"][0]{
						items[]{
							label,
							sectionId,
							order
						}
					}`
				);
				data = navigation?.items || [];
				break;
			}
			case 'all': {
				// Fetch all content types in parallel
				const [hero, about, services, skills, contact, footer, navigation] = await Promise.all([
					client.fetch(
						`*[_type == "hero"][0]{
							title,
							subtitle,
							"logoUrl": logo.asset->url,
							ctaText
						}`
					),
					client.fetch(`*[_type == "about"][0]{ content }`),
					client.fetch(
						`*[_type == "service"] | order(order asc){
							title,
							description,
							tags,
							pricing
						}`
					),
					client.fetch(
						`*[_type == "skillCategory"] | order(order asc){
							title,
							skills
						}`
					),
					client.fetch(
						`*[_type == "contact"][0]{
							heading,
							description,
							email,
							socialLinks
						}`
					),
					client.fetch(`*[_type == "footer"][0]{ copyrightText }`),
					client.fetch(
						`*[_type == "navigation"][0]{
							items[]{
								label,
								sectionId,
								order
							}
						}`
					),
				]);

				data = {
					hero,
					about,
					services,
					skills,
					contact,
					footer,
					navigation: navigation?.items || [],
				};
				break;
			}
			default:
				return new Response(
					JSON.stringify({ error: `Unknown content type: ${contentType}` }),
					{
						status: 400,
						headers: { ...corsHeaders, 'Content-Type': 'application/json' },
					}
				);
		}

		return new Response(JSON.stringify(data), {
			headers: { ...corsHeaders, 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Error fetching from Sanity:', error);
		return new Response(
			JSON.stringify({ error: error.message || 'Internal server error' }),
			{
				status: 500,
				headers: { ...corsHeaders, 'Content-Type': 'application/json' },
			}
		);
	}
});

