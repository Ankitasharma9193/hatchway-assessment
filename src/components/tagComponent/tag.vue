<template>
  <div class="keyword-input__keyword float-left mr-2 rounded">
    {{ name }}<span @click="onClose(name)">x</span>
  </div>
</template>

<script>
export default {
  name: "tag",
  props: {
    name: {
      type: String,
    },
    onClose: {
      type: Function,
    },
  },
};
</script>

<style>
.keyword-input__keyword {
  height: 30px;
  background-color: #eee;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 5px;
}
</style>
