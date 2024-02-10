# sveltekitに、scssとpwaを組み込んだだけのスターター・テンプレート

---

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

```bash
# 空でpj作成
npm create svelte@latest

# PJ名を指定してPJ作成
npm create svelte@latest my-app
```

## Developing

```bash
# 移動
cd my-app

# ライブラリのインストール
npm install
```

```bash
# サーバー起動
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

```bash
# ビルド
npm run build

# プレビュー
npm run preview
```

---

メモ

# scss対応

- sassをインストール

  ```bash
  # sass
  npm install sass
  ```

- svelte.config.jsを編集

  ```javascript
  import adapter from '@sveltejs/adapter-auto';
  import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'; // 追加

  const config = {
  	kit: {
  		adapter: adapter()
  	},
  	preprocess: [vitePreprocess()] // 追加
  };

  export default config;
  ```

- 記述:lang="scss"と指定

  ```css
  <style lang="scss">
  .hote{
    .fuga{
      color: red;
    }
  }
  </style>
  ```

# Static

- インストール

  ```bash
  # adapterをインストール
  npm i -D @sveltejs/adapter-static

  ```

- svelte.config.jsを編集

  ```javascript
  // svelte.config.js
  import adapter from '@sveltejs/adapter-static';

  export default {
  	kit: {
  		adapter: adapter({
  			pages: 'build',
  			assets: 'build',
  			fallback: undefined,
  			precompress: false,
  			strict: true
  		})
  	}
  };
  ```

- src/routesに+layout.jsを作成
  ```javascript
  // +layout.js
  export const prerender = true;
  ```

# PWA

- PWAをインストール

  ```bash
  # pwa
  npm i @vite-pwa/sveltekit -D
  ```

- vite.config.jsで読み込み

  ```js
  // vite.config.js
  import { sveltekit } from '@sveltejs/kit/vite';
  import { defineConfig } from 'vite';
  import { SvelteKitPWA } from '@vite-pwa/sveltekit'; // 追加

  export default defineConfig({
  	plugins: [
  		sveltekit(),
  		SvelteKitPWA() // 追加
  	]
  });
  ```

- staticにファイル追加

  - manifest.json

    ```json
    {
    	"short_name": "myapp-PWA",
    	"name": "myapp-PWA",
    	"display": "standalone",
    	"orientation": "portrait",
    	"start_url": "/",
    	"icons": [
    		{
    			"src": "/icon.png",
    			"sizes": "192x192",
    			"type": "image/png"
    		}
    	]
    }
    ```

  - ファイル内に記述した`.icon`を正しく用意すること
  - serviceworker.js

    ```js
    //キャッシュ名(=バージョン)を指定する
    var CACHE_NAME = 'myapp-v1';
    //キャッシュするファイル or ディレクトリを指定する
    var urlsToCache = ['/'];

    // install
    self.addEventListener('install', function (event) {
    	event.waitUntil(
    		caches.open(CACHE_NAME).then(function (cache) {
    			console.log('Opened cache');
    			return cache.addAll(urlsToCache);
    		})
    	);
    });
    // activate
    self.addEventListener('activate', function (event) {
    	var cacheWhitelist = [CACHE_NAME];
    	event.waitUntil(
    		caches.keys().then(function (cacheNames) {
    			return Promise.all(
    				cacheNames.map(function (cacheName) {
    					if (cacheWhitelist.indexOf(cacheName) === -1) {
    						return caches.delete(cacheName);
    					}
    				})
    			);
    		})
    	);
    });
    // fetch
    self.addEventListener('fetch', function (event) {
    	event.respondWith(
    		caches.match(event.request).then(function (response) {
    			if (response) {
    				return response;
    			}

    			var fetchRequest = event.request.clone();

    			return fetch(fetchRequest).then(function (response) {
    				if (!response || response.status !== 200 || response.type !== 'basic') {
    					return response;
    				}

    				var responseToCache = response.clone();

    				caches.open(CACHE_NAME).then(function (cache) {
    					cache.put(event.request, responseToCache);
    				});

    				return response;
    			});
    		})
    	);
    });
    ```

- app.htmlで`manifest.json`と`serviceworker.js`を読み込み

  ```html
  <!doctype html>
  <html lang="ja">
  	<head>
  		<meta charset="utf-8" />
  		<link rel="icon" href="%sveltekit.assets%/favicon.png" />
  		<meta name="viewport" content="width=device-width, initial-scale=1" />
  		<!--- 追加：ここから -->
  		<link rel="manifest" href="/manifest.json" />
  		<script>
  			'use strict';
  			registServiceWorker();
  			function registServiceWorker() {
  				if ('serviceWorker' in navigator) {
  					window.addEventListener('load', function () {
  						navigator.serviceWorker.register('/serviceworker.js', { scope: './' }).then(
  							function (registrasion) {
  								console.log(
  									'ServiceWorker registration successful with scope',
  									registrasion.scope
  								);
  							},
  							function (err) {
  								console.log('ServiceWorker registration failed', err);
  							}
  						);
  					});
  				}
  			}
  		</script>
  		<!--- 追加:ここまで -->
  		%sveltekit.head%
  	</head>
  	<body data-sveltekit-preload-data="hover">
  		<div style="display: contents">%sveltekit.body%</div>
  	</body>
  </html>
  ```
