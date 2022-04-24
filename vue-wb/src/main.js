// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
// 引入内容
import { Cell, List, Image, Lazyload, Col, Row, Form, Field, Button } from "vant";
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.use(List).use(Cell).use(Image)
  .use(Lazyload).use(Col).use(Row)
  .use(Form).use(Field).use(Button);

if (process.env.NODE_ENV === "production") {
  axios.defaults.baseURL = "http://192.168.11.5:3001";
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
