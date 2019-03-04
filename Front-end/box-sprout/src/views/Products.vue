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

    <div class="container is-fluid" ref="container"></div>
  </div>
</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import { Component, Vue } from "vue-property-decorator";
import ProductManager from "@/models/product";

@Component({
  components: {
    product: Product
  }
})
export default class Products extends Vue {
  $refs!: {
    container: HTMLFormElement;
  };

  mounted() {
    let subContainer = {} as HTMLDivElement;
    ProductManager.getProducts().then(products => {
      products.forEach((product, index) => {
        let instance = new Product();
        instance.details = product;
        instance.$mount();

        if (index % 4 === 0) {
          subContainer = document.createElement("div");
          subContainer.setAttribute("class", "tile is-ancestor");
          this.$refs.container.appendChild(subContainer);
        }

        // instance.$el.className += " tile";
        subContainer.appendChild(instance.$el);
      });
    });
  }
}
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
