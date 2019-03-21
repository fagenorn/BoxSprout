<template>
  <section class="section hero is-small">
    <div class="container">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile is-half">
            <img
              src="@/assets/plant-1.png"
              :alt="$t('be.boxsprout.login.image.alt[0]')"
            />
          </div>

          <div class="column is-half">
            <h3
              class="has-text-light has-text-weight-bold is-size-1 is-size-3-mobile"
            >
              {{ $t("be.boxsprout.login.header") }}
            </h3>

            <div class="notification is-second" v-if="login_response.failed">
              <button
                class="delete"
                @click="login_response.failed = false"
              ></button>
              <div
                v-for="(message, index) in login_response.messages"
                :key="index"
              >
                <strong>{{ message }}</strong>
              </div>
            </div>

            <form @submit.prevent="login">
              <div class="field">
                <label class="label is-size-3 is-size-5-mobile">{{
                  $t("be.boxsprout.login.form.email")
                }}</label>
                <div class="control has-icons-left">
                  <input
                    v-model="details.email"
                    type="email"
                    :placeholder="
                      $t('be.boxsprout.login.form.for-example') +
                        ' bruce@batcave.io'
                    "
                    class="input is-size-4 is-size-5-mobile"
                  />
                  <span class="icon is-left is-size-4 is-size-5-mobile">
                    <font-awesome-icon icon="envelope" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label is-size-3 is-size-5-mobile">{{
                  $t("be.boxsprout.login.form.password")
                }}</label>
                <div class="control has-icons-left">
                  <input
                    v-model="details.password"
                    type="password"
                    :placeholder="
                      $t('be.boxsprout.login.form.for-example') + ' ***********'
                    "
                    class="input is-size-4 is-size-5-mobile"
                  />
                  <span class="icon is-left is-size-4 is-size-5-mobile">
                    <font-awesome-icon icon="lock" />
                  </span>
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-fifth hvr-grow is-size-4 is-size-6-mobile"
                    v-bind:class="{ 'is-loading': loading }"
                  >
                    {{ $t("be.boxsprout.login.form.submit") }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import User from "@/models/user";
import { Component, Vue } from "vue-property-decorator";
import { AxiosResponse } from "axios";
import { LoginManager } from "@/models/login";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.login.meta.title") as string;
    const description = this.$t(
      "be.boxsprout.login.meta.description"
    ) as string;
    const url = "log-in";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class Login extends Vue {
  details = {} as LoginManager.LoginDetails;
  login_response = {} as LoginManager.LoginResponse;
  loading = false;

  login() {
    this.loading = true;
    User.login(this.details).then(result => {
      this.login_response = result;
      if (!result.failed) {
        this.$router.push({ name: "products" });
        this.$toasted.info(result.messages[0]);
      }

      this.loading = false;
    });
  }
}
</script>

<style lang="scss" scoped>
.label {
  color: #f5f5f5;
  display: block;
}

section {
  &.hero {
    min-height: 100vh;
    background: linear-gradient(165deg, $primary 35%, rgba($b, 0.85) 131%);
    h3 {
      font-weight: 600;
      text-align: left;
      margin-bottom: 2em;
    }
    .columns {
      display: flex;
    }
    img {
      margin-right: 6px;
    }
  }
}

.field {
  display: block;
  text-align: left;
  button {
    margin-top: 15px;
  }
}
</style>
