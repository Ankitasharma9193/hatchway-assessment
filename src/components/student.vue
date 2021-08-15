<template>
  <div class="each-student row">
    <div class="col-md-6">
      <div class="display-picture">
        <img
          v-img:image
          class="image-block"
          :src="getImagesMethod(record.pic)"
          width="200px"
        />
      </div>
    </div>

    <div class="col-md-6">
      <div class="fullName">
        <b>{{ gettoUpperCase(record.firstName, record.lastName) }} </b>
      </div>
      <div class="email">Email:{{ record.email }}</div>
      <div class="company">Company:{{ record.company }}</div>
      <div class="skills">Skill:{{ record.skill }}</div>
      <div class="average">Average: {{ getAverageMethod(record.grades) }}%</div>

      <div class="grades-for" v-show="showGrades">
        <div v-for="(grade, index) in record.grades" :key="grade">
          <div class="grade">Test {{ index + 1 }}: {{ grade }}%</div>
        </div>
      </div>
    </div>

    <div class="buttons col-md-6">
      <div class="toggle-button">
        <button class="title" @click="toggle()">
          <span class="toggleIcon" id="toggleIcon">{{ toggleIcon }}</span>
        </button>
      </div>
    </div>

    <tag-container :recordId="record.id" />
    <hr />
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
/* .image-block {
  border: 1px solid black;
  border-radius: 50%;
  background-color: gainsboro;
} */
img {
  float: left;
  position: relative;
  left: 60px;
  margin-top: 0px;
  border: 1px solid black;
  border-radius: 50%;
  padding: 0px;
  height: 115px;
  margin: 10px;
}
button {
  left: 110px;
}
.each-student {
  border-top: 0.2px solid rgb(113, 119, 133);
  border-bottom: 0.2px solid rgb(113, 119, 133);
}
.fullName {
  font-weight: bold;
  font-size: 30px;
}
</style>
