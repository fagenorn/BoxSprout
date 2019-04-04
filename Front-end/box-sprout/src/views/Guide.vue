<template>
  <div class="guide container is-fluid">
    <h1 class="title">Box Tutorial</h1>
    <iframe
      width="800"
      height="800"
      src="https://www.youtube.com/embed/WZOXe4DzPx0"
      frameborder="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <hr />
    <br />
    <h1 class="title">Plant Tutorial</h1>
    <iframe
      width="800"
      height="800"
      src="https://www.youtube.com/embed/ZpKX4Sy1kZU"
      frameborder="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = "Guide";
    const description = "Product Guides";
    const url = "guide";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class Guide extends Vue {}
</script>

<style lang="scss" scoped>
.guide {
  iframe {
    height: 800px;
  }
}
</style>
