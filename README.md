# Repro repo

This is to reproduce an issue in storybook-builder-vite that occurs when using pnpm but not when using yarn (and presumably npm). (https://github.com/eirslett/storybook-builder-vite/issues/55)

## Running pnpm

```
rm -rf node_modules
pnpm install
pnpm run storybook
```

The browser should open, but in the console, you'll see an error like: 

```
Uncaught SyntaxError: The requested module '/node_modules/.pnpm/util-deprecate@1.0.2/node_modules/util-deprecate/browser.js?v=fc8f78f8' does not provide an export named 'default'
```

## Running yarn

This should work

```
rm -rf node_modules
yarn
yarn storybook
```
