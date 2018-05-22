import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  message: 'Hello',
  username: 'Serkan Ekinci'
};
const getters = {
  welcomeMessage(state){
    return `${state.message}  ${state.username}`
  }
};
const mutations = {   //only sync
  setUserName(state,name){
    state.username = name;
  }
};
const actions = {  // async
  updateUserName({commit}, name){
    commit('setUserName', name);
  }
};

const state2 = {};
const getters2 = {};
const mutations2 = {};
const actions2 = {};

const store = new Vuex.Store({
  modules:{
    user:{
      state,
      getters,
      mutations,
      actions
    },
    cart: {
      state2,
      getters2,
      mutations2,
      actions2
    }
  }
});

export default store;
