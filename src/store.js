import { createStore } from 'vuex';

export default createStore({
  state: {
    artData: [], // Ваши данные об искусстве
    currentIndex: 0,
    currentArt: {},
  },
  mutations: {
    setCurrentArt(state, art) {
      state.currentArt = art;
    },
    incrementCurrentIndex(state) {
      state.currentIndex = (state.currentIndex + 1) % state.artData.length;
    },
  },
  actions: {},
  modules: {},
});
