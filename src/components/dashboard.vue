<template>
    <div class="recordList">
        <div>
            <searchBar @searchTextevent="textMatch" />
        </div>
        <div class="student-list" >
            <div id="v-for-object" class="recordList">                
                <div v-for="onerecord in textMatch" :key="onerecord.id">
                    <student :record="onerecord" />
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import searchBar from './searchBar.vue';
import student from './student.vue';

export default{

    name: 'dashboard',

    components:{
       searchBar,
       student
      
    },

    props: ['studentRecords'],  
   

    computed:{  
             
        textMatch(searchtext){ 
            if(searchtext){                 
                console.log("printing records in ",this.studentRecords);  
                return Object.values(this.studentRecords).filter(r=>{
                    return r.firstName.match(searchtext);
                });
            }
            else{
                return Object.values(this.studentRecords)
            }
            
        }      
   }
}
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,300&display=swap');

  .recordList{
      font-family: 'Raleway', sans-serif;
  }

</style>
