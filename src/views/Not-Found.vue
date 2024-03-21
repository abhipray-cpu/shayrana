<template>
  <div class="w-screen h-screen flex flex-col items-center justify-center">
    <Vue3Lottie :animationData="source" :height="300" :width="300" />
  </div>
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import { ref } from 'vue'
import NetworkJSON from '../assets/lottie/network.json'
export default {
  composition: { Vue3Lottie },
  setup() {
    const source = ref(NetworkJSON)
    return {
      source
    }
  }
}
</script>
