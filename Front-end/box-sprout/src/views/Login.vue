<template>
  <section class="section hero is-small">
    <div class="container">
      <div class="hero-body">
        <div class="columns is-vcentered">
          <div class="column is-hidden-mobile is-half">
            <img
              src="@/assets/plant-1.png"
              alt="FaultHero: automatic reporting and notification"
            />
          </div>

          <div class="column is-half">
            <h3
              class="has-text-light has-text-weight-bold is-size-1 is-size-3-mobile"
            >
              Log in.
            </h3>
            <div class="field">
              <label class="label is-size-3 is-size-5-mobile">Email</label>
              <div class="control">
                <input
                  type="email"
                  placeholder="e.g. bruce@batcave.io"
                  class="input is-size-4 is-size-5-mobile"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1550572066568-2"
                />
              </div>
            </div>
            <div class="field">
              <label class="label is-size-3 is-size-5-mobile">Password</label>
              <div class="control">
                <input
                  type="password"
                  placeholder="e.g. ***********"
                  class="input is-size-4 is-size-5-mobile"
                  data-kwimpalastatus="alive"
                  data-kwimpalaid="1550572066568-3"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <button
                  class="button is-second hvr-grow is-size-4 is-size-6-mobile"
                >
                  Submit
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
      margin-bottom: 2em;
    }
    .columns {
      display: flex;
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