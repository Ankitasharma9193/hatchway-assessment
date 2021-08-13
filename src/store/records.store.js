import Vue from 'vue';
import Vuex from 'vuex';
import { recordService } from '../services/record.service';
//import { router } from '../router.js'


Vue.use(Vuex)

const getDefaultStatus = () => {
  return {
    status: {},
    recordStatus: {},
    //recordIdsFilteredByTag: [],
    //displayedRecordIds: {},
    recordIdToTags: {},
  };

}

const state = getDefaultStatus()

const mutations = {
  getRecordRequest(state) {
    Vue.set(state.status, 'getting', true);
  },
  getRecordSuccess(state, student) {
    state.status = { getting: false };
    state.recordStatus = student;
    
  },

  updateRecordTags(state, {tagInputs, recordId}){
    
    Vue.set(state.recordIdToTags, recordId, tagInputs)
  },
  // searchTagToRecords(state, {tagSearchtext}){
  //     const tagToRecordFiltered = Object.entries(state.recordIdToTags)
  //     .filter(([, values]) => {return values.includes(tagSearchtext)})
  //     .reduce((acc, [key, ]) => {
  //       acc.push(key);
  //       return acc;
  //     }, []);

  //     state.recordIdsFilteredByTag = tagToRecordFiltered;
  // },
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

  updateTags({commit}, {tagInputs, recordId}){
    console.log("updating tag here", recordId);
    commit('updateRecordTags', {tagInputs, recordId});
  },

  // searchTagRecords({commit}, {tagSearchtext}){
  //   console.log("searching for the record as per tags here", tagSearchtext);
  //   commit('searchTagToRecords', {tagSearchtext});
  // }

}



export const records = {
  namespaced: true,
  state,
  actions,
  mutations
};