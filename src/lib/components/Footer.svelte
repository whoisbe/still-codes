<script lang="ts">
	import { onMount } from 'svelte';
	import { sanityClient } from '$lib/utils/sanity';
	import type { FooterContent } from '$lib/utils/sanity';

	let footerContent: FooterContent | null = null;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			footerContent = await sanityClient.getFooter();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load footer content';
			console.error('Error loading footer:', e);
		} finally {
			loading = false;
		}
	});
</script>

<div class="bg-white w-full py-[33px] border-t border-[rgba(0,0,0,0.05)]">
	<div class="max-w-[1143px] mx-auto px-[24px]">
		{#if loading}
			<p class="text-[rgba(0,0,0,0.4)] text-center">Loading...</p>
		{:else if error}
			<p class="text-red-600 text-center">Error: {error}</p>
		{:else if footerContent}
			<p
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.4)] text-center"
			>
				{footerContent.copyrightText}
			</p>
		{/if}
	</div>
</div>
