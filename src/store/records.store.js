import Vue from 'vue';
import Vuex from 'vuex';
import { recordService } from '../services/record.service';
//import { router } from '../router.js'


Vue.use(Vuex)

const getDefaultStatus = () => {
  return {
    status: {},
    recordStatus: {}
  };

}

const state = getDefaultStatus()

const mutations = {
  getRecordRequest(state) {
    Vue.set(state.status, 'getting', true);
  },
  getRecordSuccess(state, student) {
    state.status = { getting: false };

    Vue.set(state, 'recordStatus', student
    //   pic: student.pic,
    //   name: student.firstName,
    //   email: student.email,
    //   company: student.company,
    //   skill: student.skill,
    //   average: student.average,
    //   id: student.id

    );
  },
  getRecordFailure(state, error) {
    state.status = { getting: false };
    state.gettingError = error;
  },

}

const actions = {
  getRecords({ dispatch, commit }) {
    console.log("getting Records");
    commit('getRecordRequest');

    recordService.getStudentRecords()
      .then(
        student => commit('getRecordSuccess', student.students),
        errorResponse => {
          commit('getRecordFailure', errorResponse);
          dispatch('alert/error', `${errorResponse.message} (${errorResponse.status})`, { root: true });
        }
      );
  },

}



export const records = {
  namespaced: true,
  state,
  actions,
  mutations
};