import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {Modal} from '@/components'
import MaterialKit from "./plugins/material-kit";
/* Estilos para la targeta*/
require('@/assets/scss/hipster_cards.css');
/*Termina  Estilos para la targeta*/

Vue.config.productionTip = false;

Vue.use(MaterialKit);
Vue.component(Modal);


const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
