<template>
  <div class="equipment-static-container">
    <div id="gauge-chart" class="gauge-chart"></div>

    <div id="data-table-container" class="table-container">
      <table class="data-table">
        <tbody>
          <tr>
            <td class="label-cell">A磨运行 <br />(t/h):</td>
            <td id="mill-a-value" class="value-cell">32.75</td>
            <td class="label-cell">D磨运行 <br />(t/h):</td>
            <td id="mill-d-value" class="value-cell">36.38</td>
          </tr>
          <tr>
            <td class="label-cell">B磨运行 <br />(t/h):</td>
            <td id="mill-b-value" class="value-cell">36.19</td>
            <td class="label-cell">E磨运行 <br />(t/h):</td>
            <td id="mill-e-value" class="value-cell">0.03</td>
          </tr>
          <tr>
            <td class="label-cell">C磨运行 <br />(t/h):</td>
            <td id="mill-c-value" class="value-cell">36.30</td>
            <td class="label-cell">F磨运行 <br />(t/h):</td>
            <td id="mill-f-value" class="value-cell">0.05</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="status-container">
      <table class="status-table">
        <tbody>
          <tr>
            <th class="status-label">当前运行台数：</th>
            <td id="running-mills-value" class="status-value">4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted, nextTick } from 'vue'
  import * as echarts from 'echarts'

  export default defineComponent({
    name: 'EquipmentStatic',
    setup() {
      const chartInstance = ref<echarts.ECharts | null>(null)
      const currentUnitLoadValue = ref(300)

      const getAxisLineColor = (value: number) => {
        if (value > 300) return '#FFD700'
        if (value > 100) return '#98FB98'
        return '#3CB371'
      }

      const initChart = () => {
        const chartDom = document.getElementById('gauge-chart')
        if (!chartDom) return

        chartInstance.value = echarts.init(chartDom)
        const color = getAxisLineColor(currentUnitLoadValue.value)

        const option = {
          series: [
            {
              name: '机组负荷',
              type: 'gauge',
              center: ['50%', '55%'],
              radius: '95%',
              startAngle: 210,
              endAngle: -30,
              min: 0,
              max: 400,
              splitNumber: 4,
              axisLine: {
                roundCap: false,
                lineStyle: {
                  width: 28,
                  color: [
                    [currentUnitLoadValue.value / 400, color],
                    [1, '#EEE8AA'],
                  ],
                },
              },
              axisTick: { show: false },
              axisLabel: { show: false },
              splitLine: { show: false },
              pointer: { show: false },
              title: { show: false },
              detail: {
                valueAnimation: false,
                formatter: '300MW\n{a|机组负荷}',
                rich: {
                  a: {
                    fontWeight: 'normal' /* 去除加粗 */,
                    fontSize: 20,
                    align: 'center',
                    padding: [4, 0, 0, 0],
                    color: '#000000',
                  },
                },
                fontSize: 20,
                fontWeight: 'normal' /* 去除加粗 */,
                color: '#000000',
                offsetCenter: [0, 0],
              },
              data: [{ value: currentUnitLoadValue.value }],
            },
          ],
        }

        chartInstance.value.setOption(option)
        chartInstance.value.resize()
      }

      const startDataUpdate = () => {
        setInterval(() => {
          const newData = generateRandomData()
          currentUnitLoadValue.value = newData.unitLoad
          updateChart(newData.unitLoad)
          updateTable(newData.millData, newData.runningMillsCount)
        }, 3000)
      }

      const generateRandomData = () => {
        const unitLoad = Math.random() * 350 + 50
        const millData = {
          A: (Math.random() * 5 + 30).toFixed(2),
          B: (Math.random() * 5 + 32).toFixed(2),
          C: (Math.random() * 5 + 31).toFixed(2),
          D: (Math.random() * 5 + 33).toFixed(2),
          E: (Math.random() * 0.1).toFixed(2),
          F: (Math.random() * 0.15).toFixed(2),
        }
        const runningMillsCount = Math.floor(Math.random() * 3 + 3)
        return { unitLoad, millData, runningMillsCount }
      }

      const updateChart = (unitLoad: number) => {
        if (chartInstance.value) {
          const color = getAxisLineColor(unitLoad)
          chartInstance.value.setOption({
            series: [
              {
                data: [{ value: unitLoad }],
                axisLine: {
                  lineStyle: {
                    color: [
                      [unitLoad / 400, color],
                      [1, '#EEE8AA'],
                    ],
                  },
                },
              },
            ],
          })
        }
      }

      const updateTable = (millData: any, runningMillsCount: number) => {
        if (millData && runningMillsCount !== undefined) {
          document.querySelector('#mill-a-value')!.textContent = millData.A
          document.querySelector('#mill-b-value')!.textContent = millData.B
          document.querySelector('#mill-c-value')!.textContent = millData.C
          document.querySelector('#mill-d-value')!.textContent = millData.D
          document.querySelector('#mill-e-value')!.textContent = millData.E
          document.querySelector('#mill-f-value')!.textContent = millData.F
          document.querySelector('#running-mills-value')!.textContent = runningMillsCount.toString()
        }
      }

      onMounted(() => {
        nextTick(() => {
          initChart()
          startDataUpdate()
        })
      })

      return { currentUnitLoadValue }
    },
  })
</script>

<style scoped>
  .equipment-static-container {
    border: 1px solid #ddd;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .gauge-chart {
    width: 100%;
    height: 200px;
    margin-bottom: -20px;
  }

  .table-container {
    width: 100%;
    margin-bottom: 0px; /* 减小间距 */
  }

  .data-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 10px; /* 增大字体 */
    border: 2px solid #000000; /* Black border */
    background: white;
  }

  .data-table td {
    border: 1px solid #000000; /* Black border */
    padding: 2px;
    text-align: center;
  }

  .label-cell {
    background: #ffffff;
    color: #666;
    font-weight: normal; /* Remove bold */
  }

  .value-cell {
    color: #008000; /* Green text */
    font-weight: normal; /* Remove bold */
    font-size: 15px; /* Larger font size */
    text-align: center; /* Center align */
  }

  /* New status table style */
  .status-container {
    width: 95%; /* Make it wider */
    margin-top: 5px; /* Reduced space from above table */
  }

  .status-table {
    width: 100%;
    border: 2px solid #000000; /* Black border */
    border-radius: 0px; /* No rounded corners */
    overflow: hidden;
    background: white;
  }

  .status-table tr {
    display: flex;
  }

  .status-table th,
  .status-table td {
    flex: 1;
    padding: 3px;
  }

  .status-value {
    color: #008000; /* 绿色文本 */
    font-weight: normal; /* 移除加粗 */
    text-align: center; /* 绿色数字居中 */
    padding: 3px;
  }

  .status-label {
    background: #ffffff;
    color: #666;
    font-weight: normal;
    text-align: center;
    border-right: 2px solid #000000; /* 右边框 */
    padding: 3px;
  }
</style>
