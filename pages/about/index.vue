<template>
  <div class="bg-white p-5 shadow-md rounded-md mx-5 text-center">
    <h2 class="text-2xl">{{ $t("aboutTitle") }}</h2>
    <div class="flex flex-col gap-5">
      <p class="mt-3">
        {{ $t("aboutTextOne") }}
      </p>
      <p>
        {{ $t("aboutTextTwo") }}
      </p>
      <p>{{ $t("aboutTextThree") }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
