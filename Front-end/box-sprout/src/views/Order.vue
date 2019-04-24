<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <i18n path="be.boxsprout.order.title" class="title" tag="h1">
            <span place="product">{{ product.title }}</span>
          </i18n>
          <h2 class="subtitle">
            {{ $t("be.boxsprout.order.subtitle") }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container order">
      <form @submit.prevent="checkout" class="box">
        <section>
          <h2>
            <strong> {{ $t("be.boxsprout.order.form.title") }} </strong>
          </h2>
          <fieldset>
            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.name") }}</span>
                  <input
                    required
                    class="input"
                    type="text"
                    v-model="payment_info.owner.name"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') +
                        ' Bruce Williams'
                    "
                /></label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.email") }}</span>
                  <input
                    required
                    class="input"
                    type="email"
                    v-model="payment_info.owner.email"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') +
                        ' bruce@batcave.io'
                    "
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.phone") }}</span>
                  <input
                    required
                    class="input"
                    type="tel"
                    v-model="payment_info.owner.phone"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') + ' 0487478332'
                    "
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.address") }}</span>
                  <input
                    required
                    class="input"
                    type="text"
                    v-model="payment_info.owner.address.line1"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') +
                        ' Straatdreef 22'
                    "
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.city") }}</span>
                  <input
                    required
                    class="input"
                    v-model="payment_info.owner.address.city"
                    type="text"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') + ' Ghent'
                    "
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="label">
                  <span>{{ $t("be.boxsprout.order.form.postal-code") }}</span>
                  <input
                    required
                    class="input"
                    v-model="payment_info.owner.address.postal_code"
                    type="text"
                    :placeholder="
                      $t('be.boxsprout.order.form.for-example') + ' 3000'
                    "
                  />
                </label>
              </div>
            </div>

            <div class="field">
              <label class="label control has-icons-left">
                <span>{{ $t("be.boxsprout.order.form.country") }}</span>
                <div class="select is-fullwidth">
                  <select
                    required
                    disabled
                    v-model="payment_info.owner.address.country"
                  >
                    <option value="BE" selected>{{
                      $t("be.boxsprout.order.form.countries.belgium")
                    }}</option>
                  </select>
                  <span class="icon is-small is-left">
                    <font-awesome-icon icon="globe" />
                  </span>
                </div>
              </label>
            </div>

            <div class="shipping">
              <i18n path="be.boxsprout.order.form.shipping" tag="p">
                <span place="shipping">{{
                  shipping_price.toFixed(2).replace(".", ",")
                }}</span>
              </i18n>
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
                  <i18n path="be.boxsprout.order.form.button" tag="span">
                    <span place="price">{{
                      price.toFixed(2).replace(".", ",")
                    }}</span>
                    <span place="shipping">{{
                      shipping_price.toFixed(2).replace(".", ",")
                    }}</span>
                  </i18n>
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
      preferred_language: "en"
    },
    metadata: {
      user: 0,
      product: 0,
      shipping: 250
    }
  } as SourceInfo;

  error = {
    has_error: false,
    message: ""
  };

  loading = false;

  get price(): number {
    return (
      (this.payment_info.amount - this.payment_info.metadata.shipping) / 100.0
    );
  }

  get shipping_price(): number {
    return this.payment_info.metadata.shipping / 100.0;
  }

  stripe = Stripe(process.env.VUE_APP_STRIPE_KEY as string);

  showLoginToast() {
    this.$toasted.info(this.$t("be.boxsprout.order.toast.sign-up") as string, {
      duration: 8000,
      action: {
        text: this.$t("be.boxsprout.order.toast.log-in") as string,
        class: "color-white",
        onClick: (e, toastObject) => {
          toastObject.goAway(0);
          this.$router.push({ name: "login" });
        }
      }
    });
  }

  checkout() {
    this.loading = true;
    this.error.has_error = false;

    if (!User.isLoggedIn) {
      this.showLoginToast();
      this.$router.push({ name: "sign up" });
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
      this.$router.push({ name: "sign up" });
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
    this.payment_info.bancontact.preferred_language = this.$i18n.locale as any;

    const id = parseInt(this.$route.query.id as string);

    ProductManager.getProduct(id).then(result => {
      this.product = result;
      this.payment_info.amount =
        this.product.price + this.payment_info.metadata.shipping;

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

    .shipping {
      margin: 35px 30px 0 30px;
      font-size: 11;
      font-variant: small-caps;
      box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.75);
    }
  }
}
</style>
