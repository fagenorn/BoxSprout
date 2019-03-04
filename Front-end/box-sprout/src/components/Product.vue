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
          <a class="button is-primary hvr-grow">Purchase</a>
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
    margin-bottom: 2.5em;
    text-align: left;
  }
  .product-footer {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }
}

// .my-footer {
//   height: 50px; /* the footer's total height */
// }

// .my-footer-item {
//   height: 32px; /* height + top/bottom paddding + top/bottom border must add up to footer height */
//   padding: 8px;
// }

// // .tile {
// //   img {
// //     border-radius: 5px;
// //   }
// // }

// .description {
//   text-align: left;
// }

// a {
//   &.button {
//     margin: 10px 5px;
//   }
// }
</style>
