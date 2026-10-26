<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<section>
	<h1>Home</h1>

	<nav>
		<a href={resolve('/home')}>Home</a>
		<a href={resolve('/about')}>About</a>
	</nav>

	<h1 class="font-display text-primary text-3xl font-bold">Welcome</h1>

	<button
		class="rounded-lg bg-primary px-4 py-2 text-white hover:bg-secondary"
	>
		Submit
	</button>

	<div class="bg-surface p-6">Content</div>
</section>

<style>
</style>
