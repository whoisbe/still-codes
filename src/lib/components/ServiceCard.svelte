<script lang="ts">
	interface ServiceCardProps {
		title: string;
		description: string;
		tags: string[];
		pricing?: string;
	}

	let { title, description, tags, pricing }: ServiceCardProps = $props();
</script>

<div class="bg-white rounded-[14px] h-full relative">
	<div class="box-border flex flex-col h-full items-start overflow-clip p-[25px] rounded-[inherit]">
		<div class="flex flex-col gap-[12px] w-full h-full">
			<h3
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.9)] min-h-[48px]"
			>
				{title}
			</h3>

			<p
				class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.6)] flex-1"
			>
				{description}
			</p>

			{#if pricing}
				<p
					class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[24px] text-[16px] text-[rgba(0,0,0,0.8)] mb-[12px]"
				>
					{pricing}
				</p>
			{/if}

			<div class="relative w-full min-h-[72px]">
				<div class="flex flex-wrap gap-[8px]">
					{#each tags as tag}
						<div
							class="bg-[rgba(0,0,0,0.05)] h-[28px] rounded-[1.67772e+07px] px-[12px] py-[4px]"
						>
							<p
								class="font-['Space_Mono:Regular','Montserrat',sans-serif] leading-[20px] text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre"
							>
								{tag}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div
		aria-hidden="true"
		class="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[14px]"
	></div>
</div>
