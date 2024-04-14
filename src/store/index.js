import { createStore } from 'vuex';

export default createStore({
	state() {
		return {
			isLoading: false,
		};
	},
	mutations: {
		setIsLoading(state, payload) {
			state.isLoading = payload;
		},
	},
	getters: {
		checkLoading(state) {
			return state.isLoading;
		},
	},
	actions: {
		setIsLoading({ commit }, payload) {
			commit('setIsLoading', payload);
		},
	},
	modules: {},
});
