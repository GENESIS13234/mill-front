<template>
  <div>
    <div class="pie-chart-container">
      <div id="pie-chart" style="width: 100%; height: 400px"></div>
    </div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: 'OutputTable',
    data() {
      return {
        myChart: null, // 声明图表实例变量
      }
    },
    mounted() {
      this.initPieChart()
      window.addEventListener('resize', this.resizeChart) // 新增窗口缩放监听
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeChart) // 清理监听
      if (this.myChart) {
        this.myChart.dispose() // 销毁图表实例
      }
    },
    methods: {
      initPieChart() {
        const chartDom = document.getElementById('pie-chart')
        this.myChart = echarts.init(chartDom) // 保存实例到组件
        const option = {
          title: {
            text: '五台磨煤机运行统计',
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
            data: ['ABCDE', 'ABCD', 'ABCEF', 'ABDEF', '其他'],
            textStyle: {
              color: '#000',
            },
          },
          series: [
            {
              name: '运行组合',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              data: [
                { value: 335, name: 'ABCDE', itemStyle: { color: '#00CED1' } },
                { value: 310, name: 'ABCD', itemStyle: { color: '#3CB371' } },
                { value: 274, name: 'ABCEF', itemStyle: { color: '#FF4500' } },
                { value: 235, name: 'ABDEF', itemStyle: { color: '#F0E68C' } },
                { value: 150, name: '其他', itemStyle: { color: '#FFA07A' } },
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
        this.myChart.setOption(option)
      },
      resizeChart() {
        // 新增缩放响应方法
        if (this.myChart) {
          this.myChart.resize()
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
    margin-bottom: -70px; /* 负边距移至容器 */
  }

  #pie-chart {
    width: 100%;
    height: 400px;
    margin-bottom: -70px; /* 移除图表负边距 */
  }
</style>
