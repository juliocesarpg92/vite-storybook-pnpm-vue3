module.exports = {
    stories: [
        '../src/stories/**/*.stories.mdx',
        '../src/stories/**/*.stories.@(js|jsx|ts|tsx|vue)',
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