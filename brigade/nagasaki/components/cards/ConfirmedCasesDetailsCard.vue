<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="updatedAt"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
          <li>
            {{
              $t('（注）「入院中」には、入院調整中・宿泊療養に移行した方を含む')
            }}
          </li>
          <li>
            {{
              $t(
                '（注）退院者数の把握には一定の期間を要しており、確認次第数値を更新している'
              )
            }}
          </li>
          <li>
            {{ $t('（注）軽中重症人数はデータが無いため表示していません') }}
          </li>
        </ul>
      </template>
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </data-view>
  </v-col>
</template>

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script>
import Data from '@/brigade/nagasaki/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable
  },
  // data() {
  //   return this.al()
  // },
  computed: {
    updatedAt() {
      return this.$store.getters.lastUpdate
    },

    confirmedCases() {
      const summary = this.$store.state.patientsNotCruise
        ? this.$store.state.patientsNotCruise
        : formatConfirmedCases(Data.main_summary)
      // console.log(summary, 'summary')
      return summary
    }
  },
  methods: {}
}
</script>
