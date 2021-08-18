<template>
  <div>
    <img src="/ogp/ogp.png" alt="$t('長崎県アイキャッチ画像')" />
    <br />
    <br />
    <h1 class="sitename">
      {{ $t('長崎県 新型コロナウイルス感染症 対策サイト') }}
    </h1>
    <br />
    <span>
      {{
        $t(
          '長崎県内の新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するサイトです。'
        )
      }}<br />
      {{
        $t(
          '長崎県による公式情報と客観的な数値をわかりやすく伝えることで、長崎県にお住まいの方や長崎県に拠点を持つ企業の方、長崎県を訪れる方が現状を把握して適切な対策を取れるようにすることを目的としています。'
        )
      }}<br />
      {{
        $t(
          '開発は{codeForNagasaki}と長崎在住エンジニア、長崎出身エンジニア、イラストレーターなど有志で行っています。'
        )
      }}<br />
      <v-icon class="icon" size="18">mdi-home</v-icon> :
      https://c4nagasaki.org/<br />
      <v-icon class="icon" size="18">mdi-facebook</v-icon> :
      https://www.facebook.com/groups/1709440532692336/<br />
      <v-icon class="icon" size="18">mdi-twitter</v-icon> :
      https://twitter.com/code4nagasaki<br />
    </span>
    <br />
    <ul class="SponsorLinkContainer supplementHeaders">
      <li class="supplementHeader">
        {{ $t('Data by:') }}<br />
        <span class="no-image-title">{{ $t('長崎県・長崎市') }}</span>
        <br />
        <i18n path="Under" tag="p" for="CC BY 4.0">
          <template #ccByImageTitle>
            <span class="image-title">{{ $t('CC BY 4.0') }}</span>
          </template>
          <template #ccByImage>
            <img
              class="cc-by-logo"
              src="/cc-by-mini.svg"
              width="85.3px"
              height="16px"
              alt="$t('CC BY 4.0')"
            />
          </template>
        </i18n>
      </li>
      <li class="supplementHeader2">
        {{ $t('Operations by:') }}<br />
        <span class="image-title">{{ $t('Code for 長崎') }}</span>
        {{ $t('Code for 長崎') }}
      </li>
      <li class="supplementHeader3" />
    </ul>
  </div>
</template>

<script>
export default {
  layout: 'print',
  head() {
    return {
      title: this.$t('新型コロナウイルス{mobileBreak}まとめサイト', {
        mobileBreak: ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  -webkit-print-color-adjust: exact;
}
.icon {
  margin-top: -3px;
}
.sitename {
  text-align: center;
}
.supplementHeaders {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style-type: none;
  width: 100%;
}
.supplementHeader {
  width: 33%;
  text-align: left;
}
.supplementHeader2 {
  width: 33%;
  text-align: left;
}
.supplementHeader3 {
  width: 33%;
  text-align: left;
}
.SponsorLinkContainer {
  overflow: visible;
  padding-top: 0.8rem;
  white-space: normal;
  font-size: 0.82rem;
  color: $gray-1;
  & a {
    color: #333;
    text-decoration: none;
  }
  & a:hover {
    opacity: 0.6;
  }
  & img {
    padding-bottom: 0.9rem;
  }
  & img.justdouit-logo {
    margin: 0 0 0 -3px;
    width: 132px;
  }
  & img.sakura-internet-logo {
    margin: -6px 0 0 -14px;
    width: 176px;
  }
  & .image-title {
    display: inline-block;
    width: 0;
    height: 1.5rem;
    overflow: hidden;
  }
  & .no-image-title {
    display: inline-block;
    line-height: 1.8rem;
    color: #444;
    font-size: 1.5rem;
    font-weight: 400;
  }
  & .cc-by-logo {
    width: auto;
    height: 1.8rem;
    vertical-align: text-top;
  }
  & a.license {
    display: inline-block;
    margin: -0.7rem 0 0.2rem 0;
  }
}
</style>
