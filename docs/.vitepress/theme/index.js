import Layout from "./Layout.vue";
import "./main.css";

export default {
  Layout,
  NotFound: () => "custom 404",
  enhanceApp({ app, router, siteData }) {
  },
};
