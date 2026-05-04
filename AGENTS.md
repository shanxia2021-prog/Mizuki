Package Manager: `pnpm`
Mizuki Docs: https://docs.mizuki.mysqil.com
Scripts available:
```json
	"scripts": {
		"sync-content": "node scripts/sync-content.js",
		"init-content": "node scripts/init-content-repo.js",
		"predev": "node scripts/sync-content.js || true",
		"prebuild": "node scripts/sync-content.js || true",
		"dev": "astro dev",
		"start": "astro dev",
		"check": "astro check",
		"update-anime": "node scripts/update-anime.mjs",
		"update-bangumi": "node scripts/update-bangumi.mjs",
		"update-bilibili": "node scripts/update-bilibili.mjs",
		"build": "node scripts/update-anime.mjs && astro build && pagefind --site dist && node scripts/compress-fonts.js",
		"submit": "node scripts/indexnow-submit.js",
		"preview": "astro preview",
		"astro": "astro",
		"type-check": "tsc --noEmit --isolatedDeclarations",
		"new-post": "node scripts/new-post.js",
		"format": "prettier --write ./src",
		"lint": "eslint ./src --fix",
		"preinstall": "npx only-allow pnpm",
		"compress-fonts": "node scripts/compress-fonts.js"
	},
```