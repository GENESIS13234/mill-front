<template>
  <a-card title="设备静态图">
    <a-row>
      <a-col :md="12"><div v-html="svgHtml"></div></a-col>
      <a-col :md="12"
        ><a-table :columns="tableSchema" :dataSource="tableData" :pagination="false" bordered
      /></a-col>
    </a-row>
  </a-card>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { Card, Row, Col, Table } from 'ant-design-vue'
  import illustration from '/@/assets/svg/illustration.svg'

  const loading = ref<Boolean>(false)

  const tableSchema = [
    {
      title: '指标名称',
      width: 150,
      dataIndex: 'name',
    },
    {
      title: '实际值',
      width: 150,
      dataIndex: 'value',
    },
  ]

  const tableData = ref<any>([])
  const svgHtml = ref('')

  export default defineComponent({
    components: {
      ACard: Card,
      ARow: Row,
      ACol: Col,
      ATable: Table,
    },
    setup() {
      onMounted(async () => {
        const response = await fetch(illustration)
        if (response.ok) {
          const svgContent = await response.text()
          svgHtml.value = svgContent
        } else {
          console.error('Failed to load SVG file')
        }
      })

      tableData.value = [
        {
          name: '机组负荷(MW)',
          value: '628.95',
        },
        {
          name: '主蒸汽压力(MPa)',
          value: '17.77',
        },
        {
          name: '主蒸汽温度(℃)',
          value: '599.37',
        },
        {
          name: '主蒸汽流量(t/h)',
          value: '1691.95',
        },
        {
          name: '再热器出口蒸汽温度1(℃)',
          value: '599.18',
        },
        {
          name: '再热器出口蒸汽温度2(℃)',
          value: '597.46',
        },
      ]
      return {
        loading,
        tableSchema,
        tableData,
        svgHtml,
      }
    },
  })</script
>./Table.vue
