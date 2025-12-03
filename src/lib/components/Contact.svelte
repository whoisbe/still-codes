<script lang="ts">
	import { onMount } from 'svelte';
	import svgPaths from '$lib/imports/svg-mr5qr1s2nm';
	import { sanityClient } from '$lib/utils/sanity';
	import type { ContactContent } from '$lib/utils/sanity';

	let contactContent: ContactContent | null = null;
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			contactContent = await sanityClient.getContact();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load contact content';
			console.error('Error loading contact:', e);
		} finally {
			loading = false;
		}
	});

	function handleGetInTouch() {
		if (contactContent?.email) {
			window.location.href = `mailto:${contactContent.email}`;
		}
	}
</script>

<div id="contact" class="bg-white w-full py-[96px]">
	<div class="max-w-[896px] mx-auto px-[24px]">
		<div class="flex flex-col items-center gap-[48px]">
			{#if loading}
				<p class="text-[rgba(0,0,0,0.6)]">Loading...</p>
			{:else if error}
				<p class="text-red-600">Error: {error}</p>
			{:else if contactContent}
				<h2
					class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center"
				>
					{contactContent.heading}
				</h2>

				<p
					class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.6)] text-center max-w-[647px]"
				>
					{contactContent.description}
				</p>

				<button
					onclick={handleGetInTouch}
					class="bg-black h-[40px] rounded-[8px] px-[40px] flex items-center gap-[8px] hover:bg-[rgba(0,0,0,0.8)] transition-colors cursor-pointer border-0"
				>
					<div class="size-[16px]">
						<svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
							<path
								d={svgPaths.p2f8e7e80}
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.33333"
							/>
							<path
								d={svgPaths.p17070980}
								stroke="white"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="1.33333"
							/>
						</svg>
					</div>
					<p class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[20px] text-[14px] text-white">
						Get in Touch
					</p>
				</button>

				{#if contactContent.socialLinks}
					<div class="flex gap-[24px] items-center pt-[32px]">
						{#if contactContent.socialLinks.github}
							<a
								href={contactContent.socialLinks.github}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								class="size-[20px] hover:opacity-70 transition-opacity"
							>
								<svg class="block size-full" fill="none" viewBox="0 0 16 19">
									<path
										d={svgPaths.p17d8aa0}
										stroke="rgba(0,0,0,0.4)"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.66667"
									/>
								</svg>
							</a>
						{/if}

						{#if contactContent.socialLinks.linkedin}
							<a
								href={contactContent.socialLinks.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								class="size-[20px] hover:opacity-70 transition-opacity"
							>
								<svg class="block size-full" fill="none" viewBox="0 0 12 13">
									<path
										d={svgPaths.p21836480}
										stroke="rgba(0,0,0,0.4)"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.66667"
									/>
									<path
										d={svgPaths.p1a426680}
										stroke="rgba(0,0,0,0.4)"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.66667"
									/>
									<path
										d={svgPaths.p29efb800}
										stroke="rgba(0,0,0,0.4)"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.66667"
									/>
								</svg>
							</a>
						{/if}

						{#if contactContent.socialLinks.twitter}
							<a
								href={contactContent.socialLinks.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
								class="size-[20px] hover:opacity-70 transition-opacity"
							>
								<svg class="block size-full" fill="none" viewBox="0 0 19 16">
									<path
										d={svgPaths.p3693ea00}
										stroke="rgba(0,0,0,0.4)"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.66667"
									/>
								</svg>
							</a>
						{/if}
					</div>
				{/if}
			{/if}
		</div>
	</div>
</div>
