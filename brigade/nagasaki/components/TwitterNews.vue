<template>
  <div class="TwitterNews">
    <div class="heading">
      <h3 class="title">
        <v-icon class="icon" size="24">
          mdi-information
        </v-icon>
        {{ $t('長崎県医療政策課からのお知らせ') }}
      </h3>
    </div>

    <div class="WhatsNew-list">
      <a
        href="https://twitter.com/ngs_ken_iryou"
        target="_blank"
        class="TwitterNews-anchor"
        rel="noopener noreferrer"
      >
        {{ $t('最新の情報は長崎県医療政策課からのTwitterをご覧ください') }}
      </a>

      <a
        href="https://twitter.com/ngs_ken_iryou"
        target="_blank"
        rel="noopener noreferrer"
        class="SideNavigation-SocialLink"
      >
        <picture>
          <source srcset="/twitter.webp" type="image/webp" />
          <img src="/twitter.png" alt="Twitter" />
        </picture>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {},
  methods: {}
})
</script>

<style lang="scss">
.TwitterNews {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .icon {
      margin: 3px;
    }
  }

  .anchor {
    text-decoration: none;
    margin: 5px;
    font-size: 14px;

    @include lessThan($medium) {
      display: flex;
      flex-wrap: wrap;
    }

    &-time {
      flex: 0 0 90px;

      @include lessThan($medium) {
        flex: 0 0 100%;
      }

      color: $gray-1;
    }

    &-link {
      flex: 0 1 auto;

      @include text-link();

      @include lessThan($medium) {
        padding-left: 8px;
      }
    }

    &-ExternalLinkIcon {
      margin-left: 2px;
      color: $gray-3 !important;
    }
  }
}

.SideNavigation-SocialLink {
  border: 1px dotted transparent;
  border-radius: 30px;
  color: $gray-3;

  &:link,
  &:hover,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:focus {
    color: inherit;
    text-decoration: none;
    border: 1px dotted $gray-3;
    outline: none;
  }

  & + & {
    margin-left: 10px;
  }

  img {
    width: 30px;
  }
}
</style>
