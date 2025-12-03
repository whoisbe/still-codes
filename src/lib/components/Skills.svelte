<script lang="ts">
	import { onMount } from 'svelte';
	import SkillColumn from './SkillColumn.svelte';
	import { sanityClient } from '$lib/utils/sanity';
	import type { SkillCategory } from '$lib/utils/sanity';

	let skillCategories: SkillCategory[] = [];
	let loading = true;
	let error: string | null = null;

	onMount(async () => {
		try {
			skillCategories = await sanityClient.getSkills();
		} catch (e) {
			error = e instanceof Error ? e.message : 'Failed to load skills';
			console.error('Error loading skills:', e);
		} finally {
			loading = false;
		}
	});
</script>

<div id="skills" class="bg-gray-50 w-full py-[96px]">
	<div class="max-w-[896px] mx-auto px-[24px]">
		<div class="flex flex-col gap-[48px]">
			<h2
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] text-center"
			>
				Skills & Expertise
			</h2>

			{#if loading}
				<p class="text-[rgba(0,0,0,0.6)] text-center">Loading...</p>
			{:else if error}
				<p class="text-red-600 text-center">Error: {error}</p>
			{:else if skillCategories.length > 0}
				<div class="grid grid-cols-1 md:grid-cols-3 gap-[48px]">
					{#each skillCategories as category}
						<SkillColumn title={category.title} skills={category.skills} />
					{/each}
				</div>
			{:else}
				<p class="text-[rgba(0,0,0,0.6)] text-center">No skills available</p>
			{/if}
		</div>
	</div>
</div>
