<template>
  <div
    class="fixed top-52 w-[90vw] ml-5 mr-5 rounded-xl flex flex-col items-center justify-center shadow"
  >
    <Vue3Lottie :animationData="Source" :height="300" :width="300" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import LoaderJSON from '../assets/lottie/loader.json'
import ErrorJSON from '../assets/lottie/error.json'
export default {
  components: { Vue3Lottie },
  props: ['type'],
  data() {
    return {
      source: [LoaderJSON, ErrorJSON]
    }
  },
  computed: {
    Source() {
      if (this.type === 'error') {
        return this.source[1]
      }
      return this.source[0]
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow:
    inset 12px 12px 25px #bcbcbc34,
    inset -12px -12px 25px #bcbcbc34;
}
</style>
