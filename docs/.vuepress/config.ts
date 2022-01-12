import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
// import WindiCSS from 'vite-plugin-windicss'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
    title: 'Captime | crossfit timer',
    description: 'Just playing around.2',
    theme: path.resolve(__dirname, './theme'),
    bundler: '@vuepress/bundler-vite',
    clientAppSetupFiles: path.resolve(__dirname, './clientAppSetup.ts'),
    // options for vite bundler
    bundlerConfig: {
        viteOptions: {
            // plugins: [WindiCSS()],
            css: {
                postcss: {
                    plugins: [require("postcss-windicss")]
                },
            },
        },
    },
})