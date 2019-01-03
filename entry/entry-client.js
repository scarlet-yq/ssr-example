import {createApp} from '../src/main'

const app = createApp();

if (window._INITIAL_STATE_) {
  app.$store.replaceState(window._INITIAL_STATE_)
}

window.onload = function (){
  app.$mount("#app")
}