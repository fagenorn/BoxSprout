<template>
  <div id="app" class="is-clearfix">
    <nav
      class="navbar is-primary nav-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <div class="navbar-item" href="#">
          <img src="@/assets/LogoNoText.svg" alt="logo" />
          <locale-changer></locale-changer>
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
          <router-link :to="{ name: 'home' }" class="navbar-item">
            <span>{{ $t("be.boxsprout.app.nav.home") }}</span>
          </router-link>

          <router-link :to="{ name: 'products' }" class="navbar-item">
            <span>{{ $t("be.boxsprout.app.nav.products") }}</span>
          </router-link>

          <router-link :to="{ name: 'about' }" class="navbar-item">
            <span>{{ $t("be.boxsprout.app.nav.about") }}</span>
          </router-link>

          <div class="navbar-divider" />
          <div v-if="!user.isLoggedIn">
            <router-link :to="{ name: 'sign up' }" class="navbar-item">
              <span>{{ $t("be.boxsprout.app.nav.sign-up") }}</span>
            </router-link>

            <router-link :to="{ name: 'login' }" class="navbar-item">
              <span>{{ $t("be.boxsprout.app.nav.log-in") }}</span>
            </router-link>
          </div>
          <div v-else>
            <a @click="user.logout()" class="navbar-item">
              <span>{{ $t("be.boxsprout.app.nav.log-out") }}</span>
            </a>
          </div>
        </div>

        <div class="navbar-end is-hidden-touch">
          <router-link :to="{ name: 'home' }" class="navbar-item hvr-shadow">
            <span>{{ $t("be.boxsprout.app.nav.home") }}</span>
          </router-link>

          <router-link
            :to="{ name: 'products' }"
            class="navbar-item hvr-shadow"
          >
            <span>{{ $t("be.boxsprout.app.nav.products") }}</span>
          </router-link>

          <router-link :to="{ name: 'about' }" class="navbar-item hvr-shadow">
            <span>{{ $t("be.boxsprout.app.nav.about") }}</span>
          </router-link>

          <div class="navbar-item" v-if="!user.isLoggedIn">
            <div class="buttons">
              <router-link
                :to="{ name: 'sign up' }"
                class="button is-high-con is-outlined is-rounded hvr-grow"
              >
                <span>{{ $t("be.boxsprout.app.nav.sign-up") }}</span>
              </router-link>

              <router-link
                :to="{ name: 'login' }"
                class="button is-high-con is-outlined is-rounded hvr-icon-push hvr-grow active-fill"
              >
                <span class="icon hvr-icon">
                  <font-awesome-icon icon="sign-in-alt" />
                </span>
                <span>{{ $t("be.boxsprout.app.nav.log-in") }}</span>
              </router-link>
            </div>
          </div>
          <div class="navbar-item" v-else>
            <div class="buttons">
              <a
                @click="user.logout()"
                class="button is-high-con is-outlined is-rounded hvr-icon-push hvr-grow active-fill"
              >
                <span class="icon hvr-icon">
                  <font-awesome-icon icon="sign-out-alt" />
                </span>
                <span>{{ $t("be.boxsprout.app.nav.log-out") }}</span>
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
        <h3>BoxSprout</h3>
        <p>
          {{ $t("be.boxsprout.app.footer") }}
          <a
            class="swirly-link"
            href="https://www.linkedin.com/in/eduard-monstrey-16904663/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            >Eduard Monstrey</a
          >|
          <a
            class="swirly-link"
            href="https://www.linkedin.com/in/philippe-gilops-3971346b/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Philippe Gilops</a
          >|
          <a
            class="swirly-link"
            href="https://www.linkedin.com/in/martijn-gilis-3a255617b/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            Martijn Gilis</a
          >|
          <a
            class="swirly-link"
            href="https://www.linkedin.com/in/anis-sakkaf/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            >Anis Sakkaf</a
          >.
        </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" scoped>
import User from "@/models/user";
import { Component, Vue } from "vue-property-decorator";
import { MetaInfo } from "vue-meta";
import LocaleChanger from "@/components/LocaleChanger.vue";

export const titleTemplate = (chunk: string) =>
  chunk ? `${chunk} - BoxSprout` : "BoxSprout";

const metaDescriptions = (str: string): any[] => {
  return [
    { vmid: "description", name: "description", content: str },
    { vmid: "twitter:description", name: "twitter:description", content: str },
    { vmid: "og:description", property: "og:description", content: str },
    { vmid: "prop:description", itemprop: "description", content: str }
  ];
};

const metaTitles = (str: string): any[] => {
  return [
    {
      vmid: "twitter:title",
      name: "twitter:title",
      content: str,
      template: titleTemplate
    },
    {
      vmid: "og:title",
      property: "og:title",
      content: str,
      template: titleTemplate
    },
    {
      vmid: "prop:title",
      itemprop: "name",
      content: str,
      template: titleTemplate
    }
  ];
};

const metaUrls = (str: string): any[] => {
  return [
    {
      vmid: "og:url",
      property: "og:url",
      content: process.env.BASE_URL + str
    }
  ];
};

export const metaWrapper = (
  title: string,
  description: string,
  url: string
): any[] =>
  metaDescriptions(description)
    .concat(metaTitles(title))
    .concat(metaUrls(url));

@Component({
  metaInfo() {
    const title = "";
    const description = "BoxSprout";
    const url = "";

    return {
      title,
      titleTemplate,
      meta: [
        {
          property: "og:site_name",
          content: "BoxSprout",
          vmid: "og:site_name"
        },
        {
          property: "og:type",
          content: "website",
          vmid: "og:type"
        },
        {
          property: "og:image",
          content: require("@/assets/box.jpg"),
          vmid: "og:image"
        },
        {
          itemprop: "image",
          content: require("@/assets/box.jpg")
        }
      ].concat(metaWrapper(title, description, url))
    };
  },
  components: {
    "locale-changer": LocaleChanger
  }
})
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
@import "~bulma/sass/elements/other";
@import "~bulma/sass/elements/title";
@import "~bulma/sass/components/card";
@import "~bulma/sass/components/media";
@import "~bulma/sass/components/navbar";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/layout/_all";

@import "~vue-loading-overlay/dist/vue-loading.css";

@import "@/styles/_fonts.scss";

#app {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  .hero {
    .title {
      text-transform: uppercase;
    }
  }

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

      .navbar-end {
        &.is-hidden-touch {
          > a {
            $btn-width: 200px !default;
            $btn-height: 45px !default;
            $btn-color: $e;
            $btn-color-dark: shade($btn-color, 40%);
            position: relative;
            display: block;
            @include size(100%, $btn-height);
            max-width: $btn-width;
            text-transform: uppercase;
            padding: 0.4rem 2rem;
            margin: 3px 2px;
            color: darken($btn-color, 25);

            &:hover,
            &:focus,
            &.router-link-exact-active {
              color: #dad7cf;

              background-color: $btn-color-dark;
            }
          }

          .buttons {
            .router-link-exact-active {
              color: #fff;

              background: $high-contrast;
            }
          }
        }
      }
    }
  }

  .root {
    min-height: 100vh;
  }

  footer {
    h3 {
      font-family: "Fredoka One", "Open Sans", Helvetica, Arial, sans-serif;
      color: $high-contrast;
    }

    p {
      color: $high-contrast;
    }
  }

  a {
    &.swirly-link {
      font-weight: 600;
      position: relative;
      text-decoration: none;
      padding: 10px;

      &:before,
      &:after {
        content: "";
        position: absolute;
        background: $high-contrast;
        height: 2px;
        width: 0;
        transition: width 0.5s ease-in-out;
      }

      &:before {
        bottom: 0;
        left: 0;
      }

      &:after {
        top: 0;
        right: 0;
      }

      &:hover:before,
      &:hover:after {
        width: 100%;
      }
    }
  }
}
</style>
