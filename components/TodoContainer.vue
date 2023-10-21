<template>
  <div class="bg-slate-100 mt-3 pb-2 rounded-md">
    <transition name="switch" mode="out-in">
      <div v-if="todos.length" class="relative">
        <div class="absolute top-1 right-1 gap-1">
          <span
            @click="chronologicalSortHandler"
            style="color: rgb(8, 108, 108)"
            class="material-symbols-outlined cursor-pointer"
          >
            swap_vert
          </span>
          <span
            @click="alphabeticalSortHandler"
            style="color: rgb(28, 135, 135)"
            class="material-symbols-outlined cursor-pointer"
          >
            sort_by_alpha
          </span>
        </div>
        <h3 class="text-center text-lg text-teal-900 font-bold py-2">Todos:</h3>
        <transition-group tag="ul" name="list" appear>
          <div
            class="flex flex-col px-2 py-1"
            v-for="item in todos"
            :key="item.id"
          >
            <TodoItem :todo="item" />
          </div>
        </transition-group>
      </div>
      <div v-else class="center p-2">
        <p class="text-center text-sm font-bold">Nothing to do, let's relax!</p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../store/todoStore"

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

const chronologicalSortHandler = () => {
  console.log("chrono")
  todoStore.chronologicalSort()
}
const alphabeticalSortHandler = () => {
  console.log("alpha")
  todoStore.alphabeticalSort()
}
</script>

<style>
/* animations アニメート */
.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-active {
  transition: all 0.3s ease;
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.4s ease;
  position: absolute;
}
.list-move {
  transition: all 0.3s ease;
}

.switch-enter-from,
.switch-leave-to {
  opacity: 0;
}
.switch-enter-active {
  transition: all 0.2s ease;
}
.switch-leave-active {
  transition: all 0.2s ease;
}
</style>
