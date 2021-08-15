<template>
  <div class="recordList">
    <div class="name-searchBar">
      <searchBar @searchTextevent="updateSearchedText" />
    </div>

    <div class="tag-searchBar">
      <keyword-search-bar @searchTagRecordEvent="recordsById" />
    </div>

    <!-- get the search function here as that has id of tags records -->

    <div class="student-list">
      <div id="v-for-object" class="recordList">
        <div v-for="onerecord in intersectionOfSearch" :key="onerecord.id">
          <student :record="onerecord" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchBar from "./searchBar.vue";
import keywordSearchBar from "./tagComponent/keywordSearch-bar.vue";
import student from "./student.vue";

export default {
  name: "dashboard",

  components: {
    searchBar,
    keywordSearchBar,
    student,
  },

  props: ["studentRecords"],

  data() {
    return {
      searchText: null,
      recordIds: [],
      recordsByTagSearch: [],
    };
  },

  computed: {
    recordMatchBySearchBar() {
      //check if already exist to remove duplicate keys
      if (this.searchText) {
        console.log("printing records in ", this.studentRecords);

        var updatedList = this.studentRecords.filter((item) => {
          return item.firstName
            .concat(" ", item.lastName)
            .toLowerCase()
            .includes(this.searchText.toLowerCase());
        });

        return updatedList;
      } else {
        return this.studentRecords;
      }
    },

    recordMatchByTagSearch() {
      console.log(this.recordIds.length);
      if (this.recordIds.length > 0) {
        let tagFilteredRecords = [];
        for (let i = 0; i < this.recordIds.length; i++) {
          this.studentRecords.forEach((item) => {
            if (item.id == this.recordIds[i]) {
              tagFilteredRecords.push(item.id);
            }
          });
        }
        console.log("tag filters are .......", tagFilteredRecords);
        return tagFilteredRecords;
      } else {
        return this.studentRecords;
      }
    },

    //intersectionSearch() {
    //   let searchBarResultIds = [],
    //     tagBarResultIds = [];

    //   if (this.searchText || this.recordIds.length > 0) {
    //     if (this.searchText) {
    //       for (let i = 0; i < this.recordMatchBySearchBar.length; i++) {
    //         searchBarResultIds.push(this.recordMatchBySearchBar[i].id);
    //         console.log("searchbar ...", searchBarResultIds);
    //       }
    //     }
    //     if (this.recordIds.length > 0) {
    //       for (let i = 0; i < this.recordMatchByTagSearch.length; i++) {
    //         tagBarResultIds.push(this.recordMatchByTagSearch[i].id);
    //         console.log("tag search....", tagBarResultIds);
    //       }
    //     }

    //     // let result = [...searchBarResultIds, ...tagBarResultIds]; --- this is OR
    //     let result = searchBarResultIds.filter((value) =>
    //       tagBarResultIds.includes(value)
    //     );

    //     console.log("result of intersection is", result);

    //     let finalFilter = [];
    //     for (let i = 0; i < result.length; i++) {
    //       this.studentRecords.forEach((value) => {
    //         if (value.id == result[i]) {
    //           console.log(value.id, result[i]);
    //           finalFilter.push(value);
    //         }
    //       });
    //     }

    //     console.log("final filter is ...", finalFilter);
    //     return finalFilter;
    //   } else {
    //     return this.studentRecords;
    //   }
    // },
    intersectionOfSearch() {
      console.log(
        "inside intersection search",
        this.recordMatchBySearchBar,
        this.recordMatchByTagSearch
      );
      let intersection = this.recordMatchByTagSearch.filter((x) =>
        this.recordMatchBySearchBar.includes(x)
      );
      return intersection;
    },
  },

  methods: {
    updateSearchedText(value) {
      if (value != null && value != "") {
        this.searchText = value;
      } else {
        this.searchText = null;
      }
    },
    recordsById(value) {
      if (value.length > 0 && value != null) {
        this.recordIds = value;
      } else {
        this.recordIds = [];
      }
      console.log("I am in dashboard now ", this.recordIds);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,300&display=swap");

.recordList {
  font-family: "Raleway", sans-serif;
}
.name-searchBar {
  margin-left: 20px;
  border: none;
}
.tag-searchBar {
  margin-left: 20px;
  border: none;
}
</style>
