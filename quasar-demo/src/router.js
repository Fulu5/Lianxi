import Vue from "vue";
import Router from "vue-router";
import MyLayout from "./layouts/MyLayout.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      mode: "hash",
      component: MyLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home
        },
        {
          path: "/about",
          name: "about",
          component: About
        }
      ]
    }
  ]
});
