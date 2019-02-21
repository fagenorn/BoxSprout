<template>
  <div class="product">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="image" :alt="title" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ title }}</p>
          </div>
        </div>

        <div class="content">
          <p class="description">
            {{ description }}
          </p>
          <a class="button is-primary">Purchase</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Product extends Vue {
  @Prop() private image!: string;
  @Prop() private title!: string;
  @Prop() private description!: string;
}
</script>

<style scoped lang="scss">
.description {
  text-align: left;
}

a {
  &.button {
    margin-top: 1em;
    text-align: left;
  }
}
</style>
