import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import HomePage from "./pages/HomePage.vue";

loadFonts();

const Detail = { template: "<div>Detail</div>" };
const NotFound = { template: "<div>NotFound</div>" };

const routes = [
  { name: "Home", path: "/", component: HomePage },
  { name: "Detail", path: "/:id", component: Detail },
  { name: "NotFound", path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  hash: false,
  routes,
});

createApp(App).use(router).use(vuetify).mount("#app");
