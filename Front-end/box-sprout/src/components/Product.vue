<template>
  <div class="product tile is-parent">
    <div class="card">
      <div class="card-image">
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
          <router-link :to="{ name: 'order', params: { userId: 123 }}">User</router-link>
          <router-link class="button is-primary hvr-grow is-size-5-mobile" :to="{ name: 'order', params: { id: details.id } }"
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

@Component
export default class Product extends Vue {
  @Prop() details = {} as ProductResponse;
}
</script>

<style scoped lang="scss">
.product {
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
