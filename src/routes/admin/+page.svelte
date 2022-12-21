<script>
	import { push, ref, set } from 'firebase/database';
	import { db } from '$lib/scripts/firebase';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { Name } from '$lib/models/name';

	let name = new Name();
</script>

<PageTitle title="Добавить имя">
	<button
		class="btn btn-light text-dark"
		on:click={async () => {
			if (name.name.trim() != '') {
				push(ref(db, '/names'), name);
				name = new Name();
			}
		}}>Добавить</button
	>
</PageTitle>

<div class="">
	<input class="form-control mb-2" bind:value={name.name} placeholder="Имя" />
	<input class="form-control mb-2" bind:value={name.translation} placeholder="Перевод имени" />
	<input
		class="form-control mb-2"
		bind:value={name.description}
		placeholder="Описание, через запятую"
	/>
	<input
		class="form-control mb-2"
		bind:value={name.place}
		placeholder="Место, например: Иерусалимский"
	/>
	<input
		class="form-control mb-2"
		bind:value={name.oldDate}
		placeholder="Дата по старому стилю"
	/><input class="form-control mb-2" bind:value={name.newDate} placeholder="Дата по новому стилю" />
</div>
