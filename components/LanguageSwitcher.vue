<template>
  <div class="absolute right-10">
    <transition name="switch" mode="out-in">
      <div v-if="lang === 'ja-JP'" class="">
        <button
          class="w-7 cursor-pointer shadow-md rounded-full overflow-hidden"
          @click="switchLocale"
        >
          <img src="~/assets/images/jpFlag.png" alt="jp flag" />
        </button>
      </div>
      <div v-else>
        <button
          class="w-7 cursor-pointer shadow-md rounded-full overflow-hidden"
          @click="switchLocale"
        >
          <img src="~/assets/images/ukFlag.png" alt="uk flag" />
        </button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
let { locale } = useI18n()
import { useTodoStore } from "../store/todoStore"

const todoStore = useTodoStore()
const { lang } = storeToRefs(todoStore)

const switchLocale = () => {
  todoStore.toggleLang()
  locale.value = lang.value
}
</script>

<style>
.switch-enter-from {
  transform: translateY(-50%);
}
.switch-leave-to {
  transform: translateY(50%);
}

.switch-enter-active {
  transition: all 0.2s ease;
}
.switch-leave-active {
  transition: all 0.2s ease;
}
</style>
