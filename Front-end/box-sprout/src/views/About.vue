<template>
  <div class="about">
    <h1>{{ $t("be.boxsprout.about.main") }}</h1>
  </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.about.meta.title") as string;
    const description = this.$t(
      "be.boxsprout.about.meta.description"
    ) as string;
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
