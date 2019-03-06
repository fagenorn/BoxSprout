<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = "About";
    const description = "Learn more about the vision of BoxSprout.";
    const url = "about";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class About extends Vue {}
</script>
