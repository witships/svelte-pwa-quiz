<script>
	import HeaderNav from '$lib/HeaderNav.svelte';

	const items = [
		{ id: 'quiz', title: 'クイズ', icon: 'icon512-3.png' },
		{ id: 'calc-01', title: 'たし算1', icon: 'icon512-1.png' },
		{ id: 'calc-02', title: 'かけ算', icon: 'icon512-1.png' },
		{ id: 'picturebook', title: '絵本', icon: 'icon512-2.png' }
	];
</script>

<div class="pa-1">
	<HeaderNav />

	<div class="grid">
		{#each items as item}
			<a href="/{item.id}" class="card">
				<div>{item.title}</div>
				<!-- <img src="https://picsum.photos/200/200" alt="icon" /> -->
				<img src="/img/{item.icon}" alt="icon" />
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		gap: 1rem;
		a {
			cursor: pointer;
			transition: 0.5s;
			&:hover {
				filter: brightness(0.7);
			}
		}
		img {
			max-width: 100%;
			border-radius: 1rem;
		}
	}
</style>
