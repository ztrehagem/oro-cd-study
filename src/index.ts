import Vue from 'vue';
import App from './app.vue';

new Vue({
  el: '#vue-app-root',
  render: f => f(App),
});