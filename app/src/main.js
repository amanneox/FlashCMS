// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'
import Vuex from 'vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VeeValidate from 'vee-validate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueFilePond from 'vue-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'

// Create component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview)
Vue.use(Vuetify, {
  theme: {
    primary: '#1C2541',
    secondary: '#1481BA',
    accent: '#11B5E4',
    light: '0CAADC',
    secondary2: '#034748'
  }
})
Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
library.add(fas.faCoffee, fas.faUserCircle, fas.faCompass, fas.faBoxOpen, fas.faQuestion, fas.faMobileAlt, fas.faTruck
  , fas.faMobile, fas.faArrowAltCircleRight, fab.faFacebook, fab.faGooglePlus, fab.faGithub
  , fas.faHome, fas.faCaretSquareDown, fas.faBars, fas.faKey, fas.faTshirt, fas.faPaintRoller, fas.faHeart
  , fas.faUser, fas.faFileContract, fas.faQuestionCircle, fas.faTimes, fas.faFilter, fas.faSortAmountDown,
  fas.faSearch, fas.faArrowRight,
  fas.faShare, fas.faTrash, fas.faPlusSquare, fas.faMinusSquare, fas.faEdit, fas.faSignOutAlt, fas.faPlug, fas.faSlidersH,
  fas.faFile, fas.faUser, fas.faPowerOff, fas.faPlus, fas.faAngleLeft
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('file-pound', FilePond)
Vue.config.productionTip = false
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
