<script>
	import HeaderNav from '$lib/HeaderNav.svelte';
	import { onMount } from 'svelte';
	let times = [{ x: 0, y: 0, a: null, c: 0 }];

	function random() {
		times = [{ x: 0, y: 0, a: null, c: 0 }];
		const max = 9;
		for (let i = 0; i < 10; i++) {
			let rx = Math.floor(Math.random() * max) + 1;
			let ry = Math.floor(Math.random() * max) + 1;
			times.push({ x: rx, y: ry, a: null, c: rx + ry });
		}
		times.shift();
		times = times;
	}

	onMount(() => {
		random();
	});
</script>

<div class="wapper">
	<HeaderNav />
	<main>
		<h2>たしざん</h2>
		<table class="table">
			{#each times as item}
				<tr>
					<td>{item.x}</td>
					<td>+</td>
					<td>{item.y}</td>
					<td>=</td>
					<td class="w30">
						<input type="number" bind:value={item.a} />
					</td>
					<td class="w10">
						{#if item.a == item.c}
							<span class="check"> &check; </span>
						{/if}
					</td>
				</tr>
			{/each}
		</table>
		<hr />
		<div class="menu">
			<button on:click={random}>リセット</button>
			<a href="/">
				<button>終了</button>
			</a>
		</div>
	</main>
</div>

<style lang="scss">
	.wapper {
		max-width: 800px;
		margin: 0 auto;
		height: 100vh;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto 1fr;
		position: relative;
	}

	main {
		background-color: white;
		padding: 0.5rem;
		display: grid;
		grid-template-rows: auto 1fr auto;
		overflow: auto;
		.table {
			width: 100%;
			// table-layout: fixed;
			box-sizing: border-box;
			text-align: center;
			font-size: x-large;
			td {
				&.w30 {
					width: 30%;
				}
				&.w10 {
					width: 10%;
				}
				input {
					box-sizing: border-box;
					width: 100%;
					font-size: x-large;
					text-align: center;
				}
				.check {
					color: green;
				}
			}
		}
	}
	hr {
		margin: 1rem 0;
	}
	.menu {
		display: flex;
		justify-content: space-around;
	}
</style>
