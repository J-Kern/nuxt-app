<script setup lang="ts">
const state = useState('state', () => false)
const toggle = () => state.value = !state.value
</script>

<template>
  <div
    :class="{ dark: state, light: !state }"
  >
    <main
      class="min-h-screen w-screen overflow-x-hidden scrollbar dark:bg-dark-800 bg-light-300"
      wd:transition="all duration-300"
      scrollbar="thumb-gray-900 track-gray-100"
    >
      <button
        @click="toggle"
        class="mx-4 my-2 px-2 py-1 dark:text-white text-black border dark:border-gray-200 border-gray-700 rounded-lg"
      >
        Toggle Theme to be <span class="dark:text-violet-400 text-purple-900">{{!state}}</span>
      </button>
      <NuxtPage />
    </main>
  </div>
</template>

