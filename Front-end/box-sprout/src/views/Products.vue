<template>
  <div class="products">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Product Overview
          </h1>
        </div>
      </div>
    </section>

    <div class="container is-fluid">
      <div class="columns">
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
        <div class="column">
          <product
            image="https://rtl.lwcdn.nl/imageScaled/?site=ehet2017&amp;file=1529915236_basil-herbs-5818.jpg&amp;w=1000&amp;h=2000&amp;cropped=0&amp;orientation=undefined"
            title="Basilicum"
            description="A small cute basilicum plant, perfect for some pasta."
          ></product>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    product: Product
  }
})
export default class SignUp extends Vue {}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 2em;
}

.columns {
  margin: 0;
}

@media screen and (min-width: 768px) {
  .columns {
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    margin-top: -0.75rem;
  }
}
</style>
