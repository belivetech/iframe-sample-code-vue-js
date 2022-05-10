import Vue from "vue";
import App from "./App.vue";
import Router from "vue-router";

import About from "./views/About";
import Home from "./views/Home";

Vue.use(Router);

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About }
];

const router = new Router({
  routes
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
