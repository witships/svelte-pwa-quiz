<script>
	// @ts-nocheck
	import HeaderNav from '$lib/HeaderNav.svelte';

	let num = [1, 1, 1];
	let answer = '';
	let num_index = 0;
	const tenkey = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
	let showCheat = true;
	let showCheat2 = true;

	function onKeyDown(e) {
		// console.log(e.key);
		if (!isNaN(e.key)) {
			if (num_index != 2) {
				num[num_index] = Number(e.key);
				num_index = num_index + 1;
			} else {
				answer = answer + e.key;
			}
		} else if (e.key == 'Enter' && num_index == 2) {
			// console.log('Enter', num[0] * num[1], Number(answer), num[0] * num[1] == Number(answer));
			// 正解
			if (Number(answer) == num[0] * num[1]) {
				let prion = new Audio('/sound/piron.mp3');
				prion.play();
				reset();
			}
			// 不正解
			else {
				answer = '';
			}
		} else if (e.key == 'Escape') {
			reset();
		}
	}

	function onTenkey(input_num) {
		if (num_index != 2) {
			num[num_index] = input_num;
			num_index = num_index + 1;
		} else {
			answer = answer + input_num;
		}
	}

	function onEnter() {
		if (Number(answer) == num[0] * num[1]) {
			let prion = new Audio('/sound/piron.mp3');
			prion.play();
			reset();
		} else {
			answer = '';
		}
	}

	function reset() {
		num = [1, 1];
		num_index = 0;
		answer = '';
	}
</script>

<svelte:window on:keydown|preventDefault={onKeyDown} />

<div class="wapper">
	<HeaderNav />
	<main>
		<div class="d-flex">
			<h2>かけ算</h2>
			<div class="ms-auto">
				<button on:click={() => (showCheat = !showCheat)}>カンニング1</button>
				<button on:click={() => (showCheat2 = !showCheat2)}>カンニング2</button>
			</div>
		</div>
		<table class="table">
			<tr>
				<td class:active={num_index == 0}>{num[0]}</td>
				<td>&times;</td>
				<td class:active={num_index == 1}>{num[1]}</td>
				<td>=</td>
				<td class="w30" class:active={num_index == 2}>
					{answer}
				</td>
				<!-- <td class="w10">
					<span class="check"> &check; </span>
				</td> -->
			</tr>
		</table>

		<!-- りんご -->
		<div class="cheat">
			{#if showCheat}
				{#each Array(num[1]) as row, yi}
					<div class="col">
						{#each Array(num[0]) as col, xi}
							<div class="apple">
								<img src="/img/apple150.png" alt="apple" />
								{#if showCheat2}
									<div>{yi * num[0] + xi + 1}</div>
								{/if}
							</div>
						{/each}
					</div>
				{/each}
			{/if}
		</div>

		<hr />

		<div class="tenkey">
			{#each tenkey as num}
				<button on:click={() => onTenkey(num)}>{num}</button>
			{/each}
			<button style="grid-column: 2 /4;" on:click={onEnter}>Enter</button>
		</div>
	</main>
</div>

<style lang="scss">
	.wapper {
		height: 100vh;
		overflow: hidden;
		box-sizing: border-box;
		position: relative;
	}

	main {
		max-width: 800px;
		margin: 0 auto;
		background-color: white;
		padding: 0.5rem;
		height: calc(100vh - 5rem);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.table {
			width: 100%;
			box-sizing: border-box;
			text-align: center;
			font-size: x-large;
			td {
				&.w30 {
					width: 30%;
				}
				// &.w10 {
				// 	width: 10%;
				// }
				&.active {
					background-color: powderblue;
				}
				// .check {
				// 	color: green;
				// }
			}
		}
		.cheat {
			padding: 0.5rem 0;
			overflow: scroll;
		}
		.col {
			display: grid;
			grid-template-columns: repeat(9, 1fr);
			max-width: 400px;
			img {
				max-width: 100%;
			}
		}
		.apple {
			position: relative;
			div {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -40%);
				font-size: large;
				color: white;
			}
		}
		.tenkey {
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 0.5rem;
			button {
				line-height: 2rem;
				font-size: x-large;
			}
		}
	}
	hr {
		margin: auto 0 1rem;
	}
</style>
