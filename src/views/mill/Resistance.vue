<template>
  <div class="line-chart-container">
    <!-- 标题 -->
    <h2 class="chart-title">通风阻力</h2>
    <div id="line-chart"></div>
    <!-- 图表区域 -->
  </div>
</template>

<script>
  import * as echarts from 'echarts'

  export default {
    name: 'Resistance',
    mounted() {
      this.initLineChart()
      window.addEventListener('resize', this.resizeChart) // 添加窗口调整时的图表重绘
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.resizeChart) // 移除事件监听
    },
    methods: {
      initLineChart() {
        const chartDom = document.getElementById('line-chart')
        const myChart = echarts.init(chartDom)

        const option = {
          tooltip: {
            trigger: 'axis',
            formatter: function (params) {
              let result = `${params[0].name}<br/>`
              params.forEach((item) => {
                result += `${item.seriesName}: ${item.value.toFixed(2)}<br/>` // 显示数值而不是单位
              })
              return result
            },
            textStyle: {
              fontSize: 12,
            },
            position: 'top', // 调整 tooltip 显示的位置
          },
          legend: {
            data: ['通风阻力', '最大值', '最小值'],
            bottom: '5%',
            itemWidth: 10,
            itemHeight: 10,
            orient: 'horizontal',
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['20:47', '09:29', '09:30', '06:00', '09:30', '18:00'],
            axisLine: {
              show: true,
              lineStyle: {
                color: '#000',
                width: 1,
              },
            },
            axisTick: {
              show: true, // 显示 X 轴刻度线
            },
          },
          yAxis: {
            type: 'value',
            name: '通风阻力(KPa)',
            min: 0,
            max: 5,
            axisLabel: {
              formatter: '{value}', // 修改为简单的数字格式
              margin: 15, // 增加标签与轴线的间距
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
            namegap: 20, // 设置名称与y轴的间距
            namelocation: 'start', // 将y轴的名称放在起始位置
          },
          grid: {
            left: '15%', // 保持合理的左侧空白区域
            right: '10%',
            bottom: '20%', // 减少底部空白，避免与图例重叠
            top: '13%', // 减少顶部空白，避免与标题重叠
          },
          series: [
            {
              name: '通风阻力',
              type: 'line',
              data: [3, 3.5, 4, 4, 3.5, 3.8],
              color: '#1E90FF',
              smooth: true,
            },
            {
              name: '最大值',
              type: 'line',
              data: [3.5, 4, 4, 4.5, 4, 4],
              color: '#FF6347',
              smooth: true,
            },
            {
              name: '最小值',
              type: 'line',
              data: [2.8, 3, 3.2, 3.4, 3.1, 2.9],
              color: '#32CD32',
              smooth: true,
            },
          ],
        }

        myChart.setOption(option)
      },
      resizeChart() {
        const chartDom = document.getElementById('line-chart')
        const myChart = echarts.getInstanceByDom(chartDom)
        if (myChart) {
          myChart.resize() // 确保窗口尺寸改变时图表自适应
        }
      },
    },
  }
</script>

<style scoped>
  .line-chart-container {
    border: 1px solid #ddd;
    padding: 10px 20px; /* 减少四周的空白 */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* 垂直方向从上开始对齐 */
    align-items: center; /* 水平居中 */
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: -50px;
    max-width: 800px;
    width: 100%;
    height: 360px; /* 缩小图表的高度 */
  }

  .chart-title {
    color: #000000;
    font-size: 20px; /* 设置标题的字体大小 */
    font-weight: bold; /* 设置字体加粗 */
    text-align: center; /* 居中显示标题 */
    margin-top: -10px; /* 设置标题上下的间距 */
    margin-bottom: -10px; /* 减少标题和图表之间的空白 */
  }

  #line-chart {
    width: 100%;
    height: 100%; /* 保持图表高度自适应 */
  }
</style>
