import "./main.css";

import DefaultTheme from 'vitepress/theme'
import Layout from './layouts/Layout.vue'

DefaultTheme.Layout = Layout
export default {
  ...DefaultTheme
}