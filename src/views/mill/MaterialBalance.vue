<template>
  <div style="border: 1px solid #ddd; padding: 10px">
    <!-- 物料平衡标题 -->
    <h3 style="font-weight: bold; margin-bottom: 10px">物料平衡</h3>

    <!-- SVG 容器 -->
    <div
      style="
        width: 100%; /* 容器宽度 */
        max-width: 487px; /* 最大宽度与 SVG 的宽度一致 */
        height: auto; /* 高度自适应 */
        aspect-ratio: 487 / 487; /* 保持 SVG 的宽高比 */
        margin: 0 auto; /* 水平居中 */
        overflow: hidden; /* 防止 SVG 超出容器 */
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div
        v-html="svgHtml"
        style="
          width: 100%; /* SVG 宽度占满容器 */
          height: 100%; /* SVG 高度占满容器 */
          display: flex;
          align-items: center;
          justify-content: center;
        "
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue'
  import MaterialBalance from '/@/assets/svg/MaterialBalance.svg'

  export default defineComponent({
    setup() {
      const svgHtml = ref('')

      onMounted(async () => {
        try {
          const response = await fetch(MaterialBalance)
          if (response.ok) {
            svgHtml.value = await response.text()
            console.log('SVG loaded successfully:', svgHtml.value)
          } else {
            console.error('Failed to load SVG file:', response.status, response.statusText)
          }
        } catch (error) {
          console.error('Error loading SVG files', error)
        }
      })

      return {
        svgHtml,
      }
    },
  })
</script>
