<template>
  <div class="w-screen h-auto min-h-screen bg-white">
    <svg
      fill="#7600d6"
      width="100px"
      height="100px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#7600d6"
      class="ml-3 mt-5 w-8 h-8"
      @click="redirect"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
        ></path>
      </g>
    </svg>

    <div class="w-screen flex flex-col items-center justify-center">
      <h2 class="text-3xl font-medium font-inter text-gray-600 tracking-wider -mt-9">
        {{ category }}
      </h2>
    </div>

    <div
      class="mt-8 w-screen flex flex-col items-center justify-center overflow-y-auto shayari-container"
    >
      <shayari-card
        v-for="(shayari, index) in Shayari"
        :key="index"
        :content="shayari.content"
        :by="shayari.by"
        :likes="shayari.likes"
        :dislike="shayari.dislikes"
      ></shayari-card>
    </div>
    <modal-comp :type="Type" v-if="Modal"></modal-comp>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import ShayariCard from '../components/Shayari-Card.vue'
import ModalComp from '../components/Modal-Comp.vue'
export default {
  components: {
    ShayariCard,
    ModalComp
  },
  setup() {
    const category = ref('')
    const shayari = ref([])
    const route = useRoute()
    const router = useRouter()
    const type = ref('loader')
    const modal = ref(false)
    const Type = computed(() => {
      return type.value
    })
    const Modal = computed(() => {
      return modal.value
    })
    const Shayari = computed(() => {
      return shayari.value
    })
    const store = useStore()
    onMounted(async () => {
      category.value = route.params.category
      type.value = 'loader'
      modal.value = true
      const data = await store.dispatch('getShayari', { value: category.value })
      modal.value = false
      if (data.error) {
        type.value = 'error'
        modal.value = true
        setTimeout(() => {
          modal.value = false
        }, 1500)
      }
      shayari.value = data.result
    })
    const redirect = () => {
      router.push({ name: 'home' })
    }

    return {
      category,
      redirect,
      Type,
      Modal,
      Shayari
    }
  }
}
</script>

<style scoped>
.shayari-container::webkit-scrollbar {
  display: none;
}
</style>
