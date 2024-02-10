<script>
	// @ts-nocheck
	import HeaderNav from '$lib/HeaderNav.svelte';
	import { onMount } from 'svelte';

	const quiz = [
		{
			id: 'Q001',
			title: '音の謎',
			question: '駅の改札で鳴るピン・ポーンの意味は？',
			img: '',
			answer: [
				'行ってらっしゃいの意味',
				'目が見えない人に場所を教えている',
				'利用者に楽しんでもらうため',
				'改札を通るリズムを整えるため'
			],
			correct: 1,
			comment:
				'改札で耳にする「ピン・ポーン」の音は、目が不自由な人のために改札の場所を音で教えているものでした！'
		},
		{
			id: 'Q002',
			title: '眠りの謎',
			question: '睡眠時間は男性と女性、どちらが多い？',
			img: '',
			answer: ['男性', '女性', '変わらない'],
			correct: 0,
			comment:
				'2020年に行われた調査によると、国民全体の平均睡眠時間は7時間12分。男性は7時間20分、女性は7時間6分でした。わずかですが男性の方が睡眠時間が長いいという結果になりました！'
		},
		{
			id: 'Q003',
			title: '食の謎',
			question: '日本で一番収穫されている果物は？',
			img: '',
			answer: ['りんご', 'なし', 'みかん', 'ぶどう'],
			correct: 2,
			comment: '子供が大好きなみかん！日本で一番収穫されているのはみかんでした☆'
		},
		{
			id: 'Q004',
			title: '金の謎',
			question: '10円玉の表はどっち？',
			img: '',
			answer: ['年号がある方', '年号がない方', 'どちらも表', '表裏は無い'],
			correct: 1,
			comment:
				'法律上は10円玉の表・裏は決まっていません。しかしお金をつくる造幣局では作業上の必要性から年銘（年号）のある側を「裏」、年号がない方を「表」としています。'
		},
		{
			id: 'Q005',
			title: '金の謎',
			question: '1円玉に描かれている木は何？',
			img: '',
			answer: ['けやき', 'さくら', 'うめ', '空想の木'],
			correct: 3,
			comment: '具体的な木の名前はなく、一円玉を作った造幣局では「若木」と表現しているそうです。'
		},
		{
			id: 'Q006',
			title: '金の謎',
			question: '硬貨をきれいにする方法は？',
			img: '',
			answer: ['太陽の光にあてる', 'レモンの水につける', 'メラニンスポンジでゴシゴシする'],
			correct: 1,
			comment:
				'素材が銅合金でできている5円から500円までの硬貨は、レモン水（レモン果汁）などの弱酸に漬けるか煮沸するときれいになります。レモン水をつけた後は良く洗ってくださいね♪'
		},
		{
			id: 'Q007',
			title: '金の謎',
			question: '使えなくなった硬貨はどうなる？',
			img: '',
			answer: ['再び硬貨になる', '捨てられる', '家電製品の部品などにリサイクルされる'],
			correct: 0,
			comment:
				'汚れて使えなくなった1円玉や10円玉などは、素材ごとに分けられて再び硬貨として作り直されます。'
		},
		{
			id: 'Q008',
			title: '食の謎',
			question: 'ラーメンを一番食べている都道府県は？',
			img: '',
			answer: ['新潟県', '山形県', '福岡県', '東京都'],
			correct: 1,
			comment:
				'2021年は新潟がラーメン消費量1位でしたが、2022年には山形が1位に。1世帯当たりのラーメン消費額が8年連続日本一だった山形県が2年振りに王者に返り咲きました！'
		},
		{
			id: 'Q009',
			title: '食の謎',
			question: 'シュークリームの「シュー」の意味は？',
			img: '',
			answer: ['キャベツ', 'わた', '雲', 'バラ'],
			correct: 0,
			comment:
				'かわいらしい「シュー」という響きですが、フランス語でキャベツを意味します。焼きたてのシュークリームがキャベツに似ていることから名づけられました。'
		},
		{
			id: 'Q010',
			title: '医の謎',
			question: 'お医者さんが手術のときに緑の服を着るのはなぜ？',
			img: '',
			answer: ['目を疲れにくくするため', 'リラックスのため', '汚れを目立たなくするため'],
			correct: 0,
			comment:
				'それぞれの色には「反対色（補色）」というものがあります。この反対色（補色）とは、性質が反対の色のこと。赤の「反対色（補色）」は緑です。手術では赤色の血をたくさん見るので、お医者さんは目が疲れないように緑の服を着ています。'
		}
	];
	let answer_num = 9;
	let quiz_index = 0;
	let isCorrect = false;
	let piron = '';
	let boo = '';

	// 問題番号
	function jump(i) {
		quiz_index = i;
	}

	// 正誤判定
	function answer(i) {
		// console.log(i);
		answer_num = i;
		if (answer_num == quiz[quiz_index].correct) {
			isCorrect = true;
			piron.play();
		} else {
			boo.play();
		}
	}

	// 次へボタン
	function next() {
		isCorrect = false;
		quiz_index++;
	}

	// マウント
	onMount(async () => {
		piron = new Audio('/sound/piron.mp3');
		boo = new Audio('/sound/boo.mp3');
	});
</script>

<div class="wapper">
	<HeaderNav />

	<main>
		<!-- 進捗 -->
		<div class="progress">
			{#each quiz as num, index (num.id)}
				<button class:active={index == quiz_index} on:click={() => jump(index)}>{index + 1}</button>
			{/each}
		</div>

		<!-- 問題 -->
		<div>{quiz[quiz_index].title}</div>
		<div class="question">{quiz[quiz_index].question}</div>

		<!-- 選択肢 -->
		<div class="answer">
			{#each quiz[quiz_index].answer as choice, i}
				<button on:click={() => answer(i)}>{choice}</button>
			{/each}
		</div>
	</main>

	<!-- 正解 -->
	{#if isCorrect}
		<section class="correct-area">
			<div class="correct">
				<div>
					<span class="check">&starf; </span>
					正解<span class="check">&starf; </span>
				</div>
				<div>
					<b class="d-block center">
						{quiz[quiz_index].answer[quiz[quiz_index].correct]}
					</b>

					<hr />
					<p>{quiz[quiz_index].comment}</p>
				</div>
				{#if quiz_index + 1 == quiz.length}
					<a href="/">
						<button>終わる</button>
					</a>
				{:else}
					<button on:click={next}>次へ</button>
				{/if}
			</div>
		</section>
	{/if}
</div>

<style lang="scss">
	.wapper {
		height: 100vh;
		box-sizing: border-box;
		display: grid;
		grid-template-rows: auto 1fr;
		position: relative;
	}

	main {
		padding: 1rem;
		background-color: white;
		display: flex;
		flex-direction: column;
	}

	.progress {
		display: grid;
		grid-template-columns: repeat(10, 1fr);
		button {
			font-size: large;
			padding: 0.2rem 0;
			&.active {
				background-color: #a4d1ce;
			}
		}
	}

	.question {
		margin: auto;
		overflow: auto;
		font-size: x-large;
	}

	.answer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 0.5rem;
		button {
			font-size: large;
			padding: 0.5rem;
		}
	}

	.correct-area {
		position: absolute;
		bottom: 2rem;
		width: 100%;
		padding: 0 1rem;
		box-sizing: border-box;
		.correct {
			width: fit-content;
			margin: 0 auto;
			padding: 1rem;
			border: solid rgb(0, 167, 213);
			border-radius: 1rem;
			background: #d7eeff;
		}
		.check {
			color: rgb(255, 203, 73);
		}
		button {
			display: block;
			margin-left: auto;
			font-size: large;
			padding: 0.5rem;
			// border-radius: 1rem;
		}
	}
</style>
