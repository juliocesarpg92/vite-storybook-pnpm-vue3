# Getting Storybook working with Vue 3, TS, Vite, and pnpm

Forked from https://github.com/IanVS/vite-storybook-pnpm-shame, this repo should help with getting a Vue 3 project using TS, Vite, pnpm, and the latest version of Storybook working.

## Running Storybook

```
rm -rf node_modules
pnpm install
pnpm storybook
```

## Changes made

To get things working, I had to add a fair number of `devDependencies` so that pnpm wouldn't complain about missing `peerDependencies`, as well as fix some start up errors when Storybook ran about failing to resolve imports, such as:

```bash
1:38:33 PM [vite] Internal server error: Failed to resolve import "@storybook/addon-outline/preview.js" from "../../../../virtual:/@storybook/builder-vite/vite-app.js". Does the file exist?
  Plugin: vite:import-analysis
  File: /virtual:/@storybook/builder-vite/vite-app.js
  19 |  import * as config_5 from '@storybook/addon-backgrounds/preview.js'
  20 |  import * as config_6 from '@storybook/addon-measure/preview.js'
  21 |  import * as config_7 from '@storybook/addon-outline/preview.js'
     |                             ^
  22 |      import * as preview from '/virtual:/@storybook/builder-vite/preview-entry.js';
  23 |      import { configStories } from '/virtual:/@storybook/builder-vite/storybook-stories.js';
      at formatError (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:36296:46)
      at TransformContext.error (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:36292:19)
      at normalizeUrl (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:59668:26)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at async TransformContext.transform (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:59817:57)
      at async Object.transform (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:36533:30)
      at async doTransform (/Users/jakekenneally/dev/vite-storybook-pnpm-vue/node_modules/.pnpm/vite@2.9.1/node_modules/vite/dist/node/chunks/dep-611778e0.js:55507:29)
^C%
```

This commit has those dependency changes: https://github.com/jdk2pq/vite-storybook-pnpm-vue/commit/9ccdf744827b7d539440849f545df50c5675c981

## VSCode plugins installed
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
* [Git Graph]()