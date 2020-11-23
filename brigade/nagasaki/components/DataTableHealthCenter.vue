<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <div>
        <span :class="$style.alert">{{ $t('発熱などの症状がある方') }}</span>
      </div>

      <div>
        <span :class="$style.alertContainer">{{
          $t('長崎県 受診・相談センターにご相談ください（24時間対応）')
        }}</span>

        <div :class="$style.alert2">
          <a :class="$style.TelLink" href="tel:0120-409-745">
            <img
              :class="$style.TelLinkIcon"
              src="/flow/phone-24px.svg"
              aria-hidden="true"
              :alt="$t('電話番号')"
            />
            0120-409-745（フリーダイヤル・24時間対応）
          </a>
        </div>
      </div>
      <br />
    </template>

    <hr :class="[$style.hr - body]" />

    <div>
      <span :class="$style.alert">{{ $t('感染の疑いがある場合の相談') }}</span>
    </div>

    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="700"
      :fixed-header="true"
      :mobile-breakpoint="0"
      class="cardTable"
    />
  </data-view>
</template>

<style module lang="scss">
.alert {
  padding: 1px;
  font-size: 20px;
  color: #f00;
}

.alertContainer {
  padding: 1px;
  font-size: 20px;
  color: #f00;
}

.hr-body {
  margin-top: 20px;
  margin-bottom: 20px;
}

.cardTable {
  &.v-data-table {
    th {
      padding: 8px 10px;
      height: auto;
      border-bottom: 1px solid $gray-4;
      white-space: nowrap;
      color: $gray-2;
      font-size: 12px;
      &.text-center {
        text-align: center;
      }
    }
    tbody {
      tr {
        color: $gray-1;
        td {
          padding: 8px 10px;
          height: auto;
          font-size: 12px;
          &.text-center {
            text-align: center;
          }
        }
        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }
        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }
  }
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'

export default Vue.extend({
  components: { DataView },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleId: {
      type: String,
      default: ''
    },
    chartData: {
      type: Object,
      default: () => {}
    },
    date: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {}
    },
    url: {
      type: String,
      default: ''
    }
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')

    tables.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  }
})
</script>
