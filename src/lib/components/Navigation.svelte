<script lang="ts">
	import { onMount } from 'svelte';
	import { sanityClient } from '$lib/utils/sanity';
	import type { NavigationItem } from '$lib/utils/sanity';

	let navigationItems: NavigationItem[] = [];
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			navigationItems = await sanityClient.getNavigation();
			// Sort by order
			navigationItems.sort((a, b) => a.order - b.order);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load navigation';
			console.error('Error loading navigation:', e);
			// Fallback to default navigation
			navigationItems = [
				{ label: 'About', sectionId: 'about', order: 0 },
				{ label: 'Services', sectionId: 'services', order: 1 },
				{ label: 'Skills', sectionId: 'skills', order: 2 },
				{ label: 'Contact', sectionId: 'contact', order: 3 },
			];
		} finally {
			loading = false;
		}
	});

	function scrollToSection(sectionId: string) {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

<div class="h-[24px] relative shrink-0 w-[311.438px]">
	<div class="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[24px] items-center relative w-[311.438px]">
		{#if !loading && !error}
			{#each navigationItems as item}
				<button
					onclick={() => scrollToSection(item.sectionId)}
					class="h-[24px] bg-transparent border-0 cursor-pointer p-0"
				>
					<p
						class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre hover:text-black transition-colors"
					>
						{item.label}
					</p>
				</button>
			{/each}
		{/if}
	</div>
</div>
