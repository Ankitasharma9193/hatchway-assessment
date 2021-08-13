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
      ref="keyword-input"
      v-model="tagname"
      type="text"
      placeholder="Enter your tag..."
      @keydown.enter="handleEnter"
      @keydown.188.prevent="onAdd"
      @keydown.32="onAdd"
    />
  </div>
</template>

<script>
import tag from "./tag.vue";
import { mapActions } from "vuex";

export default {
  name: "tagContainer",
  components: {
    tag: tag,
  },
  data() {
    return {
      tagsInputs: [],
      tagname: "",
    };
  },
  props: ["recordId"],
  methods: {
    onClose(tag) {
      this.tagsInputs = this.tagsInputs.filter((item) => item !== tag);
    },
    onAdd() {
      if (!this.tagname.trim()) {
        return;
      }
      console.log(this.tagname);
      const tagsToAdd = [...this.tagname.split(",")].map((item) => item.trim());
      console.log(tagsToAdd);

      this.tagsInputs = [...this.tagsInputs, ...tagsToAdd];
      this.tagname = "";
    },
    ...mapActions("records", ["updateTags"]),
    handleEnter(e) {
      e.preventDefault();
      console.log("I am searching for record id", this.recordId);
      this.onAdd(e);
      //when the tag gets added it throws action to store in the state
      this.updateTags({ tagInputs: this.tagsInputs, recordId: this.recordId });
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
