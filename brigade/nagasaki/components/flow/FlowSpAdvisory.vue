<template>
  <div :class="$style.container">
    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('発熱などの症状がある方') }}
      <small :class="[$style.break, $style.fzRegular, $style.mt5]">{{
        $t('長崎県 受診・相談センター')
      }}</small>
    </h4>
    <p :class="[$style.open, $style.fzMedium]">
      <span>{{ $t('24時間対応') }}</span>
    </p>

    <div :class="$style.Tel">
      <a :class="$style.TelLink" href="tel:0120-409-745">
        <img
          :class="$style.TelLinkIcon"
          src="/flow/phone-24px.svg"
          aria-hidden="true"
          :alt="$t('電話番号')"
        />
        0120-409-745（フリーダイヤル）
      </a>
    </div>

    <p :class="[$style.open, $style.fzMedium]" />
    <hr />
    <p :class="[$style.open, $style.fzMedium]" />

    <h4 id="consult" :class="[$style.heading, $style.fzXLarge]">
      {{ $t('感染の疑いがある場合') }}
    </h4>

    <dl>
      <div :class="[$style.night]">
        <dt :class="[$style.title, $style.fzMedium]">
          {{ $t('平日（日中）') }}
        </dt>
        <dd :class="[$style.night]">
          <a
            href="https://www.pref.nagasaki.jp/bunrui/hukushi-hoken/kansensho/corona_nagasaki/#madoguchi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ $t('各保健所の電話番号は福祉保健局HPへ') }}
            <v-icon size="16">
              mdi-open-in-new
            </v-icon>
          </a>
        </dd>
      </div>
      <div>
        <dt :class="[$style.night]">
          <span :class="[$style.fzMedium, $style.break, $style.mb10]">
            {{ $t('平日（夜間）') }}
          </span>
        </dt>
        <dd :class="[$style.night]">
          {{ $t('午後5時から翌朝午前9時') }}
        </dd>
      </div>
      <div>
        <dt :class="[$style.night]">
          <span :class="[$style.fzMedium, $style.break, $style.mb10]">
            {{ $t('土日祝 終日') }}
          </span>
        </dt>
        <dd :class="[$style.night]">
          <nuxt-link
            :to="localePath('/cards/health-center')"
            :class="$style.link"
          >
            {{ $t('緊急の場合は、長崎県受診・相談センターにおかけください') }}
          </nuxt-link>
        </dd>
      </div>
      <div
        v-if="!['ja', 'ja-basic'].includes($i18n.locale)"
        :class="[$style.phone, $style.fzNumeric]"
      >
        <span :class="[$style.fzMedium, $style.break, $style.mb10]">
          {{ $t('ひまわり') }}
        </span>
      </div>
    </dl>
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style module lang="scss">
@import '@/components/flow/flow_sp.scss';

// advisory
.open {
  margin-top: px2vw(20);
  display: flex;
  justify-content: center;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $white;
    color: $green-1;
    padding: px2vw(20) px2vw(40);
    border-radius: px2vw(6);
  }
}

.daytime {
  margin-top: px2vw(20);
  display: flex;
  border-top: 1px solid $gray-4;
  border-bottom: 1px solid $gray-4;

  > * {
    padding: px2vw(30) px2vw(10);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    flex-basis: 40%;
  }

  .link {
    flex-basis: 60%;

    > a {
      text-decoration: none;
    }
  }
}

.night {
  margin: px2vw(30) auto;
  padding-left: 0 !important;
  text-align: center;

  > li {
    list-style-type: none;

    &:not(:first-child) {
      margin-top: px2vw(20);
    }
  }
}

@include largerThan($small) {
  $vw: 960;

  .open {
    margin-top: px2vw(20, $vw);

    > span {
      padding: px2vw(20) px2vw(40, $vw);
      border-radius: px2vw(6, $vw);
    }
  }

  .daytime {
    margin-top: px2vw(20, $vw);

    > * {
      padding: px2vw(30) px2vw(10, $vw);
    }
  }

  .night {
    margin: px2vw(30, $vw) auto;

    > li {
      &:not(:first-child) {
        margin-top: px2vw(20, $vw);
      }
    }
  }
}
</style>
