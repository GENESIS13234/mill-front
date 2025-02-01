<template>
  <!-- 最外层容器，添加边框，并去掉内边距的限制 -->
  <div style="border: 2px solid rgb(36, 109, 170); box-sizing: border-box; padding: 0">
    <!-- 顶部横条 -->
    <div style="background-color: rgb(36, 109, 170)">
      <h2
        style="
          color: white;
          margin: 0;
          font-weight: bold;
          font-size: 20px;
          text-align: center;
          padding: 4px;
        "
        >#3机组磨煤机</h2
      >
    </div>

    <!-- 主要内容区域 -->
    <PageWrapper contentFullHeight style="padding: 0">
      <a-card :bordered="false" style="box-shadow: none; padding: 0">
        <a-row :gutter="8" style="padding: 2px">
          <!-- 减小列间距，增加内边距 -->
          <!-- 左边列：占 6 份 -->
          <a-col :span="6">
            <a-row :gutter="[0, 8]">
              <!-- 增加行间距 -->
              <a-col :span="24">
                <EquipmentStatic />
              </a-col>
            </a-row>
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <Operation />
              </a-col>
            </a-row>
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <Operation2 />
              </a-col>
            </a-row>
          </a-col>

          <!-- 中间列：占 12 份 -->
          <a-col :span="12">
            <!-- 中上大框架 -->
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <div style="border: 1px solid #ddd">
                  <div style="max-width: 100%; overflow: hidden"> <Image /></div>
                </div>
              </a-col>
            </a-row>

            <!-- 中间两个相连横向并列的框架 -->
            <a-row :gutter="8">
              <a-col :span="12">
                <Resistance />
              </a-col>
              <a-col :span="12">
                <LineChart />
              </a-col>
            </a-row>
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <PerformanceTable />
              </a-col>
            </a-row>
          </a-col>

          <!-- 右边列：占 6 份 -->
          <a-col :span="6">
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <MaterialBalance />
              </a-col>
            </a-row>
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <BarChart />
              </a-col>
            </a-row>
            <a-row :gutter="[0, 8]">
              <a-col :span="24">
                <Circulation />
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-card>
    </PageWrapper>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { PageWrapper } from '/@/components/Page'
  import { Card, Row, Col } from 'ant-design-vue'
  import EquipmentStatic from './EquipmentStatic.vue'
  import Image from './Image.vue'
  import Operation from './Operation.vue'
  import Operation2 from './Operation2.vue'
  import LineChart from './LineChart.vue'
  import PerformanceTable from './PerformanceTable.vue'
  import MaterialBalance from './MaterialBalance.vue' // 确保组件已引入
  import Resistance from './Resistance.vue'
  import BarChart from './BarChart.vue'
  import Circulation from './Circulation.vue'

  const loading = ref<Boolean>(false)

  export default defineComponent({
    components: {
      PageWrapper,
      ACard: Card,
      EquipmentStatic,
      ARow: Row,
      ACol: Col,
      Image,
      Resistance,
      LineChart,
      PerformanceTable,
      MaterialBalance,
      Operation,
      Operation2,
      BarChart,
      Circulation, // 确保组件已注册
    },
    setup() {
      return {
        loading,
      }
    },
  })
</script>
