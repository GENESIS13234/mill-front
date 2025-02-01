<template>
  <div style="border: 1px solid #ddd; overflow: auto; max-height: 200px">
    <table class="performance-table">
      <thead>
        <tr>
          <th colspan="6" class="table-title">磨煤机关键性能检测</th>
        </tr>
        <tr>
          <th>参数</th>
          <th>风煤比</th>
          <th>电机功率(KW)</th>
          <th>单耗(KW.h/t)</th>
          <th>一次风管阻力(Pa)</th>
          <th>通风阻力(KPa)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>数值</td>
          <td class="green-text">4.78</td>
          <td class="green-text">414.69</td>
          <td class="green-text">12.66</td>
          <td class="green-text">1927.92</td>
          <td class="green-text">2.47</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  .performance-table {
    border-collapse: separate; /* 修改为 separate */
    width: 100%;
    font-weight: bold;
    text-align: center;
    border-spacing: 0; /* 移除单元格之间的间距 */
  }

  .performance-table th,
  .performance-table td {
    border: 0.5px solid #ddd;
    padding: 8px;
    text-align: center;
  }

  .table-title {
    background-color: rgb(36, 109, 170);
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 12px;
  }

  .green-text {
    color: #388e3c;
    font-weight: bold;
  }
</style>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({})
</script>
