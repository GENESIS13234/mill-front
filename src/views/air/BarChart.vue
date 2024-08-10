<template>
  <a-card title="汽轮机">
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
          legend: {
            data: ['实际值', '模拟值'],
            bottom: 0,
          },
          tooltip: {},
          xAxis: { type: 'category', data: ['高压缸', '第一级组', '第二级组'] },
          yAxis: {},
          series: [
            {
              data: [150, 230, 224],
              type: 'bar',
              name: '实际值',
            },
            {
              data: [120, 210, 264],
              type: 'bar',
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
