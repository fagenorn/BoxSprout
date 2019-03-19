<template>
  <div class="product tile is-parent">
    <div class="card">
      <div class="card-image">
        <div class="price-tag is-rounded is-primary">
          <span>{{ price }}</span>
        </div>
        <figure class="image is-4by3">
          <img :src="details.image" :alt="details.title" />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{ details.title }}</p>
        <hr />
        <div class="content description">
          <p>{{ details.description }}</p>
        </div>
        <div class="product-footer">
          <router-link
            class="button is-primary hvr-grow is-size-5-mobile"
            :to="{ name: 'order', query: { id: details.id } }"
            >Purchase</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ProductResponse } from "@/models/product";
import { Route } from "vue-router";
import router from "@/router";

@Component
export default class Product extends Vue {
  @Prop() details = { price: 0 } as ProductResponse;

  get price(): number {
    return this.details.price / 100.0;
  }
}
</script>

<style scoped lang="scss">
.product {
  .price-tag {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
    width: 75px;
    height: 75px;
    margin: -20px -15px;

    background: linear-gradient(165deg, $primary 35%, rgba($b, 0.85) 131%);
    border-radius: 50%;
    // border: 3px $high-contrast solid;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;

    transform: rotate(9deg);

    span {
      font-size: 22px;
      font-weight: 700;
      color: $white;

      &:before {
        content: "€";
        font-size: 16px;
        vertical-align: text-top;
      }
    }
  }

  .card {
    border-radius: 9px 9px 0 0;
  }

  img {
    border-radius: 9px 9px 0 0;
  }

  .content {
    margin-bottom: 3.5em;
    text-align: left;
  }

  .product-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }

  @media only screen and (max-width: 768px) {
    margin: 0 20px;
  }
}
</style>
