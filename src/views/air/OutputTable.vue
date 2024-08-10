<template>
  <a-card title="输出参数"
    ><a-table :columns="tableSchema" :dataSource="tableData" :pagination="false" bordered />
  </a-card>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import { Card, Row, Col, Table } from 'ant-design-vue'

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
    {
      title: '模型计算',
      width: 150,
      dataIndex: 'calculate',
    },
  ]

  const tableData = ref<any>([])

  export default defineComponent({
    components: {
      ACard: Card,
      ATable: Table,
    },
    setup() {
      tableData.value = [
        {
          name: '高压缸效率(%)',
          value: 628.95,
          calculate: 85.92,
        },
        {
          name: '高压缸做功量(MW)',
          value: 209.95,
          calculate: 85.92,
        },
        {
          name: '中压缸效率(%)',
          value: 628.95,
          calculate: 85.92,
        },
        {
          name: '中压缸做功量(MW)',
          value: 628.95,
          calculate: 85.92,
        },
        {
          name: '低压缸效率(%)',
          value: 628.95,
          calculate: 85.92,
        },
        {
          name: '低压缸做功量(MW)',
          value: 628.95,
          calculate: 85.92,
        },
      ]
      return {
        loading,
        tableSchema,
        tableData,
      }
    },
  })</script
>./Table.vue
