<template>
  <div class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column error-placeholder is-8 is-offset-2">
            <img class="is-error" src="@/assets/404.svg" />

            <div class="error-text">
              <h1 class="is-size-2 is-size-4-mobile">
                {{ $t("be.boxsprout.not-found.title[0]") }}
              </h1>
              <h2 class="is-size-4 is-size-6-mobile">
                <span> {{ $t("be.boxsprout.not-found.title[1]") }} </span>
              </h2>
              <a
                @click="$router.go(-1)"
                class="button is-primary is-rounded hvr-grow"
                ><span> {{ $t("be.boxsprout.not-found.button") }} </span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.not-found.meta.title") as string;
    const description = this.$t(
      "be.boxsprout.not-found.meta.description"
    ) as string;
    const url = "404";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class NotFound extends Vue {}
</script>

<style lang="scss" scoped>
div {
  &.hero {
    h1 {
      font-weight: 700;
    }
  }

  img {
    max-height: 400px;
  }

  .error-text {
    a {
      margin-top: 30px;
      padding-top: 25px;
      padding-bottom: 25px;
      span {
        padding-left: 30px;
        padding-right: 30px;
      }
    }
  }
}
</style>
