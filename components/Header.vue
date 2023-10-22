<template>
  <div class="flex-col center">
    <LanguageSwitcher />
    <h1 class="text-green-500 font-bold text-2xl">
      Nuxt 3
      <span class="text-teal-800"> Todo App </span>
    </h1>
    <div class="flex gap-2 py-2">
      <NuxtLink to="/" class="hover:text-green-600">{{ $t("home") }}</NuxtLink>
      <p>|</p>
      <NuxtLink to="/about" class="hover:text-green-600">{{
        $t("about")
      }}</NuxtLink>
    </div>
  </div>
</template>
