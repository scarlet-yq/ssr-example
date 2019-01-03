import Vue from 'vue'
import createRouter from './router.js'
import createStore from './store.js'
import App from './App.vue'

export function createApp() {
  const router = createRouter();
  const store = createStore();
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  return app
}
