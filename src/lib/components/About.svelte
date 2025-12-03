<script lang="ts">
	import { onMount } from 'svelte';
	import { sanityClient } from '$lib/utils/sanity';
	import type { AboutContent } from '$lib/utils/sanity';

	let aboutContent: AboutContent | null = null;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			aboutContent = await sanityClient.getAbout();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load about content';
			console.error('Error loading about:', e);
		} finally {
			loading = false;
		}
	});
</script>

<div id="about" class="bg-gray-50 w-full py-[96px]">
	<div class="max-w-[896px] mx-auto px-[24px]">
		<div class="flex flex-col gap-[48px]">
			<h2
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center"
			>
				About
			</h2>

			{#if loading}
				<p class="text-[rgba(0,0,0,0.6)]">Loading...</p>
			{:else if error}
				<p class="text-red-600">Error: {error}</p>
			{:else if aboutContent}
				<p class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.7)]">
					{aboutContent.content}
				</p>
			{/if}
		</div>
	</div>
</div>
