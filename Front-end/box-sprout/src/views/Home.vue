<template>
  <div class="home">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-right">
          <div class="columns">
            <div class="column is-half">
              <img class="is-unselectable" src="@/assets/Logo.svg" />
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
                Kweken van plantjes en kruiden in een kleine doos. Bestellen van
                zaadjes en informatie over het grootbrengen van plantjes en
                mogelijke recepten!
              </h2>
              <div class="links">
                <a
                  class="is-size-4 is-size-6-mobile button is-fifth is-outlined is-large hvr-box-shadow-outset"
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
              <img src="https://via.placeholder.com/512x288" />
            </figure>
          </div>
          <div class="tile is-child box">
            <figure class="image is-16by9">
              <img src="https://via.placeholder.com/512x288" />
            </figure>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <figure class="image is-5by3">
              <img src="https://via.placeholder.com/1000x600" />
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.container {
  margin: 20px 10px;
}

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
</style>
