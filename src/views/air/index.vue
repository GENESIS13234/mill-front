<template>
  <PageWrapper contentFullHeight>
    <a-card>
      <a-row>
        <a-col :md="12">
          <EquipmentStatic />
        </a-col>
        <a-col :md="6">
          <OutputTable />
        </a-col>
        <a-col :md="6">
          <Suggest />
        </a-col>
      </a-row>
      <a-row>
        <a-col :md="12">
          <Image />
        </a-col>
        <a-col :md="6">
          <BarChart />
        </a-col>
        <a-col :md="6">
          <LineChart />
        </a-col>
      </a-row>
    </a-card>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { PageWrapper } from '/@/components/Page'
  import { Card, Row, Col } from 'ant-design-vue'
  import EquipmentStatic from './EquipmentStatic.vue'
  import OutputTable from './OutputTable.vue'
  import Suggest from './Suggest.vue'
  import Image from './Image.vue'
  import BarChart from './BarChart.vue'
  import LineChart from './LineChart.vue'

  const loading = ref<Boolean>(false)

  export default defineComponent({
    components: {
      PageWrapper,
      ACard: Card,
      EquipmentStatic,
      OutputTable,
      Suggest,
      ARow: Row,
      ACol: Col,
      Image,
      BarChart,
      LineChart,
    },
    setup() {
      return {
        loading,
      }
    },
  })
</script>
