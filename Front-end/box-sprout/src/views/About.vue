<template>
  <div class="about">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t("be.boxsprout.about.title") }}
          </h1>
        </div>
      </div>
    </section>
    <div class="main container is-fluid">
      <div class="anis">
        <div class="image-box">
          <img
            src="@/assets/anis.jpg"
            :alt="$t('be.boxsprout.about.anis.image')"
          />
        </div>
        <div class="content">
          <div class="title-box">
            <h2>{{ $t("be.boxsprout.about.anis.title") }}</h2>
          </div>
          <div class="description-box">
            <p>
              {{ $t("be.boxsprout.about.anis.description") }}
            </p>
            <div class="icon-seperator"></div>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/anis-sakkaf/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'linkedin']"
              /></a>
              <a
                href="https://www.facebook.com/DuckDonaldD"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'facebook']"
              /></a>
              <a
                href="https://www.instagram.com/goofball_9/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'instagram']"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="team">
        <div class="title-box sperator-box">
          <h2>{{ $t("be.boxsprout.about.team.title") }}</h2>
        </div>
        <div class="members">
          <div class="team-member">
            <img
              class="is-rounded"
              src="@/assets/martijn.jpg"
              :alt="$t('be.boxsprout.about.team.martijn.image')"
            />
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="name">
              <h2>{{ $t("be.boxsprout.about.team.martijn.name") }}</h2>
              <h3>{{ $t("be.boxsprout.about.team.martijn.function") }}</h3>
            </div>
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="description">
              <p>{{ $t("be.boxsprout.about.team.martijn.description") }}</p>
            </div>
            <div class="icon-seperator"></div>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/martijn-gilis-3a255617b/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'linkedin']"
              /></a>
              <a
                href="https://www.facebook.com/martijn.gilis"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'facebook']"
              /></a>
              <a
                href="https://www.instagram.com/martijngilis/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'instagram']"
              /></a>
            </div>
          </div>
          <div class="team-member">
            <img
              class="is-rounded"
              src="@/assets/philippe.png"
              :alt="$t('be.boxsprout.about.team.philippe.image')"
            />
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="name">
              <h2>{{ $t("be.boxsprout.about.team.philippe.name") }}</h2>
              <h3>{{ $t("be.boxsprout.about.team.philippe.function") }}</h3>
            </div>
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="description">
              <p>
                {{ $t("be.boxsprout.about.team.philippe.description") }}
              </p>
            </div>
            <div class="icon-seperator"></div>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/philippe-gilops-3971346b/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'linkedin']"
              /></a>
              <a
                href="https://www.facebook.com/philippe.gilops"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'facebook']"
              /></a>
              <a
                href="https://www.instagram.com/phille_gi/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'instagram']"
              /></a>
            </div>
          </div>
          <div class="team-member">
            <img
              class="is-rounded"
              src="@/assets/eduard.jpg"
              :alt="$t('be.boxsprout.about.team.eduard.image')"
            />
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="name">
              <h2>{{ $t("be.boxsprout.about.team.eduard.name") }}</h2>
              <h3>{{ $t("be.boxsprout.about.team.eduard.function") }}</h3>
            </div>
            <div class="icon-seperator">
              <font-awesome-icon icon="star" />
            </div>
            <div class="description">
              <p>
                {{ $t("be.boxsprout.about.team.eduard.description") }}
              </p>
            </div>
            <div class="icon-seperator"></div>
            <div class="social">
              <a
                href="https://www.linkedin.com/in/eduard-monstrey-16904663/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'linkedin']"
              /></a>
              <a
                href="https://www.facebook.com/edouard.monstrey"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'facebook']"
              /></a>
              <a
                href="https://www.instagram.com/eduard_monstrey/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <font-awesome-icon size="2x" :icon="['fab', 'instagram']"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="title-box sperator-box">
          <h2>{{ $t("be.boxsprout.about.contact") }}</h2>
        </div>
        <div class="social">
          <a
            href="mailto:boxsprout@gmail.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <font-awesome-icon size="3x" icon="envelope"
          /></a>
          <a
            href="https://www.facebook.com/BoxSprout/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <font-awesome-icon size="3x" :icon="['fab', 'facebook']"
          /></a>
          <a
            href="https://www.instagram.com/boxsprout/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <font-awesome-icon size="3x" :icon="['fab', 'instagram']"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  .main {
    margin-top: 30px;
  }
}

.anis {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 1180px) {
    flex-direction: column;
    align-items: center;
  }

  .image-box {
    display: inline-block;
    border: 10px solid $a;
    box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);

    img {
      display: block;
      width: 300px;
      height: 378px;

      @media screen and (max-width: 780px) {
        width: 200px;
        height: 252px;
      }
    }
  }

  .title-box {
    position: absolute;
    top: -33px;
    left: 50%;
    background: $white;
    width: 100%;

    @media screen and (max-width: 1180px) {
      left: 0;
    }
  }

  .content {
    align-self: center;
    position: relative;
    left: -50px;
    background: $white;

    @media screen and (max-width: 1180px) {
      margin: 45px 30px 0 30px;
      left: auto;
    }
  }
}

.team {
  margin-top: 50px;

  .members {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .team-member {
    margin: 45px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid $e;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
    max-width: 350px;

    img {
      border-radius: 50%;
      border: 5px solid $b;
      box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
      height: 256px;
      width: 256px;

      @media screen and (max-width: 780px) {
        width: 200px;
        height: 200px;
      }
    }

    .name {
      h2 {
        text-transform: uppercase;
        font-size: 24px;
        font-weight: 700;
      }

      h3 {
        font-size: 16px;
        font-style: italic;
      }
    }

    .description {
      text-align: justify;
      margin: auto 20px;
    }
  }
}

.contact {
  margin-bottom: 30px;

  .title-box {
    margin-bottom: 30px;
  }
}

.social {
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    color: $e;
    margin: auto 10px;
    transition: all 0.1s;

    &:hover {
      color: tint($e, 20);
      transform: scale(1.1, 1.1);
    }
  }
}

.sperator-box {
  position: relative;
  display: inline-block;

  &:before,
  &:after {
    position: absolute;
    width: 25vw;
    content: "";
    border-top: 2px solid $e;
    top: 50%;
  }

  &:before {
    right: 105%;
  }

  &:after {
    left: 105%;
  }
}

.icon-seperator {
  position: relative;
  display: inline;
  margin: 15px auto;

  &:before,
  &:after {
    position: absolute;
    width: 100px;
    content: "";
    border-top: 2px solid $e;
    top: 50%;
  }

  &:before {
    right: 135%;
  }

  &:after {
    left: 135%;
  }

  svg {
    color: $b;
  }
}

.title-box {
  h2 {
    font-size: 34px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;

    @media screen and (max-width: 780px) {
      font-size: 24px;
    }
  }

  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border: 8px solid $b;
  display: inline-block;
  padding: 8px 60px;
  border-radius: 2px;
}

.description-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.25);
  border: 4px solid $a;
  border-radius: 2px;
  padding: 40px 30px;
  max-width: 400px;
  text-align: justify;
}
</style>

<script lang="ts" scoped>
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = this.$t("be.boxsprout.about.meta.title") as string;
    const description = this.$t(
      "be.boxsprout.about.meta.description"
    ) as string;
    const url = "about";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class About extends Vue {}
</script>
