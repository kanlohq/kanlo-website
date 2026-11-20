<script lang="ts">
	import '../app.css';
	import { m } from '../lib/paraglide/messages.js';
	import Header from '../lib/components/Header.svelte';
	import Footer from '../lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>{m['meta.title']()}</title>
	<meta name="description" content={m['meta.description']()} />
</svelte:head>

<Header />
{@render children()}
<Footer />
