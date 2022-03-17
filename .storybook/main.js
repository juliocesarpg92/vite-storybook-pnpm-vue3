module.exports = {
    stories: [
        '../stories/**/*.stories.mdx',
        '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        // "@storybook/addon-a11y", // still breaks
        '@storybook/addon-links',
        '@storybook/addon-essentials',
    ],
    core: {
        builder: 'storybook-builder-vite',
    },
    async viteFinal(config, { configType }) {

        return {...config, optimizeDeps: {...config.optimizeDeps, include: [
            ...config.optimizeDeps.include, 
            '@storybook/react > doctrine',
            '@storybook/client-api > fast-deep-equal',
            '@storybook/client-api > lodash/isPlainObject',
            '@storybook/client-api > lodash/mapValues',
            '@storybook/client-api > ts-dedent',
            '@storybook/addon-docs > doctrine',
            '@storybook/react > react-element-to-jsx-string > @base2/pretty-print-object',
        ]}};
    },
};
