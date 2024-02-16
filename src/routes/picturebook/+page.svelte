<script>
	import { goto } from '$app/navigation';
	import HeaderNav from '$lib/HeaderNav.svelte';
	import { onMount } from 'svelte';

	const data = [
		{
			id: 'id0',
			base: '00.png',
			anime: '',
			act: '',
			text: '',
			voice: ''
		},
		{
			id: 'id1',
			base: '00.png',
			anime: '',
			act: '',
			text: 'プノンクラオム、ハヌマーンの投げた山\nシェムリアップ州、トンレサップ湖畔にあるプノンクロン山のお話です',
			voice: '001_プノンクラオム、ハ….wav'
		},
		{
			id: 'id2',
			base: '01.png',
			anime: '01-1.png',
			act: 'fuwa',
			text: 'ある日、将軍ハヌマーンはプレア・リアム王より任務を賜りました。',
			voice: '002_ある日、将軍ハヌマ….wav'
		},
		{
			id: 'id3',
			base: '01.png',
			anime: '01-1.png',
			act: 'fuwa',
			text: 'それは、ジャイアントビリープの矢で傷ついた王の弟、プレア・リークの治療のために、薬の木を見つけてくるというものでした。',
			voice: '003_それは、ジャイアン….wav'
		},
		{
			id: 'id4',
			base: '02.png',
			anime: '',
			act: '',
			text: 'ハヌマーンがまだサルだった頃からの親しい友人である、プレア・リアム王は、ハヌマーンには、あえてその薬の木の名前を伝えませんでした。',
			voice: '004_ハヌマーンがまだサ….wav'
		},
		{
			id: 'id5',
			base: '02.png',
			anime: '02-1.png',
			act: 'slide-left',
			text: 'その薬の木の名前は『チョン・クロン・スワ』といい、スワとは猿という意味だからです。',
			voice: '005_その薬の木の名前は….wav'
		},
		{
			id: 'id6',
			base: '02.png',
			anime: '02-1.png',
			act: '',
			text: '昔サルだったハヌマーンに対して「猿の木を探して来て欲しい」なんてお願いしたら、バカにしているように勘違いされてしまいそうだと心配したのです。',
			voice: '006_昔サルだったハヌマ….wav'
		},
		{
			id: 'id7',
			base: '03.png',
			anime: '03-1.png',
			act: 'shake',
			text: 'しかしそのせいでどんな木を探せばいいのか分からないハヌマーンは、薬の木らしいものをただ当てずっぽうに集めてくるしかできません。',
			voice: '007_しかしそのせいでど….wav'
		},
		{
			id: 'id8',
			base: '04.png',
			anime: '04-1.png',
			act: 'slide-left',
			text: 'ハヌマーンは何度も木を集めてきましたが、その中に王様が求める木はありませんでした。',
			voice: '008_ハヌマーンは何度も….wav'
		},
		{
			id: 'id9',
			base: '04.png',
			anime: '04-1.png',
			act: '',
			text: 'どんな木を探せばいいのかも分からないので、このまま探し続けても見つけられる気がしません。',
			voice: '009_どんな木を探せばい….wav'
		},
		{
			id: 'id10',
			base: '05.png',
			anime: '05-1.png',
			act: 'shake',
			text: 'そこでハヌマーンは閃きました。\nトロンバット山の上半分を切り取って丸ごと持ってきて、その中から王様自身に薬の木を見つけてもらえばいいのです。',
			voice: '010_そこでハヌマーンは….wav'
		},
		{
			id: 'id11',
			base: '06.png',
			anime: '06-1.png',
			act: 'blink',
			text: 'そうして、ついに薬の木を見つけることができました。',
			voice: '011_そうして、ついに薬….wav'
		},
		{
			id: 'id12',
			base: '06.png',
			anime: '06-1.png',
			act: 'blink',
			text: '……のは良かったのですが、苦労の末ようやく見つかったその薬の木を見てハヌマーンは驚きました。',
			voice: '012_……のは良かったの….wav'
		},
		{
			id: 'id13',
			base: '06.png',
			anime: '06-1.png',
			act: 'blink',
			text: '中々見つからないからどれほど珍しい木なのかと思ってたのに、結局王様が求めていたのは、簡単に見つけられるチョン・クロン・スワの木だったからです。',
			voice: '013_中々見つからないか….wav'
		},
		{
			id: 'id14',
			base: '07.png',
			anime: '',
			act: '',
			text: '『これが王様が探していた薬の木なのですか？ はじめからそう言ってくれれば、わざわざ山の半分も持って来る必要はなかったのに……』',
			voice: '014_『これが王様が探し….wav'
		},
		{
			id: 'id15',
			base: '07.png',
			anime: '',
			act: '',
			text: '『いやあすまんすまん、苦労を掛けたな。おかげで弟も治療できた。\n残りの山はもう必要ないから、元の場所に戻しておいてくれ』',
			voice: '015_『いやあすまんすま….wav'
		},
		{
			id: 'id16',
			base: '07.png',
			anime: '',
			act: '',
			text: '『……はーい』',
			voice: '016_……はーい.wav'
		},
		{
			id: 'id17',
			base: '07.png',
			anime: '',
			act: '',
			text: '山が元々あった場所はとても遠い場所で、ハヌマーンは何だかわざわざ戻しに行くのも面倒になってしまいました。',
			voice: '017_山が元々あった場所….wav'
		},
		{
			id: 'id18',
			base: '08.png',
			anime: '',
			act: '',
			text: 'そこで、山半分を運命にまかせて適当に放り投げることに決めました。',
			voice: '018_そこで、山半分を運….wav'
		},
		{
			id: 'id19',
			base: '08.png',
			anime: '08-1.png',
			act: 'slide-left',
			text: 'そいや',
			voice: '019_そいや.wav'
		},
		{
			id: 'id20',
			base: '09.png',
			anime: '',
			act: '',
			text: 'そして山は上下が逆さまになって現在の場所へ。',
			voice: '020_そして山は上下が逆….wav'
		},
		{
			id: 'id21',
			base: '09.png',
			anime: '',
			act: '',
			text: 'もともと山の頂上だった部分が下になり、ハヌマーンが切り取った底だった部分が新しく頂上になりました。こうして今のプノン・クラロム山が出来ました。',
			voice: '021_もともと山の頂上だ….wav'
		},
		{
			id: 'id22',
			base: '09.png',
			anime: '',
			act: '',
			text: '薬の木「チョン・クロン・スワ」は今でも山に自生しており、クルクメールというカンボジアの医者も、この山に薬の木を求めてやってきます。',
			voice: '022_薬の木「チョン・ク….wav'
		},
		{
			id: 'id23',
			base: '00.png',
			anime: '',
			act: '',
			text: 'おしまい',
			voice: '023_おしまい.wav'
		}
	];
	let index = 0;
	let showText = true;
	let baseSrc = '';
	let animeSrc = '';
	let setClass = '';
	let voiceSrc = '';
	$: {
		baseSrc = data[index].base;
		animeSrc = data[index].anime;
		setClass = data[index].act;
	}

	function next() {
		if (index + 1 == data.length) {
			return;
		}
		index++;
		// @ts-ignore
		voiceSrc.pause();
		// @ts-ignore
		voiceSrc = new Audio(`/book/voice/${data[index].voice}`);
		// @ts-ignore
		voiceSrc.play();
	}
	function back() {
		// @ts-ignore
		voiceSrc.pause();
		if (index == 0) {
			return;
		}
		index--;
	}
	function stop() {
		// @ts-ignore
		voiceSrc.pause();
		goto('/');
	}

	onMount(() => {
		// @ts-ignore
		voiceSrc = new Audio();
	});
</script>

<div class="layout">
	<div class="slide">
		<img src="/book/{baseSrc}" alt="base" class="base" />
		{#if animeSrc}
			<img src="/book/{animeSrc}" alt="anime" class="anime {setClass}" />
		{/if}
	</div>
	{#if showText && data[index].text}
		<div class="text">
			<div>{data[index].text}</div>
		</div>
	{/if}
	<div class="menu-top">
		<HeaderNav />
	</div>
	<div class="menu-mid">
		<button on:click={back}>&lt;</button>
		<button on:click={next}>&gt;</button>
	</div>
	<div class="menu-bottom">
		<button on:click={stop}>&#9003;</button>
		<button class="ms-auto" on:click={() => (showText = !showText)}>&#13026;</button>
		<button on:click={() => (index = 0)}>&orarr;</button>
	</div>
</div>

<style lang="scss">
	.layout {
		background-color: #00000090;
	}

	.slide {
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		img {
			margin: auto;
			max-width: 100%;
			max-height: 100%;
			position: absolute;
		}
	}

	.text {
		position: absolute;
		bottom: 0.5rem;
		z-index: 20;
		display: flex;
		width: 100%;
		div {
			max-width: 80%;
			margin: auto;
			background-color: #000000a0;
			color: white;
			border-radius: 0.5rem;
			padding: 0.5rem;
			font-size: x-large;
			white-space: break-spaces;
		}
	}
	.menu-top {
		position: absolute;
		top: 0;
		margin: 0.5rem;
	}
	.menu-mid {
		position: absolute;
		top: 50%;
		width: 100%;
		display: flex;
		justify-content: space-between;
		button {
			font-size: x-large;
			margin: 0 0.3rem;
			padding: 0.3rem;
			background-color: #00000099;
			color: white;
			border-radius: 0.5rem;
		}
	}

	.menu-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		padding: 0.3rem;
		box-sizing: border-box;
		z-index: 30;
		button {
			font-size: x-large;
			// padding: 0 0.5rem;
			background-color: #00000099;
			color: white;
			border-radius: 0.5rem;
		}
	}

	// アニメーション
	.slide-top {
		animation: slide-top 0.8s both;
	}
	@keyframes slide-top {
		0% {
			-webkit-transform: translateY(100px);
			transform: translateY(100px);
			-webkit-opacity: 0.1;
			opacity: 0.1;
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
			-webkit-opacity: 1;
			opacity: 1;
		}
	}

	.slide-left {
		animation: slide-left 0.8s both;
	}
	@keyframes slide-left {
		0% {
			-webkit-transform: translateX(100px);
			transform: translateX(100px);
			-webkit-opacity: 0.1;
			opacity: 0.1;
		}
		100% {
			-webkit-transform: translateX(0);
			transform: translateX(0);
			-webkit-opacity: 1;
			opacity: 1;
		}
	}

	.fuwa {
		animation: fuwa ease-in-out 1.5s infinite alternate;
	}
	@keyframes fuwa {
		0% {
			-webkit-transform: translate(0%, 0%);
			transform: translate(0%, 0%);
		}
		100% {
			-webkit-transform: translate(0%, -30px);
			transform: translate(0%, -30px);
		}
	}

	.blink {
		animation: blink 1s ease-in-out infinite alternate;
	}
	@keyframes blink {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
		}
	}

	.scale {
		animation: scale 1s ease-in-out infinite alternate;
	}
	@keyframes scale {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0.1;
			transform: scale(1.1);
		}
	}

	.shake {
		animation: shake ease-in-out 0.3s infinite alternate;
	}
	@keyframes shake {
		0% {
			-webkit-transform: translate(0%, 0%);
			transform: translate(0%, 0%);
		}
		50% {
			-webkit-transform: translate(-2%, 0%);
			transform: translate(-2%, 0%);
		}
		0% {
			-webkit-transform: translate(0%, 0%);
			transform: translate(0%, 0%);
		}
	}
</style>
