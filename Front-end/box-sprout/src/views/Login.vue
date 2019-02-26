<template>
  <section class="section hero is-small">
    <div class="container">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile is-half">
            <img
              src="@/assets/plant-1.png"
              alt="A picture of a pretty plant."
            />
          </div>

          <div class="column is-half">
            <h3
              class="has-text-light has-text-weight-bold is-size-1 is-size-3-mobile"
            >
              Log in.
            </h3>

            <div class="notification is-second" v-if="login_response.failed">
              <button
                class="delete"
                @click="login_response.failed = false"
              ></button>
              <strong>{{ login_response.message }}</strong>
            </div>

            <form @submit.prevent="login">
              <div class="field">
                <label class="label is-size-3 is-size-5-mobile">Email</label>
                <div class="control has-icons-left">
                  <input
                    v-model="details.email"
                    type="email"
                    placeholder="e.g. bruce@batcave.io"
                    class="input is-size-4 is-size-5-mobile"
                    required
                  />
                  <span class="icon is-left is-size-4 is-size-5-mobile">
                    <font-awesome-icon icon="envelope" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label is-size-3 is-size-5-mobile">Password</label>
                <div class="control has-icons-left">
                  <input
                    v-model="details.password"
                    type="password"
                    placeholder="e.g. ***********"
                    class="input is-size-4 is-size-5-mobile"
                    required
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
                  >
                    Submit
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

@Component
export default class Login extends Vue {
  details = {} as LoginManager.LoginDetails;
  login_response = {} as LoginManager.LoginResponse;

  register() {
    User.login(this.details).then(result => {
      this.login_response = result;
      if (!result.failed) {
        alert(result.messages);
      }
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
