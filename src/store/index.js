// src/store.js
import { createStore } from 'vuex';

const store = createStore({
	state: {
		theme: localStorage.getItem('theme') || 'light', // Load theme from local storage or default to 'light'
	},
	mutations: {
		setTheme(state, theme) {
			state.theme = theme;
			localStorage.setItem('theme', theme); // Persist theme to local storage
		},
	},
	actions: {
		changeTheme({ commit }, theme) {
			commit('setTheme', theme); // Commit the mutation to change the theme
		},
	},
	getters: {
		currentTheme(state) {
			return state.theme; // Getter to access the current theme
		},
	},
});

export default store;
