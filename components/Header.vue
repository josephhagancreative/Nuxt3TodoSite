<template>
  <div class="flex-col center">
    <h1 class="text-green-500 font-bold text-2xl">
      Nuxt 3
      <span class="text-teal-800"> Todo App </span>
    </h1>
    <div class="flex gap-2 py-2">
      <NuxtLink to="/" class="hover:text-green-600">Home</NuxtLink>
      <p>|</p>
      <NuxtLink to="/about" class="hover:text-green-600">About</NuxtLink>
    </div>
  </div>
</template>
