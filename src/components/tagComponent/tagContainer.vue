<template>
  <div class="tags-input">
    <span>
      <tag
        v-for="(item, index) in tagsInputs"
        :key="index"
        :name="item"
        :onClose="onClose"
      ></tag>
    </span>

    <input
      class="'keyword-input__text'"
      type="text"
      placeholder="Enter your tag..."
      v-model="tagName"
      @keydown.188.prevent="onAdd"
    />
  </div>
</template>

<script>
import tag from "./tag.vue";
export default {
  name: "tagContainer",
  components: {
    tag: tag,
  },
  data() {
    return {
      tagsInputs: ["ankita", "sharma"],
    };
  },

  methods: {
    onClose: function(tag) {
      this.tagsInputs = this.tagsInputs.filter((item) => item !== tag);
    },
  },
};
</script>

<style>
.tags-input {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border: 1px solid #d8d8d8;
  border-radius: 0.25rem;
  padding: 1rem;
  text-align: left;
}
input {
  outline: none;
  border: none;
}
</style>
