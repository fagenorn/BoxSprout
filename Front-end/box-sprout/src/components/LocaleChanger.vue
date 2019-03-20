<template>
  <div class="locale-changer">
    <div class="control has-icons-left">
      <div class="select is-primary is-rounded">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
            lang
          }}</option>
        </select>
      </div>
      <span class="icon is-left">
        <font-awesome-icon icon="globe" />
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class LocaleChanger extends Vue {
  langs = ["nl", "fr", "en"];

  created() {
    this.$i18n.locale = localStorage.locale || "en";
  }

  @Watch("$i18n.locale")
  onLocaleChanged(val: string, oldVal: string) {
    localStorage.locale = val;
  }
}
</script>

<style lang="scss" scoped>
.locale-changer {
  margin: 0 15px;
  select {
    background: tint($a, 25);
  }
}
</style>
