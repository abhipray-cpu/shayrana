<template>
  <div class="w-screen min-h-screen top-0 left-0 m-0 pt-3 bg-purple-300">
    <div class="flex flex-col items-center justify-center">
      <img src="../assets/logo.png" alt="Shayrana" class="mb-2 w-80 h-50" />
      <h3 class="text-5xl text-yellow-500 font-bold -mt-9 font-irish-grover tracking-wider">
        Shayrana
      </h3>
    </div>

    <!--form section-->
    <div class="mt-16 flex flex-col items-center justify-center w-screen">
      <input
        type="text"
        class="w-90vw h-14 mb-8 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
        placeholder="email"
        v-model="email"
      />
      <input
        type="password"
        class="w-90vw h-14 mb-6 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-700"
        placeholder="password"
        v-model="password"
      />
      <div
        class="w-60 h-16 flex flex-col items-center justify-center bg-purple-700 mt-6 rounded-xl button-shadow text-white text-2xl font-bold"
        @click="submit"
      >
        Login
      </div>

      <span class="absolute bottom-10 text-white text-lg font-cursive"
        >Don't have an account? <strong class="text-2xl" @click="redirect">Signup</strong>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    redirect() {
      this.$router.push({ name: 'signup' })
    },
    submit() {}
  }
}
</script>

<style scoped>
.custom-shadow {
  box-shadow:
    inset 2px 2px 6px #b1b1b1,
    inset -2px -2px 6px #ffffff;
}
.custom-shadow:focus {
  box-shadow:
    inset 2px 2px 6px #b1b1b1,
    inset -2px -2px 6px #ffffff;
  border: 1px solid rgb(207, 207, 8);
}
.button-shadow {
  box-shadow:
    inset 5px 5px 10px #cbcbcb8b,
    inset -5px -5px 10px #cbcbcb8b;
}
</style>
