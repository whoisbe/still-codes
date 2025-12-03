<script lang="ts">
	import '../index.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="bg-white min-h-screen w-full">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>