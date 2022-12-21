<script>
	import { goto } from '$app/navigation';

	let routes = [
		{ name: 'Главная', route: '/' },
		{ name: 'Добавить имя', route: '/admin' },
		{
			name: 'Источник имён',
			route: 'https://www.pravmir.ru/muzhskie-pravoslavnye-imena/#_Toc251694613'
		}
	];
</script>

<div class="fixed-top w-100 px-3 py-1 bg-light text-dark">
	<button class="btn btn-light text-dark fw-bold text-uppercase me-3" on:click={() => goto('/')}
		>Церковные имена</button
	>
	{#each routes as item}
		<button class="btn btn-light text-dark me-1" on:click={() => goto(item.route)}
			>{item.name}</button
		>
	{/each}
</div>
