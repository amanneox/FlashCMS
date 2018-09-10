// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable*/
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import axios from 'axios'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import { store } from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VeeValidate from 'vee-validate'


Vue.use(VeeValidate)
library.add(fas.faCoffee,fas.faShoppingCart,fas.faUserCircle,fas.faCompass,fas.faBoxOpen,fas.faQuestion,fas.faMobileAlt,fas.faTruck
,fas.faMobile,fas.faArrowAltCircleRight,fab.faFacebook,fab.faInstagram,fab.faTwitter,fab.faGooglePlus,fab.faYoutube
,fas.faHome,fas.faCaretSquareDown,fas.faBars,fas.faLaptop,fas.faKey,fas.faTshirt,fas.faPaintRoller,fas.faHeart
,fas.faUser,fas.faFileContract,fas.faQuestionCircle,fas.faTimes,fas.faFilter,fas.faSortAmountDown,fas.faSearch,fas.faArrowRight,
fas.faShare,fas.faTrash,fas.faPlusSquare,fas.faMinusSquare,fas.faBell,fas.faFile,fas.faColumns,fas.faPlug,fas.faSlidersH,
fas.faSignOutAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(Vuex)
Vue.use(axios)
Vue.use(Vuetify, {
  theme: {
   primary: "#2196F3",
   secondary: "#BBDEFB",
   accent:"#E65100",
   error: "#f44336",
   warning: "#ffeb3b",
   info: "#1DE9B6",
   success: "#00E676"
  }
})
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)



// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
