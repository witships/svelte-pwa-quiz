<script>
	import HeaderNav from '$lib/HeaderNav.svelte';

	const items = [
		{ id: 'quiz', title: 'クイズ', icon: 'quiz.png' },
		{ id: 'calc-01', title: 'たし算1', icon: 'icon512-1.png' },
		{ id: 'calc-02', title: 'かけ算', icon: 'icon512-1.png' },
		{ id: 'picturebook', title: '絵本', icon: 'book_kids.png' }
	];
</script>

<div class="pa-1">
	<HeaderNav />

	<div class="grid">
		{#each items as item}
			<a href="/{item.id}" class="card">
				<!-- <img src="https://picsum.photos/200/200" alt="icon" /> -->
				<img src="/img/{item.icon}" alt="icon" />
				<div>{item.title}</div>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
		gap: 1rem;
		a {
			cursor: pointer;
			text-align: center;
			white-space: nowrap;
			text-decoration: none;
			overflow: hidden;
			text-overflow: ellipsis;
			font-size: large;
			font-weight: bold;
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
