import Vue from 'vue';
import Vuex from 'vuex';
import { ProfileModule } from './project';

Vue.use(Vuex);

export interface RootState {
  redirectUrl: string | null;
}

export const state: RootState = {
  redirectUrl: null,
};

export default new Vuex.Store({
  state,
  mutations: {

  },
  actions: {

  },
  modules: {
    ProfileModule,
  },
});
