import { createClient } from '@sanity/client';
import { readFileSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

// Load environment variables from .env file
config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Validate and get environment variables
const sanityProjectId = process.env.SANITY_PROJECT_ID;
const sanityDataset = process.env.SANITY_DATASET || 'production';
const sanityApiToken = process.env.SANITY_API_TOKEN;

if (!sanityProjectId || !sanityApiToken) {
	console.error('Error: Missing required environment variables');
	console.error('Please ensure .env file contains:');
	console.error('  - SANITY_PROJECT_ID');
	console.error('  - SANITY_API_TOKEN');
	console.error('  - SANITY_DATASET (optional, defaults to "production")');
	console.error('');
	console.error('Current values:');
	console.error(`  SANITY_PROJECT_ID: ${sanityProjectId ? '✓ set' : '✗ missing'}`);
	console.error(`  SANITY_API_TOKEN: ${sanityApiToken ? '✓ set' : '✗ missing'}`);
	console.error(`  SANITY_DATASET: ${sanityDataset}`);
	process.exit(1);
}

// Initialize Sanity client
const client = createClient({
	projectId: sanityProjectId,
	dataset: sanityDataset,
	useCdn: false,
	token: sanityApiToken,
	apiVersion: '2024-01-01',
});

async function uploadImage(imagePath: string): Promise<string> {
	const imageBuffer = readFileSync(imagePath);
	const filename = basename(imagePath);

	// Upload image to Sanity
	const asset = await client.assets.upload('image', imageBuffer, {
		filename,
	});

	return asset._id;
}

async function migrateContent() {
	console.log('Starting migration to Sanity...');

	try {
		// 1. Upload logo image
		const logoPath = join(__dirname, '../src/lib/assets/88b54ce85e89de82af5d7646da98afeba8946900.png');
		console.log('Uploading logo image...');
		const logoAssetId = await uploadImage(logoPath);
		console.log('Logo uploaded:', logoAssetId);

		// 2. Create Hero document
		console.log('Creating Hero document...');
		const heroDoc = await client.create({
			_type: 'hero',
			title: 'Simplifying the complex',
			subtitle:
				'AI Search & Analytics Engineering Studio specializing in intelligent data systems that think, explore, and take action',
			logo: {
				_type: 'image',
				asset: {
					_type: 'reference',
					_ref: logoAssetId,
				},
			},
			ctaText: 'View services',
		});
		console.log('Hero created:', heroDoc._id);

		// 3. Create About document
		console.log('Creating About document...');
		const aboutDoc = await client.create({
			_type: 'about',
			content:
				'I build AI-native search and analytics applications for companies that want to go beyond dashboards and keyword search. With expertise in Elasticsearch, Typesense, OpenSearch, vector search, agentic frameworks, and modern analytics engineering, I create intelligent data systems that think, explore, and take action — not just surface results. This boutique development practice specializes in AI-driven search solutions, analytics engineering development, and agentic framework implementations that transform how organizations interact with their data.',
		});
		console.log('About created:', aboutDoc._id);

		// 4. Create Services documents
		console.log('Creating Services documents...');
		const services = [
			{
				title: 'AI Search MVP',
				description:
					'Build a fully functional AI search system in 4–6 weeks. Complete with search backend (Typesense/Elastic/OpenSearch), vector + keyword hybrid search, embedding pipeline, reranking, SvelteKit UI, and LLM query enrichment. Perfect for SaaS startups adding search or internal enterprise teams needing better search UX.',
				tags: ['Vector Search', 'Hybrid Search', 'SvelteKit', 'RAG'],
				pricing: '$12k–$35k',
				order: 0,
			},
			{
				title: 'AI Analytics Copilot',
				description:
					'Interactive copilot that analyzes data, generates SQL, and answers questions. Features agentic SQL generator, DuckDB analytics engine, dashboard generation via natural language, and SvelteKit interface. Ideal for teams wanting to democratize data access.',
				tags: ['Agentic AI', 'DuckDB', 'SQL Generation', 'NL Interface'],
				pricing: '$15k–$45k',
				order: 1,
			},
			{
				title: 'Autonomous Data Agent',
				description:
					'Deployable agents for data transformations, cleaning, or exploration. Includes multi-agent orchestration, SQL runner, file parser, schema inspector, vector search tools, evaluations + guardrails, and integration with your data platform. Built for intelligent workflow automation.',
				tags: ['Multi-Agent', 'Automation', 'Data Pipeline', 'LLM'],
				pricing: '$20k–$50k',
				order: 2,
			},
		];

		const serviceDocs = await Promise.all(
			services.map((service) =>
				client.create({
					_type: 'service',
					...service,
				})
			)
		);
		console.log('Services created:', serviceDocs.map((doc) => doc._id));

		// 5. Create Skill Category documents
		console.log('Creating Skill Category documents...');
		const skillCategories = [
			{
				title: 'Frontend / UI',
				skills: ['SvelteKit', 'React / NextJS', 'Tailwind CSS', 'Vercel / Cloudflare'],
				order: 0,
			},
			{
				title: 'Search & Analytics',
				skills: ['Elasticsearch', 'OpenSearch', 'Typesense', 'DuckDB', 'BigQuery', 'dbt'],
				order: 1,
			},
			{
				title: 'AI / Agents',
				skills: ['OpenAI / Anthropic', 'LangChain', 'DSPy', 'HuggingFace', 'Vector DBs'],
				order: 2,
			},
		];

		const skillCategoryDocs = await Promise.all(
			skillCategories.map((category) =>
				client.create({
					_type: 'skillCategory',
					...category,
				})
			)
		);
		console.log('Skill Categories created:', skillCategoryDocs.map((doc) => doc._id));

		// 6. Create Contact document
		console.log('Creating Contact document...');
		const contactDoc = await client.create({
			_type: 'contact',
			heading: "Let's Build Something Intelligent",
			description:
				"Ready to go beyond traditional search and analytics? Let's discuss how AI-native systems can transform your data infrastructure and unlock new capabilities.",
			email: 'hello@yourdomain.com',
			socialLinks: {
				github: 'https://github.com/yourusername',
				linkedin: 'https://linkedin.com/in/yourusername',
				twitter: 'https://twitter.com/yourusername',
			},
		});
		console.log('Contact created:', contactDoc._id);

		// 7. Create Footer document
		console.log('Creating Footer document...');
		const footerDoc = await client.create({
			_type: 'footer',
			copyrightText: '© 2025 AI Search & Analytics Engineering Studio. All rights reserved.',
		});
		console.log('Footer created:', footerDoc._id);

		// 8. Create Navigation document
		console.log('Creating Navigation document...');
		const navigationDoc = await client.create({
			_type: 'navigation',
			items: [
				{ label: 'About', sectionId: 'about', order: 0 },
				{ label: 'Services', sectionId: 'services', order: 1 },
				{ label: 'Skills', sectionId: 'skills', order: 2 },
				{ label: 'Contact', sectionId: 'contact', order: 3 },
			],
		});
		console.log('Navigation created:', navigationDoc._id);

		console.log('\n✅ Migration completed successfully!');
		console.log('\nSummary:');
		console.log(`- Hero: ${heroDoc._id}`);
		console.log(`- About: ${aboutDoc._id}`);
		console.log(`- Services: ${serviceDocs.length} documents`);
		console.log(`- Skill Categories: ${skillCategoryDocs.length} documents`);
		console.log(`- Contact: ${contactDoc._id}`);
		console.log(`- Footer: ${footerDoc._id}`);
		console.log(`- Navigation: ${navigationDoc._id}`);
	} catch (error) {
		console.error('Migration failed:', error);
		process.exit(1);
	}
}

// Run migration
migrateContent().catch((error) => {
	console.error('Migration error:', error);
	process.exit(1);
});

