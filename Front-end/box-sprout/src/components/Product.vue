<template>
  <div class="product tile is-parent">
    <div class="card">
      <div class="card-image">
        <div class="price-tag is-rounded is-primary">
          <span>{{ price.toFixed(2).replace(".", ",") }}</span>
        </div>
        <figure class="image">
          <img :src="details.image" :alt="details.title" />
        </figure>
      </div>
      <div class="card-content">
        <p class="title is-4">{{ details.title }}</p>
        <hr />
        <div class="content description">
          <div>
            <h4>Inbegrepen</h4>
            <ul>
              <li>1x Vouwdoos deksel</li>
              <li>1x Vouwdoos</li>
              <li>2x Bio zakje</li>
              <li>1x Houten stok</li>
              <li>1x Business kaart</li>
              <li>1x Verzenddoos</li>
              <li>1x Enveloppe met zaadjes</li>
            </ul>
          </div>
          <hr />
          <p>{{ details.description }}</p>
        </div>
        <hr />
        <div class="product-footer">
          <router-link
            class="button is-primary hvr-grow is-size-5-mobile"
            :to="{ name: 'order', query: { id: details.id } }"
            >{{ $t("be.boxsprout.products.purchase") }}</router-link
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
  max-width: 350px;

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
    p {
      text-align: justify;
    }
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
