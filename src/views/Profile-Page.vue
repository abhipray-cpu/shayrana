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
      <img
        src="../assets/profile/Frame 41.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 0"
      />
      <img
        src="../assets/profile/Frame 42.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 1"
      />
      <img
        src="../assets/profile/Frame 43.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 2"
      />
      <img
        src="../assets/profile/Frame 44.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 3"
      />
      <img
        src="../assets/profile/Frame 45.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 4"
      />
      <img
        src="../assets/profile/Frame 46.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 5"
      />
      <img
        src="../assets/profile/Frame 47.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 6"
      />
      <img
        src="../assets/profile/Frame 48.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 7"
      />
      <img
        src="../assets/profile/Frame 49.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 8"
      />
      <img
        src="../assets/profile/Frame 50.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 9"
      />
      <img
        src="../assets/profile/Frame 51.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 10"
      />
      <img
        src="../assets/profile/Frame 52.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 11"
      />
      <img
        src="../assets/profile/Frame 53.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 12"
      />
      <img
        src="../assets/profile/Frame 54.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 13"
      />
      <img
        src="../assets/profile/Frame 55.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 14"
      />
      <img
        src="../assets/profile/Frame 56.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 15"
      />
      <img
        src="../assets/profile/Frame 57.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 16"
      />
      <img
        src="../assets/profile/Frame 58.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 17"
      />
      <img
        src="../assets/profile/Frame 59.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 18"
      />
      <img
        src="../assets/profile/Frame 60.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 19"
      />
      <img
        src="../assets/profile/Frame 61.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 20"
      />
      <img
        src="../assets/profile/Frame 62.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 21"
      />
      <img
        src="../assets/profile/Frame 63.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 22"
      />
      <img
        src="../assets/profile/Frame 64.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 23"
      />
      <img
        src="../assets/profile/Frame 65.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 24"
      />
      <img
        src="../assets/profile/Frame 66.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 25"
      />
      <img
        src="../assets/profile/Frame 67.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 26"
      />
      <img
        src="../assets/profile/Frame 68.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 27"
      />
      <img
        src="../assets/profile/Frame 69.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 28"
      />
      <img
        src="../assets/profile/Frame 70.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 29"
      />
      <img
        src="../assets/profile/Frame 71.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 30"
      />
      <img
        src="../assets/profile/Frame 72.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 31"
      />
      <img
        src="../assets/profile/Frame 73.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 32"
      />
      <img
        src="../assets/profile/Frame 74.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 33"
      />
      <img
        src="../assets/profile/Frame 75.png"
        :alt="userName"
        class="w-38 h-38 rounded-full"
        v-if="id == 34"
      />

      <h2 class="mt-2 text-2xl text-gray-600 font-inter font-medium">{{ userName }}</h2>
      <div class="mt-7 flex flex-row items-center justify-center gap-14">
        <h3
          :class="
            Select == 0
              ? 'text-xl  text-purple-500 font-inter font-medium'
              : 'text-lg text-gray-700 font-inter font-normal'
          "
          @click="fetch(0)"
        >
          Your Shayaris
        </h3>
        <h3
          :class="
            Select == 1
              ? 'text-xl  text-purple-500 font-inter font-medium'
              : 'text-lg text-gray-700 font-inter font-normal'
          "
          @click="fetch(1)"
        >
          Likes Shayaris
        </h3>
      </div>

      <div class="w-screen mt-6 flex flex-col items-center justify-center">
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
        <shayari-card
          content="This is the content of shayari"
          by="Abhipray"
          liked="10"
          dislike="0"
        ></shayari-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import ShayariCard from '../components/Shayari-Card.vue'
export default {
  components: { ShayariCard },
  setup() {
    const router = useRouter()
    const userName = ref('Puttanpal')
    const id = ref(0)
    const select = ref(0)
    const Select = computed(() => {
      return select.value
    })
    const redirect = () => {
      router.push({ name: 'home' })
    }
    const fetch = (value) => {
      select.value = value
    }
    return {
      redirect,
      userName,
      id,
      Select,
      fetch
    }
  }
}
</script>
