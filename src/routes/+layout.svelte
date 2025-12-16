<script lang="ts">
	import { onMount } from 'svelte';
	import '../index.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { sanityClient } from '$lib/utils/sanity';

	let title = 'Still Codes';

	onMount(async () => {
		try {
			const settings = await sanityClient.getSiteSettings();
			if (settings?.title) {
				title = settings.title;
			}
		} catch (e) {
			console.error('Failed to load site settings:', e);
		}
	});
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div class="bg-white min-h-screen w-full">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>