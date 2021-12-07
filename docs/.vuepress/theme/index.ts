import Layout from './layouts/Layout.vue'
import { path } from '@vuepress/utils'

module.exports = {
  // extends: '@vuepress/theme-default',
  layouts: {
    Layout: path.resolve(__dirname, './layouts/Layout.vue'),
  },
}