<template>
  <div class="image-container">
    <!-- 左侧图片 -->
    <div class="left-container">
      <div v-html="svgHtml" class="image-item"></div>
      <div v-html="modelSvgHtml" class="image-item model-image"></div>
    </div>

    <!-- 右侧表格 -->
    <div class="table-container">
      <div style="overflow-x: auto">
        <table class="custom-table">
          <thead>
            <tr>
              <th class="custom-header">型号</th>
              <th class="custom-header">指标</th>
              <th colspan="2" class="custom-header">数值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="10">模型输入</td>
            </tr>
            <tr>
              <td>给煤量(t/h)</td>
              <td colspan="2" class="green-text">32.75</td>
            </tr>
            <tr>
              <td>一次风量(t/h)</td>
              <td colspan="2" class="green-text">156.67</td>
            </tr>
            <tr>
              <td>液压油压(MPa)</td>
              <td colspan="2" class="green-text">0.65</td>
            </tr>
            <tr>
              <td>挡板角度(°)</td>
              <td colspan="2" class="green-text">45.00</td>
            </tr>
            <tr>
              <td>原煤水分(%)</td>
              <td colspan="2" class="green-text">9.40</td>
            </tr>
            <tr>
              <td>原煤灰分(%)</td>
              <td colspan="2" class="green-text">28.67</td>
            </tr>
            <tr>
              <td>原煤可磨性指数</td>
              <td colspan="2" class="green-text">57.00</td>
            </tr>
            <tr>
              <td>一次风温度(°C)</td>
              <td colspan="2" class="green-text">205.26</td>
            </tr>
            <tr>
              <td>环境温度(°C)</td>
              <td colspan="2" class="green-text">9.57</td>
            </tr>
            <tr>
              <td rowspan="5">模型输出</td>
              <td>指标</td>
              <td>模型值</td>
              <td>实测值</td>
            </tr>

            <tr>
              <td>循环倍率</td>
              <td class="green-text">9.1</td>
              <td>--</td>
            </tr>
            <tr>
              <td>通风阻力(KPa)</td>
              <td class="green-text">7.26</td>
              <td class="green-text">2.47</td>
            </tr>
            <tr>
              <td>电机功率(KW)</td>
              <td class="green-text">67.5</td>
              <td class="green-text">414.69</td>
            </tr>
            <tr>
              <td>单耗(KWh/t)</td>
              <td class="green-text">2.06</td>
              <td class="green-text">12.66</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import illustration from '/@/assets/svg/coalmill.svg'
  import modelIllustration from '/@/assets/svg/model.svg'

  export default defineComponent({
    setup() {
      const svgHtml = ref('')
      const modelSvgHtml = ref('')

      onMounted(async () => {
        try {
          const response = await fetch(illustration)
          if (response.ok) {
            svgHtml.value = await response.text()
          } else {
            console.error('Failed to load SVG file')
          }

          const modelResponse = await fetch(modelIllustration)
          if (modelResponse.ok) {
            modelSvgHtml.value = await modelResponse.text()
          } else {
            console.error('Failed to load model SVG file')
          }
        } catch (error) {
          console.error('Error loading SVG files', error)
        }
      })

      return {
        svgHtml,
        modelSvgHtml,
      }
    },
  })
</script>

<style scoped>
  .image-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 20px;
  }

  .left-container {
    flex: 0 0 53%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4px;
    max-width: 53%;
    align-items: start;
  }

  .image-item {
    width: 100%;
    max-width: 47%;
    height: auto;
    object-fit: contain;
    margin-top: 20px;
  }

  .model-image {
    margin-left: 36px; /* 增大 margin-left 值 */
    margin-right: -20px;
    box-sizing: border-box;
  }

  .table-container {
    flex: 0 0 48%;
    margin-left: -40px; /* 减小 margin-left 值 */
    margin-right: -20px;
    max-width: 48%;
    overflow: hidden;
    padding: 5px; /* 减少内边距 */
    padding-right: 5px;
  }

  .custom-table {
    border-collapse: collapse;
    width: 90%;
    max-width: 90%;
    border: 1px solid #ffd700;
    font-size: 12px; /* 调整字体大小 */
  }

  .custom-table th,
  .custom-table td {
    border: 1px solid #ffd700;
    padding: 4px; /* 增加单元格的内边距 */
    text-align: center;
    font-weight: normal;
    line-height: 1.3; /* 调整行高 */
  }

  .custom-table .custom-header {
    background-color: rgb(36, 109, 170);
    color: white;
    font-weight: bold;
    padding: 4px; /* 调整表头的内边距 */
  }

  .green-text {
    color: #388e3c;
    font-weight: bold;
  }
</style>
