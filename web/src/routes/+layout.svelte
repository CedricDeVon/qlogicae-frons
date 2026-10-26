<script lang="ts">
	import '../app.css';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>QLogicae Frons</title>
	<meta name="description" content="content" />
</svelte:head>

<div class="app">
	<main>{@render children()}</main>
</div>

<style>
</style>
