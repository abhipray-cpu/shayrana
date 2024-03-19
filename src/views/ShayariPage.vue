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
      <h2 class="text-3xl font-medium font-inter text-gray-600 tracking-wider -mt-7">
        {{ category }}
      </h2>
    </div>

    <div
      class="mt-8 w-screen flex flex-col items-center justify-center overflow-y-auto shayari-container"
    >
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
      <shayari-card
        content="This is the content of shayari"
        by="Abhipray"
        likes="10"
        dislike="0"
      ></shayari-card>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import ShayariCard from '../components/Shayari-Card.vue'
export default {
  components: {
    ShayariCard
  },
  setup() {
    const category = ref('')
    const route = useRoute()
    const router = useRouter()
    onMounted(() => {
      category.value = route.params.category
    })
    const redirect = () => {
      router.push({ name: 'home' })
    }
    return {
      category,
      redirect
    }
  }
}
</script>

<style scoped>
.shayari-container::webkit-scrollbar {
  display: none;
}
</style>
