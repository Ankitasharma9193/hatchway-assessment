<template>
  <div class="search-division">
    <div class="search-bar">
      <div class="search-form">
        <div class="search">
          <input
            v-model="searchtext"
            class="form-control"
            placeholder="Search by name"
            type="text"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      searchtext: "",
    };
  },

  watch: {
    searchtext(newtext, oldtext) {
      this.$emit("searchTextevent", newtext);
      console.log(oldtext);
    },
  },
};
</script>
<style>
.search-division {
  margin-top: 40px;
}
.form-control {
  display: block;
  width: 100%;
  padding: 1px, 12px;
}
</style>
