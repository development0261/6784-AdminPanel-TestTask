import Vue from 'vue';
import Vuex from 'vuex';
import axios from '../../plugins/axios';

Vue.use(Vuex, axios);

const state = {
  getProjectDetails: [],
  updateProjectDetails: [],
};

const getters = {
  getProjectDetails: (state) => state.getProjectDetails,
  updateProjectDetails: (state) => state.updateProjectDetails,
};

const mutations = {
  SET_PROJECT_DETAILS (state, getProjectDetails) {
	state.getProjectDetails = getProjectDetails
  },
  SET_UPDATE_PROJECT_DETAILS (state, updateProjectDetails) {
	state.updateProjectDetails = updateProjectDetails
  },
};

const actions = {
	async getProjectDetails ({ commit }) {
		return new Promise((resolve, reject) => {
			axios.get('/project-detail').then(data => {
				commit('SET_PROJECT_DETAILS', data)
				resolve(data)
			}).catch(error => {
				commit('SET_PROJECT_DETAILS', error)
				reject(error)
			});
		});
	},
	async updateProjetDetails ({ commit }, payload) {
		return new Promise((resolve, reject) => {
			axios.post('/project-detail', payload)
			.then(data => {
				commit('SET_UPDATE_PROJECT_DETAILS', data);
				resolve(data);
			}).catch(error => {
				commit('SET_UPDATE_PROJECT_DETAILS', error);
				reject(error);
			})
		});
	},
};

export default {
  state,
  getters,
  mutations,
  actions,
}
