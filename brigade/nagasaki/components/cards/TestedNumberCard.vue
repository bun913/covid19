<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-stacked-bar-chart
      :title="$t('検査実施件数')"
      :title-id="'number-of-tested'"
      :chart-id="'time-stacked-bar-chart-inspections'"
      :chart-data="inspectionsGraph"
      :date="lastUpdate"
      :items="inspectionsItems"
      :labels="inspectionsLabels"
      :unit="$t('件.tested')"
      :data-labels="inspectionsDataLabels"
    >
      <!-- 件.tested = 検査数 -->
      <template v-if="$i18n.locale !== 'ja-basic'" v-slot:additionalNotes>
        <ol :class="$style.GraphDesc">
          <li>{{ $t('※1: 疑い例・接触者調査') }}</li>
          <li>{{ $t('※2: クルーズ船') }}</li>
        </ol>
      </template>
    </time-stacked-bar-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import TimeStackedBarChart from '@/components/TimeStackedBarChart.vue'

export default {
  components: {
    TimeStackedBarChart
  },
  data() {
    return {
      inspectionsItems: [this.$t('県内発生（※1）'), this.$t('その他（※2）')],
      inspectionsDataLabels: [this.$t('県内発生'), this.$t('その他.graph')]
    }
  },
  computed: {
    lastUpdate() {
      return this.$store.getters.lastUpdate
    },

    inspectionsGraph() {
      const dummy = [[0], [0]]
      const bodik = this.$store.state.testedNumber
      if (!bodik || bodik.length === 0) return dummy

      const items1 = bodik.map(item => {
        return item.件数 ? Number(item.件数) : 0
      })
      const items2 = bodik.map(item => {
        return item.件数_その他 ? Number(item.件数_その他) : 0
      })
      return [items1, items2]
    },

    inspectionsLabels() {
      const bodik = this.$store.state.testedNumber
      const ret = bodik.map(item => dayjs(item.年月日).format('M/DD'))
      return ret
    }
  }
}
</script>

<style module lang="scss">
.Graph {
  &Desc {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0 !important;
    font-size: 12px;
    list-style: none;
  }
}
</style>
