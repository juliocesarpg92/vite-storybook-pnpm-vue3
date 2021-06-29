# Repro repo

This is to reproduce an issue in storybook-builder-vite that occurs when using pnpm but not when using yarn (and presumably npm).

## Running pnpm

This should fail with something like `Error: Failed to resolve force included dependency: airbnb-js-shims`

```
rm -rf node_modules
pnpm install
pnpm run storybook
```

## Running yarn

This should work

```
rm -rf node_modules
yarn
yarn storybook
```