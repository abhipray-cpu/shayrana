<template>
  <div class="w-screen min-h-screen h-auto top-0 left-0 m-0 pt-3 bg-purple-300">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      style="font-size: 22px; color: white"
      class="w-12 h-12 mt-1 ml-1"
      @click="redirect"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
    <div class="flex items-center justify-center">
      <h2 class="text-3xl text-white font-medium self-center -mt-11">Create Account</h2>
    </div>

    <div class="w-100 pl-4 pr-4 mt-12 flex flex-row overflow-x-auto gap-2 scroll">
      <img
        src="../assets/profile/Frame 41.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 0 ? 'selected' : ''"
        @click="set(0)"
      />
      <img
        src="../assets/profile/Frame 42.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 1 ? 'selected' : ''"
        @click="set(1)"
      />
      <img
        src="../assets/profile/Frame 43.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 2 ? 'selected' : ''"
        @click="set(2)"
      />
      <img
        src="../assets/profile/Frame 44.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 3 ? 'selected' : ''"
        @click="set(3)"
      />
      <img
        src="../assets/profile/Frame 45.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 4 ? 'selected' : ''"
        @click="set(4)"
      />
      <img
        src="../assets/profile/Frame 46.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 5 ? 'selected' : ''"
        @click="set(5)"
      />
      <img
        src="../assets/profile/Frame 47.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 6 ? 'selected' : ''"
        @click="set(6)"
      />
      <img
        src="../assets/profile/Frame 48.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 7 ? 'selected' : ''"
        @click="set(7)"
      />
      <img
        src="../assets/profile/Frame 49.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 8 ? 'selected' : ''"
        @click="set(8)"
      />
      <img
        src="../assets/profile/Frame 50.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 9 ? 'selected' : ''"
        @click="set(9)"
      />
      <img
        src="../assets/profile/Frame 51.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 10 ? 'selected' : ''"
        @click="set(10)"
      />
      <img
        src="../assets/profile/Frame 52.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 11 ? 'selected' : ''"
        @click="set(11)"
      />
      <img
        src="../assets/profile/Frame 53.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 12 ? 'selected' : ''"
        @click="set(12)"
      />
      <img
        src="../assets/profile/Frame 45.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 13 ? 'selected' : ''"
        @click="set(13)"
      />
      <img
        src="../assets/profile/Frame 55.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 14 ? 'selected' : ''"
        @click="set(14)"
      />
      <img
        src="../assets/profile/Frame 56.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 15 ? 'selected' : ''"
        @click="set(15)"
      />
      <img
        src="../assets/profile/Frame 57.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 16 ? 'selected' : ''"
        @click="set(16)"
      />
      <img
        src="../assets/profile/Frame 58.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 17 ? 'selected' : ''"
        @click="set(17)"
      />
      <img
        src="../assets/profile/Frame 59.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 18 ? 'selected' : ''"
        @click="set(18)"
      />
      <img
        src="../assets/profile/Frame 60.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 19 ? 'selected' : ''"
        @click="set(19)"
      />
      <img
        src="../assets/profile/Frame 61.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 20 ? 'selected' : ''"
        @click="set(20)"
      />
      <img
        src="../assets/profile/Frame 62.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 21 ? 'selected' : ''"
        @click="set(21)"
      />
      <img
        src="../assets/profile/Frame 63.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 22 ? 'selected' : ''"
        @click="set(22)"
      />
      <img
        src="../assets/profile/Frame 64.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 23 ? 'selected' : ''"
        @click="set(23)"
      />
      <img
        src="../assets/profile/Frame 65.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 24 ? 'selected' : ''"
        @click="set(24)"
      />
      <img
        src="../assets/profile/Frame 66.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 25 ? 'selected' : ''"
        @click="set(25)"
      />
      <img
        src="../assets/profile/Frame 67.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 26 ? 'selected' : ''"
        @click="set(26)"
      />
      <img
        src="../assets/profile/Frame 68.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 27 ? 'selected' : ''"
        @click="set(27)"
      />
      <img
        src="../assets/profile/Frame 69.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 28 ? 'selected' : ''"
        @click="set(28)"
      />
      <img
        src="../assets/profile/Frame 70.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 29 ? 'selected' : ''"
        @click="set(29)"
      />
      <img
        src="../assets/profile/Frame 71.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 30 ? 'selected' : ''"
        @click="set(30)"
      />
      <img
        src="../assets/profile/Frame 72.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 31 ? 'selected' : ''"
        @click="set(31)"
      />
      <img
        src="../assets/profile/Frame 73.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 32 ? 'selected' : ''"
        @click="set(32)"
      />
      <img
        src="../assets/profile/Frame 74.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 33 ? 'selected' : ''"
        @click="set(33)"
      />
      <img
        src="../assets/profile/Frame 75.png"
        alt="Avatar"
        class="w-20 h-20 rounded-full flex-shrink-0"
        :class="Selected == 34 ? 'selected' : ''"
        @click="set(34)"
      />
    </div>

    <div class="mt-10 flex flex-col items-center justify-center w-screen">
      <input
        type="text"
        class="w-90vw h-14 mb-8 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
        placeholder="Name"
        v-model="name"
      />
      <input
        type="text"
        class="w-90vw h-14 mb-8 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
        placeholder="Email"
        v-model="email"
      />
      <input
        type="password"
        class="w-90vw h-14 mb-8 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
        placeholder="Password"
        v-model="password"
      />
      <input
        type="password"
        class="w-90vw h-14 mb-8 p-4 bg-purple-100 rounded-2xl custom-shadow focus:outline-none focus:ring-1 focus:ring-yellow-300 text-xl text-gray-600"
        placeholder="Confirm Password"
        v-model="confirm"
      />
      <div
        class="w-60 h-16 flex flex-col items-center justify-center bg-purple-700 mt-8 rounded-xl button-shadow text-white text-2xl font-bold"
        @click="submit"
      >
        Signup
      </div>
      <span class="fixed bottom-2 text-white text-lg font-cursive"
        >Already have an account? <strong class="text-2xl" @click="redirect">Login</strong>
      </span>
    </div>
    <modal-comp :type="Type" v-if="Modal"></modal-comp>
  </div>
</template>

<script>
import ModalComp from '../components/Modal-Comp.vue'
import { isTokenValid } from '../utils/authorization'
export default {
  components: { ModalComp },
  data() {
    return {
      selected: 0,
      name: '',
      email: '',
      password: '',
      confirm: '',
      type: '',
      modal: false
    }
  },
  computed: {
    Selected() {
      return this.selected
    },
    Modal() {
      return this.modal
    },
    Type() {
      return this.type
    }
  },
  methods: {
    set(val) {
      this.selected = val
    },
    redirect() {
      this.$router.push({ name: 'login' })
    },
    async submit() {
      // validation
      if (this.name === '' || this.email === '' || this.password === '' || this.confirm === '') {
        alert('Please fill all details')
        return
      }
      if (this.password.length < 8) {
        alert('Password must be at least 8 characters')
      }
      if (this.password !== this.confirm) {
        alert('Password do not match')
        return
      }
      this.type = 'loader'
      this.modal = true
      const data = await this.$store.dispatch('signup', {
        name: this.name,
        email: this.email,
        password: this.password,
        dp: this.selected
      })
      this.modal = false
      if (data.error) {
        this.type = 'error'
        this.modal = true
        setTimeout(() => {
          this.modal = false
        }, 1500)
      } else if (data.result) {
        this.$router.push({ name: 'login' })
      }
    }
  },
  mounted() {
    if (isTokenValid()) this.$router.push({ name: 'home' })
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
.selected {
  border: 2px solid rgb(136, 4, 136);
}
.scroll::-webkit-scrollbar {
  display: none;
}
</style>
