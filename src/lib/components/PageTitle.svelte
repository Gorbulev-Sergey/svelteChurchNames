<script>
	export let title = '';
	$: document.title = title;
</script>

<div class="d-flex justify-content-between align-items-center mb-3">
	<h4>{title}</h4>
	<slot />
</div>
