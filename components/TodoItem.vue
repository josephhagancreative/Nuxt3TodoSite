<template>
  <div>
    <div class="flex justify-between items-center bg-white p-1 rounded-md">
      <p :class="{ toggled: todo.done }">{{ todo.task }}</p>
      <div class="flex gap-1">
        <span
          @click="handleToggle(todo.id)"
          style="color: white"
          class="material-symbols-outlined bg-green-500 hover:bg-green-400 iconBtn"
        >
          check
        </span>
        <span
          @click="handleRemove(todo.id)"
          style="color: white"
          class="material-symbols-outlined bg-red-500 hover:bg-red-400 iconBtn"
        >
          delete
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => ({}),
  },
})

import { useTodoStore } from "../store/todoStore"

const todoStore = useTodoStore()
const todo = props.todo

const handleToggle = (id: string) => {
  console.log("Toggled")
  todoStore.toggleDone(id)
}

const handleRemove = (id: string) => {
  todoStore.deleteTodo(todo.id)
}
</script>
