<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Purchase {{ product.title }}</h1>
          <h2 class="subtitle">
            Complete your shipping and payment details below
          </h2>
        </div>
      </div>
    </section>
    <div class="container order">
      <form @submit.prevent="checkout" class="box">
        <section>
          <h2><strong>Shipping &amp; Billing Information</strong></h2>
          <fieldset>
            <div class="field">
              <div class="control">
                <label class="label">
                  <span>Name</span>
                  <input
                    required
                    class="input"
                    type="text"
                    v-model="payment_info.owner.name"
                    placeholder="e.g. Bruce Williams"
                /></label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>Email</span>
                  <input
                    required
                    class="input"
                    type="email"
                    v-model="payment_info.owner.email"
                    placeholder="e.g. bruce@batcave.io"
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>Phone</span>
                  <input
                    required
                    class="input"
                    type="tel"
                    v-model="payment_info.owner.phone"
                    placeholder="e.g. 0487478332"
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>Address</span>
                  <input
                    required
                    class="input"
                    type="text"
                    v-model="payment_info.owner.address.line1"
                    placeholder="e.g. Straatdreef 22"
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>City</span>
                  <input
                    required
                    class="input"
                    v-model="payment_info.owner.address.city"
                    type="text"
                    placeholder="e.g. Ghent"
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>Postal Code</span>
                  <input
                    required
                    class="input"
                    v-model="payment_info.owner.address.postal_code"
                    type="text"
                    placeholder="e.g. 3000"
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <label class="label control has-icons-left">
                <span>Country</span>
                <div class="select is-fullwidth">
                  <select
                    required
                    disabled
                    v-model="payment_info.owner.address.country"
                  >
                    <option value="BE" selected>Belgium</option>
                  </select>
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="globe" />
                  </span>
                </div>
              </label>
            </div>

            <hr />

            <div class="notification is-second" v-if="error.has_error">
              <button class="delete" @click="error.has_error = false"></button>
              <strong>{{ error.message }}</strong>
            </div>

            <div class="field">
              <div class="control">
                <button
                  class="button is-primary hvr-grow is-fullwidth"
                  v-bind:class="{ 'is-loading': loading }"
                >
                  <span class="icon is-small">
                    <font-awesome-icon icon="credit-card" />
                  </span>
                  <span>Pay &euro;{{ price }} using Bancontact</span>
                </button>
              </div>
            </div>
          </fieldset>
        </section>
      </form>
    </div>
  </div>
</template>

<script lang="ts" scoped>
import User from "@/models/user";
import ProductManager from "@/models/product";
import { ProductResponse } from "@/models/product";
import { Component, Vue } from "vue-property-decorator";
import {
  StripeObject,
  SourceInfo,
  SourceResponse,
  StripeConstructor
} from "@/models/stripe";
import router from "@/router";

declare var Stripe: StripeConstructor;

@Component
export default class Order extends Vue {
  product = {} as ProductResponse;

  payment_info = {
    type: "bancontact",
    amount: Number.MAX_SAFE_INTEGER,
    currency: "eur",
    owner: {
      name: "",
      email: "",
      phone: "",
      address: {
        city: "",
        country: "BE",
        line1: "",
        postal_code: ""
      }
    },
    redirect: {
      return_url: ""
    },
    bancontact: {
      preferred_language: "nl"
    },
    metadata: {
      user: 0,
      product: 0
    }
  } as SourceInfo;

  error = {
    has_error: false,
    message: ""
  };

  loading = false;

  get price(): number {
    return this.payment_info.amount / 100.0;
  }

  stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);

  showLoginToast() {
    this.$toasted.info("You need to sign up first.", {
      duration: 8000,
      action: {
        text: "Log in",
        class: "color-white",
        onClick: (e, toastObject) => {
          toastObject.goAway(0);
          router.push({ name: "login" });
        }
      }
    });
  }

  checkout() {
    this.loading = true;
    this.error.has_error = false;

    if (!User.isLoggedIn) {
      this.showLoginToast();
      router.push({ name: "sign up" });
      return;
    }

    this.stripe.createSource(this.payment_info).then(result => {
      if (result.error) {
        this.error.has_error = true;
        this.error.message = result.error.message;
      }

      if (result.source) {
        window.location.href = result.source.redirect.url;
        return;
      }

      this.loading = false;
    });
  }

  mounted() {
    if (!User.isLoggedIn) {
      this.showLoginToast();
      router.push({ name: "sign up" });
      return;
    }

    this.payment_info.redirect.return_url =
      location.protocol +
      "//" +
      location.host +
      this.$router.resolve({
        name: "confirm order"
      }).href;

    this.payment_info.owner.name = User.userDetails.name;
    this.payment_info.owner.email = User.userDetails.email;

    const id = parseInt(this.$route.query.id as string);

    ProductManager.getProduct(id).then(result => {
      this.product = result;
      this.payment_info.amount = this.product.price;

      this.payment_info.metadata.user = User.userDetails.id;
      this.payment_info.metadata.product = this.product.id;
    });
  }
}
</script>

<style lang="scss" scoped>
.order {
  margin: 30px auto;
  padding: 0 20px;
  form {
    max-width: 450px;
    margin: auto;
  }
}
</style>
