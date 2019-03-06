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

    <div class="container is-fluid" ref="container">
      <loading :active.sync="isLoading" :is-full-page="false"></loading>
    </div>
  </div>
</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import { Component, Vue } from "vue-property-decorator";
import ProductManager from "@/models/product";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = "Products";
    const description = "Overview of available BoxSprout products.";
    const url = "products";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  },
  components: {
    product: Product
  }
})
export default class Products extends Vue {
  isLoading = true;

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

      this.isLoading = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.vld-overlay {
  min-height: 300px;
}

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
