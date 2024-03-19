<template>
  <div class="w-screen min-h-screen top-0 left-0 m-0 pt-0 bg-purple-300">
    <div class="bg-transparent w-screen h-20 header flex flex-row justify-between items-center">
      <h2 class="ml-3 text-3xl text-yellow-600 font-irish-grover font-bold">Shayrana</h2>
      <img
        src="../assets/profile/Frame 41.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 0"
      />
      <img
        src="../assets/profile/Frame 42.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 1"
      />
      <img
        src="../assets/profile/Frame 43.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 2"
      />
      <img
        src="../assets/profile/Frame 44.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 3"
      />
      <img
        src="../assets/profile/Frame 45.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 4"
      />
      <img
        src="../assets/profile/Frame 46.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 5"
      />
      <img
        src="../assets/profile/Frame 47.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 6"
      />
      <img
        src="../assets/profile/Frame 48.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 7"
      />
      <img
        src="../assets/profile/Frame 49.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 8"
      />
      <img
        src="../assets/profile/Frame 50.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 9"
      />
      <img
        src="../assets/profile/Frame 51.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 10"
      />
      <img
        src="../assets/profile/Frame 52.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 11"
      />
      <img
        src="../assets/profile/Frame 53.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 12"
      />
      <img
        src="../assets/profile/Frame 54.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 13"
      />
      <img
        src="../assets/profile/Frame 55.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 14"
      />
      <img
        src="../assets/profile/Frame 56.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 15"
      />
      <img
        src="../assets/profile/Frame 57.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 16"
      />
      <img
        src="../assets/profile/Frame 58.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 17"
      />
      <img
        src="../assets/profile/Frame 59.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 18"
      />
      <img
        src="../assets/profile/Frame 60.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 19"
      />
      <img
        src="../assets/profile/Frame 61.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 20"
      />
      <img
        src="../assets/profile/Frame 62.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 21"
      />
      <img
        src="../assets/profile/Frame 63.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 22"
      />
      <img
        src="../assets/profile/Frame 64.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 23"
      />
      <img
        src="../assets/profile/Frame 65.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 24"
      />
      <img
        src="../assets/profile/Frame 66.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 25"
      />
      <img
        src="../assets/profile/Frame 67.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 26"
      />
      <img
        src="../assets/profile/Frame 68.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 27"
      />
      <img
        src="../assets/profile/Frame 69.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 28"
      />
      <img
        src="../assets/profile/Frame 70.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 29"
      />
      <img
        src="../assets/profile/Frame 71.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 30"
      />
      <img
        src="../assets/profile/Frame 72.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 31"
      />
      <img
        src="../assets/profile/Frame 73.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 32"
      />
      <img
        src="../assets/profile/Frame 74.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 33"
      />
      <img
        src="../assets/profile/Frame 75.png"
        alt="username"
        class="w-12 h-12 rounded-full mr-4"
        v-if="Current === 34"
      />
    </div>

    <div class="w-screen grid grid-cols-2 gap-3 pl-3 pr-3 mt-6 pb-5">
      <category-card category="Romantic"></category-card>
      <category-card category="Sad"></category-card>
      <category-card category="Funny"></category-card>
      <category-card category="Heartbreak"></category-card>
      <category-card category="Social"></category-card>
      <category-card category="Philosophy"></category-card>
      <category-card category="Motivation"></category-card>
      <category-card category="Politics"></category-card>
      <category-card category="Devotional"></category-card>
      <category-card category="Message"></category-card>
    </div>

    <bottom-navigation></bottom-navigation>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { onMounted, ref, computed } from 'vue'
import { isTokenValid } from '../utils/authorization'
import CategoryCard from '../components/Category-Card.vue'
import BottomNavigation from '../components/Nav-Comp.vue'
export default {
  components: { CategoryCard, BottomNavigation },
  setup() {
    const current = ref(0)
    const Current = computed(() => {
      return current.value
    })
    const router = useRouter()
    onMounted(() => {
      if (!isTokenValid()) router.push({ name: 'login' })
    })
    return {
      Current
    }
  }
}
</script>

<style scoped>
.header {
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.086);
  /*
  box-shadow:
    12px 12px 16px 0 rgba(0, 0, 0, 0.25),
    -8px -8px 12px 0 rgba(255, 255, 255, 0.3);
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.22), rgba(255, 255, 255, 0.25));
 */
}
</style>
