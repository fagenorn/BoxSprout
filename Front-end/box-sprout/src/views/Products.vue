<template>
  <div class="products">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t("be.boxsprout.products.title") }}
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
import { Component, Vue, Watch } from "vue-property-decorator";
import ProductManager from "@/models/product";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.products.meta.title") as string;
    const description = this.$t(
      "be.boxsprout.products.meta.description"
    ) as string;
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

  kids = [] as HTMLElement[];

  $refs!: {
    container: HTMLFormElement;
  };

  mounted() {
    this.refreshProducts();
  }

  refreshProducts() {
    this.isLoading = true;

    this.kids.forEach(element => {
      this.$refs.container.removeChild(element);
    });

    this.kids = [];

    let subContainer = {} as HTMLDivElement;
    ProductManager.getProducts().then(products => {
      products.forEach((product, index) => {
        let instance = new Product({ router: this.$router, i18n: this.$i18n });
        instance.details = product;
        instance.$mount();

        if (index % 4 === 0) {
          subContainer = document.createElement("div");
          subContainer.setAttribute("class", "tile is-ancestor");
          this.$refs.container.appendChild(subContainer);
          this.kids.push(subContainer);
        }

        subContainer.appendChild(instance.$el);
      });

      this.isLoading = false;
    });
  }

  @Watch("$i18n.locale")
  onLocaleChanged(val: string, oldVal: string) {
    this.refreshProducts();
  }
}
</script>

<style lang="scss" scoped>
.products {
  margin-bottom: 2em;

  .vld-overlay {
    min-height: 300px;
  }

  section.hero {
    margin-bottom: 30px;
  }
}
</style>
