<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Purchase %product_name%
          </h1>
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
                  Pay {{ price }}$ Using Bancontact
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
import { Component, Vue } from "vue-property-decorator";
import {
  StripeObject,
  SourceInfo,
  SourceResponse,
  StripeConstructor
} from "@/models/stripe";

declare var Stripe: StripeConstructor;

@Component
export default class Order extends Vue {
  payment_info = {
    type: "bancontact",
    amount: 999,
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
      return_url: location.protocol + "//" + location.host
    },
    bancontact: {
      preferred_language: "nl"
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

  checkout() {
    this.loading = true;
    this.error.has_error = false;

    this.stripe.createSource(this.payment_info).then(result => {
      console.log(result);

      if (result.error) {
        this.error.has_error = true;
        this.error.message = result.error.message;
      }

      if (result.source) {
        window.location = result.source.redirect.url;
        return;
      }

      this.loading = false;
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
