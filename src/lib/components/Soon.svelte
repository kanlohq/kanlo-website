<script lang="ts">
	import { m } from '../paraglide/messages.js';

	let { class: className = '', label = '' } = $props();
</script>

<span class="label whitespace-nowrap rounded-full border border-current px-2.5 py-0.5 text-[11px] {className}">
	{label || m.soon()}
</span>
