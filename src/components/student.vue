<template>
  <div class="student-list">
    <div class="display-picture">
      <img
        v-img:image
        class="image-block"
        :src="getImagesMethod(record.pic)"
        width="200px"
      />
    </div>
    <div class="fullName">
      <b>{{ gettoUpperCase(record.firstName, record.lastName) }} </b>
    </div>
    <div class="email">Email:{{ record.email }}</div>
    <div class="company">Company:{{ record.company }}</div>
    <div class="skills">Skill:{{ record.skill }}</div>
    <div class="average">Average: {{ getAverageMethod(record.grades) }}%</div>
    <tag-container :recordId="record.id" />

    <div class="grades-for" v-show="showGrades">
      <div v-for="(grade, index) in record.grades" :key="grade">
        <div class="grade">Test {{ index + 1 }}: {{ grade }}%</div>
      </div>
    </div>
    <div class="expand-collapse-button">
      <div class="section">
        <button class="title" @click="toggle()">
          <span class="toggleIcon" id="toggleIcon">{{ toggleIcon }}</span>
        </button>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
import { getAverage, toUpperCase, getImages } from "../utils/helpers";
import tagContainer from "./tagComponent/tagContainer.vue";
export default {
  name: "student",
  components: {
    tagContainer: tagContainer,
  },
  props: ["record"],
  data() {
    return {
      showGrades: false,
      toggleIcon: "+",
    };
  },
  methods: {
    getAverageMethod: getAverage,
    gettoUpperCase: toUpperCase,
    getImagesMethod: getImages,
    toggle() {
      this.showGrades = !this.showGrades;
      if (this.showGrades) {
        this.toggleIcon = "-";
      } else {
        this.toggleIcon = "+";
      }
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;1,300&display=swap");

.recordList {
  font-family: "Raleway", sans-serif;
}
</style>
