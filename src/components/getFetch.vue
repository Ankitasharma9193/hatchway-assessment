<template>
    <div class="records">
       <dashboard :studentRecords="record"></dashboard>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
import dashboard from './dashboard.vue';

export default{
    name : 'getFetch',

    components:{
         dashboard: dashboard
    },
   
    computed:{
       ...mapState({
           record: (state) => state.records.recordStatus
       })
    },

    created() {
    this.getRecords();
  },
  methods: {
     ...mapActions("records", ["getRecords"]),
  },



}
</script>

<style>

</style>
