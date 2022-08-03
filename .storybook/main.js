module.exports = {
    stories: [
        '../src/components/**/*.stories.mdx',
        '../src/components/**/*.stories.@(js|jsx|ts|tsx|vue)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    core: {
        builder: '@storybook/builder-vite',
    },
    framework: '@storybook/vue3'
}