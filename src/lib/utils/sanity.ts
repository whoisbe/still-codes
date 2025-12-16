const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH || '/functions/v1';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export interface HeroContent {
	title: string;
	subtitle: string;
	logoUrl: string;
	ctaText: string;
}

export interface AboutContent {
	content: string;
}

export interface Service {
	title: string;
	description: string;
	tags: string[];
	pricing?: string;
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

export interface ContactContent {
	heading: string;
	description: string;
	email: string;
	socialLinks: {
		github?: string;
		linkedin?: string;
		twitter?: string;
	};
}

export interface FooterContent {
	copyrightText: string;
}

export interface NavigationItem {
	label: string;
	sectionId: string;
	order: number;
}

export interface SiteSettings {
	title: string;
}

async function fetchFromEdgeFunction<T>(type: string): Promise<T> {
	if (!SUPABASE_URL) {
		throw new Error('VITE_SUPABASE_URL is not configured');
	}

	if (!SUPABASE_ANON_KEY) {
		throw new Error('VITE_SUPABASE_ANON_KEY is not configured');
	}

	const url = `${SUPABASE_URL}${API_BASE_PATH}/sanity-content?type=${type}`;
	const response = await fetch(url, {
		headers: {
			'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
			'Content-Type': 'application/json',
		},
	});

	if (!response.ok) {
		const errorText = await response.text().catch(() => 'Unknown error');
		throw new Error(`Failed to fetch ${type}: ${response.status} ${response.statusText} - ${errorText}`);
	}

	return response.json();
}

export const sanityClient = {
	async getHero(): Promise<HeroContent> {
		return fetchFromEdgeFunction<HeroContent>('hero');
	},

	async getAbout(): Promise<AboutContent> {
		return fetchFromEdgeFunction<AboutContent>('about');
	},

	async getServices(): Promise<Service[]> {
		return fetchFromEdgeFunction<Service[]>('services');
	},

	async getSkills(): Promise<SkillCategory[]> {
		return fetchFromEdgeFunction<SkillCategory[]>('skills');
	},

	async getContact(): Promise<ContactContent> {
		return fetchFromEdgeFunction<ContactContent>('contact');
	},

	async getFooter(): Promise<FooterContent> {
		return fetchFromEdgeFunction<FooterContent>('footer');
	},

	async getNavigation(): Promise<NavigationItem[]> {
		return fetchFromEdgeFunction<NavigationItem[]>('navigation');
	},

	async getSiteSettings(): Promise<SiteSettings> {
		return fetchFromEdgeFunction<SiteSettings>('siteSettings');
	},

	async getAll(): Promise<{
		hero: HeroContent;
		about: AboutContent;
		services: Service[];
		skills: SkillCategory[];
		contact: ContactContent;
		footer: FooterContent;
		navigation: NavigationItem[];
		siteSettings: SiteSettings;
	}> {
		return fetchFromEdgeFunction('all');
	},
};

