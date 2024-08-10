<template>
  <a-card title="膨胀过程线">
    <div ref="chartRef" style="height: 400px; widows: 100%"></div>
  </a-card>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted, Ref } from 'vue'
  import { Card } from 'ant-design-vue'
  import { useECharts } from '/@/hooks/web/useECharts'

  export default defineComponent({
    components: {
      ACard: Card,
    },
    setup() {
      const chartRef = ref<HTMLDivElement | null>(null)
      const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)
      onMounted(async () => {
        setOptions({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          legend: {
            data: ['实际值', '模拟值'],
            bottom: 0,
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
              name: '实际值',
            },
            {
              data: [120, 210, 264, 208, 175, 107, 250],
              type: 'line',
              name: '模拟值',
            },
          ],
        })
      })
      return {
        chartRef,
      }
    },
  })</script
>./Table.vue
