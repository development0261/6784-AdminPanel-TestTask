import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
Vue.use(Vuex, axios)

import ProjectDetails from './modules/ProjectDispatch';

export default new Vuex.Store({
  modules: {
    ProjectDetails,
  },
});
