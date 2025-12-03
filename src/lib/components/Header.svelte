<script lang="ts">
	import Logo from './Logo.svelte';
	import Navigation from './Navigation.svelte';
</script>

<div
	class="fixed bg-[rgba(255,255,255,0.95)] box-border content-stretch flex flex-col h-[81px] items-start left-0 top-0 w-full z-50 backdrop-blur-sm"
>
	<div aria-hidden="true" class="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
	<div class="h-[80px] w-full">
		<div class="flex flex-row items-center size-full">
			<div
				class="box-border content-stretch flex h-[80px] items-center justify-between px-[24px] py-0 w-full max-w-[1143px] mx-auto"
			>
				<Logo />
				<Navigation />
			</div>
		</div>
	</div>
</div>
