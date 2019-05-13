<template>
  <div class="guide">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ $t("be.boxsprout.guide.title") }}
          </h1>
        </div>
      </div>
    </section>
    <div class="main container is-fluid">
      <div class="tutorial">
        <h2><span class="circle-tag">1</span>Folding the box</h2>

        <div class="content">
          <div class="video">
            <iframe
              src="https://www.youtube.com/embed/WZOXe4DzPx0"
              frameborder="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <hr />

      <div class="tutorial">
        <h2><span class="circle-tag">2</span>Planting the seeds</h2>

        <div class="content">
          <div class="description">
            <h3>Hoe zaadjes planten?</h3>
            <ol>
              <li>
                Steek de kokospellet in het biologisch afbreekbare plantenzakje
              </li>
              <li>Zet het zakje in het doosje dat je zojuist hebt gevouwd</li>
              <li>
                Giet 350 mililiter water in het zakje en maak ondertussen de
                aarde los met de spatel.
              </li>
              <li>Plant nu je zaadjes op maximum 0,5cm diepte</li>
              <li>
                Plaats de box op een vensterbank en wacht tot je zaadjes
                uitkomen
              </li>
              <li>Vergeet niet om de zaadjes af en toe te bevochtigen</li>
            </ol>
          </div>

          <div class="video">
            <iframe
              src="https://www.youtube.com/embed/ZpKX4Sy1kZU"
              frameborder="1"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { metaWrapper, titleTemplate } from "@/App.vue";

@Component({
  metaInfo() {
    const title = "Guide";
    const description = "Product Guides";
    const url = "guide";

    return {
      title,
      titleTemplate,
      meta: metaWrapper(title, description, url)
    };
  }
})
export default class Guide extends Vue {}
</script>

<style lang="scss" scoped>
.guide {
  h2 {
    font-size: 24px;
    border-bottom: 2px solid $e;
    display: inline-block;
    padding: 5px;
    font-weight: 700;
  }

  .circle-tag {
    background: $a;
    margin: 5px 10px 0 0;
    padding: 0;
    border-radius: 50%;
    display: inline-block;
    line-height: 35px;
    width: 35px;
    text-align: center;
    font-weight: 700;
    color: $white;
  }

  .tutorial {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .content {
      margin: 40px 0;
      display: flex;
    }

    .video {
      iframe {
        border: 15px solid $e;
        width: 712px;
        height: 400px;
      }
    }

    .description {
      margin: 7px;
      padding: 5px;
      min-width: 450px;

      h3 {
        border-bottom: 2px solid $e;
        font-weight: none;
        display: inline-block;
      }

      ol {
        max-width: 350px;
        counter-reset: my-awesome-counter;
        list-style: none;
        padding-left: 40px;

        li {
          text-align: left;
          margin: 0 0 1.5rem 0;
          counter-increment: my-awesome-counter;
          position: relative;

          &:before {
            content: counter(my-awesome-counter);
            color: $white;
            font-size: 1.5rem;
            font-weight: bold;
            position: absolute;
            --size: 32px;
            left: calc(-1 * var(--size) - 10px);
            line-height: var(--size);
            width: var(--size);
            height: var(--size);
            top: 0;
            transform: rotate(-10deg);
            background: $a;
            border-radius: 50%;
            text-align: center;
            box-shadow: 1px 1px 0 $b;
          }
        }
      }
    }
  }
}
</style>
