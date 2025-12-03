<script lang="ts">
	import { onMount } from 'svelte';
	import svgPaths from '$lib/imports/svg-mr5qr1s2nm';
	import { sanityClient } from '$lib/utils/sanity';
	import type { HeroContent } from '$lib/utils/sanity';

	let heroContent: HeroContent | null = null;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			heroContent = await sanityClient.getHero();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load hero content';
			console.error('Error loading hero:', e);
		} finally {
			loading = false;
		}
	});

	function scrollToServices() {
		const element = document.getElementById('services');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
</script>

{#if loading}
	<div class="bg-white min-h-[776px] relative w-full pt-[81px]">
		<div class="max-w-[1143px] mx-auto px-[24px] py-[96px]">
			<div class="flex flex-col items-center justify-center min-h-[600px]">
				<p class="text-[rgba(0,0,0,0.6)]">Loading...</p>
			</div>
		</div>
	</div>
{:else if error}
	<div class="bg-white min-h-[776px] relative w-full pt-[81px]">
		<div class="max-w-[1143px] mx-auto px-[24px] py-[96px]">
			<div class="flex flex-col items-center justify-center min-h-[600px]">
				<p class="text-red-600">Error: {error}</p>
			</div>
		</div>
	</div>
{:else if heroContent}
	<div class="bg-white min-h-[776px] relative w-full pt-[81px]">
		<div class="max-w-[1143px] mx-auto px-[24px] py-[96px]">
			<div class="flex flex-col items-center justify-center min-h-[600px]">
				<div class="mb-[32px]">
					<img src={heroContent.logoUrl} alt="Logo" class="w-[320px] h-[320px] object-contain" />
				</div>

				<h1
					class="font-['Poiret_One:Regular','Montserrat',sans-serif] leading-[75px] text-[60px] text-black text-center tracking-[1.5px] mb-[32px]"
				>
					{heroContent.title}
				</h1>

				<p
					class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[39px] text-[24px] text-[rgba(0,0,0,0.8)] text-center max-w-[672px] mb-[48px]"
				>
					{heroContent.subtitle}
				</p>

				<button
					onclick={scrollToServices}
					class="flex items-center gap-[8px] text-[rgba(0,0,0,0.7)] hover:text-black transition-colors cursor-pointer bg-transparent border-0 p-0"
				>
					<p class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[28px] text-[18px]">
						{heroContent.ctaText}
					</p>
					<div class="size-[16px]">
						<svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
							<path
								d="M8 3.33333V12.6667"
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-opacity="0.7"
								stroke-width="1.33333"
							/>
							<path
								d={svgPaths.pc0e6f00}
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-opacity="0.7"
								stroke-width="1.33333"
							/>
						</svg>
					</div>
				</button>
			</div>
		</div>
	</div>
{/if}
