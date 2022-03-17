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
            '@storybook/addon-docs > doctrine',
            '@storybook/addon-docs > slash',
            '@storybook/client-api > @storybook/csf',
            '@storybook/client-api > fast-deep-equal',
            '@storybook/client-api > global',
            '@storybook/client-api > lodash/isFunction',
            '@storybook/client-api > lodash/isPlainObject',
            '@storybook/client-api > lodash/isString',
            '@storybook/client-api > lodash/mapValues',
            '@storybook/client-api > lodash/pick',
            '@storybook/client-api > lodash/pickBy',
            '@storybook/client-api > memoizerific',
            '@storybook/client-api > stable',
            '@storybook/client-api > synchronous-promise',
            '@storybook/client-api > ts-dedent',
            '@storybook/react > doctrine',
            '@storybook/react > escodegen',
            '@storybook/react > html-tags',
            '@storybook/react > react-element-to-jsx-string > @base2/pretty-print-object',
            '@storybook/react > react-element-to-jsx-string > react-is',
            '@storybook/store > util-deprecate',
            'memoizerific',
            'react > react-is',
            'uuid-browser',
        ]}};
    },
};
