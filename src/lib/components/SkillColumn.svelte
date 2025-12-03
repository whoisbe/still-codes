<script lang="ts">
	interface SkillColumnProps {
		title: string;
		skills: string[];
	}

	let { title, skills }: SkillColumnProps = $props();
</script>

<div class="flex flex-col gap-[16px] w-full">
	<div
		class="box-border flex h-[36px] items-start pb-[9px] pt-0 px-0 w-full border-b border-[rgba(0,0,0,0.1)]"
	>
		<p class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[27px] text-[18px] text-[rgba(0,0,0,0.9)]">
			{title}
		</p>
	</div>

	<div class="flex flex-col gap-[8px]">
		{#each skills as skill}
			<div class="h-[24px] relative w-full flex items-center">
				<div class="bg-[rgba(0,0,0,0.3)] rounded-full size-[6px] mr-[8px]"></div>
				<p class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.7)]">
					{skill}
				</p>
			</div>
		{/each}
	</div>
</div>
