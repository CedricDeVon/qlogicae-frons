<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<h1>About</h1>

	<nav>
		<a href={resolve('/home')}>Home</a>
		<a href={resolve('/about')}>About</a>
	</nav>
</section>

<style>
</style>
