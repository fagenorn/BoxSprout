<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-right">
          <div class="columns">
            <div class="column is-half">
              <img class="is-unselectable" src="@/assets/Logo.svg" alt="logo" />
            </div>
            <div class="column is-half">
              <h1
                class="is-size-2 is-size-4-mobile has-text-light has-font-weight-bold"
              >
                BoxSprout
              </h1>
              <h2
                class="is-size-4 is-size-6-mobile has-text-light has-font-weight-bold"
              >
                {{ $t("be.boxsprout.home.description") }}
              </h2>
              <div class="links">
                <router-link
                  :to="{ name: 'products' }"
                  class="is-size-4 is-size-6-mobile button is-fifth is-large hvr-grow"
                >
                  <span>{{ $t("be.boxsprout.home.button") }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container is-fluid images">
      <div class="image-col">
        <img
          src="@/assets/plant-6.jpg"
          :alt="$t('be.boxsprout.home.image.alt[0]')"
        />
        <img
          src="@/assets/plant-7.jpg"
          :alt="$t('be.boxsprout.home.image.alt[2]')"
        />
      </div>
      <div class="image-col">
        <img
          src="@/assets/plant-8.jpg"
          :alt="$t('be.boxsprout.home.image.alt[1]')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.home.meta.title") as string;
    const description = this.$t("be.boxsprout.home.meta.description") as string;
    const url = "home";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.home {
  section {
    &.hero {
      min-height: 100vh;
      background: linear-gradient(165deg, $primary 35%, rgba($b, 0.85) 131%);
      .links {
        margin-top: 2em;
      }
      h1 {
        font-family: "Fredoka One", "Open Sans", Helvetica, Arial, sans-serif;
      }
    }
  }

  .images {
    max-width: 1500px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;

    .image-col {
      flex: 35%;
      max-width: 35%;

      &:last-child {
        flex: 65%;
        max-width: 65%;
      }

      img {
        vertical-align: middle;
      }
    }

    @media screen and (max-width: 600px) {
      .image-col {
        flex: 100%;
        max-width: 100%;

        img {
          margin-bottom: 5px;
        }

        &:last-child {
          margin-bottom: 0;
          flex: inherit;
          max-width: inherit;
        }
      }
    }
  }
}
</style>
