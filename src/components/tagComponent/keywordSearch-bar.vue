<template>
  <div>
    <div class="search-form">
      <div class="search">
        <input
          v-model="tagSearchtext"
          class="form-control"
          placeholder="Search by Tags"
          type="text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "keywordSearchBar",

  data() {
    return {
      tagSearchtext: "",
      Ids: [],
    };
  },

  watch: {
    tagSearchtext(tagSearchtext) {
      this.$emit("searchTagRecordEvent", this.searchTagRecord(tagSearchtext));
    },
  },

  computed: {
    ...mapState({
      idToRecordMap: (state) => state.records.recordIdToTags,
    }),
  },

  created() {
    this.updateTags();
  },
  methods: {
    ...mapActions("records", ["updateTags"]),
    searchTagRecord(tagSearchtext) {
      console.log(tagSearchtext);
      const tagToRecordfiltered = Object.entries(this.idToRecordMap)
        .filter(([, values]) => {
          return values.some((value) => {
            console.log("the value is", value);
            console.log("the tagsearchtext is", tagSearchtext);
            return value.startsWith(tagSearchtext);
          });
        })
        .reduce((acc, [key]) => {
          acc.push(key);
          return acc;
        }, []);
      console.log("tag filtered ......", tagToRecordfiltered);
      return tagToRecordfiltered;
    },
  },
};
</script>

<style></style>s
