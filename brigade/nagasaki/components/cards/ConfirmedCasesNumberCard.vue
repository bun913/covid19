<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="lastUpdate"
      :unit="$t('人')"
      :url="
        'https://data.bodik.jp/dataset/420000_covidpatients/resource/de7ce61e-1849-47a1-b758-bca3f809cdf8'
      "
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）医療機関が保険適用で行った検査も含む') }}
          </li>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
import Data from '@/brigade/nagasaki/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  computed: {
    lastUpdate() {
      return this.$store.getters.lastUpdate
    },
    patientsGraph() {
      // デフォルト値をセット
      let patientsGraphNotCruise = Data.patients_summary.data

      // ロード
      if (this.$store.state.patientsGraphNotCruise.length !== 0)
        patientsGraphNotCruise = this.$store.state.patientsGraphNotCruise.map(
          x => x
        )
      // console.log(patientsGraphNotCruise, 'patientsGraphNotCruise')

      const result = formatGraph(patientsGraphNotCruise)
      // console.log(result, 'result')

      // 感染者数グラフ
      return result
    }
  }
}
</script>
