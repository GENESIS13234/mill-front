<template>
  <div style="border: 1px solid #ddd; padding: 8px">
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        padding: 0 4px;
      "
    >
      <h3 style="font-weight: 600; font-size: 13px; margin: 0">粒径分布</h3>
      <div style="text-align: right; font-size: 11px">
        <div>煤粉细度：<span style="color: #52c41a; margin-left: 4px">0.52</span></div>
        <div>均匀性：<span style="color: #52c41a; margin-left: 4px">0.34</span></div>
      </div>
    </div>

    <div
      style="width: 100%; height: 0; padding-bottom: 68%; position: relative; background: #ffffff"
    >
      <div ref="chartContainer" style="position: absolute; width: 100%; height: 100%"></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, onMounted, ref, onBeforeUnmount } from 'vue'
  import * as echarts from 'echarts'

  export default defineComponent({
    setup() {
      const chartContainer = ref<HTMLElement | null>(null)
      let myChart: echarts.ECharts | null = null
      const resizeObserver = ref<ResizeObserver | null>(null)

      const axisLabelStyle = {
        fontSize: 10,
        color: '#666',
      }

      onMounted(() => {
        if (chartContainer.value) {
          myChart = echarts.init(chartContainer.value)

          const option = {
            grid: {
              left: '12%',
              right: '10%',
              bottom: '18%',
              top: '12%',
            },
            xAxis: {
              type: 'category',
              data: ['1', '3', '5', '7', '9', '11', '13', '15', '17'],
              axisLine: {
                lineStyle: {
                  color: '#666',
                  width: 1,
                },
              },
              axisTick: { show: false },
              axisLabel: {
                ...axisLabelStyle,
                interval: 0,
                margin: 12,
                rotate: 0,
              },
              name: '粒径区间',
              nameLocation: 'middle',
              nameGap: 7,
              nameTextStyle: {
                fontSize: 11,
                color: '#666',
                padding: [15, 0, 0, 0],
              },
            },
            yAxis: {
              type: 'value',
              max: 0.15,
              min: 0,
              interval: 0.03,
              axisLabel: {
                ...axisLabelStyle,
                formatter: (value: number) => value.toFixed(2),
                margin: 8,
                padding: [0, 6, 0, 0],
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#666',
                  width: 1,
                },
              },
              axisTick: { show: false },
              splitLine: {
                lineStyle: {
                  color: '#eee',
                  type: 'dashed',
                },
              },
              name: '质量分数',
              nameLocation: 'end',
              nameGap: 0,
              nameTextStyle: {
                ...axisLabelStyle,
                fontSize: 11,
                align: 'center',
                padding: [0, 0, 12, -10],
              },
            },
            series: [
              {
                data: [0.0, 0.01, 0.02, 0.02, 0.02, 0.01, 0.0, 0.07, 0.06],
                type: 'bar',
                itemStyle: {
                  color: '#f4a460',
                  borderRadius: [1, 1, 0, 0],
                },
                barWidth: '60%',
              },
            ],
            tooltip: {
              trigger: 'axis',
              formatter: (params: any) => {
                const data = params[0]
                return `粒径: ${data.name}μm<br>占比: ${data.value}`
              },
            },
          }

          myChart.setOption(option)

          resizeObserver.value = new ResizeObserver(() => {
            myChart?.resize({ animation: { duration: 280 } })
          })
          resizeObserver.value.observe(chartContainer.value)
        }
      })

      onBeforeUnmount(() => {
        resizeObserver.value?.disconnect()
        myChart?.dispose()
      })

      return { chartContainer }
    },
  })
</script>
