<template>
  <div class="my" @click="someMethod">Hello, this is a new page !</div>
</template>

<script>
import $ from "jquery";
export default {
  name: "New",
  data() {
    return {
      userObj: {
        name: "john",
        gender: 1,
        age: 20,
        school: "xazx"
      }
    };
  },
  methods: {
    someMethod(para) {
      $(".my").innerHtml = this.userObj.name;
    }
  }
};
</script>

<style scoped>
.my {
  color: #004898;
  font-size: 30px;
  font-weight: bold;
}
</style>
