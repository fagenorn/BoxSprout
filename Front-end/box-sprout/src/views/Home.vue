<template>
  <div class="home is-centered">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis laborum provident debitis eum consequatur at
                voluptatibus aliquid, ut libero. Aut.
              </h2>
              <div class="links">
                <a
                  class="is-size-4 is-size-6-mobile button is-fifth is-large hvr-grow"
                >
                  Find out more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container is-fluid">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <figure class="image is-16by9">
              <img
                src="https://via.placeholder.com/512x288"
                alt="placeholder"
              />
            </figure>
          </div>
          <div class="tile is-child box">
            <figure class="image is-16by9">
              <img
                src="https://via.placeholder.com/512x288"
                alt="placeholder"
              />
            </figure>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <figure class="image is-5by3">
              <img
                src="https://via.placeholder.com/1000x600"
                alt="placeholder"
              />
            </figure>
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
    const title = "Home";
    const description = "Home page";
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
}
</style>
