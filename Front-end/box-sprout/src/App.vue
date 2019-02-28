<template>
  <div id="app" class="is-clearfix">
    <nav
      class="navbar is-primary nav-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item" href="#">
          <img src="@/assets/LogoNoText.png" />
        </div>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          data-target="navMenu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" id="navMenu">
        <div class="navbar-end  is-hidden-desktop">
          <router-link to="/" class="navbar-item">
            <span>Home</span>
          </router-link>

          <router-link to="/products" class="navbar-item">
            <span>Products</span>
          </router-link>

          <router-link to="/about" class="navbar-item">
            <span>About</span>
          </router-link>

          <div class="navbar-divider" />
          <div v-if="!user.isLoggedIn">
            <router-link to="/sign-up" class="navbar-item">
              <span>Sign up</span>
            </router-link>

            <router-link to="/log-in" class="navbar-item">
              <span>Log in</span>
            </router-link>
          </div>
          <div v-else>
            <a @click="user.logout()" class="navbar-item">
              <span>Log out</span>
            </a>
          </div>
        </div>

        <div class="navbar-end  is-hidden-touch">
          <router-link to="/" class="navbar-item alternate hvr-shadow">
            <span>Home</span>
          </router-link>

          <router-link to="/products" class="navbar-item alternate hvr-shadow">
            <span>Products</span>
          </router-link>

          <router-link to="/about" class="navbar-item alternate hvr-shadow">
            <span>About</span>
          </router-link>

          <div class="navbar-item" v-if="!user.isLoggedIn">
            <div class="buttons">
              <router-link
                to="/sign-up"
                class="button is-dark is-outlined is-rounded hvr-grow"
              >
                <span>Sign up</span>
              </router-link>

              <router-link
                to="/log-in"
                class="button is-light is-outlined is-rounded hvr-icon-push hvr-grow"
              >
                <span class="icon hvr-icon">
                  <font-awesome-icon icon="sign-in-alt" />
                </span>
                <span>Log in</span>
              </router-link>
            </div>
          </div>
          <div class="navbar-item" v-else>
            <div class="buttons">
              <a
                @click="user.logout()"
                class="button is-light is-outlined is-rounded hvr-icon-push hvr-grow"
              >
                <span class="icon hvr-icon">
                  <font-awesome-icon icon="sign-out-alt" />
                </span>
                <span>Log out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="root">
      <router-view />
    </div>
    <footer class="footer">
      <div class="content has-text-centered">
        <p><strong>BoxSprout</strong></p>
        <p>
          Created by
          <a
            href="https://www.linkedin.com/in/eduard-monstrey-16904663/"
            target="_blank"
            ><strong>Eduard Monstrey</strong></a
          >,
          <a
            href="https://www.linkedin.com/in/philippe-gilops-3971346b/"
            target="_blank"
          >
            <strong>Philippe Gilops</strong></a
          >,
          <a
            href="https://www.linkedin.com/in/martijn-gilis-3a255617b/"
            target="_blank"
          >
            <strong>Martijn Gilis</strong></a
          >, and
          <a href="https://www.linkedin.com/in/anis-sakkaf/" target="_blank">
            <strong>Anis Sakkaf</strong></a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" scoped>
import User from "@/models/user";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  user = User;
}

document.addEventListener("DOMContentLoaded", () => {
  const navbarBurgers: any[] = Array.prototype.slice.call(
    document.querySelectorAll<HTMLInputElement>(".navbar-burger"),
    0
  );

  if (navbarBurgers.length > 0) {
    for (let elementName in navbarBurgers) {
      if (!navbarBurgers.hasOwnProperty(elementName)) {
        continue;
      }

      let el: HTMLInputElement = navbarBurgers[elementName];

      el.addEventListener("click", () => {
        const temp: string = el.dataset.target as string;
        const target: HTMLElement = document.getElementById(
          temp
        ) as HTMLElement;

        el.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    }
  }
});
</script>

<style lang="scss">
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/box";
@import "~bulma/sass/elements/button";
@import "~bulma/sass/elements/container";
@import "~bulma/sass/elements/content";
@import "~bulma/sass/elements/form";
@import "~bulma/sass/elements/icon";
@import "~bulma/sass/elements/image";
@import "~bulma/sass/elements/notification";
@import "~bulma/sass/elements/title";
@import "~bulma/sass/components/card";
@import "~bulma/sass/components/media";
@import "~bulma/sass/components/navbar";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/layout/_all";

@import url("https://fonts.googleapis.com/css?family=Open+Sans:400|Raleway:300,600|Fredoka+One:400");

#app {
  font-family: "Raleway", "Open Sans", Helvetica, Arial, sans-serif;
  font-display: auto;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .hvr-grow {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }

  .hvr-shadow {
    transition: box-shadow 0.3s ease-in-out;
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
  }

  nav {
    &.navbar {
      img {
        max-height: 2.73rem;
      }

      .navbar-divider {
        display: block;
        margin: 15px 40px;
      }

      .alternate {
        $btn-width: 200px !default;
        $btn-height: 45px !default;
        $btn-color: $e;
        $btn-color-dark: shade($btn-color, 40%);
        position: relative;
        display: block;
        overflow: hidden;
        @include size(100%, $btn-height);
        max-width: $btn-width;
        text-transform: uppercase;
        padding: 0.4rem 2rem;
        margin: 3px 2px;
        color: darken($btn-color, 25);

        &:before,
        &:after {
          z-index: -1;
          box-sizing: border-box;
          transition: 0.5s ease-in-out;
          content: "";
          @include absolute(0);
          @include size(25.25%, 0);
          background-color: $btn-color-dark;
        }
        &:before {
          left: 0;
        }
        &:after {
          left: 50%;
        }

        span {
          padding-top: 5px;
          transition: none;

          &:before,
          &:after {
            z-index: -1;
            box-sizing: border-box;
            transition: 0.5s ease-in-out;
            content: "";
            @include absolute(0);
            @include size(25.25%, 0);
            background-color: $btn-color-dark;
            top: auto;
            bottom: 0;
          }
          &:before {
            left: 25%;
          }
          &:after {
            left: 75%;
          }
        }

        a {
          text-decoration: none;
          line-height: $btn-height;
          color: black;
        }

        &:hover {
          color: tint($btn-color, 75%);
          background: transparent !important;

          &:before,
          &:after,
          span:before,
          span:after {
            height: $btn-height;
          }
        }

        &:focus {
          color: #dad7cf;

          background-color: $btn-color-dark;
        }
      }
    }
  }

  .root {
    min-height: 100vh;
  }
}
</style>
