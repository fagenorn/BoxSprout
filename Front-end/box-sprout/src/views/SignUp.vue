<template>
  <section class="section hero is-small">
    <div class="container">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile is-half">
            <img
              src="@/assets/plant-2.png"
              alt="A picture of a pretty plant."
            />
          </div>

          <div class="column is-half">
            <h3
              class="has-text-light has-text-weight-bold is-size-1 is-size-3-mobile"
            >
              Sign up.
            </h3>
            <div class="field">
              <label class="label is-size-5 is-size-6-mobile">Email</label>
              <div class="control has-icons-left">
                <input
                  type="email"
                  placeholder="e.g. bruce@batcave.io"
                  class="input is-size-6"
                />
                <span class="icon is-left is-size-6">
                  <font-awesome-icon icon="envelope" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5 is-size-6-mobile">Username</label>
              <div class="control has-icons-left">
                <input
                  type="text"
                  placeholder="e.g. Brucy"
                  class="input is-size-6"
                />
                <span class="icon is-left is-size-6">
                  <font-awesome-icon icon="user" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5 is-size-6-mobile">Password</label>
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="e.g. ***********"
                  class="input is-size-6"
                />
                <span class="icon is-left is-size-6">
                  <font-awesome-icon icon="lock" />
                </span>
              </div>
            </div>
            <div class="field">
              <label class="label is-size-5 is-size-6-mobile"
                >Confirm Password</label
              >
              <div class="control has-icons-left">
                <input
                  type="password"
                  placeholder="e.g. ***********"
                  class="input is-size-6"
                />
                <span class="icon is-left is-size-6">
                  <font-awesome-icon icon="lock" />
                </span>
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button
                  class="button is-fifth hvr-grow is-size-4 is-size-6-mobile"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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
      margin-bottom: 1.5em;
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
