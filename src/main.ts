import { createApp } from "vue";
import App from "./App.vue";
import Axios from "axios";

const app = createApp(App);
app.mount("#app");

app.config.globalProperties.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  app.config.globalProperties.$http.defaults.headers.common["Authorization"] =
    token;
}
