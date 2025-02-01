<template>
  <div class="line-chart-container">
    <h2 class="chart-title">功率单耗</h2>
    <div id="power-consumption-chart"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: 'PowerConsumptionChart',
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
        const chartDom = document.getElementById('power-consumption-chart')
        const myChart = echarts.init(chartDom)

        const option = {
          tooltip: {
            trigger: 'axis',
            formatter:
              '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}<br/>{a5}: {c5}',
            textStyle: {
              fontSize: 12,
            },
            position: 'top',
          },
          legend: {
            data: ['功率', '功率最大值', '功率最小值', '单耗', '单耗最大值', '单耗最小值'],
            bottom: 0, // Adjusted legend position
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['20:47', '00:00', '06:00', '12:00', '18:00'],
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
              name: '功率(kw)',
              min: 0,
              max: 700,
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
              name: '单耗(kw.h/t)',
              min: 0,
              max: 25,
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
              name: '功率',
              type: 'line',
              data: [480, 480, 580, 480, 480],
              color: '#1E90FF',
              smooth: true,
            },
            {
              name: '功率最大值',
              type: 'line',
              data: [480, 480, 680, 480, 480],
              color: '#FF6347',
              smooth: true,
            },
            {
              name: '功率最小值',
              type: 'line',
              data: [450, 450, 550, 450, 450],
              color: '#32CD32',
              smooth: true,
            },
            {
              name: '单耗',
              type: 'line',
              yAxisIndex: 1,
              data: [15, 15, 13, 15, 15],
              color: '#808080',
              smooth: true,
            },
            {
              name: '单耗最大值',
              type: 'line',
              yAxisIndex: 1,
              data: [16, 16, 12, 16, 16],
              color: '#696969',
              smooth: true,
            },
            {
              name: '单耗最小值',
              type: 'line',
              yAxisIndex: 1,
              data: [14, 14, 11, 14, 14],
              color: '#7FFFD4',
              smooth: true,
            },
          ],
        }

        myChart.setOption(option)
      },
      resizeChart() {
        const chartDom = document.getElementById('power-consumption-chart')
        const myChart = echarts.getInstanceByDom(chartDom)
        if (myChart) {
          myChart.resize()
        }
      },
    },
  }
</script>

<style scoped>
  .line-chart-container {
    border: 1px solid #ddd;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 5px;
    width: 100%;
    height: 360px;
    max-width: 1000px; /* 可以根据需要调整 */
    box-sizing: border-box; /* 包含 padding 和 border */
  }

  .chart-title {
    color: #000000;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-top: -10px;
    margin-bottom: -10px;
  }

  #power-consumption-chart {
    width: 100%;
    height: 100%;
  }
</style>
