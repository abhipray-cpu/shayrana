<template>
  <div
    class="w-44 h-44 rounded-xl flex flex-col items-center justify-center bg-purple-600 neumorph"
  >
    <img src="../assets/category/devotion.png" :alt="category" v-if="category === 'Devotional'" />
    <img src="../assets/category/heartbreak.png" :alt="category" v-if="category === 'Heartbreak'" />
    <img src="../assets/category/humour.png" :alt="category" v-if="category === 'Funny'" />
    <img src="../assets/category/message.png" :alt="category" v-if="category === 'Message'" />
    <img src="../assets/category/motivation.png" :alt="category" v-if="category === 'Motivation'" />
    <img src="../assets/category/philosphy.png" :alt="category" v-if="category === 'Philosophy'" />
    <img src="../assets/category/politics.png" :alt="category" v-if="category === 'Politics'" />
    <img src="../assets/category/romantic.png" :alt="category" v-if="category === 'Romantic'" />
    <img src="../assets/category/sad.png" :alt="category" v-if="category === 'Sad'" />
    <img src="../assets/category/social.png" :alt="category" v-if="category === 'Social'" />
    <h2 class="text-2xl font-irish-grover font-bold text-yellow-500 tracking-widest mt-2">
      {{ category }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ['category']
}
</script>

<style scoped>
.neumorph {
  box-shadow:
    inset 12px 12px 25px #bcbcbc71,
    inset -12px -12px 25px #bcbcbc71;
  transform: translateY(5px);
  transition: transform 0.3s ease;
}
</style>
