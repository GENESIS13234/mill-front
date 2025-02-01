<template>
  <div>
    <!-- Styled container for the pie chart -->
    <div class="pie-chart-container">
      <!-- Pie chart will be rendered inside this container -->
      <div :id="'pie-chart-' + name" style="width: 100%; height: 400px"></div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: 'Operation',
    data() {
      return {
        name: 'operation', // 用来动态生成图表 ID
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.initPieChart()
      })
      window.addEventListener('resize', this.resizeChart)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeChart)
    },
    methods: {
      initPieChart() {
        const chartDom = document.getElementById('pie-chart-' + this.name)
        this.myChart = echarts.init(chartDom)
        const option = this.getChartOption()
        this.myChart.setOption(option)
      },
      resizeChart() {
        if (this.myChart) {
          this.myChart.resize()
        }
      },
      getChartOption() {
        return {
          title: {
            text: '四台磨煤机运行情况',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
          },
          legend: {
            orient: 'horizontal',
            left: 'center',
            top: '10%',
            bottom: 'auto',
            data: ['ABCD', 'ABDE', 'BCDE', 'BCDF', 'ABCE', 'ACDE', '其他'],
          },
          series: [
            {
              name: '运行组合',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 335, name: 'ABCD', itemStyle: { color: '#00CED1' } },
                { value: 310, name: 'ABDE', itemStyle: { color: '#3CB371' } },
                { value: 274, name: 'BCDE', itemStyle: { color: '#FF4500' } },
                { value: 235, name: 'BCDF', itemStyle: { color: '#F0E68C' } },
                { value: 400, name: 'ABCE', itemStyle: { color: '#00FFFF' } },
                { value: 150, name: 'ACDE', itemStyle: { color: '#98FB98' } },
                { value: 50, name: '其他', itemStyle: { color: '#FFA07A' } },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
              },
              labelLine: {
                length: 10,
                length2: 10,
              },
              label: {
                formatter: '{b}',
                position: 'outer',
                alignTo: 'edge',
                margin: 5,
              },
            },
          ],
        }
      },
    },
  }
</script>

<style scoped>
  .pie-chart-container {
    border: 1px solid #ddd;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: -90px;
  }

  #pie-chart {
    width: 100%;
    height: 400px;
  }
</style>
