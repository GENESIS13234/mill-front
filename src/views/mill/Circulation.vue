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
      <h2 style="font-weight: 600; font-size: 13px; margin: 0">循环倍率、R90</h2>
      <div style="text-align: right; font-size: 11px"> </div>
    </div>
    <div class="circulation-chart-container">
      <div id="circulation-echart"></div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: 'CirculationChart',
    mounted() {
      this.initChart()
      window.addEventListener('resize', this.resizeChart)
      this.resizeChart() // 初始化调用resize
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeChart)
    },
    methods: {
      initChart() {
        const chartDom = document.getElementById('circulation-echart')
        const myChart = echarts.init(chartDom)

        const option = {
          tooltip: {
            trigger: 'axis',
            formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}',
            textStyle: {
              fontSize: 12,
            },
          },
          legend: {
            data: ['循环倍率', 'R90'],
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['06:00', '08:00', '10:00', '11:53'],
            axisLabel: {
              formatter: '{value}\n09-30',
              interval: 1,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#000',
                width: 1,
              },
            },
            axisTick: {
              show: true,
            },
          },
          yAxis: [
            {
              type: 'value',
              name: '循环倍率',
              min: 0,
              max: 10,
              axisLabel: {
                formatter: '{value}',
                margin: 15,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#000',
                  width: 1,
                },
              },
              axisTick: {
                show: true,
              },
              splitLine: {
                show: false,
              },
              nameGap: 20,
              nameLocation: 'end',
            },
            {
              type: 'value',
              name: 'R90',
              min: 0,
              max: 0.6,
              axisLabel: {
                formatter: '{value}',
                margin: 15,
              },
              axisLine: {
                show: true,
                lineStyle: {
                  color: '#000',
                  width: 1,
                },
              },
              axisTick: {
                show: true,
              },
              splitLine: {
                show: false,
              },
              nameGap: 20,
              nameLocation: 'end',
            },
          ],
          grid: {
            left: '15%',
            right: '15%',
            bottom: '25%',
            top: '13%',
          },
          series: [
            {
              name: '循环倍率',
              type: 'line',
              yAxisIndex: 0,
              data: [0, 3.5, 3.8, 0],
              color: '#FF6347', // Use the color from the image
              smooth: true,
            },
            {
              name: 'R90',
              type: 'line',
              yAxisIndex: 1,
              data: [0, 5.8, 5.2, 0],
              color: '#FFD700', // Use the color from the image
              smooth: true,
            },
          ],
        }

        myChart.setOption(option)
      },
      resizeChart() {
        const chartDom = document.getElementById('circulation-echart')
        const myChart = echarts.getInstanceByDom(chartDom)
        if (myChart) {
          myChart.resize()
        }
      },
    },
  }
</script>

<style scoped>
  .circulation-chart-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: white;
    margin-bottom: 5px;
    width: 100%;
    height: 360px;
    max-width: 1000px; /* 可以根据需要调整 */
    box-sizing: border-box; /* 包含 padding 和 border */
  }

  .chart-title {
    color: #000000;
    text-align: left;
  }

  #circulation-echart {
    width: 100%;
    height: 100%;
  }
</style>
