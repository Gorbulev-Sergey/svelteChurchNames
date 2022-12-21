<script>
	import { onValue, ref } from 'firebase/database';
	import { db } from '$lib/scripts/firebase';
	import { onMount } from 'svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';

	let names = new Array();
	onMount(() => {
		onValue(ref(db, '/names'), (s) => {
			names = s.val();
		});
	});
</script>

<PageTitle title="Список имён" />

{#each Object.values(names) as item}
	<div class="mb-1">
		<b>{item.name}</b>
		{#each Object.entries(item) as [key, value]}
			{#if key != 'name'}
				<span>, {value}</span>
			{/if}
		{/each}
	</div>
{/each}
