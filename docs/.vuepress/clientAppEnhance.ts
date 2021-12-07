// import 'virtual:windi.css'
// import 'virtual:windi-devtools'
import "./theme/main.css"

import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // ...
    console.log('defineClientAppEnhance')
})