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
        जनाब, फरमाइए।
      </h2>
    </div>

    <div class="flex flex-col justify-center items-center mt-10">
      <textarea
        name="content"
        id="content"
        cols="30"
        rows="10"
        class="textarea custom-shadow rounded-2xl pt-3 pl-2 pr-3 pb-2 text-lg text-gray-700 font-inter font-medium"
        placeholder="जनाब, फरमाइए।"
      ></textarea>
      <input
        list="options"
        id="category"
        name="category"
        placeholder="Please select a category"
        class="mt-7 custom-shadow rounded-2xl pt-3 pl-2 pr-3 pb-2 text-lg text-gray-700 font-inter font-medium textarea"
      />

      <datalist id="options">
        <option value="Romantic">Romantic</option>
        <option value="Sad">Sad</option>
        <option value="Funny">Funny</option>
        <option value="HeartBreak">HeartBreak</option>
        <option value="Social">Social</option>
        <option value="Philosophy">Philosophy</option>
        <option value="Motivation">Motivation</option>
        <option value="Politics">Politics</option>
        <option value="Devotional">Devotional</option>
        <option value="Message">Message</option>
      </datalist>
      <div
        class="w-60 h-14 flex flex-col items-center justify-center bg-purple-700 mt-10 rounded-xl button-shadow text-white text-2xl font-bold"
        @click="submit"
      >
        Post
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const redirect = () => {
      router.push({ name: 'home' })
    }
    return {
      redirect
    }
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
  outline: none;
}
.textarea {
  width: 90vw;
  resize: none;
}
.button-shadow {
  box-shadow:
    inset 5px 5px 10px #cbcbcb8b,
    inset -5px -5px 10px #cbcbcb8b;
}
</style>
