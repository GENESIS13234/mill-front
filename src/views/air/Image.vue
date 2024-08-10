<template>
  <a-card title="汽轮机本体设备镜像">
    <div v-html="svgHtml" style="width: 680px"></div>
  </a-card>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import { Card } from 'ant-design-vue'
  import illustration from '/@/assets/svg/illustration.svg'

  const svgHtml = ref('')

  export default defineComponent({
    components: {
      ACard: Card,
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
      return {
        svgHtml,
      }
    },
  })</script
>./Table.vue
