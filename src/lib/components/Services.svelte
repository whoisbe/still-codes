<script lang="ts">
	import { onMount } from 'svelte';
	import ServiceCard from './ServiceCard.svelte';
	import { sanityClient } from '$lib/utils/sanity';
	import type { Service } from '$lib/utils/sanity';

	let services: Service[] = [];
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			const fetchedServices = await sanityClient.getServices();
			// Remove duplicates based on title (case-insensitive)
			const seen = new Set<string>();
			services = fetchedServices.filter((service) => {
				const key = service.title.toLowerCase().trim();
				if (seen.has(key)) {
					return false;
				}
				seen.add(key);
				return true;
			});
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load services';
			console.error('Error loading services:', e);
		} finally {
			loading = false;
		}
	});
</script>

<div id="services" class="bg-white w-full py-[96px]">
	<div class="max-w-[1143px] mx-auto px-[24px]">
		<div class="flex flex-col gap-[48px]">
			<h2
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center"
			>
				Services
			</h2>

			{#if loading}
				<p class="text-[rgba(0,0,0,0.6)] text-center">Loading...</p>
			{:else if error}
				<p class="text-red-600 text-center">Error: {error}</p>
			{:else if services.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px]">
					{#each services as service}
						<ServiceCard {...service} />
					{/each}
				</div>
			{:else}
				<p class="text-[rgba(0,0,0,0.6)] text-center">No services available</p>
			{/if}
		</div>
	</div>
</div>
