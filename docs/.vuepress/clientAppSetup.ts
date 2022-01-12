import { provide } from "vue"
import { resolvePages, pagesSymbol } from "./composables"
import { defineClientAppSetup } from '@vuepress/client'

export default defineClientAppSetup(() => {
    // console.log('clientAppSetup')
    const pages = resolvePages()
    provide(pagesSymbol, pages)
})