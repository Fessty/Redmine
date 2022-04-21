import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config'

import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import Menubar from 'primevue/menubar'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Button from 'primevue/button'

const app = createApp(App)

app.component('NavbarPrime', Menubar)
app.component('InputText', InputText)
app.component('CheckboxPrime', Checkbox)
app.component('ButtonPrime', Button)

app.use(store)
  .use(router)
  .use(PrimeVue)
  .mount('#app')

app.use(PrimeVue)
