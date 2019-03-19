<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Purchase Confirmation</h1>
        </div>
      </div>
    </section>
    <div class="container confirm">
      <div class="box">
        <loading
          :active.sync="!status.description"
          :is-full-page="false"
        ></loading>
        <h1 class="title">{{ status.title }}</h1>
        <p>
          {{ status.description }}
        </p>
      </div>
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
  private stripe = Stripe(process.env.VUE_APP_STRIPE_KEY);
  private readonly MAX_POLL_COUNT = 10;
  private pollCount = 0;
  client_secret = "";
  source_id = "";
  status = {
    title: "",
    description: ""
  };

  pollData() {
    this.stripe
      .retrieveSource({
        id: this.source_id,
        client_secret: this.client_secret
      })
      .then(result => {
        if (result.error) {
          // this.error.has_error = true;
          // this.error.message = result.error.message;
          alert("Error.");
          return;
        }

        if (result.source) {
          const source = result.source;
          if (source.status === "consumed") {
            this.status = {
              title: "Thanks for your order!",
              description:
                "We just sent your receipt to your email address, and your items will be on their way shortly."
            };
          } else if (source.status === "failed") {
            this.status = {
              title: "Payment Cancelled",
              description: "Your payment was cancelled."
            };
          } else {
            this.status = {
              title: "Processing Payment...",
              description:
                "We are waiting for your payment to be confirmed. The page will automatically refresh."
            };
            this.pollCount += 1;

            if (this.pollCount < this.MAX_POLL_COUNT) {
              setTimeout(this.pollData, 1000);
            } else {
              this.status = {
                title: "Payment Failed",
                description:
                  "Please contact us via boxsprout@gmail.com with your payment details."
              };
            }
          }
        }
      });
  }

  mounted() {
    this.client_secret = this.$route.query.client_secret as string;
    this.source_id = this.$route.query.source as string;
    this.pollData();
  }
}
</script>

<style lang="scss" scoped>
.confirm {
  margin: 30px auto;
  .box {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    min-height: 300px;
  }
}
</style>
