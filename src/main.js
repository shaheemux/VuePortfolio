import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import url("https://fonts.googleapis.com/css?family=Titillium+Web")


createApp(App).use(store).use(router).mount('#app')
